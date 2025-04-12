function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();
    if (taskText === "") return;

    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = function() {
        taskSpan.classList.toggle("completed", this.checked);
    };

    let taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.onclick = function() {
        this.parentElement.remove();
    };

    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
