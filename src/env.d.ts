/// <reference types="vite/client" />

interface ImportMetaEnv {
	// Client-side environment variables
	readonly VITE_PIRSCH_ID_CODE: string

	// Re-export some Netlify env vars to the client-side (done the `.env` file)
	readonly VITE_NETLIFY: string | undefined
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}

// Server-side environment variables
declare global {
	namespace NodeJS {
		interface ProcessEnv {
			readonly NODE_ENV: 'development' | 'production' | 'test'
			readonly GITHUB_ACCESS_TOKEN: string
		}
	}
}
