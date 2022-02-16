class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
  const inOrderTraversalOrder = getInorderTraversalOrder(tree);
	
	for(let idx = 0; idx < inOrderTraversalOrder.length; idx++) {
		
		const currentNode = inOrderTraversalOrder[idx];
		
		if(currentNode !== node) continue;
		
		if(idx === inOrderTraversalOrder.length -1) return null;
		
		return inOrderTraversalOrder[idx + 1];
	}
}



function getInorderTraversalOrder(node, order = []) {
	if(node === null) return order;
	
	getInorderTraversalOrder(node.left, order);
	order.push(node);
	getInorderTraversalOrder(node.right, order);
	
	return order;
}