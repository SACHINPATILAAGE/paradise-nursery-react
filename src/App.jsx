import { Routes, Route, useNavigate } from "react-router-dom";

import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";

import "./App.css";

function Home() {
  const navigate = useNavigate();

  return (
    <main className="home-page">
      <div className="home-overlay">
        <section className="home-content">
          <div className="home-badge">
            🌿 Welcome to Paradise Nursery
          </div>

          <h1>Paradise Nursery</h1>

          <p>
            Bring nature into your home with beautiful, healthy,
            and carefully selected plants.
          </p>

          <button
            className="get-started-button"
            onClick={() => navigate("/plants")}
          >
            Get Started
          </button>
        </section>
      </div>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/plants" element={<ProductList />} />

      <Route path="/cart" element={<CartItem />} />

      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
}

export default App;