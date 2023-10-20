const nameOutput = document.querySelector("span#name-output");
const nameInput = document.querySelector("input#name-input");

nameInput.addEventListener("input", (ev) => {
  const inputValue = ev.currentTarget.value;
  if (inputValue) {
    nameOutput.textContent = inputValue;
  } else {
    nameOutput.textContent = "Anonymous";
  }
});
