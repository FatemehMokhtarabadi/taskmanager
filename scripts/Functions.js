import appData from "./appData.js";
import { renderCards, renderNewCard } from "./Helpers.js";

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

// E V E N T   L I S T E N E R S 🍊
addBtn.addEventListener("click", addTaskHandler);

if (deleteBtn) {
  deleteBtn.addEventListener("click", function () {
    console.log("delete btn clicked");
  });
}

todoStatus.addEventListener("click", function () {
  renderAll(false);
  filterTodos();
});

inProgressStatus.addEventListener("click", filterInProgress);
doneStatus.addEventListener("click", filterDone);

// F U N C T I O N S 🍊

function filterByStatus(givenStatus) {
  return appData.filter((item) => {
    item.taskStatus === givenStatus;
  });
}

function renderAll(command) {
  if (command === "run") {
    renderCards(appData);
  } else if (command === "stop") {
    return;
  }
}

function filterTodos(command) {
  if (command === "run") {
    // const tasksTodo = filterByStatus("todo");
    const tasksTodo = appData.filter((item) => {
      return item.taskStatus === "todo";
    });
    renderCards(tasksTodo);
    // window.renderAll = function () {};
    console.log(tasksTodo);
  } else if (command === "stop") {
    return;
  }
}

function filterInProgress(command) {
  if (command === "run") {
    // const tasksInProgress = filterByStatus("inProgress");
    const tasksTodo = appData.filter((item) => {
      return item.taskStatus === "inProgress";
    });
    renderCards(tasksTodo);
    console.log(tasksTodo);
  } else if (command === "stop") {
    return;
  }
}

function filterDone(command) {
  if (command === "run") {
    // const tasksDone = filterByStatus("done");
    const tasksTodo = appData.filter((item) => {
      return item.taskStatus === "done";
    });
    renderCards(tasksTodo);
    console.log(tasksTodo);
  } else if (command === "stop") {
    return;
  }
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
