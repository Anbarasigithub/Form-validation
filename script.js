document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\d{10}$/;

  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

  if (!firstName.value.trim()) {
    document.getElementById("firstNameError").textContent = "First name is required";
    valid = false;
  }

  if (!lastName.value.trim()) {
    document.getElementById("lastNameError").textContent = "Last name is required";
    valid = false;
  }

  if (!emailPattern.test(email.value.trim())) {
    document.getElementById("emailError").textContent = "Enter a valid email address";
    valid = false;
  }

  if (!phonePattern.test(phone.value.trim())) {
    document.getElementById("phoneError").textContent = "Enter a 10-digit phone number";
    valid = false;
  }

  if (password.value.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
    valid = false;
  }

  if (!confirmPassword.value.trim()) {
    document.getElementById("confirmPasswordError").textContent = "Please confirm your password";
    valid = false;
  } else if (confirmPassword.value !== password.value) {
    document.getElementById("confirmPasswordError").textContent = "Passwords do not match";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
    // Optionally submit the form using:
    // e.target.submit();
  }
});
