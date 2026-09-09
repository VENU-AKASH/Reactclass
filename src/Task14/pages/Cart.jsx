import { Link } from "react-router-dom";

function Cart() {
  const cartItems = [
    {
      id: 1,
      name: "iPhone 15",
      price: 69999,
      quantity: 1,
      icon: "📱",
    },
    {
      id: 2,
      name: "Sony WH-1000XM5",
      price: 29999,
      quantity: 1,
      icon: "🎧",
    },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <div className="cart-heading">
        <p>TECHCART</p>
        <h1>Shopping Cart</h1>
        <span>Review your selected products before checkout.</span>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-product-icon">{item.icon}</div>

              <div className="cart-product-info">
                <h2>{item.name}</h2>
                <p>Quantity: {item.quantity}</p>
              </div>

              <strong>
                ₹{(item.price * item.quantity).toLocaleString("en-IN")}
              </strong>

              <button className="remove-btn">Remove</button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <strong>₹{total.toLocaleString("en-IN")}</strong>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <strong>Free</strong>
          </div>

          <hr />

          <div className="summary-total">
            <span>Total</span>
            <strong>₹{total.toLocaleString("en-IN")}</strong>
          </div>

          <button className="checkout-btn">
            Proceed to Checkout
          </button>

          <Link to="/products" className="continue-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;

