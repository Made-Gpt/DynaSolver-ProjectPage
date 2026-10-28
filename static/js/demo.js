"use strict";

function ASSET(assetPath){
  return "static/demo/" + assetPath;
}

/* ------------------------------------------------------------------ *
 * Clip grid: looping videos that play while on screen
 * ------------------------------------------------------------------ */

const ROBOTS = [{"index":"01","id":"a1_description","name":"A1","clips":[{"raw":"u6_yaw_p0","speed":6,"yaw":0,"yawText":"0°","key":"zero","src":"a1_description.mp4","poster":"thumbnails/a1_description.jpg","caption":"u = 6 m/s, yaw 0°"}]},{"index":"02","id":"aliengo_description","name":"Aliengo","clips":[{"raw":"u6_yaw_p0","speed":6,"yaw":0,"yawText":"0°","key":"zero","src":"aliengo_description.mp4","poster":"thumbnails/aliengo_description.jpg","caption":"u = 6 m/s, yaw 0°"}]},{"index":"03","id":"anymal_b_description","name":"ANYmal B","clips":[{"raw":"u6_yaw_p0","speed":6,"yaw":0,"yawText":"0°","key":"zero","src":"anymal_b_description.mp4","poster":"thumbnails/anymal_b_description.jpg","caption":"u = 6 m/s, yaw 0°"}]},{"index":"04","id":"anymal_d_description","name":"ANYmal D","clips":[{"raw":"u6_yaw_p0","speed":6,"yaw":0,"yawText":"0°","key":"zero","src":"anymal_d_description.mp4","poster":"thumbnails/anymal_d_description.jpg","caption":"u = 6 m/s, yaw 0°"}]},{"index":"05","id":"b1_description","name":"B1","clips":[{"raw":"u6_yaw_p0","speed":6,"yaw":0,"yawText":"0°","key":"zero","src":"b1_description.mp4","poster":"thumbnails/b1_description.jpg","caption":"u = 6 m/s, yaw 0°"}]},{"index":"06","id":"b2_description","name":"B2","clips":[{"raw":"u6_yaw_p0","speed":6,"yaw":0,"yawText":"0°","key":"zero","src":"b2_description.mp4","poster":"thumbnails/b2_description.jpg","caption":"u = 6 m/s, yaw 0°"}]},{"index":"07","id":"bolt_description","name":"Bolt","clips":[{"raw":"u6_yaw_p0","speed":6,"yaw":0,"yawText":"0°","key":"zero","src":"bolt_description.mp4","poster":"thumbnails/bolt_description.jpg","caption":"u = 6 m/s, yaw 0°"}]},{"index":"08","id":"booster_t1_description","name":"Booster T1","clips":[{"raw":"u6_yaw_p0","speed":6,"yaw":0,"yawText":"0°","key":"zero","src":"booster_t1_description.mp4","poster":"thumbnails/booster_t1_description.jpg","caption":"u = 6 m/s, yaw 0°"}]},{"index":"09","id":"cassie_description","name":"Cassie","clips":[{"raw":"u6_yaw_p0","speed":6,"yaw":0,"yawText":"0°","key":"zero","src":"cassie_description.mp4","poster":"thumbnails/cassie_description.jpg","caption":"u = 6 m/s, yaw 0°"}]},{"index":"10","id":"ergocub_description","name":"ergoCub","clips":[{"raw":"u6_yaw_p0","speed":6,"yaw":0,"yawText":"0°","key":"zero","src":"ergocub_description.mp4","poster":"thumbnails/ergocub_description.jpg","caption":"u = 6 m/s, yaw 0°"}]},{"index":"11","id":"g1_description","name":"G1","clips":[{"raw":"u6_yaw_p0","speed":6,"yaw":0,"yawText":"0°","key":"zero","src":"g1_description.mp4","poster":"thumbnails/g1_description.jpg","caption":"u = 6 m/s, yaw 0°"}]},{"index":"12","id":"go2_description","name":"Go2","clips":[{"raw":"u6_yaw_p0","speed":6,"yaw":0,"yawText":"0°","key":"zero","src":"go2_description.mp4","poster":"thumbnails/go2_description.jpg","caption":"u = 6 m/s, yaw 0°"}]},{"index":"13","id":"h1_2_description","name":"H1-2","clips":[{"raw":"u6_yaw_p0","speed":6,"yaw":0,"yawText":"0°","key":"zero","src":"h1_2_description.mp4","poster":"thumbnails/h1_2_description.jpg","caption":"u = 6 m/s, yaw 0°"}]},{"index":"14","id":"h1_description","name":"H1","clips":[{"raw":"u6_yaw_p0","speed":6,"yaw":0,"yawText":"0°","key":"zero","src":"h1_description.mp4","poster":"thumbnails/h1_description.jpg","caption":"u = 6 m/s, yaw 0°"}]},{"index":"15","id":"jvrc_description","name":"JVRC-1","clips":[{"raw":"u6_yaw_p0","speed":6,"yaw":0,"yawText":"0°","key":"zero","src":"jvrc_description.mp4","poster":"thumbnails/jvrc_description.jpg","caption":"u = 6 m/s, yaw 0°"}]},{"index":"16","id":"laikago_description","name":"Laikago","clips":[{"raw":"u6_yaw_p0","speed":6,"yaw":0,"yawText":"0°","key":"zero","src":"laikago_description.mp4","poster":"thumbnails/laikago_description.jpg","caption":"u = 6 m/s, yaw 0°"}]},{"index":"17","id":"legolas_description","name":"Legolas","clips":[{"raw":"u6_yaw_p0","speed":6,"yaw":0,"yawText":"0°","key":"zero","src":"legolas_description.mp4","poster":"thumbnails/legolas_description.jpg","caption":"u = 6 m/s, yaw 0°"}]},{"index":"18","id":"mini_cheetah_description","name":"Mini Cheetah","clips":[{"raw":"u6_yaw_p0","speed":6,"yaw":0,"yawText":"0°","key":"zero","src":"mini_cheetah_description.mp4","poster":"thumbnails/mini_cheetah_description.jpg","caption":"u = 6 m/s, yaw 0°"}]},{"index":"19","id":"rhea_description","name":"Rhea","clips":[{"raw":"u6_yaw_p0","speed":6,"yaw":0,"yawText":"0°","key":"zero","src":"rhea_description.mp4","poster":"thumbnails/rhea_description.jpg","caption":"u = 6 m/s, yaw 0°"}]},{"index":"20","id":"solo_description","name":"Solo","clips":[{"raw":"u6_yaw_p0","speed":6,"yaw":0,"yawText":"0°","key":"zero","src":"solo_description.mp4","poster":"thumbnails/solo_description.jpg","caption":"u = 6 m/s, yaw 0°"}]},{"index":"21","id":"talos_description","name":"TALOS","clips":[{"raw":"u6_yaw_p0","speed":6,"yaw":0,"yawText":"0°","key":"zero","src":"talos_description.mp4","poster":"thumbnails/talos_description.jpg","caption":"u = 6 m/s, yaw 0°"}]},{"index":"22","id":"thormang3_description","name":"THORMANG3","clips":[{"raw":"u6_yaw_p0","speed":6,"yaw":0,"yawText":"0°","key":"zero","src":"thormang3_description.mp4","poster":"thumbnails/thormang3_description.jpg","caption":"u = 6 m/s, yaw 0°"}]}];

