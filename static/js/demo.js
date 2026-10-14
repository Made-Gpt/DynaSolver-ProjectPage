"use strict";

function ASSET(assetPath){
  return "static/demo/" + assetPath;
}

/* ------------------------------------------------------------------ *
 * Clip grid: looping videos that play while on screen
 * ------------------------------------------------------------------ */

const ROBOTS = [{"index":"01","id":"a1_description","name":"A1","clips":[{"raw":"u2_yaw_p20","speed":2,"yaw":20,"yawText":"+20°","key":"pos","src":"a1_description__u2_yaw_p20__final_corrected.mp4","poster":"thumbnails/a1_description__u2_yaw_p20__final_corrected.jpg","caption":"u = 2 m/s, yaw +20°"},{"raw":"u6_yaw_p20","speed":6,"yaw":20,"yawText":"+20°","key":"pos","src":"a1_description__u6_yaw_p20__final_corrected.mp4","poster":"thumbnails/a1_description__u6_yaw_p20__final_corrected.jpg","caption":"u = 6 m/s, yaw +20°"}]},{"index":"02","id":"aliengo_description","name":"Aliengo","clips":[{"raw":"u3_yaw_m10","speed":3,"yaw":-10,"yawText":"−10°","key":"neg","src":"aliengo_description__u3_yaw_m10__final_corrected.mp4","poster":"thumbnails/aliengo_description__u3_yaw_m10__final_corrected.jpg","caption":"u = 3 m/s, yaw −10°"},{"raw":"u4_yaw_p0","speed":4,"yaw":0,"yawText":"0°","key":"zero","src":"aliengo_description__u4_yaw_p0__final_corrected.mp4","poster":"thumbnails/aliengo_description__u4_yaw_p0__final_corrected.jpg","caption":"u = 4 m/s, yaw 0°"}]},{"index":"03","id":"anymal_b_description","name":"ANYmal B","clips":[{"raw":"u4_yaw_p20","speed":4,"yaw":20,"yawText":"+20°","key":"pos","src":"anymal_b_description__u4_yaw_p20__final_corrected.mp4","poster":"thumbnails/anymal_b_description__u4_yaw_p20__final_corrected.jpg","caption":"u = 4 m/s, yaw +20°"},{"raw":"u6_yaw_p0","speed":6,"yaw":0,"yawText":"0°","key":"zero","src":"anymal_b_description__u6_yaw_p0__final_corrected.mp4","poster":"thumbnails/anymal_b_description__u6_yaw_p0__final_corrected.jpg","caption":"u = 6 m/s, yaw 0°"}]},{"index":"04","id":"anymal_d_description","name":"ANYmal D","clips":[{"raw":"u4_yaw_p0","speed":4,"yaw":0,"yawText":"0°","key":"zero","src":"anymal_d_description__u4_yaw_p0__final_corrected.mp4","poster":"thumbnails/anymal_d_description__u4_yaw_p0__final_corrected.jpg","caption":"u = 4 m/s, yaw 0°"},{"raw":"u8_yaw_p20","speed":8,"yaw":20,"yawText":"+20°","key":"pos","src":"anymal_d_description__u8_yaw_p20__final_corrected.mp4","poster":"thumbnails/anymal_d_description__u8_yaw_p20__final_corrected.jpg","caption":"u = 8 m/s, yaw +20°"}]},{"index":"05","id":"b1_description","name":"B1","clips":[{"raw":"u2_yaw_p20","speed":2,"yaw":20,"yawText":"+20°","key":"pos","src":"b1_description__u2_yaw_p20__final_corrected.mp4","poster":"thumbnails/b1_description__u2_yaw_p20__final_corrected.jpg","caption":"u = 2 m/s, yaw +20°"},{"raw":"u6_yaw_m20","speed":6,"yaw":-20,"yawText":"−20°","key":"neg","src":"b1_description__u6_yaw_m20__final_corrected.mp4","poster":"thumbnails/b1_description__u6_yaw_m20__final_corrected.jpg","caption":"u = 6 m/s, yaw −20°"}]},{"index":"06","id":"b2_description","name":"B2","clips":[{"raw":"u6_yaw_m20","speed":6,"yaw":-20,"yawText":"−20°","key":"neg","src":"b2_description__u6_yaw_m20__final_corrected.mp4","poster":"thumbnails/b2_description__u6_yaw_m20__final_corrected.jpg","caption":"u = 6 m/s, yaw −20°"},{"raw":"u8_yaw_p0","speed":8,"yaw":0,"yawText":"0°","key":"zero","src":"b2_description__u8_yaw_p0__final_corrected.mp4","poster":"thumbnails/b2_description__u8_yaw_p0__final_corrected.jpg","caption":"u = 8 m/s, yaw 0°"}]},{"index":"07","id":"bolt_description","name":"Bolt","clips":[{"raw":"u2_yaw_m20","speed":2,"yaw":-20,"yawText":"−20°","key":"neg","src":"bolt_description__u2_yaw_m20__final_corrected.mp4","poster":"thumbnails/bolt_description__u2_yaw_m20__final_corrected.jpg","caption":"u = 2 m/s, yaw −20°"},{"raw":"u3_yaw_p10","speed":3,"yaw":10,"yawText":"+10°","key":"pos","src":"bolt_description__u3_yaw_p10__final_corrected.mp4","poster":"thumbnails/bolt_description__u3_yaw_p10__final_corrected.jpg","caption":"u = 3 m/s, yaw +10°"}]},{"index":"08","id":"booster_t1_description","name":"Booster T1","clips":[{"raw":"u2_yaw_m20","speed":2,"yaw":-20,"yawText":"−20°","key":"neg","src":"booster_t1_description__u2_yaw_m20__final_corrected.mp4","poster":"thumbnails/booster_t1_description__u2_yaw_m20__final_corrected.jpg","caption":"u = 2 m/s, yaw −20°"},{"raw":"u4_yaw_m20","speed":4,"yaw":-20,"yawText":"−20°","key":"neg","src":"booster_t1_description__u4_yaw_m20__final_corrected.mp4","poster":"thumbnails/booster_t1_description__u4_yaw_m20__final_corrected.jpg","caption":"u = 4 m/s, yaw −20°"}]},{"index":"09","id":"cassie_description","name":"Cassie","clips":[{"raw":"u4_yaw_p20","speed":4,"yaw":20,"yawText":"+20°","key":"pos","src":"cassie_description__u4_yaw_p20__final_corrected.mp4","poster":"thumbnails/cassie_description__u4_yaw_p20__final_corrected.jpg","caption":"u = 4 m/s, yaw +20°"},{"raw":"u6_yaw_p0","speed":6,"yaw":0,"yawText":"0°","key":"zero","src":"cassie_description__u6_yaw_p0__final_corrected.mp4","poster":"thumbnails/cassie_description__u6_yaw_p0__final_corrected.jpg","caption":"u = 6 m/s, yaw 0°"}]},{"index":"10","id":"ergocub_description","name":"ergoCub","clips":[{"raw":"u4_yaw_p20","speed":4,"yaw":20,"yawText":"+20°","key":"pos","src":"ergocub_description__u4_yaw_p20__final_corrected.mp4","poster":"thumbnails/ergocub_description__u4_yaw_p20__final_corrected.jpg","caption":"u = 4 m/s, yaw +20°"},{"raw":"u8_yaw_p20","speed":8,"yaw":20,"yawText":"+20°","key":"pos","src":"ergocub_description__u8_yaw_p20__final_corrected.mp4","poster":"thumbnails/ergocub_description__u8_yaw_p20__final_corrected.jpg","caption":"u = 8 m/s, yaw +20°"}]},{"index":"11","id":"g1_description","name":"G1","clips":[{"raw":"u2_yaw_m20","speed":2,"yaw":-20,"yawText":"−20°","key":"neg","src":"g1_description__u2_yaw_m20__final_corrected.mp4","poster":"thumbnails/g1_description__u2_yaw_m20__final_corrected.jpg","caption":"u = 2 m/s, yaw −20°"},{"raw":"u2_yaw_p0","speed":2,"yaw":0,"yawText":"0°","key":"zero","src":"g1_description__u2_yaw_p0__final_corrected.mp4","poster":"thumbnails/g1_description__u2_yaw_p0__final_corrected.jpg","caption":"u = 2 m/s, yaw 0°"}]},{"index":"12","id":"go2_description","name":"Go2","clips":[{"raw":"u6_yaw_m20","speed":6,"yaw":-20,"yawText":"−20°","key":"neg","src":"go2_description__u6_yaw_m20__final_corrected.mp4","poster":"thumbnails/go2_description__u6_yaw_m20__final_corrected.jpg","caption":"u = 6 m/s, yaw −20°"},{"raw":"u7_yaw_p10","speed":7,"yaw":10,"yawText":"+10°","key":"pos","src":"go2_description__u7_yaw_p10__final_corrected.mp4","poster":"thumbnails/go2_description__u7_yaw_p10__final_corrected.jpg","caption":"u = 7 m/s, yaw +10°"}]},{"index":"13","id":"h1_2_description","name":"H1-2","clips":[{"raw":"u4_yaw_m20","speed":4,"yaw":-20,"yawText":"−20°","key":"neg","src":"h1_2_description__u4_yaw_m20__final_corrected.mp4","poster":"thumbnails/h1_2_description__u4_yaw_m20__final_corrected.jpg","caption":"u = 4 m/s, yaw −20°"},{"raw":"u8_yaw_m20","speed":8,"yaw":-20,"yawText":"−20°","key":"neg","src":"h1_2_description__u8_yaw_m20__final_corrected.mp4","poster":"thumbnails/h1_2_description__u8_yaw_m20__final_corrected.jpg","caption":"u = 8 m/s, yaw −20°"}]},{"index":"14","id":"h1_description","name":"H1","clips":[{"raw":"u4_yaw_p0","speed":4,"yaw":0,"yawText":"0°","key":"zero","src":"h1_description__u4_yaw_p0__final_corrected.mp4","poster":"thumbnails/h1_description__u4_yaw_p0__final_corrected.jpg","caption":"u = 4 m/s, yaw 0°"},{"raw":"u8_yaw_p0","speed":8,"yaw":0,"yawText":"0°","key":"zero","src":"h1_description__u8_yaw_p0__final_corrected.mp4","poster":"thumbnails/h1_description__u8_yaw_p0__final_corrected.jpg","caption":"u = 8 m/s, yaw 0°"}]},{"index":"15","id":"jvrc_description","name":"JVRC-1","clips":[{"raw":"u4_yaw_p20","speed":4,"yaw":20,"yawText":"+20°","key":"pos","src":"jvrc_description__u4_yaw_p20__final_corrected.mp4","poster":"thumbnails/jvrc_description__u4_yaw_p20__final_corrected.jpg","caption":"u = 4 m/s, yaw +20°"},{"raw":"u8_yaw_m20","speed":8,"yaw":-20,"yawText":"−20°","key":"neg","src":"jvrc_description__u8_yaw_m20__final_corrected.mp4","poster":"thumbnails/jvrc_description__u8_yaw_m20__final_corrected.jpg","caption":"u = 8 m/s, yaw −20°"}]},{"index":"16","id":"laikago_description","name":"Laikago","clips":[{"raw":"u4_yaw_p20","speed":4,"yaw":20,"yawText":"+20°","key":"pos","src":"laikago_description__u4_yaw_p20__final_corrected.mp4","poster":"thumbnails/laikago_description__u4_yaw_p20__final_corrected.jpg","caption":"u = 4 m/s, yaw +20°"},{"raw":"u7_yaw_m10","speed":7,"yaw":-10,"yawText":"−10°","key":"neg","src":"laikago_description__u7_yaw_m10__final_corrected.mp4","poster":"thumbnails/laikago_description__u7_yaw_m10__final_corrected.jpg","caption":"u = 7 m/s, yaw −10°"}]},{"index":"17","id":"legolas_description","name":"Legolas","clips":[{"raw":"u7_yaw_p10","speed":7,"yaw":10,"yawText":"+10°","key":"pos","src":"legolas_description__u7_yaw_p10__final_corrected.mp4","poster":"thumbnails/legolas_description__u7_yaw_p10__final_corrected.jpg","caption":"u = 7 m/s, yaw +10°"},{"raw":"u8_yaw_m20","speed":8,"yaw":-20,"yawText":"−20°","key":"neg","src":"legolas_description__u8_yaw_m20__final_corrected.mp4","poster":"thumbnails/legolas_description__u8_yaw_m20__final_corrected.jpg","caption":"u = 8 m/s, yaw −20°"}]},{"index":"18","id":"mini_cheetah_description","name":"Mini Cheetah","clips":[{"raw":"u8_yaw_p0","speed":8,"yaw":0,"yawText":"0°","key":"zero","src":"mini_cheetah_description__u8_yaw_p0__final_corrected.mp4","poster":"thumbnails/mini_cheetah_description__u8_yaw_p0__final_corrected.jpg","caption":"u = 8 m/s, yaw 0°"},{"raw":"u8_yaw_p20","speed":8,"yaw":20,"yawText":"+20°","key":"pos","src":"mini_cheetah_description__u8_yaw_p20__final_corrected.mp4","poster":"thumbnails/mini_cheetah_description__u8_yaw_p20__final_corrected.jpg","caption":"u = 8 m/s, yaw +20°"}]},{"index":"19","id":"solo_description","name":"Solo","clips":[{"raw":"u2_yaw_p20","speed":2,"yaw":20,"yawText":"+20°","key":"pos","src":"solo_description__u2_yaw_p20__final_corrected.mp4","poster":"thumbnails/solo_description__u2_yaw_p20__final_corrected.jpg","caption":"u = 2 m/s, yaw +20°"},{"raw":"u8_yaw_p20","speed":8,"yaw":20,"yawText":"+20°","key":"pos","src":"solo_description__u8_yaw_p20__final_corrected.mp4","poster":"thumbnails/solo_description__u8_yaw_p20__final_corrected.jpg","caption":"u = 8 m/s, yaw +20°"}]},{"index":"20","id":"talos_description","name":"TALOS","clips":[{"raw":"u3_yaw_p10","speed":3,"yaw":10,"yawText":"+10°","key":"pos","src":"talos_description__u3_yaw_p10__final_corrected.mp4","poster":"thumbnails/talos_description__u3_yaw_p10__final_corrected.jpg","caption":"u = 3 m/s, yaw +10°"},{"raw":"u8_yaw_p20","speed":8,"yaw":20,"yawText":"+20°","key":"pos","src":"talos_description__u8_yaw_p20__final_corrected.mp4","poster":"thumbnails/talos_description__u8_yaw_p20__final_corrected.jpg","caption":"u = 8 m/s, yaw +20°"}]}];

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

