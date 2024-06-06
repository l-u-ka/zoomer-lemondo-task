import styled from "styled-components";

export const FiltersContainer = styled.div`
  width: 350px;
`;

export const FilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  .title-close {
    display: flex;
    align-items: center;
  }
`;

export const Title = styled.h2`
  font-family: "FiraGO", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 19px;
  color: #000000;
  margin-right: 8px;
`;

export const ClearButton = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

export const ClearButtonText = styled.h2`
  font-family: "FiraGO", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  color: #000000;
  opacity: 0.6;
  margin-right: 2px;
  margin-left: 6px;
`;

export const CloseButton = styled.img`
  @media (min-width: 1024px) {
    display: none;
  }
  margin-right: 0.5rem;
  cursor: pointer;
`;
