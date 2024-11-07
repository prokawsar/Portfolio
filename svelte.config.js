import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex()],

	kit: {
		adapter: adapter({
			runtime: 'nodejs18.x'
		}),
		prerender: {
			crawl: true
		}
	},

	extensions: ['.svelte', ...mdsvexConfig.extensions]
};

export default config;
