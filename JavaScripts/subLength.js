// max condensed
const charCount = (string, char) => Array.from(string)
    .filter((c) => c === char)
    .length;

function subLength(string, character) {
    // check there is not more than 2 character in stringArray
    // if char > 0 && char <= 2{}
    if (charCount(string, character) === 2) {

        // turn string into array first!
        let stringArray = Array.from(string);

        // findIndex() first letter
        const firstIndex = stringArray.findIndex(
            (element) => element === character);

        // indexOf() second letter, starting from first index
        const secondIndex = stringArray.indexOf(character, firstIndex + 1);

        return (secondIndex - firstIndex) + 1
    }
    return 0;
}

console.log(subLength('Saturday', 'a')); // returns 6
console.log(subLength('summer', 'm')); // returns 2
console.log(subLength('digitize', 'i')); // returns 0
console.log(subLength('cheesecake', 'k')); // returns 0

// function charCount(string, char){
// 	let count = 0;
// 	for (let e of string){
// 		if (e === char){
// 			count++}
// 	}
// 	return count;
// }
