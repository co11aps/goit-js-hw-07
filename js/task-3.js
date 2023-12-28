const nameInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value.trim();
  if (nameInput.value.trim() === "") {
    output.textContent = "Anonymous";
  }
});
