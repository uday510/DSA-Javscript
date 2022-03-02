class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function heightBalancedBinaryTree(tree) {
	
	if(!tree) return 0;
	
	let leftHeight = 0;
	
	let rightHeight = 0;
	
	let leftTree = tree.left;
	let rightTree = tree.right;
	
	while(leftTree) {
		leftHeight = 1 + heightBalancedBinaryTree(tree.left);
	leftTree = tree.left
}
	      
	while(rightTree) {
		rightHeight  = 1 + heightBalancedBinaryTree(tree.right);
		rightTree = tree.right;
	}
	
	return leftHeight - rightHeight <= 1;
	
}