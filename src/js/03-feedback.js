import throttle from 'lodash.throttle';


const feedbackForm = document.querySelector('.feedback-form');

const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');

const saveFormState = throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}, 500);

const populateFormFields = () => {
  const formState = localStorage.getItem('feedback-form-state');

  if (formState) {
    const { email, message } = JSON.parse(formState);
    emailInput.value = email;
    messageInput.value = message;
  }
};

feedbackForm.addEventListener('input', saveFormState);

window.addEventListener('DOMContentLoaded', populateFormFields);

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formState = localStorage.getItem('feedback-form-state');

  if (formState) {
    const { email, message } = JSON.parse(formState);
    console.log('Form submitted with values:', { email, message });
  } else {
    console.log('Form submitted with empty values.');
  }

  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
});
