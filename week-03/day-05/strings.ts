'use string'

//Given a string, compute recursively (no loops) a new string where all the lowercase 'x' chars have been changed to 'y' chars.

function modifyx (str: string){
  if (str.indexOf('x') === -1) {
    return str;
  } else {
   str = str.replace('x','y');
    return modifyx(str);
  }

}

console.log(modifyx('xaaaxaaaxxxaaxx'));