'use strict';

require('es6-promise');


// setTimeout(printString => {
//   console.log('TIMED OUT!')
// }, 300);


//2. exercise
// var promise = new Promise (function (resolve, reject) {
//   setTimeout(() => resolve("FULFILLED!"), 300);
// });

// promise.then(response => {
//   console.log(response);
// })

// 3. exercise
var promise = new Promise (function (resolve, reject) {
  setTimeout(() => { reject(new Error("REJECTED!"))}, 300);
});

let onReject = err => console.log(err.message)

promise.then(null, onReject)

//4.exercise




