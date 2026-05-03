document.addEventListener('DOMContentLoaded', () => {
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0
    });

    document.querySelectorAll('.slide-up').forEach(el => scrollObserver.observe(el));

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

(function () {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');

    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    document.head.appendChild(link);

    const N = 6, R = 12, CX = 16, CY = 16;

    function draw(angle) {
        ctx.clearRect(0, 0, 32, 32);
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, 32, 32);

        const step = (Math.PI * 2) / N;
        for (let i = 0; i < N; i++) {
            const a = angle + i * step;
            ctx.beginPath();
            ctx.moveTo(CX, CY);
            ctx.arc(CX, CY, R, a, a + step * 0.72);
            ctx.closePath();
            ctx.fillStyle = '#89CC04';
            ctx.fill();
        }

        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(CX, CY, 4, 0, Math.PI * 2);
        ctx.fill();

        link.href = canvas.toDataURL('image/png');
    }

    function loop(ts) {
        draw((ts / 3000) * Math.PI * 2);
        requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);
})();
