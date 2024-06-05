import styled from "styled-components";

export const FilterContainer = styled.div`
  margin-top: 1rem;
`;

export const FilterTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
  }
  h3 {
    font-family: "FiraGO", sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    margin-bottom: 0.5rem;
  }
`;

export const FilterValues = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? "grid" : "none")};
  grid-template-columns: auto;
  row-gap: 1rem;
`;
