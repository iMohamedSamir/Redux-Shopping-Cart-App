import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import "./Cart.css";
const Cart = () => {
  const dispatch = useDispatch();
  const quantity = useSelector(state => state.cart);
  console.log(quantity)
  const showCart = () => {
    dispatch(cartActions.setShowCart())
  }
  return (
    <div className="cartIcon">
      <h3 onClick={showCart}>Cart: {quantity.totalQuantity} Items</h3>
    </div>
  );
};

export default Cart;
