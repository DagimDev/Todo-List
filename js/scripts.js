const textInput = document.querySelector("#js-text-input-value");
const dateInput = document.querySelector("#js-date-input-value");
const addButton = document.querySelector(".js-add-todo-button");
const displayTodo = document.querySelector(".js-display-todo-list");

let todoList = [
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
  console.log(todoList);
};

addButton.addEventListener("click", addTodo);
renderTodoList();
function renderTodoList() {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    let todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
    <p>${name} ${dueDate}
    <button class="js-delete-todo-button">Delete</button></p>
    
    `;
    todoListHTML += html;
  }
  displayTodo.innerHTML = todoListHTML;
  console.log(todoListHTML);


document
  .querySelectorAll(".js-delete-todo-button")
  .forEach((deleteButton, index) => {
    deleteButton.addEventListener("click", () => {
      todoList.splice(index, 1);
      renderTodoList()
    });
  });
}


