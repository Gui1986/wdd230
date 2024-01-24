// localStorage.js

document.addEventListener('DOMContentLoaded', function () {
    // Check if Web Storage is supported by the browser
    if (typeof Storage !== 'undefined') {
        // Get the mode element and set its click event handler
        let modeElement = document.getElementById('mode');
        modeElement.addEventListener('click', toggleDarkMode);

        // Check if dark mode is enabled in localStorage
        let isDarkMode = localStorage.getItem('darkMode') === 'true';

        // Set initial dark mode state
        setDarkMode(isDarkMode);

        // Function to toggle dark mode
        function toggleDarkMode() {
            isDarkMode = !isDarkMode;
            setDarkMode(isDarkMode);

            // Save the dark mode state to localStorage
            localStorage.setItem('darkMode', isDarkMode);
        }

        // Function to set dark mode based on the provided state
        function setDarkMode(isDark) {
            let stylesheet = document.getElementById('dark-mode-stylesheet');
            if (isDark) {
                document.body.classList.add('dark-mode');
                stylesheet.setAttribute('href', 'styles/dark-mode.css');
            } else {
                document.body.classList.remove('dark-mode');
                stylesheet.setAttribute('href', '');
            }
        }
    } else {
        // Web Storage is not supported
        console.error('Web Storage is not supported in this browser.');
    }
});
