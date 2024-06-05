import styled from "styled-components";

export const NavSearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 0.75rem;
  transition: all 0.5s ease-in-out;

  @media (min-width: 1024px) {
    width: 400px;
    margin-top: 0;
  }

  @media (min-width: 1280px) {
    width: 460px;
  }
`;

export const NavSearchIcon = styled.img`
  position: absolute;
  left: 0.75rem;
  width: 20px;
`;

export const NavSearchInput = styled.input`
  padding: 0.75rem 1.25rem;
  padding-left: 2.5rem;
  width: 100%;
  border: solid 1px ${({ theme }) => theme.colors.orangeMain};
  border-radius: 1rem;
  font-size: 0.875rem;
  font-family: "FiraGO", sans-serif;
  background-color: ${({ theme }) => theme.colors.themeBg};
  color: ${({ theme }) => theme.colors.blackMain};
  transition: background-color 0.3s ease-in-out;
`;
