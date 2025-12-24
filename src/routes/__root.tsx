import {
	Outlet,
	createRootRoute,
	HeadContent,
	Scripts,
} from '@tanstack/react-router'

import { seo } from '#/seo'
import { MainLayout } from '#/components/MainLayout'
import { Providers } from '#/components/Providers'

import '@fontsource-variable/rubik'
import '@fontsource-variable/karla'
import globalCss from '../global.css?url'

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				name: 'color-scheme',
				content: 'light dark',
			},
			...seo(),
		],
		links: [
			{ rel: 'stylesheet', href: globalCss },
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				href: '/apple-icon.png',
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '192x192',
				href: '/icon.png',
			},
			{ rel: 'icon', href: '/favicon.ico' },
		],
		scripts: [
			{
				defer: true,
				src: 'https://api.pirsch.io/pa.js',
				id: 'pianjs',
				'data-code': import.meta.env.VITE_PIRSCH_ID_CODE,
			},
		],
	}),

	component: RootLayout,
})

function RootLayout() {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				<Providers>
					<MainLayout>
						<Outlet />
					</MainLayout>
				</Providers>
				<Scripts />
			</body>
		</html>
	)
}
