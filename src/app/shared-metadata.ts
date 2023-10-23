import { type Metadata } from 'next'

import { UserConfig } from '~/user.config'

export const openGraph: NonNullable<Metadata['openGraph']> = {
	type: 'website',
	url: '/',
	title: UserConfig.author.name,
	images: [
		{
			url: '/profile-picture.jpg',
			height: 715,
			width: 715,
			type: 'image/jpeg',
		},
	],
}
