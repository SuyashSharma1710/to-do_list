// Get references to DOM elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const downloadBtn = document.getElementById("download");
const deleteAllBtn = document.getElementById("delete-all");

let taskNumber = 1;
let content = "";

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim(); // Get the value of the input and trim any whitespace
    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;

        // Add a "Delete" button to the task
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = deleteTask;

        // Toggle completed state on click
        li.onclick = toggleTaskCompleted;

        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        // Append task to the content string
        content += `${taskNumber}. ${taskText}\n`;
        taskNumber++;

        // Clear the input
        taskInput.value = "";

        // Make the task block and buttons visible
        document.getElementById("task-block").style.visibility = "visible";
        deleteAllBtn.style.visibility = "visible";
        downloadBtn.style.visibility = "visible";
    }
}

// Function to download the task list
function downloadFile() {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const now = new Date();
    const dd = String(now.getDate()).padStart(2, '0');
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const yyyy = now.getFullYear();
    const hh = String(now.getHours()).padStart(2, '0');
    const min = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');

    const date = `${dd}-${mm}-${yyyy}`;
    const time = `${hh}:${min}:${ss}`;

    const filename = `todo_list_${date}_${time}.txt`;

    // Create a temporary link and trigger the download
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up the URL object
    URL.revokeObjectURL(url);
}

// Function to delete a task
function deleteTask(event) {
    const task = event.target.parentElement;
    taskList.removeChild(task);
}

// Function to toggle task completion
function toggleTaskCompleted(event) {
    if (event.target.tagName !== "BUTTON") {
        event.target.classList.toggle("completed");
    }
}

// Function to delete all tasks
function deleteAllTasks() {
    taskList.innerHTML = "";
    content = "";
    taskNumber = 1;

    // Hide task block and buttons
    document.getElementById("task-block").style.visibility = "hidden";
    deleteAllBtn.style.visibility = "hidden";
    downloadBtn.style.visibility = "hidden";
}

// Add event listeners
addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
downloadBtn.addEventListener("click", downloadFile);
deleteAllBtn.addEventListener("click", deleteAllTasks);
