const counter = document.getElementById("counter");
const incrementButton = document.getElementById("increase");
incrementButton.addEventListener("click", () => {
  counter.innerText = parseInt(counter.innerText) + 1;
  if (counter.innerText > 0) counter.style.color = "green";
  else if (counter.innerText == 0) counter.style.color = "black";
});
const decrementButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
decrementButton.addEventListener("click", () => {
  counter.innerText = parseInt(counter.innerText) - 1;
  if (counter.innerText < 0) counter.style.color = "red";
  else if (counter.innerText == 0) counter.style.color = "black";
});
resetButton.addEventListener("click", () => {
  counter.innerText = 0;
  counter.style.color = "black";
});
