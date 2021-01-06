import { Box } from '@chakra-ui/react'

const Container = (props) => (
  <Box
    width="full"
    maxWidth="1280px"
    mx="auto"
    px={{ base: 2, md: 6 }}
    {...props}
  />
)

export default Container
