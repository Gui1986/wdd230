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
    alert(messages[lastIndex]);

    // Update the index for the next message
    let nextIndex = (parseInt(lastIndex) + 1) % messages.length;

    // Store the next index in local storage
    localStorage.setItem("lastIndex", nextIndex.toString());
});
