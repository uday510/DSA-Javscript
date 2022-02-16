
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {

		let currentNode = this;

		while(true) {
			if(value < currentNode.value) {
				if(currentNode.left === null) {
				  currentNode.left = new BST(value);
				  break;
				} else {
				currentNode = currentNode.left;
				}
			}
			else {
				if(currentNode.right === null) {
					currentNode.right = new BST(value);
					break;
				} else{
					currentNode = currentNode.right;
				}
			}
		}
    return this;
  }

  contains(value) {
    
		let currentNode = this;
		
		while(currentNode != null) {
			if(value < currentNode.value) {
				currentNode = currentNode.left;
			} else if(value > currentNode.value) {
				currentNode = currentNode.right;
			} else {
				return true;
			}
		
		}
		return false;
		
  }

  remove(value, parentNode = null) {
    // Write your code here.
    // console.log("parentNode", parentNode);
		let currentNode = this;
		while(currentNode !== null) {
			if(value < currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.left;
			} else if(value > currentNode.value){
				        parentNode = currentNode;
				        currentNode = currentNode.right;
			} else {
				if(currentNode.left !== null && currentNode.right !== null) {
					// currentNode.value = currentNode.right.getMinValue();
                    // console.log(currentNode.value);
                    // console.log(currentNode);
                    // currentNode.right.remove(currentNode.value, currentNode);
                    // console.log(currentNode.right.value);
            
					// console.log(currentNode.right.remove(currentNode.value, currentNode));
                    // console.log(currentNode);
				} else if(parentNode === null) {
					if(currentNode.left !== null) {
						currentNode.value = currentNode.left.value;
						currentNode.right = currentNode.left.right;
						currentNode.left = currentNode.left.left;
					} else if(currentNode.right !== null) {
						currentNode.value = currentNode.right.value;
						currentNode.left = currentNode.right.left;
						currentNode.right = currentNode.right.right;
					} else {
						
					}
				} else if(parentNode.left === currentNode) {
					parentNode.left = currentNode.left !== null ? currentNode.left : currentNode.right;
				} else if(parentNode.right === currentNode) {
					parentNode.right = currentNode.left !== null ? currentNode.left : currentNode.right;
				}
					break;
			}
		}
					return this;
					 
  }
				getMinValue() {
					let currentNode = this;
					while(currentNode.left !== null) {
						currentNode = currentNode.left;
					}
					return currentNode.value;
				}
				
			}



const tree = new BST(10);

tree.left = new BST(5);
tree.left.left = new BST(2);
tree.left.left.left = new BST(1);
tree.left.right = new BST(5);



tree.right = new BST(15);
tree.right.left = new BST(13);
tree.right.left.right = new BST(14);

tree.right.right = new BST(22);


tree.insert(12);

// console.log(tree.remove(10));
tree.remove(10);

// console.log(tree);
