import { type Metadata } from 'next'

import { UserConfig } from '#/user-config'

export const openGraph: NonNullable<Metadata['openGraph']> = {
	type: 'website',
	url: '/',
	title: UserConfig.author.name,
}
