import { ADD_PRODUCT_BASKET } from "../actions/types";
import { GET_NUMBERS_BASKET } from '../actions/types';

const innitialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: {
        PhoneOne: {
            name: "Phone One",
            tagName: "firstPhone",
            price: 15.00,
            numbers: 0,
            inCart: false
        },
        PhoneTwo: {
            name: "Phone Two",
            tagName: "secondPhone",
            price: 25.00,
            numbers: 0,
            inCart: false
        },
        PhoneThree: {
            name: "Phone Three",
            tagName: "thirdPhone",
            price: 35.00,
            numbers: 0,
            inCart: false
        },
        PhoneFour: {
            name: "Phone Four",
            tagName: "fourthPhone",
            price: 45.00,
            numbers: 0,
            inCart: false
        }
    }
}

// state.products[action.payload]  action is in brackets because its another 
//variable put inside. [action.payload] = for ex. PhoneOne I think because its a switech with action.type

export default (state = innitialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_BASKET:
            let addQuantity = { ...state.products[action.payload] }

            addQuantity.numbers += 1;
            addQuantity.inCart = true;
            console.log(addQuantity);

            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: addQuantity

                }
            }
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }
        default: return state;
    }
}