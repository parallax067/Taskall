// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAbVAAASbfeB9A_eDqwCDSghOair63zktg",
  authDomain: "taskall-a1.firebaseapp.com",
  projectId: "taskall-a1",
  storageBucket: "taskall-a1.firebasestorage.app",
  messagingSenderId: "630765557561",
  appId: "1:630765557561:web:f59b72e0a2d905ab4f7ae8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Make it accessible globally
window.firebaseDB = db;
