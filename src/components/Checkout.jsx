import '../assets/css/cart.css';
import '../assets/css/common.css';
import Header from './Header.jsx';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { product } from '../assets/data/product';
import { cart, cartQuantity, removeFromCart, updateCartQuantity, updateLocalStorage,addTocart } from '../assets/data/cart';

import Products from './Products.jsx';
import Footer from './footer.jsx';

const today = dayjs();
let deliveryDate = today.add(7, 'days');
deliveryDate = deliveryDate.format('DD MMM, dddd');

export default function Checkout() {
    const [cartProducts, setCartProducts] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const [cartState, setCartState] = useState(cart);

    useEffect(() => {
        updateLocalStorage();
    }, [cartState]);

    const handleAddToCart = (productId) => {
        addTocart(productId);
        setCartState([...cart]);
        const updatedProducts = cart.map(cartItem => {
            const matchingProduct = product.find(prod => prod.productId === cartItem.productId);
            return { ...matchingProduct, quantity: cartItem.quantity };
        });
        setCartProducts(updatedProducts);
        calculateTotalAmount(updatedProducts);
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

    useEffect(() => {
        const matchingProducts = cart.map(cartItem => {
            const matchingProduct = product.find(prod => prod.productId === cartItem.productId);
            return { ...matchingProduct, quantity: cartItem.quantity };
        });
        setCartProducts(matchingProducts);
        calculateTotalAmount(matchingProducts);
    }, []);

    const calculateTotalAmount = (products) => {
        const total = products.reduce((sum, product) => sum + (product.priceCents / 100) * product.quantity, 0);
        setTotalAmount(total);
    };

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
        const updatedProducts = cart.map(cartItem => {
            const matchingProduct = product.find(prod => prod.productId === cartItem.productId);
            return { ...matchingProduct, quantity: cartItem.quantity };
        });
        setCartProducts(updatedProducts);
        calculateTotalAmount(updatedProducts);
        let productName;
        function name(productId, product) {
            product.forEach((product) => {
                if(productId === product.productId){
                   productName = product.name;
                }
            })
        }
        name(productId, product);
        toast.success(`${productName} sweetness removed`, {
            position: 'top-center',
            autoClose: 1000,
        });
    };

    const handleQuantityChange = (productId, event) => {
        const newQuantity = parseInt(event.target.value, 10);
        if (newQuantity > 0) {
            updateCartQuantity(productId, newQuantity);
            const updatedProducts = cart.map(cartItem => {
                const matchingProduct = product.find(prod => prod.productId === cartItem.productId);
                return { ...matchingProduct, quantity: cartItem.quantity };
            });
            setCartProducts(updatedProducts);
            calculateTotalAmount(updatedProducts);
        }
    };

    if (totalAmount <= 0) {
        return (
            <>
                <Header title="Store" />
                <div className="broder">
                    <div className="amount">
                        <p>Your bag total is <span className="js-total-amount">Bitter</span></p>
                        <button className="check-out">Check Out</button>
                    </div>
    
                    <div className="product-information js-order-summary">
                        <div class="product-box">
                            <h1>Sweetness None! Add Some <i className='fa-solid fa-laugh'></i></h1><br/><br/><br/>
                            <img src="https://www.iconeasy.com/icon/256/System/Swirl%20Finder/Finder%20Candy.png"/>
                        </div>
                        
                    </div>
    
                    <div className="contre">
                        <p>Order Summary</p>
                        <div className="reciept">
                            <div className="your-payment">
                                <div className="bill">
                                    <p>Subtotal</p>
                                    <p>Shipping</p>
                                    <hr />
                                    <p>Total</p>
                                </div>
                                <div className="payment">
                                    <p className="js-total-amounts">&#x20b9;{totalAmount.toFixed(2)}</p>
                                    <p className="shipping">&#x20b9;0.00</p>
                                    <hr />
                                    <p>
                                        <span className="js-total-amountss">&#x20b9;{(totalAmount).toFixed(2)}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button className="check-out">Check Out</button>
                    </div>
                </div>
                {cartComponents()}
            <ToastContainer />
            <Footer/>

            </>
        );
    }
    else {
        return (
            <>
                <Header title="Store" />
                <div className="broder">
                    <div className="amount">
                        <p>Your bag total is <span className="js-total-amount">&#x20b9;{totalAmount.toFixed(2)}</span></p>
                        <button className="check-out">Check Out</button>
                    </div>
    
                    <div className="product-information js-order-summary">
                        {cartProducts.map((matchingProduct, index) => (
                            <div className={`product-box js-product-box-${matchingProduct.productId}`} key={index}>
                                <div className="product1">
                                    <div className="image">
                                        <img src={matchingProduct.image} alt={matchingProduct.name} />
                                    </div>
                                    <div className="details">
                                        <div className="product-details">
                                            <p className="product-name">{matchingProduct.name}</p>
                                            <input
                                                type="number"
                                                value={matchingProduct.quantity}
                                                onChange={(e) => handleQuantityChange(matchingProduct.productId, e)}
                                                className="quantity-input"
                                            />
                                            <div>
                                                <p>&#x20b9;{(matchingProduct.priceCents / 100).toFixed(2)}</p>
                                                <button
                                                    className="dark-back js-delete-link update-price"
                                                    data-product-id={matchingProduct.productId}
                                                    onClick={() => handleRemoveFromCart(matchingProduct.productId)}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                        <div className="addition">
                                            <p>Add gift wrap and letter for someone <span> &#x20b9;50/-</span></p>
                                            <button className="gift-addition">Add</button>
                                        </div>
                                        <div className="order">
                                            <p>
                                                Order today. Delivers to 400011
                                                <span> {deliveryDate}— Free</span>
                                            </p>
                                            <p>Order now. Today at Store.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
    
                    <div className="contre">
                        <p>Order Summary</p>
                        <div className="reciept">
                            <div className="your-payment">
                                <div className="bill">
                                    <p>Subtotal</p>
                                    <p>Shipping</p>
                                    <hr />
                                    <p>Total</p>
                                </div>
                                <div className="payment">
                                    <p className="js-total-amounts">&#x20b9;{totalAmount.toFixed(2)}</p>
                                    <p className="shipping">&#x20b9;100</p>
                                    <hr />
                                    <p>
                                        <span className="js-total-amountss">&#x20b9;{(totalAmount + 100).toFixed(2)}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button className="check-out">Check Out</button>
                    </div>
                </div>

                {cartComponents()}
            <ToastContainer />
            <Footer/>
            </>
        );
    }

    function cartComponents() {
            return (
                <>
                    
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
                </>
            );
    };
};
