import { useFiltersContext } from "@/context/filters-provider";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Field,
  Header,
  PriceInput,
  Progress,
  RangeInput,
  Separator,
  Slider,
  Wrapper,
} from "./styled";

export default function PriceFilter() {
  const { defaultMinPrice, defaultMaxPrice } = useFiltersContext();
  const router = useRouter();
  const [minInput, setMinInput] = useState(defaultMinPrice);
  const [maxInput, setMaxInput] = useState(defaultMaxPrice);
  const priceGap = 1000;

  // ----------------------------------------------------------------
  /*
  useEffect(() => {
    if (maxPrice - minPrice < priceGap) {
      if (minPrice === parseInt(document.querySelector('.range-min').value)) {
        setMinPrice(maxPrice - priceGap);
      } else {
        setMaxPrice(minPrice + priceGap);
      }
    }
  }, [minPrice, maxPrice, priceGap]);
  */
  //---------------------------------------------------------------

  const handleInputChange = (name: string, value: string) => {
    if (name === "min-input") {
      router.replace({
        pathname: "/",
        query: { ...router.query, MinPrice: value },
      });
    } else if (name === "max-input") {
      router.replace({
        pathname: "/",
        query: { ...router.query, MaxPrice: value },
      });
    }
  };

  const handleRangeInputChange = (name: string, value: string) => {
    // const { className, value } = e.target;
    if (name === "range-min-input") {
      setMinInput(parseInt(value));
      // router.replace({
      //   pathname: "/",
      //   query: { ...router.query, MinPrice: value },
      // });
    } else {
      setMaxInput(parseInt(value));
      // router.replace({
      //   pathname: "/",
      //   query: { ...router.query, MaxPrice: value },
      // });
    }
  };

  const handleRangeMouseUp = (name: string, value: string) => {
    if (name === "range-min-input") {
      router.replace({
        pathname: "/",
        query: { ...router.query, MinPrice: value },
      });
    } else {
      router.replace({
        pathname: "/",
        query: { ...router.query, MaxPrice: value },
      });
    }
  };

  useEffect(() => {
    if (maxInput - minInput < priceGap) {
      if (minInput === parseInt(document.querySelector(".range-min")?.value)) {
        setMinInput(maxInput - priceGap);
      } else {
        setMaxInput(minInput + priceGap);
      }
    }
  }, [minInput, maxInput, priceGap]);

  useEffect(() => {
    if (router.isReady) {
      console.log("ROUTER CHANGED!!!!!!");
      if (router.query.MinPrice) {
        setMinInput(Number(router.query.MinPrice));
      } else setMinInput(0);

      if (router.query.MaxPrice) {
        setMaxInput(Number(router.query.MaxPrice));
      } else setMaxInput(20200);
    }
  }, [router]);

  return (
    <Wrapper>
      <Header>
        <h3>ფასი</h3>
      </Header>
      <Slider>
        <Progress
          style={{
            left: `${(minInput / 10000) * 100}%`,
            right: `${100 - (maxInput / 10000) * 100}%`,
          }}
        />
      </Slider>
      <RangeInput>
        <input
          type="range"
          className="range-min"
          name="range-min-input"
          min="0"
          max="10000"
          value={minInput}
          step="100"
          onChange={(e) =>
            handleRangeInputChange(e.target.name, e.target.value)
          }
          onMouseUp={(e) => handleRangeMouseUp(e.target.name, e.target.value)}
        />
        <input
          type="range"
          className="range-max"
          name="range-man-input"
          min="0"
          max="10000"
          value={maxInput}
          step="100"
          onChange={(e) =>
            handleRangeInputChange(e.target.name, e.target.value)
          }
          onMouseUp={(e) => handleRangeMouseUp(e.target.name, e.target.value)}
        />
      </RangeInput>
      <PriceInput>
        <Field>
          <span>Min</span>
          <input
            className="input-min"
            type="text"
            value={minInput}
            name="min-input"
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            placeholder="Min Price"
          />
        </Field>

        <Field>
          <span>Max</span>
          <input
            className="input-max"
            type="text"
            value={maxInput}
            name="max-input"
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            placeholder="Min Price"
          />
        </Field>
      </PriceInput>
    </Wrapper>
    // <div>
    //   <h3>ფასი</h3>
    //   <form>
    //     <input
    //       type="text"
    //       value={minInput}
    //       name="min-input"
    //       onChange={(e) => handleChange(e.target.name, e.target.value)}
    //       placeholder="Min Price"
    //     />
    //     <input
    //       type="text"
    //       value={maxInput}
    //       name="max-input"
    //       onChange={(e) => handleChange(e.target.name, e.target.value)}
    //       placeholder="Min Price"
    //     />
    //   </form>
    // </div>
  );
}
