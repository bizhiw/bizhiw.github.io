<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Neecha &amp; Alborz — Save the Date</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800&family=EB+Garamond:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  :root{
    --wine-1:#2c0a10;
    --wine-2:#43121a;
    --wine-3:#560f1a;
    --gold:#cda468;
    --gold-bright:#e6c98d;
    --gold-dim:#8a6a42;
    --cream:#ecdec1;
  }

  *{ margin:0; padding:0; box-sizing:border-box; }
  html{ scroll-behavior:smooth; }

  body{
    background:
      radial-gradient(ellipse 90% 60% at 50% 0%, rgba(86,15,26,0.5), transparent 60%),
      radial-gradient(ellipse 80% 70% at 50% 100%, rgba(44,10,16,0.6), transparent 60%),
      linear-gradient(180deg, var(--wine-2) 0%, var(--wine-1) 100%);
    color: var(--cream);
    font-family: 'EB Garamond', serif;
    overflow-x: hidden;
    position: relative;
  }

  /* grain texture */
  body::before{
    content:"";
    position: fixed;
    inset:0;
    background-image:
      radial-gradient(rgba(230,201,141,0.05) 1px, transparent 1px),
      radial-gradient(rgba(0,0,0,0.25) 1px, transparent 1px);
    background-size: 3px 3px, 3.5px 3.5px;
    background-position: 0 0, 1.7px 1.7px;
    pointer-events: none;
    z-index: 1;
    opacity: 0.65;
  }

  .vignette{
    position: fixed;
    inset:0;
    box-shadow: inset 0 0 180px 50px rgba(0,0,0,0.55);
    pointer-events: none;
    z-index: 2;
  }

  .embers{
    position: fixed;
    inset:0;
    pointer-events:none;
    z-index: 2;
    overflow:hidden;
  }
  .ember{
    position:absolute;
    bottom:-5%;
    opacity:0;
    animation: rise linear infinite;
  }
  @keyframes rise{
    0%{ transform: translateY(0) translateX(0); opacity:0; }
    10%{ opacity:0.7; }
    85%{ opacity:0.35; }
    100%{ transform: translateY(-110vh) translateX(30px); opacity:0; }
  }

  /* uppercase everywhere, no italics */
  h1,h2,h3,p,span,a{ text-transform: uppercase; font-style: normal; }

  section{
    position: relative;
    z-index: 3;
    padding: clamp(3rem, 10vw, 5.5rem) clamp(1rem, 5vw, 1.5rem);
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    width: 100%;
  }

  .reveal{
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 1s ease, transform 1s ease;
  }
  .reveal.in{ opacity: 1; transform: translateY(0); }

  /* shared rule / divider styles */
  .rule{
    width: 60%;
    max-width: 340px;
    height: 10px;
    margin: 1.6rem auto;
    background-image: radial-gradient(circle, var(--gold-dim) 1.3px, transparent 1.6px);
    background-size: 14px 10px;
    background-repeat: repeat-x;
    background-position: center;
    opacity: 0.8;
  }

  .diamond{
    display:inline-block;
    width: 6px; height: 6px;
    background: var(--gold);
    transform: rotate(45deg);
    margin: 0 clamp(0.25rem, 1.6vw, 0.6rem);
    vertical-align: middle;
  }

  /* ---------- CARD FRAME (shared) ---------- */
  .card{
    position: relative;
    width: 100%;
    max-width: 620px;
    padding: clamp(1.8rem, 7vw, 3.2rem) clamp(1.1rem, 5vw, 2.2rem);
    border: 1px solid var(--gold-dim);
    border-radius: 12px;
  }
  .card::before{
    content:"";
    position:absolute;
    inset: 8px;
    border: 1px solid rgba(205,164,104,0.4);
    border-radius: 8px;
    pointer-events:none;
  }
  .corner{
    position:absolute;
    width: clamp(22px, 6vw, 34px);
    height: clamp(22px, 6vw, 34px);
    stroke: var(--gold);
    fill:none;
    stroke-width: 1;
    opacity: 0.85;
  }
  .corner.tl{ top:10px; left:10px; }
  .corner.tr{ top:10px; right:10px; transform: scaleX(-1); }
  .corner.bl{ bottom:10px; left:10px; transform: scaleY(-1); }
  .corner.br{ bottom:10px; right:10px; transform: scale(-1,-1); }

  /* ---------- HERO ---------- */
  .hero{
    min-height: 100vh;
    justify-content:center;
    padding-top: clamp(1.5rem, 6vw, 3rem);
    padding-bottom: clamp(1.5rem, 6vw, 3rem);
  }

  .hero-card{
    padding: clamp(2.2rem, 8vw, 3.4rem) clamp(1.1rem, 6vw, 2rem) clamp(1.8rem, 6vw, 2.6rem);
  }

  .moth{
    width: clamp(40px, 12vw, 56px);
    height: auto;
    stroke: var(--gold);
    fill: none;
    stroke-width: 0.9;
    margin: 0 auto 0.8rem;
    display:block;
    opacity: 0.9;
  }

  .vine-row{
    display:flex;
    align-items:center;
    justify-content:center;
    gap: clamp(0.2rem, 1.5vw, 0.4rem);
    margin-bottom: 0.6rem;
  }
  .vine{
    width: clamp(72px, 26vw, 120px);
    height: auto;
    stroke: var(--gold);
    fill:none;
    stroke-width: 0.9;
    opacity: 0.85;
  }
  .vine.right{ transform: scaleX(-1); }

  .eyebrow{
    font-family: 'Cinzel', serif;
    font-weight: 500;
    letter-spacing: 0.35em;
    font-size: 0.72rem;
    color: var(--gold);
    opacity: 0.85;
    margin: 0.4rem 0 1.2rem;
  }

  .names-svg{
    width: 100%;
    max-width: 480px;
    height: auto;
    margin: 0 auto;
    display:block;
  }
  .names-svg text{
    font-family: 'Cinzel', serif;
    font-weight: 700;
    fill: var(--gold-bright);
    letter-spacing: 4px;
  }

  .unite-line{
    font-family: 'EB Garamond', serif;
    font-weight: 500;
    letter-spacing: 0.22em;
    font-size: 0.82rem;
    color: var(--cream);
    opacity: 0.8;
    line-height: 1.9;
    margin-top: 0.6rem;
  }

  .date-wrap{
    position: relative;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap: wrap;
    gap: clamp(0.5rem, 3vw, 1.2rem);
    margin: 1.6rem 0 1.2rem;
  }

  .burst{
    width: clamp(28px, 9vw, 46px);
    height: clamp(34px, 11vw, 56px);
    stroke: var(--gold);
    stroke-width: 0.8;
    opacity: 0.7;
    flex-shrink: 0;
  }
  .burst.right{ transform: scaleX(-1); }

  .date-big{
    font-family: 'Cinzel', serif;
    font-weight: 700;
    font-size: clamp(1.5rem, 7vw, 2.6rem);
    letter-spacing: clamp(0.02em, 1.5vw, 0.12em);
    color: var(--gold-bright);
    white-space: nowrap;
  }

  .venue-line{
    font-family: 'EB Garamond', serif;
    font-weight: 500;
    letter-spacing: 0.18em;
    font-size: 0.85rem;
    color: var(--gold);
    opacity: 0.85;
    line-height: 1.8;
    margin-top: 0.2rem;
  }

  .heart-monogram{
    width: 64px;
    height: auto;
    margin: 1.8rem auto 0;
    display:block;
  }
  .heart-monogram path{ stroke: var(--gold); stroke-width: 1; fill:none; }
  .heart-monogram text{
    font-family: 'Cinzel', serif;
    font-weight: 600;
    font-size: 11px;
    fill: var(--gold-bright);
    letter-spacing: 2px;
  }

  .scroll-cue{
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    font-family: 'Cinzel', serif;
    font-size: 0.65rem;
    letter-spacing: 0.4em;
    color: var(--gold);
    opacity: 0.5;
    animation: pulseFade 2.6s ease-in-out infinite;
  }
  @keyframes pulseFade{ 0%,100%{opacity:0.25;} 50%{opacity:0.6;} }

  /* ---------- SECTION HEADERS ---------- */
  .section-eyebrow{
    font-family: 'Cinzel', serif;
    letter-spacing: 0.35em;
    font-size: 0.7rem;
    color: var(--gold);
    margin-bottom: 2.4rem;
    opacity: 0.85;
  }

  /* ---------- COUNTDOWN ---------- */
  .countdown{
    display:flex;
    gap: clamp(0.6rem, 4vw, 2.4rem);
    flex-wrap: nowrap;
    justify-content:center;
    width: 100%;
    max-width: 480px;
  }

  .badge{
    width: clamp(58px, 20vw, 96px);
    height: clamp(58px, 20vw, 96px);
    border-radius: 50%;
    border: 1px solid var(--gold);
    display:flex;
    align-items:center;
    justify-content:center;
    position: relative;
    flex-shrink: 0;
  }
  .badge::before{
    content:"";
    position:absolute;
    inset:6px;
    border: 1px solid rgba(205,164,104,0.45);
    border-radius: 50%;
  }
  .badge-num{
    font-family: 'Cinzel', serif;
    font-weight: 700;
    font-size: clamp(1rem, 4.5vw, 1.7rem);
    color: var(--gold-bright);
  }
  .badge-label{
    font-family: 'Cinzel', serif;
    font-size: clamp(0.5rem, 1.8vw, 0.6rem);
    letter-spacing: 0.1em;
    color: var(--gold);
    opacity: 0.75;
    margin-top: 0.6rem;
    white-space: nowrap;
  }
  .badge-col{ display:flex; flex-direction:column; align-items:center; min-width: 0; }

  /* ---------- GALLERY ---------- */
  .gallery{
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    gap: clamp(0.8rem, 3vw, 1.6rem);
    max-width: 640px;
    width:100%;
  }

  .frame{
    aspect-ratio: 4/5;
    border: 1px solid var(--gold-dim);
    position: relative;
    overflow: hidden;
  }
  .frame::before{
    content:"";
    position:absolute;
    inset: 7px;
    border: 1px solid rgba(205,164,104,0.45);
    z-index: 2;
    pointer-events: none;
  }
  .frame img{
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: sepia(22%) saturate(85%) contrast(1.04) brightness(0.94);
    transition: filter 0.5s ease, transform 0.6s ease;
  }
  .frame::after{
    content:"";
    position:absolute;
    inset:0;
    background: linear-gradient(160deg, rgba(122,46,58,0.22), rgba(43,15,20,0.28));
    mix-blend-mode: multiply;
    pointer-events: none;
    z-index: 1;
  }
  .frame:hover img{
    filter: sepia(6%) saturate(100%) contrast(1.02) brightness(1);
    transform: scale(1.04);
  }

  @media (max-width: 380px){
    .gallery{ gap: 0.6rem; }
    .unite-line{ letter-spacing: 0.1em; }
    .venue-line{ letter-spacing: 0.08em; }
    .venue-address{ letter-spacing: 0.04em; }
  }

  /* ---------- DETAILS ---------- */
  .venue-name{
    font-family: 'Cinzel', serif;
    font-weight: 700;
    font-size: clamp(1.4rem, 3.2vw, 1.8rem);
    letter-spacing: 0.1em;
    color: var(--gold-bright);
    margin-bottom: 1rem;
  }
  .venue-address{
    font-family: 'EB Garamond', serif;
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: 0.1em;
    line-height: 1.9;
    color: var(--cream);
    opacity: 0.85;
  }
  .rsvp-note{
    margin-top: 1.8rem;
    padding-top: 1.6rem;
    border-top: 1px solid rgba(205,164,104,0.3);
    font-family: 'Cinzel', serif;
    font-size: 0.78rem;
    letter-spacing: 0.15em;
    color: var(--gold);
    opacity: 0.85;
  }

  /* ---------- FOOTER ---------- */
  footer{ padding: clamp(2.5rem, 8vw, 4rem) 1.2rem clamp(2.2rem, 6vw, 3.5rem); }
  footer .names-small{
    font-family: 'Cinzel', serif;
    font-weight: 600;
    font-size: clamp(0.82rem, 3vw, 1rem);
    letter-spacing: 0.15em;
    color: var(--gold-bright);
  }
  footer .fine{
    font-family: 'Cinzel', serif;
    font-size: 0.6rem;
    letter-spacing: 0.3em;
    color: var(--gold);
    opacity: 0.5;
    margin-top: 0.8rem;
  }
