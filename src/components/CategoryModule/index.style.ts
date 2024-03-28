import styled from "styled-components";

export const CategoryModuleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  margin-top: 80px;
  flex-direction: column;
`;

export const CategoryName = styled.div`
  font-family: "Mont";
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  height: 48px;
  padding: 8px 0;
  border-bottom: 1px solid var(--category-border-color);
`;

export const Posts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;
