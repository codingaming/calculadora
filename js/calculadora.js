const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

let calculation = [];
let accCalculation = "";
let next = false;

buttons.forEach((button) => {
  button.addEventListener("click", () => calculate(button));
});

const calculate = (button) => {
  const value = button.textContent;

  if (value == "C") {
    clearCalculation();
  } else if (value == "=") {
    execOperation();
  } else {
    if (next) {
      if (Number(value)) {
        calculation = [];
      }
      const result = eval(calculation.join(""));
      calculation = [result];
      next = false;
    }
    calculation.push(value);
    accCalculation = calculation.join("");
    display.value = transformMultiply(accCalculation);
  }
};

const clearCalculation = () => {
  calculation = [];
  display.value = "";
};

const execOperation = () => {
  display.value = eval(accCalculation);
  next = true;
};

const transformMultiply = (value) => {
  const regex = /\*/g;
  return value.replace(regex, "x");
};