</style>
</head>
<body>

<div class="vignette"></div>
<div class="embers" id="embers"></div>

<section class="hero">
  <div class="card hero-card">
    <svg class="corner tl" viewBox="0 0 34 34"><path d="M2 30 C2 14, 14 2, 30 2"/><path d="M2 22 C2 12, 12 2, 22 2"/></svg>
    <svg class="corner tr" viewBox="0 0 34 34"><path d="M2 30 C2 14, 14 2, 30 2"/><path d="M2 22 C2 12, 12 2, 22 2"/></svg>
    <svg class="corner bl" viewBox="0 0 34 34"><path d="M2 30 C2 14, 14 2, 30 2"/><path d="M2 22 C2 12, 12 2, 22 2"/></svg>
    <svg class="corner br" viewBox="0 0 34 34"><path d="M2 30 C2 14, 14 2, 30 2"/><path d="M2 22 C2 12, 12 2, 22 2"/></svg>

    <p class="eyebrow">Save the Date</p>

    <svg class="moth" viewBox="0 0 60 40">
      <path d="M30 6 L30 30"/>
      <path d="M30 10 C 18 -4, 2 4, 6 18 C 10 30, 24 24, 30 16"/>
      <path d="M30 10 C 42 -4, 58 4, 54 18 C 50 30, 36 24, 30 16"/>
      <path d="M30 16 C 22 24, 12 26, 10 34"/>
      <path d="M30 16 C 38 24, 48 26, 50 34"/>
      <path d="M30 6 C 27 2, 25 1, 22 2"/>
      <path d="M30 6 C 33 2, 35 1, 38 2"/>
    </svg>

    <div class="vine-row">
      <svg class="vine" viewBox="0 0 130 44">
        <path d="M2 40 C 30 40, 40 20, 70 18"/>
        <path d="M20 34 C 24 26, 22 20, 14 18"/>
        <path d="M40 26 C 44 18, 42 12, 34 10"/>
        <circle cx="70" cy="18" r="6" opacity="0.6"/>
        <path d="M70 18 C 76 12, 84 12, 88 18"/>
        <path d="M70 18 C 76 24, 84 24, 88 18"/>
      </svg>
      <svg class="vine right" viewBox="0 0 130 44">
        <path d="M2 40 C 30 40, 40 20, 70 18"/>
        <path d="M20 34 C 24 26, 22 20, 14 18"/>
        <path d="M40 26 C 44 18, 42 12, 34 10"/>
        <circle cx="70" cy="18" r="6" opacity="0.6"/>
        <path d="M70 18 C 76 12, 84 12, 88 18"/>
        <path d="M70 18 C 76 24, 84 24, 88 18"/>
      </svg>
    </div>

    <svg class="names-svg" viewBox="0 0 480 210">
      <defs>
        <path id="arc1" d="M40 95 Q240 15 440 95" fill="none"/>
        <path id="arc2" d="M20 190 Q240 145 460 190" fill="none"/>
      </defs>
      <text font-size="46" text-anchor="middle">
        <textPath href="#arc1" startOffset="50%">NEECHA</textPath>
      </text>
      <text font-size="24" x="240" y="105" text-anchor="middle" fill="#e6c98d">&amp;</text>
      <text font-size="46" text-anchor="middle">
        <textPath href="#arc2" startOffset="50%">ALBORZ</textPath>
      </text>
    </svg>

    <p class="unite-line">will joyfully and eternally unite on</p>

    <div class="date-wrap">
      <svg class="burst" viewBox="0 0 46 56" fill="none">
        <path d="M40 4 L20 20"/><path d="M44 14 L22 24"/><path d="M46 26 L23 28"/>
        <path d="M44 38 L22 32"/><path d="M40 48 L20 36"/>
      </svg>
      <p class="date-big">03 <span class="diamond"></span> 20 <span class="diamond"></span> 27</p>
      <svg class="burst right" viewBox="0 0 46 56" fill="none">
        <path d="M40 4 L20 20"/><path d="M44 14 L22 24"/><path d="M46 26 L23 28"/>
        <path d="M44 38 L22 32"/><path d="M40 48 L20 36"/>
      </svg>
    </div>

    <p class="venue-line">heintzman house · thornhill, ontario</p>

    <svg class="heart-monogram" viewBox="0 0 64 64">
      <path d="M32 54 C 8 38, 6 20, 20 14 C 28 10, 32 18, 32 18 C 32 18, 36 10, 44 14 C 58 20, 56 38, 32 54 Z"/>
      <text x="32" y="34" text-anchor="middle">N + A</text>
    </svg>
  </div>

  <p class="scroll-cue">Scroll</p>
