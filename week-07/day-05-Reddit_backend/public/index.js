'use strict'

//XHR
// window.onload = () => {
//   let xhr= new XMLHttpRequest();
//   xhr.open('GET', 'http://localhost:3000/posts');  //a server.js kap egy lekerest erre az endpointra akkor megnyitja ezt a csatornat
//   xhr.send(); // ezzel megy el az adat valojaban, ezzel kuldjuk el a lekerest
//   xhr.onload = () => {
//     let posts = JSON.parse(xhr.response);
//     posts.forEach(post => {
//       addPostToList(post)   
//     });
//   }
// }

const form = document.querySelector('form');

function addPostToList(post) {
  const ul = document.querySelector('ul');
  let newLi = document.createElement('li');
  newLi.innerHTML = ` ${post.title}, ${post.url}, ${post.score} `;
  ul.appendChild(newLi);
}

// form.addEventListener('submit', (event) => {
// event.preventDefault(); //ha form-ra rakok eventlistenert, ha buttonra akkor type=submitot vegyemki
//   const title = document.querySelector('#title');
//   const url = document.querySelector('#url');
//    //if(title.value && url.value) {
//   const xhr = new XMLHttpRequest();
//   xhr.open('POST', '/posts');
//   xhr.setRequestHeader('Content-Type', 'application/json');
//   let postObject = {
//     title: title.value,
//     url: url.value,
//   }
//   xhr.send(JSON.stringify(postObject));
//   xhr.onload = () => {
//     const newPost = JSON.parse(xhr.response);
//     addPostToList(newPost[0]);
//     console.log(newPost)
//   }
 //    //   }
// })


//xhr-hez kiegészítők

// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = handleReadyStateChange;
// function handleReadyStateChange () {
//   if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//     let posts = JSON.parse(xhr.response);
//         addPostToList
//   }
// }
// xhr.onload = () => {
// }
// xhr.open('GET', '/posts');
// xhr.send();

// parse = JSON string-> object/arrey
// stringify = object/arrey -> JSON string


//FETCH
window.onload = () => {
  fetch('http://localhost:3000/posts', {
    method: 'GET',
  })
  .then(response => {                       //response Object megszerzese
    if(response.status !== 200) {
      throw new Error('nincs valasz')
  }
  //  console.log(response.body)
    return response;
  })
  .then(response => response.json()) //response-ban header és body is van, bodyból kiveszi az adatot
  .then(responseArrey => {
 //   console.log(responseArrey)
    responseArrey.forEach(post => {
      addPostToList(post);
    });
  })
  .catch(err => {
    console.log(err.message);   //hibakezeles
  })
}



form.addEventListener('submit', (event) => {
  event.preventDefault()
  const title = document.querySelector('#title');
  const url = document.querySelector('#url');
  fetch('http://localhost:3000/posts', {
    method: 'POST',
    headers: {            //headerek
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: title.value,
      url: url.value,
    }) ///body nem GET keres eseten
  })
    .then(response => {                       //response Object megszerzese
      if(response.status !== 200) {
        throw new Error('nincs valasz')
      }
      return response;
    })
    .then(response => response.json())  //response-ban header és body is van, bodyból kiveszi az adatot olvashatóan (nem jsonként)
    .then(responseArrey => {     
      console.log(responseArrey); 
      addPostToList(responseArrey[0]);//json kilogolasa
    })
    .catch(err => {
      console.log(err.message);   //hibakezeles
    })
})


