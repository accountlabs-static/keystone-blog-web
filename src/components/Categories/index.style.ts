import styled, { css } from 'styled-components'
import { DEVICE_QUERY_MOBILE } from '../../styles/breakpoints'

export const CategoriesWrapper = styled.div`
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

export const CategoryLable = styled.span<{ $actived: boolean }>`
    font-family: var(--font-montserrat);
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
    color: var(--publish-time-color);
    padding: 8px 16px;
    border-radius: 32px;
    border: 1px solid var(--category-border-color);
    cursor: pointer;
    ${(props) => props.$actived && activedCategoryLabelCss}
    &:hover {
        ${activedCategoryLabelCss}
    }
    @media ${DEVICE_QUERY_MOBILE} {
        font-size: 12px;
        line-height: 18px;
        display: inline-block;
        margin-right: 8px;
    }
`
