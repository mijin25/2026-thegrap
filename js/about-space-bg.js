/**
 * ABOUT 우주 배경 — 성운(가우시안 블롭) + 별 패럴랙스 + 필름 그레인 · WebGL1
 * uMouse: 마우스 패럴랙스 제거 시 중앙 고정 (0.5, 0.5) — 마우스 버전은 backups/about-mouse-blend-20260330/about-space-bg.with-mouse-parallax.js
 */

    (function () {
      const canvas = document.getElementById('about-space-canvas');
      if (!canvas) return;

      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) return;

      let W = window.innerWidth, H = window.innerHeight;
      const DPR = Math.min(window.devicePixelRatio, 1.5);

      function compile(type, src) {
        const s = gl.createShader(type);
        gl.shaderSource(s, src); gl.compileShader(s); return s;
      }
      function link(vs, fs) {
        const p = gl.createProgram();
        gl.attachShader(p, compile(gl.VERTEX_SHADER, vs));
        gl.attachShader(p, compile(gl.FRAGMENT_SHADER, fs));
        gl.linkProgram(p); return p;
      }

      const QUAD_VS = `attribute vec2 a_pos; varying vec2 vUv;
        void main(){ vUv = a_pos*0.5+0.5; gl_Position=vec4(a_pos,0.,1.); }`;

      /* ── 배경 셰이더: Studio Lumio 스타일 가우시안 블롭 + 별 패럴랙스 ── */
      const BG_FS = `
        precision highp float;
        uniform float uTime;
        uniform vec2  uResolution;
        uniform vec2  uMouse;
        uniform float uAspect;
        varying vec2 vUv;

        float hash21(vec2 p){
          p = fract(p * vec2(127.1, 311.7));
          p += dot(p, p + 17.19);
          return fract(p.x * p.y);
        }

        /* 필름 그레인: 30fps 갱신 — 살아있는 노이즈 질감 */
        float grain(vec2 uv, float t){
          float frame = floor(t * 30.0);
          vec2 px = floor(uv * uResolution) + frame * vec2(127.3, 311.7);
          px = fract(px * vec2(0.1031, 0.1030));
          px += dot(px, px.yx + 33.33);
          return fract((px.x + px.y) * px.x);
        }

        /* 가우시안 블롭: 원형 부드러운 빛 덩어리
           radius = 화면 높이 대비 비율 (0.3 = 화면 높이의 30%) */
        float blob(vec2 uv, vec2 center, float radius){
          vec2 d = uv - center;
          d.x *= uAspect; /* x축 aspect 보정 → 원형 */
          return exp(-dot(d, d) / (radius * radius));
        }

        /* 흩뿌린 별 — 낮은 scale로 셀이 커서 랜덤 위치가 격자처럼 안 보임
           scale=20이면 셀 1개가 화면의 1/20 크기 → 별이 자유롭게 흩어짐 */
        float scatteredStars(vec2 uv, float scale, float density, float pxR){
          vec2 grid = uv * scale;
          vec2 cell = floor(grid);
          vec2 f    = fract(grid);
          float cpw = uResolution.x / scale;
          float cph = uResolution.y / scale;
          float result = 0.0;
          for(int x = -1; x <= 1; x++){
            for(int y = -1; y <= 1; y++){
              vec2 c = cell + vec2(float(x), float(y));
              if(hash21(c) > density) continue;
              /* 셀 내 완전 무작위 위치 (0~1) → 격자 없는 자연스러운 산포 */
              vec2 starPos = vec2(hash21(c + 0.1), hash21(c + 0.2));
              vec2 pos = (vec2(float(x), float(y)) + starPos) - f;
              float d = length(vec2(pos.x * cpw, pos.y * cph));
              float brightness = hash21(c + 0.3) * 0.55 + 0.45;
              /* 숨쉬기: 5~15초 주기, 꺼졌다 켜지는 대비 강하게 */
              float speed = hash21(c + 0.4) * 0.84 + 0.42;
              float phase = hash21(c + 0.5) * 6.28;
              float breath = pow(sin(uTime * speed + phase) * 0.5 + 0.5, 3.0);
              float core = smoothstep(pxR,       0.0, d);
              float glow = smoothstep(pxR * 2.8, 0.0, d) * 0.15;
              result += (core + glow) * brightness * breath;
            }
          }
          return clamp(result, 0.0, 1.0);
        }

        void main(){
          vec2 uv = vUv;
          float t  = uTime;
          vec2 m   = uMouse - 0.5; /* [-0.5, 0.5] */

          /* ── 가우시안 블롭 4개 ──────────────────────────────────────
             각 블롭: 다른 위치 + 느린 드리프트 + 개별 패럴랙스 속도
             깊이감: 빠른 패럴랙스 = 앞쪽 블롭
          ─────────────────────────────────────────────────────────── */

          /* ── 가우시안 블롭: 중심이 화면 바깥에 위치 ──────────────────
             화면 안으로 가장자리만 들어와 호 모양 빛이 생김.
             드리프트 폭이 커서 들어왔다 나갔다 → 유려한 움직임
          ─────────────────────────────────────────────────────────── */

          /* 블롭 1: 왼쪽 가장자리 — 중심을 더 바깥으로, 반지름 줄임 */
          vec2 c1 = vec2(-0.15 + sin(t*0.05)*0.10, 0.38 + cos(t*0.060)*0.09);
          float b1 = blob(uv + m * 0.012, c1, 0.30) * 0.95;

          /* 블롭 2: 오른쪽 상단 가장자리 */
          vec2 c2 = vec2(1.15 + cos(t*0.07)*0.10, 0.20 + sin(t*0.055)*0.10);
          float b2 = blob(uv + m * 0.020, c2, 0.32) * 0.88;

          /* 블롭 3: 하단 왼쪽 가장자리 */
          vec2 c3 = vec2(0.18 + sin(t*0.04)*0.10, 1.12 + cos(t*0.075)*0.07);
          float b3 = blob(uv + m * 0.008, c3, 0.34) * 0.80;

          /* 블롭 4: 오른쪽 하단 가장자리 */
          vec2 c4 = vec2(1.10 + cos(t*0.06)*0.10, 0.88 + sin(t*0.065)*0.09);
          float b4 = blob(uv + m * 0.016, c4, 0.30) * 0.75;

          float nebula = clamp(b1 + b2 + b3 + b4, 0.0, 0.70);

          /* 밝기: 낮게 유지 */
          vec3 nebulaColor = vec3(0.88, 0.88, 0.92) * nebula * 0.15;

          /* ── 별: 끊김 없는 무한 줌인 (두 레이어 크로스페이드) ──
             30초 주기 레이어 X, 15초 오프셋된 레이어 Y가 번갈아
             페이드인/아웃 → 리셋 순간 없이 무한 줌인처럼 보임
          ────────────────────────────────────────────────────── */
          float cX = fract(t * 0.033);          /* 레이어 X: 0→1, 30초 */
          float cY = fract(t * 0.033 + 0.5);   /* 레이어 Y: 반 주기 오프셋 */

          float zX = 1.0 - cX * 0.18;           /* 1.0 → 0.82 */
          float zY = 1.0 - cY * 0.18;

          /* 마지막 25% 구간에서 페이드아웃 → 다음 레이어로 부드럽게 전환 */
          float aX = 1.0 - smoothstep(0.75, 1.0, cX);
          float aY = 1.0 - smoothstep(0.75, 1.0, cY);

          vec2 uvX = (uv - 0.5) * zX + 0.5;
          vec2 uvY = (uv - 0.5) * zY + 0.5;

          vec2 qX0 = uvX + m * 0.004;  vec2 qY0 = uvY + m * 0.004;
          vec2 qX1 = uvX + m * 0.018;  vec2 qY1 = uvY + m * 0.018;
          vec2 qX2 = uvX + m * 0.040;  vec2 qY2 = uvY + m * 0.040;

          /* 밀도를 절반으로 — 두 레이어 합산이므로 총량 유지 */
          float sA = (scatteredStars(qX0 + vec2(0.17, 0.83), 30.0, 0.25, 1.2) * aX
                    + scatteredStars(qY0 + vec2(0.17, 0.83), 30.0, 0.25, 1.2) * aY) * 0.45;
          float sB = (scatteredStars(qX1 + vec2(0.51, 0.27), 22.0, 0.20, 1.6) * aX
                    + scatteredStars(qY1 + vec2(0.51, 0.27), 22.0, 0.20, 1.6) * aY) * 0.70;
          float sC = (scatteredStars(qX2 + vec2(0.63, 0.41), 14.0, 0.13, 2.0) * aX
                    + scatteredStars(qY2 + vec2(0.63, 0.41), 14.0, 0.13, 2.0) * aY) * 0.90;
          float sD = (scatteredStars(qX1 + vec2(0.38, 0.72),  8.0, 0.04, 4.5) * aX
                    + scatteredStars(qY1 + vec2(0.38, 0.72),  8.0, 0.04, 4.5) * aY) * 1.0;

          float stars = clamp(sA + sB + sC + sD, 0.0, 1.0);
          vec3 starColor = vec3(1.0) * stars;

          /* 필름 그레인: 30fps 살아있는 노이즈 */
          float gr = (grain(uv, t) - 0.5) * 0.11;

          gl_FragColor = vec4(clamp(nebulaColor + starColor + gr, 0.0, 1.0), 1.0);
        }`;

      const prog = link(QUAD_VS, BG_FS);

      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 3,-1, -1,3]), gl.STATIC_DRAW);
      function useQuad(p) {
        const loc = gl.getAttribLocation(p, 'a_pos');
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.enableVertexAttribArray(loc);
        gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
      }

      /* 마우스 패럴랙스 비활성: 셰이더 uMouse는 화면 중앙 (백업 폴더에 마우스 추적 버전 있음) */
      const MOUSE_U = 0.5;
      const MOUSE_V = 0.5;

      let effectiveTime = Math.random() * 100;
      let lastTs = performance.now();

      (function loop(ts) {
        requestAnimationFrame(loop);
        const dt = Math.min((ts - lastTs) * 0.001, 0.05);
        lastTs = ts;

        /* 실제 시간 사용 — 별 반짝임/성운 속도가 직관적으로 제어됨 */
        effectiveTime += dt;

        gl.useProgram(prog);
        useQuad(prog);
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.uniform1f(gl.getUniformLocation(prog, 'uTime'),       effectiveTime);
        gl.uniform2f(gl.getUniformLocation(prog, 'uResolution'), canvas.width, canvas.height);
        gl.uniform2f(gl.getUniformLocation(prog, 'uMouse'),      MOUSE_U, MOUSE_V);
        gl.uniform1f(gl.getUniformLocation(prog, 'uAspect'),     W / H);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
      })(lastTs);

      function resize() {
        W = window.innerWidth; H = window.innerHeight;
        canvas.width  = W * DPR;
        canvas.height = H * DPR;
        canvas.style.width  = W + 'px';
        canvas.style.height = H + 'px';
      }
      window.addEventListener('resize', resize);
      resize();
    })();
