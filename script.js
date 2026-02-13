// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission (basic alert; integrate with backend like Formspree for real sending)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent!');
});
