import { ImageResponse } from 'next/og'

import { colors } from '#/theme/colors'
import { USER_CONFIG } from '#/user-config'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = `${USER_CONFIG.author.name} - ${USER_CONFIG.author.position}`
export const size = {
	width: 1200,
	height: 630,
}

export const contentType = 'image/png'

// Image generation
async function OpengraphImage() {
	// Font
	const rubikSemiBold = fetch(
		new URL('./Rubik-SemiBold.ttf', import.meta.url),
	).then((res) => res.arrayBuffer())

	return new ImageResponse(
		// ImageResponse JSX element
		<div
			style={{
				background: 'white',
				width: '100%',
				height: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-around',
				padding: 30,
			}}
		>
			<img
				src="https://mario.dev/circle-logo.png"
				width={200}
				height={200}
				alt=""
			/>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-end',
				}}
			>
				<div style={{ fontSize: 112 }}>{USER_CONFIG.author.name}</div>
				<div style={{ fontSize: 40, color: colors.primary['500'].value }}>
					{USER_CONFIG.author.position}
				</div>
			</div>
		</div>,
		// ImageResponse options
		{
			// For convenience, we can re-use the exported opengraph-image
			// size config to also set the ImageResponse's width and height.
			...size,
			fonts: [
				{
					name: 'Rubik',
					data: await rubikSemiBold,
					style: 'normal',
					weight: 400,
				},
			],
		},
	)
}

export default OpengraphImage
