// ====================================
// MODERN PORTFOLIO - ANIMATIONS & INTERACTIONS
// ====================================

document.addEventListener('DOMContentLoaded', () => {
    
    // ====================================
    // INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
    // ====================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: unobserve after animation to improve performance
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all reveal elements
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    revealElements.forEach(el => observer.observe(el));
    
    
    // ====================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ====================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
                
                // Update URL without jumping
                if (history.pushState) {
                    history.pushState(null, null, targetId);
                }
            }
        });
    });
    
    
    // ====================================
    // MAGNETIC BUTTON EFFECT
    // ====================================
    const magneticButtons = document.querySelectorAll('.magnetic');
    magneticButtons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            // Magnetic strength (adjust multiplier for stronger effect)
            button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.05)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = '';
        });
    });
    
    
    // ====================================
    // PROGRESS BAR ANIMATION ON SCROLL
    // ====================================
    const animateProgressBars = () => {
        const progressBars = document.querySelectorAll('.progress-fill');
        
        progressBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible && bar.style.width === '') {
                const targetWidth = bar.dataset.progress || '90';
                bar.style.width = targetWidth + '%';
            }
        });
    };
    
    // Initial check
    animateProgressBars();
    
    // Throttled scroll listener for performance
    let progressBarTimer;
    window.addEventListener('scroll', () => {
        if (progressBarTimer) clearTimeout(progressBarTimer);
        progressBarTimer = setTimeout(animateProgressBars, 50);
    });
    
    
    // ====================================
    // PARALLAX SCROLL EFFECT (Optional)
    // ====================================
    const parallaxElements = document.querySelectorAll('.parallax');
    
    const handleParallax = () => {
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(window.pageYOffset * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    };
    
    if (parallaxElements.length > 0) {
        let parallaxTimer;
        window.addEventListener('scroll', () => {
            if (parallaxTimer) cancelAnimationFrame(parallaxTimer);
            parallaxTimer = requestAnimationFrame(handleParallax);
        });
    }
    
    
    // ====================================
    // TYPING ANIMATION (Optional)
    // ====================================
    const typeEffect = (element, text, speed = 100) => {
        let i = 0;
        element.textContent = '';
        
        const type = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        };
        
        type();
    };
    
    // Usage: typeEffect(document.querySelector('.typed'), 'Full Stack Developer');
    const typedElements = document.querySelectorAll('[data-typed]');
    typedElements.forEach(element => {
        const text = element.dataset.typed;
        const speed = parseInt(element.dataset.speed) || 100;
        typeEffect(element, text, speed);
    });
    
    
    // ====================================
    // CURSOR TRAIL EFFECT (Optional - Advanced)
    // ====================================
    let cursorTrail = [];
    const maxTrailLength = 20;
    
    const createCursorTrail = (e) => {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = e.pageX + 'px';
        trail.style.top = e.pageY + 'px';
        document.body.appendChild(trail);
        
        cursorTrail.push(trail);
        
        setTimeout(() => {
            trail.style.opacity = '0';
            setTimeout(() => trail.remove(), 500);
        }, 100);
        
        if (cursorTrail.length > maxTrailLength) {
            const oldTrail = cursorTrail.shift();
            if (oldTrail && oldTrail.parentNode) {
                oldTrail.remove();
            }
        }
    };
    
    // Uncomment to enable cursor trail
    // document.addEventListener('mousemove', createCursorTrail);
    
    
    // ====================================
    // PARTICLE BACKGROUND (Optional)
    // ====================================
    const createParticles = (containerId, count = 50) => {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            container.appendChild(particle);
        }
    };
    
    // Usage: createParticles('particle-container', 30);
    
    
    // ====================================
    // THEME TOGGLE (Dark Mode)
    // ====================================
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            // Add rotation animation class
            themeToggle.classList.add('rotating');
            
            // Toggle dark mode with smooth transition
            body.classList.toggle('dark-mode');
            
            // Save preference
            const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
            localStorage.setItem('theme', theme);
            
            // Remove rotation class after animation completes
            setTimeout(() => {
                themeToggle.classList.remove('rotating');
            }, 600);
            
            // Optional: Announce to screen readers
            const mode = body.classList.contains('dark-mode') ? 'dark' : 'light';
            themeToggle.setAttribute('aria-label', `Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`);
        });
    }
    
    
    // ====================================
    // FORM VALIDATION (Contact Form)
    // ====================================
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email');
                return;
            }
            
            // Submit form (replace with your actual submission logic)
            console.log('Form submitted:', { name, email, message });
            alert('Message sent successfully!');
            contactForm.reset();
        });
    }
    
    
    // ====================================
    // LAZY LOAD IMAGES
    // ====================================
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
    
    
    // ====================================
    // NAVBAR SCROLL EFFECT
    // ====================================
    const navbar = document.querySelector('nav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add/remove scrolled class
        if (currentScroll > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll
        if (currentScroll > lastScroll && currentScroll > 300) {
            navbar?.classList.add('nav-hidden');
        } else {
            navbar?.classList.remove('nav-hidden');
        }
        
        lastScroll = currentScroll;
    });
    
    
    // ====================================
    // COUNTER ANIMATION
    // ====================================
    const animateCounter = (element, target, duration = 2000) => {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    };
    
    // Observe counters
    const counters = document.querySelectorAll('[data-counter]');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.counter);
                animateCounter(entry.target, target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
    
    
    // ====================================
    // PERFORMANCE OPTIMIZATION
    // ====================================
    
    // Add GPU acceleration hint to animated elements
    const animatedElements = document.querySelectorAll('.glass-card, .project-glass-card, .grid-item, .flex-item');
    animatedElements.forEach(element => {
        element.style.willChange = 'transform';
    });
    
    // Remove will-change after page load to save memory
    window.addEventListener('load', () => {
        setTimeout(() => {
            animatedElements.forEach(element => {
                element.style.willChange = 'auto';
            });
        }, 3000);
    });
    
    
    // ====================================
    // CONSOLE WELCOME MESSAGE
    // ====================================
    console.log('%c🚀 Portfolio Loaded Successfully!', 'font-size: 20px; color: #667eea; font-weight: bold;');
    console.log('%cBuilt with modern CSS & JavaScript', 'font-size: 14px; color: #764ba2;');
    
});
