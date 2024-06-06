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

  // when user selects a value, send it to the url query, first check to delete name query if price query already exists and vice versa.
  const handleSelect = (value: string) => {
    const updateQuery = (newQuery: Record<string, any>) => {
      router.replace(
        {
          query: { ...router.query, ...newQuery },
        },
        undefined,
        { shallow: true }
      );
    };

    switch (value) {
      case "default":
        delete router.query.NameAsc;
        delete router.query.PriceAsc;
        updateQuery({});
        break;
      case "price-asc":
        delete router.query.NameAsc;
        updateQuery({ PriceAsc: true });
        break;
      case "price-desc":
        delete router.query.NameAsc;
        updateQuery({ PriceAsc: false });
        break;
      case "name-asc":
        delete router.query.PriceAsc;
        updateQuery({ NameAsc: true });
        break;
      case "name-desc":
        delete router.query.PriceAsc;
        updateQuery({ NameAsc: false });
        break;
      default:
        break;
    }
    setIsOpen(false);
  };

  // function to close dropdown when user clicks away
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

  // every time query changes, check query value and set value to state from there
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
