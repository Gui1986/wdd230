function checkPassword() {
    let password = document.getElementById("password");
    let confirm_password = document.getElementById("confirm-password");

    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords do not match");
    } else {
        confirm_password.setCustomValidity("");
    }
}

function displayRatingValue() {
    let ratingInput = document.getElementById("page-rating");
    let ratingValueSpan = document.getElementById("rating-value");
    ratingValueSpan.textContent = ratingInput.value;
}