</section>

<section class="reveal" id="countdown-section">
  <p class="section-eyebrow">Until We Say I Do</p>
  <div class="countdown">
    <div class="badge-col"><div class="badge"><div class="badge-num" id="cd-days">00</div></div><div class="badge-label">Days</div></div>
    <div class="badge-col"><div class="badge"><div class="badge-num" id="cd-hours">00</div></div><div class="badge-label">Hours</div></div>
    <div class="badge-col"><div class="badge"><div class="badge-num" id="cd-mins">00</div></div><div class="badge-label">Minutes</div></div>
    <div class="badge-col"><div class="badge"><div class="badge-num" id="cd-secs">00</div></div><div class="badge-label">Seconds</div></div>
  </div>
</section>

<section class="reveal" id="gallery-section">
  <p class="section-eyebrow">A Preview</p>
  <div class="gallery">
    <div class="frame"><img src="photos/1.jpg" alt="Neecha and Alborz holding hands by the lake" loading="lazy"></div>
    <div class="frame"><img src="photos/2.jpg" alt="Neecha and Alborz embracing in the mountains" loading="lazy"></div>
    <div class="frame"><img src="photos/3.jpg" alt="Neecha and Alborz walking together by the lake" loading="lazy"></div>
    <div class="frame"><img src="photos/4.jpg" alt="Neecha and Alborz sharing a kiss by the lake" loading="lazy"></div>
  </div>
