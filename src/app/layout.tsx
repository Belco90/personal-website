import { type Viewport } from 'next'
import { Karla, Rubik } from 'next/font/google'
import { type FC, type ReactNode } from 'react'

import { PirschAnalytics } from '#/app/PirschAnalytics'
import UILayout from '#/components/UILayout'
import { USER_CONFIG } from '#/user-config'

import Providers from './Providers'
import { openGraph } from '../routes/shared-metadata'

import '../global.css'

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
		template: `%s | ${USER_CONFIG.author.name}`,
		default: USER_CONFIG.author.name,
	},
	description: USER_CONFIG.author.position,
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
