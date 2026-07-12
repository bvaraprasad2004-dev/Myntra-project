import "./DealsSection.css";

const deals = [
  {
    id: 1,
    brand: "Nike",
    title: "Running Shoes",
    price: "₹2,999",
    oldPrice: "₹5,999",
    discount: "50% OFF",
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
  },
  {
    id: 2,
    brand: "H&M",
    title: "Men Casual Shirt",
    price: "₹999",
    oldPrice: "₹1,999",
    discount: "50% OFF",
    image:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
  },
  {
    id: 3,
    brand: "Zara",
    title: "Women's Dress",
    price: "₹1,499",
    oldPrice: "₹2,999",
    discount: "50% OFF",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    id: 4,
    brand: "Puma",
    title: "Sports Shoes",
    price: "₹2,499",
    oldPrice: "₹4,999",
    discount: "50% OFF",
    image:
      "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg",
  },
];

function DealsSection() {
  return (
    <section className="deals">

      <h2>🔥 DEALS OF THE DAY</h2>

      <div className="deal-grid">

        {deals.map((item) => (
          <div className="deal-card" key={item.id}>

            <img src={item.image} alt={item.brand} />

            <div className="deal-info">

              <h3>{item.brand}</h3>

              <p>{item.title}</p>

              <div className="price">

                <span className="new-price">{item.price}</span>

                <span className="old-price">{item.oldPrice}</span>

              </div>

              <h4>{item.discount}</h4>

              <button>Add to Bag</button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default DealsSection;