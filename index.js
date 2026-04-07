document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const slideUpElements = document.querySelectorAll('.slide-up');
    slideUpElements.forEach(el => scrollObserver.observe(el));

    const forma = document.getElementById('kontakt-forma');
    if (forma) {
        forma.addEventListener('submit', (e) => {
            e.preventDefault();
            const ime = document.getElementById('ime').value.trim();
            const email = document.getElementById('email').value.trim();
            const poruka = document.getElementById('poruka').value.trim();

            const subject = encodeURIComponent(`Poruka od ${ime}`);
            const body = encodeURIComponent(`Ime: ${ime}\nEmail: ${email}\n\nPoruka:\n${poruka}`);
            window.location.href = `mailto:lukamatic14.03@icloud.com?subject=${subject}&body=${body}`;
        });
    }
});
