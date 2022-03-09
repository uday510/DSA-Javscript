//! O(n) time | O(1) space
function isValidSubsequence(array, sequence) {
  let seqIdx = 0;
	for(let i = 0; i < array.length; i++) {
	   if(seqIdx == sequence.length) break;
		if(array[i] == sequence[seqIdx]) seqIdx++;
   }
  return seqIdx === sequence.length;
}

let array = [5, 1, 22, 25, 6, -1, 8, 10];
let sequence = [1, 6, -1, 10];

console.log(isValidSubsequence(array, sequence));