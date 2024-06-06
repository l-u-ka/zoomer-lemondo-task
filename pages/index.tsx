import ProductsLayout from "@/components/ProductsLayout";
export { getServerSideProps } from "@/lib/utils/getFilters";

export default function Home() {
  return <ProductsLayout />;
}
