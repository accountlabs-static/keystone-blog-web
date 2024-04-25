import styled from 'styled-components'
import { ButtonProps } from '.'

export const ButtonStyled = styled.button<ButtonProps>`
  font-family: var(--font-montserrat);
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  display: inline-flex;
  align-items: center;
  padding: 12px 18px 12px 28px;
  color: white;
  background: var(--gd-primary-color);
  appearance: none;
  outline: none;
  border: none;
  cursor: pointer;
  :disabled {
    cursor: not-allowed;
  }
  &:hover {
    color: var(--hover-text-color);
  }
`
