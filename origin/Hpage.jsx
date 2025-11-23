import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function Hpage() {
  // Right-side sliding panel menu
  const [open, setOpen] = useState(false);

  return (
    <div className="menu-container">

      {/* Hamburger */}
      <div
        className="hamburger"
        onClick={() => setOpen((s) => !s)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* overlay */}
      <div className={`overlay ${open ? "active" : ""}`} onClick={() => setOpen(false)} />

      {/* Side panel (right) */}
      <aside className={`side-panel ${open ? "open" : ""}`} aria-hidden={!open}>
        <button className="close-panel" onClick={() => setOpen(false)} aria-label="Close menu">✕</button>
        <nav className="side-nav">
          <Link to="/category/men" onClick={() => setOpen(false)}>MEN</Link>
          <Link to="/category/women" onClick={() => setOpen(false)}>WOMEN</Link>
          <Link to="/category/kids" onClick={() => setOpen(false)}>KIDS</Link>
          <Link to="/category/accessories" onClick={() => setOpen(false)}>ACCESSORIES</Link>
          <Link to="/category/jeans" onClick={() => setOpen(false)}>JEANS</Link>
          <Link to="/shop" onClick={() => setOpen(false)}>ALL PRODUCTS</Link>
        </nav>
      </aside>

    </div>
  );
}
