class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
  
	let first = head;
	let second = head;
	let counter = 1;
	
	if (first === null) return;
	
	while (counter++ <= k)	second = second.next;
	if (second === null) {
		head.value = head.next.value;
		head.next = head.next.next;
		return;
	}
	
	while (second.next != null) {
		second =second.next;
		first = first.next;
	}
	
	first.next = first.next.next;
	
}