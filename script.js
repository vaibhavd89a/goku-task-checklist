// Sample tasks data
const tasks = Array.from({ length: 50 }, (_, i) => `Task ${i + 1}`);  // Example with 50 tasks

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

// Function to mark a task as complete and trigger animations
function markTaskComplete(index) {
    const taskDiv = document.querySelector(`#task${index}`).parentElement;
    taskDiv.style.transform = "scale(1.1)";
    taskDiv.style.boxShadow = "0px 15px 40px rgba(0, 0, 0, 0.3)";
    
    setTimeout(() => {
        taskDiv.style.transform = "scale(1)";
        taskDiv.style.boxShadow = "0px 6px 20px rgba(0, 0, 0, 0.2)";
    }, 300);

    if (taskDiv.querySelector('.task-checkbox').checked) {
        triggerGokuAnimation();
        showConfetti();
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

// Confetti animation
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

    setTimeout(() => {
        confettiContainer.style.display = "none";
    }, 5000);
}

// Load tasks when the page loads
window.onload = function() {
    generateTasks();
};
