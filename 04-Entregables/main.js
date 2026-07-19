// Loader
window.addEventListener('load',()=>{
  const l=document.getElementById('loader');
  setTimeout(()=>l.classList.add('hide'),400);
});
// Header scroll
const header=document.getElementById('header');
window.addEventListener('scroll',()=>{
  header.classList.toggle('scrolled',window.scrollY>60);
  // progress
  const sc=document.getElementById('scrollProgress');
  const h=document.documentElement.scrollHeight-window.innerHeight;
  sc.style.width=(window.scrollY/h*100)+'%';
  // back to top
  document.getElementById('backToTop').classList.toggle('show',window.scrollY>400);
});
// Back to top
document.getElementById('backToTop').addEventListener('click',e=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'});});
// Burger
const burger=document.getElementById('burger');
const nav=document.getElementById('nav');
burger.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
// Reveal
const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}});},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
// Counters
const cio=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){const el=e.target;const t=+el.dataset.target;let n=0;const step=t/60;const tm=setInterval(()=>{n+=step;if(n>=t){n=t;clearInterval(tm);}el.textContent=Math.floor(n);},18);cio.unobserve(el);}});},{threshold:.5});
document.querySelectorAll('.impacto__num').forEach(el=>cio.observe(el));
// Lightbox
const lb=document.getElementById('lightbox'),lbImg=document.getElementById('lightboxImg');
document.querySelectorAll('.galeria__item').forEach(img=>{
  img.addEventListener('click',()=>{lbImg.src=img.src;lb.classList.add('show');});
});
document.getElementById('lightboxClose').addEventListener('click',()=>lb.classList.remove('show'));
lb.addEventListener('click',e=>{if(e.target===lb)lb.classList.remove('show');});
