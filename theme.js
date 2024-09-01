// Function to toggle the theme
function toggleTheme() {
    const body = document.body;
    const themeLabel = document.getElementById('theme-label');

    // Toggle dark-mode class on the body
    body.classList.toggle('dark-mode');

    // Update the label and store the preference in localStorage
    if (body.classList.contains('dark-mode')) {
        themeLabel.textContent = "Light Mode";
        localStorage.setItem('theme', 'dark');
    } else {
        themeLabel.textContent = "Dark Mode";
        localStorage.setItem('theme', 'light');
    }
}

// Function to apply the saved theme
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const themeLabel = document.getElementById('theme-label');

    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeLabel.textContent = "Light Mode";
        document.getElementById('theme-switch').checked = true;
    } else {
        body.classList.remove('dark-mode');
        themeLabel.textContent = "Dark Mode";
        document.getElementById('theme-switch').checked = false;
    }
}

// Apply the saved theme on page load
document.addEventListener('DOMContentLoaded', applySavedTheme);

// Add event listener to the theme switch
document.getElementById('theme-switch').addEventListener('change', toggleTheme);

