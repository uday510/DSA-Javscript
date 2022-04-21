function reversePostOrder(tree) {

    let currentNode = tree;
    let previousNode = null;
    while(currentNode) {

        if(currentNode.left) {
            previousNode = currentNode.left;
            while(previousNode.right) {
                previousNode = previousNode.right;
            }
            previousNode.right = currentNode.right;
            currentNode.right = currentNode.left;
            currentNode.left = null;
        }
        currentNode = currentNode.right;
    }
}