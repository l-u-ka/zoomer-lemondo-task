import React from "react";
import {
  CategoryTitle,
  DesktopSection,
  DesktopSortContainer,
  GoBackIcon,
  MobileSection,
  SectionContainer,
  CategoryIcon,
  CategoryInfo,
  LayoutOption,
  MobileSecionContent,
  DesktopTopSection,
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
        {/* products top sectoin for desktop */}
        <DesktopTopSection>
          <GoBackIcon src={ArrowToLeft.src} alt="go back icon" />
          <CategoryInfo>
            <CategoryIcon src={Apple.src} />
            <CategoryTitle>Apple</CategoryTitle>
          </CategoryInfo>
        </DesktopTopSection>
        {/* sort feature in top section for desktop */}
        <DesktopSortContainer>
          <ProductsSort />
          <LayoutOption src={ColsIcon.src} />
          <LayoutOption src={RowsIcon.src} />
        </DesktopSortContainer>
      </DesktopSection>
      <hr />
      {/* products top sectoin for desktop */}
      <MobileSection>
        {/* sort and filter feature in top section for mobile */}
        <MobileSecionContent>
          <ProductsSort />
          <FilterMobile />
        </MobileSecionContent>
        <hr />
      </MobileSection>
    </SectionContainer>
  );
}
