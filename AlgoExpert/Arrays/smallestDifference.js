let arrayOne = [20, 5, 10, 20, 28, 3];
let arrayTwo = [20, 134, 135, 15, 17, 20];

arrayOne.sort ((a, b) => a - b);
arrayTwo.sort ((a, b) => a - b);

let i = 0;
let j = 0;
let smallest = Infinity;
let current = Infinity;
let smallestPair = [];

while (i < arrayOne.length && j < arrayTwo.length) {
        let firstNum = arrayOne[i];
        let secondNum = arrayTwo[j];
        if (firstNum - secondNum == 0) {
            console.log([firstNum, secondNum]);
        return;
        }
        else if (firstNum < secondNum) {
            current = secondNum - firstNum;
            i++;
        } else if (firstNum > secondNum) {
            current = secondNum - firstNum;
            j++;
        }
        if (smallest > current) {
            smallest = current;
            smallestPair = [firstNum, secondNum];
        }
}
console.log(smallestPair);




