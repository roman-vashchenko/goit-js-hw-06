const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length >= input.dataset.length) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  }
  if (event.currentTarget.value.length < input.dataset.length) {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }

  if (!event.currentTarget.value.length) {
    input.classList.remove('valid', 'invalid');
  }
}
