import { useProductsContext } from "@/context/products-context";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import {
  ProductsListContainer,
  ProductsListContent,
  ViewMoreButton,
} from "./styled";

export default function ProductsList() {
  const { products, setPage, totalProducts } = useProductsContext();
  const [shouldShow, setShouldShow] = useState<boolean>(false);

  console.log(products.length, totalProducts);

  useEffect(() => {
    if (products && totalProducts && totalProducts > products.length) {
      setShouldShow(true);
    } else setShouldShow(false);
  }, [products, totalProducts]);

  const renderedProducts = products?.map((pro) => {
    return <ProductCard product={pro} key={pro.id} />;
  });

  function loadMore() {
    setPage((prev) => prev + 1);
  }
  return (
    <ProductsListContainer>
      <ProductsListContent>{renderedProducts}</ProductsListContent>
      <ViewMoreButton show={shouldShow} onClick={loadMore}>
        <p>მეტის ნახვა</p>
      </ViewMoreButton>
    </ProductsListContainer>
  );
  // return <div>Hello</div>
}
