import { ColorModeScript } from '@chakra-ui/react'
import { type Metadata } from 'next'
import { type FC, type ReactNode } from 'react'

import Providers from '~/app/Providers'
import { UserConfig } from '~/user.config'

const metadata: Metadata = {
	title: {
		template: `%s | ${UserConfig.author.name}`,
		default: UserConfig.author.name,
	},
	description: UserConfig.author.position,
	openGraph: {
		type: 'website',
		url: '/',
		title: UserConfig.author.name,
		images: [
			{
				url: 'https://1.gravatar.com/avatar/35503abe571959f5a279f3f84bf7c28a?size=256',
				width: 200,
				height: 200,
				alt: 'Smiling Mario',
			},
		],
	},
}

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => (
	<html lang="en">
		<body>
			<ColorModeScript />
			<Providers>{children}</Providers>
		</body>
	</html>
)

export default RootLayout
export { metadata }
