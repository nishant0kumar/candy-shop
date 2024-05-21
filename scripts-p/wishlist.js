import { products} from "../data/product.js"
import { favourList, removeFromFavourList } from "../data/favour.js";
import {cartQuantity, addTocart} from "../data/cart.js";

let favourHtml = '';
favourList.forEach((favourItem) => {

    const productId = favourItem.productId;

    let matchingProduct;

    products.forEach((product) => {
        if (product.productId === productId) {
            matchingProduct = product;
        }
    });

    favourHtml +=
    `
    <div class="product-container js-product-container-${matchingProduct.productId}" >
        <div class="wish-button">
            <button><i class="fa-solid fa-heart js-delete-link" style="color:red;" data-product-id="${matchingProduct.productId}"></i> </button>
        </div>
        <div class="img-container">
            <img src="../product-images/${matchingProduct.image}" alt="product-image">
        </div>

        <p class="product-name">${matchingProduct.name}</p>
        <div class="product-detail">
            <div className="price">
                <p>MRP &#x20b9;${((matchingProduct.priceCents)/100).toFixed(2)}/-</p>
                <p>Wholesale rate: &#x20b9; ${(matchingProduct.wholesaleRate/100).toFixed(2)} /-<p>
            </div>
            <div className="cart">
                <i class="fa-solid a-shopping-bag js-add-to-cart" data-product-id="${matchingProduct.productId}"><span> ~O~</span></i>
            </div>
        </div>
    </div> `
    ;
});

document.querySelector('.container').innerHTML = favourHtml;

let carthtml = `
<a href="../checkout.html" class="cart-link"><i class="fa-solid f-shopping-bag cart-btn js-cart-live-quantity"><span class="js-cart">${cartQuantity}</span>~O~</i></a>
`

let bagHtml = `<a href="../checkout.html"><span class="js-bag">${cartQuantity}</span><i class="fa-solid fa-shopping-bag"></i></a>`

document.querySelector('.js-cart-container').innerHTML = carthtml;
document.querySelector('.js-cart-bag').innerHTML = bagHtml;


document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      addTocart(productId);

      document.querySelector('.js-cart').innerHTML = cartQuantity;
      document.querySelector('.js-bag').innerHTML = cartQuantity;

  });
});

document.querySelectorAll('.js-delete-link')
        .forEach((link) => {
            link.addEventListener('click', () => {
                const productId = link.dataset.productId;
                removeFromFavourList(productId);

                const container = document.querySelector(`.js-product-container-${productId}`);
                container.remove();
            });
        });
