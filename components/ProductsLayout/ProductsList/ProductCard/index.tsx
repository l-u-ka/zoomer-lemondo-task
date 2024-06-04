import React from "react";
import { Product } from "@/types/products";
import { AddToCartButton, CardButtons, MonthlyPrice, OriginalPrice, Price, ProductContainer, ProductImage, SalePrice, PriceContainer, SalePriceContainer, SwapButton, Title } from "./styled";
import Image from "next/image";
import swapIcon from '@/assets/images/arrow-swap-horizontal.png'
import cartIcon from '@/assets/images/shopping-cart.png'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <ProductContainer>
      <ProductImage
        src={product.imageUrl}
        alt={product.imageAlt || "product image"}
      />
      <PriceContainer>
        {!product.previousPrice ? (
          <Price>{product.price} ₾</Price>
        ) : (
          <SalePriceContainer>
            <SalePrice>{product.price} ₾</SalePrice>
            <OriginalPrice>{product.previousPrice} ₾</OriginalPrice>
          </SalePriceContainer>
        )}
        <MonthlyPrice>თვეში <span>63 ₾</span>-დან</MonthlyPrice>
        <Title>{product.name}</Title>
      </PriceContainer>
      <CardButtons>
        <SwapButton>
          <Image src={swapIcon} alt="swap icon" width={14} height={14}/>
        </SwapButton>
        <AddToCartButton>
          <Image src={cartIcon} alt="cart icon" width={14} height={14}/>
          <p>დამატება</p>
        </AddToCartButton>
      </CardButtons>
    </ProductContainer>
  );
}
