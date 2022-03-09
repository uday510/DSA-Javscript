//! O(nlog(n) + mlog(m)) time | O(1) space
function smallestDifference(arrayOne, arrayTwo) {
 arrayOne.sort( (a, b) => a - b);
 arrayTwo.sort( (a, b) => a - b);
 let idxOne = 0;
 let idxTwo = 0;
 let current = Infinity;
 let smallest = Infinity;
 let smallestPair = [];
while(idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
	let firstNum = arrayOne[idxOne];
	let secondNum = arrayTwo[idxTwo];
	if(firstNum < secondNum) {
		current = secondNum - firstNum;
		idxOne++;
	} else if(secondNum < firstNum) {
		current = firstNum - secondNum;
		idxTwo++;
	} else {
		return [firstNum, secondNum];
	}
	if(current < smallest) {
		smallest = current;
		smallestPair = [firstNum, secondNum];
	}
}
	return smallestPair;
}