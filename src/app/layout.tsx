import { ColorModeScript } from '@chakra-ui/react'
import { Karla, Rubik } from 'next/font/google'
import { type FC, type ReactNode } from 'react'

import Providers from './Providers'
import VercelAnalytics from './VercelAnalytics'

import { openGraph } from '~/app/shared-metadata'
import { UserConfig } from '~/user.config'

import './global.css'

export const metadata = {
	title: {
		template: `%s | ${UserConfig.author.name}`,
		default: UserConfig.author.name,
	},
	description: UserConfig.author.position,
	openGraph: { ...openGraph },
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
			<VercelAnalytics />
			<Providers>{children}</Providers>
		</body>
	</html>
)

export default RootLayout
