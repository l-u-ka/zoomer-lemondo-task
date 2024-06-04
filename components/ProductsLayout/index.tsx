import DesktopSort from "./ProductsTopSection";
import ProductFilters from "./ProductFilters";
import ProductsList from "./ProductsList";
import { Container, Content, FiltersContainer } from "./styled";

export default function ProductsLayout() {
  return (
    <Container>
      <DesktopSort />
      <Content>
        <FiltersContainer>
          <ProductFilters />
        </FiltersContainer>
        <ProductsList />
      </Content>
    </Container>
  );
}
