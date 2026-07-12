import "./CategorySection.css";

const categories = [
  {
    name: "Men",
    image:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
  },
  {
    name: "Women",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    name: "Kids",
    image:
      "https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg",
  },
  {
    name: "Beauty",
    image:
      "https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg",
  },
  {
    name: "Footwear",
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
  },
  {
    name: "Accessories",
    image:
      "https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg",
  },
];

function CategorySection() {
  return (
    <section className="category-section">

      <h2>SHOP BY CATEGORY</h2>

      <div className="category-grid">

        {categories.map((item, index) => (

          <div className="category-card" key={index}>

            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default CategorySection;