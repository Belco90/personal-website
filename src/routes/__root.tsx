import {
	Outlet,
	createRootRoute,
	HeadContent,
	Scripts,
} from '@tanstack/react-router'

import './global.css'
import { seo } from '#/seo'
import UILayout from '#/components/UILayout'

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			...seo(),
		],
		links: [
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
				'data-code': import.meta.env.VITE_PIRSCH_CODE,
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
				<UILayout>
					<Outlet />
				</UILayout>
				<Scripts />
			</body>
		</html>
	)
}
