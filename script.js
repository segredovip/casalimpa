// Load video player
(function() {
    var s = document.createElement("script");
    s.src = "https://scripts.converteai.net/486ebcdc-bece-472f-8b40-15de7d144964/players/68d2f7caca0420737cbfaf40/v4/player.js";
    s.async = true;
    document.head.appendChild(s);
})();

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll is handled by CSS, but we can add click tracking
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            console.log('CTA clicked:', this.textContent);
        });
    });
});

// FAQ Toggle Function
function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const isActive = element.classList.contains('active');
    
    // Close all other FAQs
    document.querySelectorAll('.faq-question.active').forEach(q => {
        q.classList.remove('active');
        q.nextElementSibling.classList.remove('active');
    });
    
    // Toggle current FAQ
    if (!isActive) {
        element.classList.add('active');
        answer.classList.add('active');
    }
}

// Add loading animation for images with error handling
document.addEventListener('DOMContentLoaded', function() {
    const allImages = document.querySelectorAll('img');
    
    // Debug: log all image sources
    allImages.forEach((img, index) => {
        console.log(`Image ${index + 1}: ${img.src}`);
        
        // Add error handler
        img.onerror = function() {
            console.error(`Failed to load image: ${this.src}`);
            // Try to reload without cache
            if (!this.src.includes('&retry=1')) {
                this.src = this.src + (this.src.includes('?') ? '&retry=1' : '?retry=1');
            }
        };
        
        // Add load handler
        img.onload = function() {
            console.log(`Successfully loaded: ${this.src}`);
            this.style.opacity = '1';
        };
        
        // Set initial opacity for smooth loading
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
    
    // Force reload all images after a short delay
    setTimeout(() => {
        allImages.forEach(img => {
            if (img.complete && img.naturalHeight === 0) {
                console.log(`Reloading failed image: ${img.src}`);
                img.src = img.src;
            } else if (img.complete) {
                img.style.opacity = '1';
            }
        });
    }, 100);
});

// Track scroll for potential analytics
let scrollTimeout;
window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent % 25 === 0) {
            console.log(`Scroll progress: ${scrollPercent}%`);
        }
    }, 100);
});