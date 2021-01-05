import { Box, Link, Stack, Flex } from '@chakra-ui/core';
import NextLink from 'next/link';

import Container from './Container';
import { useRouter } from 'next/router';

const HeaderLink = ({ href, children, ...remaining }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href} passHref>
      <Link
        {...remaining}
        borderBottomWidth={isActive ? '4px' : 'none'}
        borderColor={isActive ? 'primary.500' : 'none'}
        fontSize="lg"
        _hover={{
          textDecoration: 'none',
          borderBottomWidth: '4px',
          borderColor: !isActive ? 'primary.100' : undefined,
        }}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Header = (...props) => {
  return (
    <Box as="header" zIndex="banner" {...props}>
      <Container py={5}>
        <Flex width="full" justifyContent={{ base: 'center', md: 'end' }}>
          <Stack
            as="nav"
            isInline
            spacing={8}
            align="center"
            justify="center"
            shouldWrapChildren
          >
            <HeaderLink href="/">Home</HeaderLink>
            <HeaderLink href="/projects">Projects</HeaderLink>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
