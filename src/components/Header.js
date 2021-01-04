import { Box, Link, Stack, Image, Flex } from '@chakra-ui/core';
import NextLink from 'next/link';

import Container from './Container';

const HeaderLink = ({ href, children, ...remaining }) => {
  // TODO: check if link is active one
  const isActive = false;
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
        <Flex alignItems="center" justifyContent="space-between">
          <Box width={1 / 3}>
            <Image
              src="/logo.png"
              alt="MBA"
              height="auto"
              width="130px"
              marginY="-40px"
              marginX="-20px"
            />
          </Box>
          <Flex
            width={{ base: '100%', md: 2 / 3 }}
            justifyContent={{ base: 'end', md: 'initial' }}
          >
            <Stack
              as="nav"
              width="50%"
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
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
