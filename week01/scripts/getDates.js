document.addEventListener('DOMContentLoaded', function() {
    var lastModifiedTime = "2024-01-12";

    document.getElementById('currentYear').textContent = new Date().getFullYear();

    var currentDateTime = new Date();
    document.getElementById('lastModified').textContent = 'Last Modified: ' + currentDateTime.toLocaleString('en');

});
