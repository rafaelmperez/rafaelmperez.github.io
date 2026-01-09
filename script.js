javascript// ==========================================
// PORTFOLIO RAFAEL M. PÉREZ - JAVASCRIPT
// Performance optimizado | Accesibilidad
// ==========================================

'use strict';

// ===== NAVBAR STICKY ACTIVE STATE =====
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function activateNavOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        correspondingLink?.classList.add('active');
      } else {
        correspondingLink?.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', activateNavOnScroll, { passive: true });
});

// ===== BACK TO TOP BUTTON =====
document.addEventListener('DOMContentLoaded', function() {
  const backToTopBtn = document.getElementById('backToTop');

  if (backToTopBtn) {
    function toggleBackToTop() {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    window.addEventListener('scroll', toggleBackToTop, { passive: true });

    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Accesibilidad: permitir activación con Enter/Space
    backToTopBtn.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    });
  }
});

// ===== FORMULARIO CONTACTO =====
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      const submitBtn = this.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.innerHTML = '<strong>Enviando...</strong> <i class="fa-solid fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;
      }
    });
  }
});

// ===== SMOOTH SCROLL PARA ANCHORS (CON FALLBACK) =====
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.
