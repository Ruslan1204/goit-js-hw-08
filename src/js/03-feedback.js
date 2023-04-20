import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', onForm);
form.addEventListener('input', throttle(onInput, 500));

saveTextarea();

const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

function onForm(evt) {
  evt.preventDefault();
  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
  formData.email = '';
  formData.message = '';
}



function onInput(evt) {
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData)) || {};
}

function saveTextarea() {
  const saveMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  
  if (saveMessage) {
    form.elements.email.value = saveMessage.email || null;
    form.elements.message.value = saveMessage.message || null;
  }
}
