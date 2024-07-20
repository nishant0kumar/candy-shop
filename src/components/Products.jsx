import '../assets/css/style1.css';
import React, { useState, useEffect } from 'react';
import { cart, updateLocalStorage, addTocart, cartQuantity } from '../assets/data/cart.js';
import { product } from '../assets/data/product.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header.jsx';

export default function Products() {
    const [cartProducts, setCartProducts] = useState([]);

    const [cartState, setCartState] = useState(cart);

    useEffect(() => {
        updateLocalStorage();
    }, [cartState]);

    useEffect(() => {
        updateLocalStorage();
    }, [cartProducts]);

    const handleAddToCart = (productId) => {
        addTocart(productId);
        setCartState([...cart]);
        const updatedProducts = cart.map(cartItem => {
            const matchingProduct = product.find(prod => prod.productId === cartItem.productId);
            return { ...matchingProduct, quantity: cartItem.quantity };
        });
        setCartProducts(updatedProducts);
        console.log(cartQuantity)
       /*  let productName;
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
        }); */
    };

    return (
        <>
        <Header title="Store"/>

            <div className="pad-pro">
                <p className="late">Add to Cart Products</p>
                <div className="select-product-cart js-products-grid">
                    {product.slice(0, 10).map((product, index) => (
                        <div className="select-pro" key={index}>
                            <div>
                                <img src={product.image} alt="product-image" />
                                <p className="product-name">{product.name}</p>
                                <div className="select-details">
                                    <div className="pricing">
                                        <p>MRP &#x20b9; {(product.priceCents / 100).toFixed(2)} /-</p>
                                        <p>Wholesale Rate: &#x20b9; {(product.wholesaleRate / 100).toFixed(2)} /-</p>
                                    </div>
                                    <div>
                                        <i className="fa-solid a-shopping-bag js-add-to-cart" onClick={() => handleAddToCart(product.productId)} data-product-id={product.productId}>
                                            ~O~
                                        </i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <span className="scroll-right"> &gt; </span>
            <span className="scroll-left">&lt;</span>
            <ToastContainer />
        </>
    );
}
