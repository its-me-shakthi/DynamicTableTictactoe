// const btnadd = document.getElementById("addbtn");
// const row = document.querySelectorAll(".cel").textContent;
// const message = document.querySelector(".message");
// const btnres = document.querySelector(".reset");
// const cell = document.querySelectorAll(".cell");
// const table = document.querySelector(".tab");
// var click = 1;
// let player1 = "X";
// let player2 = "O";
// let currentPlayer;
// var win = -1;
// let count = 0;
// const tabclick = function (e) {
//   if (e.target.innerHTML != "") return;
//   currentPlayer = currentPlayer === player1 ? player2 : player1;
//   e.target.innerHTML = currentPlayer;
//   if (click == 1) {
//     e.target.innerHTML = currentPlayer;
//     click = 2;
//   } else if (click == 2) {
//     e.target.innerHTML = currentPlayer;
//     click = 1;
//   }
//   if (check(currentPlayer)) {
//     message.innerHTML = `${currentPlayer} WINS!!!`;
//     // table.forEach((cell) => cell.removeEventListener("click", tabclick));
//     table.removeEventListener("click", tabclick);
//   } else {
//     count++;
//     if (count === 9 && !check(currentPlayer)) {
//       message.innerHTML = "Match Draw";
//       return;
//     }
//   }
// };

// const check = function (move) {
//   var result = false;
//   if (
//     getRow(1, 2, 3, move) ||
//     getRow(4, 5, 6, move) ||
//     getRow(7, 8, 9, move) ||
//     getRow(1, 4, 7, move) ||
//     getRow(2, 5, 8, move) ||
//     getRow(3, 6, 9, move) ||
//     getRow(1, 5, 9, move) ||
//     getRow(3, 5, 7, move)
//   ) {
//     result = true;
//   }
//   return result;
// };
// const getRow = function (a, b, c, move) {
//   var result = false;
//   if (box(a) == move && box(b) == move && box(c) == move) {
//     result = true;
//   }
//   return result;
// };
// const box = function (number) {
//   return document.getElementById("newr" + number);
// };
// // cell.forEach((cell) => {
// //   cell.addEventListener("click", tabclick);
// // });
// table.addEventListener("click", tabclick);
// const res = function () {
//   btnres.addEventListener("click", function () {
//     cell.forEach((cel) => (cel.innerHTML = ""));
//     message.innerHTML = "Game started";
//   });
// };
// res();

// const rowcol = function () {
//   btnadd.addEventListener("click", function () {
//     const insertRow = document.getElementById("row").value;
//     const insertCol = document.getElementById("column").value;

//     for (var r = 0; r < insertRow; r++) {
//       const tr = document.createElement("tr");
//       tr.classList.add("newr" + r);

//       for (var c = 0; c < insertCol; c++) {
//         const td = document.createElement("td");
//         td.classList.add("newc" + c);
//         tr.append(td);
//       }
//       table.append(tr);
//     }
//   });
// };
// rowcol();
// //////////////////////
// //////////////////////