/* Attach and play only what is on screen, so 42 clips stay cheap. */
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
 * Qualitative comparison: GT field + per-method error maps, 30 frames
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
const CMP_QUANTITIES = [
  { key: "velocity", label: "Velocity" },
  { key: "pressure", label: "Pressure" }
];
const CMP_ROBOT = { a1: "A1", g1: "G1", h1_2: "H1-2" };
const CMP_FRAME_MS = 100;

const cmp = { data: null, caseId: null, quantity: "velocity", frame: 0, playing: false, timer: 0, cache: new Set() };

function cmpCaseLabel(id){
  const m = /^(.*)_u(\d+)_yaw_([pm])(\d+)$/.exec(id);
  if (!m) return id;
  const yaw = m[4] === "0" ? "0°" : (m[3] === "m" ? "−" : "+") + m[4] + "°";
  return (CMP_ROBOT[m[1]] || m[1]) + " · yaw " + yaw;
}
const cmpCase = () => cmp.data.cases[cmp.caseId];
const cmpSrc = (method, frame) =>
  ASSET("compare/" + cmp.caseId + "/" + method + "/" + cmp.quantity + "/" + String(frame).padStart(4, "0") + ".webp");

function cmpPreload(){
  const key = cmp.caseId + "|" + cmp.quantity;
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
    img.alt = m.label + ", " + cmpCaseLabel(cmp.caseId) + ", " + cmp.quantity + ", frame " + cmp.frame;
  }
  document.getElementById("cmpFrame").textContent =
    "frame " + String(cmp.frame + 1).padStart(2, "0") + " / " + cmpCase().frames + (cmp.playing ? "" : " · paused");
}

