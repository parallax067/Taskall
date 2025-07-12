document.querySelectorAll(".faq-question").forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

function goHome() {
  window.location.href = "task.html"; // change to your home page filename
}


