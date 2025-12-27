import { ark } from '@ark-ui/react/factory'

import { styled } from 'styled-system/jsx'
import { absoluteCenter } from 'styled-system/recipes'

import type { ComponentProps } from 'react'

export type AbsoluteCenterProps = ComponentProps<typeof AbsoluteCenter>
export const AbsoluteCenter = styled(ark.div, absoluteCenter)
