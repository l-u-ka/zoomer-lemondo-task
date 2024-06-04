import React from "react";
import {
  CustomContainer,
  DesktopContainer,
  HeaderContainer,
  HeaderLogo,
  MobileContainer,
  MobileIcon,
} from "./styled";
import NavButton from "./NavButton";
import NavSearch from "./NavSearch";
import ZoomerLogo from "@/assets/images/zoommer-logo.png";
import NavIcon from "@/assets/images/nav.png";
import CartIcon from "@/assets/images/shopping-cart.png";
import ProfileIcon from "@/assets/images/profile-circle.png";
import MenuIcon from "@/assets/images/menu.png";
import MobileSearchIcon from "@/assets/images/search-mobile.png";

export enum ButtonEnum {
  DEFAULT = "default",
  PRIMARY = "primary",
}

function Header() {
  return (
    <HeaderContainer>
      <DesktopContainer>
        <HeaderLogo src={ZoomerLogo.src} alt="main logo" />
        <CustomContainer>
          <NavButton
            text="ნავიგაცია"
            type={ButtonEnum.PRIMARY}
            icon={NavIcon.src}
          />
          <NavSearch />
          <NavButton
            text="კალათა"
            type={ButtonEnum.DEFAULT}
            icon={CartIcon.src}
          />
          <NavButton
            text="პროფილი"
            type={ButtonEnum.DEFAULT}
            icon={ProfileIcon.src}
          />
        </CustomContainer>
      </DesktopContainer>
      <MobileContainer>
        <div>
          <MobileIcon src={MenuIcon.src} alt="categories burger logo" />
          <HeaderLogo src={ZoomerLogo.src} alt="main logo" />
        </div>
        <div>
          <MobileIcon src={MobileSearchIcon.src} alt="search icon" />
          <MobileIcon src={CartIcon.src} alt="cart icon" />
        </div>
      </MobileContainer>
    </HeaderContainer>
  );
}

export default Header;
