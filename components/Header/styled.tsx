import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  backdrop-filter: blur(8px);
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.themeSecondaryBg};
  transition: background-color 0.3s ease-in-out;
  z-index: 50;
`;

export const ContactInfo = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.orangeMain};

  @media (max-width: 1024px) {
    display: none;
  }
`;
export const ContactInfoContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 0.8rem;
  display: flex;
  justify-content: space-between;
`;

export const PhoneInfo = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-left: 0.5rem;
    font-family: "FiraGO", sans-serif;
    font-size: 12px;
    font-weight: 600;
    line-height: 14px;
    color: white;
    //text-wrap: nowrap;
  }
`;
export const Info = styled.div`
  display: grid;
  grid-auto-flow: column;
  column-gap: 1.5rem;

  p {
    font-family: "FiraGO", sans-serif;
    font-size: 12px;
    font-weight: 600;
    line-height: 14px;
    color: white;
    opacity: 0.7;
  }
`;

export const DesktopContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0.8rem;
  margin: 0 auto;
  justify-content: space-between;

  @media (max-width: 1024px) {
    display: none;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const MobileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0.8rem;

  & > div {
    display: flex;
    gap: 1rem;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const HeaderLogo = styled.img`
  height: 28px;
  cursor: pointer;
  @media (min-width: 1024px) {
    height: 40px;
  }
`;

export const MobileIcon = styled.img`
  width: 24px;
  cursor: pointer;
`;

export const CustomContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  gap: 20px;
  justify-content: end;
`;
