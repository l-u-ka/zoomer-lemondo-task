import React from "react";
import MobileHomeIcon from "@/assets/images/mobile-home.svg";
import MobileSwapIcon from "@/assets/images/mobile-swap.svg";
import MobileSearchIcon from "@/assets/images/mobile-search.svg";
import MobileCartIcon from "@/assets/images/mobile-cart.svg";
import MobileProfileIcon from "@/assets/images/mobile-profile.svg";
import { FlexContainer, IconText, MobileNavContainer } from "./styled";
import Image from "next/image";

const icons = [
  {
    name: "მთავარი",
    svg: MobileHomeIcon,
  },
  {
    name: "შედარება",
    svg: MobileSwapIcon,
  },
  {
    name: "ძიება",
    svg: MobileSearchIcon,
  },
  {
    name: "კალათა",
    svg: MobileCartIcon,
  },
  {
    name: "პროფილი",
    svg: MobileProfileIcon,
  },
];

export default function MobileNavigation() {
  return (
    <MobileNavContainer>
      {icons.map(({ name, svg }) => (
        <FlexContainer key={name}>
          <Image src={svg.src} alt={name} width={20} height={20} />
          <IconText>{name}</IconText>
        </FlexContainer>
      ))}
    </MobileNavContainer>
  );
}
