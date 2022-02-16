class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let currentNode = linkedList;
	
	while (currentNode) {
		let nextDistinctNode = currentNode.next;
		while (nextDistinctNode && currentNode.value === nextDistinctNode.value) {
			nextDistinctNode = nextDistinctNode.next;
		}
		currentNode.next = nextDistinctNode;
		currentNode = nextDistinctNode;
	}
	return linkedList;
}
