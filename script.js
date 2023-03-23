const gameBoard = (() => {
    
})();

const displayController = (() => {
  const item = document.querySelectorAll(".item");
  const updateScreen = () => {
    const clear = () => {
      item.forEach((element) => {
        element.innerHTML = "";
      });
    };
    if (!clickHandlerBoard) {
    }
    return { clear };
  };

  const render = () => {
    item.forEach((element) => {
      element.addEventListener("click", () => {
        element.innerHTML = "X";
      });
    });
  };

  const clickHandlerBoard = () => {};

  const winConditions = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 5, 5],
    [1, 4, 7],
    [2, 3, 8],
    [5, 4, 3],
    [6, 4, 2],
    [1, 4, 7],
  ]

  return { updateScreen, render, clickHandlerBoard };
})();

displayController.render();
