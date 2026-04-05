/* ============================================================
   VETTRI VINAYAGA BRICKS — INDUSTRY-LEVEL JAVASCRIPT
   ============================================================ */

'use strict';

// ============================================================
// PAGE LOADER
// ============================================================
window.addEventListener('load', () => {
    const loader = document.getElementById('page-loader');
    setTimeout(() => {
        loader.classList.add('hidden');
        initAnimations();
    }, 1800);
});

// ============================================================
// CUSTOM CURSOR (Desktop only)
// ============================================================
(function initCursor() {
    if (window.matchMedia('(pointer: fine)').matches) {
        const cursor = document.getElementById('cursor');
        const follower = document.getElementById('cursor-follower');
        let mouseX = -100, mouseY = -100;
        let followerX = -100, followerY = -100;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
        });

        function animateFollower() {
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;
            follower.style.left = followerX + 'px';
            follower.style.top = followerY + 'px';
            requestAnimationFrame(animateFollower);
        }
        animateFollower();

        document.querySelectorAll('a, button, .btn, .info-card, .feature-card, .product-card').forEach(el => {
            el.addEventListener('mouseenter', () => {
                follower.style.width = '60px';
                follower.style.height = '60px';
                follower.style.opacity = '0.6';
            });
            el.addEventListener('mouseleave', () => {
                follower.style.width = '36px';
                follower.style.height = '36px';
                follower.style.opacity = '1';
            });
        });
    }
})();

// ============================================================
// NAVBAR: Scroll + Active + Mobile
// ============================================================
(function initNavbar() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect
    let lastY = 0;
    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        navbar.classList.toggle('scrolled', y > 60);
        lastY = y;
    }, { passive: true });

    // Mobile toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    function closeMobileMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }

    navLinks.forEach(link => link.addEventListener('click', closeMobileMenu));
    navMenu.addEventListener('click', (e) => { if (e.target === navMenu) closeMobileMenu(); });

    // Active section highlight
    const sections = document.querySelectorAll('section[id]');
    const observerNav = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('data-section') === entry.target.id);
                });
            }
        });
    }, { threshold: 0.4 });
    sections.forEach(s => observerNav.observe(s));
})();

// ============================================================
// SMOOTH SCROLL
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// ============================================================
// REVEAL ANIMATIONS (Intersection Observer)
// ============================================================
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                    // Animate spec bars when product cards appear
                    const bars = entry.target.querySelectorAll('.spec-fill');
                    bars.forEach(bar => {
                        const targetW = bar.style.width;
                        bar.style.width = '0';
                        setTimeout(() => { bar.style.width = targetW; }, 300);
                    });
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    // Apply staggered delay to sibling groups
    const revealGroups = [
        '.features-grid .feature-card',
        '.products-grid .product-card',
        '.stats-grid .stat-card',
        '.testimonials-grid .testimonial-card',
        '.trust-bar-inner .trust-item',
        '.about-pillars .pillar',
    ];
    revealGroups.forEach(selector => {
        document.querySelectorAll(selector).forEach((el, i) => {
            el.dataset.delay = i * 100;
        });
    });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ============================================================
