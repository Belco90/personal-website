'use client'
import { ark } from '@ark-ui/react/factory'
import { createContext, mergeProps } from '@ark-ui/react/utils'
import { useMemo } from 'react'

import { styled } from '#/styled-system/jsx'
import { button } from '#/styled-system/recipes'
import type { ButtonVariantProps } from '#/styled-system/recipes'

import { Group, type GroupProps } from './group'
import { Loader } from './loader'

import type { ComponentProps, ReactNode, RefObject } from 'react'

interface ButtonLoadingProps {
	/**
	 * If `true`, the button will show a loading spinner.
	 * @default false
	 */
	loading?: boolean | undefined
	/**
	 * The text to show while loading.
	 */
	loadingText?: ReactNode | undefined
	/**
	 * The spinner to show while loading.
	 */
	spinner?: ReactNode | undefined
	/**
	 * The placement of the spinner
	 * @default "start"
	 */
	spinnerPlacement?: 'start' | 'end' | undefined
}

type BaseButtonProps = ComponentProps<typeof BaseButton>
const BaseButton = styled(ark.button, button)

export interface ButtonProps extends BaseButtonProps, ButtonLoadingProps {}

export const Button = function Button({
	ref,
	...props
}: ButtonProps & { ref?: RefObject<HTMLButtonElement | null> }) {
	const propsContext = useButtonPropsContext()
	const buttonProps = useMemo(
		() => mergeProps<ButtonProps>(propsContext, props),
		[propsContext, props],
	)

	const { loading, loadingText, children, spinner, spinnerPlacement, ...rest } =
		buttonProps
	return (
		<BaseButton
			type="button"
			ref={ref}
			{...rest}
			data-loading={loading ? '' : undefined}
			disabled={loading || rest.disabled}
		>
			{!props.asChild && loading ? (
				<Loader
					spinner={spinner}
					text={loadingText}
					spinnerPlacement={spinnerPlacement}
				>
					{children}
				</Loader>
			) : (
				children
			)}
		</BaseButton>
	)
}

export interface ButtonGroupProps extends GroupProps, ButtonVariantProps {}

export const ButtonGroup = function ButtonGroup({
	ref,
	...props
}: ButtonGroupProps & { ref?: RefObject<HTMLDivElement | null> }) {
	const [variantProps, otherProps] = useMemo(
		() => button.splitVariantProps(props),
		[props],
	)
	return (
		<ButtonPropsProvider value={variantProps}>
			<Group ref={ref} {...otherProps} />
		</ButtonPropsProvider>
	)
}

const [ButtonPropsProvider, useButtonPropsContext] =
	createContext<ButtonVariantProps>({
		name: 'ButtonPropsContext',
		hookName: 'useButtonPropsContext',
		providerName: '<PropsProvider />',
		strict: false,
	})
