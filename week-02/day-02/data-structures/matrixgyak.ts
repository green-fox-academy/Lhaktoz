'use strict';

function changeMatrix (matrix: number[][]) {
  let newmatrix: number[][] = []
  for (let i: number = 0; i < matrix.length; i++) {
    newmatrix.push([]);
    for (let j: number = 0; j < matrix[i].length; j++) {
        newmatrix[i].unshift(matrix[(matrix.length-1)-i][j]);
      }
    }
    return newmatrix
}
 

// function isSymmetricTryTwo(matrix: number[][]): boolean {

//   for (let i: number = 0; i < matrix.length; i++) {
//     for (let j: number = 0; j < matrix[i].length; j++) {
//       if (matrix[i][j] !== matrix[j][i]) {
//         return false;
//       }
//     }
//   }

//   return true;
// }

let testMatrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
let testMatrix2: number[][] = [
  [7, 2, 4],
  [6, 5, 7],
  [1, 2, 1]
]

console.log(changeMatrix(testMatrix));
// console.log(changeMatrix(testMatrix2));