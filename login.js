document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // Check if password is alphanumeric
  const isAlphanumeric = /^[A-Za-z0-9]+$/.test(password);
  if (!isAlphanumeric) {
    alert("Password must be alphanumeric (letters and numbers only).");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const validUser = users.find(user => user.email === email && user.password === password);

  if (validUser) {
    alert("Login successful!");
    window.location.href = "task.html"; // Redirect to app
  } else {
    alert("Invalid email or password. Please sign up first.");
  }
});


