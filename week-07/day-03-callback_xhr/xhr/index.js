const xhr = new XMLHttpRequest();

xhr.onreadystatechange = handleReadyStateChange;
xhr.open('GET', 'https://swapi.dev/api/people');

xhr.send()

// function handleReadyStateChange() {
//   if(xhr.readyState === XMLHttpRequest.DONE) {
//     console.log(xhr.status);
//     // console.log(xhr.response);

//     let characters = JSON.parse(xhr.response);

//     characters.results.forEach(element => {
//       console.log(element.name);
      
//     })
//   }
// }

const characterList = document.querySelector('#characterList');
const moviesList = document.querySelector('#moviesList');

// function addExpenseToList(expense) {
//   const row = document.createElement('li');
//   row.innerHTML = `${expense.name}: <strong>${expense.amount}</strong>`;
//   expenseList.appendChild(row);
// }

const inputName = document.querySelector('#add-name');
const button = document.querySelector('#search');

// button.onclick = () => {
//   const xh
//   let newSearch = {
//     name: inputName.value,
//     amount: Number(inputAmount.value),
//   }
