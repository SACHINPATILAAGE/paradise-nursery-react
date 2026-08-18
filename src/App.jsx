import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";

import "./App.css";

function Home() {
  const [showProductList, setShowProductList] = useState(false);

  if (showProductList) {
    return <ProductList />;
  }

  return (
    <main className="home-page">
      <div className="background-image">
        <div className="home-overlay">
          <section className="home-content">

            <div className="home-badge">
              🌿 Welcome to Paradise Nursery
            </div>

            <h1>Paradise Nursery</h1>

            <p>
              Bring nature into your home with beautiful,
              healthy, and carefully selected plants.
            </p>

            <button
              className="get-started-button"
              onClick={() => setShowProductList(true)}
            >
              Get Started
            </button>

          </section>
        </div>
      </div>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/plants"
        element={<ProductList />}
      />

      <Route
        path="/cart"
        element={<CartItem />}
      />

      <Route
        path="/about"
        element={<AboutUs />}
      />
    </Routes>
  );
}

export default App;
