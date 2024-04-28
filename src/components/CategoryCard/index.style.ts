import styled from 'styled-components'
import { DEVICE_QUERY_MOBILE } from '../../styles/breakpoints'
import { H5 } from '../styles/heading'
import Link from 'next/link'
import { Body } from '../styles/text'

export const Title = styled(H5).attrs({
  as: 'h3',
})`
  margin-top: 16px;
  color: var(--banner-bg-color);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3;
  @media ${DEVICE_QUERY_MOBILE} {
    min-height: auto;
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 16px;
  }
`

export const CategoryCardWrapper = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 40px;
  align-items: flex-start;
  &:hover {
    ${Title} {
      color: var(--link-color);
    }
  }
  img {
    object-fit: cover;
    border-radius: 24px;
  }
  @media ${DEVICE_QUERY_MOBILE} {
    gap: 24px;
    width: 100%;
    img {
      width: 100%;
      height: 190px;
      border-radius: 16px;
    }
  }
`

export const PostInfo = styled.div`
  @media ${DEVICE_QUERY_MOBILE} {
    width: 100%;
  }
`

export const PublishTime = styled(Body)`
  display: inline-block;
  margin-top: 16px;
  font-family: var(--font-open-sans);
  color: var(--publish-time-color);
`
