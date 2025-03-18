function validateForm(event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const message = document.getElementById('message');

    // Basic validation
    if (fullname.length < 3) {
        message.textContent = "Full name must be at least 3 characters long!";
        message.style.color = "#ff6b6b";
        return false;
    }

    if (!email.includes('@') || !email.includes('.')) {
        message.textContent = "Please enter a valid email address!";
        message.style.color = "#ff6b6b";
        return false;
    }

    if (password.length < 6) {
        message.textContent = "Password must be at least 6 characters long!";
        message.style.color = "#ff6b6b";
        return false;
    }

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match!";
        message.style.color = "#ff6b6b";
        return false;
    }

    // Success message
    message.textContent = "Registration successful! Welcome, " + fullname + "!";
    message.style.color = "#4ecdc4";
    document.getElementById('registrationForm').reset();
    return true;
}
