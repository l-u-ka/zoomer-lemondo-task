import { Filter } from "@/types/products";
import React, { useState } from "react";
import DowArrow from "@/assets/images/arrow-down.png";
import { FilterContainer, FilterTitle, FilterValues } from "./styled";
import FilterValue from "./Value";

interface Props {
  filter: Filter;
}

export default function ProductFilter({ filter }: Props) {
  const [displayValues, setDisplayValues] = useState(true);

  const handleChange = () => {
    setDisplayValues((prev) => !prev);
  };

  return (
    <FilterContainer>
      <FilterTitle>
        <h3>{filter.name}</h3>
        <img src={DowArrow.src} onClick={handleChange} />
      </FilterTitle>
      <FilterValues isVisible={displayValues}>
        {filter.values.map((value) => (
          <FilterValue id={value.id} value={value.value} />
        ))}
      </FilterValues>
    </FilterContainer>
  );
}
