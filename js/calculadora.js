/* const display = document.querySelector(".resultado");
const botones = document.querySelectorAll("button");
let num;
let num2 = 2;
let resultado = 0;
let operador;
botones.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(button.textContent);

    if (button.textContent === "=") {
      operacion();
      return;
    }
    displayPring(button.textContent);
  });
});

const displayPring = (n) => {
  display.innerHTML += n;
};

const operacion = () => {
  let x = display.innerHTML;
  console.log("=>", x);
  display.innerHTML = eval(x);
};
 */