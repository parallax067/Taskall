document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");

  menuBtn.addEventListener("click", () => {
    sidebar.classList.add("show");
    menuBtn.style.display = "none";
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("show");
    menuBtn.style.display = "block";
  });
});


function goToother() {
  window.location.href = "other.html";
}

function goTohelp() {
  window.location.href = "help.html";
}

function goTosettings() {
  window.location.href = "settings.html";
}

function goToAboutUs() {
  window.location.href = "about.html";
}

function goTocoffee() {
  window.location.href = "buymeacoffee.html";
}









