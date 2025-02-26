// Timer functionality
function updateTimer(hoursLeft, minutesLeft, secondsLeft) {
    const timerElement = document.getElementById('sale-timer');
    if (!timerElement) return;

    const formatNumber = (num) => String(num).padStart(2, '0');
    timerElement.textContent = `${formatNumber(hoursLeft)}:${formatNumber(minutesLeft)}:${formatNumber(secondsLeft)}`;
}

function startTimer(hours = 4, minutes = 0, seconds = 0) {
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    const timer = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(timer);
            return;
        }

        totalSeconds--;
        const hoursLeft = Math.floor(totalSeconds / 3600);
        const minutesLeft = Math.floor((totalSeconds % 3600) / 60);
        const secondsLeft = totalSeconds % 60;

        updateTimer(hoursLeft, minutesLeft, secondsLeft);
    }, 1000);

    // Initial update
    updateTimer(hours, minutes, seconds);
}

// Start the timer when the page loads
document.addEventListener('DOMContentLoaded', () => {
    startTimer(4, 0, 0);
});
