import type { IconType } from 'react-icons'
import {
  Box,
  Flex,
  Heading,
  Link,
  VStack,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

import ProfilePicture from '~/components/ProfilePicture'
import { UserConfig } from '~/user.config'

type SocialNetwork = keyof typeof UserConfig.social
const socialNetworks: Record<SocialNetwork, { title: string; icon: IconType }> =
  {
    github: { title: 'GitHub', icon: FaGithub },
    linkedin: { title: 'LinkedIn', icon: FaLinkedin },
    twitter: { title: 'Twitter', icon: FaTwitter },
  }

const IndexPage = () => {
  const primaryColor = useColorModeValue('primary.600', 'primary.400')

  return (
    <>
      <Flex justify="center" height="100%">
        <VStack
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
              backgroundSize="calc(7 * 1px) calc(7 * 1px)"
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
          >
            <Heading as="h1" mb={4}>
              Mario Beltrán Alarcón
            </Heading>
            <Heading
              as="h2"
              variant="gradient"
              fontSize="lg"
              fontWeight="normal"
            >
              Frontend Software Engineer
            </Heading>
          </Box>

          <Flex
            as="ul"
            listStyleType="none"
            justify="space-evenly"
            align="center"
            w="full"
            fontSize="2xl"
            aria-label="Social networks"
          >
            {Object.entries(socialNetworks).map(([id, { title, icon }]) => (
              <Box
                as="li"
                key={id}
                transition="transform 0.3s"
                _hover={{ transform: 'scale(1.3)' }}
              >
                <Link
                  href={UserConfig.social[id as SocialNetwork]}
                  aria-label={title}
                  title={title}
                >
                  <Icon as={icon} aria-hidden />
                </Link>
              </Box>
            ))}
          </Flex>
        </VStack>
      </Flex>
    </>
  )
}

export default IndexPage
