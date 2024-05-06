import { DEVICE_QUERY_MOBILE } from '@/styles/breakpoints'
import styled from 'styled-components'

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FooterLoadMore = styled(Center)`
  margin-top: 128px;

  @media ${DEVICE_QUERY_MOBILE} {
    margin-top: 64px;
  }
`
