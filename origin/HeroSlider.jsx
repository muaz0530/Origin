import { useState } from "react";
import "./App.css";

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % 4);
  const prev = () => setIndex((i) => (i - 1 + 4) % 4);

  return (
    <div className="hero-slider">

      <div className={`slide bg-${index}`}></div>

      <button className="slider-btn left" onClick={prev}>❮</button>
      <button className="slider-btn right" onClick={next}>❯</button>

    </div>
  );
}
