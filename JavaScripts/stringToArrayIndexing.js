const charCount = (string, char) => Array.from(string)
	.filter((c) => c === char)
	.length;

const subLength = (string, character) => {
	if (charCount(string, character) === 2){
	const firstIndex = Array.from(string)
	.findIndex((element) => element === character);
	const secondIndex = Array.from(string)
	.indexOf(character, firstIndex +1);
	return (secondIndex - firstIndex) + 1
	}
	return 0;
}

console.log(subLength('Saturday', 'a')); // returns 6
console.log(subLength('summer', 'm')); // returns 2
console.log(subLength('digitize', 'i')); // returns 0
console.log(subLength('cheesecake', 'k')); // returns 0
