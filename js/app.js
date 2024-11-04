const buttonElement = document.querySelector("#btn");
const color = document.querySelector(".color");

const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
buttonElement.addEventListener("click", (event) => {
  let hexColor = generateHex();
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
function generateHex() {
  let hexColor = "#";
  for (i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  return hexColor;
}

const body = document.body;
color.addEventListener("click", () => {
  if (color) {
    const temp = document.createElement("input");
    body.appendChild(temp);
    temp.value = color.textContent;
    temp.select();
    document.execCommand("copy");
    temp.remove();
  }
  color.classList.add("flash-color");
  setTimeout(() => {
    color.classList.remove("flash-color");
  }, 300);
});
