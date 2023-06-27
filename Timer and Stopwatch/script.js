//For Timer functionality
let timerInterval;
let timerDisplay = document.getElementById("timerDisplay");
let timerInput = document.getElementById("timerInput");
let timerStartBtn = document.getElementById("timerStartBtn");
let timerStopBtn = document.getElementById("timerStopBtn");
let timerResetBtn = document.getElementById("timerResetBtn");

timerStartBtn.addEventListener("click", () => {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  let timerTime = timerInput.value * 60;
  timerInterval = setInterval(() => {
    if (timerTime <= 0) {
      clearInterval(timerInterval);
      alert("Time's up!");
      return;
    }
    let minutes = Math.floor(timerTime / 60);
    let seconds = timerTime % 60;
    timerDisplay.textContent = `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
    timerTime--;
  }, 1000);
});

timerStopBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
});

timerResetBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerDisplay.textContent = "00:00";
  timerInput.value = 1;
});

//For Stopwatch functionality
let stopwatchInterval;
let stopwatchDisplay = document.getElementById("stopwatchDisplay");
let stopwatchStartBtn = document.getElementById("stopwatchStartBtn");
let stopwatchStopBtn = document.getElementById("stopwatchStopBtn");
let stopwatchResetBtn = document.getElementById("stopwatchResetBtn");

stopwatchStartBtn.addEventListener("click", () => {
  if (stopwatchInterval) {
    clearInterval(stopwatchInterval);
  }
  let startTime = Date.now();
  stopwatchInterval = setInterval(() => {
    let elapsedTime = Date.now() - startTime;
    let hours = Math.floor(elapsedTime / 3600000);
    let minutes = Math.floor((elapsedTime % 3600000) / 60000);
    let seconds = Math.floor((elapsedTime % 60000) / 1000);
    let milliseconds = elapsedTime % 1000;
    stopwatchDisplay.textContent = `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}.${
      milliseconds < 100 ? (milliseconds < 10 ? "00" : "0") : ""
    }${milliseconds}`;
  }, 10);
});

stopwatchStopBtn.addEventListener("click", () => {
  clearInterval(stopwatchInterval);
});

stopwatchResetBtn.addEventListener("click", () => {
  clearInterval(stopwatchInterval);
  stopwatchDisplay.textContent = "00:00:00.000";
});
