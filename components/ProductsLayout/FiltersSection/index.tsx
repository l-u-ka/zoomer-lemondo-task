import React, { useState } from "react";
import {
  ClearButton,
  ClearButtonText,
  FiltersContainer,
  FilterHeader,
  Title,
  CloseButton,
} from "./styled";
import { useRouter } from "next/router";
import BinIcon from "@/assets/images/bin-icon.png";
import { useFiltersContext } from "@/context/filters-provider";
import ProductsFilter from "./ProductsFilter";
import CloseX from "@/assets/images/close-icon.png";

export default function FiltersSection({ onClose }: { onClose?: () => void }) {
  const router = useRouter();
  const { defaultMaxPrice, defaultMinPrice, filters } = useFiltersContext();

  const clearFilters = () => {
    router.replace({
      pathname: "/",
      query: {},
    });
  };

  return (
    <FiltersContainer>
      <FilterHeader>
        {/* <CloseButton src={CloseX.src} onClick={onClose} /> */}
        <div className="title-close">
          <CloseButton src={CloseX.src} onClick={onClose} />
          <Title>ფილტრი</Title>
        </div>
        <ClearButton onClick={clearFilters}>
          <img
            src={BinIcon.src}
            alt="clear filet icon"
            className="w-full mr-2"
          />
          <ClearButtonText>გასუფთავება</ClearButtonText>
        </ClearButton>
      </FilterHeader>
      <hr className="mt-2 mb-4 border border-solid border-white dark:border-dark-white" />
      <ProductsFilter />
    </FiltersContainer>
  );
}
