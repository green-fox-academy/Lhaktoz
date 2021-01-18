import {Domino} from "./domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2 ,4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

// print(dominoes);

let sortedDominoes = [];
sortedDominoes.push(dominoes[0])
// console.log(sortedDominoes);

for (let i = 0, j = 0; i < 6; i ++){
  while (dominoes[i].values[1] != dominoes[j].values[2]){
  j++
  }
  console.log(dominoes[j].values[2])
}

// console.log(dominoes.splice(1))
// console.log(dominoes[0].values[0]);