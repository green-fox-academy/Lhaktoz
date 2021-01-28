'use strict'

window.onload = () => {
  fetch('http://localhost:3000/posts', {
    method: 'GET',
  })
  .then(response => {
    if(response.status !== 200) {
      throw new Error('nincs válasz')
    }
    return response;
  })
  .then(response => response.json())
  .then(responseArrey => {
    console.log(responseArrey)
    responseArrey.forEach(post => {
      addPostToSite(post);
    })
  })
  .catch(err => {
    console.log(err.message);   //hibakezeles
  })
}

function addPostToSite(post){
  const main = document.querySelector('main');
 
  let newPostContainer = document.createElement('div');

  newPostContainer.classList.add('post-container');

  main.appendChild(newPostContainer);

  let newVoteDiv = document.createElement('div');
  newVoteDiv.classList.add('vote');
  newPostContainer.appendChild(newVoteDiv);

  let newUpVoteButton = document.createElement('button')
  newUpVoteButton.innerHTML = '<img class="upvote" src="imgs/upvote.png">';
  newVoteDiv.appendChild(newUpVoteButton);

  let newScoreP = document.createElement('p');
  newScoreP.innerText = post.score;
  newVoteDiv.appendChild(newScoreP);

  let newDownVoteButton = document.createElement('button')
  newDownVoteButton.innerHTML = '<img class="downvote" src="imgs/downvote.png">';
  newVoteDiv.appendChild(newDownVoteButton);
  
  let newDate = Date.now()
  let newPostDetailsDiv = document.createElement('div');
  newPostDetailsDiv.classList.add('post-details')
  newPostDetailsDiv.innerHTML = `  <a href="${post.url}"> ${post.title}</a>
  <p class = "timestamp"> Submitted at ${post.timestamp}</p>
  <button class="modify">Modify Post</button>
  <button class="remove">Remove Post</button>
  </div>`
  newPostContainer.appendChild(newPostDetailsDiv);
}


/* <div class = "post-container">
<div class="vote">
  <button><img class="upvote" src="imgs/upvote.png"></button>
  <p>400</p>
  <button><img class="downvote" src="imgs/downvote.png"></button>
</div>
<div class="post-details">
  <a href=""> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores explicabo magnam, modi cupiditate reiciendis sequi dolore tempore quas ea totam!</a>
  <p class = timestamp>submitted 5 hours ago</p>
  <button class="modify">Modify Post</button>
  <button class="remove">Remove Post</button>
  </div>
</div> */

