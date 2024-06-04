import ProductFilters from "./ProductFilters";
import ProductsList from "./ProductsList";
import ProductsPageHeader from "./ProductsPageHeader";
import { Container } from "./styled";

export default function ProductsLayout() {
  return (
    <Container>
      <ProductsPageHeader />
      <div>
        <ProductFilters />
        <ProductsList />
      </div>
    </Container>
  );
}
