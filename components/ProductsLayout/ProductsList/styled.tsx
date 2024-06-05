import styled from "styled-components";

export const ProductsListContainer = styled.div`
  width: 100%;
`;

export const ProductsListContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, auto);
  row-gap: 40px;
  margin-left: auto;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, auto);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, auto);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, auto);
    padding-left: 2rem;
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, auto);
  }
`;

export const ViewMoreButton = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 90px;
  width: 120px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.gray};
  margin: 30px auto 0px auto;

  p {
    font-family: "FiraGO", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
  }
`;
