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
  const v = e.target.closest ? e.target.closest("video") : null;
  if (!v) return;
  if (v.paused){ v.play().catch(function(){}); } else { v.pause(); }
});

/* ------------------------------------------------------------------ *
 * Accuracy comparison: reference field vs. predicted error maps
 * ------------------------------------------------------------------ */
const CMP_DATA = {"cases":{"a1_u4_yaw_p0":{"aspect":1.14811,"colormaps":{"pressure":"coolwarm","pressure_error":"turbo","velocity":"turbo","velocity_error":"turbo"},"frames":[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"methods":{"abupt":{"10":{"pressure":1.256,"velocity":0.398},"11":{"pressure":1.309,"velocity":0.4022},"12":{"pressure":1.418,"velocity":0.3958},"13":{"pressure":1.474,"velocity":0.4018},"14":{"pressure":1.491,"velocity":0.3939},"15":{"pressure":1.536,"velocity":0.3573},"16":{"pressure":1.604,"velocity":0.3591},"17":{"pressure":1.442,"velocity":0.3586},"18":{"pressure":1.412,"velocity":0.387},"19":{"pressure":1.535,"velocity":0.3774},"20":{"pressure":1.373,"velocity":0.3768},"21":{"pressure":1.429,"velocity":0.4032},"22":{"pressure":1.427,"velocity":0.4075},"23":{"pressure":1.666,"velocity":0.4138},"24":{"pressure":1.705,"velocity":0.4045},"6":{"pressure":1.282,"velocity":0.2994},"7":{"pressure":1.306,"velocity":0.3429},"8":{"pressure":1.175,"velocity":0.3609},"9":{"pressure":1.305,"velocity":0.3781}},"ours":{"10":{"pressure":0.6386,"velocity":0.133},"11":{"pressure":0.5441,"velocity":0.1309},"12":{"pressure":0.4865,"velocity":0.1234},"13":{"pressure":0.5244,"velocity":0.1251},"14":{"pressure":0.5809,"velocity":0.1277},"15":{"pressure":0.7212,"velocity":0.1292},"16":{"pressure":0.7726,"velocity":0.1345},"17":{"pressure":0.6162,"velocity":0.133},"18":{"pressure":0.6272,"velocity":0.1209},"19":{"pressure":0.6978,"velocity":0.1396},"20":{"pressure":0.5922,"velocity":0.1427},"21":{"pressure":0.5933,"velocity":0.156},"22":{"pressure":0.5799,"velocity":0.1545},"23":{"pressure":0.5148,"velocity":0.1369},"24":{"pressure":0.5472,"velocity":0.1365},"6":{"pressure":0.5767,"velocity":0.123},"7":{"pressure":0.5859,"velocity":0.1136},"8":{"pressure":0.6387,"velocity":0.1248},"9":{"pressure":0.6279,"velocity":0.1206}},"physgto":{"10":{"pressure":0.9168,"velocity":0.1711},"11":{"pressure":0.9576,"velocity":0.1659},"12":{"pressure":1.057,"velocity":0.1788},"13":{"pressure":1.094,"velocity":0.2151},"14":{"pressure":1.245,"velocity":0.2305},"15":{"pressure":1.24,"velocity":0.2327},"16":{"pressure":1.249,"velocity":0.2458},"17":{"pressure":1.17,"velocity":0.2316},"18":{"pressure":1.29,"velocity":0.231},"19":{"pressure":1.263,"velocity":0.2537},"20":{"pressure":1.081,"velocity":0.2478},"21":{"pressure":1.085,"velocity":0.2376},"22":{"pressure":1.147,"velocity":0.2353},"23":{"pressure":1.216,"velocity":0.2475},"24":{"pressure":1.224,"velocity":0.2759},"6":{"pressure":0.8463,"velocity":0.1778},"7":{"pressure":0.9649,"velocity":0.1736},"8":{"pressure":0.8962,"velocity":0.1768},"9":{"pressure":0.7594,"velocity":0.1682}}},"pressure_error_clim":[0.0,0.13506042387286205],"reference_clim":{"pressure":{"10":[-4.992,5.613],"11":[-5.028,5.768],"12":[-5.421,5.467],"13":[-5.406,5.056],"14":[-5.475,4.807],"15":[-5.229,5.186],"16":[-5.327,4.123],"17":[-5.454,4.713],"18":[-5.497,4.544],"19":[-5.318,5.194],"20":[-5.258,5.352],"21":[-5.269,5.016],"22":[-5.102,5.424],"23":[-5.196,5.455],"24":[-5.626,5.0],"6":[-5.56,4.504],"7":[-5.747,4.688],"8":[-5.45,5.086],"9":[-5.036,4.435]},"velocity":{"10":[0.02032,0.5905],"11":[0.01884,0.682],"12":[0.02676,0.6052],"13":[0.03,0.6334],"14":[0.02913,0.5984],"15":[0.0208,0.6383],"16":[0.01822,0.6285],"17":[0.02475,0.5861],"18":[0.03213,0.5982],"19":[0.03497,0.6191],"20":[0.02993,0.5818],"21":[0.02122,0.5847],"22":[0.01815,0.6996],"23":[0.02599,0.5994],"24":[0.03011,0.6269],"6":[0.02542,0.5867],"7":[0.03193,0.6107],"8":[0.03446,0.6195],"9":[0.029,0.5846]}},"u_ref":4.0,"velocity_error_clim":[0.0,0.12265030666682551]},"h1_2_u2_yaw_m20":{"aspect":0.685,"colormaps":{"pressure":"coolwarm","pressure_error":"turbo","velocity":"turbo","velocity_error":"turbo"},"frames":[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"methods":{"abupt":{"10":{"pressure":0.4108,"velocity":0.3315},"11":{"pressure":0.4617,"velocity":0.3346},"12":{"pressure":0.4636,"velocity":0.291},"13":{"pressure":0.4813,"velocity":0.3192},"14":{"pressure":0.492,"velocity":0.3074},"15":{"pressure":0.5394,"velocity":0.3326},"16":{"pressure":0.482,"velocity":0.3174},"17":{"pressure":0.4935,"velocity":0.3536},"18":{"pressure":0.471,"velocity":0.3353},"19":{"pressure":0.5446,"velocity":0.3323},"20":{"pressure":0.4463,"velocity":0.3011},"21":{"pressure":0.5206,"velocity":0.3054},"22":{"pressure":0.5017,"velocity":0.3579},"23":{"pressure":0.4312,"velocity":0.3311},"24":{"pressure":0.445,"velocity":0.3114},"6":{"pressure":0.4288,"velocity":0.325},"7":{"pressure":0.4614,"velocity":0.3295},"8":{"pressure":0.4398,"velocity":0.3221},"9":{"pressure":0.4665,"velocity":0.3492}},"ours":{"10":{"pressure":0.4484,"velocity":0.2403},"11":{"pressure":0.5135,"velocity":0.2686},"12":{"pressure":0.4888,"velocity":0.2521},"13":{"pressure":0.5955,"velocity":0.2853},"14":{"pressure":0.6267,"velocity":0.2743},"15":{"pressure":0.5611,"velocity":0.2665},"16":{"pressure":0.4544,"velocity":0.2397},"17":{"pressure":0.4105,"velocity":0.2661},"18":{"pressure":0.4051,"velocity":0.2693},"19":{"pressure":0.4958,"velocity":0.286},"20":{"pressure":0.4275,"velocity":0.292},"21":{"pressure":0.5093,"velocity":0.2953},"22":{"pressure":0.4651,"velocity":0.3158},"23":{"pressure":0.3983,"velocity":0.3049},"24":{"pressure":0.43,"velocity":0.2537},"6":{"pressure":0.3663,"velocity":0.2523},"7":{"pressure":0.3545,"velocity":0.2467},"8":{"pressure":0.3959,"velocity":0.2513},"9":{"pressure":0.4119,"velocity":0.255}},"physgto":{"10":{"pressure":0.5839,"velocity":0.3594},"11":{"pressure":0.5558,"velocity":0.3632},"12":{"pressure":0.5867,"velocity":0.3638},"13":{"pressure":0.6454,"velocity":0.3566},"14":{"pressure":0.5968,"velocity":0.3586},"15":{"pressure":0.5697,"velocity":0.3121},"16":{"pressure":0.5665,"velocity":0.3173},"17":{"pressure":0.5476,"velocity":0.3258},"18":{"pressure":0.5493,"velocity":0.3404},"19":{"pressure":0.6179,"velocity":0.3324},"20":{"pressure":0.6016,"velocity":0.3504},"21":{"pressure":0.6482,"velocity":0.3689},"22":{"pressure":0.6575,"velocity":0.4321},"23":{"pressure":0.5536,"velocity":0.4321},"24":{"pressure":0.5751,"velocity":0.4087},"6":{"pressure":0.5625,"velocity":0.3141},"7":{"pressure":0.5561,"velocity":0.3234},"8":{"pressure":0.4924,"velocity":0.3286},"9":{"pressure":0.5482,"velocity":0.3517}}},"pressure_error_clim":[0.0,0.22570549990333594],"reference_clim":{"pressure":{"10":[-4.077,5.216],"11":[-4.353,4.833],"12":[-5.328,5.219],"13":[-5.441,5.509],"14":[-5.297,4.905],"15":[-4.238,4.53],"16":[-3.668,4.835],"17":[-3.839,4.171],"18":[-4.213,4.631],"19":[-4.985,5.317],"20":[-6.41,4.731],"21":[-5.871,4.635],"22":[-5.338,5.782],"23":[-4.76,5.067],"24":[-4.682,4.524],"6":[-6.199,4.514],"7":[-4.111,4.828],"8":[-3.534,4.968],"9":[-3.383,4.997]},"velocity":{"10":[0.04671,0.596],"11":[0.07204,0.7137],"12":[0.09099,0.8972],"13":[0.09596,1.005],"14":[0.09369,1.019],"15":[0.08223,0.9147],"16":[0.06325,0.7656],"17":[0.03731,0.6224],"18":[0.0384,0.5609],"19":[0.06139,0.6199],"20":[0.08088,0.8177],"21":[0.09256,0.9786],"22":[0.09616,1.022],"23":[0.08583,0.9418],"24":[0.07043,0.7729],"6":[0.09105,0.9894],"7":[0.07525,0.8357],"8":[0.05208,0.6656],"9":[0.02625,0.5877]}},"u_ref":2.0,"velocity_error_clim":[0.0,0.39108097056978364]}},"reference_note":"Reference panels are recolored per frame from the ground-truth field; error panels share one fixed per-case scale.","scale_strips":{"coolwarm":"scales/coolwarm.webp","turbo":"scales/turbo.webp"}};

const CMP_METHODS = [
  { key: "reference", label: "Reference (data)", ref: true },
  { key: "ours", label: "DynaSolver" },
  { key: "abupt", label: "ABUPT" },
  { key: "physgto", label: "PhysGTO" }
];
const CMP_CASES = Object.keys(CMP_DATA.cases).sort();
const CMP_MODES = [
  { key: "velocity_error", label: "Velocity" },
  { key: "pressure_error", label: "Pressure" }
];
const CMP_CASE_LABEL = {
  a1_u4_yaw_p0: "a1 · quadruped",
  h1_2_u2_yaw_m20: "h1_2 · humanoid"
};
const cmpState = { caseId: CMP_CASES[0], mode: "velocity_error", frame: 0, playing: false, timer: 0 };
const cmpCache = new Map();

const cmpCase = () => CMP_DATA.cases[cmpState.caseId];
const cmpFrames = () => cmpCase().frames;
const cmpAsset = (method, mode, frame) =>
  ASSET("compare/" + cmpState.caseId + "/" + method + "/" + mode + "/" + String(frame).padStart(4, "0") + ".webp");

/* Mean of the per-frame median surface error over the displayed frames. */
function cmpMean(method, quantity){
  const table = cmpCase().methods[method];
  if (!table) return null;
  const vals = [];
  for (const f of cmpFrames()){
    const row = table[String(f)];
    if (row && typeof row[quantity] === "number") vals.push(row[quantity]);
  }
  if (!vals.length) return null;
  return vals.reduce((a, b) => a + b, 0) / vals.length;
}

function cmpPreload(){
  const mode = cmpState.mode;
  const key = cmpState.caseId + "|" + mode;
  if (cmpCache.has(key)) return;
  const imgs = [];
  for (const m of CMP_METHODS){
    if (m.ref && mode !== "velocity_error" && mode !== "pressure_error") continue;
    for (const f of cmpFrames()){
      const src = cmpAsset(m.ref ? "reference" : m.key, m.ref ? mode.replace("_error", "") : mode, f);
      const im = new Image();
      im.src = src;
      imgs.push(im);
    }
  }
  cmpCache.set(key, imgs);
}

function cmpPaint(){
  const mode = cmpState.mode;
  const quantity = mode === "velocity_error" ? "velocity" : "pressure";
  const frames = cmpFrames();
  const frame = frames[cmpState.frame];
  const caseData = cmpCase();
  document.getElementById("cmpBoard").style.setProperty("--shot-ar", "1 / 1");

  for (const m of CMP_METHODS){
    const pane = document.querySelector('.cmp-pane[data-method="' + m.key + '"]');
    if (!pane) continue;
    const img = pane.querySelector("img");
    const src = cmpAsset(m.ref ? "reference" : m.key, m.ref ? mode.replace("_error", "") : mode, frame);
    if (img.getAttribute("src") !== src) img.src = src;
    img.alt = m.label + " — " + cmpState.caseId + " — " + quantity + " — frame " + frame;

    const line = pane.querySelector(".cmp-metric");
    if (m.ref){
      line.innerHTML = "reference simulation field<br>frame <b>" + frame + "</b> of " + frames[frames.length - 1];
      continue;
    }
    const val = cmpMean(m.key, quantity);
    const base = Math.min(...["ours", "abupt", "physgto"].map(k => cmpMean(k, quantity)).filter(v => v !== null));
    const ratio = val !== null && base > 0 ? (val / base) : null;
    let tag = "";
    if (ratio !== null){
      if (Math.abs(ratio - 1) < 0.02) tag = '<span class="win">best of the three</span>';
      else tag = (ratio > 1 ? (ratio.toFixed(1) + "x the best") : "<span class=\"win\">best</span>");
    }
    line.innerHTML = "median error <b>" + (val === null ? "—" : val.toFixed(4)) + "</b><br>" + tag;
  }

  const sub = document.getElementById("cmpSub");
  if (sub){
    sub.textContent =
      cmpState.caseId + " · u = " + caseData.u_ref + " m/s · frames " + frames[0] + "–" + frames[frames.length - 1] +
      " · " + (quantity === "velocity" ? "velocity |ΔU|/U∞" : "pressure |p_pred − p_ref|");
  }
  cmpPaintScales();
}

/* Exact colormap strips, with an inline gradient underneath so a bar can never be blank. */
const CMP_RAMPS_CSS = {"turbo": "linear-gradient(90deg,rgb(48,18,59) 0%,rgb(59,47,128) 4%,rgb(67,78,186) 8%,rgb(70,107,227) 12%,rgb(70,133,250) 17%,rgb(59,160,253) 21%,rgb(40,188,235) 25%,rgb(26,210,210) 29%,rgb(26,228,182) 33%,rgb(50,242,152) 38%,rgb(85,250,118) 42%,rgb(128,255,83) 46%,rgb(164,252,60) 50%,rgb(190,244,52) 54%,rgb(217,228,54) 58%,rgb(238,207,58) 62%,rgb(250,186,57) 67%,rgb(254,158,47) 71%,rgb(251,126,33) 75%,rgb(242,96,20) 79%,rgb(228,69,10) 83%,rgb(208,47,5) 88%,rgb(185,30,2) 92%,rgb(155,15,1) 96%,rgb(122,4,3) 100%)", "coolwarm": "linear-gradient(90deg,rgb(59,76,192) 0%,rgb(70,94,207) 4%,rgb(84,112,222) 8%,rgb(98,130,234) 12%,rgb(111,146,243) 17%,rgb(126,161,250) 21%,rgb(141,176,254) 25%,rgb(155,188,255) 29%,rgb(170,199,253) 33%,rgb(185,208,249) 38%,rgb(197,214,242) 42%,rgb(210,219,232) 46%,rgb(221,220,220) 50%,rgb(231,215,206) 54%,rgb(239,206,189) 58%,rgb(245,196,172) 62%,rgb(247,184,156) 67%,rgb(247,169,139) 71%,rgb(244,152,122) 75%,rgb(239,136,107) 79%,rgb(231,116,91) 83%,rgb(221,95,75) 88%,rgb(209,73,63) 92%,rgb(195,46,49) 96%,rgb(180,4,38) 100%)"};
function CMP_RAMP(name){
  return 'url("' + ASSET("compare/scales/" + name + ".webp") + '"), ' + CMP_RAMPS_CSS[name];
}
function cmpFmt(v, lo, hi){
  const span = Math.abs(hi - lo);
  if (span <= 0.02) return v.toFixed(3);
  if (span <= 0.5) return v.toFixed(3);
  if (span <= 5) return v.toFixed(2);
  return v.toFixed(1);
}
function cmpMarks(n){
  let out = "";
  for (let i = 0; i < n; i++){
    out += '<i style="left:' + ((i / (n - 1)) * 100).toFixed(2) + '%"></i>';
  }
  return out;
}
function cmpTicks(lo, hi, n){
  let out = "";
  for (let i = 0; i < n; i++){
    const v = lo + (hi - lo) * i / (n - 1);
    out += "<span>" + cmpFmt(v, lo, hi) + "</span>";
  }
  return out;
}
function cmpRampBlock(id, lo, hi){
  return '<div class="ramp">' +
    '<div class="bar" id="' + id + '"><div class="marks">' + cmpMarks(5) + "</div></div>" +
    '<div class="ticks">' + cmpTicks(lo, hi, 5) + "</div>" +
  "</div>";
}
function cmpPaintScales(){
  const mode = cmpState.mode;
  const quantity = mode === "velocity_error" ? "velocity" : "pressure";
  const speed = quantity === "velocity";
  const frame = cmpFrames()[cmpState.frame];
  const clim = cmpCase()[mode + "_clim"];
  const refTable = (cmpCase().reference_clim || {})[quantity] || {};
  const rc = refTable[String(frame)] || null;
  const refTitle = speed ? "Reference · |U| / U∞" : "Reference · pressure p";
  const errTitle = speed ? "Error · |ΔU| / U∞" : "Error · |p_pred − p_ref|";
  const root = document.getElementById("cmpScales");
  root.innerHTML =
    '<div class="cmp-scale"><div class="t"><b>' + refTitle + "</b>" +
      (rc ? "per-frame scale" : "") + "</div>" +
      (rc ? cmpRampBlock("cmpRefBar", rc[0], rc[1]) : "") + "</div>" +
    '<div class="cmp-scale"><div class="t"><b>' + errTitle + "</b>" +
      "shared across DynaSolver, ABUPT, PhysGTO</div>" +
      cmpRampBlock("cmpErrBar", clim[0], clim[1]) + "</div>";
  const refBar = document.getElementById("cmpRefBar");
  const errBar = document.getElementById("cmpErrBar");
  if (refBar) refBar.style.backgroundImage = CMP_RAMP(speed ? "turbo" : "coolwarm");
  if (errBar) errBar.style.backgroundImage = CMP_RAMP("turbo");
}

function cmpPaintNote(){
  const span = cmpFrames();
  const note = document.getElementById("cmpNote");
  if (!note) return;
  note.innerHTML =
    "Looping frames " + span[0] + "–" + span[span.length - 1] + " for <b>" + cmpState.caseId + "</b>. " +
    "Each panel uses the same white square; images keep their native aspect and sit in the center. " +
    "The reference colormap is rebuilt per frame; the three error maps share one fixed per-case scale. " +
    "Click a panel to pause or resume.";
}

function cmpSetCase(id){
  cmpState.caseId = id;
  document.querySelectorAll("#cmpCaseChips .chip").forEach(c => c.classList.toggle("sel", c.dataset.caseid === id));
  cmpPreload(); cmpPaint(); cmpPaintNote();
}
function cmpSetMode(mode){
  cmpState.mode = mode;
  document.querySelectorAll("#cmpModeChips .chip").forEach(c => c.classList.toggle("sel", c.dataset.mode === mode));
  cmpPreload(); cmpPaint(); cmpPaintNote();
}

function cmpPlay(){
  if (cmpState.playing) return;
  cmpPreload();
  cmpState.playing = true;
  cmpState.timer = setInterval(() => {
    cmpState.frame = (cmpState.frame + 1) % cmpFrames().length;
    cmpPaint();
  }, 100);
}
function cmpStop(){
  cmpState.playing = false;
  clearInterval(cmpState.timer);
}

function cmpBuild(){
  document.getElementById("cmpCaseChips").innerHTML = CMP_CASES.map(id =>
    '<span class="chip' + (id === cmpState.caseId ? " sel" : "") + '" data-caseid="' + id + '">' +
    (CMP_CASE_LABEL[id] || id) + "</span>").join("");
  document.getElementById("cmpModeChips").innerHTML = CMP_MODES.map(m =>
    '<span class="chip' + (m.key === cmpState.mode ? " sel" : "") + '" data-mode="' + m.key + '">' + m.label + "</span>").join("");

  document.getElementById("cmpBoard").innerHTML = CMP_METHODS.map(m =>
    '<figure class="cmp-pane ' + (m.ref ? "ref" : m.key === "ours" ? "ours" : "") + '" data-method="' + m.key + '">' +
      '<div class="cmp-pane-head"><span class="nm">' + m.label + '</span><span class="badge">' +
      (m.ref ? "ground truth" : "error map") + "</span></div>" +
      '<div class="cmp-shot"><img alt=""></div>' +
      '<div class="cmp-metric"></div></figure>').join("");

  document.getElementById("cmpCaseChips").addEventListener("click", (e) => {
    const chip = e.target.closest(".chip"); if (chip) cmpSetCase(chip.dataset.caseid);
  });
  document.getElementById("cmpModeChips").addEventListener("click", (e) => {
    const chip = e.target.closest(".chip"); if (chip) cmpSetMode(chip.dataset.mode);
  });
  document.getElementById("cmpBoard").addEventListener("click", () => {
    if (cmpState.playing) cmpStop(); else cmpPlay();
  });
  cmpPreload(); cmpPaint(); cmpPaintScales(); cmpPaintNote(); cmpPlay();
}
document.addEventListener("visibilitychange", () => {
  if (document.hidden) cmpStop();
  else cmpPlay();
});
cmpBuild();
(function cmpHash(){
  const h = location.hash || "";
  const c = /[#&]case=([^&]+)/.exec(h);
  const m = /[#&]mode=([^&]+)/.exec(h);
  if (c && CMP_DATA.cases[decodeURIComponent(c[1])]) cmpSetCase(decodeURIComponent(c[1]));
  if (m && CMP_MODES.some(x => x.key === decodeURIComponent(m[1]))) cmpSetMode(decodeURIComponent(m[1]));
})();
