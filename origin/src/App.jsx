import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import FeaturedProducts from "./Component/FeaturedProducts";
import Shop from "./pages/Shop";
import Account from "./pages/Account";
import Category from "./pages/Category";
import Product from "./pages/Product";
import CartDrawer from "./Component/CartDrawer";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/account" element={<Account />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <CartDrawer />
       
      <footer className="site-footer">
        <div className="close">
          <p>
            For a better solution you can <a href="contact-me.html">CONTACT ME</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default App;
