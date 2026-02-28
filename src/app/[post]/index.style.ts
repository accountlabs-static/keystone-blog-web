import styled, {css } from 'styled-components'
import { DEVICE_QUERY_MOBILE } from '@/styles/breakpoints'
import Link from 'next/link';

export const PostContainer = styled.div``

export const TopBanner = styled.div`
  background-color: var(--banner-bg-color);
  display: flex;
  padding: 80px 312px 66px 312px;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 66px;
  picture > img {
    object-fit: cover;
  }
  @media ${DEVICE_QUERY_MOBILE} {
    flex-direction: column;
    padding: 48px 24px;
    width: auto;
    picture > img {
      width: 100%;
      height: auto;
    }
  }
`

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 60px;
  @media ${DEVICE_QUERY_MOBILE} {
    margin-right: 0;
  }
`

export const Title = styled.h1`
  color: var(--title-color);
  width: 560px;
  margin-top: 8px;
  margin-bottom: 32px;
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3;
  @media ${DEVICE_QUERY_MOBILE} {
    width: auto;
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 16px;
  }
`

export const Category = styled.span`
  background: ${(props) => props.color};
  width: fit-content;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: var(--font-montserrat);
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  text-transform: uppercase;
  @media ${DEVICE_QUERY_MOBILE} {
    font-size: 12px;
    line-height: 18px;
  }
`

export const PublishTime = styled.div``

export const PublishTimeAndReadingTime = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 24px;
  color: var(--label-color);
  font-family: var(--font-open-sans);
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.72px;
  @media ${DEVICE_QUERY_MOBILE} {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 40px;
  }
`

export const ReadingTime = styled.div``

const HoverStyle = css`
  position: relative;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  .default {
    transition: var(--transition);
  }
  .active {
    position: absolute;
    top: 0;
    z-index: 1;
    opacity: 0;
    transition: var(--transition);
  }
  &:hover {
    .default {
      opacity: 0;
    }
    .active {
      opacity: 1;
    }
  }
`
export const BackToHome = styled(Link)`
  ${HoverStyle}
  .active {
    left: 0;
  }
  span {
    background: linear-gradient(90deg, #1d56f5 0%, #00b3f5 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    width: fit-content;
  }
  &:hover {
    span {
      background: var(--bd-primary-color);
      background-clip: text;
    }
  }
`

export const Share = styled.div`
  ${HoverStyle}
  .active {
    right: 0;
  }
  span {
    color: var(--fg-subtle-color);
  }
  &:hover {
    span {
      color: var(--bd-primary-color);
      transition: var(--transition);
    }
  }
`

export const BackToHomeAndShare = styled.div`
  padding: 24px 0;
  width: 1220px;
  margin: 40px auto;
  border-bottom: 1px solid var(--category-border-color);
  font-family: var(--font-montserrat);
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  img {
    width: 24px;
    height: 24px;
  }
  picture {
    height: 24px;
  }
  @media ${DEVICE_QUERY_MOBILE} {
    font-size: 14px;
    line-height: 22px;
    width: calc(100vw - var(--mobile-padding) * 2);
    margin-bottom: 0;
  }
`

export const TableOfContentsContainer = styled.div`
  width: 300px;
  margin-left: 40px;
  position: sticky;
  top: 50px;
  height: fit-content;
  max-height: calc(100vh - 120px);
  overflow-y: auto;
`
export const TableOfContentsUl = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const TableOfContentsLi = styled.div<{ depth?: number }>`
  padding-left: ${(props) => (props.depth && props.depth > 2 ? (props.depth - 2) * 16 : 0)}px;
  color: ${(props) => (props.depth === 2 ? 'var(--fg-primary-color)' : 'var(--fg-subtle-color)')};
`

export const TableOfContentsLink = styled.a`
  display: block;
  text-decoration: none;
  font-size: 18px;
  line-height: 28px;
  padding: 6px 12px;
  border-radius: 4px;
  transition: all 0.2s ease;
  font-family: var(--font-open-sans);

  &:hover {
    color: var(--bd-primary-color, #1F5AFF);
    background-color: rgba(31, 90, 255, 0.08);
  }
`

