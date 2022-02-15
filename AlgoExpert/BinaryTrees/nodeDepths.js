class BinaryTree {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

}


function branchSums(root, depth = 0) {

    if(root === null) return 0;
   
    return depth + branchSums(root.left, depth + 1) + branchSums(root.right, depth +1);
}




const root = new BinaryTree(1);

root.left = new BinaryTree(2);
root.right = new BinaryTree(3);

root.left.left = new BinaryTree(4);
root.left.right = new BinaryTree(5);

root.left.left.left = new BinaryTree(8);
root.left.left.right = new BinaryTree(9);

root.right.left = new BinaryTree(6);
root.right.right = new BinaryTree(7);


console.log(branchSums(root));