// Premium JavaScript for Vettri Vinayaga Flyash Bricks Website

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
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

// Header scroll effect with advanced animations
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.backdropFilter = 'blur(20px)';
        header.style.boxShadow = '0 10px 40px rgba(0,0,0,0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(20px)';
        header.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)';
    }
    
    // Hide/show header on scroll
    if (scrollTop > lastScrollTop && scrollTop > 500) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop;
});

// Advanced Contact Form Handling with animations
const contactForm = document.getElementById('quote-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Advanced validation with visual feedback
        const formGroups = this.querySelectorAll('.form-group');
        let isValid = true;
        
        formGroups.forEach(group => {
            const input = group.querySelector('input, select, textarea');
            if (input && input.hasAttribute('required') && !input.value.trim()) {
                group.classList.add('error');
                isValid = false;
                shakeElement(group);
            } else {
                group.classList.remove('error');
            }
        });
        
        if (!isValid) {
            showNotification('Please fill in all required fields', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showNotification('Please enter a valid email address', 'error');
            shakeElement(document.getElementById('email').parentElement);
            return;
        }
        
        // Phone validation (advanced)
        const phoneRegex = /^[6-9][0-9]{9}$/;
        const cleanPhone = data.phone.replace(/[^0-9]/g, '');
        if (!phoneRegex.test(cleanPhone)) {
            showNotification('Please enter a valid 10-digit phone number starting with 6, 7, 8, or 9', 'error');
            shakeElement(document.getElementById('phone').parentElement);
            return;
        }
        
        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            showNotification('Thank you for your inquiry! We will contact you within 24 hours.', 'success');
            
            // Send WhatsApp message
            sendWhatsAppMessage(data);
            
            // Reset form with animation
            this.reset();
            formGroups.forEach((group, index) => {
                setTimeout(() => {
                    group.style.animation = 'fadeInUp 0.5s ease-out';
                }, index * 100);
            });
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Log form data (in real app, send to server)
            console.log('Form submitted:', data);
        }, 2000);
    });
}

// Shake animation for validation
function shakeElement(element) {
    element.style.animation = 'shake 0.5s ease-in-out';
    setTimeout(() => {
        element.style.animation = '';
    }, 500);
}

// Add shake keyframe dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    .form-group.error input,
    .form-group.error select,
    .form-group.error textarea {
        border-color: #e74c3c !important;
        background: #fdf2f2 !important;
    }
`;
document.head.appendChild(style);

// WhatsApp Message Function
function sendWhatsAppMessage(data) {
    const phoneNumber = '919486090967'; // Your WhatsApp number (with country code)
    
    // Create formatted message
    const message = `🏗️ *New Brick Order Request* 🏗️%0A%0A` +
        `👤 *Name:* ${data.name}%0A` +
        `📞 *Phone:* ${data.phone}%0A` +
        `📧 *Email:* ${data.email}%0A` +
        `🏭 *Product:* ${getProductLabel(data.product)}%0A` +
        `📊 *Quantity:* ${data.quantity} pieces%0A` +
        `📝 *Requirements:* ${data.message || 'None'}%0A%0A` +
        `📍 *Vettri Vinayaga Flyash Bricks & Hollow Bricks*%0A` +
        `🏠 *Address:* 53VR+M4, Keerambur Medu, Tamil Nadu 637207`;
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Show notification
    setTimeout(() => {
        showNotification('📱 Opening WhatsApp to send your order...', 'info');
    }, 1000);
}

// Get product label
function getProductLabel(productValue) {
    const products = {
        'flyash': 'Flyash Bricks',
        'hollow': 'Hollow Bricks',
        'solid': 'Premium Solid Bricks'
    };
    return products[productValue] || 'Unknown Product';
}

// Premium Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${getNotificationIcon(type)}</span>
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add premium styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: -400px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 15px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        z-index: 10000;
        min-width: 350px;
        max-width: 450px;
        backdrop-filter: blur(20px);
        animation: slideInRight 0.5s ease-out forwards;
        transition: all 0.3s ease;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Add close functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 6 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }
    }, 6000);
}

function getNotificationIcon(type) {
    const icons = {
        success: '✅',
        error: '❌',
        info: 'ℹ️',
        warning: '⚠️'
    };
    return icons[type] || icons.info;
}

function getNotificationColor(type) {
    const colors = {
        success: 'linear-gradient(135deg, #d4af37, #b8860b)',
        error: 'linear-gradient(135deg, #8B0000, #4A0000)',
        info: 'linear-gradient(135deg, #1A1A1A, #2A2A2A)',
        warning: 'linear-gradient(135deg, #DAA520, #B8860B)'
    };
    return colors[type] || colors.info;
}

// Add notification animations
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from { right: -400px; opacity: 0; }
        to { right: 20px; opacity: 1; }
    }
    @keyframes slideOutRight {
        from { right: 20px; opacity: 1; }
        to { right: -400px; opacity: 0; }
    }
    .notification-content {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    .notification-icon {
        font-size: 1.5rem;
        flex-shrink: 0;
    }
    .notification-message {
        flex: 1;
        font-weight: 500;
        line-height: 1.4;
    }
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.3s ease;
    }
    .notification-close:hover {
        background: rgba(255,255,255,0.2);
    }
`;
document.head.appendChild(notificationStyles);

