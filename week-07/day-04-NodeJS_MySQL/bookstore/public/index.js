'use strict'

window.onload = () => {
  fetch('http://localhost:3000/books', {
    method: 'GET',
  })
  .then(response => {
    if(response.status !== 200) {
      throw new Error('nincs válasz')
    }
    return response;
  })
  .then(response => response.json())
  .then(responseArray => {
    responseArray.forEach(title=> {
      addBookTitleToList(title);
    });
  })
  .catch(err => {
    console.log(err.message);
  })
}

const body = document.querySelector('body');
function addBookTitleToList(title){
  let newUl = document.createElement('ul');
  let newLi= document.createElement('li');
  newLi.innerHTML = title
  body.appendChild(newUl);
  newUl.appendChild(newLi);
}