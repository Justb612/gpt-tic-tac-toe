import "./App.css";
import { randomIntBetweenTwoNumbers, getTable } from "./funkciok";

function App() {
  let e = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const w = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function handleClick(event) {
    let id = event.target.id.split("-")[1];
    id = parseInt(id, 10) - 1;
    if (e[id] !== "X" && e[id] !== "0") {
      e[id] = "X";
      event.target.textContent = "X";
      // Fix: add condition to check if the computer has already won or lost
      let computerWon = false;
      let playerWon = false;
      for (const c of w) {
        if (e[c[0]] === "X" && e[c[1]] === "X" && e[c[2]] === "X") {
          playerWon = true;
          break;
        }
        if (e[c[0]] === "0" && e[c[1]] === "0" && e[c[2]] === "0") {
          computerWon = true;
          break;
        }
      }
      if (!computerWon && !playerWon) {
        do {
          let c = randomIntBetweenTwoNumbers(0, 8);
          if (e[c] !== "X" && e[c] !== "0") {
            e[c] = "0";
            document.getElementById(`cell-${c + 1}`).textContent = "0";
            break;
          }
        } while (true);
      }
      // Fix: check for winning and losing conditions after both player and computer have made their moves
      for (const c of w) {
        if (e[c[0]] === "X" && e[c[1]] === "X" && e[c[2]] === "X") {
          alert("You Win");
          return;
        }
        if (e[c[0]] === "0" && e[c[1]] === "0" && e[c[2]] === "0") {
          alert("You Lose NAB!");
          return;
        }
      }
    } else {
      alert(
        "The square you choose is already taken.Please pick another square"
      );
    }
  }

  return (
    <div id="tic-tac-toe">
      <div id="cell-1" className="cell" onClick={handleClick}></div>
      <div id="cell-2" className="cell" onClick={handleClick}></div>
      <div id="cell-3" className="cell" onClick={handleClick}></div>
      <div id="cell-4" className="cell" onClick={handleClick}></div>
      <div id="cell-5" className="cell" onClick={handleClick}></div>
      <div id="cell-6" className="cell" onClick={handleClick}></div>
      <div id="cell-7" className="cell" onClick={handleClick}></div>
      <div id="cell-8" className="cell" onClick={handleClick}></div>
      <div id="cell-9" className="cell" onClick={handleClick}></div>
    </div>
  );
}

export default App;
