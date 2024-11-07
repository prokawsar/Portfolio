import { browser } from '$app/environment';
import { slug } from 'github-slugger';
import { user } from '$lib/config';
import { marked } from 'marked';
import type { Blog } from './constants';

// we require some server-side APIs to parse all metadata
if (browser) {
	throw new Error(`apps can only be imported server-side`);
}

// we have to have separate functions for this because Vite only accepts literal strings for import.meta.glob
const getPosts = () => {
	return Object.entries(import.meta.glob('/content/posts/**/*.md', { eager: true, as: 'raw' }));
};

const getIssues = () => {
	return Object.entries(import.meta.glob('/content/issues/issues.json', { eager: true }));
};

const getProjects = () => {
	return Object.entries(import.meta.glob('/content/projects/*.md', { eager: true, as: 'raw' }));
};

const getEntriesByType = (entryType: string) => {
	switch (entryType) {
		case 'posts':
			return getPosts();
		case 'projects':
			return getProjects();
		default:
			throw new Error(`unknown entry type ${entryType}`);
	}
};

const parseMdFile = (rawContent: string) => {
	const frontMatterRegex = /---\r?\n([\s\S]*?)\r?\n---/;
	const match = frontMatterRegex.exec(rawContent);

	if (!match) {
		throw new Error('Invalid frontmatter');
	}

	try {
		const frontMatter = match[1];
		const metadata = Object.fromEntries(
			frontMatter
				.split('\n')
				.map((line) => line.split(': ').map((part) => part.trim()))
				.filter((parts) => parts.length === 2)
				.map(([key, value]) => {
					// Parse arrays in frontmatter (e.g., tags: [tag1, tag2])
					if (value.startsWith('[') && value.endsWith(']')) {
						return [
							key,
							value
								.slice(1, -1)
								.split(',')
								.map((item) => item.trim())
						];
					}
					// Remove quotes if present
					return [key, value.replace(/^["'](.*)["']$/, '$1')];
				})
		);

		// Get content after frontmatter
		const content = rawContent.replace(frontMatterRegex, '').trim();

		// Parse markdown content
		const renderedContent = marked(content);
		return { metadata, content: renderedContent };
	} catch (error) {
		console.error('Error parsing markdown file:', error);
		throw error;
	}
};

const getMetadata = (filepath: string, rawContent: string) => {
	const { metadata, content } = parseMdFile(rawContent);

	return {
		...metadata,

		author: user.name,
		content,
		// generate the slug from the file path
		slug: filepath
			.replace(/(\/index)?\.md/, '')
			.split('/')
			.pop(),

		youtube:
			metadata.video ??
			metadata.video?.replace(/(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)(\.com)?\/(watch\?v=)?/, ''),

		tag: metadata?.type?.split(' ').shift().toLowerCase() || null,
		tags: metadata?.tags || []

		// whether or not this file is `my-post.md` or `my-post/index.md`
		// (needed to do correct dynamic import in posts/[slug].svelte)
		// isIndexFile: filepath.endsWith('/index.md')
	};
};

// Get all entries and add metadata
export const getEntries = (entryType: string) => {
	const entries = getEntriesByType(entryType);
	const processedEntries = entries.map(([filepath, rawContent]) =>
		getMetadata(filepath, rawContent as string)
	);

	return processedEntries
		.sort((a, b) => (a.date < b.date ? 1 : -1))
		.map((entry, index, allEntries) => ({
			...entry,
			next: allEntries[index - 1],
			prev: allEntries[index + 1]
		}));
};

interface Tag {
	text: string;
	slug: string;
	count: number;
}

export const getTags = async () => {
	const posts = (await getEntries('posts')) as Blog[];
	let tags = posts
		.flatMap(({ tags }) => tags)
		.map((tag) => ({ text: tag, slug: slug(tag) }))
		.reduce((arr: Tag[], tag) => {
			let index = arr.findIndex((t) => t.slug === tag.slug);
			if (index > -1) arr[index].count++;
			else arr.push({ text: tag.text, slug: tag.slug, count: 1 });
			return arr;
		}, [])
		.sort((a, b) => (b.text < a.text ? 1 : -1));

	return tags;
};
