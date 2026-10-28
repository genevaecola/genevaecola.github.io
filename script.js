(() => {
  // Logos have ordinary local src paths and render without JavaScript.
  document.querySelectorAll('.brand-image').forEach(image => {
    const showFallback = () => image.parentElement.classList.add('is-missing');
    image.addEventListener('error', showFallback, {once: true});
    if (image.complete && image.naturalWidth === 0) showFallback();
  });
  const links = Array.from(document.querySelectorAll('.section-links a'));
  const sections = links.map(link => document.getElementById(link.hash.slice(1)));
  const mobile = window.matchMedia('(max-width: 760px)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let current = '';
  let pending = false;

  function update() {
    pending = false;
    const header = document.querySelector('.site-header');
    const sidebar = document.querySelector('.section-sidebar');
    const offset = header.offsetHeight + (mobile.matches ? sidebar.offsetHeight : 0);
    document.documentElement.style.setProperty('--topbar-height', `${header.offsetHeight}px`);
    document.documentElement.style.setProperty('--header-height', `${offset}px`);
    const readingLine = offset + 50;
    let active = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= readingLine) active = section;
    }
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 3) {
      active = sections[sections.length - 1];
    }
    if (active.id === current) return;
    current = active.id;
    links.forEach(link => {
      const selected = link.hash === `#${current}`;
      link.classList.toggle('active', selected);
      if (selected) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
      if (selected && mobile.matches) {
        const rail = link.parentElement;
        // Scroll only the navigation rail; never move the page while reading.
        rail.scrollTo({left: link.offsetLeft - (rail.clientWidth - link.offsetWidth) / 2,
          behavior: reducedMotion.matches ? 'instant' : 'smooth'});
      }
    });
  }
  function schedule() {
    if (!pending) { pending = true; window.requestAnimationFrame(update); }
  }
  window.addEventListener('scroll', schedule, {passive: true});
  window.addEventListener('resize', schedule);
  window.addEventListener('hashchange', schedule);
  window.addEventListener('load', schedule);
  const observer = new ResizeObserver(schedule);
  observer.observe(document.querySelector('main'));
  observer.observe(document.querySelector('.site-header'));
  update();
})();
