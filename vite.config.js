import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
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
