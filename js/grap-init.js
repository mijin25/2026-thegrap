/**
 * THE GRAP — Page Init
 * 서브페이지 공통 초기화: 페이지 타이틀 등장, reveal 애니메이션
 * 사용법: <script src="js/grap-init.js"></script> (body 끝에)
 * ScrollTrigger가 먼저 로드되어 있어야 합니다.
 */
(function () {
  // ── Page title entrance ──
  const titleSpan = document.querySelector('.page-title span');
  if (titleSpan && typeof gsap !== 'undefined') {
    gsap.to('.page-title span', { y: 0, duration: 1.2, ease: 'power4.out', delay: 0.1 });
  }

  // ── Reveal on scroll ──
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    document.querySelectorAll('.reveal').forEach((el) => {
      const siblings = Array.from(el.parentElement.querySelectorAll(':scope > .reveal'));
      const localIdx = siblings.indexOf(el);
      gsap.to(el, {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 82%' },
        delay: (localIdx % 4) * 0.07,
      });
    });
  }
})();
