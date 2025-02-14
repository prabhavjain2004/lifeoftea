// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Select the menu toggle button and the navigation element
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    // Check if the menuToggle element exists
    if (menuToggle) {
        // Add click event listener to the menu toggle button
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active'); // Toggle active class on the toggle button
            nav.classList.toggle('active'); // Toggle active class on the nav
        });
    } else {
        console.error('Menu toggle element not found');
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav') && !e.target.closest('.menu-toggle')) {
            menuToggle.classList.remove('active'); // Remove active class from toggle button
            nav.classList.remove('active'); // Remove active class from nav
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active'); // Remove active class from toggle button
            nav.classList.remove('active'); // Remove active class from nav
        });
    });
});
