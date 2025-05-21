// Password Toggle Visibility
const passwordField = document.querySelector('input[type="password"]');
const passwordToggleButton = document.querySelector('.password-toggle');

passwordToggleButton.addEventListener('click', function() {
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
});

// Form Validation
document.querySelector('.modern-form').addEventListener('submit', function(event) {
    const username = document.querySelector('input[placeholder="Username"]');
    const email = document.querySelector('input[placeholder="Email"]');
    const password = document.querySelector('input[placeholder="Password"]');
    
    // Check if username is empty
    if (username.value.trim() === "") {
        alert("Username cannot be empty");
        event.preventDefault(); // Prevent form submission
        return;
    }

    // Check if email is valid
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email.value.trim())) {
        alert("Please enter a valid email address");
        event.preventDefault(); // Prevent form submission
        return;
    }

    // Check if password is at least 6 characters long
    if (password.value.length < 6) {
        alert("Password must be at least 6 characters long");
        event.preventDefault(); // Prevent form submission
        return;
    }

    // Optionally, if the validation is passed, you can submit the form (it's not necessary if you just want to show alerts)
    // alert('Form Submitted');
});

// Additional enhancements can go here
