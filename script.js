/ tempat script /
/* styles.css - neon theme, glass cards, responsive layout */
:root{
  --bg:#0b1020;
  --glass: rgba(255,255,255,0.04);
  --accent1: #7b6cff;
  --accent2: #00e6ff;
  --accent3: #ff4dff;
  --text:#dce7ff;
  --muted:#9fb0d5;
  --glass-border: rgba(255,255,255,0.06);
}

*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family:Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  background:var(--bg);
  color:var(--text);
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  overflow-x:hidden;
}

/* Canvas background sizing */
#bg{
  position:fixed;
  top:0;left:0;
  width:100vw;height:100vh;
  z-index:0;
  display:block;
}

/* Custom cursor */
#cursor{
  position:fixed;
  width:18px;height:18px;
  border-radius:50%;
  pointer-events:none;
  transform:translate(-50%,-50%);
  background:linear-gradient(135deg,var(--accent2),var(--accent1));
  box-shadow:0 0 18px rgba(0,230,255,0.15),0 0 30px rgba(123,108,255,0.05);
  mix-blend-mode:screen;
  z-index:9999;
  transition: transform .12s ease, width .12s ease, height .12s ease, background .12s ease;
}

/* Nav */
.nav{
  position:fixed;top:18px;left:0;right:0;
  display:flex;justify-content:space-between;align-items:center;
  padding:12px 28px;
  z-index:30;
  pointer-events:auto;
}
.nav .logo{
  font-weight:800;font-family:Rubik, sans-serif;color:white;text-decoration:none;
  letter-spacing:0.4px;
  background:linear-gradient(90deg,var(--accent1),var(--accent2));
  -webkit-background-clip:text;background-clip:text;color:transparent;
}
.nav .nav-links a{
  color:var(--muted);text-decoration:none;margin-left:18px;font-weight:600;
  transition:color .18s ease;
}
.nav .nav-links a:hover{color:var(--text)}

/* Hero */
.hero{
  min-height:100vh;
  display:flex;align-items:center;justify-content:center;
  position:relative;
  z-index:2;
  padding:96px 24px;
  overflow:hidden;
}
.hero-inner{max-width:980px;text-align:center;position:relative;z-index:3}
.headline{font-size:clamp(2rem,6vw,4rem);line-height:1.02;margin:0 0 12px;font-family:Rubik, sans-serif}
.headline .neon{
  background:linear-gradient(90deg,var(--accent2),var(--accent3),var(--accent1));
  -webkit-background-clip:text;background-clip:text;color:transparent;
  text-shadow:0 6px 24px rgba(123,108,255,0.08);
}
.sub{color:var(--muted);margin:6px 0 18px;font-size:1.05rem}

.hero-cta .btn{margin:8px 12px 0;padding:12px 20px;border-radius:12px;font-weight:700;border:0;cursor:pointer}
.btn.primary{
  background:linear-gradient(90deg,var(--accent1),var(--accent2));
  color:white;box-shadow:0 8px 30px rgba(0,230,255,0.06),0 2px 6px rgba(11,16,32,0.6);
  transition:transform .18s ease, box-shadow .18s ease;
}
.btn.primary:hover{transform:translateY(-3px)}
.btn.ghost{
  background:transparent;border:1px solid var(--glass-border);color:var(--text);
  backdrop-filter: blur(8px);
}

/* Typing */
.type-wrap{margin-top:18px;color:var(--muted);font-weight:600;display:flex;justify-content:center;gap:6px;align-items:center}
.blink{opacity:0.8;animation:blink .9s infinite}
@keyframes blink{50%{opacity:0}}

/* Floating blobs */
.blobs{position:absolute;inset:0;pointer-events:none}
.blob{
  position:absolute;border-radius:50%;filter:blur(36px);opacity:.7;mix-blend-mode:screen;
  animation:float 8s ease-in-out infinite;
}
.b1{width:360px;height:360px;left:-8%;top:10%;background:linear-gradient(135deg,var(--accent1),var(--accent2))}
.b2{width:260px;height:260px;right:-6%;top:8%;background:linear-gradient(135deg,var(--accent2),var(--accent3));animation-duration:10s}
.b3{width:420px;height:420px;left:20%;bottom:-18%;background:linear-gradient(135deg,var(--accent3),var(--accent1));animation-duration:14s}
@keyframes float{50%{transform:translateY(18px) translateX(12px) scale(1.03)}}

/* Sections */
.section{padding:88px 24px;position:relative;z-index:3}
.section-title{font-family:Rubik, sans-serif;font-size:1.8rem;margin:0 0 6px}
.section-lead{color:var(--muted);margin-bottom:22px}

/* Cards grid */
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:20px;margin-top:18px}
.card{
  background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  border:1px solid var(--glass-border);
  padding:22px;border-radius:14px;backdrop-filter:blur(8px);
  transition:transform .22s cubic-bezier(.2,.9,.2,1), box-shadow .22s;
  box-shadow:0 6px 20px rgba(2,6,23,0.6);
}
.card-icon{font-size:28px;margin-bottom:8px}
.card h3{margin:4px 0 10px}
.card p{color:var(--muted);margin:0}

/* Tilt effect (JS) */
.tilt{transform-style:preserve-3d;will-change:transform}

/* Gallery */
.gallery-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:18px}
.g-card{position:relative;border-radius:12px;overflow:hidden;border:1px solid var(--glass-border)}
.g-card img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .9s cubic-bezier(.2,.9,.2,1)}
.g-card .g-overlay{
  position:absolute;left:0;right:0;bottom:0;padding:18px;color:white;
  background:linear-gradient(180deg,transparent, rgba(6,10,30,0.6));
  transform:translateY(90%);transition:transform .28s ease;
}
.g-card:hover img{transform:scale(1.08) translateY(-6px)}
.g-card:hover .g-overlay{transform:translateY(0)}

/* Contact form */
.contact-form{max-width:860px;margin:12px auto 0;display:flex;flex-direction:column;gap:12px}
.contact-form .row{display:flex;gap:12px}
.contact-form input, .contact-form textarea{
  width:100%;padding:14px;border-radius:10px;border:1px solid var(--glass-border);background:transparent;color:var(--text);
  outline:none;resize:none
}
.form-actions{display:flex;gap:12px;margin-top:8px}

/* Footer */
.footer{display:flex;justify-content:space-between;align-items:center;padding:18px 24px;color:var(--muted);border-top:1px solid rgba(255,255,255,0.02)}
.socials a{text-decoration:none;margin-left:12px;color:var(--muted)}

/* Reveal animation */
.reveal{opacity:0;transform:translateY(20px);transition:opacity .6s ease, transform .6s ease}
.reveal.visible{opacity:1;transform:none}

/* Responsive tweaks */
@media (max-width:720px){
  .nav{padding:10px 16px}
  .hero{padding:64px 16px}
  .hero-cta .btn{margin:8px 6px 0}
  .contact-form .row{flex-direction:column}
}
