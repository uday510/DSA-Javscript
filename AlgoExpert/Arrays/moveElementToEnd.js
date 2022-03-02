let array = [2, 1, 2, 2, 2, 3, 4, 2];
let toMove = 2;

let i = 0;
let j = array.length - 1;

while (i < j) {
    while(i < j && array[j] === toMove)  j--; 
    if (array[i] === toMove) swap(i, j, array);
    i++;
}

function swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}


console.log(array);

