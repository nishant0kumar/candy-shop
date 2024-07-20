import '../css/style1.css';

import React, { useState, useEffect } from 'react';
import { cartQuantity, updateLocalStorage } from '../data/cart.js';

export default function CartButton(){
    const [quantityState, setquantityState] = useState(cartQuantity);

    useEffect(() => {
        updateLocalStorage();
    },[quantityState]);
        return (
            <>
                <a href="/checkout" className="cart-link"><i className="fa-solid fa-shopping-bag cart-btn js-cart-live-quantity"><span className="js-cart">{cartQuantity}</span></i></a>
            </>
        )        
}