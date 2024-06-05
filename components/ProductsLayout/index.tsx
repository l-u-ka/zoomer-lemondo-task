import DesktopSort from "./ProductsTopSection";
import FiltersSection from "./FiltersSection";
import ProductsList from "./ProductsList";
import { Container, Content, SectionDisplay } from "./styled";

export default function ProductsLayout() {
  return (
    <Container>
      <DesktopSort />
      <Content>
        <SectionDisplay>
          <FiltersSection />
        </SectionDisplay>
        <ProductsList />
      </Content>
    </Container>
  );
}
