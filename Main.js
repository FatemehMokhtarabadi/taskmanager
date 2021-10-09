import {
  renderAll,
  filterTodos,
  filterInProgress,
  filterDone,
  addTaskHandler,
  deleteTaskHandler,
} from "./scripts/Functions.js";
import { renderCards } from "./scripts/Helpers.js";

renderAll("run");
// filterDone("run");
// filterInProgress("run");
// filterTodos("run");

// D O M    E L E M E N T S 🍊

const addBtn = document.querySelector(".form__btn");
const startBtn = document.querySelector(".start-btn");
const finishBtn = document.querySelector(".finish-btn");
const deleteBtn = document.querySelector(".delete");
const inputValue = document.querySelector(".form__input");
const tasksContainer = document.querySelector(".cards");
const card = document.querySelector(".cards__card");
// status buttons
const todoStatus = document.querySelector(".todo");
const inProgressStatus = document.querySelector(".inProgress");
const doneStatus = document.querySelector(".done");
const allTasksToRender = document.querySelector(".all");

// E V E N T   L I S T E N E R S 🍊
addBtn.addEventListener("click", addTaskHandler);

if (deleteBtn) {
  deleteBtn.addEventListener("click", function () {
    console.log("delete btn was clicked!");
  });
}

allTasksToRender.addEventListener("click", function () {
  renderAll("run");
  filterDone("stop");
  filterInProgress("stop");
  filterTodos("stop");
});
todoStatus.addEventListener("click", function () {
  renderAll("stop");
  filterDone("stop");
  filterInProgress("stop");
  filterTodos("run");
});
inProgressStatus.addEventListener("click", function () {
  renderAll("stop");
  filterDone("stop");
  filterTodos("stop");
  filterInProgress("run");
});
doneStatus.addEventListener("click", function () {
  renderAll("stop");
  filterTodos("stop");
  filterInProgress("stop");
  filterDone("run");
});

inProgressStatus.addEventListener("click", filterInProgress);
doneStatus.addEventListener("click", filterDone);

// filterTodos();

// M A I N   R E N D E R 🍊

/*

on first load:
show all cards (no status filtering)
if any of nav items was clicked :
1- stop rendering everyting there
2- render only cards that the nav item has filtered.


if "all" was clicked => render all cards
if "todo" was clicked => render todos
if "in progress" was clicked => render tasks in progress 
if "done" was clicked => render tasks that are "done"




ANOTHER PART

if "start" was clicked => cjange the task status from "todo" to "in progress"
if "done" was clicked => change the task status from "in progress" to "done"
if "delete" was clicked => delete the task from appData + remove it from the DOM

*/
