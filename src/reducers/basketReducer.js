import { ADD_PRODUCT_BASKET, DECREASE_QUANTITY, INCREASE_QUANTITY, CLEAR_PRODUCT } from "../actions/types";
import { GET_NUMBERS_BASKET } from '../actions/types';

const innitialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: {
        PhoneOne: {
            name: "PhoneOne",
            tagName: "firstPhone",
            price: 15.00,
            numbers: 0,
            inCart: false
        },
        PhoneTwo: {
            name: "PhoneTwo",
            tagName: "secondPhone",
            price: 25.00,
            numbers: 0,
            inCart: false
        },
        PhoneThree: {
            name: "PhoneThree",
            tagName: "thirdPhone",
            price: 35.00,
            numbers: 0,
            inCart: false
        },
        PhoneFour: {
            name: "PhoneFour",
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
    let productSelected = '';
    switch (action.type) {
        case ADD_PRODUCT_BASKET:
            productSelected = { ...state.products[action.payload] }

            productSelected.numbers += 1;
            productSelected.inCart = true;
            console.log(productSelected);

            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected

                }
            }
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }
        case INCREASE_QUANTITY:
            productSelected = { ...state.products[action.payload] };
            productSelected.numbers += 1;
            return {
                ...state,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        case DECREASE_QUANTITY:
            productSelected = { ...state.products[action.payload] };
            let newCartCost = 0;
            if (productSelected.numbers === 0) {
                productSelected.numbers = 0;
                newCartCost = state.cartCost;
            } else {
                productSelected.numbers -= 1;
                newCartCost = state.cartCost - state.products[action.payload].price;
            }

            return {
                ...state,
                cartCost: newCartCost,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }

        case CLEAR_PRODUCT:
            productSelected = { ...state.products[action.payload] };
            let numbersBackup = productSelected.numbers;
            productSelected.numbers = 0;
            productSelected.inCart = false;
            return {
                ...state,
                cartCost: state.cartCost - (numbersBackup * productSelected.price),
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }

            }

        default: return state;
    }
}