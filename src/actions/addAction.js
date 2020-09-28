import { ADD_PRODUCT_BASKET } from './types';

// addBasket has a dispatch function that pushes to the store
//inside the connect(), which is a higher order function, addBasket pushes to the rootReducer's action parameter to modify the state
// connect(null, { addBasket })(Home)

export const addBasket = (productName) => {
    return (dispatch) => {
        console.log('adding to basket');
        console.log("Product: ", productName);
        dispatch({
            type: ADD_PRODUCT_BASKET,
            payload: productName
        });


    }
}