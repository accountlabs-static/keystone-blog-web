import React, { ReactNode } from 'react'
import { ButtonStyled } from './style'

export interface ButtonProps {
  hidden?: boolean
  children?: ReactNode
  type?: 'primary'
  onClick?: () => void
}

export default function Button({ children, ...args }: ButtonProps) {
  return <ButtonStyled {...args}>{children}</ButtonStyled>
}
