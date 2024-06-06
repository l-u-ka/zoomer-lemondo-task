import { useProductsContext } from "@/context/products-context";
import React, { useEffect, useState } from "react";
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
    console.log("Total Products", totalProducts);
    console.log("Products length", products.length);
    if (totalProducts > products?.length + 3) {
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
      {productsLoading ? (
        <ProductsNotFound>იტვირთება...</ProductsNotFound>
      ) : totalProducts > 0 ? (
        <>
          <ProductsListContent>{renderedProducts}</ProductsListContent>
          {shouldShow ? (
            <ViewMoreButton onClick={loadMore}>
              <p>მეტის ნახვა</p>
            </ViewMoreButton>
          ) : null}
        </>
      ) : (
        <ProductsNotFound>ვერ მოიძებნა</ProductsNotFound>
      )}
    </ProductsListContainer>
  );
}
