import React, { useState } from "react";
import { FilterButton, FilterMobileContainer } from "./styled";
import FilterModal from "./FilterModal";
import FiltersSection from "../../FiltersSection";
import FilterIcon from "@/assets/images/setting-5.png";
export default function FilterMobileModal() {
  const [isFilterModal, setIsFilterModal] = useState(false);

  const onClose = () => {
    setIsFilterModal(false);
  };
  return (
    <FilterMobileContainer>
      <FilterButton onClick={() => setIsFilterModal(true)}>
        <img src={FilterIcon.src} />
        <p>ფილტრი</p>
      </FilterButton>
      <FilterModal isOpen={isFilterModal} onClose={onClose}>
        <FiltersSection onClose={onClose} />
      </FilterModal>
    </FilterMobileContainer>
  );
}
