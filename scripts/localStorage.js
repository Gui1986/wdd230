// Retrieve the current page visit count from localStorage
let pageVisits = localStorage.getItem('pageVisits');

// Check if pageVisits is null (first time visit), initialize to 1
if (!pageVisits) {
    pageVisits = 1;
} else {
    // Increment pageVisits if it exists in localStorage
    pageVisits = parseInt(pageVisits) + 1;
}

// Update the pageVisits in localStorage
localStorage.setItem('pageVisits', pageVisits);

// Display the page visit count on the page
document.addEventListener('DOMContentLoaded', function() {
    const visitCounter = document.createElement('div');
    visitCounter.textContent = `Total Page Visits: ${pageVisits}`;
    visitCounter.classList.add('visit-counter');
    document.body.appendChild(visitCounter);
});
