import type { DefaultSeoProps } from 'next-seo'

import { UserConfig } from '~/user.config'

const description = UserConfig.author.position

const DefaultSeoConfig: DefaultSeoProps = {
	titleTemplate: `%s | ${UserConfig.author.name}`,
	defaultTitle: UserConfig.author.name,
	description,
	openGraph: {
		type: 'website',
		url: 'https://mario.dev',
		title: UserConfig.author.name,
		images: [
			{
				url: 'https://en.gravatar.com/userimage/2579648/589fd5525e1be579480a610887aa79df.png?size=200',
				width: 200,
				height: 200,
				alt: 'Thoughtful Mario',
			},
		],
		site_name: description,
	},
	twitter: {
		handle: '@belcoDev',
		cardType: 'summary',
		site: '@belcoDev',
	},
}

export { DefaultSeoConfig }
