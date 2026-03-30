/**
 * ABOUT: 포인터 궤적 + coalesced 샘플.
 * 스탬프·당김·크기 목표 모두 실제 커서(tx,ty)만 사용 — 지연 보간(sx,sy)과 섞이면 중심↔바깥 왕복하며 산만해짐.
 * 크기는 스프링 대신 lerp로 목표만 추종(튕김 제거).
 */
(function () {
  const canvas = document.getElementById("about-cursor-trail");
  if (!canvas) return;

  const ctx = canvas.getContext("2d", { alpha: true });
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  let W = 0;
  let H = 0;
  let tx = 0;
  let ty = 0;
  let hasPointer = false;
  let prevTx = 0;
  let prevTy = 0;

  /** @type {{ x: number; y: number; life: number; rMax: number; elasticMul: number }[]} */
  let trail = [];
  const MAX_NODES = 80;
  const MOVE_EPS = 0.42;
  const INTENSITY = 0.85;
  const MIN_STAMP_PX = 7;
  const FADE_SPEED_REF = 20;

  /* 모든 점 동일 당김 — 꼬리만 세게 하면 덩어리가 따로 노는 느낌 남 */
  const PULL_RATE = 0.078;
  const PULL_SNAP_PX = 1.1;

  /* 목표 크기 배율을 스프링 없이 부드럽게 */
  const ELASTIC_LERP = 0.26;

  function spawnRadiusMax() {
    const m = Math.min(W, H);
    return m * 0.1;
  }

  function distTargetMul(px, py) {
    const d = Math.hypot(px - tx, py - ty);
    const ref = Math.max(96, Math.min(W, H) * 0.3);
    const t = Math.max(0, Math.min(1, d / ref));
    const minD = 0.38;
    const k = 1.12;
    return minD + (1 - minD) * Math.pow(1 - t, k);
  }

  function radiusAt(life) {
    const t = Math.max(0, Math.min(1, life));
    return 0.34 + 0.66 * Math.pow(t, 0.5);
  }

  function pullTrailTowardCursor(n) {
    if (n === 0) return;
    for (let i = 0; i < n; i++) {
      const p = trail[i];
      const dx = tx - p.x;
      const dy = ty - p.y;
      const d = Math.hypot(dx, dy);
      if (d < PULL_SNAP_PX) {
        p.x = tx;
        p.y = ty;
        continue;
      }
      p.x += dx * PULL_RATE;
      p.y += dy * PULL_RATE;
    }
  }

  function lerpElasticMul(p, targetMul) {
    const clamped = Math.max(0.1, Math.min(1.12, targetMul));
    p.elasticMul += (clamped - p.elasticMul) * ELASTIC_LERP;
  }

  function alphaAt(life) {
    const t = Math.max(0, Math.min(1, life));
    return Math.pow(t, 1);
  }

  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    prevTx = tx;
    prevTy = ty;
  }

  function setTarget(clientX, clientY) {
    tx = clientX;
    ty = clientY;
    hasPointer = true;
  }

  function pushTrailToward(px, py) {
    const rBatch = spawnRadiusMax();
    const last = trail[trail.length - 1];
    if (!last) {
      trail.push({
        x: px,
        y: py,
        life: 1,
        rMax: rBatch,
        elasticMul: 1,
      });
      while (trail.length > MAX_NODES) trail.shift();
      return;
    }
    const dx = px - last.x;
    const dy = py - last.y;
    const d = Math.hypot(dx, dy);
    if (d < MIN_STAMP_PX) {
      return;
    }
    const ux = dx / d;
    const uy = dy / d;
    const step = Math.max(MIN_STAMP_PX * 0.92, Math.min(11, d / 9));
    const maxFill = Math.min(12, Math.max(2, Math.ceil(d / step) + 2));
    let acc = step;
    let n = 0;
    while (acc <= d - 0.01 && n < maxFill) {
      trail.push({
        x: last.x + ux * acc,
        y: last.y + uy * acc,
        life: 1,
        rMax: rBatch,
        elasticMul: 1,
      });
      acc += step;
      n++;
    }
    const end = trail[trail.length - 1];
    if (end && Math.hypot(px - end.x, py - end.y) > 0.45) {
      trail.push({
        x: px,
        y: py,
        life: 1,
        rMax: rBatch,
        elasticMul: 1,
      });
    }
    while (trail.length > MAX_NODES) trail.shift();
  }

  function feedPointerSamples(clientX, clientY) {
    setTarget(clientX, clientY);
    pushTrailToward(tx, ty);
  }

  document.addEventListener(
    "pointermove",
    function (e) {
      const list =
        typeof e.getCoalescedEvents === "function"
          ? e.getCoalescedEvents()
          : [e];
      const maxSamples = 14;
      let samples = list;
      if (list.length > maxSamples) {
        samples = [];
        const step = (list.length - 1) / (maxSamples - 1);
        for (let k = 0; k < maxSamples; k++) {
          samples.push(list[Math.min(list.length - 1, Math.round(k * step))]);
        }
      }
      for (let i = 0; i < samples.length; i++) {
        feedPointerSamples(samples[i].clientX, samples[i].clientY);
      }
    },
    { passive: true }
  );
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function drawBlob(x, y, radius, life) {
    const t = Math.max(0, Math.min(1, life));
    const a = alphaAt(t) * INTENSITY;
    const coreFade = Math.min(1, t / 0.36);
    const glowMul = 0.72 + 0.28 * Math.pow(t, 0.75);
    const r = radius * glowMul;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, "rgba(255,255,255," + (a * 0.95 * coreFade) + ")");
    g.addColorStop(0.12, "rgba(255,255,245," + (a * 0.72 * coreFade) + ")");
    g.addColorStop(0.28, "rgba(240,255,120," + (a * 0.5 * (0.35 + 0.65 * coreFade)) + ")");
    g.addColorStop(0.48, "rgba(204,255,0," + (a * 0.38) + ")");
    g.addColorStop(0.68, "rgba(160,195,45," + (a * 0.22) + ")");
    g.addColorStop(0.88, "rgba(90,110,50," + (a * 0.09) + ")");
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  function tick() {
    requestAnimationFrame(tick);

    if (reduceMotion.matches) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      return;
    }

    const speed = Math.hypot(tx - prevTx, ty - prevTy);
    prevTx = tx;
    prevTy = ty;

    if (hasPointer && speed > MOVE_EPS) {
      pushTrailToward(tx, ty);
    }

    pullTrailTowardCursor(trail.length);

    const spdN = Math.min(1, speed / FADE_SPEED_REF);
    let decay = 0.965 + spdN * 0.033;
    if (decay > 0.997) {
      decay = 0.997;
    }
    for (let i = 0; i < trail.length; i++) {
      const p = trail[i];
      let d = decay;
      const targetM = distTargetMul(p.x, p.y);
      const prevE = p.elasticMul;
      lerpElasticMul(p, targetM);
      if (Math.abs(p.elasticMul - prevE) > 0.004) {
        d = Math.max(d, 0.9965);
      }
      p.life *= d;
    }
    trail = trail.filter(function (p) {
      return p.life > 0.012;
    });

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    ctx.globalCompositeOperation = "lighter";
    ctx.filter = "blur(1.55px)";

    const nTrail = trail.length;
    for (let i = 0; i < nTrail; i++) {
      const p = trail[i];
      const rNow = p.rMax * radiusAt(p.life) * p.elasticMul;
      drawBlob(p.x, p.y, rNow, p.life);
    }

    ctx.filter = "none";
    ctx.globalCompositeOperation = "source-over";
  }

  resize();
  window.addEventListener("resize", resize);
  tx = W * 0.5;
  ty = H * 0.5;
  prevTx = tx;
  prevTy = ty;
  tick();
})();
