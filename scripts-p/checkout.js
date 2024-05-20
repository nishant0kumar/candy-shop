import {cart, removeFromCart, addTocart, cartQuantity} from '../data/cart.js';
import {products} from '../data/product.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'
import { updatePrice } from '../data/priceManager.js';

const today = dayjs();
let deliveyDate = today.add(7,'days');
deliveyDate = deliveyDate.format('DD MMM, dddd');

function renderOrderSummary(){

    let cartSummaryHtml = '';

    let productsHtml = ''
    cart.forEach((cartItem) => {

        const productId = cartItem.productId;

        let matchingProduct;

        products.forEach((product) => {
            if (product.productId === productId) {
                matchingProduct = product;
            }
        });

        cartSummaryHtml +=
        `
        <div class="product-box js-product-box-${matchingProduct.productId}">
            <div class="product1">
                <div class="image">
                    <img src="./product-images/${matchingProduct.image}" alt="">
                </div>
                <div class="details">
                    <div class="product-details">
                        <p class="product-name">${matchingProduct.name}</p>
                        <p>${cartItem.quantity}</p>
                        <div>
                            <p>&#x20b9;${(matchingProduct.priceCents/100).toFixed(2)}</p>
                            <button class="dark-back js-delete-link update-price" data-product-id="${matchingProduct.productId}">Remove</button>
                        </div>
                    </div>
                    <div class="addition">
                        <p>Add gift wrap and letter for someone <span style="font-weight:bold;"> &#x20b9;50/-</span></p>
                            <button class="gift-addition">Add</button>
                    </div>
                    <div class="order">
                        <p>Order today.Delivers to 400011
                            <span style="color:green; font-weight:bolder;">${deliveyDate}— Free</span></p>
                        <p>Order now.Today at Store.</p>
                    </div>
                </div>
            </div>
        </div>
        `;
    });

    products.slice(0,10).forEach((product) => {
        productsHtml += `
            <div class="select-pro">
                <div>
                    <img src="./product-images/${product.image}" alt="product-image">
    
                    <p class="product-name">${product.name}</p>
                    <div class="select-details">
                        <div class="pricing">
                            <p>MRP &#x20b9; ${(product.priceCents/100).toFixed(2)} /-</p>
                            <p>Wholesale Rate: &#x20b9;${(product.wholesaleRate/100).toFixed(2)} /-</p>
                        </div>  
                        <div>
                            <i class="fa-solid a-shopping-bag js-add-to-cart" data-product-id="${product.productId}">~O~</i>
                        </div>  
                    </div>      
                </div>
            </div> `;
    })
    
    document.querySelector('.js-products-grid').innerHTML = productsHtml;
    
    document.querySelectorAll('.js-add-to-cart').forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            addTocart(productId);
            let cartQuantity = 0;
    
            cart.forEach((item) => {
                cartQuantity += item.quantity;
            })
    
            document.querySelector('.js-cart').innerHTML = cartQuantity;
        });
    });

    document.querySelector('.js-order-summary').innerHTML = cartSummaryHtml;
    updatePrice();

    document.querySelectorAll('.js-delete-link')
        .forEach((link) => {
            link.addEventListener('click', () => {
                const productId = link.dataset.productId;
                removeFromCart(productId); 

                const container = document.querySelector(`.js-product-box-${productId}`);
                container.remove();
            });
        });

    document.querySelectorAll('.update-price').forEach((element) => {
        element.addEventListener('click', () => {
            updatePrice();
            renderOrderSummary();
        })
    })
    document.querySelectorAll('.js-add-to-cart').forEach((element) => {
        element.addEventListener('click', () => {
            updatePrice();
            renderOrderSummary();
        })
    })
    let bagHtml = `<a href="checkout.html"><span class="js-bag">${cartQuantity}</span><i class="fa-solid fa-shopping-bag"></i></a>`

    let carthtml = `
    <a href="" class="cart-link"><i class="fa-solid f-shopping-bag cart-btn js-cart-live-quantity"><span class="js-cart">${cartQuantity}</span>~O~</i></a>
    `
    document.querySelector('.js-cart-container').innerHTML = carthtml;
    document.querySelector('.js-cart-bag').innerHTML = bagHtml;

};

renderOrderSummary();