import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import path from 'path';

const config: UserConfig = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$utils: path.resolve('./src/utils')
		}
	},
	esbuild: {
		platform: 'node',
		format: 'esm',
		target: 'esnext'
	}
};

export default config;
