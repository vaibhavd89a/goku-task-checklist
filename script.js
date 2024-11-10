// Sample tasks data
const tasks = Array.from({ length: 327 }, (_, i) => `Task ${i + 1}`);

// Function to generate tasks dynamically
function generateTasks() {
    const tasksContainer = document.getElementById("tasks-container");

    tasks.forEach((task, index) => {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        taskDiv.innerHTML = `
            <input type="checkbox" class="task-checkbox" id="task${index + 1}" onclick="markTaskComplete(${index + 1})">
            <label for="task${index + 1}">${task}</label>
        `;
        tasksContainer.appendChild(taskDiv);
    });
}

// Function to mark a task as complete and trigger Goku animation
function markTaskComplete(index) {
    const taskDiv = document.querySelector(`#task${index}`).parentElement;
    taskDiv.style.transform = "scale(1.1)";
    setTimeout(() => {
        taskDiv.style.transform = "scale(1)";
    }, 300);

    if (taskDiv.querySelector('.task-checkbox').checked) {
        triggerGokuAnimation();
    }
}

// Function to trigger Goku animation when a task is completed
function triggerGokuAnimation() {
    let gokuContainer = document.getElementById("goku-animation-container");
    gokuContainer.style.display = "block";
    gokuContainer.style.opacity = 1;

    setTimeout(() => {
        gokuContainer.style.opacity = 0;
        gokuContainer.style.display = "none";
    }, 2000);
}

// Show confetti animation when all tasks are completed
function showConfetti() {
    let confettiContainer = document.getElementById("confetti-container");
    confettiContainer.style.display = "block";
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confettiContainer.appendChild(confetti);
    }
}

// Load tasks when the page loads
window.onload = function() {
    generateTasks();
};
