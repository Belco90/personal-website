import { HeaderLink } from '#/components/HeaderLink'
// import ThemeSwitchIconButton from '#/components/ThemeSwitchIconButton'
import {
	Box,
	Container,
	Flex,
	HStack,
	styled,
	Spacer,
} from '#/styled-system/jsx'

import type { FC } from 'react'

const Header: FC = () => {
	return (
		<styled.header
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
						<styled.nav
							display="flex"
							gap={['2', '4']}
							alignItems="center"
							justifyContent="center"
						>
							<HeaderLink to="/">Home</HeaderLink>
							<HeaderLink to="/projects">Projects</HeaderLink>
						</styled.nav>
						<div>ThemeToggle</div>
						{/*<ThemeSwitchIconButton />*/}
					</HStack>
				</Flex>
			</Container>
		</styled.header>
	)
}

export default Header
