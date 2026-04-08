/* ============================================
   NXR Group — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --------------------------------------------------
  // 1. NAVBAR: shadow on scroll + active link tracking
  // --------------------------------------------------
  const navbar   = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.navbar__links a, .navbar__mobile a:not(.btn)');
  const sections = document.querySelectorAll('section[id]');

  const introScreen = document.getElementById('intro');

  const onScroll = () => {
    // Transparent navbar over intro screen, solid once past it
    const introHeight = introScreen ? introScreen.offsetHeight : 0;
    const pastIntro   = window.scrollY > introHeight - 80;
    navbar.classList.toggle('navbar--transparent', !pastIntro && !!introScreen);
    navbar.classList.toggle('scrolled', pastIntro && window.scrollY > introHeight - 20);

    // Active nav link tracking via scroll position
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Run on load

  // --------------------------------------------------
  // 2. HAMBURGER MENU toggle
  // --------------------------------------------------
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    hamburger.setAttribute('aria-label', isOpen ? 'Sulje valikko' : 'Avaa valikko');
  });

  // Close mobile menu when a link is clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'Avaa valikko');
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!navbar.contains(e.target)) {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  // --------------------------------------------------
  // 3. SMOOTH SCROLL for all anchor links
  // --------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const navbarHeight = navbar.offsetHeight;
      const targetTop    = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    });
  });

  // --------------------------------------------------
  // 4. SCROLL REVEAL via Intersection Observer
  // --------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // animate once
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // --------------------------------------------------
  // 5. CONTACT FORM validation
  // --------------------------------------------------
  const form = document.getElementById('contact-form');
  if (!form) return;

  const formSuccess = document.getElementById('form-success');

  // Helper: show/clear error on a field group
  const setError = (groupId, show) => {
    const group = document.getElementById(groupId);
    const error = document.getElementById(`error-${groupId.replace('group-', '')}`);
    if (!group || !error) return;
    group.classList.toggle('has-error', show);
    error.style.display = show ? 'block' : 'none';
  };

  const validateForm = () => {
    let valid = true;

    // Nimi
    const nimi = form.querySelector('#nimi');
    const nimiOk = nimi.value.trim().length >= 2;
    setError('group-nimi', !nimiOk);
    if (!nimiOk) valid = false;

    // Puhelin
    const puhelin = form.querySelector('#puhelin');
    const puhelinOk = /^\+?[\d\s\-]{6,}$/.test(puhelin.value.trim());
    setError('group-puhelin', !puhelinOk);
    if (!puhelinOk) valid = false;

    // Sähköposti
    const email = form.querySelector('#email');
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
    setError('group-email', !emailOk);
    if (!emailOk) valid = false;

    // Viesti
    const viesti = form.querySelector('#viesti');
    const viestiOk = viesti.value.trim().length >= 5;
    setError('group-viesti', !viestiOk);
    if (!viestiOk) valid = false;

    // GDPR checkbox
    const gdpr = form.querySelector('#gdpr');
    const gdprError = document.getElementById('error-gdpr');
    const gdprOk = gdpr.checked;
    gdprError.style.display = gdprOk ? 'none' : 'block';
    if (!gdprOk) valid = false;

    return valid;
  };

  // Live validation on blur
  ['nimi', 'puhelin', 'email', 'viesti'].forEach(fieldId => {
    const field = form.querySelector(`#${fieldId}`);
    if (!field) return;
    field.addEventListener('blur', () => {
      // Re-run validation silently for just this field
      const groupId = `group-${fieldId}`;
      if (fieldId === 'nimi') {
        setError(groupId, field.value.trim().length < 2);
      } else if (fieldId === 'puhelin') {
        setError(groupId, !/^\+?[\d\s\-]{6,}$/.test(field.value.trim()));
      } else if (fieldId === 'email') {
        setError(groupId, !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim()));
      } else if (fieldId === 'viesti') {
        setError(groupId, field.value.trim().length < 5);
      }
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    if (!validateForm()) return;

    // Simulate successful submission (no backend)
    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Lähetetään...';

    setTimeout(() => {
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = `Lähetä viesti <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/></svg>`;
      formSuccess.classList.add('show');
      formSuccess.focus();

      // Hide success after 8s
      setTimeout(() => formSuccess.classList.remove('show'), 8000);
    }, 900);
  });

});
