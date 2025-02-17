console.clear();

// Assign input and button to a variable
const inputElement = document.querySelector('[data-js="first-input"]');
const button = document.querySelector('[data-js="button-uppercase"]');

//add "eventListener" to button

button.addEventListener("click", () => {
  inputElement.value = inputElement.value.toUpperCase();
});
