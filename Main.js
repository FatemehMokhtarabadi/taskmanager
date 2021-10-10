import {
  addTaskHandler,
  deleteTaskHandler,
  startTaskHandler,
  searchHandler,
  doneHandler,
} from "./scripts/Functions.js";
import {
  renderByStatus,
  renderAll,
  statusClickStyles,
  showAll,
} from "./scripts/Helpers.js";

renderAll();

// D O M    E L E M E N T S 🍊

const addBtn = document.querySelector(".form__btn");
const searchInput = document.querySelector("#search");
const startBtn = document.querySelector(".start-btn");
const finishBtn = document.querySelector(".finish-btn");
const deleteBtn = document.querySelector(".delete");
const inputValue = document.querySelector("#task");
const tasksContainer = document.querySelector(".cards");
const card = document.querySelector(".cards__card");
// status buttons
const allStatus = document.querySelector(".all");
const todoStatus = document.querySelector(".todo");
const inProgressStatus = document.querySelector(".inProgress");
const doneStatus = document.querySelector(".done");

// E V E N T   L I S T E N E R S 🍊

// adding new task 🍕
addBtn.addEventListener("click", addTaskHandler);

// filtering renders based on status `(todo/inProgress/done) 🍕

allStatus.addEventListener("click", function (event) {
  showAll();
  statusClickStyles(event.target);
});

todoStatus.addEventListener("click", function (event) {
  renderByStatus("todo");
  statusClickStyles(event.target);
});

inProgressStatus.addEventListener("click", function (event) {
  renderByStatus("inProgress");
  statusClickStyles(event.target);
});
doneStatus.addEventListener("click", function (event) {
  renderByStatus("done");
  statusClickStyles(event.target);
});

// changing task status + deleting tasks, using event delegation 🍕

tasksContainer.addEventListener("click", function (event) {
  const clickedCard = event.target;
  startTaskHandler(clickedCard);
  doneHandler(clickedCard);
  deleteTaskHandler(clickedCard);
});

// search between tasks 🍕

searchInput.addEventListener("change", function (event) {
  searchHandler(event);
});
/*

ANOTHER PART

if "delete" was clicked => delete the task from appData + remove it from the DOM

*/
