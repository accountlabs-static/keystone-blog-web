import styled from 'styled-components';

export const PostContainer = styled.div``;

export const TopBanner = styled.div`
  background-color: var(--banner-bg-color);
  display: flex;
  padding: 80px 312px 66px 312px;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 66px;
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 60px;
`;

export const Title = styled.h1`
  color: var(--title-color);
  font-family: 'Mont';
  width: 560px;
  margin-top: 8px;
  margin-bottom: 32px;
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
`;

export const Category = styled.div`
  color: var(--label-color);
  font-family: var(--font-open-sans);
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
`;

export const ReadingTime = styled.div``;

export const HeroImage = styled.img``;

export const BodyText = styled.div`
  font-family: var(--font-open-sans);
  width: 880px;
  margin: 76px auto;
  color: var(--banner-bg-color);
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
  }
  h3 {
    font-family: var(--font-montserrat);
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }
  p {
    font-family: var(--font-open-sans);
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
  }
  .twitter-tweet {
    margin-right: auto;
    margin-left: auto;
  }
  img {
    height: 300px;
    width: 520px;
    padding: 0 180px;
    background-color: var(--quote-bg-color);
  }
  ul {
    padding-left: 16px;
  }
  li {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 18px;
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
      &::before {
        content: url("/note.svg");
        position: relative;
        top: 6px;
        margin-right: 12px;
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
      &::before {
        content: url("/warning.svg");
        position: relative;
        top: 6px;
        margin-right: 12px;
      }
    }
  }
`;
