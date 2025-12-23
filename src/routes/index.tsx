import { createFileRoute } from '@tanstack/react-router'
import {
	FaBluesky,
	FaEnvelope,
	FaGithub,
	FaLinkedin,
	FaStackOverflow,
} from 'react-icons/fa6'

// import ProfilePicture from '#/components/ProfilePicture'
import { Box, Flex, VStack, styled } from '#/styled-system/jsx'
import { USER_CONFIG } from '#/seo'

import type { IconType } from 'react-icons'

export const Route = createFileRoute('/')({
	component: HomePage,
})

type SocialKey = keyof typeof USER_CONFIG.social
type SocialNetworksRecord = Record<SocialKey, { title: string; Icon: IconType }>

const SOCIAL_NETWORKS_RECORD: SocialNetworksRecord = {
	email: { title: 'Email', Icon: FaEnvelope },
	github: { title: 'GitHub', Icon: FaGithub },
	linkedin: { title: 'LinkedIn', Icon: FaLinkedin },
	bluesky: { title: 'Bluesky', Icon: FaBluesky },
	stackoverflow: { title: 'StackOverflow', Icon: FaStackOverflow },
}

function HomePage() {
	return (
		<Flex justify="center" height="full">
			<VStack
				py="8"
				px="4"
				alignItems="center"
				alignSelf="center"
				maxWidth="full"
				textAlign="center"
				gap="12"
			>
				<Box>
					<Box
						rounded="full"
						shadow="profile-picture-outer"
						borderColor="primary.200"
					>
						<Box rounded="full" shadow="profile-picture-inner">
							{/*<ProfilePicture priority />*/}
							TODO
						</Box>
					</Box>
				</Box>
				<Box
					borderTopWidth="1px"
					borderTopColor="gray.500"
					borderBottomWidth="1px"
					borderBottomColor="gray.500"
					px={{ base: '4', md: '16' }}
					py="5"
				>
					<styled.h1 mb="4">{USER_CONFIG.author.name}</styled.h1>
					<styled.h2
						color={{ base: 'primary.600', _dark: 'primary.300' }}
						fontSize="lg"
						fontWeight="normal"
					>
						{USER_CONFIG.author.position}
					</styled.h2>
				</Box>

				<styled.ul
					display="flex"
					justifyContent="space-evenly"
					alignItems="center"
					width="full"
					fontSize="2xl"
					aria-label="Social networks"
				>
					{Object.entries(SOCIAL_NETWORKS_RECORD).map(
						([id, { title, Icon }]) => {
							const socialKey = id as SocialKey
							const link = USER_CONFIG.social[socialKey]
							const href = socialKey === 'email' ? `mailto:${link}` : link
							return (
								<styled.li
									key={socialKey}
									transition="transform"
									transitionDuration="social-network"
									_hover={{ transform: 'scale(1.3)' }}
								>
									<a href={href} title={title} aria-label={title}>
										<Icon />
									</a>
								</styled.li>
							)
						},
					)}
				</styled.ul>
			</VStack>
		</Flex>
	)
}
