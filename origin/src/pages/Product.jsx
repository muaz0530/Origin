import React from "react";
import { useParams } from "react-router-dom";
import FeaturedProducts from "../Component/FeaturedProducts";
import { useCart } from "../contexts/CartContext";
import manImg from "../image/man.jpg";
import girlsImg from "../image/girls.webp";
import childImg from "../image/child.avif";
import jeansImg from "../image/asell.jpg";

const productsList = [
  { id: 1, title: "Classic Men's Jacket", price: "$89", img: manImg, category: 'men', description: 'A classic jacket.' },
  { id: 2, title: "Women's Dress", price: "$69", img: girlsImg, category: 'women', description: 'Elegant dress.' },
  { id: 3, title: "Kids' Outfit", price: "$39", img: childImg, category: 'kids', description: 'Comfortable kids clothing.' },
  { id: 4, title: "Casual Jeans", price: "$55", img: jeansImg, category: 'men', description: 'Stylish jeans.' },
];

export default function Product() {
  const { id } = useParams();
  const product = productsList.find((p) => String(p.id) === String(id));
  const { addToCart } = useCart();

  if (!product) return <main style={{padding:28}}>Product not found.</main>;

  return (
    <main style={{padding:28}}>
      <div style={{display:'flex', gap:24, alignItems:'flex-start'}}>
        <div style={{width:360, height:420, backgroundImage:`url(${product.img})`, backgroundSize:'cover', backgroundPosition:'center'}} />
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h3>{product.price}</h3>
          <div style={{display:'flex', gap:8}}>
            <button onClick={() => addToCart(product)} className="product-btn">Add to cart</button>
            <button onClick={() => alert('Buy now demo')} className="product-btn">Buy now</button>
          </div>
        </div>
      </div>
    </main>
  );
}
