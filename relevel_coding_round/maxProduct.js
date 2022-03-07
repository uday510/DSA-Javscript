function findMaxProduct(array) {
    let arr = array;
    arr.sort( (a, b) => a - b );
    
    let temp1 = Math.max(...arr);

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == temp1) {
            arr[i] = null;
            break;
        }
    }
    let temp2 = Math.max(...arr);

    return temp1 * temp2;
}

console.log(findMaxProduct([9, 5, 12 ,7, 8]));




