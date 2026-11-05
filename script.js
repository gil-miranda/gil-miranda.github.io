// Progressive enhancements only. Page works fully without JavaScript.
document.getElementById('year').textContent = String(new Date().getFullYear());

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    }
  }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
}
