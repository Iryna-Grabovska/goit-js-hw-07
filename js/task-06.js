
const input = document.querySelector('[data-length]')

console.log(input);

input.addEventListener('blur', (event) => {
  console.log(event);


  let value = input.value.length;

  if (value != input) {
    input.classList.add('invalid');
    input.classList.remove('valid');
    return;
  }
  input.classList.add('valid');
  input.classList.remove('invalid');

})