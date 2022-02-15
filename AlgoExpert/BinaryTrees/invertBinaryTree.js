//!12/02/2022
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

}


function invertBinaryTree(tree) {

    if(!tree) return tree;

    let temp = tree.left;
    tree.left = tree.right;
    tree.right = temp;
    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);
    return tree;

}

const root = new Node(1);

root.left = new Node(2);
root.right = new Node(3);

root.left.left = new Node(4);
root.left.right = new Node(5);

root.left.left.left = new Node(8);
root.left.left.right = new Node(9);

root.right.left = new Node(6);
root.right.right = new Node(7);




console.log(invertBinaryTree(root));