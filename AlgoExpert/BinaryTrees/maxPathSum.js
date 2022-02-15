//!12/02/2022
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

}

class maxSum {
    constructor(data) {
        this.data = data;
    }
}

function maxPathSum(root) {
    if(root === null) return 0;

   
    const leftSum = maxPathSum(root.left);
    const rightSum = maxPathSum(root.right);


    let sum = Math.max(leftSum, rightSum);
    

    

    return sum;

}

const root = new Node(1);

root.left = new Node(2);
root.right = new Node(3);

root.left.left = new Node(4);
root.left.right = new Node(5);

root.right.left = new Node(6);
root.right.right = new Node(7);



console.log(maxPathSum(root));







