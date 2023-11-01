import { type FC } from 'react'
import {
	FaGithub,
	FaLinkedin,
	FaMastodon,
	FaStackOverflow,
} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import HomePage from './HomePage'

const SOCIAL_NETWORKS_RECORD = {
	email: { title: 'Email', Icon: MdEmail },
	github: { title: 'GitHub', Icon: FaGithub },
	linkedin: { title: 'LinkedIn', Icon: FaLinkedin },
	mastodon: { title: 'Mastodon', Icon: FaMastodon, extra: { rel: 'me' } },
	stackoverflow: { title: 'StackOverflow', Icon: FaStackOverflow },
}

const Page: FC = () => {
	return <HomePage socialNetworksRecord={SOCIAL_NETWORKS_RECORD} />
}

export default Page
