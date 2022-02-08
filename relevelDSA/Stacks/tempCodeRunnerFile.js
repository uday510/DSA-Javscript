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
    removeConsecutiveDuplicates(arr) {
