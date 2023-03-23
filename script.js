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

  return { updateScreen, render, clickHandlerBoard };
})();

displayController.render();
displayController.clear();
