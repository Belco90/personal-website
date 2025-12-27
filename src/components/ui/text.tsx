import { styled } from '#/styled-system/jsx'
import { text } from '#/styled-system/recipes'
import type { TextVariantProps } from '#/styled-system/recipes'
import type { StyledComponent } from '#/styled-system/types'

import type { ComponentProps, ElementType } from 'react'

type Props = TextVariantProps & { as?: ElementType }

export const Text = styled('p', text) as StyledComponent<'p', Props>
export type TextProps = ComponentProps<typeof Text>
