import { createFileRoute } from '@tanstack/react-router'
import {
	FaBluesky,
	FaEnvelope,
	FaGithub,
	FaLinkedin,
	FaStackOverflow,
} from 'react-icons/fa6'

import { HomePage } from './HomePage'

export const Route = createFileRoute('/')({
	component: HomeRoot,
})

const SOCIAL_NETWORKS_RECORD = {
	email: { title: 'Email', Icon: FaEnvelope },
	github: { title: 'GitHub', Icon: FaGithub },
	linkedin: { title: 'LinkedIn', Icon: FaLinkedin },
	bluesky: { title: 'Bluesky', Icon: FaBluesky },
	stackoverflow: { title: 'StackOverflow', Icon: FaStackOverflow },
}

function HomeRoot() {
	return <HomePage socialNetworksRecord={SOCIAL_NETWORKS_RECORD} />
}
