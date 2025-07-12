import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged, deleteUser } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getDatabase, ref, remove } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAbVAAASbfeB9A_eDqwCDSghOair63zktg",
  authDomain: "taskall-a1.firebaseapp.com",
  projectId: "taskall-a1",
  storageBucket: "taskall-a1.firebasestorage.app",
  messagingSenderId: "630765557561",
  appId: "1:630765557561:web:f59b72e0a2d905ab4f7ae8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// ✅ Toggle visibility based on login state
onAuthStateChanged(auth, (user) => {
  const loginBtn = document.getElementById("loginBtn");
  const signupBtn = document.getElementById("signupBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  if (!loginBtn || !signupBtn || !logoutBtn) return;

  if (user) {
    loginBtn.style.display = "none";
    signupBtn.style.display = "none";
    logoutBtn.style.display = "inline-block";
  } else {
    loginBtn.style.display = "inline-block";
    signupBtn.style.display = "inline-block";
    logoutBtn.style.display = "none";
  }
});

// ✅ Logout = Delete data + user account
document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");
  if (!logoutBtn) return;

  logoutBtn.addEventListener("click", () => {
    const user = auth.currentUser;
    if (!user) return;

    const userId = user.uid;

    // 🗑 Step 1: Delete user data
    remove(ref(db, `users/${userId}`))
      .then(() => {
        // 🧨 Step 2: Delete user account
        deleteUser(user)
          .then(() => {
            alert("Account and data deleted.");
            window.location.href = "signup.html";
          })
          .catch((error) => {
            alert("Error deleting user: " + error.message);
          });
      })
      .catch((err) => {
        alert("Error deleting data: " + err.message);
      });
  });
});
