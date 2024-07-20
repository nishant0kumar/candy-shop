import '../assets/css/store.css';
import '../assets/css/common.css'
import Header from './Header.jsx'

import { favourList, removeFromFavourList, saveToStorage } from '../assets/data/favour.js';
import { addTocart, updateLocalStorage, cart } from '../assets/data/cart.js';
import { product } from '../assets/data/product.js';
import { useEffect, useState } from 'react';

function Favour() {

    const [Favour, setFavour] = useState([favourList]);
    const [setCart, setCartState] = useState([cart]);

    useEffect(() => {
        updateLocalStorage();
    },[setCart]);
    useEffect(() => {
        const matchingProducts = favourList.map(cartItem => {
            const matchingProduct = product.find(prod => prod.productId === cartItem.productId);
            return { ...matchingProduct };
        });
        setFavour(matchingProducts);
    }, []);

    const handleAddToCart = (productId) => {
        addTocart(productId);
        setCartState(...cart);
    }

    const handleremoveFromFavourList =(productId) => {
        removeFromFavourList(productId);
        const updatedProducts = favourList.map(cartItem => {
            const matchingProduct = product.find(prod => prod.productId === cartItem.productId);
            return { ...matchingProduct };
        });
        setFavour(updatedProducts);
    }

    return (
        <>
            <Header title='Store'/>
            <div className="container">
                    {Favour.map((product, index) => (
                        <div className="product-container" key={index}>
                            <div className="wish-button">
                                <button className=" js-favour-click">
                                    <i className="fa-solid fa-heart js-favour-click" data-product-id={product.productId} onClick={() => handleremoveFromFavourList(product.productId)}></i>
                                </button>
                            </div>
                            <div className="img-container">
                                <img src={product.image} alt="product-image" />
                            </div>
                            <p className="product-name">{product.name}</p>
                            <div className="product-detail">
                                <div className="price">
                                    <p>MRP &#x20b9; {((product.priceCents) / 100).toFixed(2)}/-</p>
                                    <p>Wholesale rate: &#x20b9; {(product.wholesaleRate / 100).toFixed(2)} /-</p>
                                </div>
                                <div className="cart">
                                    <i className="fa-solid f-shopping-bag js-add-to-cart" onClick={() => handleAddToCart(product.productId)} data-product-id={product.productId}>
                                        <span> ~O~</span>
                                    </i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </>
    )
}

export default Favour


/* import '../assets/css/store.css';
import '../assets/css/common.css'
import Header from './Header';

export default function Favour() {
    return (
        <>
        <Header title="Home"/>
            <div>
                <p>nothing</p>
            </div>
        </>
    )
} */