/**
 * Global script to enhance portfolio functionality.
 * Includes Contact Form handling and dynamic navigation highlighting.
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Contact Form Handler (on contact.html) ---
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop the form from submitting normally

            // Retrieve form field values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // --- Simulation of Server Submission ---
            // In a real application, you would make a fetch() call to a backend API here.
            console.log("--- SIMULATED FORM SUBMISSION ---");
            console.log(`Name: ${name}`);
            console.log(`Email: ${email}`);
            console.log(`Subject: ${subject}`);
            console.log(`Message: ${message}`);
            
            // --- User Feedback (Success Message) ---
            const submitButton = contactForm.querySelector('button[type="submit"]');
            
            // Create and style a temporary success message element
            let successMessage = document.createElement('div');
            // Using existing CSS .detail-card structure for quick styling feedback
            successMessage.className = 'detail-card mt-4 border-left: 5px solid green;'; 
            successMessage.innerHTML = `<h4 style="color: green; margin: 0;">Success!</h4>
                                        <p style="margin-bottom: 0;">Thank you for reaching out, <strong>${name}</strong>! I will review your inquiry shortly.</p>`;

            // Insert the message after the form container
            contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);
            
            // Clear the form and disable the button briefly
            contactForm.reset();
            submitButton.disabled = true;
            submitButton.textContent = 'Message Sent!';

            // Remove the success message and re-enable the button after 5 seconds
            setTimeout(() => {
                if (successMessage.parentNode) {
                    successMessage.parentNode.removeChild(successMessage);
                }
                submitButton.disabled = false;
                submitButton.textContent = 'Send Message';
            }, 5000);
        });
    }


    // --- 2. Dynamic Active Navigation Highlighting ---
    // Ensures the correct nav link is highlighted, even if the user manually changes pages.
    
    // Get the current page filename (e.g., "index.html" or "contact.html")
    const path = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        // Remove any existing active class first
        link.classList.remove('active'); 

        // Apply active class if the link's href matches the current path
        if (link.getAttribute('href') === path) {
            link.classList.add('active');
        }
    });

    
    // --- 3. Smooth Scrolling for internal anchor links (Good practice) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
             const targetId = this.getAttribute('href');
             if (targetId.length > 1) { // Check if it's not just "#"
                 e.preventDefault();
                 document.querySelector(targetId).scrollIntoView({
                     behavior: 'smooth'
                 });
             }
        });
    });
});
