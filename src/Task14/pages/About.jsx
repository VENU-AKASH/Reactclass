function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <p>ABOUT TECHCART</p>
        <h1>Technology Made Simple</h1>
        <span>
          Your trusted destination for modern electronics and smart
          technology.
        </span>
      </section>

      <section className="about-content">
        <div className="about-card">
          <div className="about-icon">💡</div>
          <h2>Who We Are</h2>
          <p>
            TechCart is a modern electronics shopping platform built
            using React. We bring smartphones, laptops, headphones,
            smartwatches and other technology products together in
            one convenient place.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">🎯</div>
          <h2>Our Mission</h2>
          <p>
            Our mission is to make technology shopping simple,
            reliable and enjoyable by providing quality products and
            a smooth online shopping experience.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">⭐</div>
          <h2>Why Choose Us?</h2>
          <p>
            We focus on quality products, easy navigation, secure
            shopping and dependable customer support so you can shop
            with confidence.
          </p>
        </div>
      </section>

      <section className="about-stats">
        <div>
          <h2>100+</h2>
          <p>Products</p>
        </div>

        <div>
          <h2>1K+</h2>
          <p>Happy Customers</p>
        </div>

        <div>
          <h2>24/7</h2>
          <p>Customer Support</p>
        </div>

        <div>
          <h2>100%</h2>
          <p>Secure Shopping</p>
        </div>
      </section>
    </div>
  );
}

export default About;
