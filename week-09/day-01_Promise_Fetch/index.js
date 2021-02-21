'use strict';

const button = document.querySelector('button');
const container = document.querySelector('div');



button.addEventListener('click', (event) => {
  fetch('http://api.icndb.com/jokes/random', {
    method: 'GET',
  })
  .then(response => {
    if(response.status !== 200) {
      throw new Error('nincs válasz')
    }
    return response;
  })
  .then(response => response.json())
  .then(responseObjecttoJson => {
    let newP = document.createElement('p');
    newP.innerText = responseObjecttoJson.value.joke;
    container.appendChild(newP);
  })
  .catch(err => {
    console.log(err.message);
  })
})