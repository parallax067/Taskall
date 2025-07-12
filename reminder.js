let reminders = [];

function loadReminders() {
  const stored = localStorage.getItem("reminders");
  if (stored) reminders = JSON.parse(stored);
  renderReminders();
}

function saveReminders() {
  localStorage.setItem("reminders", JSON.stringify(reminders));
}

document.getElementById("reminder-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const time = document.getElementById("reminder-time").value;
  const message = document.getElementById("reminder-message").value.trim();
  if (!time || !message) return alert("Please enter both time and message.");

  reminders.push({ id: Date.now(), time, message, notified: false });
  saveReminders();
  renderReminders();
  e.target.reset();
});

function renderReminders() {
  const list = document.getElementById("reminder-list");
  list.innerHTML = "";
  reminders.forEach(reminder => {
    const div = document.createElement("div");
    div.className = "reminder-item";
    div.innerHTML = `
      <strong>${reminder.time}</strong> - ${reminder.message}
      <button onclick="deleteReminder(${reminder.id})">Delete</button>
    `;
    list.appendChild(div);
  });
}

function deleteReminder(id) {
  reminders = reminders.filter(r => r.id !== id);
  saveReminders();
  renderReminders();
}

function checkReminders() {
  const now = new Date();
  const currentTime = now.toTimeString().slice(0, 5);

  reminders.forEach(reminder => {
    if (reminder.time === currentTime && !reminder.notified) {
      playReminder(reminder.message);
      reminder.notified = true;
      saveReminders();
    }
  });
}

function playReminder(message) {
  const audio = document.getElementById("reminder-sound");

  // Try to play audio immediately
  audio.muted = false;
  audio.volume = 1.0;
  audio.play().catch(err => {
    console.warn("Autoplay blocked. Try clicking once on the page.", err);
  });

  document.getElementById("stop-button").style.display = "block";

  if (Notification.permission === "granted") {
    new Notification("⏰ Reminder", { body: message });
  } else {
    alert(`⏰ Reminder: ${message}`);
  }
}

document.getElementById("stop-button").addEventListener("click", () => {
  const audio = document.getElementById("reminder-sound");
  audio.pause();
  audio.currentTime = 0;
  document.getElementById("stop-button").style.display = "none";
});

// Unlock audio once user clicks the page (for Chrome autoplay policy)
document.body.addEventListener("click", () => {
  const audio = document.getElementById("reminder-sound");
  audio.play().then(() => {
    audio.pause();
    audio.currentTime = 0;
    console.log("Audio unlocked.");
  }).catch(() => {});
}, { once: true });

setInterval(checkReminders, 1000);
loadReminders();

// Ask for notification permission
if ("Notification" in window && Notification.permission !== "granted") {
  Notification.requestPermission();
}


