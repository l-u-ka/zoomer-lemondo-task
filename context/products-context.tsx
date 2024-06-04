import { useGetProducts } from "@/lib/useGetProducts";
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

interface ProductsContext {
  // filters: Filter[];
  limit: number;
  products: Product[];
  productsLoading: boolean;
  setPage: Dispatch<SetStateAction<number>>;
  setLimit: Dispatch<SetStateAction<number>>;
  totalProducts: number;
  // minPrice: number;
  // maxPrice: number;
}

export const ProductsContext = createContext<ProductsContext>({
  // filters: [],
  limit: 1,
  products: [],
  productsLoading: false,
  setPage: () => {},
  setLimit: () => {},
  totalProducts: 0,
  // minPrice: 0,
  // maxPrice: 0,
});

export function ProductsProvider({ children }: PropsWithChildren) {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(12);
  const [categoryId, setCategoryId] = useState<number>(21);
  const { products, productsLoading, getProducts, totalProducts } =
    useGetProducts();

  const router = useRouter();
  const { MinPrice, MaxPrice } = router.query;

  useEffect(() => {
    if (router.isReady)
      getProducts({
        Page: page,
        Limit: limit,
        CategoryId: categoryId,
        MinPrice: Number(MinPrice) || 0,
        MaxPrice: Number(MaxPrice) || 22020,
        // MinPrice: minPrice || 0,
        // MaxPrice: maxPrice || 22020,
      });
  }, [router]);

  useEffect(() => {
    if (page !== 1)
      getProducts({ Page: page, Limit: limit, CategoryId: categoryId }, true);
  }, [page]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        productsLoading,
        setPage,
        limit,
        setLimit,
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
