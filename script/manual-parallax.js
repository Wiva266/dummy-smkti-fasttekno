const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    const el = entry.target;
    const anim = el.dataset.animation || "fade-up";
    const dur = el.dataset.duration || "800";
    const delay = el.dataset.delay || "0";
    const once = el.dataset.once === "true";

    el.style.transitionDuration = `${dur}ms`;
    el.style.transitionDelay = `${delay}ms`;

    if (entry.isIntersecting) {
        el.classList.add(anim, 'show');
        el.classList.remove('hide');
        if (once) observer.unobserve(el);
    } else {
        if (!once) {
        el.classList.remove('show');
        el.classList.add('hide');
        }
    }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.parallax-item').forEach(el => {
    const anim = el.dataset.animation || "fade-up";
    el.classList.add(anim, 'hide');
    observer.observe(el);
});