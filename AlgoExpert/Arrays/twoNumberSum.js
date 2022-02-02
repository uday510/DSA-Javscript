

let arr = [3, 5, -4, 8, 11, 1, -1, 6];
let targetSum = 10;

/** 
 * ! O(n^2)
 
function twoNumberSum(arr, targetSum) {
    if(arr.length == 0 ) return -1;

    for(let i = 0; i < arr.length - 1; i++) {
        const firstNum = arr[i];
        for(let j = i + 1; j < arr.length; j++) {
            const secondNum = arr[j];
            if(firstNum + secondNum == targetSum) {
            return [firstNum, secondNum];
            }
        }
    }
}

console.log(twoNumberSum(arr, targetSum));

*/

/** 
 * ! O(nlogn)
 
function twoNumberSum(arr, targetSum) {
    if(arr.length == 0 ) return -1;

    arr.sort( (a, b) => a - b);

    let i = 0;
    let j = arr.length - 1;

    while(i < j) {
        const currentSum = arr[i] + arr[j];
        if(currentSum === targetSum) {
            return [arr[i], arr[j]];
        } else if (currentSum < targetSum) {
            i++;
        } else if(currentSum > targetSum) {
            j--;
        }
    }
}

console.log(twoNumberSum(arr, targetSum));

*/