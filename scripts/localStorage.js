// JavaScript logic for lazy loading images and sidebar content based on localStorage
document.addEventListener("DOMContentLoaded", function() {
    // Check localStorage for last visit date
    let lastVisit = localStorage.getItem("lastVisit");

    // Get current date
    let currentDate = new Date();

    // Update last visit date in localStorage
    localStorage.setItem("lastVisit", currentDate.toDateString());

    // Calculate the difference in days
    let timeDiff = 0;
    if (lastVisit) {
        let lastVisitDate = new Date(lastVisit);
        timeDiff = Math.ceil((currentDate - lastVisitDate) / (1000 * 3600 * 24));
    }

    // Get sidebar content element
    let sidebarContent = document.getElementById("sidebar-content");

    // Generate appropriate message based on the difference in days
    if (timeDiff === 0) {
        sidebarContent.innerText = "Welcome! Let us know if you have any questions.";
    } else if (timeDiff < 1) {
        sidebarContent.innerText = "Back so soon! Awesome!";
    } else {
        sidebarContent.innerText = "You last visited " + timeDiff + " day" + (timeDiff === 1 ? "" : "s") + " ago.";
    }

    // Lazy load images
    let lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(function(lazyImg) {
        lazyImg.src = lazyImg.dataset.src;
        lazyImg.removeAttribute('data-src');
    });
});
