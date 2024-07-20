// Function to start the countdown
function startCountdown(duration, display) {
    let timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = `Ends in: ${hours}:${minutes}:${seconds}`;

        if (--timer < 0) {
            timer = duration; // Reset the timer
        }
    }, 1000);
}

window.onload = function () {
    const duration = 1.5 * 60 * 60; // Timer duration in seconds (1.5 hours)
    const display = document.querySelector('#timer');
    startCountdown(duration, display);
};
