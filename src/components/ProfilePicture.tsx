import type { ImageProps } from 'next/image'
import Image from 'next/image'

import imgSrc from '@app-public/profile-picture.jpg'
import type { CSSProperties } from 'react'

const extraStyle: CSSProperties = { borderRadius: '100%' }

type ProfilePictureProps = Omit<ImageProps, 'src' | 'alt'>

const ProfilePicture = (props: ProfilePictureProps) => {
	return (
		<Image
			width={150}
			height={150}
			quality={95}
			{...props}
			src={imgSrc}
			alt="Thoughtful Mario"
			style={extraStyle}
		/>
	)
}

export default ProfilePicture
