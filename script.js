document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Clear previous error messages
    document.querySelectorAll('.error').forEach(function(errorDiv) {
      errorDiv.textContent = '';
    });
  
    let isValid = true;
  
    // Get form values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const phone = document.getElementById('phone').value.trim();
  
    // Validate First Name
    if (firstName === '') {
      document.getElementById('firstNameError').textContent = 'First name is required.';
      isValid = false;
    }
  
    // Validate Last Name
    if (lastName === '') {
      document.getElementById('lastNameError').textContent = 'Last name is required.';
      isValid = false;
    }
  
    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
      isValid = false;
    }
  
    // Validate Password
    if (password.length < 6) {
      document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
      isValid = false;
    }
  
    // Validate Phone Number
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number.';
      isValid = false;
    }
  
    // If form is valid, show success message
    if (isValid) {
      document.getElementById('formSuccess').textContent = 'Registration Successful!';
      document.getElementById('registrationForm').reset();
    }
  });
  