function videoHTML(clip, label){
  return '<figure class="clip">' +
    '<video playsinline muted loop preload="none" title="Click to pause" ' +
      'poster="' + ASSET(clip.poster) + '" data-src="' + clip.src + '" aria-label="' + label + '"></video>' +
    '<figcaption><span class="tag">u = ' + clip.speed + ' m/s</span>' +
      '<span class="tag yaw-' + clip.key + '">yaw ' + clip.yawText + '</span>' +
    '</figcaption></figure>';
}

document.getElementById("grid").innerHTML = ROBOTS.map(function(r){
  var name = r.name;
  return '<article class="gallery-card">' +
    '<div class="card-hd"><span class="idx">' + r.index + '</span><h3>' + name + '</h3>' +
      '<span class="rid">' + r.id + '</span></div>' +
    '<div class="clips">' + r.clips.map(function(c){ return videoHTML(c, name + ", " + c.caption); }).join("") + '</div>' +
  '</article>';
}).join("");

/* Attach and play only what is on screen, so the clip grid stays cheap. */
const clipObserver = new IntersectionObserver(function(entries){
  for (const entry of entries){
    const v = entry.target.querySelector("video");
    if (!v) continue;
    if (entry.isIntersecting){
      if (!v.dataset.loaded){ v.dataset.loaded = "1"; v.src = ASSET(v.dataset.src); v.load(); }
      const p = v.play();
      if (p && p.catch) p.catch(function(){});
    } else {
      v.pause();
    }
  }
}, { rootMargin: "300px 0px", threshold: 0.2 });

