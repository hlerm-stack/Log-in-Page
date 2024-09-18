const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

const toggleRegisterPassword = document.querySelector('#toggleRegisterPassword');
const registerPassword = document.querySelector('#registerPassword');

const toggleConfirmPassword = document.querySelector('#toggleConfirmPassword');
const confirmPassword = document.querySelector('#confirmPassword');

// Toggle password visibility for the Password field
togglePassword.addEventListener('click', function () {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('bx-show');
    this.classList.toggle('bx-hide');
});

// Toggle password visibility for the Register Password field
toggleRegisterPassword.addEventListener('click', function () {
    const type = registerPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    registerPassword.setAttribute('type', type);
    this.classList.toggle('bx-show');
    this.classList.toggle('bx-hide');
});

// Toggle password visibility for the Confirm Password field
toggleConfirmPassword.addEventListener('click', function () {
    const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmPassword.setAttribute('type', type);
    this.classList.toggle('bx-show');
    this.classList.toggle('bx-hide');
});

// Save form data to localStorage
function saveFormData(formId) {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll('input');

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            localStorage.setItem(input.name, input.value);
        });
    });
}

// Retrieve and populate form data from localStorage
function populateFormData(formId) {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll('input');

    inputs.forEach(input => {
        if (localStorage.getItem(input.name)) {
            input.value = localStorage.getItem(input.name);
        }
    });
}

// Save and populate form data for login, register, and forgot password forms
saveFormData('loginForm');
saveFormData('registerForm');
saveFormData('forgotPasswordForm');
populateFormData('loginForm');
populateFormData('registerForm');
populateFormData('forgotPasswordForm');

// Forgot Password functionality
function forgotPassword() {
    const email = prompt("Please enter your registered email address:");
    if (email) {
        alert(`If an account with the email ${email} exists, a password recovery link will be sent.`);
        console.log(`Password recovery email sent to: ${email}`);
    } else {
        alert("Email is required for password recovery.");
    }
}

// Show Forgot Password form and hide the login form
function showForgotPasswordForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('forgotPasswordForm').style.display = 'block';
    localStorage.setItem('currentForm', 'forgotPassword');
}

// Show Login form and hide the Register and Forgot Password forms
function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('forgotPasswordForm').style.display = 'none';
    localStorage.setItem('currentForm', 'login');
}

// Show Register form and hide the Login and Forgot Password forms
function showRegisterForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('forgotPasswordForm').style.display = 'none';
    localStorage.setItem('currentForm', 'register');
}

// On page load, populate form data and show the last active form
window.onload = () => {
    const currentForm = localStorage.getItem('currentForm');
    if (currentForm === 'register') {
        showRegisterForm();
    } else if (currentForm === 'forgotPassword') {
        showForgotPasswordForm();
    } else {
        showLoginForm(); // Default is the login form
    }
    populateFormData('loginForm');
    populateFormData('registerForm');
    populateFormData('forgotPasswordForm');
};
