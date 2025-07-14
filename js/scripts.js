// ==========================
// INICIALIZAÇÕES GERAIS
// ==========================
lucide.createIcons();
gsap.registerPlugin(ScrollTrigger);


// ==========================
// MENU MOBILE (NAVBAR TOGGLE)
// ==========================
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}


// ==========================
// ANIMAÇÕES GSAP
// ==========================

// Hero section
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

// Features
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

// Testimonials
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

// Pricing
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


// ==========================
// TOGGLE DE VISUALIZAÇÃO DE SENHA
// ==========================
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

if (togglePassword && passwordInput) {
  togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    const icon = this.querySelector('i');
    if (icon) {
      icon.setAttribute('data-lucide', type === 'password' ? 'eye' : 'eye-off');
      lucide.createIcons();
    }
  });
}


// ==========================
// FORMULÁRIO DE REGISTRO
// ==========================
const registerForm = document.getElementById('registerForm');

if (registerForm) {
  registerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name')?.value;
    const email = document.getElementById('email')?.value;
    const company = document.getElementById('company')?.value;
    const password = document.getElementById('password')?.value;
    const confirmPassword = document.getElementById('confirmPassword')?.value;
    const terms = document.getElementById('terms')?.checked;

    if (!name || !email || !company || !password || !confirmPassword) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (password !== confirmPassword) {
      alert('As senhas não coincidem.');
      return;
    }

    if (password.length < 8) {
      alert('A senha deve ter pelo menos 8 caracteres.');
      return;
    }

    if (!terms) {
      alert('Você deve concordar com os termos de serviço.');
      return;
    }

    const submitButton = this.querySelector('button[type="submit"]');
    submitButton.disabled = true;

    setTimeout(() => {
      alert('Conta criada com sucesso! Redirecionando para o Login...');
      window.location.href = 'login.html';
    }, 2000);
  });
}


// ==========================
// VALIDAÇÃO DE SENHA EM TEMPO REAL
// ==========================
const confirmPasswordInput = document.getElementById('confirmPassword');

if (confirmPasswordInput) {
  confirmPasswordInput.addEventListener('input', function () {
    const password = document.getElementById('password')?.value;
    const confirmPassword = this.value;

    if (confirmPassword && password !== confirmPassword) {
      this.classList.add('border-red-300');
      this.classList.remove('border-gray-300');
    } else {
      this.classList.remove('border-red-300');
      this.classList.add('border-gray-300');
    }
  });
}


// ==========================
// SIDEBAR RESPONSIVO
// ==========================
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const mobileOverlay = document.getElementById('mobile-overlay');

let sidebarOpen = window.innerWidth >= 768;

function updateSidebarState() {
  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    if (sidebarOpen) {
      sidebar.classList.remove('sidebar-collapsed');
      sidebar.classList.add('sidebar-open');
      mobileOverlay.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    } else {
      sidebar.classList.remove('sidebar-open');
      sidebar.classList.add('sidebar-collapsed');
      mobileOverlay.classList.add('hidden');
      document.body.style.overflow = '';
    }
  } else {
    mobileOverlay.classList.add('hidden');
    document.body.style.overflow = '';

    if (sidebarOpen) {
      sidebar.classList.remove('sidebar-collapsed');
      sidebar.classList.add('sidebar-open');
    } else {
      sidebar.classList.remove('sidebar-open');
      sidebar.classList.add('sidebar-collapsed');
    }
  }
}

function toggleSidebar() {
  sidebarOpen = !sidebarOpen;
  updateSidebarState();
}

if (sidebarToggle && sidebar) {
  sidebarToggle.addEventListener('click', toggleSidebar);
}

if (mobileOverlay) {
  mobileOverlay.addEventListener('click', () => {
    if (sidebarOpen && window.innerWidth < 768) {
      toggleSidebar();
    }
  });
}

window.addEventListener('resize', () => {
  const wasOpen = sidebarOpen;
  sidebarOpen = window.innerWidth >= 768 ? wasOpen : document.body.style.overflow === 'hidden';
  updateSidebarState();
});

updateSidebarState();


// ==========================
// ACORDEÃO DA SIDEBAR
// ==========================
document.querySelectorAll('.collapsible-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const section = trigger.closest('.collapsible-section');
    const content = section.querySelector('.collapsible-content');
    const chevron = trigger.querySelector('[data-lucide="chevron-down"]');

    if (content.classList.contains('open')) {
      content.classList.remove('open');
      chevron.classList.remove('rotate-180');
    } else {
      document.querySelectorAll('.collapsible-content.open').forEach(openContent => {
        if (openContent !== content) {
          openContent.classList.remove('open');
          const otherChevron = openContent.closest('.collapsible-section')?.querySelector('[data-lucide="chevron-down"]');
          otherChevron?.classList.remove('rotate-180');
        }
      });

      content.classList.add('open');
      chevron.classList.add('rotate-180');
    }
  });
});


// ==========================
// SCROLL LOCK NO MOBILE
// ==========================
document.addEventListener('touchmove', function (e) {
  if (
    window.innerWidth < 768 &&
    sidebarOpen &&
    !sidebar.contains(e.target) &&
    !mobileOverlay.contains(e.target)
  ) {
    e.preventDefault();
  }
}, { passive: false });


// ==========================
// FECHAR SIDEBAR AO CLICAR EM LINK (MOBILE)
// ==========================
document.querySelectorAll('aside a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768 && sidebarOpen) {
      toggleSidebar();
    }
  });
});
