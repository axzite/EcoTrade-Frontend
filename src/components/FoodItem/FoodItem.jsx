import React, { useContext } from "react";
import "./FoodItem.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

const FoodItem = ({
  image,
  name,
  price,
  id,
  rating = null,
  isVerified = false,
}) => {
  const { cartItems, addToCart, removeFromCart, url, currency } =
    useContext(StoreContext);

  const navigate = useNavigate();

  // ⭐ Star display logic
  const renderStars = () => {
    if (rating === null)
      return <span className="no-rating">No ratings yet</span>;

    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {"★".repeat(fullStars)}
        {halfStar && "☆"}
        {"☆".repeat(emptyStars)}{" "}
        <span className="rating-number">({rating.toFixed(1)})</span>
      </>
    );
  };

  return (
    <div className="food-item">
      <div
        className="food-item-img-container"
        onClick={() => navigate(`/product/${id}`)}
      >
        <img
          className="food-item-image"
          src={`${url}/images/${image}`}
          alt={name}
        />

        {/* Add/Remove Cart Buttons */}
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={(e) => {
              e.stopPropagation(); // prevent redirect on click
              addToCart(id);
            }}
            src={assets.add_icon_white}
            alt="Add"
          />
        ) : (
          <div
            className="food-item-counter"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={assets.remove_icon_red}
              onClick={() => removeFromCart(id)}
              alt="Remove"
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              onClick={() => addToCart(id)}
              alt="Add"
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>

          {/* ✅ Show badge only if isVerified == 1 */}
          {Number(isVerified) === 1 && (
  <span className="verified-badge-food">✅ Verified Seller</span>
)}

        </div>

        <div>
          <p className="food-item-price">
            {currency}
            {price}
          </p>
          <p className="food-item-stars">{renderStars()}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
