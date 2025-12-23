import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [
		// Enables Vite to resolve imports using path aliases.
		tsconfigPaths(),
		tanstackStart(),

		// React's vite plugin must come after Start's vite plugin
		viteReact(),
	],
})
