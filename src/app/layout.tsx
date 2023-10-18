import { ColorModeScript } from '@chakra-ui/react'
import { type Metadata } from 'next'
import { Karla, Rubik } from 'next/font/google'
import { type FC, type ReactNode } from 'react'

import MainLayout from './MainLayout'
import Providers from './Providers'

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

const rubikFont = Rubik({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	variable: '--font-rubik',
})
const karlaFont = Karla({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	variable: '--font-karla',
})

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => (
	<html lang="en" className={`${rubikFont.variable} ${karlaFont.variable}`}>
		<body>
			<ColorModeScript />
			<Providers>
				<MainLayout>{children}</MainLayout>
			</Providers>
		</body>
	</html>
)

export default RootLayout
export { metadata }
