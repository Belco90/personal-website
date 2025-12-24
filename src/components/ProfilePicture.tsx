import { Image } from '@unpic/react'

import profilePicture from '#app-public/profile-picture.jpg'

import { css } from '#/styled-system/css'
import { Box } from '#/styled-system/jsx'

import type { ImageProps } from '@unpic/react'

type ProfilePictureProps = Pick<ImageProps, 'priority'>

export function ProfilePicture(props: ProfilePictureProps) {
	return (
		<Box>
			<Image
				width={150}
				height={150}
				className={css({ rounded: 'full' })}
				{...props}
				src={profilePicture}
				alt="Smiling Mario"
			/>
		</Box>
	)
}
