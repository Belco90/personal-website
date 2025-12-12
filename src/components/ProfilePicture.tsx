import Image from 'next/image'

import imgSrc from '#app-public/profile-picture.jpg'

import { css } from '#/styled-system/css'
import { Box } from '#/styled-system/jsx'

import type { ImageProps } from 'next/image'

type ProfilePictureProps = Omit<ImageProps, 'src' | 'alt'>

const ProfilePicture = (props: ProfilePictureProps) => {
	return (
		<Box>
			<Image
				width={150}
				height={150}
				{...props}
				src={imgSrc}
				alt="Smiling Mario"
				className={css({ rounded: 'full' })}
			/>
		</Box>
	)
}

export default ProfilePicture
