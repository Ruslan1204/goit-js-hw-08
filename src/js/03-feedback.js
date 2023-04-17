const throttle = require('lodash.throttle');

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
form.addEventListener('submit', onForm);
form.addEventListener('input', throttle(onInput, 500));

const email = document.querySelector('[name="email"]');
// email.addEventListener('input', onEmail);

const message = document.querySelector('[name="message"]');
// textarea.addEventListener('input', );

saveTextarea();
const formData = {};

function onForm(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);

  console.log(formData)

}



function onInput(evt) {
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function saveTextarea() {
  const saveMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (saveMessage) {
    email.value = saveMessage.email;
    message.value = saveMessage.message;
  }
}
