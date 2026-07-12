import "./Banner.css";

const offers = [
  {
    title: "BIG FASHION DAYS",
    discount: "UP TO 70% OFF",
    color: "#ff3f6c",
  },
  {
    title: "TOP BRANDS",
    discount: "MIN 50% OFF",
    color: "#ff6f61",
  },
  {
    title: "NEW ARRIVALS",
    discount: "STARTING ₹499",
    color: "#6c63ff",
  },
  {
    title: "BUY 1 GET 1",
    discount: "LIMITED TIME",
    color: "#00b894",
  },
];

function Banner() {
  return (
    <section className="offer-banner">
      {offers.map((offer, index) => (
        <div
          className="offer-card"
          key={index}
          style={{ background: offer.color }}
        >
          <h3>{offer.title}</h3>
          <p>{offer.discount}</p>
        </div>
      ))}
    </section>
  );
}

export default Banner;