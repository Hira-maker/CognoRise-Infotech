// Select DOM elements
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const targetDateInput = document.getElementById('target-date');
const startCountdownBtn = document.getElementById('startCountdownBtn');

let countdownInterval;

// Function to update the countdown
function updateCountdown(targetDate) {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the result
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours < 10 ? '0' + hours : hours;
    minutesEl.innerHTML = minutes < 10 ? '0' + minutes : minutes;
    secondsEl.innerHTML = seconds < 10 ? '0' + seconds : seconds;

    // If countdown is finished
    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        daysEl.innerHTML = '0';
        hoursEl.innerHTML = '00';
        minutesEl.innerHTML = '00';
        secondsEl.innerHTML = '00';
        alert('Countdown ended!');
    }
}

// Function to start the countdown
function startCountdown() {
    const targetDateValue = targetDateInput.value;
    if (!targetDateValue) {
        alert('Please select a valid date and time!');
        return;
    }

    const targetDate = new Date(targetDateValue).getTime();

    // Clear any previous countdown interval
    clearInterval(countdownInterval);

    // Update countdown every second
    countdownInterval = setInterval(() => updateCountdown(targetDate), 1000);
}

// Event listener to start countdown
startCountdownBtn.addEventListener('click', startCountdown);
