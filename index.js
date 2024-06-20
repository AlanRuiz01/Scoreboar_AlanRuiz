
let scoreTeam1 = document.getElementById("score1")
let scoreTeam2 = document.getElementById("score2")

let points = {
    team1: 0,
    team2: 0
};

let timerInterval;
let totalTime = 0; // Total time in seconds
let isRunning = false;

// Score Functions
function addPoints(team, pointsToAdd) {
    points[team] += pointsToAdd;
    if (team === 'team1') {
        scoreTeam1.textContent = points[team];
    } else if (team === 'team2') {
        scoreTeam2.textContent = points[team];
    }
}

function add1(team) {
    addPoints(team, 1);
}

function add2(team) {
    addPoints(team, 2);
}

function add3(team) {
    addPoints(team, 3);
}

function reset(){
    points.team1 = 0;
    points.team2 = 0;
    scoreTeam1.textContent = points.team1;
    scoreTeam2.textContent = points.team2;
}

// Timer Functions

function startTimer() {
    if (!isRunning) {
        const minutesInput = document.getElementById('minutesInput').value;
        if (minutesInput && minutesInput > 0) {
            totalTime = minutesInput * 60;
            isRunning = true;
            timerInterval = setInterval(updateTimer, 1000);
        } else {
            alert('Please enter a valid number of minutes.');
        }
    }
}

function pauseTimer() {
    isRunning = false;
    clearInterval(timerInterval);
}

function resetTimer() {
    pauseTimer();
    totalTime = 0;
    updateTimerDisplay();
}

function updateTimer() {
    if (totalTime > 0) {
        totalTime -= 1;
        updateTimerDisplay();
    } else {
        pauseTimer();
        alert('Time is up!');
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    document.getElementById('timerTitle').textContent = `${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
    return num.toString().padStart(2, '0');
}