document.querySelectorAll(".clip").forEach(function(el){ clipObserver.observe(el); });

document.addEventListener("click", function(e){
  const v = e.target.closest ? e.target.closest(".clip video") : null;
  if (!v) return;
  if (v.paused){ v.play().catch(function(){}); } else { v.pause(); }
});

/* ------------------------------------------------------------------ *
 * Top nav: solid after the hero, highlight the section on screen
 * ------------------------------------------------------------------ */

const topNav = document.getElementById("topnav");
new IntersectionObserver(function(entries){
  topNav.classList.toggle("solid", !entries[0].isIntersecting);
}, { rootMargin: "-64px 0px 0px 0px" }).observe(document.getElementById("hero"));

const navLinks = Array.from(document.querySelectorAll("#topnav .nav-links a"));
const navSpy = new IntersectionObserver(function(entries){
  for (const entry of entries){
    if (!entry.isIntersecting) continue;
    const id = "#" + entry.target.id;
    navLinks.forEach(a => a.classList.toggle("on", a.getAttribute("href") === id));
  }
}, { rootMargin: "-45% 0px -50% 0px" });
navLinks.forEach(function(a){
  const t = document.querySelector(a.getAttribute("href"));
  if (t) navSpy.observe(t);
});

/* ------------------------------------------------------------------ *
 * Qualitative comparison: GT velocity field + per-method error, 30 frames
 * ------------------------------------------------------------------ */

const CMP_METHODS = [
  { key: "gt", label: "Ground truth", ref: true },
  { key: "ours", label: "DynaSolver (Ours)", ours: true },
  { key: "abupt", label: "AB-UPT" },
  { key: "physgto", label: "PhysGTO" },
  { key: "transolver", label: "Transolver" },
  { key: "linearno", label: "LinearNO" },
  { key: "p3d", label: "P3D" }
];
const CMP_ROBOT = { a1: "A1", g1: "G1", h1_2: "H1-2" };
const CMP_FRAME_MS = 100;

const cmp = { data: null, caseId: null, frame: 0, playing: false, timer: 0, cache: new Set() };

function cmpCaseLabel(id){
  return CMP_ROBOT[id] || id;
}
const cmpCase = () => cmp.data.cases[cmp.caseId];
const cmpSrc = (method, frame) =>
  ASSET("compare/" + cmp.caseId + "/" + method + "/" + String(frame).padStart(4, "0") + ".webp");

function cmpPreload(){
  const key = cmp.caseId;
  if (cmp.cache.has(key)) return;
  cmp.cache.add(key);
  for (let f = 0; f < cmpCase().frames; f++){
    for (const m of CMP_METHODS){ new Image().src = cmpSrc(m.key, f); }
  }
}

