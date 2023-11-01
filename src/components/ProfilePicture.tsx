import type { ImageProps } from 'next/image'
import Image from 'next/image'

import { css } from '@/styled-system/css'
import { Box } from '@/styled-system/jsx'
import imgSrc from '@app-public/profile-picture.jpg'

type ProfilePictureProps = Omit<ImageProps, 'src' | 'alt'>

const ProfilePicture = (props: ProfilePictureProps) => {
	return (
		<Box>
			<Image
				width={150}
				height={150}
				quality={100}
				{...props}
				src={imgSrc}
				alt="Smiling Mario"
				className={css({ rounded: 'full' })}
			/>
		</Box>
	)
}

export default ProfilePicture
