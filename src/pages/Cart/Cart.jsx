import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const {
    cartItems,
    food_list = [],
    removeFromCart,
    getTotalCartAmount,
    url,
    currency,
    deliveryCharge,
  } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <h1 className="cart-heading">Your Shopping Cart 🛒</h1>

      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Name</p>
          <p>Price</p>
          <p>Qty</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />

        {food_list.some((item) => cartItems[item._id] > 0) ? (
          food_list.map((item, index) =>
            cartItems[item._id] > 0 ? (
              <div key={index} className="cart-item-row">
                <img
                  className="cart-item-image"
                  src={`${url}/images/${item.image}`}
                  alt={item.name}
                />
                <p className="cart-item-name">{item.name}</p>
                <p>{currency}{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p className="cart-item-total">
                  {currency}
                  {item.price * cartItems[item._id]}
                </p>
                <Trash2
                  className="cart-remove-icon"
                  onClick={() => removeFromCart(item._id)}
                />
              </div>
            ) : null
          )
        ) : (
          <p className="cart-empty">Your cart is empty 🛍️</p>
        )}
      </div>

      {getTotalCartAmount() > 0 && (
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Summary</h2>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{currency}{getTotalCartAmount()}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>
                {currency}
                {getTotalCartAmount() === 0 ? 0 : deliveryCharge}
              </p>
            </div>
            <div className="cart-total-details total-highlight">
              <b>Total</b>
              <b>
                {currency}
                {getTotalCartAmount() + deliveryCharge}
              </b>
            </div>
            <button
              className="checkout-btn"
              onClick={() => navigate("/order")}
            >
              Proceed to Checkout
            </button>
          </div>

          <div className="cart-promocode">
            <p>🎁 Have a promo code?</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Enter promo code" />
              <button>Apply</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
