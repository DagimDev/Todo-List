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
  console.log(todoList);
};

addButton.addEventListener("click", addTodo);

let todoListHTML = '';
const renderTodoList = () => {
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    `
    todoListHTML += html
  }
console.log(todoListHTML)
};

renderTodoList();
