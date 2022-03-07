function checkTree(root1, root2) {
    if(!root1 && !root2) return;

    if(root1.value === root2.value) {
        return checkTree(root1.left, root2.left) && checkTree(root1.right, root2.right);
    }
    else return false;
}