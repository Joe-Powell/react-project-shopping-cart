import React, { useState } from 'react';
import firstPhone from '../images/phone1.jpg';
import secondPhone from '../images/phone2.jpg';
import thirdPhone from '../images/phone3.jpg';
import fourthPhone from '../images/phone4.jpg';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';
// images have to be imported in order to use



const Home = (props) => {
    //console.log('props', props);


    return (
        <div className='container'>
            <div className='image'>
                <img src={firstPhone} alt='Phone One' height='60px' width='110px' />
                <h3>Phone One</h3>
                <h3>$15.00</h3>
                <a onClick={() => props.addBasket('PhoneOne')} className='addToCart cart1' href='#'>Add to Cart</a>
            </div>
            <div className='image'>
                <img src={secondPhone} alt='Phone Two' height='60px' width='110px' />
                <h3>Phone Two</h3>
                <h3>$25.00</h3>
                <a onClick={() => props.addBasket('PhoneTwo')} className='addToCart cart2' href='#'>Add to Cart</a>
            </div>
            <div className='image'>
                <img src={thirdPhone} alt='Phone Three' height='60px' width='110px' />
                <h3>Phone Three</h3>
                <h3>$35.00</h3>
                <a onClick={() => props.addBasket('PhoneThree')} className='addToCart cart3' href='#'>Add to Cart</a>
            </div>
            <div className='image'>
                <img src={fourthPhone} alt='Phone Four' height='60px' width='110px' />
                <h3>Phone Four</h3>
                <h3>$45.00</h3>
                <a onClick={() => props.addBasket('PhoneFour')} className='addToCart cart4' href='#'>Add to Cart</a>
            </div>



        </div>




    );



}



/* Connect takes two parameters: One function mapStateToProps which maps parts of the state into your components props
the second one, a function mapDispatchToProps " {addBasket} below", to modify the state which maps functions into your 
props which are, when called, dispatch an action to redux store. 
We can either retrieve data by obtaining its current state, or change its state by dispatching an action*/
export default connect(null, { addBasket })(Home); 