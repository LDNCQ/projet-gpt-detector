let timer;
let seconds = 30;
let minutes = 3;

function startTimer() {
    timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timer);
}


function updateTimer() {
    if (minutes === 0 && seconds === 0) {
        stopTimer();
        console.log("Time's up!");
        send();
        
        return;
    }
    
    if (seconds === 0) {
        seconds = 59;
        minutes--;
    } else {
        seconds--;
    }
    
    const formattedTime = padZero(minutes) + ":" + padZero(seconds);
    document.getElementById("timer").innerText = formattedTime;
}

function padZero(value) {
    return value < 10 ? "0" + value : value;
}

function malus() {
    if (minutes === 0 && seconds < 10) {
        stopTimer();
        console.log("Time's up!");
        send();
        return;
    }

    if (seconds < 10) {
        seconds += 50;
        minutes--;
    } else {
        seconds -= 10;
    }

    const formattedTime = padZero(minutes) + ":" + padZero(seconds);
    document.getElementById("timer").innerText = formattedTime;
}
