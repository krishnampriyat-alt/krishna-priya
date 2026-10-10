document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Initialize Bootstrap Scrollspy
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#navbar-example',
        offset: 100 // Adjust this value based on navbar height
    });

    // Collapse navbar on mobile after clicking a link
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.getElementById('navbarNav');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
    });

    // Form Validation (Bootstrap style)
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default submission for demo purposes
            
            if (!form.checkValidity()) {
                event.stopPropagation();
            } else {
                // If valid, simulate a success message
                alert("Thank you! Your message has been simulated. Connect a backend to send real emails.");
                form.reset();
                form.classList.remove('was-validated');
                return;
            }

            form.classList.add('was-validated');
        }, false);
    }
});
