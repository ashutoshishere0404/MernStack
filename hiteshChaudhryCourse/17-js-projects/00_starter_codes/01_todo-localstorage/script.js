document.addEventListener("DOMContentLoaded", function () {
  const todoInput = document.getElementById("todo-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  // here to store tasks...
  let tasks = JSON.parse(localStorage.getItem("taskArray")) || [];

  renderTasks();
  addTaskBtn.addEventListener("click", () => {
    if (todoInput.value === "") return; // case for empty value
    else {
      const task = {
        id: Date.now(),
        text: todoInput.value,
        completed: false,
      };
      // now push the newly created task in the task array
      tasks.push(task);

      // save the tasks...
      saveTasks();
      // for rendering tasks...
      renderTaskHelper(task);
      todoInput.value = "";
    }
  });
  // saves tasks in local storage..
  function saveTasks() {
    localStorage.setItem("taskArray", JSON.stringify(tasks));
  }

  // renders all tasks
  function renderTasks() {
    for (let i = 0; i < tasks.length; ++i) {
      renderTaskHelper(tasks[i]);
    }
  }

  function renderTaskHelper(task) {
    // create a new list item with text from task...
    let li = document.createElement("li");
    li.innerHTML = `<span>${task.text}</span>
    <button>delete</button>`;
    li.setAttribute("id", task.id); // for distingushing li's

    todoList.appendChild(li);

    /*
    adding strike through functionality...
    */
    li.addEventListener("click", (e) => {
      // check if the click happened not at button..
      if (e.target.tagName === "BUTTON") return;
      li.classList.toggle("completed");
    });
    /*
    below code gives todolist with display none property for delete
    */
    // li.addEventListener("click", (e) => {
    //   // check if the click happened not at button..
    //   if (e.target.tagName === "BUTTON") li.classList.add("hidden");

    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();
      tasks = tasks.filter((t) => t.id !== task.id);
      saveTasks();
      li.remove();
      console.log("tasks array : ", tasks);
    });
    console.log("tasks array : ", tasks);
  }
});
