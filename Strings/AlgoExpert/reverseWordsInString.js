//! O(n) time | O(n) space

function reverseWordsInString(string) {
  const words = [];
	let startOfWord = 0;
	
	for(let i = 0; i < string.length; i++) {
		const character = string[i];
		
		if(character == ' ') {
			words.push(string.slice(startOfWord, i));
			startOfWord = i;
		} else if(string[startOfWord] == ' ') {
			words.push(' ');
			startOfWord = i;
		}
	}
	words.push((string.slice(startOfWord)));
	
	reverseList(words);
	return words.join('');
}

function reverseList(list) {
	let start = 0;
	let end = list.length - 1;
	
	while(start < end) {
		const temp = list[start];
		list[start] = list[end];
		list[end] = temp;
		start++;
		end--;
	}
}

const words = "AlgoExpert is the best!";


console.log(reverseWordsInString(words));