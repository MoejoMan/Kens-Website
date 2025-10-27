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





document.addEventListener('DOMContentLoaded', () => {
  let lastScrollTop = 0;
  let ticking = false;
  const header = document.getElementById('main-header');
  const nav = document.getElementById('main-nav');

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const currentScroll = window.scrollY;

        if (currentScroll > 100) {
          header.classList.add('shrink');
        } else {
          header.classList.remove('shrink');
        }

        if (currentScroll - lastScrollTop > 10 && currentScroll > 100) {
          nav.classList.add('hidden');
        } else if (lastScrollTop - currentScroll > 10 || currentScroll < 100) {
          nav.classList.remove('hidden');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        ticking = false;
      });
      ticking = true;
    }
  });
});


const cards = document.querySelectorAll('.showcase-card');
let current = 0;

function updateCards() {
  cards.forEach(card => card.classList.remove('active', 'prev', 'next'));

  const prev = (current - 1 + cards.length) % cards.length;
  const next = (current + 1) % cards.length;

  cards[current].classList.add('active');
  cards[prev].classList.add('prev');
  cards[next].classList.add('next');
}

if (cards.length > 0) {
  updateCards();

  setInterval(() => {
    current = (current + 1) % cards.length;
    updateCards();
  }, 10000);
}



window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

window.addEventListener('load', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});