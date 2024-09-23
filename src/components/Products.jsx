import '../assets/css/style1.css';
import React, { useState, useEffect, useRef } from 'react';
import { cart, updateLocalStorage, addTocart, cartQuantity } from '../assets/data/cart.js';
import { product } from '../assets/data/product.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Products() {
    const [cartProducts, setCartProducts] = useState([]);
    const [cartState, setCartState] = useState(cart);
    const productGridRef = useRef(null);

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

        const productName = product.find(p => p.productId === productId)?.name || 'Product';
        toast.success(`${productName} added to cart`, {
            position: 'top-center',
            autoClose: 1000,
        });
    };

    const scrollRight = () => {
        if (productGridRef.current) {
            productGridRef.current.scrollBy({
                left: 450,
                behavior: 'smooth',
            });
        }
    };

    const scrollLeft = () => {
        if (productGridRef.current) {
            productGridRef.current.scrollBy({
                left: -300,
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
            <div className="pad-pro">
                <p className="late">Add to Cart Products</p>
                <div className="select-product-cart js-products-grid" ref={productGridRef}>
                    {product.slice(0, 10).map((product, index) => (
                        <div className="select-pro" key={product.productId}>
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
                <div className='scroll-button'>
                <span className="scroll-left" onClick={scrollLeft}> &lt; </span>
                <span className="scroll-right" onClick={scrollRight}> &gt; </span>
            </div>
            </div>
            <ToastContainer />
        </>
    );
}
