import React from "react";
import Header from "./Header";
import Products from "./Products";
import CartItems from "./CartItems";
import "./Layout.css";
import { useSelector } from "react-redux";
const Layout = () => {
  const cartState = useSelector(state => state.cart)
  const cartTotal = cartState.itemsList?.reduce((acc, cur) => (acc + cur.totalPrice), 0);
  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {(cartState.showCart && cartState.itemsList.length > 0) && <CartItems />}
        <div className="total-price">
          <h3>Total: ${cartTotal}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