// Advanced Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animate-in');
            }, index * 100);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.product-card, .advantage-item, .stat, .info-item, .section-header');
    animateElements.forEach(el => observer.observe(el));
});

// Add animation classes
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    .animate-in {
        animation: fadeInUp 0.8s ease-out forwards;
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    .product-card, .advantage-item, .stat, .info-item, .section-header {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease;
    }
`;
document.head.appendChild(animationStyles);

// Phone number formatting with real-time validation
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/[^0-9]/g, '');
        if (value.length > 10) {
            value = value.slice(0, 10);
        }
        e.target.value = value;
        
        // Real-time validation feedback
        if (value.length === 10 && /^[6-9]/.test(value)) {
            e.target.style.borderColor = '#d4af37';
            e.target.style.background = '#1a1a1c';
        } else if (value.length > 0) {
            e.target.style.borderColor = '#b8860b';
            e.target.style.background = '#141416';
        } else {
            e.target.style.borderColor = '#333';
            e.target.style.background = 'transparent';
        }
    });
}

// Quantity input with advanced controls
const quantityInput = document.getElementById('quantity');
if (quantityInput) {
    quantityInput.addEventListener('input', function(e) {
        if (e.target.value < 1) {
            e.target.value = 1;
        }
        if (e.target.value > 100000) {
            e.target.value = 100000;
            showNotification('Maximum quantity is 100,000 pieces. For bulk orders, please contact us directly.', 'info');
        }
    });
}

// Premium button effects
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('mouseenter', function(e) {
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            background: rgba(255,255,255,0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const rippleStyles = document.createElement('style');
rippleStyles.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyles);

// Advanced scroll to top functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(135deg, #d4af37, #b8860b);
    color: #000;
    border: none;
    font-size: 24px;
    cursor: pointer;
    display: none;
    z-index: 1000;
    transition: all 0.4s ease;
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
    backdrop-filter: blur(20px);
`;

document.body.appendChild(scrollToTopBtn);

// Show/hide scroll to top button with threshold
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        if (window.scrollY > 500) {
            scrollToTopBtn.style.display = 'block';
            setTimeout(() => {
                scrollToTopBtn.style.opacity = '1';
                scrollToTopBtn.style.transform = 'scale(1) rotate(0deg)';
            }, 10);
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.transform = 'scale(0.8) rotate(180deg)';
            setTimeout(() => {
                scrollToTopBtn.style.display = 'none';
            }, 400);
        }
    }, 100);
});

// Scroll to top functionality with smooth animation
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Premium hover effects for scroll to top button
scrollToTopBtn.addEventListener('mouseenter', function() {
    this.style.background = 'linear-gradient(135deg, #e6c27a, #d4af37)';
    this.style.transform = 'scale(1.1) rotate(5deg)';
    this.style.boxShadow = '0 15px 40px rgba(212, 175, 55, 0.4)';
});

scrollToTopBtn.addEventListener('mouseleave', function() {
    this.style.background = 'linear-gradient(135deg, #d4af37, #b8860b)';
    this.style.transform = 'scale(1) rotate(0deg)';
    this.style.boxShadow = '0 10px 30px rgba(212, 175, 55, 0.3)';
});

// Typing animation for hero section
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 30);
        }, 500);
    }
    
    // Page load animations
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.8s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // Show welcome message with delay
    setTimeout(() => {
        showNotification('🏗️ Welcome to Vettri Vinayaga Flyash Bricks! Building dreams since 2019.', 'info');
    }, 2500);
    
    // Add parallax effect to hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = heroSection.querySelector('.hero-content');
            if (parallax) {
                parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    }
});

// Advanced form field animations
document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(field => {
    field.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
        this.parentElement.style.boxShadow = '0 5px 20px rgba(39, 174, 96, 0.1)';
    });
    
    field.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
        this.parentElement.style.boxShadow = 'none';
    });
});

// Performance optimization - Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
window.addEventListener('scroll', debounce(() => {
    // Scroll-based animations can be added here
}, 100));

// Console welcome message
console.log('%c🏗️ Vettri Vinayaga Flyash Bricks & Hollow Bricks', 'font-size: 20px; font-weight: bold; color: #27ae60;');
console.log('%cBuilding dreams since 2019 | Eco-friendly construction materials', 'font-size: 14px; color: #2ecc71;');
console.log('%c📍 53VR+M4, Keerambur Medu, Tamil Nadu 637207', 'font-size: 12px; color: #7f8c8d;');
