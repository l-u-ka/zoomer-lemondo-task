import styled from "styled-components";

export const MobileNavContainer = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
  display: grid;
  grid-auto-flow: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.themeBg};
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 20;
  padding: 1rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  z-index: 100;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;

export const IconText = styled.p`
  opacity: 0.6;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
`;
