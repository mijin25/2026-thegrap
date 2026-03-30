# ABOUT 페이지 — 마우스 효과 · difference 블렌드 백업 (2026-03-30)

재사용 시 아래 순서로 복구할 수 있습니다.

## 포함 파일

| 파일 | 설명 |
|------|------|
| `about-cursor-trail.js` | 포인터 궤적 캔버스 (`#about-cursor-trail`). `about.html`에 `<canvas id="about-cursor-trail" …>` + 스크립트 태그로 다시 연결 |
| `about-space-bg.with-mouse-parallax.js` | 우주 배경 WebGL — **마우스 패럴랙스**(mousemove + smooth lerp) 포함 버전. 현재 프로덕션 `js/about-space-bg.js`는 마우스 없이 중앙 고정(uMouse 0.5,0.5) |
| `about-removed-inline-styles.css` | `about.html` `<style>`에서 제거한 블록 (difference 본문, 커서 트레일 레이어, 그레인 z-index 조정 등) |

## 복구 체크리스트

1. `about.html` `<div id="gradient-canvas">` 안에 `<canvas id="about-cursor-trail" class="about-cursor-trail" …></canvas>` 추가
2. `about.html` 하단에 `<script src="js/about-cursor-trail.js"></script>` 추가 (about-space-bg.js 다음 권장)
3. `js/about-cursor-trail.js`를 이 폴더의 백업으로 복사
4. `about-space-bg.with-mouse-parallax.js` 내용을 `js/about-space-bg.js`에 덮어쓰기
5. `about-removed-inline-styles.css`의 규칙을 `about.html` 인라인 스타일에 다시 합치기

## 참고

- 헤더 `#header`의 `mix-blend-mode: difference`는 **`css/base.css`** 전역 규칙이며, 이 백업에서는 건드리지 않았습니다 (메인 등 다른 페이지와 공유).
