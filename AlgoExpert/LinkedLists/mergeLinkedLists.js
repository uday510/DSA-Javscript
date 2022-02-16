class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function mergeLinkedLists(headOne, headTwo) {

	recursiveMerge(headOne, headTwo, null);
	return headOne.value < headTwo.value ? headOne : headTwo
}
function recursiveMerge(p1, p2, p) {
	if (p1 === null) {
		p.next = p2;
		return;
	} 
	if(p2 === null ) {
		p.next = p1;
		return;
	}
	if(p1.value < p2.value)
		recursiveMerge(p1.next, p2, p1);
	else  {
			if(p !== null) p.next = p2;
		const newP2 = p2.next;
			
		p2.next = p1;
		 
		recursiveMerge(p1, newP2, p2);
	}
}