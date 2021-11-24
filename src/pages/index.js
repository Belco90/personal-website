import {
  Box,
  Flex,
  Heading,
  Link,
  VStack,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { NextSeo } from 'next-seo'

import ProfilePicture from '~/components/ProfilePicture'
import config from '~/user.config'

const SocialLink = (props) => (
  <Link
    {...props}
    transition="transform 0.3s"
    _hover={{ transform: 'scale(1.3)' }}
  />
)

const Index = () => {
  const primaryColor = useColorModeValue('primary.600', 'primary.400')

  return (
    <>
      <NextSeo title="Home" />
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
              bgGradient={`radial(${primaryColor} 1px, transparent 1px)`}
              backgroundSize="calc(10 * 1px) calc(10 * 1px)"
              rounded="full"
            >
              <Box transform="translate(30px, -30px)">
                <ProfilePicture priority />
              </Box>
            </Box>
          </Box>

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
              Frontend Software Engineer
            </Heading>
          </Box>

          <Flex justify="space-evenly" align="center" w="full" fontSize="2xl">
            <SocialLink
              href={`mailto:${config.social.email}`}
              aria-label="Email"
            >
              <Icon as={FaEnvelope} aria-label="Email" />
            </SocialLink>
            <SocialLink href={config.social.github} aria-label="GitHub">
              <Icon as={FaGithub} aria-label="GitHub" />
            </SocialLink>
            <SocialLink href={config.social.linkedin} aria-label="LinkedIn">
              <Icon as={FaLinkedin} aria-label="LinkedIn" />
            </SocialLink>
            <SocialLink href={config.social.twitter} aria-label="Twitter">
              <Icon as={FaTwitter} aria-label="Twitter" />
            </SocialLink>
          </Flex>
        </VStack>
      </Flex>
    </>
  )
}

export default Index
