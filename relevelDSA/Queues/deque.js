class Deque {
    constructor() {
        this.data = [];
        this.front = 0;
        this.rear = 0;
        this.frontPlus = 0;
    }

    isEmpty() {
        return this.rear == 0;
    }

    addBack(element) {
        this.data.push(element);
        this.rear++;
    }

    addFront(element) {
        this.data[++this.frontPlus] = element;
    }
    removeFront() {

    }
    removeBack() {

    }
}