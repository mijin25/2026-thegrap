# About Cap Section Lime Theme Backup (2026-03-30)

아래는 `about.html`에서 실험했던 `about-cap-section` 라임 배경 전환 관련 스타일/로직 백업입니다.

## 1) CSS 백업

```css
.about-cap-section {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  padding-inline: var(--gutter);
  column-gap: 0;
  position: relative;
  background: transparent;
  transition: background-color .45s ease, color .35s ease;
}
.about-cap-section.cap-theme-lime {
  background-color: var(--c-primary);
}
.about-cap-section.cap-theme-lime::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: clamp(80px, 10vw, 140px);
  background: linear-gradient(
    to bottom,
    rgba(204, 255, 0, 1) 0%,
    rgba(204, 255, 0, 0) 100%
  );
  pointer-events: none;
  z-index: 0;
}
.about-cap-section > * {
  position: relative;
  z-index: 1;
}
.about-cap-section.cap-theme-lime .cap-label,
.about-cap-section.cap-theme-lime .cap-service {
  color: #000;
}
```

## 2) JS 백업 (ScrollTrigger)

```js
ScrollTrigger.create({
  trigger: capSection,
  start: 'top 55%',
  end: 'bottom 55%',
  onEnter: () => capSection.classList.add('cap-theme-lime'),
  onEnterBack: () => capSection.classList.add('cap-theme-lime'),
  onLeave: () => capSection.classList.remove('cap-theme-lime'),
  onLeaveBack: () => capSection.classList.remove('cap-theme-lime'),
});
```

