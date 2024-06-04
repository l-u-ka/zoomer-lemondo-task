import React from "react";
import { NavButtonContainer, NavButtonIcon, NavButtonText } from "./styled";
import { ButtonEnum } from "..";

type NavButtonProps = {
  type: ButtonEnum;
  text: string;
  icon: string;
};

export default function NavButton({ type, text, icon }: NavButtonProps) {
  return (
    <NavButtonContainer type={type}>
      <NavButtonIcon src={icon} alt="nav button icon" />
      <NavButtonText type={type}>{text}</NavButtonText>
    </NavButtonContainer>
  );
}
