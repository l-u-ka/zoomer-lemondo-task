import DesktopSort from "./ProductsTopSection";
import FiltersSection from "./FiltersSection";
import ProductsList from "./ProductsList";
import { Container, Content, FilterSectionDisplay } from "./styled";

export default function ProductsLayout() {
  return (
    <Container>
      <DesktopSort />
      <Content>
        <FilterSectionDisplay>
          <FiltersSection />
        </FilterSectionDisplay>
        <ProductsList />
      </Content>
    </Container>
  );
}
