import appData from "./appData.js";
import { renderNewCard, changeStatus } from "./Helpers.js";

// D O M    E L E M E N T S 🍊

const tasksContainer = document.querySelector(".cards");
const card = document.querySelector(".cards__card");
const searchInput = document.querySelector("#search");

// F U N C T I O N S 🍊

function addTaskHandler(event) {
  event.preventDefault();
  renderNewCard();
}

function deleteTaskHandler(taskId) {
  for (let i = 0; i < tasksContainer.children.length; i++) {
    const childCard = tasksContainer.children[i];
    if (childCard.getAttribute("id") === taskId) {
      tasksContainer.removeChild(childCard);
    }
  }
  appData.filter((item) => {
    return item.id !== taskId;
  });
}

function startTaskHandler(target) {
  const targetParent = target.parentNode.parentNode.parentNode;
  // targetParent.getAttribute("data-status") === "todo"
  //   ? changeStatus(target, "inProgress")
  //   : null;
  console.log(targetParent.children[1]);
}

function doneHandler(target) {
  const targetParent = target.parentNode.parentNode;
  targetParent.getAttribute("data-status") === "todo" ||
  targetParent.getAttribute("data-status") === "inProgress"
    ? changeStatus(target, "done")
    : null;
}

function searchHandler(event) {
  event.preventDefault();
  const tasks = tasksContainer.children;
  const searchedTerm = event.target.value;
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const title = task.childNodes[0].innerText;
    console.log(title);
  }
}

function statusClickStyles(targ) {
  targ.parentNode.style.backgroundColor = "#000";
  targ.style.color = "#fff";
}
export {
  addTaskHandler,
  deleteTaskHandler,
  startTaskHandler,
  searchHandler,
  doneHandler,
  statusClickStyles,
};
