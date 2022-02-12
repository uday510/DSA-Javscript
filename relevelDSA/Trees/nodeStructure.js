class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


const root = new Node();
root.left = new Node(10);
root.right = new Node(20);
root.left.left = new Node(30);