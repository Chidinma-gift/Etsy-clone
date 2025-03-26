document.addEventListener("DOMContentLoaded", function () {
});
    // Dropdown Menu Toggle
    document.getElementById("toggleMenu").addEventListener("click", function () {
        let menu = document.getElementById("dropdownMenu");
        menu.classList.toggle("show"); // Ensure you have .show { display: block; } in CSS
    });
    document.getElementById('toggleMenu').addEventListener('click', function () {
        let dropdown = document.getElementById('dropdownMenu');
        dropdown.classList.toggle('active');
    });

// Set the countdown target (e.g., 21 hours from now)
let countdownTime = new Date();
countdownTime.setHours(countdownTime.getHours() + 21); // 21 hours later

function updateTimer() {
    let now = new Date();
    let timeLeft = countdownTime - now;

    if (timeLeft < 0) {
        document.getElementById("deal-timer").textContent = "00:00:00";
        return;
    }

    let hours = Math.floor(timeLeft / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("deal-timer").textContent =
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Update every second
setInterval(updateTimer, 1000);
updateTimer();
