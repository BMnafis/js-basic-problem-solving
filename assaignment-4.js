/* Problem 1 */
// Seer To Mon Converter

function seerToMon(seer){
    // Error handling
    if(typeof seer === 'string'){
        return 'Please input a number!';
    }
    if(seer < 1){
        return 'Please input a positive number which is greater than 0';
    }
    // seer to mon formula
    let mon = seer/40 ;
    return mon;
}

// Optional code for checking output
let checkSeerToMon = seerToMon(800);
console.log(checkSeerToMon);




/* Problem 2 */
// Total sales of shirts, pants, shoes of a shop

function totalSales(shirtQuantity, pantQuantity, shoeQuantity){
    // Error handling
    if(typeof shirtQuantity === 'string' || typeof pantQuantity === 'string' || typeof shoeQuantity === 'string'){
        return 'Please input number arguements!';
    }
    if(shirtQuantity < 0 || pantQuantity < 0 || shoeQuantity < 0){
        return 'Please input Positive Numbers!';
    }
    // Price of product
    let shirtPrice = 100;
    let pantPrice = 200;
    let shoePrice = 500;
    // Total Price of each category of products
    let totalShirtPrice = shirtQuantity * shirtPrice;
    let totalPantPrice = pantQuantity * pantPrice;
    let totalShoePrice = shoeQuantity * shoePrice;

    // Sum of total sale
    const totalSaleOfShop = totalShirtPrice + totalPantPrice + totalShoePrice;
    // Function return
    return totalSaleOfShop;
}

// Optional code for checking output
let checkTotalPrice = totalSales(5,2,3);
console.log(checkTotalPrice);





/* Problem 3 */
// Total delivery cost Calculation for T-shirts delivery

function deliveryCost(tshirtAmount){
    // Delivery cost for each breakpoint
    let costForFirstHundred = 100;
    let costForSecondHundred = 80;
    let costForRestTshirt = 50;
    // Error handling
    if(typeof tshirtAmount === 'string'){
        return 'Error! Please enter a number'
    }
    if(tshirtAmount < 1){
        return 'Please enter a positive number greater than 0';
    }
    // Main Functional condition to calculate total delivery cost
    if(tshirtAmount <= 100){
        let firstHundredTotal = costForFirstHundred * tshirtAmount;
        return firstHundredTotal;
    }
    else if(tshirtAmount <= 200){
        firstHundredTotal = costForFirstHundred * 100;
        let tshirtLeft = tshirtAmount - 100;
        let secondHundredTotal = tshirtLeft * costForSecondHundred;
        let totalDeliveryCost = firstHundredTotal + secondHundredTotal;
        return totalDeliveryCost;
    }else{
        firstHundredTotal = costForFirstHundred * 100;
        secondHundredTotal = costForSecondHundred * 100;
        let restTshirt = tshirtAmount - 200;
        let restTshirtTotal = restTshirt * costForRestTshirt;
        totalDeliveryCost = firstHundredTotal + secondHundredTotal + restTshirtTotal;
        // Function return area
        return totalDeliveryCost;
    }
}

// Optional code for checking output
let checkDeliveryCost = deliveryCost(220);
console.log(checkDeliveryCost);




/* Problem 4 */
// Find a Friend in an array with 5 character

function perfectFriend(myFriends){
    // Error handling
    if(typeof myFriends != 'object'){
        return 'Please Provide an array consist of string values!'
    }
    // for of loop
    for(const friend of myFriends){
        // Error handling
        if(typeof friend != 'string'){
            return 'Please Provide string value!'
        }
        // Main condition to operate the function
        if(friend.length == 5){
            return friend;
        }
    }
}

let friends = ['musa','mosaddek','sohan','hasib','sabbir','habib','sayem'];

// Optional code for checking output
let checkMyFriend = perfectFriend(friends);
console.log(checkMyFriend);