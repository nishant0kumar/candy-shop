/* ------------------------------cart data---------------------------- */

export let cartQuantity = JSON.parse(localStorage.getItem('cartQuantity'));
if (cartQuantity == null || cartQuantity == undefined) {
    cartQuantity = 0;
}

export let cart = JSON.parse(localStorage.getItem('cart'));
if (!cart) {
    cart = [];
}

export function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function cartQuantityStorage() {
    localStorage.setItem('cartQuantity', JSON.stringify(cartQuantity));
}

export function addTocart(productId) {

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
        cartQuantityStorage();
        saveToStorage();
}

export function removeFromCart(productId){
    const newCart = [];
    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });
    cart.forEach((items) => {
        if(productId === items.productId){
            cartQuantity -= items.quantity;
            console.log("if", cartQuantity);
        }
    })

    cart = newCart;
    cartQuantityStorage();

    saveToStorage();
}
