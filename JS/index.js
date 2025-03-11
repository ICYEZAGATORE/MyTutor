// File: /JS/index.js

document.getElementById("loginBtn").addEventListener("click", () => {
  window.location.href = "login.html";
});

document.getElementById("signupBtn").addEventListener("click", () => {
  window.location.href = "signup.html";
});

document.getElementById("submitLogin").addEventListener("click", (e) => {
  e.preventDefault();
  // Add login logic here
  alert("Login successful!");
});

document.getElementById("submitSignup").addEventListener("click", (e) => {
  e.preventDefault();
  // Add signup logic here
  alert("Sign up successful!");
});
