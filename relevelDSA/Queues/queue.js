class Queue {
    constructor() {
        this.data = [];
        this.front = 0;
        this.rear = 0;
    }
    isEmpty() {
        return this.data.length == 0;
    }

    enqueue(number) {
        this.data.push(number);
        this.rear++;
    }
    dequeue() {
        if(!this.isEmpty()) {
            let temp = this.data[this.front];
            this.front++;
            return temp;
        }
        return undefined;
    }
    reverseQueue() {
    let arr = [];
    while(this.front <= this.rear) {
        arr.push(this.dequeue());
        // return;
    }
    for(let i = arr.length - 1; i > 0; i--) {
        this.enqueue(arr[i]);
    }

 }
   

}
    

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(12);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

// console.log(queue);
queue.reverseQueue();

