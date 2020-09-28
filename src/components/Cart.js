import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { productQuantity } from '../actions/productQuantity';

import firstPhone from '../images/phone1.jpg';
import secondPhone from '../images/phone2.jpg';
import thirdPhone from '../images/phone3.jpg';
import fourthPhone from '../images/phone4.jpg';

// { basketProps } is the same as props.basketProps and props.productQuantity. this is destructuring. 
// so thats why below, you can use basketProps and productQuantity without putting props.
function Cart({ basketProps, productQuantity }) {
    console.log(basketProps);

    let productsInCart = [];
    Object.keys(basketProps.products).forEach(function (item) {
        console.log("item", item);
        console.log(basketProps.products[item].inCart);
        if (basketProps.products[item].inCart) {
            productsInCart.push(basketProps.products[item])
        }
        console.log('productsInCart Array  ', productsInCart);
    });

    // const productImages = [firstPhone, secondPhone, thirdPhone, fourthPhone];

    const productImages = (anyName) => {
        if (anyName.tagName === 'firstPhone') {
            return firstPhone;
        } else if (anyName.tagName === 'secondPhone') {
            return secondPhone;
        } else if (anyName.tagName === 'thirdPhone') {
            return thirdPhone;
        } else if (anyName.tagName === 'fourthPhone') {
            return fourthPhone;
        }

    }

    productsInCart = productsInCart.map((product, index) => {
        console.log('product ', product);
        console.log('index ', index);
        return (
            <Fragment>
                <div className='product'>
                    <ion-icon name="close-circle-outline"></ion-icon>
                    <img src={productImages(product)} />
                    <span className='sm-hide'>{product.name}</span>
                </div>
                <div className="price sm-hide">${product.price}.00</div>
                <div className="quantity">
                    <ion-icon onClick={() => productQuantity('decrease')} className='decrease' name="arrow-back-circle-outline"></ion-icon>
                    <span>{product.numbers}</span>
                    <ion-icon onClick={() => productQuantity('increase')} className='increase' name="arrow-forward-circle-outline"></ion-icon>




                </div>

            </Fragment>

        )



    })


    return (
        <div className="container-products">
            <h3>your using react-router-dom so page wont refresh between pages</h3><br></br>
            <div className="product-header">
                <h5 className="product-title">Product</h5>
                <h5 className="price sm-hide">Price</h5>
                <h5 className="quantity">Quantity</h5>
                <h5 className="total">Total</h5>
            </div>
            <div className="products">
                {productsInCart}
            </div>
            <div className="basketTotalContainer">
                <h4 className="basketTotalTitle">Basket Total </h4>
                <h4 className="basketTotal ">{basketProps.cartCost},00</h4>
            </div>
        </div>
    )
}






// Whats happening here is your making the state available in the props giving access
//   with mapStateToProps, of Cart above and connecting to the redux store
//   state.basketState is in index.js of reducers named rootReducers in
//   store because it's in combineReducers
////  () => ({})  returns , so it's the same as  () => { returm { }  }  we are returning an object in here btw
const mapStateToProps = state => (
    {
        basketProps: state.basketState
    }
);

// connect is a higher order function and is grabbing from the store and then adding to props of Cart. 
//connect pushes mapStateToProps into the global state and gives Cart access in props
// the second parameter is for sending to the state, pushing in and making changes in state
export default connect(mapStateToProps, { productQuantity })(Cart); 