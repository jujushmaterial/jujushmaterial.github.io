(() => {
  const nav = document.querySelector('.top-nav');
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.site-menu');
  const menuLinks = document.querySelectorAll('.site-menu a');
  const revealItems = document.querySelectorAll('.reveal:not(.is-visible)');

  const updateNav = () => {
    nav?.classList.toggle('is-scrolled', window.scrollY > 12);
  };

  const closeMenu = () => {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  };

  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    menu?.classList.toggle('is-open', !open);
    document.body.classList.toggle('menu-open', !open);
  });

  menuLinks.forEach((link) => link.addEventListener('click', closeMenu));

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }
})();
