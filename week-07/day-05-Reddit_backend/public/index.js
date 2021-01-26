'use strict'

window.onload = () => {
  let xhr= new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3000/posts');  //a server.js kap egy lekerest erre az endpointra akkor megnyitja ezt a csatornat
  xhr.send(); // ezzel megy el az adat valojaban, ezzel kuldjuk el a lekerest
  xhr.onload = () => {
    let posts = JSON.parse(xhr.response);
    posts.forEach(post => {
      addPostToList(post)   
    });
  }
}

const button = document.querySelector('button');

function addPostToList(post) {
  const ul = document.querySelector('ul');
  let newLi = document.createElement('li');
  newLi.innerHTML = ` ${post.title}, ${post.url}, ${post.score} `;
  ul.appendChild(newLi);
}

button.addEventListener('click', (event) => {
// event.preventDefault(); //ha form-ra rakok eventlistenert, ha buttonra akkor type=submitot vegyemki
  const title = document.querySelector('#title');
  const url = document.querySelector('#url');
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/posts');
  xhr.setRequestHeader('Content-Type', 'application/json');
  let postObject = {
    title: title.value,
    url: url.value,
  }
  xhr.send(JSON.stringify(postObject));
  xhr.onload = () => {
    const newPost = JSON.parse(xhr.response);
    addPostToList(newPost[0]);
    console.log(newPost)
  }
})




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

// parse = JSON -> object/arrey
// stringify = object/arrey -> JSON

