import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const FilterContainer = styled.div`
  margin-top: 2rem;
`;

export const FilterTitle = styled.div<{ $rotate: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
    transform: ${({ $rotate }) => (!$rotate ? "rotate(180deg)" : "none")};
  }
  h3 {
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    margin-bottom: 0.5rem;
  }
`;

export const FilterValues = styled.div<{ $isVisible: boolean }>`
  display: ${({ $isVisible }) => ($isVisible ? "grid" : "none")};
  grid-template-columns: auto;
  row-gap: 1rem;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

export const MoreValuesButton = styled.div<{ $isVisible: boolean }>`
  display: ${({ $isVisible }) => ($isVisible ? "block" : "none")};
  font-size: 1rem;
  font-weight: 400;
  line-height: 20px;
  margin-top: 0.8rem;
  color: ${({ theme }) => theme.colors.orangeMain};
`;
