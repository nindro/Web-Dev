const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    const text = taskInput.value.trim();
    if (text === "") return;

    const li = document.createElement("li");
    const taskDiv = document.createElement("div");
    const checkbox = document.createElement("input");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");

    taskDiv.className = "task";
    checkbox.type = "checkbox";
    span.textContent = text;
    deleteBtn.textContent = "🗑";
    deleteBtn.className = "delete-btn";

    checkbox.addEventListener("change", () => {
        span.classList.toggle("done");
    });

    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(li);
    });

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(span);
    li.appendChild(taskDiv);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}
