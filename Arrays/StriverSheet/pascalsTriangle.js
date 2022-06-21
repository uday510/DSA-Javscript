//! https://leetcode.com/problems/pascals-triangle/


function generate(numRows) {

    let output = [];

    for(let i = 0; i < numRows; i++) {
        let row = [];
        for(let j = 0; j <= i; j++) {
            row.push(1);
        }
        output.push(row);
    }
    console.log(output);
   
    for(let i = 0; i < output.length; i++) {
        let currentRow = i;
        let startCol = 1;
        let endCol = output[i].length - 2;
         if(output[currentRow].length > 2) {
             while(startCol <= endCol) {
                 console.log("Start", startCol, endCol);
                    output[currentRow][startCol] = output[currentRow - 1][startCol] +  output[currentRow - 1][startCol - 1];
                    output[currentRow][endCol] = output[currentRow][startCol];
                    startCol++, endCol--;
             }
         }
       }
       return output;     
}


const numRows = 5;

console.log(generate(numRows));