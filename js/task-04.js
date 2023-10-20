const counter = document.querySelector("#value");

let counterValue = 0;

function increaseCounter() {
  counterValue += 1;
  counter.textContent = counterValue;
}

function decreaseCounter() {
  counterValue -= 1;
  counter.textContent = counterValue;
}

const increaseBtn = document.querySelector('button[data-action="increment"]');
increaseBtn.addEventListener("click", increaseCounter);

const decreaseBtn = document.querySelector('button[data-action="decrement"]');
decreaseBtn.addEventListener("click", decreaseCounter);
