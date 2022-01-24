import { IconButton, useColorMode } from '@chakra-ui/react'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'

const ColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const isLight = colorMode === 'light'
  const title = `Switch to ${isLight ? 'dark' : 'light'} mode`

  return (
    <IconButton
      aria-label={title}
      title={title}
      icon={colorMode === 'light' ? <HiOutlineMoon /> : <HiOutlineSun />}
      onClick={toggleColorMode}
      variant="ghost"
      fontSize="24px"
      _hover={{
        bgColor: 'primary.100',
        color: isLight ? 'current' : 'primary.600',
      }}
    />
  )
}

export default ColorModeButton
