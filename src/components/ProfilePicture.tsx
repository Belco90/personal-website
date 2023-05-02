import type { ImageProps } from 'next/image'
import Image from 'next/image'

import imgSrc from '@app-public/profile-picture.jpg'
import type { CSSProperties } from 'react'
import { Box } from '@chakra-ui/react'

const extraStyle: CSSProperties = { borderRadius: '100%' }

type ProfilePictureProps = Omit<ImageProps, 'src' | 'alt'>

const ProfilePicture = (props: ProfilePictureProps) => {
	return (
		<Box filter="auto" saturate={1.2} brightness={0.9}>
			<Image
				width={150}
				height={150}
				quality={100}
				{...props}
				src={imgSrc}
				alt="Smiling Mario"
				style={extraStyle}
			/>
		</Box>
	)
}

export default ProfilePicture
