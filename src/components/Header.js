import { Box, Link, HStack, Flex, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'

import FluidContainer from './FluidContainer'
import { useRouter } from 'next/router'
import ColorModeButton from '~/components/ColorModeButton'
import { useTheme } from '@emotion/react'

const HeaderLink = ({ href, children, ...remaining }) => {
  const router = useRouter()
  const theme = useTheme()
  const isActive = router.asPath === href

  return (
    <NextLink href={href} passHref>
      <Link
        {...remaining}
        borderBottomWidth={isActive ? '4px' : 'none'}
        sx={{
          borderImage: `linear-gradient(to top right, ${theme.colors.primary[500]}, ${theme.colors.primaryAlt[300]}) 1`,
        }}
        fontSize="lg"
        _hover={{
          borderImage: `linear-gradient(to top right, ${theme.colors.primaryAlt[400]}, ${theme.colors.primaryAlt[100]}) 1`,
          textDecoration: 'none',
          borderBottomWidth: '4px',
          borderColor: !isActive ? 'primary.100' : undefined,
        }}
        aria-current={isActive ? 'page' : undefined}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Header = (props) => {
  const bgColor = useColorModeValue('white', 'primary.900')
  return (
    <Box as="header" zIndex="banner" {...props} bgColor={bgColor}>
      <FluidContainer py={5}>
        <Flex width="full" justifyContent="flex-end">
          <HStack
            as="nav"
            spacing={8}
            align="center"
            justify="center"
            shouldWrapChildren
          >
            <HeaderLink href="/">Home</HeaderLink>
            <HeaderLink href="/projects">Projects</HeaderLink>
            <ColorModeButton />
          </HStack>
        </Flex>
      </FluidContainer>
    </Box>
  )
}

export default Header