const CMP_RAMPS_CSS = {"turbo": "linear-gradient(90deg,rgb(48,18,59) 0%,rgb(59,47,128) 4%,rgb(67,78,186) 8%,rgb(70,107,227) 12%,rgb(70,133,250) 17%,rgb(59,160,253) 21%,rgb(40,188,235) 25%,rgb(26,210,210) 29%,rgb(26,228,182) 33%,rgb(50,242,152) 38%,rgb(85,250,118) 42%,rgb(128,255,83) 46%,rgb(164,252,60) 50%,rgb(190,244,52) 54%,rgb(217,228,54) 58%,rgb(238,207,58) 62%,rgb(250,186,57) 67%,rgb(254,158,47) 71%,rgb(251,126,33) 75%,rgb(242,96,20) 79%,rgb(228,69,10) 83%,rgb(208,47,5) 88%,rgb(185,30,2) 92%,rgb(155,15,1) 96%,rgb(122,4,3) 100%)", "coolwarm": "linear-gradient(90deg,rgb(59,76,192) 0%,rgb(70,94,207) 4%,rgb(84,112,222) 8%,rgb(98,130,234) 12%,rgb(111,146,243) 17%,rgb(126,161,250) 21%,rgb(141,176,254) 25%,rgb(155,188,255) 29%,rgb(170,199,253) 33%,rgb(185,208,249) 38%,rgb(197,214,242) 42%,rgb(210,219,232) 46%,rgb(221,220,220) 50%,rgb(231,215,206) 54%,rgb(239,206,189) 58%,rgb(245,196,172) 62%,rgb(247,184,156) 67%,rgb(247,169,139) 71%,rgb(244,152,122) 75%,rgb(239,136,107) 79%,rgb(231,116,91) 83%,rgb(221,95,75) 88%,rgb(209,73,63) 92%,rgb(195,46,49) 96%,rgb(180,4,38) 100%)"};

