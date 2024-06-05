import styled from "styled-components";

export const SectionContainer = styled.div`
  width: 100%;
`;

export const DesktopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  /* @media (max-width: 1024px) {
    display: none;
  } */
`;

export const GoBackContainer = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

export const GoBackIcon = styled.img`
  height: 100%;
  margin-right: 22px;
`;

export const CategoryInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const CategoryTitle = styled.h2`
  font-family: "FiraGO", sans-serif;
  font-weight: bold;
  font-size: 1rem;
  line-height: 19px;
  color: var(--black-main);
`;

export const CategoryIcon = styled.img`
  width: 24px;
  margin-right: 0.5rem;
`;

export const LayoutOption = styled.img`
  width: 1.5rem;
`;

export const DesktopSortContainer = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
`;

export const MobileSection = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const MobileSecionContent = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
