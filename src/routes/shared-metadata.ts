import { type Metadata } from 'next'

import { USER_CONFIG } from '#/user-config'

export const openGraph: NonNullable<Metadata['openGraph']> = {
	type: 'website',
	url: '/',
	title: USER_CONFIG.author.name,
}
