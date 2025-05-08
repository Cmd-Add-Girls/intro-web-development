// Function to evaluate password strength
function getPasswordStrength(password) {
    let strength = 0;

    // Check for length
    if (password.length >= 8) strength++;

    // Check for uppercase letters
    if (/[A-Z]/.test(password)) strength++;

    // Check for numbers or special characters
    if (/[0-9]/.test(password) || /[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;

    // Determine strength level
    if (strength === 0) return 'Weak';
    if (strength === 1) return 'Weak';
    if (strength === 2) return 'Medium';
    if (strength === 3) return 'Strong';
}