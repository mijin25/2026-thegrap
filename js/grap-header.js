/**
 * THE GRAP — Header Web Component
 * 사용법: <grap-header active="about"></grap-header>
 * active 값: "index" | "about" | "business" | "work" | "contact"
 */

// 로고는 assets/logo.svg에서 동적 로드 — 파일 교체 시 자동 반영

const NAV_ITEMS = [
  { key: 'about',    href: 'about.html',    label: 'ABOUT'    },
  { key: 'business', href: 'business.html', label: 'BUSINESS' },
  { key: 'work',     href: 'work.html',     label: 'WORK'     },
  { key: 'contact',  href: 'contact.html',  label: 'CONTACT'  },
];

class GrapHeader extends HTMLElement {
  connectedCallback() {
    const active = this.getAttribute('active') || '';
    this.style.display = 'contents';
    fetch('assets/logo.svg')
      .then(r => r.text())
      .then(logoSvg => {
        this.innerHTML = this._template(active, logoSvg);
        this._applyLangButtons(localStorage.getItem('grap-lang') || 'ko');
        requestAnimationFrame(() => this._init());
      });
  }

  _applyLangButtons(lang) {
    document.documentElement.lang = { ko:'ko', en:'en', zh:'zh-CN', ja:'ja' }[lang] || lang;
    this.querySelectorAll('.lang-btn').forEach(b =>
      b.classList.toggle('active', b.dataset.lang === lang));
  }

  _template(active, logoSvg) {
    const desktopLinks = NAV_ITEMS.map(item =>
      `<a href="${item.href}"${active === item.key ? ' class="active"' : ''}>${item.label}</a>`
    ).join('');

    const mobileLinks = NAV_ITEMS.map(item =>
      `<div class="menu-item-wrap"><a href="${item.href}">${item.label}</a></div>`
    ).join('');

    return `
    <div id="mobile-menu">
      ${mobileLinks}
      <div class="menu-lang lang-switcher">
        <button class="lang-btn" data-lang="ko">KR</button>
        <button class="lang-btn" data-lang="en">EN</button>
        <button class="lang-btn" data-lang="zh">CN</button>
        <button class="lang-btn" data-lang="ja">JP</button>
      </div>
    </div>
    <header id="header">
      <a href="index.html" class="header-logo">${logoSvg}</a>
      <nav id="desktop-nav">${desktopLinks}</nav>
      <div id="header-right">
        <div class="lang-switcher">
          <button class="lang-btn" data-lang="ko">KR</button>
          <button class="lang-btn" data-lang="en">EN</button>
          <button class="lang-btn" data-lang="zh">CN</button>
          <button class="lang-btn" data-lang="ja">JP</button>
        </div>
        <button id="hamburger" aria-label="메뉴 열기">
          <span class="ham-line"></span>
          <span class="ham-line"></span>
        </button>
      </div>
    </header>`;
  }

  _init() {
    // ── Mobile menu ──
    const $ham   = document.getElementById('hamburger');
    const $menu  = document.getElementById('mobile-menu');
    const $items = $menu.querySelectorAll('.menu-item-wrap a, .menu-lang .lang-btn');
    let menuOpen = false;

    const toggleMenu = (force) => {
      menuOpen = force !== undefined ? force : !menuOpen;
      $menu.classList.toggle('open', menuOpen);
      const lines = $ham.querySelectorAll('.ham-line');

      if (menuOpen) {
        gsap.to($menu,  { clipPath: 'inset(0 0 0% 0)', duration: 0.75, ease: 'expo.inOut' });
        gsap.fromTo($items,
          { y: '110%' },
          { y: '0%', duration: 0.6, ease: 'expo.out', stagger: 0.07, delay: 0.3 }
        );
        gsap.to(lines[0], { rotate: 45,  y: 3,  duration: .25 });
        gsap.to(lines[1], { rotate: -45, y: -3, duration: .25 });
      } else {
        gsap.to($items, { y: '110%', duration: 0.3, ease: 'expo.in', stagger: 0.03 });
        gsap.to($menu,  { clipPath: 'inset(0 0 100% 0)', duration: 0.6, ease: 'expo.inOut', delay: 0.15 });
        gsap.to(lines[0], { rotate: 0, y: 0, duration: .25 });
        gsap.to(lines[1], { rotate: 0, y: 0, duration: .25 });
      }
    };

    $ham.addEventListener('click', () => toggleMenu());
    $menu.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => toggleMenu(false)));

    // ── Language ──
    const applyLang = (lang) => {
      document.documentElement.lang = { ko:'ko', en:'en', zh:'zh-CN', ja:'ja' }[lang] || lang;
      document.querySelectorAll('.lang-btn').forEach(b =>
        b.classList.toggle('active', b.dataset.lang === lang));
      // Notify page-level content handlers
      document.dispatchEvent(new CustomEvent('grap:lang', { detail: { lang } }));
    };

    document.querySelectorAll('.lang-btn').forEach(b => {
      b.addEventListener('click', () => {
        const lang = b.dataset.lang;
        localStorage.setItem('grap-lang', lang);
        applyLang(lang);
        if (menuOpen) toggleMenu(false);
      });
    });

    // 페이지 콘텐츠에 저장된 언어 적용 (grap:lang 이벤트 발행)
    applyLang(localStorage.getItem('grap-lang') || 'ko');

  }
}

customElements.define('grap-header', GrapHeader);
