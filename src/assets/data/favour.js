
export let favourList = JSON.parse(localStorage.getItem('favourList'));
if (!favourList) {
    favourList = [];
}

export let countFavour = JSON.parse(localStorage.getItem('cartQuantity'));
if (countFavour == null || countFavour == undefined || countFavour < 0) {
    countFavour = 0;
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
        countFavour++;
    }
    saveToStorage()
}

export function saveToStorage() {
    localStorage.setItem('favourList', JSON.stringify(favourList));
    localStorage.setItem('countFavour', JSON.stringify(countFavour));
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