
const counterValueRef = document.querySelector("#value");
const decrementBtnRef = document.querySelector(`[data-action= "decrement"]`);
const incrementBtnRef = document.querySelector(`[data-action= "increment"]`);

decrementBtnRef.addEventListener("click", onDecrementClick);
incrementBtnRef.addEventListener("click", onIncrementBtnRef);
function onDecrementClick() {
  counterValueRef.textContent -= 1;
};
function onIncrementBtnRef() {
  counterValueRef.textContent = Number(counterValueRef.textContent) + 1;
};


