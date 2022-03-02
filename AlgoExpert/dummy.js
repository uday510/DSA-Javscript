BranchSums
class BinaryTree {
   constructor(value) {
     this.value = value;
     this.left = null;
     this.right = null;
   }
}
function branchSums(root) {
  const sums = [];
  calculateBranchSums(root, 0, sums);
  return sums;
}
function calculateBranchSums(node, runnningSum, sums) {
if(!node) return;
  const newRunningSum = runnningSum + node.value;
  if(!node.left && !node.right) {
    sums.push(newRunningSum);
  }
  calculateBranchSums(node.left, runnningSum, sums);
  calculateBranchSums(node.right, runnningSum, sums);
}

function nodeDepths(root, depth = 0) {
  if(root === null) return 0;
  return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
}

function nodeDepths(root) {
  let sumOfDepths = 0;
  const stack  = [{node: root, depth: 0}];
  while(stack.length > 0) {
    const {node, depth} = stack.pop();
    if(node === null) continue;
    sumOfDepths += depth;
    stack.push({node: node.left, depth: depth + 1});
    stack.push({node: node.right, depth: depth + 1});
  }
  return sumOfDepths;
}

class BinaryTree{
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function invertBinaryTree(tree) {
  const queue = [tree];
  while(queue.length) {
    const current = queue.shift();
    if(current === null) continue;
    swapLeftAndRight(tree);
    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);
  }
}
swapLeftAndRight(tree) {
  const left = tree.left;
  tree.left = tree.right;
  tree.right = left;
}
function invertBinaryTree(tree) {
  if(!tree) return;
  swapLeftAndRight(tree);
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
}

class BinaryTree{
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function binaryTreeDiameter(tree) {
  return getTreeInfo(tree).diameter;
}

function getTreeInfo(tree) {
  if(tree === null) return new TreeInfo(0, 0);
  const leftTreeInfo = getTreeInfo(tree.left);
  const rightTreeInfo = getTreeInfo(tree.right);

  const longestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height;
  const maxDiameterSoFar = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter);
  const currentDiameter = Math.max(longestPathThroughRoot, maxDiamterSoFar);
  const currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);

  return new TreeInfo(currentDiameter, currentHeight);
}

class TreeInfo {
  constructor(diameter, height) {
    this.diameter = diameter;
    this.height = height;
  }
}

function findSuccessor(tree, node) {
  const inOrderTraversalOrder = getInOrderTraversalOrder(tree);
  for(let idx = 0; idx < inOrderTraversalOrder.length; idx++) {
    const currentNode = inOrderTraversalOrder[i];
    if(currentNode !== node) continue;
    if(idx === inOrderTraversalOrder.length - 1) return null;
    return inOrderTraversalOrder[idx + 1];
  }
}


function getInOrderTraversalOrder(node, order = []);
if(node === null ) return order;
getInOrderTraversalOrder(node.left, order);
order.push(node);
getInOrderTraversalOrder(node.right, order);


function findSuccessor(tree, node) {
  if(node.right != null) return getLeftMostChild(node.right);

  return getRightMostParent(node);
}

function getLeftMostChild(node) {
  let currentNode = node;

  while(currentNode.left != null)
  currentNode = currentNode.left;

  return currentNode;
}

function getRightMostParent(node) {
  let currentNode = node;

  while(currentNode.parent !== null && currentNode.parent.right === currentNode)
  currentNode = currentNode.parent;
  return currentNode.parent;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(value) {
    if(value < this.value) {
      if(this.left == null)
         this.left = new BST(value);
      else {
      this.left.insert(value);
    }
  } else {
    if(value > this.value) {
      if(this.right == null)
        this.right = new BST(value);
        else
          this.right.insert(value);
    }
  }
  return this;
}
contains(value) {
  if(value < this.value) {
    if(this.left == null) return false;
  } else if(value > this.value) {
    if(this.right == null) return false;
  } else return this.right.contains(value);
  else return true;
}


remove(value, parent = null) {
  if(value < this.value) {
    if(this.left != null)
      this.left.remove(value, this);
  }
  else if(value > this.value) {
       if(this.right != null)
         this.right.remove(value, this);
  }
   else {
      if(this.left != null && this.right != null) {
        this.value = this.right.getMinValue();
        this.right.remove(this.value, this);
      } else if(parent == null) {
           if(this.left != null) {
           this.value = this.left.value;
           this.right = this.left.right;
            this.left = this.left.left;
        }  else if(this.right != null) {
             this.value = this.right.value;
              this.left = this.right.left;
             this.right = this.right.right;
        } else {
          this.value = null;
        }
      }
      else if(parent.left == this) {
        parent.left = this.left != null ? this.left : this.right;
      } else if(parent.right == this) {
        parent.this = this.right != null ? this.right : this.left;
      }
      break;
  }
  return this;
}
getMinValue() {
  if(this.left == null ) {
    return this.value;
  }
  else {
    return this.left.getMinValue();
  }
}
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
      if(currentNode.left == null) {
        currentNode.left = new BST(value);
        break;
  } else {
    currentNode = currentNode.left;
  }
} else {
      if(currentNode.right == null) {
        currentNode.right = new BST(value);
        break;
  }   else {
        currentNode = currentNode.right;

}
      }
    }
    return this;
  }
