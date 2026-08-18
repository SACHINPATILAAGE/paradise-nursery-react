import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import Navbar from "./Navbar";

const plants = [
  // =========================
  // INDOOR PLANTS - 6
  // =========================
  {
    id: 1,
    name: "Snake Plant",
    price: 499,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2c13?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 399,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Money Plant",
    price: 299,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Spider Plant",
    price: 349,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "ZZ Plant",
    price: 599,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1614594895304-fe7116ac3b8d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Rubber Plant",
    price: 449,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=600&q=80",
  },

  // =========================
  // SUCCULENTS - 6
  // =========================
  {
    id: 7,
    name: "Aloe Vera",
    price: 299,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    name: "Echeveria",
    price: 249,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1572728012788-2f5c3c1f3f3c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    name: "Jade Plant",
    price: 349,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1602923668104-8f9e03f9e6c0?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 10,
    name: "Haworthia",
    price: 279,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1597055181300-a9b9b5b7c0c1?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 11,
    name: "String of Pearls",
    price: 399,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1601987732517-7e3c0a0d7f36?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 12,
    name: "Zebra Haworthia",
    price: 299,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=600&q=80",
  },

  // =========================
  // OUTDOOR PLANTS - 6
  // =========================
  {
    id: 13,
    name: "Areca Palm",
    price: 699,
    category: "Outdoor Plants",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 14,
    name: "Croton Plant",
    price: 499,
    category: "Outdoor Plants",
    image:
      "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 15,
    name: "Bougainvillea",
    price: 599,
    category: "Outdoor Plants",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 16,
    name: "Hibiscus",
    price: 399,
    category: "Outdoor Plants",
    image:
      "https://images.unsplash.com/photo-1597848212624-e19c4e9f0b8c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 17,
    name: "Rose Plant",
    price: 449,
    category: "Outdoor Plants",
    image:
      "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 18,
    name: "Jasmine Plant",
    price: 379,
    category: "Outdoor Plants",
    image:
      "https://images.unsplash.com/photo-1596547609652-9cf5d8d106b0?auto=format&fit=crop&w=600&q=80",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  // Create three categories
  const categories = [
    ...new Set(
      plants.map((plant) => plant.category)
    ),
  ];

  // Check whether a plant is already in cart
  const isInCart = (plantId) => {
    return cartItems.some(
      (item) => item.id === plantId
    );
  };

  return (
    <div className="product-list-container">
      {/* Navbar appears on Product Listing page */}
      <Navbar />

      <main className="products-page">
        <section className="products-header">
          <h1>Paradise Nursery Plants</h1>

          <p>
            Explore our collection of beautiful plants
            for your home and garden.
          </p>
        </section>

        {/* Display all categories */}
        {categories.map((category) => (
          <section
            className="plant-category"
            key={category}
          >
            <h2>{category}</h2>

            <div className="plant-grid">
              {plants
                .filter(
                  (plant) =>
                    plant.category === category
                )
                .map((plant) => (
                  <article
                    className="plant-card"
                    key={plant.id}
                  >
                    {/* Plant thumbnail */}
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="plant-image"
                    />

                    <div className="plant-info">
                      {/* Plant name */}
                      <h3>{plant.name}</h3>

                      {/* Plant price */}
                      <p className="plant-price">
                        ₹{plant.price}
                      </p>

                      {/* Add to Cart */}
                      <button
                        className="add-cart-button"
                        disabled={isInCart(plant.id)}
                        onClick={() =>
                          dispatch(addItem(plant))
                        }
                      >
                        {isInCart(plant.id)
                          ? "Added to Cart"
                          : "Add to Cart"}
                      </button>
                    </div>
                  </article>
                ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;
