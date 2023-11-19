import { sentrySvelteKit } from "@sentry/sveltekit";
import { sveltekit } from '@sveltejs/kit/vite'
import type { UserConfig } from 'vite'

const config: UserConfig = {
    plugins: [sentrySvelteKit({
        sourceMapsUploadOptions: {
            org: "sheba-queue",
            project: "dash-sveltekit"
        }
    }), sveltekit()],

    esbuild: {
		platform: 'node',
		format: 'esm',
		target: 'esnext'
	}
}

export default config