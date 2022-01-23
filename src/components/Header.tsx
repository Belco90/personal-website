import type { LinkProps as ChakraLinkProps, BoxProps } from '@chakra-ui/react'
import { Box, Link, HStack, Flex, useColorModeValue } from '@chakra-ui/react'
import type { LinkProps as NextLinkProps } from 'next/link'
import NextLink from 'next/link'

import FluidContainer from './FluidContainer'
import { useRouter } from 'next/router'
import ColorModeButton from '~/components/ColorModeButton'

interface HeaderLinkProps extends Omit<ChakraLinkProps, 'href'> {
  href: NextLinkProps['href']
}

const HeaderLink = ({ href, children, ...remaining }: HeaderLinkProps) => {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <NextLink href={href} passHref>
      <Link
        {...remaining}
        textDecorationLine={isActive ? 'underline' : 'none'}
        textDecorationColor={isActive ? 'primary.600' : 'none'}
        textDecorationThickness="2px"
        textUnderlineOffset="2px"
        color={isActive ? 'primary.600' : 'gray.700'}
        borderColor="primary.600"
        fontSize="lg"
        fontWeight="bold"
        p={1}
        _hover={{
          color: isActive ? 'primary.700' : 'current',
          bgColor: 'primary.100',
          borderRadius: 2,
        }}
        aria-current={isActive ? 'page' : undefined}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Header = (props: BoxProps) => {
  const bgColor = useColorModeValue('white', 'gray.700')
  return (
    <Box as="header" zIndex="banner" {...props} bgColor={bgColor}>
      <FluidContainer py={5}>
        <Flex width="full" justifyContent="flex-end">
          <HStack
            spacing={8}
            align="center"
            justify="center"
            shouldWrapChildren
          >
            <HStack
              as="nav"
              spacing={4}
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
      </FluidContainer>
    </Box>
  )
}

export default Header
