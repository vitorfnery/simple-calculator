"use strict";

const display = document.querySelector("#display");

const buttons = Array.from(document.querySelectorAll(".button"));

const calculatorFunctionality = buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.textContent) {
      case "C":
        display.textContent = "";
        break;
      case "←":
        if (!display.textContent) return;
        display.textContent = display.textContent.slice(0, -1);
        break;
      case "=":
        try {
          display.textContent = eval(display.textContent);
        } catch {
          display.textContent = "Error!";
        }
        break;
      default:
        display.textContent += e.target.textContent;
    }
  });
});
