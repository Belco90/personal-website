import { type FC } from 'react'
import { type IconType } from 'react-icons'

import { Box, Flex, panda, VStack } from '@/styled-system/jsx'
import ProfilePicture from '~/components/ProfilePicture'
import { UserConfig } from '~/user.config'

type SocialKey = keyof typeof UserConfig.social
type SocialNetworksRecord = Record<
	SocialKey,
	{ title: string; extra?: Record<string, unknown>; Icon: IconType }
>

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
					<panda.h1 mb="4">{UserConfig.author.name}</panda.h1>
					<panda.h2 color="primary.500" fontSize="lg" fontWeight="normal">
						{UserConfig.author.position}
					</panda.h2>
				</Box>

				<panda.ul
					display="flex"
					justifyContent="space-evenly"
					alignItems="center"
					width="full"
					fontSize="2xl"
					aria-label="Social networks"
				>
					{Object.entries(socialNetworksRecord).map(
						([id, { title, Icon, extra }]) => {
							const socialKey = id as SocialKey
							const link = UserConfig.social[socialKey]
							const href = socialKey === 'email' ? `mailto:${link}` : link
							return (
								<panda.li
									key={socialKey}
									transition="transform"
									transitionDuration="social-network"
									_hover={{ transform: 'scale(1.3)' }}
								>
									<a href={href} title={title} aria-label={title} {...extra}>
										<Icon />
									</a>
								</panda.li>
							)
						},
					)}
				</panda.ul>
			</VStack>
		</Flex>
	)
}

export default HomePage
