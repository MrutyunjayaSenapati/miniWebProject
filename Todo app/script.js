let tasks = [];


function LoadTask() {
    // Clear the list box
    document.getElementById("lstTasks").innerHTML = "";
    
    // Create and append task options
    tasks.map(function(task) {
        let op = document.createElement("option");
        op.text = task;
        op.value = task;
        document.getElementById("lstTasks").appendChild(op);
    });

    // Update the total number of tasks
    document.getElementById("lblCount").innerHTML = `Total Number of Tasks: ${tasks.length}`;
}

function AddClick() {
    let taskName = document.getElementById("txtTask").value.trim();
    
    if (taskName === "") {
        alert("Please enter a task name.");
        return;
    }

    if (tasks.indexOf(taskName) === -1) {
        tasks.push(taskName);
        alert(`${taskName} added`);
        LoadTask();
        document.getElementById("txtTask").value = "";
    } else {
        alert(`${taskName} already exists`);
    }
}

function DeleteClick() {
    let selectedTask = document.getElementById("lstTasks").value;
    
    if (!selectedTask) {
        alert("Please select a task to delete.");
        return;
    }

    let selectedIndex = tasks.indexOf(selectedTask);
    let flag = confirm(`Are you sure you want to delete "${selectedTask}"?`);
    
    if (flag === true) {
        tasks.splice(selectedIndex, 1);
        alert(`${selectedTask} deleted`);
        LoadTask();
    }
}

function EditClick() {
    let selectedTask = document.getElementById("lstTasks").value;
    
    if (!selectedTask) {
        alert("Please select a task to edit.");
        return;
    }
    
    document.getElementById("txtEditTask").value = selectedTask;
}

function SaveClick() {
    let newTaskName = document.getElementById("txtEditTask").value.trim();
    let selectedTask = document.getElementById("lstTasks").value;
    
    if (!newTaskName) {
        alert("Please enter a valid task name.");
        return;
    }

    let selectedIndex = tasks.indexOf(selectedTask);
    
    if (selectedIndex !== -1) {
        tasks[selectedIndex] = newTaskName;
        alert(`Task updated to: ${newTaskName}`);
        LoadTask();
    } else {
        alert("Task not found.");
    }
}

function ClearClick() {
    if (tasks.length === 0) {
        alert("No tasks to clear.");
    } else {
        tasks.length = 0;
        alert("All tasks cleared");
        LoadTask();
    }
}
