'use client'

import { type LinkProps, Link } from '@chakra-ui/next-js'
import {
	Box,
	type BoxProps,
	Container,
	Flex,
	HStack,
	Spacer,
	useColorModeValue,
	useToken,
} from '@chakra-ui/react'
import { usePathname } from 'next/navigation'
import { type FC } from 'react'

import ColorModeButton from '~/components/ColorModeButton'

const HeaderLink = ({ href, children, ...remaining }: LinkProps) => {
	const pathname = usePathname()
	const activeLinkColor = useColorModeValue('primary.600', 'primary.300')
	const inactiveLinkColor = useColorModeValue('gray.700', 'gray.200')

	const isActive = pathname === href

	return (
		<Link
			href={href}
			{...remaining}
			textDecorationLine={isActive ? 'underline' : 'none'}
			textDecorationColor={isActive ? activeLinkColor : 'none'}
			textDecorationThickness="2px"
			textUnderlineOffset="2px"
			color={isActive ? activeLinkColor : inactiveLinkColor}
			fontSize="lg"
			p={1}
			_hover={{
				color: 'primary.700',
				textDecorationColor: 'current',
				bgColor: 'primary.100',
				borderRadius: 2,
			}}
			aria-current={isActive ? 'page' : undefined}
		>
			{children}
		</Link>
	)
}

const OldHeader: FC<BoxProps> = (props) => {
	const bgColor = useColorModeValue('white', 'gray.700')
	const [primaryFromLight, primaryToLight, primaryFromDark, primaryToDark] =
		useToken('colors', [
			'primary.50',
			'primary.200',
			'primary.500',
			'primary.700',
		])
	const primaryFrom = useColorModeValue(primaryFromLight, primaryFromDark)
	const primaryTo = useColorModeValue(primaryToLight, primaryToDark)

	return (
		<Box as="header" zIndex="banner" {...props} bgColor={bgColor}>
			<Container py={2} maxWidth="container.md">
				<Flex width="full" align="center">
					<Box
						fontWeight="bold"
						fontSize="2xl"
						fontFamily="heading"
						bgGradient={`linear(to-r, ${primaryFrom}, ${primaryTo})`}
						bgSize="100% 0.2em"
						bgPosition="0 80%"
						bgRepeat="no-repeat"
					>
						Mario
					</Box>
					<Spacer />
					<HStack
						spacing={{ base: 2, lg: 8 }}
						align="center"
						shouldWrapChildren
					>
						<HStack
							as="nav"
							spacing={[2, 4]}
							align="center"
							justify="center"
							shouldWrapChildren
						>
							<HeaderLink href="/">Home</HeaderLink>
							<HeaderLink href="/projects">Projects</HeaderLink>
						</HStack>
						<ColorModeButton />
					</HStack>
				</Flex>
			</Container>
		</Box>
	)
}

export default OldHeader
