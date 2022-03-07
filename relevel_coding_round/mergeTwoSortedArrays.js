function mergeTwoSortedArrays(arr1, arr2) {
    let temp = [];
    for(let i = 0; i < arr1.length; i++) {
        temp.push(arr1[i]);
    }
    for(let j = 0; j < arr2.length; j++) {
        temp.push(arr2[j]);
    }
    temp.sort( (a, b) => a - b );
    return temp;
}

console.log(mergeTwoSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]));