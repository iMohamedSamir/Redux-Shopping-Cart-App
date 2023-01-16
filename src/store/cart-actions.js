import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchData = () => {
    return async (dispatch) => {
        const fetchHandler = async () => {
            const res = await fetch("https://redux-tests-1-default-rtdb-default-rtdb.europe-west1.firebasedatabase.app/cartItem.json");
            const data = await res.json();
            return data;
        };
        try {
            const cartData = await fetchHandler();
            dispatch(cartActions.replaceData(cartData));
        } catch (err) {
            dispatch(
                uiActions.showNotification({
                    open: true,
                    message: "Sending Request Failed",
                    type: "error",
                })
            );
        }
    };
};

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            open: true,
            message: 'loading..',
            alertType: 'warning'
        }))
        try {
            const sendRequest = async () => {
                const response = await fetch('https://redux-tests-1-default-rtdb-default-rtdb.europe-west1.firebasedatabase.app/cartItem.json', {
                    method: 'PUT',
                    body: JSON.stringify(cart)
                });
                const data = await response.json().itemsList;
                dispatch(uiActions.showNotification({
                    open: true,
                    message: 'added to cart',
                    alertType: 'success'
                }))
            };
            
            await sendRequest();
        } catch (err) {
            dispatch(uiActions.showNotification({
                open: true,
                message: 'Failed',
                alertType: 'error'
            }))
        }
    }
}