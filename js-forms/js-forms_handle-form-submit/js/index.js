console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

const formElement = event.target

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  event.target.reset();
});


// const age = Number(data.age) || 0;
// const badness = Number(data.badness) || 0;
// const ageBadnessSum = age + badness;

//console.log(`The age-badness-sum of "${data.firstName}" is "${ageBadnessSum}"`);

//form.reset();
//firstNameInput.focus();
