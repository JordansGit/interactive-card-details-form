/* 
To do: 
- form error: show p.error text + turn border red. 
- update text from form into the credit card text. 
- on button click, change to completed state. 
*/

let form = document.querySelector('form');
let nameError = document.querySelector('#name-error-msg');
let cardNoError = document.querySelector('#cardno-error-msg');
let dateError = document.querySelector('#date-error-msg');
let cvcError = document.querySelector('#cvc-error-msg');

let formName = form["name"];
let formNumber = form["cardnumber"];
let expDateMM = document.querySelector('#expdateMM');
let expDateYY = document.querySelector('#expdateYY');
let formCvc = form["cvc"];

form.addEventListener('submit', validateForm)

formName.addEventListener("keydown", function(e) {
  console.log(e.key);
});

function validateForm(e) {
  e.preventDefault();
  let cardNoRegex = /^(\d+ )*(\d+)$/; 

  console.log(
    formName,
    formNumber,
    expDateMM,
    expDateYY,
    formCvc
  )
  if (formName.value == "") {
    nameError.innerText = "Can't be blank";
  }

  if (formNumber.value == "") {
    cardNoError.innerText = "Can't be blank";
  } else if (cardNoRegex.test(formNumber.value) === false) {
    cardNoError.innerText = "Wrong format, numbers only";
  }

  if (expDateMM.value || expDateYY.value == "") {
    dateError.innerText = "Can't be blank";
  }

  if (formCvc.value == "") {
    cvcError.innerText = "Can't be blank";
  }


  
}