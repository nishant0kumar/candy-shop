
export let favourList = JSON.parse(localStorage.getItem('favourList'));
if (!favourList) {
    favourList = [];
}

export let countFavour = JSON.parse(localStorage.getItem('countFavour'));
if (countFavour == null || countFavour == undefined || countFavour < 0) {
    countFavour = 0;
}

export function addToFavourList(productId) {

    let matchingItem;
    favourList.forEach((item) => {
        if (productId === item.productId){
            matchingItem = item; // Finds and stores the matching item from favourList if productId matches
        }
    });
    if (matchingItem){
        console.log("already added");
        
        /* favourList.splice(favourList.indexOf(matchingItem), 1); // Removes the matching item from favourList array
        countFavour--; // Decrements the count of items in favourList
        console.log(countFavour); // Logs the updated count */
    } else{
        favourList.push({
            productId: productId, // Creates a new object with the productId property set to the passed in productId
        });
        countFavour += 1;
    }
    saveToStorage()
    console.log(countFavour);
    
}

export function saveToStorage() {
    localStorage.setItem('favourList', JSON.stringify(favourList));
    localStorage.setItem('countFavour', JSON.stringify(countFavour));
}




export function removeFromFavourList(productId) {
    // Find index of item to remove
    const itemIndex = favourList.findIndex(item => item.productId === productId);
    
    // Remove item if found
    if (itemIndex !== -1) {
        favourList.splice(itemIndex, 1);
        countFavour--;
        saveToStorage();
        
    }
}