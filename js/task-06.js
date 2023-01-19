const input = document.querySelector('#validation-input');
const numberСharacters = Number(input.dataset.length);

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === numberСharacters) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }

  if (!event.currentTarget.value.length) {
    input.classList.remove('valid', 'invalid');
  }
}
