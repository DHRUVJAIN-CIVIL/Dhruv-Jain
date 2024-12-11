document.addEventListener('DOMContentLoaded', () => {
    // Display a welcome message
    alert('Welcome to Dhruv Jain\'s Civil Engineering Resume! 🚧');

    // Add hover animation for sections
    const sections = document.querySelectorAll('.resume-section');
    sections.forEach(section => {
        section.addEventListener('mouseover', () => {
            section.style.transform = 'scale(1.02)';
            section.style.transition = 'transform 0.3s ease';
        });
        section.addEventListener('mouseout', () => {
            section.style.transform = 'scale(1)';
        });
    });

    // Highlight contact links on hover
    const contactLinks = document.querySelectorAll('.contact-info a');
    contactLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#e74c3c';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '#81ecec';
        });
    });
});
