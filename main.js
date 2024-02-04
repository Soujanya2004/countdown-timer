document.getElementById('countdown-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const countdownDateInput = document.getElementById('countdown-date');
    const countdownDate = new Date(countdownDateInput.value);

    const countdownDisplay = document.createElement('div');
    countdownDisplay.id = 'countdown-display';
    document.body.appendChild(countdownDisplay);

    function updateCountdown() {
        const currentTime = new Date();
        const timeRemaining = countdownDate - currentTime;

        if (timeRemaining > 0) {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60 * 60)) / 1000);

            countdownDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            countdownDisplay.textContent = 'TIME UP!';
            clearInterval(countdownTimer);
        }
    }

    updateCountdown(); // Call the updateCountdown function once before setting the countdown timer
    const countdownTimer = setInterval(updateCountdown, 1000);
});
