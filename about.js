document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll to section on click (optional)
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Social media icon click handling (replace with your links)
  document.getElementById("yt").addEventListener("click", () => {
    window.open("https://www.youtube.com/@yourchannel", "_blank");
  });

  document.getElementById("ig").addEventListener("click", () => {
    window.open("https://www.instagram.com/yourprofile", "_blank");
  });

  document.getElementById("wa").addEventListener("click", () => {
    window.open("https://wa.me/yourphonenumber", "_blank");
  });

  document.getElementById("mail").addEventListener("click", () => {
    window.location.href = "mailto:youremail@example.com";
  });
});


function goHome() {
  window.location.href = "task.html"; // change to your home page filename
}


