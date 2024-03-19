/* login/Register Form */

function toggleForm(formType) {
  // Add logic to handle form toggling
  var loginForm = document.querySelector(".formLogin");
  var registerForm = document.querySelector(".formRegister");
  var toggleButton = document.getElementById("button");

  if (formType === "login") {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    toggleButton.style.left = "0";
  } else {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    toggleButton.style.left = "47%";
  }
}

document.querySelector(".login").addEventListener("submit", function (event) {
  event.preventDefault();

  var formType = event.target.classList.contains("form-login")
    ? "login"
    : "register";

  console.log("Current form type:", formType);
  // Handle form submission based on the current form type
  // ...
});

/* login/Register Form End */
