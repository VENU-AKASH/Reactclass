import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <p>WELCOME TO TECHCART</p>

          <h1>Upgrade Your Digital Lifestyle</h1>

          <p>
            Discover the latest smartphones, laptops and electronic
            accessories at TechCart.
          </p>

          <Link to="/products" className="shop-btn">
            Shop Now
          </Link>
        </div>

        <div className="hero-card">
          💻
        </div>
      </section>

      <section className="features">
        <div>
          <h3>🚚 Fast Delivery</h3>
          <p>Quick and reliable delivery.</p>
        </div>

        <div>
          <h3>🔒 Secure Payment</h3>
          <p>Safe and secure payments.</p>
        </div>

        <div>
          <h3>⭐ Quality Products</h3>
          <p>Products you can trust.</p>
        </div>

        <div>
          <h3>📞 24/7 Support</h3>
          <p>We are always here to help.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;