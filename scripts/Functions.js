import appData from "./appData.js";
import { renderCards, renderNewCard, filterByStatus } from "./Helpers.js";

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
const inProgressStatus = document.querySelector("inProgress");
const doneStatus = document.querySelector("done");

// F U N C T I O N S 🍊

function renderAll() {
  appData.map((item) => {
    renderCards(item);
  });
}

function filterTodos() {
  const tasksTodo = filterByStatus(appData, "todo");
  renderCards(tasksTodo);
  console.log(tasksTodo);
}

function filterInProgress() {
  const tasksInProgress = filterByStatus(appData, "inProgress");
}

function filterDone() {
  const tasksDone = filterByStatus(appData, "done");
}

function addTaskHandler(event) {
  event.preventDefault();
  renderNewCard();
}

function deleteTaskHandler(taskId) {
  tasksContainer.removeChild(card.getAttribute("id") === taskId);

  appData.filter((item) => {
    return item.id !== taskId;
  });
}

function startTaskHandler(taskId) {
  appData.filter((item) => {
    const startedTask = item.id === taskId;
    startedTask.taskStatus = "inProgress";
  });
}

function searchTaskListHandler() {
  console.log(" filter list of tasks handler");
}

export {
  addTaskHandler,
  deleteTaskHandler,
  renderAll,
  filterTodos,
  filterInProgress,
  filterDone,
};
