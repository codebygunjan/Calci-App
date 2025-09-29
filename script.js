const buttons = document.querySelectorAll(".btn");
const input = document.querySelector("input");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (value === "C") {
      input.value = "";
    } else if (value === "×") {
      input.value += "*";
    } else if (value === "÷") {
      input.value += "/";
    } else if (value === "=") {
      try {
        input.value = eval(input.value);
      } catch {
        input.value = "Error";
      }
    } else {
      input.value += value;
    }
  });
});
