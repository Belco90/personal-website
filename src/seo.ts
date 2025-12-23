export const USER_CONFIG = {
	author: {
		name: 'Mario Beltrán',
		position: 'Frontend Software Engineer',
	},
	social: {
		email: 'me@mario.dev',
		github: 'https://github.com/Belco90',
		bluesky: 'https://bsky.app/profile/belco.dev',
		linkedin: 'https://www.linkedin.com/in/mario-ba-90',
		stackoverflow: 'https://stackoverflow.com/users/6278737/mario-beltr%c3%a1n',
	},
} as const

interface SeoArgs {
	title?: string
	description?: string
	imageUrl?: string
}

const DEFAULT_TITLE = USER_CONFIG.author.name
const DEFAULT_DESCRIPTION = USER_CONFIG.author.position

export function seo({ title, description, imageUrl }: SeoArgs = {}) {
	const finalTitle = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE
	const finalDescription = description || DEFAULT_DESCRIPTION

	const tags = [
		{ title: finalTitle },
		{ name: 'description', content: finalDescription },
		{ name: 'og:type', content: 'website' },
		{ name: 'og:title', content: finalTitle },
		{ name: 'og:description', content: finalDescription },
	]

	if (imageUrl) {
		tags.push({ name: 'og:image', content: imageUrl })
	}

	return tags
}
