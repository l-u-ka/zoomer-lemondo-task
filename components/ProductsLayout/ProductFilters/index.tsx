import React, { useState } from "react";
import { Container } from "./styled";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(20200);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (minPrice) {
      router.push({
        pathname: "/",
        query: { MinPrice: minPrice, MaxPrice: maxPrice },
      });
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          placeholder="Min Price"
        />
        <input
          type="text"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          placeholder="Min Price"
        />
        <button type="submit">Search</button>
      </form>
    </Container>
  );
}
