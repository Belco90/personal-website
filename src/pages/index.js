import { Box, Flex, Heading, Link, VStack, Icon } from '@chakra-ui/react'
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion'

import MainLayout from '~/components/MainLayout'
import ProfilePicture from '~/components/ProfilePicture'
import SEO from '~/components/SEO'
import config from '~/config'

const SocialLink = (props) => (
  <Link
    {...props}
    transition="transform 0.3s"
    _hover={{ transform: 'scale(1.3)' }}
  />
)

// TODO: get this animation back on Chakra v1
//const fadeInUp = keyframes`
//    from {
//    transform: translate3d(0, 20px, 0);
//  }
//
//  to {
//    transform: translate3d(0, 0, 0);
//    opacity: 1;
//  }
//`;
//
//const cssFadeInUp = css`
//  opacity: 0;
//  animation: ${fadeInUp} 1s both;
//`;

const Index = () => {
  return (
    <MainLayout>
      <SEO title="Home" />
      <Flex justify="center" aligh="center" height="100%">
        <VStack
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
                <ProfilePicture priority />
              </Box>
            </Box>
          </Box>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Box
              borderY="solid 1px"
              borderTopColor="gray.500"
              borderBottomColor="gray.500"
              px={{ base: 2, md: 8 }}
              py={5}
            >
              <Heading as="h1" mb={4}>
                Mario Beltrán Alarcón
              </Heading>
              <Heading as="h2" fontSize="lg" fontWeight="normal">
                Frontend Web Engineer
              </Heading>
            </Box>
          </motion.div>

          <Flex justify="space-evenly" align="center" w="full" fontSize="2xl">
            <SocialLink
              href={`mailto:${config.social.email}`}
              aria-label="Email"
            >
              <Icon as={FaEnvelope} aria-label="Email icon" />
            </SocialLink>
            <SocialLink
              href={`https://github.com/${config.social.github}`}
              aria-label="GitHub"
            >
              <Icon as={FaGithub} aria-label="GitHub icon" />
            </SocialLink>
            <SocialLink
              href={`https://www.linkedin.com/in/${config.social.linkedin}`}
              aria-label="Linkedin"
            >
              <Icon as={FaLinkedin} aria-label="Linkedin icon" />
            </SocialLink>
            <SocialLink
              href={`https://twitter.com/${config.social.twitter}`}
              aria-label="Twitter"
            >
              <Icon as={FaTwitter} aria-label="Twitter icon" />
            </SocialLink>
          </Flex>
        </VStack>
      </Flex>
    </MainLayout>
  )
}

export default Index
