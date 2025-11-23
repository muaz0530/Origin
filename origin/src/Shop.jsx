import React from "react";
import FeaturedProducts from "../Component/FeaturedProducts";

export default function Shop() {
  return (
    <main className="page shop-page">
      <header style={{ padding: "28px 40px" }}>
        <h1>Shop</h1>
        <p>Browse all our featured items</p>
      </header>
      <FeaturedProducts />
    </main>
  );
}