export const BodyContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 1580px;
  margin: 0 auto;
  @media ${DEVICE_QUERY_MOBILE} {
    width: 100%;
  }
`

export const ArticleContainer = styled.div`
  @media ${DEVICE_QUERY_MOBILE} {
    width: 100%;
  }
`

export const Summary = styled.div`
  margin: 20px 40px;
  padding: 24px;
  width: 880px;
  background: #F5F7FC;
  @media ${DEVICE_QUERY_MOBILE} {
    width: auto;
    margin: 20px 24px 0 24px;
  }
`

export const SummaryTitle = styled.h2`
  font-weight: 733;
  font-size: 22px;
  line-height: 32px;
`

export const SummaryContent = styled.div`
  font-family: Open Sans;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.04em;
  margin-top: 12px;
`

export const BodyText = styled.div`
  font-family: var(--font-open-sans);
  width: 880px;
  margin: 20px 40px;
  color: var(--banner-bg-color);
  @media ${DEVICE_QUERY_MOBILE} {
    width: auto;
    padding: 32px 24px 40px 24px;
    margin: 0 auto;
  }

  h1 {
    margin: 0.67em 0;
  }

  h2 {
    margin: 0.75em 0;
  }

  h3 {
    margin: 0.83em 0;
  }

  h4,
  p,
  blockquote,
  ul,
  fieldset,
  form,
  ol,
  dl,
  dir,
  menu {
    margin: 1.12em 0;
  }

  h5 {
    font-size: 0.83em;
    margin: 1.5em 0;
  }

  h6 {
    font-size: 0.75em;
    margin: 1.67em 0;
  }

  a {
    color: var(--link-color);
    text-decoration: none;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      display: inline-block;
      left: 0;
      bottom: 4px;
      width: 0;
      height: 1px;
      background: var(--link-color);
      transition: width 0.25s ease-in-out;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }
  h2 {
    font-size: 24px;
    font-weight: 733;
    line-height: 36px;
    @media ${DEVICE_QUERY_MOBILE} {
      font-size: 18px;
      line-height: 28px;
    }
  }
  h3 {
    font-size: 18px;
    font-weight: 733;
    line-height: 28px;
    @media ${DEVICE_QUERY_MOBILE} {
      font-size: 14px;
      line-height: 22px;
    }
  }
  p {
    font-family: var(--font-open-sans);
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    @media ${DEVICE_QUERY_MOBILE} {
      font-size: 16px;
      line-height: 24px;
    }
  }
  pre {
    padding: 12px;
    background-color: #f9f9f9;
    border-radius: 8px;
    white-space: pre-wrap;
    overflow: auto;
  }
  .twitter-tweet {
    margin-right: auto;
    margin-left: auto;
  }
  img {
    width: 100%;
    padding: 0 180px;
    background-color: white;
    @media ${DEVICE_QUERY_MOBILE} {
      width: 100%;
      padding: 0;
    }
  }
  ul {
    padding-left: 16px;
  }
  li {
    font-size: 18px;
    line-height: 28px;
    @media ${DEVICE_QUERY_MOBILE} {
      font-size: 16px;
      line-height: 24px;
    }
  }
  blockquote {
    background-color: var(--quote-bg-color);
    border-left: solid 2px var(--quote-border-color);
    padding: 20px 32px;
    margin: 20px 0 0 0;
    p {
      margin: 0;
    }
  }
  p.markdown-alert-title {
    display: none;
  }
  .markdown-alert-note {
    p:nth-child(2) {
      color: var(--link-color);
      font-size: 16px;
      margin: 20px 0 0 0;
      padding: 16px 14px;
      background-color: var(--note-bg-color);
      display: flex;
      align-items: center;
      &::before {
        content: url('/note.svg');
        height: 24px;
        margin-right: 12px;
        display: block;
      }
    }
  }
  .markdown-alert-warning {
    p:nth-child(2) {
      color: var(--warning-font-color);
      font-size: 16px;
      margin: 20px 0 0 0;
      padding: 16px 14px;
      background-color: var(--warning-bg-color);
      display: flex;
      align-items: center;
      &::before {
        content: url('/warning.svg');
        height: 24px;
        margin-right: 12px;
        display: block;
      }
    }
  }
`
