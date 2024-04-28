import styled from 'styled-components'
import { DEVICE_QUERY_MOBILE } from '../../styles/breakpoints'
import { H5, H6 } from '../styles/heading'
import { Body } from '../styles/text'
import Link from 'next/link'

interface CategoryProps {
  $bgColor: string
  $fontColor: string
}
export const Category = styled(H6)<CategoryProps>`
  padding: 2px 8px;
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$fontColor};
  border-radius: 4px;
  @media ${DEVICE_QUERY_MOBILE} {
    font-size: 14px;
    line-height: 22px;
  }
`

export const Title = styled(H5).attrs({
  as: 'h3',
})`
  margin-top: 24px;
  color: var(--banner-bg-color);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3;
  @media ${DEVICE_QUERY_MOBILE} {
    font-size: 18px;
    line-height: 28px;
  }
`

export const HeroCardWrapper = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 80px;
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
    flex-direction: column;
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
  width: 480px;
  @media ${DEVICE_QUERY_MOBILE} {
    width: 100%;
  }
`

export const PublishTime = styled(Body)`
  color: var(--publish-time-color);
  @media ${DEVICE_QUERY_MOBILE} {
    font-size: 12px;
    line-height: 18px;
  }
`
export const CategoryAndPublishTime = styled.div`
  font-family: var(--font-open-sans);
  display: flex;
  justify-content: space-between;
  align-items: center;
`
