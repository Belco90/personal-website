import { type FC } from 'react'

import {
	Box,
	Container,
	Flex,
	HStack,
	panda,
	Spacer,
	HStack,
} from '@/styled-system/jsx'
import ThemeSwitchIconButton from '~/components/ThemeSwitchIconButton'

const Header: FC = () => {
	return (
		<panda.header
			zIndex="banner"
			shadow="lg"
			width="full"
			bgColor={{ base: 'white', _dark: 'gray.700' }}
		>
			<Container py="2" maxWidth="breakpoint-md">
				<Flex width="full" align="center">
					<Box
						fontWeight="bold"
						fontSize="2xl"
						fontFamily="heading"
						bgGradient="to-r"
						gradientFrom={{ base: 'primary.50', _dark: 'primary.500' }}
						gradientTo={{ base: 'primary.500', _dark: 'primary.700' }}
						bgSize="100% 0.2em"
						bgPosition="0 80%"
						bgRepeat="no-repeat"
					>
						Mario
					</Box>

					<Spacer />

					<HStack gap={{ base: '2', lg: '8' }} alignItems="center">
						<panda.nav
							display="flex"
							gap={['2', '4']}
							alignItems="center"
							justifyContent="center"
						>
							<a href="/">Home</a>
							<a href="/projects">Projects</a>
						</panda.nav>
						<ThemeSwitchIconButton />
					</HStack>
				</Flex>
			</Container>
		</panda.header>
	)
}

export default Header
