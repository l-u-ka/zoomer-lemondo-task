import ProductsLayout from "@/components/ProductsLayout";
import { Filter } from "@/types/products";
export { getServerSideProps } from "@/lib/utils/getFilters";

export default function Home() {
  // console.log("FILTERS", filters);
  // console.log("MIN PRICES", minPrice);
  // console.log("MAX PRICES", maxPrice);
  return <ProductsLayout />;
}
