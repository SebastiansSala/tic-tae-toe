function getRandomInt(arr) {
  return Math.floor(Math.random() * arr.length);
}

const displayController = (() => {
  let playerXMoves = [];
  let playerYMoves = [];
  const moves = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const item = document.querySelectorAll(".item");
  const currentPlayer = document.getElementById("player");

  const clear = () => {
    item.forEach((element) => {
      element.innerHTML = "";
      element.textContent = "";
    });
    playerXMoves = [];
    playerYMoves = [];
    currentPlayer.textContent = "X";
  };

  const checkWinner = (selections) => {
    return winConditions.some((condition) => {
      return condition.every((match) => {
        return selections.includes(match);
      });
    });
  };

  const updateBoardWithIA = (element) => {
    if (element.textContent !== "") {
      return;
    }

    if (currentPlayer.textContent === "X") {
      element.innerHTML = currentPlayer.textContent;
      playerXMoves.push(parseInt(element.id));
      if (checkWinner(playerXMoves)) {
        alert("X wins!");
        clear();
        return;
      }
    }
    if (playerXMoves.length === 5 && playerYMoves.length === 4) {
      clear();
      return;
    }

    let filteredMoves = moves.filter((move) => {
      return !playerXMoves.includes(move) && !playerYMoves.includes(move);
    });

    currentPlayer.textContent = "O";

    const randomIndex = getRandomInt(filteredMoves);
    const move = filteredMoves[randomIndex];
    const moveElement = document.getElementById(`${move}`);
    moveElement.innerHTML = currentPlayer.textContent;
    playerYMoves.push(move);
    if (checkWinner(playerYMoves)) {
      alert("O wins!");
      clear();
      return;
    }
    currentPlayer.textContent = "X";
  };

  const updateBoard = (element) => {
    if (element.textContent !== "") {
      return;
    }
    element.innerHTML = currentPlayer.textContent;
    if (currentPlayer.textContent === "X") {
      playerXMoves.push(parseInt(element.id));
      console.log(playerXMoves);
      if (checkWinner(playerXMoves)) {
        alert("X wins!");
        clear();
      }
    } else {
      playerYMoves.push(parseInt(element.id));
      console.log(playerYMoves);
      if (checkWinner(playerYMoves)) {
        alert("O wins!");
        clear();
      }
    }
    currentPlayer.textContent = currentPlayer.textContent === "X" ? "O" : "X";
  };

  const render = () => {
    item.forEach((element) => {
      element.addEventListener("click", () => {
        updateBoardWithIA(element);
      });
    });
  };

  const winConditions = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
    [2, 5, 8],
  ];

  return { render };
})();

displayController.render();
