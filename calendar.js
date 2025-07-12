let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let holidays = {};

fetch('holidays.json')
  .then(res => res.json())
  .then(data => {
    holidays = data;
    renderCalendar();
  });

function renderCalendar() {
  const daysEl = document.getElementById("calendar-days");
  const monthYear = document.getElementById("month-year");

  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);

  monthYear.textContent = `${firstDay.toLocaleString('default', { month: 'long' })} ${currentYear}`;
  daysEl.innerHTML = "";

  let start = firstDay.getDay();
  for (let i = 0; i < start; i++) {
    daysEl.innerHTML += `<div></div>`;
  }

  for (let d = 1; d <= lastDay.getDate(); d++) {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const holidayName = holidays[dateStr];
    const isSunday = new Date(currentYear, currentMonth, d).getDay() === 0;

    const classList = ['date'];
if (holidayName) classList.push('holiday');
if (isSunday) classList.push('red');

// Highlight today
const today = new Date();
if (
  d === today.getDate() &&
  currentMonth === today.getMonth() &&
  currentYear === today.getFullYear()
) {
  classList.push('today');
}

    daysEl.innerHTML += `<div class="${classList.join(' ')}" onclick="showFestival('${dateStr}')">${d}</div>`;
  }
}

function showFestival(dateStr) {
  const infoEl = document.getElementById("festival-info");
  const name = holidays[dateStr];
  if (name) {
    infoEl.style.display = "block";
    infoEl.innerHTML = `<strong>${name}</strong> on ${dateStr}`;
    document.getElementById('notify-sound').play();
  } else {
    infoEl.style.display = "none";
  }
}

document.getElementById("prev-month").onclick = () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
};

document.getElementById("next-month").onclick = () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar();
};


