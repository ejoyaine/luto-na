let totalDuration = parseInt(localStorage.getItem('originalDuration'));
let remainingTime = parseInt(localStorage.getItem('timerDuration'));
let isPaused = false;
let timerInterval;

function formatTime(seconds) {
	const hrs = Math.floor(seconds / 3600);
	const mins = Math.floor((seconds % 3600) / 60);
	const secs = seconds % 60;
	return `${hrs.toString().padStart(2, '0')}:${mins
		.toString()
		.padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateTimerDisplay() {
	document.getElementById('time-display').textContent =
		formatTime(remainingTime);
}

function updateProgress() {
	const progressCircle = document.getElementById('progress');
	const radius = progressCircle.getAttribute('r');
	const circumference = 2 * Math.PI * radius;
	const progress = (totalDuration - remainingTime) / totalDuration;
	const offset = circumference - progress * circumference;
	progressCircle.style.strokeDashoffset = offset;
}

function tick() {
	if (!isPaused && remainingTime > 0) {
		remainingTime--;
		updateTimerDisplay();
		updateProgress();
		if (remainingTime <= 0) {
			clearInterval(timerInterval);
			document.getElementById('alarmSound').play();
		}
	}
}

if (isNaN(remainingTime) || remainingTime <= 0) {
	alert('Invalid timer duration. Redirecting to the home page.');
	window.location.href = 'index.html';
} else {
	const progressCircle = document.getElementById('progress');
	const radius = progressCircle.getAttribute('r');
	const circumference = 2 * Math.PI * radius;
	progressCircle.style.strokeDasharray = circumference;
	progressCircle.style.strokeDashoffset = circumference;
	updateTimerDisplay();
	updateProgress();
	timerInterval = setInterval(tick, 1000);
}
