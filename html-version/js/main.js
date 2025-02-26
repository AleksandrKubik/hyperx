// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', () => {
    // Initialize smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add hover effect for glass cards
    document.querySelectorAll('.glass-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-2px)';
            card.style.borderColor = 'rgba(29, 161, 242, 0.3)'; // Twitter Blue with opacity
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        });
    });

    // Add click ripple effect to buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            const rect = button.getBoundingClientRect();
            
            ripple.className = 'ripple';
            ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px';
            ripple.style.left = e.clientX - rect.left - ripple.offsetWidth / 2 + 'px';
            ripple.style.top = e.clientY - rect.top - ripple.offsetHeight / 2 + 'px';
            
            button.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Handle form submissions
    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        
        // Validate form data
        if (!data.tweetUrl) {
            showError('Please enter your tweet URL');
            return;
        }
        
        // Here you would typically send the data to your server
        console.log('Form submitted:', data);
        
        // Show success message
        showSuccess('Your request has been submitted successfully!');
    };

    // Add form submit handlers
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', handleFormSubmit);
    });

    // Error and success message handlers
    const showError = (message) => {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message text-red-500 text-sm text-center mt-4';
        errorDiv.textContent = message;
        
        // Remove any existing error messages
        document.querySelectorAll('.error-message').forEach(el => el.remove());
        
        // Add new error message
        document.querySelector('form')?.appendChild(errorDiv);
        
        // Remove error after 5 seconds
        setTimeout(() => errorDiv.remove(), 5000);
    };

    const showSuccess = (message) => {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message text-green-500 text-sm text-center mt-4';
        successDiv.textContent = message;
        
        // Remove any existing success messages
        document.querySelectorAll('.success-message').forEach(el => el.remove());
        
        // Add new success message
        document.querySelector('form')?.appendChild(successDiv);
        
        // Remove success message after 5 seconds
        setTimeout(() => successDiv.remove(), 5000);
    };

    // Add intersection observer for animation on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections for scroll animations
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }

    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    @keyframes fade-in {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .animate-fade-in {
        animation: fade-in 0.6s ease-out forwards;
    }
`;
document.head.appendChild(style);
