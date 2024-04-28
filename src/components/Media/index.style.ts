import { DEVICE_QUERY_MOBILE } from '@/styles/breakpoints'
import styled from 'styled-components'

export const MediaWrapper = styled.div`
  background-color: var(--popover-color);
  display: flex;
  padding: 6px 12px;
  border-radius: 32px;
  gap: 20px;
  button {
    height: 24px;
  }
  @media ${DEVICE_QUERY_MOBILE} {
    gap: 12px;
  }
`