function cmpPaint(){
  for (const m of CMP_METHODS){
    const img = document.querySelector('.cmp-pane[data-method="' + m.key + '"] img');
    const src = cmpSrc(m.key, cmp.frame);
    if (img.getAttribute("src") !== src) img.src = src;
    img.alt = m.label + ", " + cmpCaseLabel(cmp.caseId) + ", frame " + cmp.frame;
  }
  document.getElementById("cmpFrame").textContent =
    "frame " + String(cmp.frame + 1).padStart(2, "0") + " / " + cmpCase().frames + (cmp.playing ? "" : " · paused");
}

function cmpPaintScales(){
  const c = cmpCase();
  document.getElementById("cmpScales").innerHTML =
    '<div class="cmp-scale field"><div class="t"><b>Ground truth · |u| / u∞</b>fixed scale for this robot</div>' +
      '<img src="' + ASSET(c.fieldBar) + '" alt="Ground-truth velocity color scale, low to high"></div>' +
    '<div class="cmp-scale error"><div class="t"><b>Error · |Δu| / u∞</b>shared by all six methods</div>' +
      '<img src="' + ASSET(c.errorBar) + '" alt="Velocity error color scale, low to high"></div>';
}

function cmpRefresh(){
  cmpPreload(); cmpPaint(); cmpPaintScales();
  document.querySelectorAll("#cmpCaseChips .chip").forEach(c => c.classList.toggle("sel", c.dataset.caseid === cmp.caseId));
  document.getElementById("cmpBoard").style.setProperty("--shot-ar", String(cmpCase().aspect));
}

function cmpPlay(){
  if (cmp.playing || !cmp.data) return;
  cmp.playing = true;
  cmp.timer = setInterval(function(){
    cmp.frame = (cmp.frame + 1) % cmpCase().frames;
    cmpPaint();
  }, CMP_FRAME_MS);
  cmpPaint();
}
function cmpStop(){
  cmp.playing = false;
  clearInterval(cmp.timer);
  if (cmp.data) cmpPaint();
}

function cmpBuild(data){
  cmp.data = data;
  const ids = Object.keys(data.cases);
  cmp.caseId = ids[0];

  document.getElementById("cmpCaseChips").innerHTML = ids.map(id =>
    '<span class="chip" data-caseid="' + id + '">' + cmpCaseLabel(id) + "</span>").join("");
  const board = document.getElementById("cmpBoard");
  board.innerHTML = CMP_METHODS.map(m =>
    '<figure class="cmp-pane' + (m.ref ? " ref" : "") + (m.ours ? " ours" : "") + '" data-method="' + m.key + '">' +
      '<div class="cmp-shot"><img alt=""></div>' +
      '<figcaption>' + m.label + '<span class="badge">' + (m.ref ? "field" : "error") + "</span></figcaption></figure>").join("");
  board.appendChild(document.getElementById("cmpScales"));

  document.getElementById("cmpCaseChips").addEventListener("click", function(e){
    const chip = e.target.closest(".chip");
    if (chip){ cmp.caseId = chip.dataset.caseid; cmp.frame = 0; cmpRefresh(); }
  });
  document.getElementById("cmpBoard").addEventListener("click", function(e){
    if (e.target.closest(".cmp-scale")) return;
    if (cmp.playing) cmpStop(); else cmpPlay();
  });

  cmpRefresh();
  new IntersectionObserver(function(entries){
    if (entries[0].isIntersecting) cmpPlay(); else cmpStop();
  }, { threshold: 0.1 }).observe(document.getElementById("cmpBoard"));
}

fetch(ASSET("compare/compare_data.json")).then(r => r.json()).then(cmpBuild);
document.addEventListener("visibilitychange", function(){ if (document.hidden) cmpStop(); });

/* ------------------------------------------------------------------ *
 * Training-strategy ablation (RoboCFD-4D Mini)
 * ------------------------------------------------------------------ */

