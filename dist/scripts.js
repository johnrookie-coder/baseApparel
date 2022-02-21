'use strict';

const btn = document.querySelector('.btn');
const errIcon = document.querySelector('.error-icon');
const inputs = document.querySelector('.inputs');
const msg = document.querySelector('.msg');

// Email Validation
const validateEmail = email => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

// Show error
const showError = (input, errIcon, msg) => {
  input.classList.remove('btn--err');
  input.classList.add('btn--err');

  errIcon.classList.remove('hidden');
  msg.classList.remove('hidden');
};

// Remove error
const removeError = (input, errIcon, msg) => {
  input.classList.remove('btn--err');
  errIcon.classList.add('hidden');
  msg.classList.add('hidden');
};

// Button click event
btn.addEventListener('click', e => {
  let inputValue = document.querySelector('.inputs').value;

  // Checks whether the email is valid or not
  if (!validateEmail(inputValue)) {
    showError(inputs, errIcon, msg);
    console.log(inputs);
  }

  // If the email is valid, clear the input fieldset
  if (validateEmail(inputValue)) inputs.value = '';

  e.preventDefault();
});

// When the email is incorrect the "err" message will fade away once user begin to input something
inputs.addEventListener('input', () => {
  removeError(inputs, errIcon, msg);
});
