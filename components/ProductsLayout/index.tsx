import DesktopSort from "./DesktopSort";
import ProductFilters from "./ProductFilters";
import ProductsList from "./ProductsList";
import { Container } from "./styled";

export default function ProductsLayout() {
  return (
    <Container>
      <DesktopSort/>
      <div>
        <ProductFilters />
        <ProductsList />
      </div>
    </Container>
  );
}
