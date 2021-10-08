import appData from "./scripts/appData.js";
import {
  addTaskHandler,
  renderAll,
  filterTodos,
  filterInProgress,
  filterDone,
  deleteTaskHandler,
} from "./scripts/Functions.js";

// D O M    E L E M E N T S 🍊

const addBtn = document.querySelector(".form__btn");
const deleteBtn = document.querySelector(".delete");
const startBtn = document.querySelector(".start-btn");
const finishBtn = document.querySelector(".finish-btn");
const editBtn = document.querySelector(".edit");
const inputValue = document.querySelector(".form__input");
const tasksContainer = document.querySelector(".cards");
// status buttons
const todoStatus = document.querySelector(".todo");
const inProgressStatus = document.querySelector(".inProgress");
const doneStatus = document.querySelector(".done");

renderAll();
todoStatus.addEventListener("click", filterTodos);
inProgressStatus.addEventListener("click", filterInProgress);
doneStatus.addEventListener("click", filterDone);

// E V E N T   L I S T E N E R S 🍊

addBtn.addEventListener("click", addTaskHandler);

if (deleteBtn) {
  deleteBtn.addEventListener("click", function () {
    console.log("delete btn clicked");
  });
}

function showCards(whatStatus) {
  if (whatStatus === "all") {
    renderAll();
  } else if (whatStatus === "todo") {
    filterTodos();
  } else if (whatStatus === "inProgress") {
    filterInProgress();
  } else if (whatStatus === "done") {
    filterDone();
  }
}
