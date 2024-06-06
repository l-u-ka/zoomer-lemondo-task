import { Filter } from "@/types/products";
import React, { useState } from "react";
import DowArrow from "@/assets/images/arrow-down.png";
import {
  FilterContainer,
  FilterTitle,
  FilterValues,
  MoreValuesButton,
} from "./styled";
import FilterValue from "./Value";

interface Props {
  filter: Filter;
}

export default function ProductFilter({ filter }: Props) {
  const [displayValues, setDisplayValues] = useState(true);
  const [displayAll, setDisplayAll] = useState(false);

  const handleChange = () => {
    setDisplayValues((prev) => !prev);
  };

  const displayedValues = displayAll
    ? filter.values
    : filter.values.slice(0, 3);

  return (
    <FilterContainer>
      <FilterTitle $rotate={displayValues} onClick={handleChange}>
        <h3>{filter.name}</h3>
        <img src={DowArrow.src} />
      </FilterTitle>
      <FilterValues $isVisible={displayValues}>
        {displayedValues.map((value) => (
          <FilterValue id={value.id} value={value.value} key={value.id} />
        ))}
      </FilterValues>
      <MoreValuesButton
        $isVisible={filter.values.length > 3}
        onClick={() => setDisplayAll((prev) => !prev)}
      >
        {!displayAll ? "მეტის ნახვა" : "აკეცვა"}
      </MoreValuesButton>
    </FilterContainer>
  );
}
