//! https://www.algoexpert.io/questions/Product%20Sum
//! O(n) time | O(d) d is the greatest depth of "special" arrays in the array.

function productSum(array, multiplier = 1) {
    let sum = 0;
    for(const element of array) {
        if(Array.isArray(element)) {
            sum += productSum(element, multiplier + 1);
        } else {
            sum += element;
        }
    } 
    return sum * multiplier;
}


const array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];

console.log(productSum(array));