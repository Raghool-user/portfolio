// ============================================================
// RAGHOOL M — Portfolio interactions
// Tab-style nav highlighting + scroll reveal, no dependencies.
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  const tabs = Array.from(document.querySelectorAll('.tab'));
  const sections = tabs
    .map(tab => document.getElementById(tab.dataset.target))
    .filter(Boolean);

  // Click a tab -> smooth scroll to its section
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = document.getElementById(tab.dataset.target);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Highlight the tab whose section is currently in view
  const setActiveTab = (id) => {
    tabs.forEach(t => t.classList.toggle('active', t.dataset.target === id));
  };

  if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveTab(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach(section => navObserver.observe(section));

    // Reveal-on-scroll for content sections
    const revealEls = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback: show everything immediately if IntersectionObserver is unsupported
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
  }
});
