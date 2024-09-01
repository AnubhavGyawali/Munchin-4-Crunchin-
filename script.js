d// Check for saved theme in localStorage
document.addEventListener("DOMContentLoaded", function() {
    const currentTheme = localStorage.getItem('theme') || 'light-mode';
    document.body.classList.add(currentTheme);

    // Update the button text based on the current theme
    const themeToggleButton = document.getElementById('theme-toggle');
    if (currentTheme === 'dark-mode') {
        themeToggleButton.textContent = 'Light Mode';
    } else {
        themeToggleButton.textContent = 'Dark Mode';
    }
});

// Toggle theme function
function toggleTheme() {
    const themeToggleButton = document.getElementById('theme-toggle');

    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
        themeToggleButton.textContent = 'Dark Mode';
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        themeToggleButton.textContent = 'Light Mode';
    }
}

// Attach event listener to the toggle button
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);


