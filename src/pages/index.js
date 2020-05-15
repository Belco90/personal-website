/** @jsx jsx */
import React from 'react';
import { Box, Flex, Heading, Link, Stack } from '@chakra-ui/core';
import styled from '@emotion/styled';
import { css, jsx, keyframes } from '@emotion/core';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import SEO from '../components/seo';
import ProfilePicture from '../components/profile-picture';

const StyledLink = styled(Link)`
  transition: transform 0.3s;
  :hover {
    transform: scale(1.3);
  }
`;

const fadeInUp = keyframes`
    from {
    transform: translate3d(0, 20px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;

const cssFadeInUp = css`
  opacity: 0;
  animation: ${fadeInUp} 1s both;
`;

const Index = () => (
  <>
    <SEO title="Home" />

    <Flex justify="center" aligh="center" minHeight="100vh">
      <Stack
        direction="column"
        py={8}
        px={4}
        align="center"
        alignSelf="center"
        maxWidth="100%"
        textAlign="center"
        spacing={12}
      >
        <Box>
          <ProfilePicture />
        </Box>

        <Box
          borderY="solid 1px"
          borderTopColor="gray.500"
          borderBottomColor="gray.500"
          px={{ base: 2, md: 8 }}
          py={5}
          css={cssFadeInUp}
        >
          <Heading as="h1" mb={4}>
            Mario Beltrán Alarcón
          </Heading>
          <Heading as="h4" fontSize="lg" fontWeight="normal">
            Frontend Web Engineer
          </Heading>
        </Box>

        <Flex justify="space-evenly" align="center" w="full" fontSize="2xl">
          <StyledLink href="mailto:belco90@gmail.com">
            <Box as={FaEnvelope} />
          </StyledLink>
          <StyledLink href="https://github.com/Belco90">
            <Box as={FaGithub} />
          </StyledLink>
          <StyledLink href="https://www.linkedin.com/in/mario-ba-90/">
            <Box as={FaLinkedin} />
          </StyledLink>
          <StyledLink href="https://twitter.com/belcoDev">
            <Box as={FaTwitter} />
          </StyledLink>
        </Flex>
      </Stack>
    </Flex>
  </>
);

export default Index;
