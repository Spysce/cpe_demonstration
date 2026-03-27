// Load tasks from localStorage when the page opens
document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let taskInput = document.getElementById("task");
    let taskValue = taskInput.value;

    if (taskValue) {
        createTaskElement(taskValue, false);
        saveTask(taskValue, false);
        taskInput.value = "";
    }
}

function createTaskElement(text, isCompleted) {
    let li = document.createElement("li");
    if (isCompleted) li.classList.add("completed");

    li.innerHTML = `
        <span class="task-text">${text}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    // Toggle completed status on click
    li.querySelector(".task-text").onclick = function() {
        li.classList.toggle("completed");
        updateLocalStorage();
    };

    document.getElementById("list").appendChild(li);
}

function deleteTask(btn) {
    btn.parentElement.remove();
    updateLocalStorage();
}

// --- Local Storage Logic ---

function saveTask(text, completed) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ text: text, completed: completed });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        createTaskElement(task.text, task.completed);
    });
}

function updateLocalStorage() {
    let tasks = [];
    document.querySelectorAll("#list li").forEach(li => {
        tasks.push({
            text: li.querySelector(".task-text").innerText,
            completed: li.classList.contains("completed")
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
