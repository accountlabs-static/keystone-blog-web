import { DEVICE_QUERY_MOBILE } from '@/styles/breakpoints'
import styled from 'styled-components'

export const NotificationWrapper = styled.div`
  position: absolute;
  left: 50vw;
  transform: translateX(-50%);
  background-color: var(--notification-bg-color);
  border: 1px solid var(--notification-border-color);
  justify-content: center;
  top: 80px;
  transition: top var(--transition);
  padding: 6px 16px;
  width: auto;
  gap: 0 8px;
  color: var(--label-color);
  @media ${DEVICE_QUERY_MOBILE} {
    top: 80vh;
  }
`

export const Desc = styled.span`
  @media ${DEVICE_QUERY_MOBILE} {
    font-size: 12px;
    line-height: 16px;
  }
  max-width: 640px;
`;
