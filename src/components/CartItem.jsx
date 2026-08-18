import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  updateQuantity,
  removeItem,
} from "../redux/CartSlice";

import Navbar from "./Navbar";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total cart amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Calculate total number of items
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Checkout message
  const handleCheckout = () => {
    alert("Coming Soon!");
  };

  return (
    <>
      <Navbar />

      <main className="cart-page">
        <div className="cart-container">

          {/* Cart Heading */}
          <div className="cart-heading">
            <h1>Shopping Cart</h1>
            <p>
              Review your selected plants before checkout.
            </p>
          </div>

          {/* Empty Cart */}
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <h2>Your cart is empty 🌱</h2>

              <p>
                Add some beautiful plants to your shopping cart.
              </p>

              <Link
                to="/plants"
                className="continue-shopping"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="cart-items">

                {cartItems.map((item) => {
                  const itemTotal =
                    item.price * item.quantity;

                  return (
                    <div
                      className="cart-item"
                      key={item.id}
                    >

                      {/* Plant Image */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="cart-item-image"
                      />

                      {/* Plant Details */}
                      <div className="cart-item-details">
                        <h2>{item.name}</h2>

                        <p>
                          Unit Price: ₹{item.price}
                        </p>

                        <p className="item-total">
                          Total: ₹{itemTotal}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="quantity-section">
                        <p>Quantity</p>

                        <div className="quantity-controls">

                          {/* Decrease */}
                          <button
                            onClick={() =>
                              dispatch(
                                updateQuantity({
                                  id: item.id,
                                  quantity:
                                    item.quantity - 1,
                                })
                              )
                            }
                          >
                            −
                          </button>

                          <span>
                            {item.quantity}
                          </span>

                          {/* Increase */}
                          <button
                            onClick={() =>
                              dispatch(
                                updateQuantity({
                                  id: item.id,
                                  quantity:
                                    item.quantity + 1,
                                })
                              )
                            }
                          >
                            +
                          </button>

                        </div>
                      </div>

                      {/* Delete */}
                      <button
                        className="delete-button"
                        onClick={() =>
                          dispatch(
                            removeItem(item.id)
                          )
                        }
                      >
                        Delete
                      </button>

                    </div>
                  );
                })}

              </div>

              {/* Cart Summary */}
              <div className="cart-summary">

                <h2>Cart Summary</h2>

                <div className="summary-row">
                  <span>Total Items:</span>

                  <span>{totalItems}</span>
                </div>

                <div className="summary-row total-row">
                  <span>Total Amount:</span>

                  <span>
                    ₹{totalAmount}
                  </span>
                </div>

                {/* Checkout */}
                <button
                  className="checkout-button"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>

                {/* Continue Shopping */}
                <Link
                  to="/plants"
                  className="continue-shopping"
                >
                  Continue Shopping
                </Link>

              </div>
            </>
          )}

        </div>
      </main>
    </>
  );
}

export default CartItem;