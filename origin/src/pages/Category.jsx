import React from "react";
import { useParams } from "react-router-dom";
import FeaturedProducts from "../Component/FeaturedProducts";

export default function Category() {
  const { category } = useParams();
  return (
    <main style={{padding:28}}>
      <h1 style={{textTransform:'capitalize'}}>{category}</h1>
      <FeaturedProducts category={category} />
    </main>
  );
}

