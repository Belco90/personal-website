import { type FC } from 'react'
import { type IconType } from 'react-icons'

import { Box, Flex, Circle, VStack, panda } from '@/styled-system/jsx'
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
						// TODO: move box shadows to layer
						// eslint-disable-next-line @typescript-eslint/ban-ts-comment
						// @ts-expect-error We want a custom shadow here
						boxShadow="rgba(91, 142, 101, 0.4) -5px 5px, rgba(91, 142, 101, 0.3) -10px 10px, rgba(91, 142, 101, 0.2) -15px 15px, rgba(91, 142, 101, 0.1) -20px 20px, rgba(91, 142, 101, 0.05) -25px 25px"
						borderColor="primary.200"
					>
						<Box
							rounded="full"
							// eslint-disable-next-line @typescript-eslint/ban-ts-comment
							// @ts-expect-error We want a custom shadow here
							boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;"
						>
							<Circle bgColor="primary.50" size="36" />
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
									// eslint-disable-next-line @typescript-eslint/ban-ts-comment
									// @ts-expect-error We want a custom transition here
									transition="transform 0.3s"
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
