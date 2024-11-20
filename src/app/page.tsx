import { type FC } from 'react'
import {
	FaBluesky,
	FaGithub,
	FaLinkedin,
	FaStackOverflow,
	FaEnvelope,
} from 'react-icons/fa6'

import HomePage from './HomePage'

const SOCIAL_NETWORKS_RECORD = {
	email: { title: 'Email', Icon: FaEnvelope },
	github: { title: 'GitHub', Icon: FaGithub },
	linkedin: { title: 'LinkedIn', Icon: FaLinkedin },
	bluesky: { title: 'Bluesky', Icon: FaBluesky },
	stackoverflow: { title: 'StackOverflow', Icon: FaStackOverflow },
}

const Page: FC = () => {
	return <HomePage socialNetworksRecord={SOCIAL_NETWORKS_RECORD} />
}

export default Page
