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
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const revealItems = Array.from(document.querySelectorAll('.reveal'));

    // 첫 화면에 이미 보이는 요소는 즉시 노출해 초반 흐름이 끊기지 않게 처리
    revealItems.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.72) {
        gsap.set(el, { opacity: 1, y: 0 });
        el.dataset.revealReady = '1';
      }
    });

    const pending = revealItems.filter((el) => el.dataset.revealReady !== '1');
    if (!pending.length) return;

    // 배치 단위로 순차 노출해 "읽는 순서"가 자연스럽게 이어지도록 정리
    ScrollTrigger.batch(pending, {
      start: isMobile ? 'top 90%' : 'top 86%',
      once: true,
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: isMobile ? 0.55 : 0.8,
          ease: 'power2.out',
          stagger: isMobile ? 0.05 : 0.08,
          overwrite: 'auto',
        });
      },
    });
  }
})();
