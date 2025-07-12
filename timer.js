// Analog Clock
function updateAnalogClock() {
  const now = new Date();
  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hour = now.getHours();

  const secDeg = sec * 6;
  const minDeg = min * 6 + sec * 0.1;
  const hourDeg = hour * 30 + min * 0.5;

  document.getElementById("secondHand").style.transform = `translateX(-50%) rotate(${secDeg}deg)`;
  document.getElementById("minuteHand").style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
  document.getElementById("hourHand").style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
}
setInterval(updateAnalogClock, 1000);
updateAnalogClock();

// Stopwatch Timer
let timer;
let seconds = 0;
let running = false;

const display = document.getElementById("display");

function updateDisplay() {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  display.textContent = `${hrs}:${mins}:${secs}`;
}

document.getElementById("startBtn").addEventListener("click", () => {
  if (!running) {
    timer = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
    running = true;
  }
});

document.getElementById("pauseBtn").addEventListener("click", () => {
  clearInterval(timer);
  running = false;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  clearInterval(timer);
  running = false;
  seconds = 0;
  updateDisplay();
});

updateDisplay();




