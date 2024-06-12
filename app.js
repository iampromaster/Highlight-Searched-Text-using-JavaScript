let input = document.querySelector("input");
let text = document.querySelector(".text");

input.addEventListener("input", () => {
  let inputValue = input.value;
  inputValue = inputValue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  let pattern = new RegExp(`${inputValue}`, "gi");

  text.innerHTML = text.textContent.replace(
    pattern,
    (match) => `<mark>${match}</mark>`
  );
});
