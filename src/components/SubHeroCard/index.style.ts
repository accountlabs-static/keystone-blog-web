import styled from "styled-components";

interface CategoryProps {
  bgColor: string;
  fontColor: string;
}
export const Category = styled.span<CategoryProps>`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  height: 28px;
  padding: 2px 8px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.fontColor};
  border-radius: 4px;
`;

export const Title = styled.h3`
  font-family: "Mont";
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  color: var(--banner-bg-color);
`;

export const SubHeroCardWrapper = styled.a`
  display: flex;
  flex-direction: column;
  width: 600px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 24px;
  &:hover {
    ${Title} {
      color: var(--link-color-);
    }
  }
`;

export const PostInfo = styled.div``;

export const PublishTime = styled.span`
  color: var(--publish-time-color);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`;

export const CategoryAndPublishTime = styled.div`
  font-family: var(--font-open-sans);
  display: flex;
  justify-content: space-between;
`;
