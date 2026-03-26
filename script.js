/* ─── Scroll reveal ─── */
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
    });
}, { threshold: 0.1 });
reveals.forEach(r => observer.observe(r));

/* ─── Formulaire (feedback visuel) ─── */
document.getElementById('submitBtn').addEventListener('click', (e) => {
    e.preventDefault();
    const btn = e.target;
    btn.textContent = 'Message envoyé ✓';
    btn.style.background = 'var(--c3)';
    setTimeout(() => {
        btn.textContent = 'Envoyer le message →';
        btn.style.background = '';
    }, 3000);
});