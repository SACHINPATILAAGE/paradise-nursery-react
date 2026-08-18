import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  updateQuantity,
  removeItem,
} from "../redux/CartSlice";

import Navbar from "./Navbar";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  // Calculate total amount of the complete cart
  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  // Calculate total quantity of products
  const totalItems = cartItems.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  // Checkout button
  const handleCheckout = () => {
    alert("Coming Soon!");
  };

  return (
    <div className="cart-page-container">
      {/* Navbar appears on Cart page */}
      <Navbar />

      <main className="cart-page">
        <div className="cart-container">

          {/* Page Heading */}
          <div className="cart-heading">
            <h1>Shopping Cart</h1>

            <p>
              Review your selected plants before
              checkout.
            </p>
          </div>

          {/* =========================
              EMPTY CART
          ========================= */}

          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <h2>
                Your cart is empty 🌱
              </h2>

              <p>
                Add some beautiful plants
                to your shopping cart.
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
              {/* =========================
                  CART ITEMS
              ========================= */}

              <div className="cart-items">

                {cartItems.map((item) => {

                  // Calculate individual item total
                  const itemTotal =
                    item.price *
                    item.quantity;

                  return (
                    <div
                      className="cart-item"
                      key={item.id}
                    >

                      {/* Plant Thumbnail */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="cart-item-image"
                      />

                      {/* Plant Information */}
                      <div className="cart-item-details">

                        <h2>
                          {item.name}
                        </h2>

                        <p>
                          Unit Price: ₹
                          {item.price}
                        </p>

                        <p className="item-total">
                          Total: ₹
                          {itemTotal}
                        </p>

                      </div>

                      {/* =========================
                          QUANTITY
                      ========================= */}

                      <div className="quantity-section">

                        <p>Quantity</p>

                        <div className="quantity-controls">

                          {/* Decrease */}
                          <button
                            className="quantity-decrease"
                            onClick={() =>
                              dispatch(
                                updateQuantity({
                                  id: item.id,
                                  quantity:
                                    item.quantity -
                                    1,
                                })
                              )
                            }
                          >
                            −
                          </button>

                          {/* Current Quantity */}
                          <span className="quantity-value">
                            {item.quantity}
                          </span>

                          {/* Increase */}
                          <button
                            className="quantity-increase"
                            onClick={() =>
                              dispatch(
                                updateQuantity({
                                  id: item.id,
                                  quantity:
                                    item.quantity +
                                    1,
                                })
                              )
                            }
                          >
                            +
                          </button>

                        </div>
                      </div>

                      {/* =========================
                          DELETE
                      ========================= */}

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

              {/* =========================
                  CART SUMMARY
              ========================= */}

              <div className="cart-summary">

                <h2>
                  Cart Summary
                </h2>

                {/* Total Items */}
                <div className="summary-row">

                  <span>
                    Total Items:
                  </span>

                  <span>
                    {totalItems}
                  </span>

                </div>

                {/* Total Amount */}
                <div className="summary-row total-row">

                  <span>
                    Total Amount:
                  </span>

                  <span>
                    ₹{totalAmount}
                  </span>

                </div>

                {/* =========================
                    CHECKOUT
                ========================= */}

                <button
                  className="checkout-button"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>

                {/* =========================
                    CONTINUE SHOPPING
                ========================= */}

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
    </div>
  );
}

export default CartItem;
