// Main functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP if available
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }
    
    // Header scroll effect
    const header = document.querySelector('.header');
    const headerScrollEffect = () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', headerScrollEffect);
    headerScrollEffect(); // Run once at page load

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('.nav');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            nav.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('active') && 
            !nav.contains(e.target) && 
            !mobileMenuBtn.contains(e.target)) {
            nav.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });

    // Video Modal functionality
    const videoModal = document.querySelector('.video-modal');
    const videoPlayButtons = document.querySelectorAll('.play-button');
    const modalClose = document.querySelector('.modal-close');
    const videoIframe = document.querySelector('.video-container iframe');

    // Function to open video modal
    const openVideoModal = (videoId) => {
        if (!videoId || !videoModal) return;
        
        // Set the YouTube embed URL with autoplay enabled
        const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
        
        // Set iframe src
        videoIframe.src = videoUrl;
        
        // Show modal with animation
        videoModal.style.display = 'flex';
        setTimeout(() => {
            videoModal.classList.add('active');
        }, 10); // Small delay to ensure display:flex is applied first
        
        // Prevent body scrolling
        document.body.style.overflow = 'hidden';
    };

    // Function to close video modal
    const closeVideoModal = () => {
        if (!videoModal) return;
        
        // Hide modal with animation
        videoModal.classList.remove('active');
        
        // Wait for animation to finish before removing iframe src
        setTimeout(() => {
            // Stop video playback by removing src
            videoIframe.src = '';
            videoModal.style.display = 'none';
            
            // Re-enable body scrolling
            document.body.style.overflow = '';
        }, 300); // Match the transition time in CSS
    };

    // Add click event listeners to all play buttons
    videoPlayButtons.forEach(button => {
        button.addEventListener('click', () => {
            const videoId = button.getAttribute('data-video-id');
            if (videoId) {
                openVideoModal(videoId);
            }
        });
    });

    // Close modal when clicking the close button
    if (modalClose) {
        modalClose.addEventListener('click', closeVideoModal);
    }

    // Close modal when clicking outside the video
    if (videoModal) {
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                closeVideoModal();
            }
        });
    }

    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal && videoModal.classList.contains('active')) {
            closeVideoModal();
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Close mobile menu if open
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                    document.body.classList.remove('menu-open');
                }
                
                window.scrollTo({
                    top: target.offsetTop - 100, // Offset for header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Number counter animation
    const animateNumbers = () => {
        const elements = document.querySelectorAll('.stat-value');
        
        elements.forEach(element => {
            if (element.classList.contains('animated')) return;
            
            const value = element.textContent;
            if (!value.match(/^[\d,]+$/)) return; // Only animate numbers
            
            const target = parseInt(value.replace(/,/g, ''));
            let start = 0;
            const duration = 2000;
            const step = timestamp => {
                if (!start) start = timestamp;
                const progress = Math.min((timestamp - start) / duration, 1);
                const current = Math.floor(progress * target);
                element.textContent = current.toLocaleString();
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    element.classList.add('animated');
                }
            };
            
            window.requestAnimationFrame(step);
        });
    };

    // Initialize animations
    if (typeof gsap !== 'undefined') {
        // Hero animations
        gsap.from('.hero-title', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out'
        });
        
        gsap.from('.hero-subtitle', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: 0.2,
            ease: 'power3.out'
        });
        
        gsap.from('.hero-stats', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: 0.4,
            ease: 'power3.out',
            onComplete: animateNumbers
        });
        
        gsap.from('.hero-action', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: 0.6,
            ease: 'power3.out'
        });
        
        gsap.from('.featured-in', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: 0.8,
            ease: 'power3.out'
        });
        
        gsap.from('.hero-video', {
            opacity: 0,
            scale: 0.9,
            duration: 1,
            delay: 0.3,
            ease: 'power3.out'
        });
        
        // Scroll animations
        gsap.utils.toArray('.section-title').forEach(elem => {
            gsap.from(elem, {
                scrollTrigger: {
                    trigger: elem,
                    start: 'top 80%'
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: 'power3.out'
            });
        });
        
        gsap.utils.toArray('.section-subtitle').forEach(elem => {
            gsap.from(elem, {
                scrollTrigger: {
                    trigger: elem,
                    start: 'top 80%'
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 0.2,
                ease: 'power3.out'
            });
        });
        
        gsap.utils.toArray('.step').forEach((elem, index) => {
            gsap.from(elem, {
                scrollTrigger: {
                    trigger: elem,
                    start: 'top 80%'
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                delay: 0.2 * index,
                ease: 'power3.out'
            });
        });
        
        gsap.utils.toArray('.result-item').forEach((elem, index) => {
            gsap.from(elem, {
                scrollTrigger: {
                    trigger: elem,
                    start: 'top 80%'
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                delay: 0.2 * index,
                ease: 'power3.out'
            });
        });
        
        gsap.utils.toArray('.video-testimonial, .text-testimonial').forEach((elem, index) => {
            gsap.from(elem, {
                scrollTrigger: {
                    trigger: elem,
                    start: 'top 80%'
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                delay: 0.1 * index,
                ease: 'power3.out'
            });
        });
        
        // CTA section animation
        gsap.from('.cta-title', {
            scrollTrigger: {
                trigger: '.cta',
                start: 'top 80%'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out'
        });
        
        gsap.from('.cta-subtitle', {
            scrollTrigger: {
                trigger: '.cta',
                start: 'top 80%'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: 0.2,
            ease: 'power3.out'
        });
        
        gsap.from('.cta-actions', {
            scrollTrigger: {
                trigger: '.cta',
                start: 'top 80%'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: 0.4,
            ease: 'power3.out'
        });
    } else {
        // Fallback for browsers without GSAP
        document.querySelector('.hero-title').classList.add('fade-in');
        document.querySelector('.hero-subtitle').classList.add('fade-in');
        document.querySelector('.hero-stats').classList.add('fade-in');
        document.querySelector('.hero-action').classList.add('fade-in');
        document.querySelector('.hero-video').classList.add('fade-in');
        
        // Initialize number counter
        window.addEventListener('load', animateNumbers);
        
        // Add intersectionObserver for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                    
                    // If stats are visible, animate numbers
                    if (entry.target.classList.contains('stat-value')) {
                        animateNumbers();
                    }
                }
            });
        }, {
            threshold: 0.1
        });
        
        document.querySelectorAll('.section-title, .section-subtitle, .step, .result-item, .testimonial, .cta-title, .cta-subtitle, .cta-actions').forEach(elem => {
            observer.observe(elem);
        });
    }
});