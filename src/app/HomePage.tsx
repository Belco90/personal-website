import { type FC } from 'react'
import { type IconType } from 'react-icons'

import { Box, Flex, VStack, styled } from '@/styled-system/jsx'
import ProfilePicture from '~/components/ProfilePicture'
import { UserConfig } from '~/user-config'

type SocialKey = keyof typeof UserConfig.social
type SocialNetworksRecord = Record<SocialKey, { title: string; Icon: IconType }>

const HomePage: FC<{ socialNetworksRecord: SocialNetworksRecord }> = ({
	socialNetworksRecord,
}) => {
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
							<ProfilePicture priority />
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
					<styled.h1 mb="4">{UserConfig.author.name}</styled.h1>
					<styled.h2
						color={{ base: 'primary.600', _dark: 'primary.300' }}
						fontSize="lg"
						fontWeight="normal"
					>
						{UserConfig.author.position}
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
					{Object.entries(socialNetworksRecord).map(([id, { title, Icon }]) => {
						const socialKey = id as SocialKey
						const link = UserConfig.social[socialKey]
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
					})}
				</styled.ul>
			</VStack>
		</Flex>
	)
}

export default HomePage
