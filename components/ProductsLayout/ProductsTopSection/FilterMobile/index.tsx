import React, { useState } from "react";
import { FilterButton, FilterContainer } from "./styled";
import FilterModal from "./FilterModal";
import FiltersSection from "../../FiltersSection";
import FilterIcon from "@/assets/images/setting-5.png";
export default function FilterMobileModal() {
  const [isFilterModal, setIsFilterModal] = useState(false);

  const onClose = () => {
    setIsFilterModal(false);
  };
  return (
    <FilterContainer>
      <FilterButton onClick={() => setIsFilterModal(true)}>
        <img src={FilterIcon.src} />
        <p>ფილტრი</p>
      </FilterButton>
      <FilterModal isOpen={isFilterModal} onClose={onClose}>
        <FiltersSection />
      </FilterModal>
    </FilterContainer>
  );
}
