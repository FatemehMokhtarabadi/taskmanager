import {
  addTaskHandler,
  deleteTaskHandler,
  startTaskHandler,
  searchHandler,
  doneHandler,
  statusClickStyles,
} from "./scripts/Functions.js";
import { renderByStatus, renderAll, showAll } from "./scripts/Helpers.js";

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

// deleting a task 🍕

deleteBtn.addEventListener("click", function (event) {
  console.log(event.target);
  console.log("delete btn clicked");
});

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

// changing task status 🍕

startBtn.addEventListener("click", function (event) {
  startTaskHandler(event.target);
});

finishBtn.addEventListener("click", function (event) {
  doneHandler(event.target);
});

searchInput.addEventListener("change", function (event) {
  searchHandler(event);
});
/*

ANOTHER PART

if "start" was clicked => cjange the task status from "todo" to "in progress"
if "done" was clicked => change the task status from "in progress" to "done"
if "delete" was clicked => delete the task from appData + remove it from the DOM

*/
