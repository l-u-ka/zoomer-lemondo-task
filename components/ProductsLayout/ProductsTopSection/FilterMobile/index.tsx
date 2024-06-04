import React, { useState } from "react";
import ProductFilters from "../../ProductFilters";
import { FilterButton, FilterContainer, FilterModal } from "./styled";
export default function FilterMobile() {
  const [isFilterModal, setIsFilterModal] = useState(false);

  console.log(isFilterModal);

  return (
    <FilterContainer>
      <FilterButton onClick={() => setIsFilterModal(true)}>ფილტრი</FilterButton>
      <FilterModal isOpen={isFilterModal}>
        <ProductFilters />
      </FilterModal>
    </FilterContainer>
  );
}
