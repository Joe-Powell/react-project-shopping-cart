import React from 'react';


function NavBar() {
    return (
        <header>
            <nav>
            <h2>Shop</h2>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li className='cart'><a href='#'>
                <ion-icon name="basket-outline"></ion-icon>Cart<span> 0</span></a></li>
            </ul>
            </nav>
      </header>

    );
}

export default NavBar;