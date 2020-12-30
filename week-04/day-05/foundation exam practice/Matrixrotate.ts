"use strict"

function rotateMatrix(matrix: number[][]) {
  let newMatrix: number[][] = [];
  for( let i:number = 0; i < matrix.length; i++) {
    newMatrix.push([]);
    for( let j:number = 0; j< matrix[i].length; j++) {
      newMatrix[i].push(matrix[(matrix[i].length-1)-j][i])
    }
  }
  return newMatrix
}

let exampleMatrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(rotateMatrix(exampleMatrix));