import { useGetProducts } from "@/lib/hooks/useGetProducts";
import { Product } from "@/types/products";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/router";
import { useFiltersContext } from "./filters-provider";

interface ProductsContext {
  limit: number;
  products: Product[];
  productsLoading: boolean;
  setPage: Dispatch<SetStateAction<number>>;
  totalProducts: number;
}

export const ProductsContext = createContext<ProductsContext>({
  limit: 1,
  products: [],
  productsLoading: false,
  setPage: () => {},
  totalProducts: 0,
});

export function ProductsProvider({ children }: PropsWithChildren) {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(12);
  const [categoryId, setCategoryId] = useState<number>(21);
  const { products, productsLoading, getProducts, totalProducts } =
    useGetProducts();
  const { defaultMaxPrice, defaultMinPrice } = useFiltersContext();

  const router = useRouter();
  const { MinPrice, MaxPrice, PriceAsc, NameAsc, SpecificationIds } =
    router.query;

  // fetch products every time router query change
  useEffect(() => {
    if (router.isReady) {
      getProducts({
        Page: 1,
        Limit: limit,
        CategoryId: categoryId,
        MinPrice: Number(MinPrice) || defaultMinPrice,
        MaxPrice: Number(MaxPrice) || defaultMaxPrice,
        PriceAsc: PriceAsc ? JSON.parse(PriceAsc as string) : undefined,
        NameAsc: NameAsc ? JSON.parse(NameAsc as string) : undefined,
        SpecificationIds: (SpecificationIds as string) || undefined,
      });
    }
  }, [router.query]);

  // whenever query changes, set page back to 1
  useEffect(() => {
    setPage(1);
  }, [router.query]);

  // if true is passed to getProducts function as second argument, the previous state will be preserved and new data will be added
  useEffect(() => {
    if (page !== 1)
      getProducts(
        {
          Page: page,
          Limit: limit,
          CategoryId: categoryId,
          MinPrice: Number(MinPrice) || defaultMinPrice,
          MaxPrice: Number(MaxPrice) || defaultMaxPrice,
          PriceAsc: PriceAsc ? (PriceAsc as string) : undefined,
          NameAsc: NameAsc ? (NameAsc as string) : undefined,
          SpecificationIds: (SpecificationIds as string) || undefined,
        },
        true
      );
  }, [page]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        productsLoading,
        setPage,
        limit,
        totalProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export const useProductsContext = () => {
  const { ...values } = useContext(ProductsContext);
  return { ...values };
};
