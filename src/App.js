import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/Notification";
import { uiActions } from "./store/ui-slice";
import { sendCartData, fetchData } from "./store/cart-actions";

let firstRender = true;

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (firstRender) {
      firstRender = false
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart))
    }
  }, [cart, dispatch])

  return (
    <div className="App">
      {notification && <Notification type={notification.alertType} message={notification.message} />}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
