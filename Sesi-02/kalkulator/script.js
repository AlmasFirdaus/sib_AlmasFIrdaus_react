const buttons = document.querySelectorAll(".button");

const display = document.getElementById("displayNumber");

for (const button of buttons) {
  button.addEventListener("click", function (event) {
    // mendapatkan objek elemen yang diklik
    const target = event.target;
    if (target.innerText === "CE") {
      display.innerText = "";
    } else if (target.innerText === "=") {
      display.innerText = eval(display.innerText);
    } else {
      display.innerText += target.innerText;
    }

    console.log(display);
  });
}
