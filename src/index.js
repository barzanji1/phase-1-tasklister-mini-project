const form = document.querySelector("#create-task-form");
const input = document.querySelector("#new-task-description");
const tasksList = document.querySelector("#tasks");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskText = input.value;

  if (taskText.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  tasksList.appendChild(li);

  input.value = "";
});