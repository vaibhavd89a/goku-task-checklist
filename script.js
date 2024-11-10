const tasks = Array.from({ length: 327 }, (_, i) => `Task ${i + 1}`);  // Generates 327 tasks

// Function to generate tasks dynamically with timers
function generateTasks() {
    const tasksContainer = document.getElementById("tasks-container");

    tasks.forEach((task, index) => {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        taskDiv.innerHTML = `
            <input type="checkbox" class="task-checkbox" id="task${index + 1}" onclick="toggleTask(${index + 1})">
            <label for="task${index + 1}">${task}</label>
            <span class="timer" id="timer${index + 1}">05:00</span>
        `;
        tasksContainer.appendChild(taskDiv);
    });
}

// Timer function
const timers = {};

function startTimer(taskId) {
    const timerElement = document.getElementById(`timer${taskId}`);
    let time = 300; // 5 minutes in seconds

    // Clear any existing interval for this timer
    clearInterval(timers[taskId]);

    timers[taskId] = setInterval(() => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        // Display the countdown
        timerElement.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

        // End countdown when time reaches 0
        if (time <= 0) {
            clearInterval(timers[taskId]);
            timerElement.textContent = "Time's up!";
        } else {
            time--;
        }
    }, 1000);
}

function stopTimer(taskId) {
    clearInterval(timers[taskId]); // Stop the timer
    document.getElementById(`timer${taskId}`).textContent = "05:00"; // Reset to 5 minutes
}

function toggleTask(taskId) {
    const checkbox = document.getElementById(`task${taskId}`);
    const gokuAnimation = document.getElementById("goku-animation");

    if (checkbox.checked) {
        startTimer(taskId);
        playGokuAnimation();
    } else {
        stopTimer(taskId); // Reset if unchecked
        gokuAnimation.classList.add("goku-hidden");
    }
}

function playGokuAnimation() {
    const gokuAnimation = document.getElementById("goku-animation");
    gokuAnimation.classList.remove("goku-hidden");
    gokuAnimation.style.display = "block";

    setTimeout(() => {
        gokuAnimation.classList.add("goku-hidden");
        gokuAnimation.style.display = "none";
    }, 2000); // Goku animation lasts for 2 seconds
}

// Load tasks and timers when the page loads
window.onload = function() {
    generateTasks();
};
