import { Box, Link, HStack, Flex, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'

import FluidContainer from './FluidContainer'
import { useRouter } from 'next/router'
import ColorModeButton from '~/components/ColorModeButton'

const HeaderLink = ({ href, children, ...remaining }) => {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <NextLink href={href} passHref>
      <Link
        {...remaining}
        borderBottomWidth={isActive ? '4px' : 'none'}
        borderColor="primary.500"
        fontSize="lg"
        _hover={{
          borderColor: 'secondary.200',
          textDecoration: 'none',
          borderBottomWidth: '4px',
        }}
        aria-current={isActive ? 'page' : undefined}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Header = (props) => {
  const bgColor = useColorModeValue('white', 'gray.800')
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
