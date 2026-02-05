function initScrollReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document
      .querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)')
      .forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    },
  );

  document
    .querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)')
    .forEach((el) => observer.observe(el));
}

document.addEventListener('astro:page-load', initScrollReveal);
