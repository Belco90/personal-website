import type { LinkProps as ChakraLinkProps, BoxProps } from '@chakra-ui/react'
import {
  Box,
  Link,
  HStack,
  Flex,
  useColorModeValue,
  Container,
} from '@chakra-ui/react'
import type { LinkProps as NextLinkProps } from 'next/link'
import NextLink from 'next/link'

import { useRouter } from 'next/router'
import ColorModeButton from '~/components/ColorModeButton'

interface HeaderLinkProps extends Omit<ChakraLinkProps, 'href'> {
  href: NextLinkProps['href']
}

const HeaderLink = ({ href, children, ...remaining }: HeaderLinkProps) => {
  const router = useRouter()
  const activeLinkColor = useColorModeValue('primary.600', 'primary.300')
  const inactiveLinkColor = useColorModeValue('gray.700', 'gray.200')

  const isActive = router.asPath === href

  return (
    <NextLink href={href} passHref>
      <Link
        {...remaining}
        textDecorationLine={isActive ? 'underline' : 'none'}
        textDecorationColor={isActive ? activeLinkColor : 'none'}
        textDecorationThickness="2px"
        textUnderlineOffset="2px"
        color={isActive ? activeLinkColor : inactiveLinkColor}
        fontSize="lg"
        fontWeight="bold"
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
    </NextLink>
  )
}

const Header = (props: BoxProps) => {
  const bgColor = useColorModeValue('white', 'gray.700')
  return (
    <Box as="header" zIndex="banner" {...props} bgColor={bgColor}>
      <Container py={5} maxWidth="container.md">
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
      </Container>
    </Box>
  )
}

export default Header
