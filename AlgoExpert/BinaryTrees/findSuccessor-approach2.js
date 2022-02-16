class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
  
	let arr = new Array();
	
	inOrder(tree, arr);
	  
	for(let idx = 0; idx < arr.length - 1; idx++) {
		
		if(arr[idx] === node) {
			return arr[idx + 1];
		}
		
	}
	 return null;
	
}


function inOrder(root, arr) {
	
	if(root === null) return;
	
	inOrder(root.left, arr);
	arr.push(root);
	inOrder(root.right, arr);
}
