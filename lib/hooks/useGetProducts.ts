import { Product } from "@/types/products";
import axios from "axios";
import { useEffect, useState } from "react";

export interface GetProductsParams {
  ShopId?: number;
  CategoryId: number;
  Name?: string;
  Page: number;
  Limit: number;
  PriceAsc?: boolean;
  NameAsc?: boolean;
  Categories?: string;
  TagIds?: string;
  SpecificationIds?: string;
  MinPrice?: number;
  MaxPrice?: number;
  ProductIds?: string;
  MegaMenuId?: number;
  NotInStock?: boolean;
  CartId?: number;
  SpecificationIdsList?: string;
}

export function useGetProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsLoading, setProductsLoading] = useState<boolean>(false);
  const [totalProducts, setTotalProducts] = useState<number>(0);
  // const [totalProducts, setTotalProducts] = useState<number>(0);

  async function getProducts(
    params: GetProductsParams,
    isPagination?: boolean
  ) {
    try {
      setProductsLoading(true);
      const response = await axios.get(
        `https://zoommer-api.lemon.do/v1/Products/v3?`,
        { params: params }
      );
      console.log(response.data);
      if (isPagination) {
        setProducts((prev) => [...prev, ...response.data.products]);
      } else {
        setProducts(response.data.products);
      }
      setTotalProducts(response.data.productsCount);
    } catch (e) {
      console.error(e);
    } finally {
      setProductsLoading(false);
    }
  }

  // useEffect(() => {
  //   getProducts({Page: 1, Limit: 12, CategoryId: 21})})
  // }, []);

  // useEffect(() => {
  //   getProducts(productProps);
  // }, Object.values(productProps)); // Only re-run the effect if categoryName changes

  return { products, getProducts, productsLoading, totalProducts };
}
