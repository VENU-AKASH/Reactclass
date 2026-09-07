function Products() {
    const products = [
      {
        name: "E-Commerce Platform",
        description: "Complete online shopping solution for businesses.",
      },
      {
        name: "Task Management System",
        description: "Manage projects, tasks and teams efficiently.",
      },
      {
        name: "Business Dashboard",
        description: "Interactive dashboard for business analytics.",
      },
    ];
  
    return (
      <section className="page">
        <div className="page-header">
          <p className="tagline">OUR PRODUCTS</p>
          <h1>Products</h1>
  
          <p>
            Explore our collection of digital products designed for modern
            businesses.
          </p>
        </div>
  
        <div className="cards">
          {products.map((product, index) => (
            <div className="card" key={index}>
              <span className="product-number">0{index + 1}</span>
  
              <h3>{product.name}</h3>
  
              <p>{product.description}</p>
  
              <button className="small-button">View Product</button>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Products;