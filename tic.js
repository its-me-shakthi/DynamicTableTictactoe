const btnadd = document.getElementById("addbtn");
const row = document.querySelectorAll(".cel").textContent;
const message = document.querySelector(".message");
const btnres = document.querySelector(".reset");
const cell = document.querySelectorAll(".cell");
const table = document.querySelector(".tab");
var click = 1;
let player1 = "X";
let player2 = "O";
let currentPlayer;
var win = -1;
let count = 0;
const tabclick = function (e) {
  if (e.target.innerHTML != "") return;
  currentPlayer = currentPlayer === player1 ? player2 : player1;
  e.target.innerHTML = currentPlayer;
  if (click == 1) {
    e.target.innerHTML = currentPlayer;
    click = 2;
  } else if (click == 2) {
    e.target.innerHTML = currentPlayer;
    click = 1;
  }
  if (check(currentPlayer)) {
    message.innerHTML = `${currentPlayer} WINS!!!`;
  } 
};

table.addEventListener("click", tabclick);
}
const rowcol = function () {
  btnadd.addEventListener("click", function () {
    const insertRow = document.getElementById("row").value;
    const insertCol = document.getElementById("column").value;

    for (var r = 0; r < insertRow; r++) {
      const tr = document.createElement("tr");
      tr.classList.add("newr" + r);

      for (var c = 0; c < insertCol; c++) {
        const td = document.createElement("td");
        td.classList.add("newc" + c);
        tr.append(td);
      }
      table.append(tr);
    }
  });
};
rowcol();
// //////////////////////
// //////////////////////
