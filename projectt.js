function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById("clock").textContent = time;
  }
  setInterval(updateClock, 1000);
  
  // Pomodoro Timer
  let pomodoroTime = 25 * 60; // 25 minutes in seconds
  let pomodoroInterval;
  let isPomodoroRunning = false;
  
  function updatePomodoroTimer() {
    const minutes = Math.floor(pomodoroTime / 60);
    const seconds = pomodoroTime % 60;
    document.getElementById("pomodoro-timer").textContent =
      `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    if (pomodoroTime > 0) {
      pomodoroTime--;
    } else {
      clearInterval(pomodoroInterval);
      alert("Time's up! Take a break!");
    }
  }
  
  document.getElementById("start-pomodoro").addEventListener("click", () => {
    if (!isPomodoroRunning) {
      pomodoroInterval = setInterval(updatePomodoroTimer, 1000);
      isPomodoroRunning = true;
    }
  });
  
  document.getElementById("pause-pomodoro").addEventListener("click", () => {
    clearInterval(pomodoroInterval);
    isPomodoroRunning = false;
  });
  
  document.getElementById("reset-pomodoro").addEventListener("click", () => {
    clearInterval(pomodoroInterval);
    pomodoroTime = 25 * 60;
    updatePomodoroTimer();
    isPomodoroRunning = false;
  });
  
  // Stopwatch
  let stopwatchTime = 0;
  let stopwatchInterval;
  let isStopwatchRunning = false;
  
  function updateStopwatch() {
    const hours = Math.floor(stopwatchTime / 3600);
    const minutes = Math.floor((stopwatchTime % 3600) / 60);
    const seconds = stopwatchTime % 60;
    document.getElementById("stopwatch").textContent =
      `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    stopwatchTime++;
  }
  
  document.getElementById("start-stopwatch").addEventListener("click", () => {
    if (!isStopwatchRunning) {
      stopwatchInterval = setInterval(updateStopwatch, 1000);
      isStopwatchRunning = true;
    }
  });
  
  document.getElementById("pause-stopwatch").addEventListener("click", () => {
    clearInterval(stopwatchInterval);
    isStopwatchRunning = false;
  });
  
  document.getElementById("reset-stopwatch").addEventListener("click", () => {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    updateStopwatch();
    isStopwatchRunning = false;
  });
  