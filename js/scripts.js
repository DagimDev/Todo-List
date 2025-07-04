const textInput = document.querySelector("#js-text-input-value");
const dateInput = document.querySelector("#js-date-input-value");
const addButton = document.querySelector(".js-add-todo-button");
const displayTodo = document.querySelector(".js-display-todo-list");

let todoList = JSON.parse(localStorage.getItem("todoList")) || [
  {
    name: "Make Dinner",
    dueDate: "2-22-2222",
  },
  {
    name: "Wash Dishes",
    dueDate: "6-3-2025",
  },
];

const addTodo = () => {
  const name = textInput.value;
  const dueDate = dateInput.value;
  todoList.push({
    name,
    dueDate,
  });
  renderTodoList();
};

addButton.addEventListener("click", addTodo);
renderTodoList();
function renderTodoList() {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    let todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="js-delete-todo-button delete-todo-btn">Delete</button>
    `;
    todoListHTML += html;
  }
  displayTodo.innerHTML = todoListHTML;
  saveToStorage()

  document
    .querySelectorAll(".js-delete-todo-button")
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        todoList.splice(index, 1);
        renderTodoList();
        localStorage.removeItem("todoList")
        saveToStorage()
      });
    });
}


function saveToStorage() {
  localStorage.setItem("todoList", JSON.stringify(todoList))
}