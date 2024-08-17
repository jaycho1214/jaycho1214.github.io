import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		{
			name: 'md-hmr',
			enforce: 'post',
			handleHotUpdate: ({ file, server }) => {
				if (file.endsWith('.md')) {
					server.ws.send({ type: 'full-reload', path: '*' });
				}
			},
		},
	],
});
