
function nextGreater(array) {
    let result = new Array(array.length).fill(-1);
    // const stack = new Stack();
    const stack = [];
    
    for(let i = 0; i < array.length; i++) {

        while(stack.length > 0 && array[stack[stack.length - 1]] > array[i]) {
            const top = stack.pop();
            result[top] = array[i];
        }
        stack.push(i);
    }
    return result;
}

// let array = [2, 5, -3, -4, 6, 7, 2];
let array = [2, 7, 3, 5, 4, 6, 8];
// let array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];


console.log(nextGreater(array));