import type { IconType } from 'react-icons'
import {
	Box,
	Flex,
	Heading,
	Link,
	VStack,
	Icon,
	useColorModeValue,
	useToken,
} from '@chakra-ui/react'
import {
	FaGithub,
	FaLinkedin,
	FaMastodon,
	FaStackOverflow,
} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import ProfilePicture from '~/components/ProfilePicture'
import { UserConfig } from '~/user.config'

type SocialNetwork = keyof typeof UserConfig.social
const SOCIAL_NETWORKS_META: Record<
	SocialNetwork,
	{ title: string; icon: IconType; extra?: Record<string, unknown> }
> = {
	email: { title: 'Email', icon: MdEmail },
	github: { title: 'GitHub', icon: FaGithub },
	linkedin: { title: 'LinkedIn', icon: FaLinkedin },
	mastodon: { title: 'Mastodon', icon: FaMastodon, extra: { rel: 'me' } },
	stackoverflow: { title: 'StackOverflow', icon: FaStackOverflow },
}

const convertHexToRgb = (hex: string): [number, number, number] | null => {
	const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
	hex = hex.replace(
		shorthandRegex,
		(_, r: string, g: string, b: string) => r + r + g + g + b + b
	)

	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
	return result
		? [
				parseInt(result[1], 16),
				parseInt(result[2], 16),
				parseInt(result[3], 16),
		  ]
		: null
}

const getCoolBoxShadow = (hexColor: string): string => {
	const BASE_POSITION = 5
	const OPACITY_ELEMENTS: Array<number> = [0.4, 0.3, 0.2, 0.1, 0.05]
	const boxShadowElements: Array<string> = []

	for (let i = 0; i < 5; i++) {
		const position = (i + 1) * BASE_POSITION
		const opacity = OPACITY_ELEMENTS[i]
		const rgbColor = convertHexToRgb(hexColor) ?? [0, 0, 0]
		boxShadowElements.push(
			`rgba(${rgbColor.join(', ')}, ${opacity}) -${position}px ${position}px`
		)
	}

	// return 'rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;'
	return boxShadowElements.join(', ') + ';'
}

const IndexPage = () => {
	const [primaryLightToken, primaryDarkToken] = useToken('colors', [
		'primary.500',
		'primary.300',
	])
	const primaryColorValue = useColorModeValue(
		primaryLightToken,
		primaryDarkToken
	)

	return (
		<>
			<Flex justify="center" height="100%">
				<VStack
					py={8}
					px={4}
					align="center"
					alignSelf="center"
					maxWidth="100%"
					textAlign="center"
					spacing={12}
				>
					<Box>
						<Box rounded="full" boxShadow={getCoolBoxShadow(primaryColorValue)}>
							<Box
								rounded="full"
								boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;"
							>
								<ProfilePicture priority />
							</Box>
						</Box>
					</Box>

					<Box
						borderY="solid 1px"
						borderTopColor="gray.500"
						borderBottomColor="gray.500"
						px={{ base: 2, md: 8 }}
						py={5}
					>
						<Heading as="h1" mb={4}>
							Mario Beltrán Alarcón
						</Heading>
						<Heading
							as="h2"
							variant="gradient"
							fontSize="lg"
							fontWeight="normal"
						>
							Frontend Software Engineer
						</Heading>
					</Box>

					<Flex
						as="ul"
						listStyleType="none"
						justify="space-evenly"
						align="center"
						w="full"
						fontSize="2xl"
						aria-label="Social networks"
					>
						{Object.entries(SOCIAL_NETWORKS_META).map(
							([id, { title, icon, extra }]) => {
								const socialNetworkKey = id as SocialNetwork
								const link = UserConfig.social[socialNetworkKey]
								const href =
									socialNetworkKey === 'email' ? `mailto:${link}` : link
								return (
									<Box
										as="li"
										key={socialNetworkKey}
										transition="transform 0.3s"
										_hover={{ transform: 'scale(1.3)' }}
									>
										<Link
											href={href}
											aria-label={title}
											title={title}
											{...extra}
										>
											<Icon as={icon} aria-hidden />
										</Link>
									</Box>
								)
							}
						)}
					</Flex>
				</VStack>
			</Flex>
		</>
	)
}

export default IndexPage
