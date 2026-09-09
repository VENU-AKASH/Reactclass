function Orders() {
  const orders = [
    {
      id: "TC1001",
      product: "iPhone 15",
      price: 69999,
      status: "Delivered",
      date: "05 Sep 2026",
    },
    {
      id: "TC1002",
      product: "Samsung Galaxy S24",
      price: 74999,
      status: "Shipped",
      date: "07 Sep 2026",
    },
    {
      id: "TC1003",
      product: "Sony WH-1000XM5",
      price: 29999,
      status: "Processing",
      date: "08 Sep 2026",
    },
  ];

  return (
    <div className="orders-page">
      <div className="orders-heading">
        <p>TECHCART</p>
        <h1>My Orders</h1>
        <span>Track and manage your recent orders.</span>
      </div>

      <div className="orders-container">
        {orders.map((order) => (
          <div className="order-card" key={order.id}>
            <div className="order-header">
              <div>
                <h3>Order #{order.id}</h3>
                <p>{order.date}</p>
              </div>

              <span
                className={`order-status ${order.status
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {order.status}
              </span>
            </div>

            <div className="order-details">
              <div>
                <p className="order-label">Product</p>
                <h2>{order.product}</h2>
              </div>

              <div>
                <p className="order-label">Amount</p>
                <p className="order-price">
                  ₹{order.price.toLocaleString("en-IN")}
                </p>
              </div>
            </div>

            <button className="view-order-btn">
              View Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;