// HERO PARTICLES
// ============================================================
(function initParticles() {
    const container = document.getElementById('hero-particles');
    if (!container) return;

    function createParticle() {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 4 + 1;
        const duration = Math.random() * 15 + 10;
        const left = Math.random() * 100;
        p.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${left}%;
            bottom: 0;
            opacity: 0;
            animation-duration: ${duration}s;
            animation-delay: ${Math.random() * 10}s;
        `;
        container.appendChild(p);
        setTimeout(() => p.remove(), (duration + 10) * 1000);
    }

    // Create initial particles
    for (let i = 0; i < 20; i++) createParticle();
    // Keep generating
    setInterval(createParticle, 1200);
})();

// ============================================================
// HERO STAT COUNTERS
// ============================================================
(function initHeroCounters() {
    const stats = document.querySelectorAll('.hero-stat-number[data-target]');
    let started = false;

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !started) {
            started = true;
            stats.forEach(stat => {
                animateCounter(stat, parseInt(stat.dataset.target), 1800);
            });
        }
    });

    const hero = document.querySelector('.hero');
    if (hero) observer.observe(hero);
})();

// ============================================================
// SECTION STAT COUNTERS
// ============================================================
(function initCounters() {
    const counters = document.querySelectorAll('.counter[data-target]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target);
                animateCounter(el, target, 2000);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(c => observer.observe(c));
})();

function animateCounter(el, target, duration) {
    const start = performance.now();
    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        let current = Math.floor(ease * target);

        // Format large numbers
        if (target >= 1000000) {
            el.textContent = (current / 1000000).toFixed(0);
        } else if (target >= 1000) {
            el.textContent = current.toLocaleString('en-IN');
        } else {
            el.textContent = current;
        }

        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

// ============================================================
// SCROLL TO TOP BUTTON
// ============================================================
(function initScrollTop() {
    const btn = document.getElementById('scroll-top');
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

// ============================================================
// TOAST NOTIFICATION SYSTEM
// ============================================================
function showToast(message, type = 'info', duration = 5000) {
    const container = document.getElementById('toast-container');
    const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${icons[type] || icons.info}</span>
        <span class="toast-msg">${message}</span>
        <button class="toast-close" aria-label="Close">×</button>
    `;

    function removeToast() {
        toast.classList.add('hiding');
        setTimeout(() => toast.remove(), 300);
    }

    toast.querySelector('.toast-close').addEventListener('click', removeToast);
    container.appendChild(toast);

    if (duration > 0) setTimeout(removeToast, duration);
    return toast;
}

// ============================================================
// QUOTE FORM
// ============================================================
(function initForm() {
    const form = document.getElementById('quote-form');
    if (!form) return;

    const submitBtn = document.getElementById('submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');

    // Real-time validation
    const validators = {
        name: (v) => v.trim().length >= 2 ? '' : 'Please enter your full name',
        phone: (v) => {
            const clean = v.replace(/\D/g, '');
            return /^[6-9][0-9]{9}$/.test(clean) ? '' : 'Enter valid 10-digit mobile number';
        },
        email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Enter a valid email address',
        product: (v) => v ? '' : 'Please select a product type',
        quantity: (v) => parseInt(v) >= 100 ? '' : 'Minimum quantity is 100 pieces',
        address: (v) => v.trim().length >= 10 ? '' : 'Please enter a complete delivery address',
    };

    function showFieldError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const error = document.getElementById(`${fieldId}-error`);
        if (!field) return;
        field.classList.toggle('error', !!message);
        field.classList.toggle('success', !message && field.value);
        if (error) error.textContent = message || '';
    }

    // Live validation on blur
    Object.keys(validators).forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (!field) return;
        field.addEventListener('blur', () => {
            showFieldError(fieldId, validators[fieldId](field.value));
        });
        field.addEventListener('input', () => {
            if (field.classList.contains('error')) {
                showFieldError(fieldId, validators[fieldId](field.value));
            }
        });
    });

    // Phone: only allow numbers, max 10
    const phoneField = document.getElementById('phone');
    if (phoneField) {
        phoneField.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
        });
    }

    // Submit
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(this));
        let hasError = false;

        // Validate all fields
        Object.keys(validators).forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (!field) return;
            const error = validators[fieldId](field.value);
            showFieldError(fieldId, error);
            if (error) hasError = true;
        });

        if (hasError) {
            showToast('Please fix the errors in the form before submitting.', 'error');
            return;
        }

        // Button loading state
        btnText.style.display = 'none';
        btnLoader.style.display = 'flex';
        submitBtn.disabled = true;

        // Simulate processing delay
        setTimeout(() => {
            // Build WhatsApp message
            const productLabels = {
                flyash: 'Flyash Bricks',
                hollow: 'Hollow Bricks',
                solid: 'Premium Solid Bricks',
                mixed: 'Mixed / Multiple Products'
            };

            const msg = [
                '🏗️ *New Quote Request — Vettri Vinayaga Bricks*',
                '',
                `👤 *Name:* ${data.name}`,
                `📞 *Phone:* ${data.phone}`,
                `📧 *Email:* ${data.email}`,
                `🧱 *Product:* ${productLabels[data.product] || data.product}`,
                `📦 *Quantity:* ${parseInt(data.quantity).toLocaleString('en-IN')} pieces`,
                `📍 *Delivery:* ${data.address}`,
                `📝 *Notes:* ${data.message || 'None'}`,
                '',
                '— Sent via Website Quote Form'
            ].join('\n');

            const waUrl = `https://wa.me/919486090967?text=${encodeURIComponent(msg)}`;
            window.open(waUrl, '_blank', 'noopener');

            // Reset form
            form.reset();
            Object.keys(validators).forEach(fieldId => {
                const field = document.getElementById(fieldId);
                const error = document.getElementById(`${fieldId}-error`);
                if (field) { field.classList.remove('error', 'success'); }
                if (error) error.textContent = '';
            });

            // Show success
            showToast('🎉 Quote request sent! We\'ll contact you within 2 hours.', 'success', 6000);

            // Reset button
            btnText.style.display = '';
            btnLoader.style.display = 'none';
            submitBtn.disabled = false;
        }, 1600);
    });
})();

// ============================================================
// SPEC BARS — animate when product cards enter viewport
// ============================================================
(function initSpecBars() {
    const cards = document.querySelectorAll('.product-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.spec-fill').forEach((bar, i) => {
                    const target = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.transition = 'width 1s cubic-bezier(0.4,0,0.2,1)';
                        bar.style.width = target;
                    }, 200 + i * 120);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    cards.forEach(c => observer.observe(c));
})();

// ============================================================
// WELCOME TOAST (on first load)
// ============================================================
window.addEventListener('load', () => {
    setTimeout(() => {
        showToast('🏗️ Welcome! Explore our premium brick range or get a free quote.', 'info', 5000);
    }, 2500);
});

// ============================================================
// CONSOLE BRANDING
// ============================================================
console.log('%c⬡ Vettri Vinayaga Bricks', 'font-size:24px;font-weight:900;color:#D4A017;');
console.log('%cPremium Flyash & Hollow Bricks — Namakkal, Tamil Nadu', 'font-size:13px;color:#627080;');
console.log('%c+91 94860 90967 | info@vetrivinayagabricks.com', 'font-size:12px;color:#627080;');
