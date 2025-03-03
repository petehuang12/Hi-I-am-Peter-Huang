// Smooth scrolling for anchor links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetSection = document.getElementById(targetId); // Find the target section

        // Scroll to the target section with an offset for the sticky header
        const offset = 80; // Adjust this value based on your header height
        window.scrollTo({
            top: targetSection.offsetTop - offset,
            behavior: 'smooth' // Enable smooth scrolling
        });
    });
});
// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    alert('Thank you for your message!');
});

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
