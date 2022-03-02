class maxHeap {
    constructor() {
        this.heap = [];
    }
    upheapify(idx) {
        if(idx == 0) return;
        while(idx) {
            let parent = Math.floor( (idx - 1) / 2);
            if(this.heap[parent] > this.heap[idx]) {
                break;
            } else {
                let temp = this.heap[idx];
                this.heap[idx] = this.heap[parent];
                this.heap[parent] = temp;
            }
            idx = parent;
    }
}
    insert(element) {
        this.heap.push(element);
        this.upheapify(this.heap.length - 1);
    }
    getMax() {
        return this.heap[0];
    }
    display() {
        console.log(this.heap);
    }
} 

let heap = new maxHeap();
heap.insert(10);
heap.insert(5);
heap.insert(9);
heap.insert(-2);
heap.insert(8);

console.log(heap.getMax());
heap.display();