import ProductsLayout from "@/components/ProductsLayout";
import { Filter } from "@/types/products";
export { getServerSideProps } from "@/lib/utils/getFilters";

export default function Home() {
  return <ProductsLayout />;
}
