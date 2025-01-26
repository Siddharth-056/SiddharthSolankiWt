document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting
  
    const form = event.target;
    const fullName = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const password = form.querySelector('input[type="password"]:nth-of-type(1)').value;
    const confirmPassword = form.querySelector('input[type="password"]:nth-of-type(2)').value;
    const age = form.querySelector('input[type="number"]').value;
    const gender = form.querySelector('select:nth-of-type(1)').value;
    const location = form.querySelector('input[type="text"]:nth-of-type(2)').value;
    const eventPreference = form.querySelector('select:nth-of-type(2)').value;
    const terms = form.querySelector('#terms').checked;
  
    // Clear all error messages
    const errorMessages = form.querySelectorAll(".error-message");
    errorMessages.forEach((msg) => (msg.style.display = "none"));
  
    let isValid = true;
  
    // Validate Full Name
    if (!fullName) {
      showError(form.querySelector('input[type="text"]'), "Please enter your full name");
      isValid = false;
    }
  
    // Validate Email
    if (!validateEmail(email)) {
      showError(form.querySelector('input[type="email"]'), "Please enter a valid email address");
      isValid = false;
    }
  
    // Validate Password
    if (password.length < 8) {
      showError(
        form.querySelector('input[type="password"]:nth-of-type(1)'),
        "Password must be at least 8 characters"
      );
      isValid = false;
    }
  
    // Validate Confirm Password
    if (password !== confirmPassword) {
      showError(
        form.querySelector('input[type="password"]:nth-of-type(2)'),
        "Passwords do not match"
      );
      isValid = false;
    }
  
    // Validate Age
    if (age < 18 || !age) {
      showError(form.querySelector('input[type="number"]'), "Must be 18 or older");
      isValid = false;
    }
  
    // Validate Gender
    if (!gender) {
      showError(form.querySelector('select:nth-of-type(1)'), "Please select your gender");
      isValid = false;
    }
  
    // Validate Location
    if (!location) {
      showError(
        form.querySelector('input[type="text"]:nth-of-type(2)'),
        "Please enter your location"
      );
      isValid = false;
    }
  
    // Validate Event Preference
    if (!eventPreference) {
      showError(form.querySelector('select:nth-of-type(2)'), "Please select your event preference");
      isValid = false;
    }
  
    // Validate Terms
    if (!terms) {
      alert("You must agree to the Terms & Conditions and Event Guidelines");
      isValid = false;
    }
  
    // If form is valid, submit the form
    if (isValid) {
      form.submit();
    }
  });
  
  // Utility function to show error message
  function showError(inputElement, message) {
    const errorMessage = inputElement.closest(".form-group").querySelector(".error-message");
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
  }
  
  // Utility function to validate email
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  