import { Product } from "@/types/products";
import axios from "axios";
import { useState } from "react";

export interface GetProductsParams {
  ShopId?: number;
  CategoryId: number;
  Name?: string;
  Page: number;
  Limit: number;
  PriceAsc?: string | string[];
  NameAsc?: string | string[];
  Categories?: string;
  TagIds?: string;
  SpecificationIds?: string;
  MinPrice?: number;
  MaxPrice?: number;
  ProductIds?: string | string[];
  MegaMenuId?: number;
  NotInStock?: boolean;
  CartId?: number;
  SpecificationIdsList?: string;
}

export function useGetProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsLoading, setProductsLoading] = useState<boolean>(false);
  const [totalProducts, setTotalProducts] = useState<number>(0);

  async function getProducts(
    params: GetProductsParams,
    isPagination?: boolean
  ) {
    try {
      setProductsLoading(true);
      const response = await axios.get("/api/products", { params });
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

  return { products, getProducts, productsLoading, totalProducts };
}
