document.addEventListener("DOMContentLoaded", () => {
  const notificationToggle = document.getElementById("notificationToggle");
  const ringtoneSelect = document.getElementById("ringtoneSelect");

  // Load preferences
  if (localStorage.getItem("notifications") === "true") {
    notificationToggle.checked = true;
  }

  ringtoneSelect.value = localStorage.getItem("ringtone") || "default";

  // Notifications toggle
  notificationToggle.addEventListener("change", () => {
    localStorage.setItem("notifications", notificationToggle.checked);
    alert(`Notifications ${notificationToggle.checked ? "enabled" : "disabled"}`);
  });

  // Ringtone change
  ringtoneSelect.addEventListener("change", () => {
    const sound = ringtoneSelect.value;
    localStorage.setItem("ringtone", sound);
    playSound(sound);
  });
});

function showAbout() {
  document.getElementById("aboutText").classList.toggle("hidden");
}

function playSound(type) {
  const sounds = {
    default: "https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg",
    beep: "https://actions.google.com/sounds/v1/alarms/beep_short.ogg",
    alarm: "https://actions.google.com/sounds/v1/alarms/bugle_tune.ogg",
    chime: "https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg"
  };
  const audio = new Audio(sounds[type]);
  audio.play();
}

