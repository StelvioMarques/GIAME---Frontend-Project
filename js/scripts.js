
// Tailwind config 
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#154A99',
                secondary: '#031D42',
                accent: '#154A99'
            }
        }
    }
}


// Inicialização dos ícones Lucide
lucide.createIcons();

// GSAP Animações
gsap.registerPlugin(ScrollTrigger);

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Hero animations
gsap.from('.hero-gradient h1', {
    duration: 1,
    y: 50,
    opacity: 1,
    ease: 'power3.out'
});

gsap.from('.hero-gradient p', {
    duration: 1,
    y: 30,
    opacity: 1,
    delay: 0.3,
    ease: 'power3.out'
});

gsap.from('.hero-gradient .flex', {
    duration: 1,
    y: 30,
    opacity: 1,
    delay: 0.6,
    ease: 'power3.out'
});

// Feature cards animation
gsap.from('.feature-card', {
    scrollTrigger: {
        trigger: '#features',
        start: 'top 80%'
    },
    duration: 0.8,
    y: 50,
    opacity: 1,
    stagger: 0.2,
    ease: 'power3.out'
});

// Testimonials animation
gsap.from('.testimonial-card', {
    scrollTrigger: {
        trigger: '#testimonials',
        start: 'top 80%'
    },
    duration: 0.8,
    y: 50,
    opacity: 1,
    stagger: 0.2,
    ease: 'power3.out'
});

// Pricing cards animation
gsap.from('.pricing-card', {
    scrollTrigger: {
        trigger: '#pricing',
        start: 'top 80%'
    },
    duration: 0.8,
    y: 50,
    opacity: 1,
    stagger: 0.2,
    ease: 'power3.out'
});

