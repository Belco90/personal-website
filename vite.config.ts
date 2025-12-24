import netlify from '@netlify/vite-plugin-tanstack-start'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [
		// Enables Vite to resolve imports using path aliases.
		tsconfigPaths(),
		tanstackStart({
			prerender: {
				enabled: process.env.NODE_ENV === 'production',
				filter: ({ path }) => {
					// Only prerender project pages
					if (path.includes('/projects')) {
						return true
					}

					return false
				},
				crawlLinks: true,
			},
		}),

		// React's vite plugin must come after Start's vite plugin
		viteReact(),

		// Netlify adapter for TanStack Start (anywhere in the array is fine)
		netlify(),
	],
})
