//! https://leetcode.com/problems/set-matrix-zeroes/


console.time("runTime");
function setMatrixZeros(matrix) {
const cols = [];
const rows = [];
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) { 
            if(matrix[i][j] === 0) {
                rows.push(i);
                cols.push(j);
                }
            }
        }
        setRowZeros(rows, matrix);
        setColZeros(cols, matrix);
    return matrix;
}

function setRowZeros(rows, matrix) {
    
    for(let i = 0; i < rows.length; i++) {
        
        let row = rows[i];
        if(row != rows[i - 1]) {
            for(let col = 0; col < matrix[0].length; col++) {
            matrix[row][col] = 0;
        }
      }
    }
}

function setColZeros(cols, matrix) {
    for(let i = 0; i < cols.length; i++) {
        let col = cols[i];
        if(col != cols[i - 1]) {
            for(let row = 0; row < matrix.length; row++) {
        matrix[row][col] = 0;
         } 
        }
    }
}


const matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]

console.log(setMatrixZeros(matrix));

console.timeEnd("runTime")