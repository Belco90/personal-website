import { OptimizedImage } from '#/components/OptimizedImage'
import { css } from '#/styled-system/css'

export function ProfilePicture() {
	return (
		<OptimizedImage
			width={150}
			height={150}
			className={css({ rounded: 'full' })}
			src="profile-picture.jpg"
			alt="Smiling Mario"
			priority
			operations={{ q: 100 }}
		/>
	)
}
