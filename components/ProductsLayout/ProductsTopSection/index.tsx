import React from "react";
import {
  CategoryTitle,
  DesktopSection,
  DesktopSortContainer,
  GoBackContainer,
  GoBackIcon,
  MobileSection,
  SectionContainer,
  CategoryIcon,
  CategoryInfo,
  LayoutOption,
  MobileSecionContent,
} from "./styled";
import ProductsSort from "../ProductsSort";
import ArrowToLeft from "@/assets/images/left-arrow.png";
import Apple from "@/assets/images/apple.png";
import ColsIcon from "@/assets/images/grid-2.png";
import RowsIcon from "@/assets/images/grid-9.png";
import FilterMobile from "./FilterMobile";

export default function ProductsTopSection() {
  return (
    <SectionContainer>
      <DesktopSection>
        <GoBackContainer>
          <GoBackIcon src={ArrowToLeft.src} alt="go back icon" />
          {/* <CategoryTitle>{category}</CategoryTitle> */}
          <CategoryInfo>
            <CategoryIcon src={Apple.src} />
            <CategoryTitle>Apple</CategoryTitle>
          </CategoryInfo>
        </GoBackContainer>
        {/* desktop sort */}
        <DesktopSortContainer>
          <ProductsSort />
          <LayoutOption src={ColsIcon.src} />
          <LayoutOption src={RowsIcon.src} />
        </DesktopSortContainer>
      </DesktopSection>
      <hr />
      {/* mobile section here */}
      <MobileSection>
        <MobileSecionContent>
          <ProductsSort />
          <FilterMobile />
        </MobileSecionContent>
        <hr />
      </MobileSection>
    </SectionContainer>
  );
}
