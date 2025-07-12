function copyUPI() {
    const upi = document.getElementById("upiId").innerText;
    navigator.clipboard.writeText(upi).then(() => {
      const msg = document.getElementById("copyMsg");
      msg.classList.remove("hidden");
      setTimeout(() => msg.classList.add("hidden"), 2000);
    });
  }

  // iOS hide UPI button if needed
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (isIOS) {
    document.querySelector(".donate-btn").style.display = "none";
    document.querySelector(".qr-info").style.display = "block";
  }


  