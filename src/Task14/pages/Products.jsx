import { Link } from "react-router-dom";

function Products() {
  const products = [
    {
      id: 1,
      name: "iPhone 15",
      category: "Smartphone",
      price: 69999,
      icon: "📱",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      category: "Smartphone",
      price: 74999,
      icon: "📱",
    },
    {
      id: 3,
      name: "MacBook Air M3",
      category: "Laptop",
      price: 99999,
      icon: "💻",
    },
    {
      id: 4,
      name: "Dell Inspiron 15",
      category: "Laptop",
      price: 65999,
      icon: "💻",
    },
    {
      id: 5,
      name: "Sony WH-1000XM5",
      category: "Headphones",
      price: 29999,
      icon: "🎧",
    },
    {
      id: 6,
      name: "Apple Watch Series 9",
      category: "Smart Watch",
      price: 41999,
      icon: "⌚",
    },
  ];

  return (
    <div className="products-page">
      <div className="products-heading">
        <p>TECHCART STORE</p>
        <h1>Our Products</h1>
        <span>
          Explore our latest smartphones, laptops and electronic accessories.
        </span>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">{product.icon}</div>

            <div className="product-info">
              <p className="product-category">{product.category}</p>
              <h2>{product.name}</h2>

              <div className="product-bottom">
                <strong>
                  ₹{product.price.toLocaleString("en-IN")}
                </strong>

                <Link to="/cart" className="add-cart-btn">
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