const ABL_ROWS = [
  { name: "Unroll", err: 16.47, time: 16.575, muted: true },
  { name: "Pushforward", err: 16.53, time: 16.476, muted: true },
  { name: "Parallel TF", err: 18.18, time: 1.792 },
  { name: "Parallel TF + Noise", err: 17.14, time: 3.342 },
  { name: "Pure Replay", err: 16.72, time: 2.824 },
  { name: "Replay-Augmented Parallel", err: 16.14, time: 3.384, ours: true }
];
const ABL_ERR_FLOOR = 15;
(function ablBuild(){
  const root = document.getElementById("ablRows");
  if (!root) return;
  const errMax = Math.max(...ABL_ROWS.map(r => r.err));
  const timeMax = Math.max(...ABL_ROWS.map(r => r.time));
  const bestErr = Math.min(...ABL_ROWS.map(r => r.err));
  root.innerHTML = ABL_ROWS.map(function(r){
    const ew = ((r.err - ABL_ERR_FLOOR) / (errMax - ABL_ERR_FLOOR) * 100).toFixed(1);
    const tw = (r.time / timeMax * 100).toFixed(1);
    return '<div class="abl-row' + (r.ours ? " ours" : "") + (r.muted ? " muted" : "") + '">' +
      '<span class="abl-name">' + r.name + "</span>" +
      '<span class="abl-cell"><i style="width:' + ew + '%"></i><b' + (r.err === bestErr ? ' class="best"' : "") + ">" + r.err.toFixed(2) + "</b></span>" +
      '<span class="abl-cell"><i style="width:' + tw + '%"></i><b>' + r.time.toFixed(2) + "</b></span>" +
    "</div>";
  }).join("");
})();

/* ------------------------------------------------------------------ *
 * Rollout curves: inline the paper SVGs and draw them along time
 * ------------------------------------------------------------------ */

const ROLL_DRAW_MS = 3600;
const ROLL_HOLD_MS = 2600;

function rollPrepare(svg){
  const parsePts = d => (d.match(/-?\d+(\.\d+)?/g) || []).map(Number);
  const curves = [];
  const colors = new Set();
  svg.querySelectorAll("path").forEach(function(el){
    const st = el.getAttribute("style") || "";
    const d = el.getAttribute("d") || "";
    if (st.indexOf("fill:none") < 0 || (d.match(/ L /g) || []).length < 4 || / Z/.test(d)) return;
    const n = parsePts(d), pts = [];
    for (let i = 0; i + 1 < n.length; i += 2) pts.push([n[i], n[i + 1]]);
    const m = el.getCTM();
    curves.push({ el: el, pts: pts, m: m, gx: pts.map(p => m.a * p[0] + m.c * p[1] + m.e), gy: pts.map(p => m.b * p[0] + m.d * p[1] + m.f) });
    const c = /stroke:([^;]+)/.exec(st);
    if (c) colors.add(c[1].trim());
  });
  if (!curves.length) return null;
  const x0 = Math.min(...curves.map(c => c.gx[0]));
  const x1 = Math.max(...curves.map(c => c.gx[c.gx.length - 1]));
  const yAll = curves.flatMap(c => c.gy);
  const y0 = Math.min(...yAll) - 10, y1 = Math.max(...yAll) + 10;

  const curveEls = new Set(curves.map(c => c.el));
  const markers = [];
  svg.querySelectorAll("path, use").forEach(function(el){
    if (curveEls.has(el) || el.closest("defs, symbol")) return;
    const st = el.getAttribute("style") || "";
    let colored = false;
    colors.forEach(c => { if (st.indexOf(c) >= 0) colored = true; });
    if (!colored) return;
    const bb = el.getBBox(), m = el.getCTM();
    const cx = m.a * (bb.x + bb.width / 2) + m.c * (bb.y + bb.height / 2) + m.e;
    const cy = m.b * (bb.x + bb.width / 2) + m.d * (bb.y + bb.height / 2) + m.f;
    if (cx < x0 - 8 || cx > x1 + 8 || cy < y0 || cy > y1) return;
    el.classList.add("roll-marker");
    markers.push({ el: el, cx: cx });
  });

  const cursor = document.createElementNS("http://www.w3.org/2000/svg", "line");
  cursor.setAttribute("class", "roll-cursor");
  cursor.setAttribute("y1", y0); cursor.setAttribute("y2", y1);
  svg.appendChild(cursor);
  return { curves: curves, markers: markers, x0: x0, x1: x1, cursor: cursor };
}

