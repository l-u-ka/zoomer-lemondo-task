import axios from "axios";
import { GetServerSideProps } from "next/types";

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("query::::", context.query);
  const filtersResponse = await axios.get(
    "https://zoommer-api.lemon.do/v1/Content/filter?",
    { params: { catId: 21 } }
  );
  return {
    props: {
      filters: filtersResponse.data.specifications,
      defaultMinPrice: filtersResponse.data.minPrice,
      defaultMaxPrice: filtersResponse.data.maxPrice,
    },
  };
};
