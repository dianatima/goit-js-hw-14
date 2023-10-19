const incrementBtn = document.querySelector("[data-action='increment']");
const decrementBtn = document.querySelector("[data-action='decrement']");
const value = document.querySelector("#value");

let counterValue = 0;

const onIncrementBtn = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

const onDecrementBtn = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

incrementBtn.addEventListener("click", onIncrementBtn);
decrementBtn.addEventListener("click", onDecrementBtn);
