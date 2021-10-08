import appData from "./appData.js";
const inputValue = document.querySelector(".form__input");
const tasksContainer = document.querySelector(".cards");

// from form input
function renderNewCard() {
  //creating elements
  const cardContainer = document.createElement("div");
  const cardTitle = document.createElement("p");
  const cardButtonsDiv = document.createElement("div");
  const cardStartButton = document.createElement("button");
  const cardFinishButton = document.createElement("button");
  const cardEditButton = document.createElement("button");
  const cardDeleteButton = document.createElement("button");
  const editIcon = document.createElement("img");
  const deleteIcon = document.createElement("img");

  // appending childs to parents
  cardContainer.appendChild(cardTitle);
  cardContainer.appendChild(cardButtonsDiv);
  cardButtonsDiv.appendChild(cardStartButton);
  cardButtonsDiv.appendChild(cardFinishButton);
  cardButtonsDiv.appendChild(cardEditButton);
  cardButtonsDiv.appendChild(cardDeleteButton);
  cardEditButton.appendChild(editIcon);
  cardDeleteButton.appendChild(deleteIcon);

  // adding class names
  cardContainer.classList.add("cards__card");
  cardContainer.setAttribute("id", appData.length);
  cardTitle.classList.add("cards__title");
  cardButtonsDiv.classList.add("cards__buttons");
  cardStartButton.classList.add("cards__btn");
  cardStartButton.classList.add("start-btn");
  cardFinishButton.classList.add("cards__btn");
  cardFinishButton.classList.add("finish-btn");
  cardEditButton.classList.add("cards__btn");
  cardEditButton.classList.add("edit");
  cardEditButton.classList.add("icon-btn");
  cardDeleteButton.classList.add("cards__btn");
  cardDeleteButton.classList.add("delete");
  cardDeleteButton.classList.add("icon-btn");
  editIcon.classList.add("cards__icon");
  deleteIcon.classList.add("cards__icon");

  // adding values
  cardTitle.innerText = inputValue.value;
  cardStartButton.innerText = "start";
  cardFinishButton.innerText = "done";
  editIcon.src = "./assets/edit.svg";
  deleteIcon.src = "./assets/trash.svg";
  editIcon.alt = "edit";
  deleteIcon.alt = "delete";

  //adding the card to parent
  tasksContainer.appendChild(cardContainer);

  const newEl = {
    id: cardContainer.getAttribute("id"),
    taskStatus: "todo",
    title: inputValue.value,
  };
  appData.push(newEl);
  console.log(newEl);
  console.log(appData);
  inputValue.value = "";
}

// from appData itself 🍊

function renderCards(item) {
  //creating elements
  const cardContainer = document.createElement("div");
  const cardTitle = document.createElement("p");
  const cardButtonsDiv = document.createElement("div");
  const cardStartButton = document.createElement("button");
  const cardFinishButton = document.createElement("button");
  const cardEditButton = document.createElement("button");
  const cardDeleteButton = document.createElement("button");
  const editIcon = document.createElement("img");
  const deleteIcon = document.createElement("img");

  // appending childs to parents
  cardContainer.appendChild(cardTitle);
  cardContainer.appendChild(cardButtonsDiv);
  cardButtonsDiv.appendChild(cardStartButton);
  cardButtonsDiv.appendChild(cardFinishButton);
  cardButtonsDiv.appendChild(cardEditButton);
  cardButtonsDiv.appendChild(cardDeleteButton);
  cardEditButton.appendChild(editIcon);
  cardDeleteButton.appendChild(deleteIcon);

  // adding class names
  cardContainer.classList.add("cards__card");
  cardTitle.classList.add("cards__title");
  cardButtonsDiv.classList.add("cards__buttons");
  cardStartButton.classList.add("cards__btn");
  cardStartButton.classList.add("start-btn");
  cardFinishButton.classList.add("cards__btn");
  cardFinishButton.classList.add("finish-btn");
  cardEditButton.classList.add("cards__btn");
  cardEditButton.classList.add("edit");
  cardEditButton.classList.add("icon-btn");
  cardDeleteButton.classList.add("cards__btn");
  cardDeleteButton.classList.add("delete");
  cardDeleteButton.classList.add("icon-btn");
  editIcon.classList.add("cards__icon");
  deleteIcon.classList.add("cards__icon");

  // adding values
  cardTitle.innerText = ` 🌼${item.taskStatus}`;
  cardStartButton.innerText = "start";
  cardFinishButton.innerText = "done";
  editIcon.src = "./assets/edit.svg";
  deleteIcon.src = "./assets/trash.svg";
  editIcon.alt = "edit";
  deleteIcon.alt = "delete";

  //adding the card to parent
  tasksContainer.appendChild(cardContainer);
}

// filtering tasks with status

function filterByStatus(dataArray, status) {
  dataArray.filter((item) => {
    return item.taskStatus === status;
  });

  // .map((item) => {
  //   return renderCards(item);
  // });
}

export { renderCards, renderNewCard, filterByStatus };