contains(value) {
    let currentNode = this;
    while(currentNode != null) {
      if(Value < currentNode.left) {
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
  let currentNode = this;
  while(currentNode != null) {
    if(value < currentNode.value) {
      parentNode = currentNode;
      currentNode = currentNode.left;
    } else if(value > currentNode.value) {
      parentNode = currentNode;
      currentNode = currentNode.right;
    } else {
      if(currentNode.left != null && currentNode.right != null) {
        currentNode.value  = currentNode.right.getMin();
        currentNode.right.remove(currentNode.value, currentNode);
      } else if(parentNode == null) {
          if(currentNode.left != null) {
            currentNode.value = currentNode.left.value;
            currentNode.right = currentNode.left.right;
            currentNode.left = currentNode.left.left;
        }
          else if(currentNode.right != null) {
          currentNode.value = current.right.value;
          currentNode.left = currentNode.right.left;
          currentNode.right = currentNode.right.right;
        } else {
          currentNode.value = null;
        }
      } else if(parentNode.left == currentNode) {
        parentNode.left = currentNode.left != null ? currentNode.left : currentNode.right;
      } else if(parentNode.right == currentNode) {
        parentNode.right = currentNode.right != null ? currentNode.right : currentNode.left;
      }
      break;

    }
  }
}
}
function findClosestValueInBst(tree, target) {
  return findClosestValueInBstHelper(tree, target, tree.value);
}
function findClosestValueInBstHelper(tree, target, closest) {
  if(tree == null) return closest;
  if(Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }
  if(target < tree.value) {
    return findClosestValueInBstHelper(tree.left, target, closest);
  } else if(target > tree.value) {
    return findClosestValueInBstHelper(tree.right, target, closest);
  } else {
    return closest;
  }
}

function findClosestValueInBstHelper(tree, target, closest) {
  let currentNode = tree;
  while(currentNode != null) {
  if(Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
    closest = currentNode.value;
  }
  if(target < currentNode.value) {
    return findClosestValueInBstHelper(currentNode.left, target, closest);
  } else if(target > currentNode.value) {
    return findClosestValueInBstHelper(currentNode.right, target, closest);
  } else {
    return break;
  }
  return closest;
}

function validateBst(tree) {
  return validateBstHelper(tree, -Infinity, Infinity);
}
function validateBstHelper(tree, minValue, maxValue) {
  if(tree == null) return true;
  if(tree.value < minValue || tree.value >= maxValue) return false;
  const leftIsValid = validateBstHelper(tree.left, minValue, tree.value);
  return leftIsValid && validateBstHelper(tree.right, tree.value, maxValue);
}
function minHeightBst(array) {
  return constructMinHeightBst(array, null, 0, array,length - 1);
}
function constructMinHeightBst(array, bst, startIdx, endIdx) {
  if(endIdx < startIdx) return;
  const midIdx = Math.floor( (startIdx + endIdx) / 2);
  const valueToAdd = array[midIdx];
  if(bst == null) {
    bst = new BST(valueToAdd);
  } else {
    bst.insert(valueToAdd);
  }
  constructMinHeightBst(array, bst, startIdx, midIdx - 1);
  constructMinHeightBst(array, bst, midIdx + 1, endIdx);
  return bst;
}
function constructMinHeightBst(array, bst, startIdx, endIdx) {
  if(endIdx < startIdx) return;
  const midIdx = Math.floor( (startIdx + endIdx) / 2);
  const newBstNode = new BST(array[midIdx]);
  if(bst == null) {
    bst =  newBstNode;
  } else {
    if(array[midIdx] < bst.value) {
      bst.left = newBstNode;
      bst = bst.left;
    } else {
      bst.right = newBstNode;
      bst = bst.right;
    }
  }
  constructMinHeightBst(array, bst, startIdx, midIdx - 1);
  constructMinHeightBst(array, bst, midIdx + 1, endIdx);
  return bst;
}
function constructMinHeightBst(array, startIdx, endIdx) {
  if(endIdx < startIdx) return;
  const midIdx = Math.floor( (startIdx + endIdx) / 2);
  const bst = new BST(array[midIdx]);
  bst.left = constructMinHeightBst(array, startIdx, midIdx - 1);
  bst.right = constructMinHeightBst(array, midIdx + 1, endIdx);
  return bst;
}
}
//! input-taking
// process.stdin.resume();
// process.stdin.setEncoding('utf-8');
//
// let inputString = "";
// let inputString1 = "";
// let currentLine = 0;
//
// process.stdin.on('data', function(userInput) {
//   inputString1 = inputString1 + userInput;
// });
//
// process.stdin.on('end', function(x) {
//   inputString1.trim();
//   inputString1 = inputString1.split("\n");
//
//   for(let i = 0; i < inputString1.length; i++) {
//     inputString += inputString1[i] + ' ';
//   }
//   inputString.trim();
//   inputString = inputString.split(" ");
//   main();
// });
// function readline() {
//   return result = inputString[currentLine++];
// }
// function main() {
//   let a = inputString.length;
//   let b = [];
//
//   for(let i = 0; i < a; i++) {
//     b.push(parseInt(readline())*parseInt(readline()));
//   }
//   console.log(b);
// }
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = "";
let inputString1 = "";
let currentLine = 0;

process.stdin.on('data', function(userInput) {
  inputString1 = inputString1 + userInput;
});

process.stdin.on('end', function(x) {
  inputString1.trim();
  inputString1 = inputString1.split("\n");

  for(let i = 0; i < inputString1.length; i++) {
    inputString += inputString1[i].trim() + ' ';
  }
  inputString.trim();
  inputString = inputString.split(" ");
  main();
});

function readline() {
  return result = inputString[currentLine++];
}

function main() {
  let a = parseInt(readline());
  let b = parseInt(readline());

  console.log(a + b);
}
