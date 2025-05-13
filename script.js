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

// Function to perform Caesar cipher encryption or decryption
function caesarCipher(text, shift) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const charCode = char.charCodeAt(0);
            const base = charCode >= 65 && charCode <= 90 ? 65 : 97; // Uppercase or lowercase
            return String.fromCharCode(((charCode - base + shift) % 26 + 26) % 26 + base);
        }
        return char; // Non-alphabetic characters remain unchanged
    }).join('');
}

// Update password strength dynamically
document.getElementById('password').addEventListener('input', function () {
    const password = this.value;
    const strength = getPasswordStrength(password);
    const strengthDiv = document.getElementById('passwordStrength');

    // Update the text and color based on strength
    strengthDiv.textContent = `Strength: ${strength}`;
    if (strength === 'Weak') {
        strengthDiv.style.color = 'red';
    } else if (strength === 'Medium') {
        strengthDiv.style.color = 'orange';
    } else if (strength === 'Strong') {
        strengthDiv.style.color = 'green';
    }
});