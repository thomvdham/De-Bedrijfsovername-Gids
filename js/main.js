// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('scrolled', window.scrollY > 50);
    const cta = document.getElementById('stickyCta');
    if (cta) cta.classList.toggle('visible', window.scrollY > 400);
});

// Mobile nav
document.querySelector('.mobile-toggle')?.addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
});

// FAQ
function toggleFaq(btn) {
    const item = btn.parentElement;
    const wasActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    if (!wasActive) item.classList.add('active');
}

// Modal
function openModal() {
    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
    document.getElementById('formContainer').style.display = 'block';
    document.getElementById('formSuccess').style.display = 'none';
}
function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

// Form submission
function submitForm(e) {
    e.preventDefault();
    const d = {
        naam: document.getElementById('naam').value,
        bedrijf: document.getElementById('bedrijf').value,
        email: document.getElementById('email').value,
        telefoon: document.getElementById('telefoon').value,
        onderwerp: document.getElementById('onderwerp').value,
        toelichting: document.getElementById('toelichting').value,
        timestamp: new Date().toISOString()
    };
    console.log('Lead:', d);
    // In production: fetch('/api/leads', { method: 'POST', body: JSON.stringify(d) });
    document.getElementById('formContainer').style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
    document.getElementById('contactForm').reset();
    setTimeout(closeModal, 3500);
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// Scroll reveal
const obs = new IntersectionObserver(e => {
    e.forEach(x => { if (x.isIntersecting) x.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
