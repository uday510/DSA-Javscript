//! 14/02/2022

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

}

class Queue {
    constructor() {
        this.data = [];
        this.rear = 0;
        this.front = 0;
    }
   
    length() {
        return this.rear - this.front;
    }

    isEmpty() {
        return this.length() == 0;
    }

    enqueue(element) {
        this.data[this.rear++] = element;
    }

    dequeue() {
        if(!this.isEmpty()) {
            let temp = this.data[this.front++];
            return temp;
        }
    }

    getFront() {
        if(!this.isEmpty()) {
            return this.data[this.front];
        }
        return undefined;
    }
}


function levelOrderLevelWise(root) {

    

}
const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);

root.left.left = new Node(40);
root.left.right = new Node(50);

root.right.right = new Node(60);
root.right.right.right = new Node(70);



