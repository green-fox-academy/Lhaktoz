const xhr = new XMLHttpRequest();

xhr.onreadystatechange = handleReadyStateChange;
xhr.open('GET', 'https://swapi.dev/api/people');

xhr.send()

function handleReadyStateChange() {
  if(xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.status);
    // console.log(xhr.response);

    let characters = JSON.parse(xhr.response);

    characters.results.forEach(element => {
      console.log(element.name);
      
    })
  }
}

const resultList = document.querySelector('#list');

function addExpenseToList(expense) {
  const row = document.createElement('li');
  row.innerHTML = `${expense.name}: <strong>${expense.amount}</strong>`;
  expenseList.appendChild(row);
}

const inputName = document.querySelector('#add-name');
const inputAmount = document.querySelector('#add-amount');
const button = document.querySelector('#add-expense');

button.onclick = () => {
  let newExpense = {
    name: inputName.value,
    amount: Number(inputAmount.value),
  }
  console.log(newExpense);