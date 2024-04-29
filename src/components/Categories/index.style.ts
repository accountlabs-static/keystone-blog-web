import styled, { css } from 'styled-components'
import { DEVICE_QUERY_MOBILE } from '@/styles/breakpoints'
import { H6 } from '../styles/heading'

export const CategoriesWrapper = styled.div`
  font-family: var(--font-neue-kaine);
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 118px 0;
  @media ${DEVICE_QUERY_MOBILE} {
    margin: 64px 0;
    white-space: nowrap;
    overflow-x: auto;
    display: block;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`

const activedCategoryLabelCss = css`
  color: var(--hover-text-color);
  background-color: var(--quote-border-color);
  border-color: var(--quote-border-color);
`

export const CategoryLable = styled(H6)<{ $actived: boolean }>`
  color: var(--fg-muted-color);
  padding: 8px 16px;
  border-radius: 32px;
  border: 1px solid var(--category-border-color);
  cursor: pointer;
  ${(props) => props.$actived && activedCategoryLabelCss}
  &:hover {
    ${activedCategoryLabelCss}
  }
  @media ${DEVICE_QUERY_MOBILE} {
    display: inline-block;
    margin-right: 8px;
    font-size: 12px;
    line-height: 18px;
  }
`
