/** @jsx jsx */
import React from 'react';
import { Box, Flex, Heading, Link, Stack } from '@chakra-ui/core';
import styled from '@emotion/styled';
import { css, jsx, keyframes } from '@emotion/core';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { graphql, useStaticQuery } from 'gatsby';

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

const Index = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            email
            github
            linkedin
            twitter
          }
        }
      }
    `
  );

  return (
    <>
      <SEO title="Home" />

      <Flex justify="center" aligh="center" height="100%">
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
            <Box
              backgroundImage="radial-gradient(currentColor 1px, transparent 1px)"
              backgroundSize="calc(10 * 1px) calc(10 * 1px)"
              color="gray.500"
              rounded="full"
            >
              <Box transform="translate(30px, -30px)">
                <ProfilePicture />
              </Box>
            </Box>
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
            <StyledLink
              href={`mailto:${site.siteMetadata.email}`}
              aria-label="Email"
            >
              <Box as={FaEnvelope} aria-label="Email icon" />
            </StyledLink>
            <StyledLink
              href={`https://github.com/${site.siteMetadata.github}`}
              aria-label="GitHub"
            >
              <Box as={FaGithub} aria-label="GitHub icon" />
            </StyledLink>
            <StyledLink
              href={`https://www.linkedin.com/in/${site.siteMetadata.linkedin}`}
              aria-label="Linkedin"
            >
              <Box as={FaLinkedin} aria-label="Linkedin icon" />
            </StyledLink>
            <StyledLink
              href={`https://twitter.com/${site.siteMetadata.twitter}`}
              aria-label="Twitter"
            >
              <Box as={FaTwitter} aria-label="Twitter icon" />
            </StyledLink>
          </Flex>
        </Stack>
      </Flex>
    </>
  );
};

export default Index;
