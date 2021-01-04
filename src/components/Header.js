import { Box, Link, Stack, Image, Flex } from '@chakra-ui/core';
import { Link as RouteLink } from 'gatsby';
import { Location } from '@reach/router'; // gatsby dependency

import Container from './Container';

const HeaderLink = ({ to, ...props }) => (
  <Location>
    {({ location }) => {
      const isActive = location.pathname === to;
      return (
        <Link
          as={RouteLink}
          to={to}
          {...props}
          borderBottomWidth={isActive ? '4px' : 'none'}
          borderColor={isActive ? 'primary.500' : 'none'}
          fontSize="lg"
          _hover={{
            textDecoration: 'none',
            borderBottomWidth: '4px',
            borderColor: !isActive ? 'primary.100' : undefined,
          }}
        />
      );
    }}
  </Location>
);

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
              <HeaderLink to="/">Home</HeaderLink>
              <HeaderLink to="/projects">Projects</HeaderLink>
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
