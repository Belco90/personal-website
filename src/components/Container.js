import { Box } from '@chakra-ui/core'

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
