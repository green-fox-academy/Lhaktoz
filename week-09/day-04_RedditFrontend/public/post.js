'use strict';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const title = document.querySelector('#title');
  const url = document.querySelector('#url');

  if(!title.value) {
    alert('You forgot to add title');
  } else if(!title.url) {
    alert('You forgot to add url');
  } else {
  fetch('http://localhost:3000/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: title.value,
      url: url.value
    })
  })
  .then(window.location.assign(`http://localhost:3000/`));
}
})