import { HeaderLink } from '#/components/HeaderLink'
import { ThemeSwitchMenu } from '#/components/ThemeSwitchMenu'
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
		<styled.header zIndex="banner" shadow="lg" width="full">
			<Container py="2" maxWidth="breakpoint-md">
				<Flex width="full" align="center">
					<Box
						fontWeight="bold"
						fontSize="2xl"
						fontFamily="heading"
						bgGradient="to-r"
						gradientFrom={{ base: 'accent.a3', _dark: 'accent.a4' }}
						gradientTo={{ base: 'accent.a9', _dark: 'accent.a8' }}
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
						<ThemeSwitchMenu />
					</HStack>
				</Flex>
			</Container>
		</styled.header>
	)
}

export default Header
