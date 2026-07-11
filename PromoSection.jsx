import "./PromoSection.css";

const products = [
  {
    id: 1,
    brand: "Roadster",
    title: "Men Casual Shirt",
    price: "₹899",
    oldPrice: "₹1799",
    discount: "50% OFF",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500",
  },
  {
    id: 2,
    brand: "H&M",
    title: "Women's Fashion Top",
    price: "₹799",
    oldPrice: "₹1599",
    discount: "50% OFF",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500",
  },
  {
    id: 3,
    brand: "Nike",
    title: "Running Shoes",
    price: "₹2999",
    oldPrice: "₹5999",
    discount: "50% OFF",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
  {
    id: 4,
    brand: "Puma",
    title: "Sports Shoes",
    price: "₹2499",
    oldPrice: "₹4999",
    discount: "50% OFF",
    image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=500",
  },
];

function PromoSection() {
  return (
    <section className="promo-section">

      <h2>🔥 TRENDING DEALS</h2>

      <div className="product-grid">

        {products.map((item) => (

          <div className="product-card" key={item.id}>

            <img src={item.image} alt={item.brand} />

            <div className="product-info">

              <h3>{item.brand}</h3>

              <p>{item.title}</p>

              <h4>
                {item.price}
                <span>{item.oldPrice}</span>
              </h4>

              <h5>{item.discount}</h5>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default PromoSection;