import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        🌿 Paradise Nursery
      </Link>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">
          🛒 Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;