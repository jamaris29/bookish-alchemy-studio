/* ============================================
   THE BESTSELLER BLUEPRINT — LANDING PAGE JS
   Popups, Social Proof, Animations, Forms
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ==================== PARTICLES ====================
  const particlesContainer = document.getElementById('particles');
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.setProperty('--duration', (6 + Math.random() * 8) + 's');
    particle.style.setProperty('--delay', (Math.random() * 10) + 's');
    particle.style.width = (2 + Math.random() * 4) + 'px';
    particle.style.height = particle.style.width;
    particlesContainer.appendChild(particle);
  }

  // ==================== NAVBAR SCROLL ====================
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // ==================== MOBILE MENU ====================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });

  // ==================== SCROLL REVEAL ====================
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  revealElements.forEach(el => revealObserver.observe(el));

  // ==================== COUNT-UP ANIMATION ====================
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        animateCount(el, target);
        countObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => countObserver.observe(el));

  function animateCount(el, target) {
    const duration = 2000;
    const start = performance.now();
    
    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = Math.round(eased * target);
      el.textContent = current.toLocaleString();
      
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
    
    requestAnimationFrame(update);
  }

  // ==================== WRITER COUNT ANIMATION ====================
  const writerCountEl = document.getElementById('writerCount');
  if (writerCountEl) {
    let baseCount = 2847;
    setInterval(() => {
      baseCount += Math.floor(Math.random() * 3);
      writerCountEl.textContent = baseCount.toLocaleString();
    }, 15000);
  }

  // ==================== MAILERLITE CONFIG ====================
  const MAILERLITE_API_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMDU0MWYzMDFkMzNmNjZiMDcxN2ZhMDFkMmZkODBkNzJhMGUyM2M4ODMyMTllZGIxNDk1YzNjYTY2NGRmZTM1OTgzZjgwODI0Mzg4NzNmOGYiLCJpYXQiOjE3NzM5NTY0NDkuMDg0NDAxLCJuYmYiOjE3NzM5NTY0NDkuMDg0NDAzLCJleHAiOjQ5Mjk2MzAwNDkuMDgwNjY5LCJzdWIiOiIyMjI2NzkyIiwic2NvcGVzIjpbXX0.KsnH7XQhN1FOycjmrISYem72-TaTzBOAPZIWtS220n05rhHgC_szu1eOk5-3vRabSW9rLn9Vb0FV1x4wBJwDK0va9MU6tHcA1V9bAXjfJubKRmSgGQPtjay4fdMyTKa1YodU0nobU7rlby4_51Ouf7VqlvWc0eI2WJfomwrSZt3AEZMwOAwyw0TqnXuX3uma8Cv5xTtFJv6zb-fsS69wRa3Iz11mpMDwJrS78F8fVej8eVup6J3y1JM5LEFmmB8VNxuIG4dUqhZ8ObzByIhyRsWwZ9zOMLr0Vh6dwveXw9cKfSEED5Mh7aB7hhxlHS_zIzNWNu9v4zT7AGCevEgg0hdimHbmVe0ksYd1GQEGUbWh7dpWsqk1ma_CpfHrfb4mQ7zhdhmu3IjcpjtdCk9u2SfDTvPlmWistzuq0UZeyqel4oQWJsCVCqRncFXbmAXE22-77M_7NNb0dqz-aonbvjYOutAVP5HnhvCdFpILIG8xsGaSJRFqjKx3TA0Yt-lgYnQCbShu9b4ue9A4ukLnsagWgUlaVLYhzPHLM8zYfzqa874Vf0g0cgblI7DINdxGqCUZxUmsDktp9B8LsTgz0mpr_KzYP-gwzBf5wIptE_gjqLfqnZp-dVlbZ3wJJRjOvPiKl3anG81kLVmH9pwNcqzL67lfudXyJcxLdRPhw3k';

  // ==================== EMAIL FORMS ====================
  const forms = ['heroForm', 'ctaForm', 'popupForm'];

  forms.forEach(formId => {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      const submitBtn = form.querySelector('button[type="submit"]');
      const email = emailInput.value.trim();

      if (!isValidEmail(email)) {
        shakeElement(emailInput);
        return;
      }

      // Disable button during submission
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
      }

      const success = await saveEmail(email);

      // Re-enable button
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.style.opacity = '';
      }

      if (success) {
        emailInput.value = '';

        // Close popup if open
        const popup = document.getElementById('emailPopup');
        if (popup && popup.classList.contains('active')) {
          popup.classList.remove('active');
        }

        // Show success
        showSuccess();
      }
    });
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function shakeElement(el) {
    el.style.animation = 'shake 0.5s';
    el.style.borderColor = '#ef4444';
    setTimeout(() => {
      el.style.animation = '';
      el.style.borderColor = '';
    }, 500);
  }

  async function saveEmail(email) {
    // Save locally
    const emails = JSON.parse(localStorage.getItem('bb_emails') || '[]');
    if (!emails.includes(email)) {
      emails.push(email);
      localStorage.setItem('bb_emails', JSON.stringify(emails));
    }

    // Send to MailerLite silently
    try {
      const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${MAILERLITE_API_TOKEN}`
        },
        body: JSON.stringify({ email })
      });

      if (response.ok || response.status === 409) {
        // 409 = already subscribed -> still success
        console.log('Suscriptor registrado en MailerLite:', email);
        return true;
      } else {
        const data = await response.json().catch(() => ({}));
        console.warn('MailerLite response:', response.status, data);
        return true; // graceful degradation
      }
    } catch (err) {
      // Network or CORS error - degrade silently
      console.warn('MailerLite fetch error (graceful):', err.message);
      return true;
    }
  }

  function showSuccess() {
    const toast = document.getElementById('successToast');
    toast.classList.add('active');
    setTimeout(() => toast.classList.remove('active'), 6000);
  }

  // ==================== EMAIL POPUP ====================
  const emailPopup = document.getElementById('emailPopup');
  const popupClose = document.getElementById('popupClose');
  let popupShown = false;
  
  // Show after 8 seconds if not already submitted
  setTimeout(() => {
    if (!popupShown && !hasSubmittedEmail()) {
      emailPopup.classList.add('active');
      popupShown = true;
    }
  }, 8000);

  // Also show on exit intent (mouse leaves viewport)
  document.addEventListener('mouseleave', (e) => {
    if (e.clientY < 10 && !popupShown && !hasSubmittedEmail()) {
      emailPopup.classList.add('active');
      popupShown = true;
    }
  });

  popupClose.addEventListener('click', () => {
    emailPopup.classList.remove('active');
  });

  emailPopup.addEventListener('click', (e) => {
    if (e.target === emailPopup) {
      emailPopup.classList.remove('active');
    }
  });

  function hasSubmittedEmail() {
    const emails = JSON.parse(localStorage.getItem('bb_emails') || '[]');
    return emails.length > 0;
  }

  // ==================== SOCIAL PROOF TOAST ====================
  const socialProofToast = document.getElementById('socialProofToast');
  const toastClose = document.getElementById('toastClose');
  const toastAvatar = document.getElementById('toastAvatar');
  const toastName = document.getElementById('toastName');
  const toastAction = document.getElementById('toastAction');
  const toastTime = document.getElementById('toastTime');

  const socialProofData = [
    { name: 'Maria G.', city: 'Madrid', initials: 'MG' },
    { name: 'Carlos R.', city: 'Buenos Aires', initials: 'CR' },
    { name: 'Ana L.', city: 'Mexico DF', initials: 'AL' },
    { name: 'Pedro S.', city: 'Barcelona', initials: 'PS' },
    { name: 'Laura M.', city: 'Bogota', initials: 'LM' },
    { name: 'Javier T.', city: 'Santiago', initials: 'JT' },
    { name: 'Isabella F.', city: 'Lima', initials: 'IF' },
    { name: 'Diego H.', city: 'Medellin', initials: 'DH' },
    { name: 'Valentina C.', city: 'Montevideo', initials: 'VC' },
    { name: 'Roberto A.', city: 'San Jose', initials: 'RA' },
    { name: 'Camila P.', city: 'Quito', initials: 'CP' },
    { name: 'Andres V.', city: 'Caracas', initials: 'AV' },
    { name: 'Sofia N.', city: 'Guatemala', initials: 'SN' },
    { name: 'Martin B.', city: 'Sevilla', initials: 'MB' },
    { name: 'Lucia D.', city: 'Panama', initials: 'LD' },
    { name: 'Fernando W.', city: 'Valencia', initials: 'FW' },
    { name: 'Elena K.', city: 'Miami', initials: 'EK' },
    { name: 'Oscar Z.', city: 'Cordoba', initials: 'OZ' },
  ];

  const actions = [
    'acaba de obtener Premium',
    'se unio al Blueprint',
    'obtuvo acceso al roadmap',
    'acaba de registrarse',
    'desbloqueo Premium',
  ];

  const timeMessages = [
    'hace 1 minuto',
    'hace 2 minutos',
    'hace 3 minutos',
    'hace 5 minutos',
    'hace un momento',
  ];

  const gradients = [
    'linear-gradient(135deg, #0d9488, #14b8a6)',
    'linear-gradient(135deg, #f59e0b, #fbbf24)',
    'linear-gradient(135deg, #8b5cf6, #a78bfa)',
    'linear-gradient(135deg, #ec4899, #f472b6)',
    'linear-gradient(135deg, #3b82f6, #60a5fa)',
  ];

  function showSocialProof() {
    const person = socialProofData[Math.floor(Math.random() * socialProofData.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];
    const time = timeMessages[Math.floor(Math.random() * timeMessages.length)];
    const gradient = gradients[Math.floor(Math.random() * gradients.length)];

    toastAvatar.textContent = person.initials;
    toastAvatar.style.background = gradient;
    toastName.textContent = `${person.name} de ${person.city}`;
    toastAction.textContent = action;
    toastTime.textContent = time;

    socialProofToast.classList.add('active');

    setTimeout(() => {
      socialProofToast.classList.remove('active');
    }, 6000);
  }

  toastClose.addEventListener('click', () => {
    socialProofToast.classList.remove('active');
  });

  // First toast after 15 seconds, then every 45-60 seconds
  setTimeout(() => {
    showSocialProof();
    setInterval(() => {
      showSocialProof();
    }, 45000 + Math.random() * 15000);
  }, 15000);

  // ==================== SHAKE ANIMATION (inline) ====================
  const shakeStyle = document.createElement('style');
  shakeStyle.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      10%, 50%, 90% { transform: translateX(-4px); }
      30%, 70% { transform: translateX(4px); }
    }
  `;
  document.head.appendChild(shakeStyle);

  // ==================== SMOOTH SCROLL FOR ALL ANCHOR LINKS ====================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
