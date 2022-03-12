//! O(n) time | O(1) space
function isMonotonic(array) {
if(array.length <= 2) return true;
	
	let direction = array[1] - array[0];
	for(let i = 2; i < array.length; i++) {
		if(direction == 0 ) {
			direction = array[i] - array[0];
			continue;
		}
		if(breaksDirection(direction, array[i], array[i - 1]) ){
			 return false;
			 } 
	}
	return true;
}
function breaksDirection(direction, currentInt, previousInt) {
	const difference = currentInt - previousInt;
	if(direction > 0) return difference < 0;
	return difference > 0;
}