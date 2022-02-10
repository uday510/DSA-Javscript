//! 07/02/2022
class Stack {
    constructor() {
        this.top = 0;
        this.data = [];
    }

    push(element) {
        this.data[this.top] = element;
        this.top = this.top + 1;
    }

    isEmpty() {
        return this.top == 0;
    }

    pop() {
        if(this.isEmpty()) {
            // console.log("stack is underflow");
            return undefined;
        }
         this.top = this.top - 1;
         return this.data.pop();
    }
    //! top value
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.data[this.top - 1];
    }
}




function nextGreater(array) {
    let result = new Array(array.length).fill(-1);
    // const stack = new Stack();
    const stack = [];
    
    for(let i = 0; i< array.length; i++) {

        while(!stack.isEmpty() && array[stack[stack.length - 1]] < array[i]) {
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