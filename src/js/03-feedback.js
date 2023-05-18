import throttle from 'lodash.throttle';
const FORM_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(inputForm, 500));
form.addEventListener('submit', submitForm);
let formValues = JSON.parse(localStorage.getItem(FORM_KEY));
fillForm();
function fillForm() {
  if (formValues) {
    form.elements.email.value = formValues.email;
    form.elements.message.value = formValues.message;
  }
}
function inputForm() {
  formValues = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  try {
    localStorage.setItem(FORM_KEY, JSON.stringify(formValues));
  } catch (error) {
    console.error(error.message);
  }
}
function submitForm(event) {
  event.preventDefault();
  console.log(formValues);
  localStorage.removeItem(FORM_KEY);
  event.currentTarget.reset();
  formValues = {};
}
