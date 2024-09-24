import React, { useState, useEffect } from 'react';
import '../assets/css/store.css';
import Header from './Header.jsx';
import { product } from '../assets/data/product.js';
import { addTocart, removeFromCart, cart, updateLocalStorage } from '../assets/data/cart.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './footer.jsx';
import { addToFavourList, favourList, saveToStorage } from '../assets/data/favour.js';

export default function Store() {
    const [cartState, setCartState] = useState(cart);
    useEffect(() => {
        updateLocalStorage();
    }, [cartState]);

    const handleAddToCart = (productId) => {
        addTocart(productId);
        setCartState([...cart]);
        let productName;
        function name(productId, product) {
            product.forEach((product) => {
                if(productId === product.productId){
                   productName = product.name;
                }
            })
        }
        name(productId, product);
        toast.success(`${productName} added to cart`, {
            position: 'top-center',
            autoClose: 1000,
        });
    };

    const handleFavourList = (productId) => {
        addToFavourList(productId);
    }

    return (
        <>
            <Header title="Home" />
            <p className="section-name">Store</p>
            <main>
                <nav className="section-bar">
                    <button>All</button>
                    <button>Candy</button>
                    <button>Premium</button>
                    <button>Accessory</button>
                </nav>
                <div className="container">
                    {product.map((product, index) => (
                        <div className="product-container" key={index}>
                            <div className='wish-div'>
                                <button className="wish-button">
                                    <i className="fa-solid fa-heart js-favour-click" data-product-id={product.productId} onClick={() => handleFavourList(product.productId)}></i>
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
            </main>
            <ToastContainer />
            <Footer/>
        </>
    );
}
