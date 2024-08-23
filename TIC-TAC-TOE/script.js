let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let winner = document.querySelector("p");
let turnO = true; // playerX , playerY

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkwinner();
  });
});

const checkwinner = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if ((pos1val != "", pos2val != "", pos3val != "")) {
      if (pos1val === pos2val && pos2val === pos3val) {
        winner.innerText = `Congratulations Winner is ${pos1val}`;
        disableAllBoxes();
      }
    }
  }
};

const disableAllBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const resetgame = () => {
  turnO = true;
  winner.innerText = "";
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
};

resetbtn.addEventListener("click", resetgame);
