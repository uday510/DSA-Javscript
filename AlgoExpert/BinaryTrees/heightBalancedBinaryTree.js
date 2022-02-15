//!12/02/2022
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

}

class TreeInfo {
    constructor(isBalanced, height) {
        this.isBalanced = isBalanced;
        this.height = height;
    }
}


function getTreeInfo(node) {

    if(node === null) return new TreeInfo(true, -1);

    const leftSubtreeInfo = getTreeInfo(node.left);
    const rightSubtreeInfo = getTreeInfo(node.right);

    const isBalanced = 
    leftSubtreeInfo.isBalanced && 
    rightSubtreeInfo.isBalanced &&
    Math.abs(leftSubtreeInfo.height - rightSubtreeInfo.height) <= 1;

    const height = Math.max(leftSubtreeInfo.height, rightSubtreeInfo.height) + 1;

    return new TreeInfo(isBalanced, height);

}
const root = new Node(1);

root.left = new Node(2);
root.right = new Node(3);

root.left.left = new Node(4);
root.left.right = new Node(5);

root.left.right.left = new Node(7);
root.left.right.right = new Node(8);


root.right.right = new Node(6);

console.log(getTreeInfo(root));





