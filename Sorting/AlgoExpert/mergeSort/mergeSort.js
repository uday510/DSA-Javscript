//! every case O(nlogn) time | O(n) space

function mergeSort(array) {
    mergeSortHelper(array, 0, array.length - 1);
    return array;
}
function mergeSortHelper(array, startIdx, endIdx) {
    if(startIdx == endIdx) return array[startIdx];
    else {
        let midIdx = Math.floor( (startIdx + endIdx) / 2 );
        mergeSortHelper(array, startIdx, midIdx);
        mergeSortHelper(array, midIdx + 1, endIdx);
        mergeAlgo(array, startIdx, midIdx, midIdx + 1, endIdx);
    }
}
function mergeAlgo(array, leftStartIdx, leftEndIdx, rightStartIdx, rightEndIdx) {
    let leftArrLength = leftEndIdx - leftStartIdx + 1;
    let rightArrLength = rightEndIdx - rightStartIdx + 1;

    let arr1 = new Array(leftArrLength);
    let arr2 = new Array(rightArrLength);

    for(let i = 0; i < leftArrLength; i++) {
        arr1[i] = array[leftStartIdx + i];
    }
    for(let i = 0; i < rightArrLength; i++) {
        arr2[i] = array[rightStartIdx + i];
    }

    let i = 0;
    let j = 0;
    let k = leftStartIdx;

    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            array[k++] = arr1[i++];
        } else {
            array[k++] = arr2[j++];
        }
    }
    while(i < arr1.length) {
        array[k++] = arr1[i++];
    }
    while(j < arr2.length) {
        array[k++] = arr2[j++];
    }
}

let array = [2, -2, -6, -10, 10, 4, -8, -1, -8, -4, 7, -4, 0, 9, -9, 0, -9, -9, 8, 1, -4, 4, 8, 5, 1, 5, 0, 0, 2, -10];

console.log(mergeSort(array));