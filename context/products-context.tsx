/*
const { getProducts, products } = useGetProducts();

  console.log(products);

  useEffect(() => {
    getProducts({ Page: 1, Limit: 12, CategoryId: 21 });
  }, []);

*/

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

interface ProductsContext {
  // filters: Filter[];
  page: number;
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
  page: 1,
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

  // const searchParams = useSearchParams();
  // const minPrice = Number(searchParams.get("MinPrice"));
  // const maxPrice = Number(searchParams.get("MaxPrice"));

  // const { products, productsLoading, getProducts} = useGetProducts({
  //   Page: page,
  //   Limit: limit,
  //   CategoryId: categoryId,
  // });
  const { products, productsLoading, getProducts, totalProducts } =
    useGetProducts();

  console.log(totalProducts);

  useEffect(() => {
    getProducts({
      Page: page,
      Limit: limit,
      CategoryId: categoryId,
      // MinPrice: minPrice || 0,
      // MaxPrice: maxPrice || 22020,
    });
  }, []);

  useEffect(() => {
    if (page !== 1)
      getProducts({ Page: page, Limit: limit, CategoryId: categoryId }, true);
  }, [page]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        productsLoading,
        page,
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
