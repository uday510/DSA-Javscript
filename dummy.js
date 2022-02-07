process.stdin.resume();
process.stdin.setEncoding('utf8');

let inputString = "";
let inputString1 = "";
let currentLine = 0;

process.stdin.on('data', function(input) {
    inputString1 += input;
});

process.stdin.on('end', function() {
    inputString1.trim();
    inputString1 = inputString1.split("\n");

    for(let i = 0; i < inputString1.length; i++) {
        inputString += inputString1[i].trim() + ' ';
    }
    inputString.trim();
    inputString = inputString.split(" ");
    main();
})

function readline() {
    return result = inputString[currentLine++];
}

function main() {
    let n = parseInt(readline());
    let arr = [];

    for(let i = 0; i < n; i++) {
        arr.push(parseInt(readline()));
    }

    let k = arr.length;
    let result = [];
    let i = 0;
    let j = 1;
    let output = 0;

 while( i < k && j < n ) {
    if (arr[i] == arr[j]) {
        i++;
        j++;
    }
    else {
        result.push(arr[i]);
        result.push(arr[j]);
        i = j + 1;
        j = i + 1;
    }
}

 for(let i = 0; i < result.length; i++) {
     output += result[i];
 }

}

// let n = 5;
// let arr = [1, 1, 3, 4, 5];
// arr.sort( (a, b) => a - b)
// let k = arr.length;
// let i = 0;
// let j = 1;
// let result = [];
// let output = 0;


//  while( i < k && j < n ) {
//     if (arr[i] == arr[j]) {
//         i++;
//         j++;
//     }
//     else {
//         result.push(arr[i]);
//         result.push(arr[j]);
//         i = j+1;
//         j = i + 1;
//     }
// }

//  for(let i = 0; i < result.length; i++) {
//      output += result[i];
//  }
// console.log(output);