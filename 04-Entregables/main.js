// Loader
window.addEventListener('load',()=>{const l=document.getElementById('loader');setTimeout(()=>l&&l.classList.add('hide'),400);});
// Header + progress + back-to-top
const header=document.getElementById('header');
const progress=document.getElementById('scrollProgress');
const back=document.getElementById('backToTop');
window.addEventListener('scroll',()=>{
  header.classList.toggle('scrolled',scrollY>60);
  const h=document.documentElement.scrollHeight-innerHeight;
  progress.style.width=(scrollY/h*100)+'%';
  back.classList.toggle('show',scrollY>400);
});
back&&back.addEventListener('click',e=>{e.preventDefault();scrollTo({top:0,behavior:'smooth'});});
// Mobile nav
const burger=document.getElementById('burger'),nav=document.getElementById('nav');
burger&&burger.addEventListener('click',()=>nav.classList.toggle('open'));
nav&&nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
// Reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
// Counters
const cio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const el=e.target,t=+el.dataset.target;let n=0,s=t/60;const tm=setInterval(()=>{n+=s;if(n>=t){n=t;clearInterval(tm);}el.textContent=Math.floor(n);},18);cio.unobserve(el);}}),{threshold:.5});
document.querySelectorAll('.stat__num').forEach(el=>cio.observe(el));
// Lightbox
const lb=document.getElementById('lightbox'),lbImg=document.getElementById('lightboxImg');
document.querySelectorAll('.gallery-grid img').forEach(im=>im.addEventListener('click',()=>{lbImg.src=im.src;lb.classList.add('show');}));
const lc=document.getElementById('lightboxClose');
lc&&lc.addEventListener('click',()=>lb.classList.remove('show'));
lb&&lb.addEventListener('click',e=>{if(e.target===lb)lb.classList.remove('show');});
// Active nav link
const sections=[...document.querySelectorAll('section[id]')];
const links=[...document.querySelectorAll('.nav__link')];
window.addEventListener('scroll',()=>{
  let cur='';
  sections.forEach(s=>{if(scrollY>=s.offsetTop-120)cur=s.id;});
  links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+cur));
});
