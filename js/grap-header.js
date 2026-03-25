/**
 * THE GRAP — Header Web Component
 * 사용법: <grap-header active="about"></grap-header>
 * active 값: "index" | "about" | "business" | "work" | "contact"
 */

const LOGO_SVG = `<svg width="167" height="40" viewBox="0 0 167 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="THE GRAP">
  <g clip-path="url(#grap-clip)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M99.3898 0.0405149C108.3 -0.518512 112.651 4.7504 113.267 13.1933C116.269 13.4687 119.863 14.7331 122.122 16.769C127.46 21.5835 124.61 29.877 121.658 35.1961C121.183 36.0509 120.608 37.9853 119.961 38.686H105.376C108.968 34.2226 112.561 27.7234 114.111 22.1829C114.418 21.084 114.908 18.3316 113.371 17.9447C112.929 18.3745 112.649 19.8389 112.456 20.4716C110.831 25.7987 108.1 30.7024 103.858 34.3727C99.2102 38.0813 93.4097 39.2147 87.7871 37.2186C83.446 35.6769 81.6334 30.3308 83.5916 26.3314C86.7118 19.96 95.3748 15.202 102.145 13.6704C103.164 13.4396 104.187 13.3097 105.216 13.163C105.959 13.0646 107.616 13.2553 108.206 13.0206C108.288 12.4108 107.297 11.4058 106.736 11.3132C100.147 10.2264 90.1965 15.0785 84.474 17.5203C84.7777 12.9646 84.8529 8.4067 85.1153 3.8436C89.7525 1.78132 94.3068 0.373151 99.3898 0.0405149ZM104.886 18.0344C102.54 19.3598 91.746 25.3735 94.8702 28.6329C98.8696 30.1085 103.354 21.178 104.99 18.1993C104.997 18.1625 105.005 18.1258 105.013 18.0891L104.886 18.0344Z" fill="currentColor"/>
    <path d="M22.2183 0.484188C22.3243 0.476437 22.4304 0.469752 22.5366 0.464125C30.6723 0.00387113 42.2983 2.47278 42.8768 12.4215C41.5241 12.7866 39.6357 13.5031 38.2685 13.9839L30.7209 16.6216C29.6953 14.2738 28.7217 11.9029 27.6473 9.55476C26.6254 7.32175 24.6809 3.88763 21.9016 3.68569C20.0077 3.5482 18.3215 5.15745 17.4395 6.71052C13.4786 13.6852 14.8666 28.6638 25.2176 28.8506C28.1006 28.9026 30.017 27.9651 32.0374 25.9946C31.2305 25.1219 29.8828 23.9136 28.9828 23.0908C27.3616 21.6079 25.5998 19.9304 23.9063 18.5509C25.616 18.4666 27.8511 18.5227 29.5886 18.5195L40.5685 18.5137L43.3124 18.5048L43.3445 38.6057C39.6086 38.5377 35.8319 38.6524 32.111 38.5696C32.5057 37.3879 34.7938 29.2795 34.5708 28.6404C34.5151 28.4801 34.4058 28.4779 34.2645 28.4121C34.1544 28.4302 34.0444 28.4482 33.9344 28.4673C33.6137 29.1107 33.2885 29.8943 33.0738 30.578C31.36 36.0448 26.6737 39.5325 20.8745 39.9434C10.1264 40.7036 0.704742 33.7441 0.0472991 22.6109C-0.770866 8.75379 9.1219 1.2189 22.2183 0.484188Z" fill="currentColor"/>
    <path d="M46.1587 1.11491C51.559 1.04845 57.0101 1.11629 62.4179 1.09835C66.0674 1.16386 69.7098 0.889726 73.3332 1.3968C78.0633 2.05878 81.9788 4.37428 82.4743 9.50991C82.9131 13.1214 80.6743 16.5578 77.2191 17.7611C72.7672 19.3116 67.1985 19.6337 62.4612 20.1496C62.638 20.5823 62.7571 21.1042 62.8783 21.5613C65.5073 21.5439 68.2822 21.3173 70.9381 21.2329C71.5048 21.85 72.3577 23.014 72.9016 23.7094C73.9085 24.9941 74.926 26.2692 75.954 27.5369C78.767 31.0554 82.2245 35.2046 84.7895 38.7922C80.3481 38.669 75.7221 38.8516 71.2054 38.7624C66.6497 33.5738 62.1211 28.3619 57.6198 23.1276C56.4501 21.8726 55.5921 20.2772 54.0711 19.5292C53.6381 19.7839 53.332 19.8955 53.1473 20.35C53.1505 21.0516 62.606 36.7324 63.7239 38.806C57.8484 38.7136 51.775 38.789 45.873 38.7582C45.784 35.6665 45.8255 32.458 45.7867 29.3514C45.7635 27.5019 45.5811 24.0725 45.8176 22.3525C46.7423 15.626 52.6486 14.8349 58.0156 13.4267L67.7904 10.9149C68.8588 10.6343 72.1891 10.0883 72.2573 8.84814C71.4239 7.37406 68.2784 8.70353 66.9007 9.07057C59.8664 10.9444 52.6923 12.5 45.7047 14.5254C45.7093 13.038 45.6329 1.44968 45.7984 1.16206L46.1587 1.11491Z" fill="currentColor"/>
    <path d="M128.76 1.11401C132.286 1.05201 135.934 1.0846 139.492 1.09023C146.857 1.11815 154.196 0.623611 160.858 4.40014C166.857 7.5442 168.751 16.8409 165.247 22.3991C159.983 30.7484 144.531 32.3591 138.925 23.4194C138.232 22.3131 137.389 20.7444 136.494 19.8727C136.058 19.447 134.76 19.8493 134.432 20.5135C134.443 21.2322 137.584 25.8337 138.194 26.7723L144.559 36.5709C145.011 37.2355 145.427 37.9915 145.839 38.6848C139.671 38.7368 133.504 38.7156 127.336 38.6848L127.251 29.3172C127.216 27.1089 127.159 25.0173 127.224 22.8079C127.446 15.2902 136.342 14.6203 142.315 13.435L153.772 11.1518C154.915 10.9325 158.4 10.6096 158.469 9.28382C158.164 8.59094 157.527 8.43073 156.827 8.53828C155.31 8.7709 153.801 9.09654 152.295 9.39764C149.332 9.97882 146.374 10.5844 143.421 11.2142C137.999 12.3648 132.699 13.2764 127.283 14.562L127.277 1.12888L128.76 1.11401Z" fill="currentColor"/>
  </g>
  <defs>
    <clipPath id="grap-clip">
      <rect width="167" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>`;

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
    this.innerHTML = this._template(active);
    // 언어 버튼 상태는 즉시 적용 (rAF 전)
    this._applyLangButtons(localStorage.getItem('grap-lang') || 'ko');
    // 나머지 초기화는 DOM 안착 후
    requestAnimationFrame(() => this._init());
  }

  _applyLangButtons(lang) {
    document.documentElement.lang = { ko:'ko', en:'en', zh:'zh-CN', ja:'ja' }[lang] || lang;
    this.querySelectorAll('.lang-btn').forEach(b =>
      b.classList.toggle('active', b.dataset.lang === lang));
  }

  _template(active) {
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
      <a href="index.html" class="header-logo">${LOGO_SVG}</a>
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

    // ── Cursor hover ──
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }
}

customElements.define('grap-header', GrapHeader);
