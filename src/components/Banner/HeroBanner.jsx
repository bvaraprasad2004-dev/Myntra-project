import "./HeroBanner.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600",
    title: "MEGA FASHION SALE",
    subtitle: "Flat 50-80% OFF",
  },
  {
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600",
    title: "NEW ARRIVALS",
    subtitle: "Trending Collection",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1600",
    title: "SUMMER SALE",
    subtitle: "Up To 70% OFF",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1600",
    title: "STYLE YOUR LOOK",
    subtitle: "Latest Fashion",
  },
];

function HeroBanner() {

  const [current, setCurrent] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {

    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(slider);

  }, []);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${slides[current].image})`,
      }}
    >
      <div className="overlay">

        <h3>{slides[current].title}</h3>

        <h1>{slides[current].subtitle}</h1>

        <p>
          Discover the latest fashion trends from top brands with
          exciting discounts, exclusive collections, and premium styles.
        </p>

        <button
          className="shop-btn"
          onClick={() => navigate("/men")}
        >
          Shop Now
        </button>

      </div>
    </section>
  );
}

export default HeroBanner;