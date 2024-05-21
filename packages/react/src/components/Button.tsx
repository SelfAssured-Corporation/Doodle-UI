import type { ButtonHTMLAttributes } from 'react'
import { cx } from '@/styled-system/css'
import { button } from '@/styled-system/recipes'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  palette?: 'action' | 'danger'
  usage?: 'filled' | 'outline' | 'text'
  shape?: 'sharp' | 'rounded'
}

export function Button(props: ButtonProps) {
  const { palette, usage, shape, ...nativeProps } = props
  return (
    <button
      {...nativeProps}
      className={cx(
        nativeProps.className,
        button({
          palette,
          usage,
          shape,
        }),
      )}
    />
  )
}
