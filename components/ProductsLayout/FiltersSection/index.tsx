import React, { useState } from "react";
import {
  ClearButton,
  ClearButtonText,
  FiltersContainer,
  FilterHeader,
  Title,
} from "./styled";
import { useRouter } from "next/router";
import BinIcon from "@/assets/images/bin-icon.png";
import { useFiltersContext } from "@/context/filters-provider";
import ProductsFilter from "./ProductsFilter";

export default function FiltersSection() {
  const router = useRouter();
  const { defaultMaxPrice, defaultMinPrice, filters } = useFiltersContext();
  console.log(defaultMaxPrice, defaultMinPrice, filters);

  const clearFilters = () => {
    router.replace({
      pathname: "/",
      query: {},
    });
  };

  return (
    <FiltersContainer>
      <FilterHeader>
        <Title>ფილტრი</Title>
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
