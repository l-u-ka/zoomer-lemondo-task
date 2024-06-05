import styled from "styled-components";
import { ButtonEnum } from "..";

export const NavButtonContainer = styled.div<{ type: ButtonEnum }>`
  background-color: ${({ type }) =>
    type === ButtonEnum.DEFAULT
      ? ({ theme }) => theme.colors.themeBg
      : ({ theme }) => theme.colors.orangeMain};
  color: ${({ type }) =>
    type === ButtonEnum.DEFAULT
      ? ({ theme }) => theme.colors.blackMain
      : "white"};
  display: inline-flex;
  position: relative;
  height: 2.75rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  border-radius: 1rem;
  width: 130px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s ease-in-out;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    opacity: 1;
  }
`;

export const NavButtonIcon = styled.img`
  width: auto;
  height: 1.25rem;
`;

export const NavButtonText = styled.p<{ type: ButtonEnum }>`
  font-family: "FiraGo", sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  color: ${({ type }) =>
    type === ButtonEnum.DEFAULT
      ? ({ theme }) => theme.colors.blackMain
      : "white"};
`;
