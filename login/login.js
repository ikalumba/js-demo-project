document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Login and authentication logic
  if (username.toLowerCase() === "admin" && password === "password") {
    // alert("Login successful");
    // Redirect to admin dashboard
    window.location.href = "/adminDash/admindash.html";
  } else if (username.toLowerCase() === "sitter" && password === "password") {
    // alert("Login successful");
    // Redirect to sitter dashboard
    window.location.href = "/sitterdash.html";
  } else if (username.toLowerCase() === "parent" && password === "password") {
    // alert("Login successful");
    // Redirect to parent dashboard
    window.location.href = "/parentdash.html";
  } else {
    alert("Invalid username or password");
  }
});
