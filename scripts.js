// JavaScript for Navigation Menu
document.addEventListener('DOMContentLoaded', function () {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Add click event listeners to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor behavior
            const targetPage = this.getAttribute('href'); // Get the target page URL
            window.location.href = targetPage; // Navigate to the target page
        });
    });
});
