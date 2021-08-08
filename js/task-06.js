const input = document.querySelector("#validation-input");
const limit = Number(document.querySelector('#validation-input').dataset.length)


console.log(input);
input.addEventListener('blur', () => {

  let value = input.value.length;
  console.log(value);
  if (value !== limit) {
    input.classList.add('invalid');
    input.classList.remove('valid');
    return;
  }

  input.classList.add('valid');
  input.classList.remove('invalid');


})