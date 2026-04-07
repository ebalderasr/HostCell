/* ══════════════════════════════════════════════════════════
   HOST CELL LAB SUITE — app.js
   MD3 interactions: Top App Bar tonal elevation on scroll
   ══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* MD3 Top App Bar: surface-container elevation on scroll */
  const appBar = document.getElementById('app-bar');
  if (appBar) {
    const onScroll = () => {
      appBar.classList.toggle('scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); /* apply immediately in case page is already scrolled */
  }

})();
