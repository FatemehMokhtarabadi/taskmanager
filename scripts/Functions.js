import { renderNewCard, changeStatus } from "./Helpers.js";

// F U N C T I O N S 🍊

function addTaskHandler(event) {
  event.preventDefault();
  renderNewCard();
}

function startTaskHandler(target) {
  const targetParent = target.parentNode.parentNode;
  // if it contains this class, it means we clicked the start btn
  if (target.classList.contains("start-btn")) {
    if (targetParent.getAttribute("data-status") === "inProgress") {
      console.log("inProgress was clicked");
      return;
    } else if (targetParent.getAttribute("data-status") === "todo") {
      changeStatus(target, "inProgress");
    }
  }
}

function doneHandler(target) {
  const targetParent = target.parentNode.parentNode;
  if (target.classList.contains("finish-btn")) {
    targetParent.getAttribute("data-status") === "todo" ||
    targetParent.getAttribute("data-status") === "inProgress"
      ? changeStatus(target, "done")
      : null;
  }
}

function deleteTaskHandler(target) {
  const cards = target.parentNode.parentNode.parentNode.parentNode;
  const theCardItself = target.parentNode.parentNode.parentNode;
  // if it contains the class "cards__card", it's the parent we want to remove. if it doesn't, its another parent.
  if (theCardItself.classList.contains("cards__card")) {
    cards.removeChild(theCardItself);
  }
  // appData.filter((item) => {
  //   return item.id !== theCardItself.getAttribute("id");
  // });
}

function searchHandler() {
  let input = document.getElementById("search");
  let filter = input.value;
  let parentNodes = document.getElementsByClassName("cards__card");
  console.log(parentNodes);
  for (let i = 0; i < parentNodes.length; i++) {
    if (parentNodes[i].innerText.toLowerCase().includes(filter)) {
      parentNodes[i].style.display = "flex";
    } else {
      parentNodes[i].style.display = "none";
    }
  }
}

export {
  addTaskHandler,
  deleteTaskHandler,
  startTaskHandler,
  searchHandler,
  doneHandler,
};
