import styled from "styled-components";

export const CategoriesWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 118px 0;
`;

export const CategoryLable = styled.span`
  font-family: var(--font-montserrat);
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  color: var(--publish-time-color);
  padding: 8px 16px;
  border-radius: 32px;
  border: 1px solid var(--category-border-color) ;
`;
