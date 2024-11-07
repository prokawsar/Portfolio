export const prerender = true;
export const ssr = true;

import type { Blog } from '$utils/constants';
import { getEntries } from '$utils/entries';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const posts: Blog[] = (await getEntries('posts')) as Blog[];
	if (!posts) {
		throw error(404, 'No post found');
	}

	return {
		posts: posts
	};
}
