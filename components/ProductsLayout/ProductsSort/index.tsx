import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  background: #f2f2f2;
  box-shadow: 0px 2px 4px 0px #0000001a;
  width: 160px;
  height: 32px;
  border-radius: 30px;
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
  text-align: left;
  color: black;
  border: none;
  padding: 0 20px;
`;

export default function ProductsSort() {
  const [sortValue, setSortValue] = useState("");

  const router = useRouter();

  const setSort = (value: string) => {
    // let queryValue = "";
    if (value === "default") {
      delete router.query.NameAsc;
      delete router.query.PriceAsc;
      router.replace(
        {
          query: { ...router.query },
        },
        undefined,
        { shallow: true }
      );
    } else if (value === "price-asc") {
      delete router.query.NameAsc;
      router.replace(
        {
          query: { ...router.query, PriceAsc: true },
        },
        undefined,
        { shallow: true }
      );
    } else if (value === "price-desc") {
      delete router.query.NameAsc;
      router.replace(
        {
          query: { ...router.query, PriceAsc: false },
        },
        undefined,
        { shallow: true }
      );
    } else if (value === "name-asc") {
      delete router.query.PriceAsc;
      router.replace(
        {
          query: { ...router.query, NameAsc: true },
        },
        undefined,
        { shallow: true }
      );
    } else if (value === "name-desc") {
      delete router.query.PriceAsc;
      router.replace(
        {
          query: { ...router.query, NameAsc: false },
        },
        undefined,
        { shallow: true }
      );
    }
  };

  useEffect(() => {
    if (router.isReady) {
      if (router.query.NameAsc === "true") {
        setSortValue("name-asc");
      } else if (router.query.NameAsc === "false") {
        setSortValue("name-desc");
      } else if (router.query.PriceAsc === "true") {
        setSortValue("price-asc");
      } else if (router.query.PriceAsc === "false") {
        setSortValue("price-desc");
      } else {
        setSortValue("default");
      }
    }
  }, [router]);

  return (
    <StyledSelect value={sortValue} onChange={(e) => setSort(e.target.value)}>
      <option value="default">დალაგება</option>
      <option value="price-desc">ფასი: კლებადობით</option>
      <option value="price-asc">ფასი: ზრდადობით</option>
      <option value="name-asc">დასახელება: A-Z</option>
      <option value="name-desc">დასახელება: Z-A</option>
    </StyledSelect>
  );
}
