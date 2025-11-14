import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import { ShoppingCart } from "lucide-react";
import "./ProductPage.css";

const ProductPage = () => {
  const { id } = useParams();
  const {
    food_list,
    addToCart,
    removeFromCart,
    cartItems,
    getTotalCartAmount,
    currency,
    url,
  } = useContext(StoreContext);

  const [product, setProduct] = useState(null);
  const totalAmount = getTotalCartAmount();

  // 🟢 Find the product by ID
  useEffect(() => {
    const found = food_list.find((item) => item._id === id);
    setProduct(found);
  }, [id, food_list]);

  if (!product) return <p>Loading...</p>;

  // 🟢 Star rating logic
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) stars.push("★");
    if (hasHalf) stars.push("☆");

    return stars.map((s, i) => (
      <span key={i} className="star">
        {s}
      </span>
    ));
  };

  return (
    <div className="product-page">
      <div className="product-card">
        {/* 🟢 FIX: Correct dynamic image source using backend URL */}
        <img
          src={`${url}/images/${product.image}`}
          alt={product.name}
          className="product-img"
          onError={(e) => {
            e.target.src = "/fallback.jpg"; // fallback optional
          }}
        />

        <div className="product-info">
          <h2 className="product-name">{product.name}</h2>

          <div className="product-rating">
            {renderStars(product.rating || 0)}
            <span className="rating-number">
              ({product.rating ? product.rating.toFixed(1) : "0.0"})
            </span>
          </div>

          <p className="product-desc">{product.description}</p>

          <div className="product-bottom">
            <span className="product-price">
              {currency}
              {product.price}
            </span>

            <div className="cart-controls">
              {cartItems[product._id] ? (
                <div className="cart-qty">
                  <button onClick={() => removeFromCart(product._id)}>-</button>
                  <span>{cartItems[product._id]}</span>
                  <button onClick={() => addToCart(product._id)}>+</button>
                </div>
              ) : (
                <button className="add-btn" onClick={() => addToCart(product._id)}>
                  + Add
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 🛒 Floating total cart */}
      {totalAmount > 0 && (
        <Link to="/cart" className="floating-cart-total">
          <ShoppingCart className="cart-icon" />
          <span>
            Total: {currency}
            {totalAmount}
          </span>
        </Link>
      )}
    </div>
  );
};

export default ProductPage;
  