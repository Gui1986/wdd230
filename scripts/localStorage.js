document.addEventListener("DOMContentLoaded", function() {
    // Array of messages
    let messages = [
        "Welcome back! We're glad to see you again.",
        "Welcome back! It's nice to have you here again.",
        "Wow, you're back so soon! Welcome!"
    ];

    // Retrieve the index of the last displayed message from local storage
    let lastIndex = localStorage.getItem("lastIndex");

    // If the index doesn't exist or is out of bounds of the array, set it to 0
    if (lastIndex === null || lastIndex >= messages.length) {
        lastIndex = 0;
    }

    // Display the next message
    showMessage(messages[lastIndex]);

    // Update the index for the next message
    let nextIndex = (parseInt(lastIndex) + 1) % messages.length;

    // Store the next index in local storage
    localStorage.setItem("lastIndex", nextIndex.toString());
});

// Function to display message on the page
function showMessage(message) {
    // Create a new div element for the message
    let messageDiv = document.createElement("div");
    messageDiv.textContent = message;

    // Apply styles to the message div
    messageDiv.style.backgroundColor = "#3e8f40";
    messageDiv.style.color = "white";
    messageDiv.style.padding = "10px";
    messageDiv.style.borderRadius = "5px";
    messageDiv.style.position = "fixed";
    messageDiv.style.bottom = "20px";
    messageDiv.style.left = "50%";
    messageDiv.style.transform = "translateX(-50%)";
    messageDiv.style.zIndex = "999";

    // Create a close button for the message
    let closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.style.backgroundColor = "#fff";
    closeButton.style.color = "#3e8f40";
    closeButton.style.border = "none";
    closeButton.style.padding = "5px 10px";
    closeButton.style.marginLeft = "10px";
    closeButton.style.cursor = "pointer";
    closeButton.style.borderRadius = "3px";

    // Add click event listener to the close button
    closeButton.addEventListener("click", function() {
        // Remove the message div from the DOM
        document.body.removeChild(messageDiv);
    });

    // Append the close button to the message div
    messageDiv.appendChild(closeButton);

    // Append the message div to the body of the document
    document.body.appendChild(messageDiv);
}
