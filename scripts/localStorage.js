document.addEventListener("DOMContentLoaded", function() {
    // Array of messages
    let messages = [
        "Welcome back! We're glad to see you again.",
        "Welcome back! It's nice to have you here again.",
        "Wow, you're back so soon! Welcome!"
    ];

    // Retrieve the last visit date from localStorage
    let lastVisitDate = localStorage.getItem("lastVisitDate");

    // If last visit date is not available, set it to the current date
    if (!lastVisitDate) {
        lastVisitDate = new Date().toISOString();
        localStorage.setItem("lastVisitDate", lastVisitDate);
    }

    // Calculate the number of days since the last visit
    let currentDate = new Date();
    let daysSinceLastVisit = Math.floor((currentDate - new Date(lastVisitDate)) / (1000 * 60 * 60 * 24));

    // Choose a message based on the number of days since the last visit
    let messageIndex = 0; // Default message
    if (daysSinceLastVisit > 0 && daysSinceLastVisit <= messages.length) {
        messageIndex = daysSinceLastVisit - 1;
    }

    // Display the message
    showMessage(messages[messageIndex]);

    // Update the last visit date
    localStorage.setItem("lastVisitDate", currentDate.toISOString());
});

// Function to display message on the page
function showMessage(message) {
    // Create message element
    let messageDiv = document.createElement("div");
    messageDiv.textContent = message;

    // Apply styles
    messageDiv.style.backgroundColor = "#3e8f40";
    messageDiv.style.color = "white";
    messageDiv.style.padding = "10px";
    messageDiv.style.borderRadius = "5px";
    messageDiv.style.position = "fixed";
    messageDiv.style.bottom = "20px";
    messageDiv.style.left = "50%";
    messageDiv.style.transform = "translateX(-50%)";
    messageDiv.style.zIndex = "999";

    // Create close button
    let closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.style.backgroundColor = "#fff";
    closeButton.style.color = "#3e8f40";
    closeButton.style.border = "none";
    closeButton.style.padding = "5px 10px";
    closeButton.style.marginLeft = "10px";
    closeButton.style.cursor = "pointer";
    closeButton.style.borderRadius = "3px";

    // Add click event listener to close button
    closeButton.addEventListener("click", function() {
        document.body.removeChild(messageDiv);
    });

    // Append close button to message element
    messageDiv.appendChild(closeButton);

    // Append message element to document body
    document.body.appendChild(messageDiv);
}