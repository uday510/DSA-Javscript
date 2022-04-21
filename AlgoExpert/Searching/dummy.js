function findNodesDistanceK(tree, target, k) {
    const nodesDistanceK = [];
    findDistanceFromNodeTarget(tree, target, k, nodesDistanceK);
    return nodesDistanceK;
}

function findNodesDistanceK(node, target, k, nodesDistanceK) {

    if(!node) return -1;

    if(node.value == k) {
        addSubtreeNodesAtDistanceK(node, 0, k, nodesDistanceK);
        return 1;
    }

    const leftDistance = findDistanceFromNodeTarget(node.left, target, k, nodesDistanceK);
    const rightDistance = findDistanceFromNodeTarget(node.right, target, k, nodesDistanceK);

    if(leftDistance == k || rightDistance == k) {
        nodesDistanceK.push(node.value);
    }

    if(leftDistance != -1) {
            addSubtreeNodesAtDistanceK(node.right, leftDistance + 1, k, nodesDistanceK);
            return leftDistance + 1;
    }

    if(rightDistance != -1) {
            addSubtreeNodesAtDistanceK(node.left, leftDistance + 1, k, nodesDistanceK);
            return rightDistance + 1;
    }
    return -1;
}

function addSubtreeNodesAtDistanceK(node, distance, k, nodesDistanceK) {

    if(!node) return;

    if(distance == k) nodesDistanceK.push(node.value);
    else {
        addSubtreeNodesAtDistanceK(node.left, distance + 1, k, nodesDistanceK);
        addSubtreeNodesAtDistanceK(node.right, distance + 1, k, nodesDistanceK);
    }
}