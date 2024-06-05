import { Filter } from "@/types/products";
import { createContext, PropsWithChildren, ReactNode, useContext } from "react";

interface FiltersContext {
  filters: Filter[];
  defaultMinPrice: number;
  defaultMaxPrice: number;
}

export const FiltersContext = createContext<FiltersContext>({
  filters: [],
  defaultMinPrice: 0,
  defaultMaxPrice: 22020,
});

export function FiltersProvider({
  filters,
  defaultMinPrice,
  defaultMaxPrice,
  children,
}: FiltersContext & PropsWithChildren) {
  return (
    <FiltersContext.Provider
      value={{ filters, defaultMinPrice, defaultMaxPrice }}
    >
      {children}
    </FiltersContext.Provider>
  );
}

export const useFiltersContext = () => {
  const { ...values } = useContext(FiltersContext);
  return { ...values };
};
