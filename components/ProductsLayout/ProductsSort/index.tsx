import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import {
  ArrowIcon,
  DropdownButton,
  DropdownContainer,
  DropdownItem,
  DropdownMenu,
} from "./styled";

const options = [
  { value: "default", label: "დალაგება" },
  { value: "price-desc", label: "ფასი: კლებადობით" },
  { value: "price-asc", label: "ფასი: ზრდადობით" },
  { value: "name-asc", label: "დასახელება: A-Z" },
  { value: "name-desc", label: "დასახელება: Z-A" },
];

export default function ProductsSort() {
  const [sortValue, setSortValue] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleSelect = (value: string) => {
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
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        {options.find((option) => option.value === sortValue)?.label}
        <ArrowIcon $isOpen={isOpen} />
      </DropdownButton>
      {isOpen && (
        <DropdownMenu>
          {options.map((option) => (
            <DropdownItem
              key={option.value}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
}
