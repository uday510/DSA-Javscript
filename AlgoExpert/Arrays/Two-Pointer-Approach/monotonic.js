let array = [-1, -5, -10, -1100, -1100, -1100, -1102, -9001];
/** 
 * ! O(n) | space O(1)
function isMonotonic(array) {
    if (array.length <= 2) return true;

    let direction = array[1] - array[0];

    for(let i = 2; i < array.length; i++) {
        if (direction == 0) {
            direction = array[i] - array[i - 1];
            continue;
        }
        if(breaksDirection(direction, array[i - 1], array[i]))
        return false;
    }
    return true;

}

function breaksDirection(direction, previousInt, currentInt) {
    let difference = currentInt - previousInt;
    if(direction > 0) return difference < 0;
    return difference > 0
}


 console.log(isMonotonic(array));
*/

/** 
 * ! O(n) | space O(1)
 * 
function isMonotonic(array) {
    let isNonDecreasing = true;
let isNonIncreasing = true;

for(let i = 1; i < array.length; i++) {
    if(array[i] < array[i - 1]) isNonIncreasing = false;
    if(array[i] > array[i - 1]) isNonDecreasing = false;
}

return isNonIncreasing || isNonDecreasing;

}


console.log(isMonotonic(array));

*/