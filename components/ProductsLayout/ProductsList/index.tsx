import { useProductsContext } from "@/context/products-context";
import React from "react";
import ProductCard from "./ProductCard";
import {
  ProductsListContainer,
  ProductsListContent,
  ViewMoreButton,
} from "./styled";

export default function ProductsList() {
  const { products, setPage, totalProducts } = useProductsContext();

  console.log("Products from products list", products);

  const renderedProducts = products?.map((pro) => {
    return <ProductCard product={pro} key={pro.id} />;
  });

  function loadMore() {
    setPage((prev) => prev + 1);
  }
  return (
    <ProductsListContainer>
      <ProductsListContent>{renderedProducts}</ProductsListContent>
      <ViewMoreButton onClick={loadMore}>
        <p>მეტის ნახვა</p>
      </ViewMoreButton>
    </ProductsListContainer>
  );
  // return <div>Hello</div>
}
