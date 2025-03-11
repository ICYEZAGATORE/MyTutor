document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const signupBtn = document.getElementById("signupBtn");

  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      window.location.href = "login.html"; // ✅ Correct path
    });
  }

  if (signupBtn) {
    signupBtn.addEventListener("click", () => {
      window.location.href = "signup.html"; // ✅ Correct path
    });
  }
});
