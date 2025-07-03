const textInput = document.querySelector("#js-text-input-value");
const dateInput = document.querySelector("#js-date-input-value");
const addButton = document.querySelector(".js-add-todo-button");

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
  const textInputValue = textInput.value;
  const dateInputValue = dateInput.value;
  todoList.push({ name: textInputValue, dueDate: dateInputValue });
  console.log(todoList);
};

addButton.addEventListener("click", addTodo);
