function togglePassword() {
  var passwordInput = document.getElementById('password');
  var eyeIcon = document.querySelector('.eye-icon i');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeIcon.classList.remove('fa-eye-slash');
    eyeIcon.classList.add('fa-eye');
  } else {
    passwordInput.type = 'password';
    eyeIcon.classList.remove('fa-eye');
    eyeIcon.classList.add('fa-eye-slash');
  }
}

function validateForm() {
  var isValid = true;

  var firstName = document.querySelector('.firstName');
  var lastName = document.querySelector('.lastName');
  var email = document.querySelector('.email');
  var password = document.querySelector('.password');

  if (firstName.value.trim() === '') {
    showError(firstName, 'firstNameError');
    isValid = false;
  } else {
    hideError(firstName, 'firstNameError');
  }

  if (lastName.value.trim() === '') {
    showError(lastName, 'lastNameError');
    isValid = false;
  } else {
    hideError(lastName, 'lastNameError');
  }

  if (email.value.trim() === '') {
    showError(email, 'emailError');
    isValid = false;
  } else if (!isValidEmail(email.value.trim())) {
    showError(email, 'emailError', 'Please enter a valid email address');
    isValid = false;
  } else {
    hideError(email, 'emailError');
  }

  if (password.value.trim() === '') {
    showError(password, 'passwordError');
    isValid = false;
  } else {
    hideError(password, 'passwordError');
  }

  return isValid;
}

function isValidEmail(email) {
  // Regular expression for validating an email address
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showError(input, errorId, message = 'Field cannot be empty') {
  input.classList.add('invalid');
  var errorElement = document.getElementById(errorId);
  errorElement.textContent = message;
  errorElement.style.display = 'block';
}

function hideError(input, errorId) {
  input.classList.remove('invalid');
  var errorElement = document.getElementById(errorId);
  errorElement.style.display = 'none';
}

