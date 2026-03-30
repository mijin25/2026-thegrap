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
    /* ScrollTrigger 전역 설정은 grap-footer.js 로드 시 1회 적용 (index 포함) */
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

    /*
      읽기 순서 정렬: 위→아래, 같은 행(인라인 줄바꿈)은 왼→오른쪽.
      ScrollTrigger.batch 는 묶음 콜백·stagger 순서가 시각 순서와 어긋날 수 있어 요소별 트리거로 전환.
    */
    const sy = window.scrollY || window.pageYOffset || 0;
    const rowTolerancePx = 4;
    pending.sort((a, b) => {
      const ra = a.getBoundingClientRect();
      const rb = b.getBoundingClientRect();
      const ay = ra.top + sy;
      const by = rb.top + sy;
      if (Math.abs(ay - by) < rowTolerancePx) {
        return ra.left - rb.left;
      }
      return ay - by;
    });

    const startLine = isMobile ? 'top 91%' : 'top 88%';

    pending.forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: startLine,
        once: true,
        onEnter: () => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: isMobile ? 0.52 : 0.68,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        },
      });
    });

    window.addEventListener('load', () => {
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
      }
    });
  }
})();
