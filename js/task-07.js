const inputRef = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
inputRef.addEventListener("mousemove", onMouseMove);
function onMouseMove(event) {
  spanText.style.fontSize = event.currentTarget.value + "px";

  console.log(event);
}