function cmpFmt(v, lo, hi){
  const span = Math.abs(hi - lo);
  if (span <= 1) return v.toFixed(2);
  if (span <= 10) return v.toFixed(1);
  return v.toFixed(0);
}
function cmpRampBlock(title, note, ramp, lo, hi){
  let marks = "", ticks = "";
  for (let i = 0; i < 5; i++){
    marks += '<i style="left:' + (i * 25) + '%"></i>';
    ticks += "<span>" + cmpFmt(lo + (hi - lo) * i / 4, lo, hi) + "</span>";
  }
  return '<div class="cmp-scale"><div class="t"><b>' + title + "</b>" + note + "</div>" +
    '<div class="bar" style="background-image:' + CMP_RAMPS_CSS[ramp] + '"><div class="marks">' + marks + "</div></div>" +
    '<div class="ticks">' + ticks + "</div></div>";
}
function cmpPaintScales(){
  const speed = cmp.quantity === "velocity";
  const clim = cmpCase().clim;
  const field = clim[cmp.quantity];
  const err = clim[cmp.quantity + "_error"];
  document.getElementById("cmpScales").innerHTML =
    cmpRampBlock(speed ? "Ground truth · |U| / U∞" : "Ground truth · pressure p",
      "fixed scale for this case", speed ? "turbo" : "coolwarm", field[0], field[1]) +
    cmpRampBlock(speed ? "Error · |ΔU| / U∞" : "Error · |p_pred − p_ref|",
      "shared by all six methods", "turbo", err[0], err[1]);
}

