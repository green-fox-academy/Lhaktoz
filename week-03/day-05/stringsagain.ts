'user strict';

//Given a string, compute recursively a new string where all the 'x' chars have been removed.

function removex(str: string){
  if (str.indexOf('x') === -1 ){
    return str
  } else {

    str = str.slice(0,str.indexOf('x')) + str.slice(str.indexOf('x')+1)
    return removex(str);
  }
}

console.log(removex('Axalmax'));
console.log('Banán'.slice(0,4))