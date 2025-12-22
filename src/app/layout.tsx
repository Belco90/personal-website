import { type Viewport } from 'next'
import { Karla, Rubik } from 'next/font/google'
import { type FC, type ReactNode } from 'react'

import { PirschAnalytics } from '#/app/PirschAnalytics'
import UILayout from '#/components/UILayout'
import { UserConfig } from '#/user-config'

import Providers from './Providers'
import { openGraph } from '../routes/shared-metadata'

import '../routes/global.css'

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

export const metadata = {
	title: {
		template: `%s | ${UserConfig.author.name}`,
		default: UserConfig.author.name,
	},
	description: UserConfig.author.position,
	openGraph: { ...openGraph },
}

export const viewport: Viewport = {
	colorScheme: 'light dark',
}

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => (
	<html
		lang="en"
		className={`${rubikFont.variable} ${karlaFont.variable}`}
		suppressHydrationWarning
	>
		<body>
			<PirschAnalytics />
			<Providers>
				<UILayout>{children}</UILayout>
			</Providers>
		</body>
	</html>
)

export default RootLayout
