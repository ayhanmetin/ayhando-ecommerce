import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './cart.css';

export default function Cart({ user }) {
  const [carts, setCarts] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    const storedCarts = JSON.parse(localStorage.getItem('carts')) ?? [];
    const cartsWithQuantity = storedCarts.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
    }));
    setCarts(cartsWithQuantity);
  }, []);

  const handleDelete = (id) => {
    const updatedCarts = carts.filter((item) => item.id !== id);
    setCarts(updatedCarts);
    localStorage.setItem('carts', JSON.stringify(updatedCarts));
  };

  const updateQuantity = (id, quantity) => {
    if (!Number.isInteger(quantity) || quantity < 1) {
      return; // Prevents setting non-integer or negative quantities
    }
    const updatedCarts = carts.map((item) =>
      item.id === id ? { ...item, quantity: quantity } : item,
    );
    setCarts(updatedCarts);
    localStorage.setItem('carts', JSON.stringify(updatedCarts));
  };

  const handleCheckout = () => {
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 9000);
    setCarts([]);
    localStorage.removeItem('carts');
  };

  const totalPrice = carts.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {showSuccessMessage && (
        <div className="success-message">
          Your order has been submitted successfully!
        </div>
      )}
      {carts.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {carts.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                className="cart-item-image"
              />
              <div className="cart-item-info">
                <Link
                  to={`/products/product/${item.id}`}
                  className="cart-item-title"
                >
                  {item.title}
                </Link>
                <span className="cart-item-price">
                  $ {item.price.toFixed(2)} x {item.quantity}
                </span>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value, 10) || 1)
                  }
                  className="quantity-input"
                  min="1"
                />
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                className="delete-button"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
      {carts.length > 0 && (
        <div className="cart-summary">
          <h3>Total Price: $ {totalPrice.toFixed(2)}</h3>
          <button
            type="button"
            className="btn btn-primary checkout-button"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