function rollPaint(state, gx){
  for (const c of state.curves){
    let d = "M " + c.pts[0][0] + " " + c.pts[0][1];
    for (let i = 1; i < c.pts.length; i++){
      if (c.gx[i] <= gx){ d += " L " + c.pts[i][0] + " " + c.pts[i][1]; continue; }
      const t = (gx - c.gx[i - 1]) / (c.gx[i] - c.gx[i - 1]);
      if (t > 0){
        d += " L " + (c.pts[i - 1][0] + t * (c.pts[i][0] - c.pts[i - 1][0])) +
             " " + (c.pts[i - 1][1] + t * (c.pts[i][1] - c.pts[i - 1][1]));
      }
      break;
    }
    c.el.setAttribute("d", d);
  }
  for (const mk of state.markers) mk.el.classList.toggle("on", mk.cx <= gx + 0.5);
  state.cursor.setAttribute("x1", gx); state.cursor.setAttribute("x2", gx);
  state.cursor.style.opacity = gx >= state.x1 ? 0 : 1;
}

(function rollInit(){
  const row = document.getElementById("rolloutRow");
  if (!row) return;
  const holders = Array.from(row.querySelectorAll(".roll-svg"));
  Promise.all(holders.map(h => fetch(h.dataset.svg).then(r => r.text()).then(function(txt){
    h.innerHTML = txt;
    return rollPrepare(h.querySelector("svg"));
  }))).then(function(states){
    states = states.filter(Boolean);
    let start = 0, raf = 0, visible = false;
    function frame(now){
      if (!start) start = now;
      const t = Math.min((now - start) / ROLL_DRAW_MS, 1);
      for (const st of states) rollPaint(st, st.x0 + (st.x1 - st.x0) * t);
      if (now - start > ROLL_DRAW_MS + ROLL_HOLD_MS) start = now;
      raf = visible ? requestAnimationFrame(frame) : 0;
    }
    new IntersectionObserver(function(entries){
      visible = entries[0].isIntersecting;
      if (visible && !raf){ start = 0; raf = requestAnimationFrame(frame); }
    }, { threshold: 0.25 }).observe(row);
  });
})();

(function(){
  const split = document.querySelector(".split-cost");
  if (!split) return;
  const left = split.querySelector(".cost-left");
  const copy = split.querySelector(".split-copy");
  const img = left.querySelector("img");
  const stacked = window.matchMedia("(max-width: 960px)");
  function stackHeight(el){
    const kids = Array.from(el.children);
    const gap = parseFloat(getComputedStyle(el).rowGap) || 0;
    return kids.reduce((a, k) => a + k.getBoundingClientRect().height, 0) + gap * (kids.length - 1);
  }
  function fit(){
    if (stacked.matches || !img.naturalWidth){
      split.style.gridTemplateColumns = "";
      return;
    }
    const total = split.clientWidth;
    let best = 0, bestScore = Infinity;
    for (let f = 0.4; f <= 0.66; f += 0.005){
      const w = Math.round(total * f);
      split.style.gridTemplateColumns = w + "px minmax(0, 1fr)";
      const d = stackHeight(left) - stackHeight(copy);
      const score = d >= -2 ? Math.abs(d) : 1000 - d;
      if (score < bestScore){ bestScore = score; best = w; }
    }
    split.style.gridTemplateColumns = bestScore < 1000 ? best + "px minmax(0, 1fr)" : "minmax(0, 1fr)";
  }
  let raf = 0;
  const schedule = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(fit); };
  if (img.complete) schedule(); else img.addEventListener("load", schedule);
  if (document.fonts) document.fonts.ready.then(schedule);
  window.addEventListener("resize", schedule);
})();
