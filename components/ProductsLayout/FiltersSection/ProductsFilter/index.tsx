import { useFiltersContext } from "@/context/filters-provider";
import React from "react";
import { AllFiltersContainer } from "./styleds";
import PriceFilter from "./PriceFilter";
import ProductFilter from "./Filter";

export default function ProductsFilter() {
  const { filters } = useFiltersContext();
  return (
    <AllFiltersContainer>
      <PriceFilter />
      {filters.map((filter) => (
        <ProductFilter filter={filter} key={filter.name} />
      ))}
    </AllFiltersContainer>
  );
}
