class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  
	let p1 = null;
	let p2 = head;
	while(p2) {
		const p3 = p2.next;
		p2.next = p1;
		p1 = p2;
		p2 = p3;
	}
	return p1;
}