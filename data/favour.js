
export let favourList = JSON.parse(localStorage.getItem('favourList'));
if (!favourList) {
    favourList = [];
}

export function addToFavourList(productId) {

    let matchingItem;
    favourList.forEach((item) => {
        if (productId === item.productId){
            matchingItem = item;
        }
    });
    if (matchingItem){
        favourList.re
    } else{
        favourList.push({
            productId: productId,
        });
    }
    saveToStorage()
}

export function saveToStorage() {
    localStorage.setItem('favourList', JSON.stringify(favourList));
}




export function removeFromFavourList(productId){
    const newFavour = [];
    favourList.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newFavour.push(cartItem);
        }
    });

    favourList = newFavour;
    saveToStorage();
}