import React from "react";
import { NavSearchContainer, NavSearchIcon, NavSearchInput } from "./styled";
import SearchIcon from '@/assets/images/search-normal.png'

export default function NavSearch() {
  return (
    <NavSearchContainer>
      <NavSearchIcon src={SearchIcon.src} alt="search icon" />
      <NavSearchInput type="text" placeholder="ძიება" />
    </NavSearchContainer>
  );
}
