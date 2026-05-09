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

  /* Card portal: click anywhere on card → open app; "Ver más" → detail page */
  document.querySelectorAll('.md-card[role="group"]').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('.md-card__more-link')) return;
      if (e.target.closest('.md-card__app-btn')) return;
      const appBtn = card.querySelector('.md-card__app-btn');
      if (appBtn) window.open(appBtn.href, '_blank', 'noopener,noreferrer');
    });
  });

})();