function cmpRefresh(){
  cmpPreload(); cmpPaint(); cmpPaintScales();
  document.querySelectorAll("#cmpCaseChips .chip").forEach(c => c.classList.toggle("sel", c.dataset.caseid === cmp.caseId));
  document.querySelectorAll("#cmpModeChips .chip").forEach(c => c.classList.toggle("sel", c.dataset.q === cmp.quantity));
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
  document.getElementById("cmpModeChips").innerHTML = CMP_QUANTITIES.map(q =>
    '<span class="chip" data-q="' + q.key + '">' + q.label + "</span>").join("");
  document.getElementById("cmpBoard").innerHTML = CMP_METHODS.map(m =>
    '<figure class="cmp-pane' + (m.ref ? " ref" : "") + (m.ours ? " ours" : "") + '" data-method="' + m.key + '">' +
      '<div class="cmp-shot"><img alt=""></div>' +
      '<figcaption>' + m.label + '<span class="badge">' + (m.ref ? "field" : "error") + "</span></figcaption></figure>").join("");

  document.getElementById("cmpCaseChips").addEventListener("click", function(e){
    const chip = e.target.closest(".chip");
    if (chip){ cmp.caseId = chip.dataset.caseid; cmpRefresh(); }
  });
  document.getElementById("cmpModeChips").addEventListener("click", function(e){
    const chip = e.target.closest(".chip");
    if (chip){ cmp.quantity = chip.dataset.q; cmpRefresh(); }
  });
  document.getElementById("cmpBoard").addEventListener("click", function(){
    if (cmp.playing) cmpStop(); else cmpPlay();
  });

  cmpRefresh();
  new IntersectionObserver(function(entries){
    if (entries[0].isIntersecting) cmpPlay(); else cmpStop();
  }, { threshold: 0.1 }).observe(document.getElementById("cmpBoard"));
}

fetch(ASSET("compare/compare_data.json")).then(r => r.json()).then(cmpBuild);
document.addEventListener("visibilitychange", function(){ if (document.hidden) cmpStop(); });
