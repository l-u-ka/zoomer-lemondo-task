import { useProductsContext } from "@/context/products-context";
import React, { Suspense, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import {
  ProductsListContainer,
  ProductsListContent,
  ProductsNotFound,
  ViewMoreButton,
} from "./styled";

export default function ProductsList() {
  const { products, setPage, totalProducts, productsLoading } =
    useProductsContext();
  const [shouldShow, setShouldShow] = useState<boolean>(false);

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
      {products.length > 0 ? (
        <>
          <ProductsListContent>{renderedProducts}</ProductsListContent>
          {shouldShow ? (
            <ViewMoreButton onClick={loadMore}>
              <p>მეტის ნახვა</p>
            </ViewMoreButton>
          ) : null}
        </>
      ) : (
        <ProductsNotFound>პროდუქტები ვერ მოიძებნა</ProductsNotFound>
      )}
    </ProductsListContainer>
  );
  // return <div>Hello</div>
}
