'use strict'

// window.onload = () => {
//   fetch('http://localhost:3000/books', {
//     method: 'GET',
//   })
//   .then(response => {
//     if(response.status !== 200) {
//       throw new Error('nincs válasz')
//     }
//     return response;
//   })
//   .then(response => response.json())
//   .then(responseArray => {
//     responseArray.forEach(title=> {
//       addBookTitleToList(title);
//     });
//   })
//   .catch(err => {
//     console.log(err.message);
//   })
// }

window.onload = () => {
  fetch('http://localhost:3000/bookdetails', {
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
    responseArray.forEach(book=> {
    addBookDetailsToTable(book);
    });
  })
  .catch(err => {
    console.log(err.message);
  })
}

const body = document.querySelector('body');

function addBookTitleToList(title) {
  let newUl = document.createElement('ul');
  let newLi= document.createElement('li');
  newLi.innerHTML = title.book_name
  body.appendChild(newUl);
  newUl.appendChild(newLi);
}


function addBookDetailsToTable(details) {
  const Tbody = document.querySelector('tbody')
  let newTR = document.createElement('tr');
  Tbody.appendChild(newTR);

  let newTD = document.createElement('td');
  newTD.innerHTML = details.book_name;
  newTR.appendChild(newTD);

  let newTD2 = document.createElement('td');
  newTD2.innerHTML = details.cate_descrip;
  newTR.appendChild(newTD2);

  
  let newTD3 = document.createElement('td');
  newTD3.innerHTML = details.pub_name;
  newTR.appendChild(newTD3);

  let newTD4 = document.createElement('td');
  newTD4.innerHTML = details.book_price;
  newTR.appendChild(newTD4);

}
