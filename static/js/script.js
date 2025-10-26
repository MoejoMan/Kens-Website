const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});

window.addEventListener('scroll', () => {
  const heroTitle = document.querySelector('.hero-title');
  if (window.scrollY > 100) {
    heroTitle.classList.add('shrink');
  } else {
    heroTitle.classList.remove('shrink');
  }
});