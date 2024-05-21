import {products} from '../data/product.js'
import {addTocart, cartQuantity} from '../data/cart.js';

let productsHtml = '';

products.forEach((product) => {
    productsHtml += `
    <div class="product-container">
    <div class="img-container">
      <img src="../product-images/${product.image}" alt="product-image">
    </div>

    <p class="product-name">${product.name}</p>
    <div class="product-detail">
      <div className="price">
        <p>MRP &#x20b9;${((product.priceCents)/100).toFixed(2)}/-</p>
        <p>Wholesale rate: &#x20b9; ${(product.wholesaleRate/100).toFixed(2)} /-<p>
      </div>
      <div className="cart">
      <i class="fa-solid a-shopping-bag js-add-to-cart" data-product-id="${product.productId}"><span> ~O~</span></i>
      </div>
    </div>
  </div> `;

})

let carthtml = `
<a href="../checkout.html" class="cart-link"><i class="fa-solid f-shopping-bag cart-btn js-cart-live-quantity"><span class="js-cart">${cartQuantity}</span>~O~</i></a>
`

let bagHtml = `<a href="../checkout.html"><span class="js-bag">${cartQuantity}</span><i class="fa-solid fa-shopping-bag"></i></a>`

document.querySelector('.js-cart-container').innerHTML = carthtml;
document.querySelector('.js-cart-bag').innerHTML = bagHtml;

document.querySelector('.container').innerHTML = productsHtml;

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      addTocart(productId);

      document.querySelector('.js-cart').innerHTML = cartQuantity;
      document.querySelector('.js-bag').innerHTML = cartQuantity;

  });
});