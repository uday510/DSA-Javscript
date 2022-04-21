function search(arr, target) {
    arr.sort((a, b) => a - b);
    return binarySearchHelper(arr, 0, arr.length - 1, target);
}

function binarySearchHelper(arr, i, j, target) {
    if(i <= j) {
        if(arr[i] == target) {
            return i;
        } else {
            return -1;
        }
    }
    let mid = Math.floor((i + j) / 2);

    if(arr[mid] == target) {
        return mid;
    } else if(arr[mid] > target) {
        binarySearchHelper(arr, mid, j, target);
    } else {
        binarySearchHelper(arr, i, mid - 1, target);
    }
}

const arr = [4,5,6,7,0,1,2];
const target = 0;

console.log(search(arr, target));
console.log(arr);