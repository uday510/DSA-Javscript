//! O(n) time | O(n) space
function spiralTraverse(array) {
	const result = [];
	let startRow = 0,
		endRow = array.length - 1;
	let startCol = 0, 
		endCol = array[0].length - 1;
	
		while(startRow <= endRow && startCol <= endCol) {
			for(let col = startCol; col <= endCol; col++) {
				result.push(array[startRow][col]);
			}
			for(let row = startRow + 1; row <= endRow; row++) {
				result.push(array[row][endCol]);
			}
			for(let col = endCol - 1; col >= startCol; col--) {
				if(startRow == endRow) break;
				result.push(array[endRow][col]);
			}
			for(let row = endRow - 1; row > startRow; row--) {
				if(startCol == endCol) break;
				result.push(array[row][startCol]);
			} 
			startRow++;
			endRow--;
			startCol++;
			endCol--;

		} return result;
	
}

const array = [
//!  					   		[1, 2, 3, 4],
//! Test case for line no. 18	[10, 11, 12, 5],
//! startRow === endRow	   		[9, 8, 7, 6]

//!       						  [1, 2, 3],
//!       						  [12, 13, 4],
//!  Test case for line no. 23    11, 14, 5],
//!  startCol === endCol     	  [10, 15, 6],
//!       						  [9, 8, 7]

]

console.log(spiralTraverse(array));


