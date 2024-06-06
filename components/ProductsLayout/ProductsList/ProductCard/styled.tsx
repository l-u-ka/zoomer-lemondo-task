import styled from "styled-components";

export const ProductContainer = styled.div`
  grid-column: span 1;
  width: 160px;
  height: 300px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: auto;
  @media (min-width: 768px) {
    width: 165px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 165px;
  object-fit: contain;
  cursor: pointer;
`;

export const Price = styled.p`
  font-weight: 600;
  font-size: 1rem;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.blackMain};
`;

export const PriceContainer = styled.div`
  margin: auto 0px;
`;

export const SalePriceContainer = styled.div`
  display: flex;
`;

export const SalePrice = styled.p`
  font-weight: 600;
  font-size: 1rem;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.orangeMain};
  margin-right: 0.5rem;
`;

export const MonthlyPrice = styled.p`
  font-weight: 400;
  font-size: 0.5rem;
  line-height: 14px;
  span {
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 14px;
    color: ${({ theme }) => theme.colors.orangeMain};
  }
`;

export const OriginalPrice = styled.p`
  font-weight: 400;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.black07};
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 35%;
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.orangeMain};
    transform: translateY(-50%);
  }
`;

export const Title = styled.h3`
  max-width: 10rem;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 18px;
  opacity: 0.8;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.blackMain};
`;

export const CardButtons = styled.div`
  display: flex;
  justify-content: space-between;
  height: 2.5rem;
`;

export const SwapButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 0.25rem;
  cursor: pointer;
`;

export const AddToCartButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.orangeSecondary};
  width: 110px;
  border-radius: 0.25rem;
  cursor: pointer;

  p {
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1.25rem;
    margin-left: 0.5rem;
  }
`;
