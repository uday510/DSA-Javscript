//!12/02/2022
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function findNode(root, node) {
    let arr = new Array();
    inOrder(root, arr);

    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] === node) {
            return arr[i + 1];
        }
    }
    return null;
}

function inOrder(root, arr) {
    if (root == null) {
        return;
    }

    inOrder(root.left, arr);
    arr.push(root.data);
    inOrder(root.right, arr);

}





const root = new Node(1);

root.left = new Node(2);
root.right = new Node(3);

root.left.left = new Node(4);
root.left.right = new Node(5);

root.left.left.left = new Node(6);




console.log(findNode(root, 5));

