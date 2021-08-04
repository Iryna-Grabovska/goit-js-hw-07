const refs = {
  input: document.querySelector("#name-input"),
  textSpan: document.querySelector("#name-output"),
}
refs.input.addEventListener(`input`, onInputChange);
function onInputChange(event) {
  refs.textSpan.textContent = event.currentTarget.value;
}