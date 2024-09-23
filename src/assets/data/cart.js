/* ------------------------------cart data---------------------------- */

export let cartQuantity = JSON.parse(localStorage.getItem('cartQuantity'));
if (cartQuantity == null || cartQuantity == undefined || cartQuantity < 0) {
    cartQuantity = 0;
}

export let cart = JSON.parse(localStorage.getItem('cart'));
if (!cart) {
    cart = [
        
    ];
}

export function updateLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('cartQuantity', JSON.stringify(cartQuantity));
}

export function removeFromCart(productId) {
    const productIndex = cart.findIndex(item => item.productId === productId);
    if (productIndex !== -1) {
        cartQuantity -= cart[productIndex].quantity;
        cart.splice(productIndex, 1);
        updateLocalStorage();
    }
}

export function updateCartQuantity(productId, quantity) {
    const productIndex = cart.findIndex(item => item.productId === productId);
    if (productIndex !== -1) {
        cartQuantity -= cart[productIndex].quantity;
        cart[productIndex].quantity = quantity;
        cartQuantity += quantity;
        updateLocalStorage();
    }
}


export function addTocart(productId) {
    const productIndex = cart.findIndex(item => item.productId === productId);
    if (productIndex !== -1) {
        cart[productIndex].quantity += 1;
    } else {
        cart.push({ productId, quantity: 1 });
    }
    cartQuantity += 1;
    updateLocalStorage();
}



/* export function addTocart(productId) {

        let matchingItem;
        cart.forEach((item) => {
            if (productId === item.productId){
                matchingItem = item;
            }
        });

        if (matchingItem){
            matchingItem.quantity+=1;
        } else{
            cart.push({
                productId: productId,
                quantity: 1
            });
        }
        cartQuantity++;
        updateLocalStorage();
} */

/* export function removeFromCart(productId){
    const newCart = [];
    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });
    cart.forEach((items) => {
        if(productId === items.productId){
            cartQuantity -= items.quantity;
        }
    })

    cart = newCart;
    cartQuantityStorage();

    saveToStorage();
} */
