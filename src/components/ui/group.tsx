import { ark } from '@ark-ui/react'

import { styled } from '#/styled-system/jsx'
import { group } from '#/styled-system/recipes'

import type { ComponentProps } from 'react'

export type GroupProps = ComponentProps<typeof Group>
export const Group = styled(ark.div, group)
