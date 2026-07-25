// Signal-rail navigation: click to scroll, and highlight the active
// section's dot as the visitor scrolls through the page.
(function () {
  var dots = document.querySelectorAll('.rail-dot');
  var sections = Array.prototype.map.call(dots, function (dot) {
    return document.getElementById(dot.getAttribute('data-target'));
  });

  // Clicking a dot scrolls smoothly to its section.
  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      var target = document.getElementById(dot.getAttribute('data-target'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // As sections enter the middle band of the viewport, light up the
  // matching dot and dim the rest.
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var index = sections.indexOf(entry.target);
          if (index === -1) return;
          if (entry.isIntersecting) {
            dots.forEach(function (dot) {
              dot.classList.remove('active');
            });
            dots[index].classList.add('active');
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach(function (section) {
      if (section) observer.observe(section);
    });
  }
})();
