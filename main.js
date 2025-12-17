const numOfDiceEl = document.getElementById("numOfDice");
const diceResultEl = document.getElementById("diceResult");
const diceImagesEl = document.getElementById("diceImages");
const rollBtn = document.getElementById("rollBtn");

rollBtn.addEventListener("click", rollDice);

function rollDice() {
  let numOfDice = parseInt(numOfDiceEl.value, 10);

  if (Number.isNaN(numOfDice) || numOfDice < 1) numOfDice = 1;
  if (numOfDice > 50) numOfDice = 50;
  numOfDiceEl.value = numOfDice;

  const values = [];
  diceImagesEl.replaceChildren();

  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);

    const img = document.createElement("img");
    img.src = `images/${value}.png`;
    img.alt = `Dice: ${value}`;
    diceImagesEl.appendChild(img);
  }

  diceResultEl.textContent = `dice: ${values.join(", ")}`;
}