</section>

<section class="reveal" id="details-section">
  <p class="section-eyebrow">The Place</p>
  <div class="card">
    <svg class="corner tl" viewBox="0 0 34 34"><path d="M2 30 C2 14, 14 2, 30 2"/></svg>
    <svg class="corner tr" viewBox="0 0 34 34"><path d="M2 30 C2 14, 14 2, 30 2"/></svg>
    <svg class="corner bl" viewBox="0 0 34 34"><path d="M2 30 C2 14, 14 2, 30 2"/></svg>
    <svg class="corner br" viewBox="0 0 34 34"><path d="M2 30 C2 14, 14 2, 30 2"/></svg>
    <p class="venue-name">Heintzman House</p>
    <p class="venue-address">135 Bay Thorn Drive<br>Thornhill, Ontario &nbsp;L3T 3V1</p>
    <p class="rsvp-note">Formal invitation with all the details to follow</p>
  </div>
</section>

<footer>
  <p class="names-small">Neecha &amp; Alborz <span class="diamond"></span> 03 · 20 · 27</p>
  <p class="fine">We Can't Wait to Celebrate With You</p>
</footer>

<script>
  var target = new Date("2027-03-20T15:00:00");

  function updateCountdown(){
    var now = new Date();
    var diff = target - now;
    if(diff < 0) diff = 0;

    var days = Math.floor(diff / (1000*60*60*24));
    var hours = Math.floor((diff / (1000*60*60)) % 24);
    var mins = Math.floor((diff / (1000*60)) % 60);
    var secs = Math.floor((diff / 1000) % 60);

    document.getElementById('cd-days').textContent = String(days).padStart(2,'0');
    document.getElementById('cd-hours').textContent = String(hours).padStart(2,'0');
    document.getElementById('cd-mins').textContent = String(mins).padStart(2,'0');
    document.getElementById('cd-secs').textContent = String(secs).padStart(2,'0');
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);

  var reveals = document.querySelectorAll('.reveal');
  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  reveals.forEach(function(el){ observer.observe(el); });

  // floating embers
  var container = document.getElementById('embers');
  var count = window.innerWidth < 640 ? 10 : 18;
  for(var i=0; i<count; i++){
    var ember = document.createElement('div');
    ember.className = 'ember';
    var size = 2 + Math.random()*2.5;
    ember.style.width = size + 'px';
    ember.style.height = size + 'px';
    ember.style.left = (Math.random()*100) + 'vw';
    ember.style.background = '#cda468';
    ember.style.borderRadius = '50%';
    ember.style.boxShadow = '0 0 4px 1px rgba(205,164,104,0.6)';
    ember.style.animationDuration = (10 + Math.random()*12) + 's';
    ember.style.animationDelay = (Math.random()*16) + 's';
    container.appendChild(ember);
  }
</script>

</body>
</html>
