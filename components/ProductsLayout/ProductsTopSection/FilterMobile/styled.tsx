import styled from "styled-components";

export const FilterContainer = styled.div`
  position: relative;
`;
export const FilterButton = styled.button``;
export const FilterModal = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  right: 0;
  top: 0;
  z-index: 20;
`;
