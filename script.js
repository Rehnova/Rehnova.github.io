
        const navToggle = document.getElementById('nav-toggle');
        const navlist = document.getElementById('nav-list');
        const dropdowns = document.querySelectorAll('.dropdown');

        navToggle.addEventListener('click', () => {
            navlist.classList.toggle('active');
        });

        dropdowns.forEach(drop => {
            drop.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.stopPropagation();
                    drop.classList.toggle('open');
                }
            });
        });


        const slideElements = document.querySelectorAll('.slide-in-left, .slide-in-bottom, .slide-in-right');
        let hasAnimated = new WeakMap(); // Track animated elements

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (!hasAnimated.get(entry.target)) { // Check if not animated yet
                        entry.target.classList.add('visible');
                        hasAnimated.set(entry.target, true); // Mark as animated
                    }
                } else {
                    if (!hasAnimated.get(entry.target)) { // Only remove if not animated yet
                        entry.target.classList.remove('visible');
                    }
                }
            });
        }, {
            threshold: 0.2
        });

        document.addEventListener('DOMContentLoaded', () => {
            const track = document.getElementById('track');
            const cards = Array.from(track.children);
            cards.forEach(card => {
                observer.observe(card);
            });
        });


        document.addEventListener('DOMContentLoaded', () => {
            const track = document.getElementById('track');
            const cards = Array.from(track.children);
            const cardWidth = cards[0].offsetWidth + 30;
            cards.forEach(card => {
                const clone = card.cloneNode(true);
                track.appendChild(clone);
            });
            let position = 0;
            const animate = () => {
                position -= 2; // Adjust speed
                if (Math.abs(position) >= cardWidth * cards.length) {
                    position = 0; // Reset to start
                }
                track.style.transform = `translateX(${position}px)`;
                requestAnimationFrame(animate);
            };
            animate();
        });
        slideElements.forEach(el => observer.observe(el));

        // typewriter js
        var typed = new Typed("#typed", {
            strings: ["Web Developer", "Designer"],
            typeSpeed: 60,
            backSpeed: 40,
            loop: true,
        });
