import React from "react";
import { Link } from "react-router-dom";
import BackgroundVideo from "../Component/BackgroundVideo";
import FeaturedProducts from "../Component/FeaturedProducts";

const Home = () => {
  return (
    <main className="page home-page">
      <section className="hero">
        <BackgroundVideo />
        <div className="hero-content fade-in">
          <h1>DISCOVER YOUR ORIGIN</h1>
          <p className="hero-sub">Luxury fashion for every family — crafted with care.</p>
          <div className="hero-ctas">
            <Link to="/shop" className="shop-now">Shop Now</Link>
            <Link to="/shop" className="cta-secondary">Explore Collection</Link>
          </div>
        </div>
      </section>

      <div className="promo-banner">
        <div className="promo-inner">
          <strong>Limited time:</strong> Free shipping on orders over $100 • Use code ORIGIN10
        </div>
      </div>

      <div className="clarify">
        <h2>Discover the latest collection for your families</h2>
        <h3>Luxury fashion, quality fabrics, and unique designs</h3>
      </div>

      <section className="categories">
        <Link to="/category/men" className="category men">MEN</Link>
        <Link to="/category/women" className="category women">WOMEN</Link>
        <Link to="/category/kids" className="category kids">KIDS</Link>
        <Link to="/category/accessories" className="category accessories">ACCESSORIES</Link>
      </section>

      <FeaturedProducts limit={3} />

      <section className="testimonials">
        <h2>What customers say</h2>
        <blockquote>"Great quality, fast delivery — I love my jacket!" — Sarah</blockquote>
      </section>
    </main>
  );
};

export default Home;
