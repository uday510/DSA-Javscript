let arr = [-7, -5, -4, 3, 6, 8, 9, 10];
let len = arr.length - 1;


/** 
//! O(nlogn) | space O(n)
function sortedSquaredArray(arr, len) {
const sortedSquares = new Array(len).fill(0);
for(let i = 0; i <= len; i++) {
    let temp = arr[i] * arr[i];
    sortedSquares[i] =temp;
}

sortedSquares.sort((a, b) => a - b);

return sortedSquares;

}
console.log(sortedSquaredArray(arr, len));
*/

/** 
//! O(n) | space O
function sortedSquaredArray(arr, len) {
    const sortedSquares = new Array(len).fill(0);
    let smallerValueIndex = 0;
    let largerValueIndex = arr.length - 1;

    for(let i = arr.length - 1; i >= 0 ; i--) {
        const smallerValue = arr[smallerValueIndex];
        const largerValue = arr[largerValueIndex];
        
        if(Math.abs(smallerValue) > Math.abs(largerValue)) {
            sortedSquares[i] = smallerValue * smallerValue;
            smallerValueIndex++;
        } else {
            sortedSquares[i] = largerValue * largerValue;
            largerValueIndex--;
        } 
}

return sortedSquares;
}


console.log(sortedSquaredArray(arr, len));

*/