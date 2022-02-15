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

function printRightViewAlgo1(root) {
  
        let queue = new Queue();
        let null_node = new Node(null);
        queue.enqueue(root);
        queue.enqueue(null_node);
        let result = [];
        while(!queue.isEmpty()) {
            let current = queue.dequeue();
            if(current.data == null) {
                    console.log(result[result.length - 1]);
                if(!queue.isEmpty()) {
                    queue.enqueue(new Node(null));
                    result = [];
                }
            } else {
               result.push(current.data);
            }
            if(current.left != null) {
                queue.enqueue(current.left);
            }
            if(current.right != null) {
                queue.enqueue(current.right);
            }
        }
}

function printRightViewAlgo2(root) {
      //! removed result array
        let queue = new Queue();
        let null_node = new Node(null);
        queue.enqueue(root);
        queue.enqueue(null_node);
        let last_element = undefined;

        while(!queue.isEmpty()) {
            let current = queue.dequeue();
            if(current.data == null) {
                    console.log(last_element);
                if(!queue.isEmpty()) {
                    queue.enqueue(new Node(null));
                }
            } else {
               last_element = current.data;
            }
            if(current.left != null) {
                queue.enqueue(current.left);
            }
            if(current.right != null) {
                queue.enqueue(current.right);
            }
        }
}

const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);

root.left.left = new Node(40);
root.left.right = new Node(50);

root.right.right = new Node(60);
root.right.right.right = new Node(70);

// printRightViewAlgo1(root);

printRightViewAlgo2(root);



