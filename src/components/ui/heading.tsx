import { styled } from '#/styled-system/jsx'
import { heading } from '#/styled-system/recipes'
import type { HeadingVariantProps } from '#/styled-system/recipes'
import type { StyledComponent } from '#/styled-system/types'

import type { ComponentProps, ElementType } from 'react'

type Props = HeadingVariantProps & { as?: ElementType }

export const Heading = styled('h2', heading) as StyledComponent<'h2', Props>
export type HeadingProps = ComponentProps<typeof Heading>
