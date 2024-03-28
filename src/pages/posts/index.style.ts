import styled from 'styled-components';
import { DEVICE_QUERY_MOBILE } from '../../styles/breakpoints';

export const PostContainer = styled.div``;

export const TopBanner = styled.div`
  background-color: var(--banner-bg-color);
  display: flex;
  padding: 80px 312px 66px 312px;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 66px;
  @media ${DEVICE_QUERY_MOBILE} {
    flex-direction: column;
    padding: 48px 24px;
    width: auto;
    picture > img {
      width: 342px;
      height: 190px;
    }
  }
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 60px;
  @media ${DEVICE_QUERY_MOBILE} {
    margin-right: 0;
  }
`;

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
`;

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
`;

export const PublishTime = styled.div``;

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
`;

export const ReadingTime = styled.div``;

export const BackToHome = styled.div`
  padding: 24px 0;
  width: 1220px;
  margin: 40px auto;
  border-bottom: 1px solid var(--category-border-color);
  font-family: var(--font-montserrat);
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
  }
  picture {
    height: 24px;
    margin-right: 8px;
  }
  span {
    background: linear-gradient(90deg, #1d56f5 0%, #00b3f5 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    width: fit-content;
  }
  @media ${DEVICE_QUERY_MOBILE} {
    font-size: 14px;
    line-height: 22px;
    width: 342px;
    margin-bottom: 0;
  }
`;

export const BodyText = styled.div`
  font-family: var(--font-open-sans);
  width: 880px;
  margin: 76px auto;
  color: var(--banner-bg-color);
  @media ${DEVICE_QUERY_MOBILE} {
    width: auto;
    padding: 32px 24px 40px 24px;
    margin: 0 auto;
  }
  a {
    color: var(--link-color);
    text-decoration: none;
    position: relative;
    &::after {
      content: "";
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
    font-family: var(--font-montserrat);
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    @media ${DEVICE_QUERY_MOBILE} {
      font-size: 18px;
      line-height: 28px;
    }
  }
  h3 {
    font-family: var(--font-montserrat);
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
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
  .twitter-tweet {
    margin-right: auto;
    margin-left: auto;
  }
  img {
    width: 520px;
    padding: 0 180px;
    background-color: var(--quote-bg-color);
    @media ${DEVICE_QUERY_MOBILE} {
      width: 100%;
      padding: 0;
    }
  }
  ul {
    padding-left: 16px;
  }
  li {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 18px;
    @media ${DEVICE_QUERY_MOBILE} {
      font-size: 16px;
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
        content: url("/note.svg");
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
        content: url("/warning.svg");
        height: 24px;
        margin-right: 12px;
        display: block;
      }
    }
  }
`;
