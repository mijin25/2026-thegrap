# Space Background Backup (2026-03-30)

배경을 기본 블랙으로 단순화하기 전에 사용하던 우주(WebGL) 배경 백업입니다.

## 포함 파일

- `about-space-bg.js`
  - 기존 `js/about-space-bg.js` 원본 백업본

## 현재 적용 상태

- `about.html`, `business.html`에서:
  - `#gradient-canvas` 마크업 제거
  - `js/about-space-bg.js` 로드 제거
  - WebGL 준비 이벤트(`about-fluid-ready/error`) 기반 페이드인 로직 제거

## 복구 방법(요약)

1. `about.html`, `business.html`에 `#gradient-canvas` 마크업 재삽입
2. 각 페이지 `<style>`에 `#gradient-canvas` 관련 스타일 재삽입
3. `js/about-space-bg.js` 스크립트 로드 및 ready 이벤트 기반 표시 스크립트 재삽입

