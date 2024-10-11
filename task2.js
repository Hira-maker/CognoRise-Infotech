// Select DOM elements
const targetDateTimeInput = document.getElementById('targetDateTime');
const startCountdownBtn = document.getElementById('startCountdownBtn');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

let countdownInterval;

// Start Countdown Event Listener
startCountdownBtn.addEventListener('click', startCountdown);

function startCountdown() {
    const targetDate = new Date(targetDateTimeInput.value);

    // Clear any previous countdown
    clearInterval(countdownInterval);

    // Check if the date is valid
    if (isNaN(targetDate.getTime())) {
        alert('Please set a valid date and time.');
        return;
    }

    // Start updating the countdown every second
    countdownInterval = setInterval(() => {
        const currentTime = new Date();
        const remainingTime = targetDate - currentTime;

        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            alert('Countdown finished!');
            resetCountdownDisplay();
            return;
        }

        // Calculate time units
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        // Update DOM with calculated values
        daysEl.textContent = formatTimeUnit(days);
        hoursEl.textContent = formatTimeUnit(hours);
        minutesEl.textContent = formatTimeUnit(minutes);
        secondsEl.textContent = formatTimeUnit(seconds);
    }, 1000);
}

// Helper function to format time unit as two digits
function formatTimeUnit(unit) {
    return unit < 10 ? `0${unit}` : unit;
}

// Reset countdown display
function resetCountdownDisplay() {
    daysEl.textContent = '00';
    hoursEl.textContent = '00';
    minutesEl.textContent = '00';
    secondsEl.textContent = '00';
}
