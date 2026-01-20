import { OptimizedImage } from '#/components/OptimizedImage'
import profilePicture from '#/images/profile-picture.jpg'
import { css } from '#/styled-system/css'

export function ProfilePicture() {
	return (
		<OptimizedImage
			width={150}
			height={150}
			className={css({ rounded: 'full' })}
			src={profilePicture}
			alt="Smiling Mario"
			priority
			operations={{ q: 100 }}
		/>
	)
}
