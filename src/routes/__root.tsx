import {
	Outlet,
	createRootRoute,
	HeadContent,
	Scripts,
} from '@tanstack/react-router'

import './global.css'

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{ title: 'TanStack Start Starter' },
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
				<Outlet />
				<Scripts />
			</body>
		</html>
	)
}
