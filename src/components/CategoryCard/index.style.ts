import styled from "styled-components";

export const Title = styled.h3`
  font-family: "Mont";
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  color: var(--banner-bg-color);
`;

export const CategoryCardWrapper = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 40px;
  align-items: center;
  &:hover {
    ${Title} {
      color: var(--link-color-);
    }
  }
`;

export const PostInfo = styled.div``;

export const PublishTime = styled.div`
  font-family: var(--font-open-sans);
  color: var(--publish-time-color);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`;
