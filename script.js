// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Form validation (native constraints with clear feedback)
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('status');
function setError(input, msg){ input.parentElement.querySelector('.error').textContent = msg; }
function clearError(input){ input.parentElement.querySelector('.error').textContent = ''; }
['name','email','msg'].forEach(id=>{
  const el=document.getElementById(id);
  el.addEventListener('input', ()=>{ if(el.validity.valid) clearError(el); });
});
form.addEventListener('submit',(e)=>{
  e.preventDefault(); let ok=true;
  const name=document.getElementById('name'); if(!name.checkValidity()){ setError(name,'Please enter your name (min 2 chars).'); ok=false; }
  const email=document.getElementById('email'); if(!email.checkValidity()){ setError(email,'Enter a valid email.'); ok=false; }
  const msg=document.getElementById('msg'); if(!msg.checkValidity()){ setError(msg,'Message must be 10–500 characters.'); ok=false; }
  if(!ok){ statusEl.textContent=''; return; }
  statusEl.textContent='Message queued. Thank you!';
  form.reset();
});

// ---- Slider (translateX) ----
(function(){
  const slider = document.querySelector('#gallery .slider');
  if(!slider) return;
  const track = slider.querySelector('.slider__track');
  const frames = Array.from(track.querySelectorAll('.frame'));
  const prev = slider.querySelector('.prev');
  const next = slider.querySelector('.next');
  const pauseBtn = slider.querySelector('.pause');
  const dots = Array.from(slider.querySelectorAll('.dot'));

  let i=0, paused=false, timer=null, SPEED=4500;

  function go(to, user=false){
    i = (to + frames.length) % frames.length;
    track.style.transform = `translateX(-${i*100}%)`;
    dots.forEach((d,k)=>{ d.setAttribute('aria-selected', String(k===i)); d.tabIndex = k===i?0:-1; });
  }
  function start(){ if(!timer && !paused) timer = setInterval(()=>go(i+1,false), SPEED); }
  function stop(){ clearInterval(timer); timer=null; }

  next.addEventListener('click', ()=>{ stop(); go(i+1,true); start(); });
  prev.addEventListener('click', ()=>{ stop(); go(i-1,true); start(); });

  pauseBtn.addEventListener('click', ()=>{
    paused=!paused;
    pauseBtn.setAttribute('aria-pressed', String(paused));
    pauseBtn.textContent = paused ? 'Resume' : 'Pause';
    paused ? stop() : start();
  });

  dots.forEach((d,k)=>{
    d.addEventListener('click', ()=>{ stop(); go(k,true); start(); });
    d.addEventListener('keydown', (e)=>{
      if(e.key==='ArrowRight'){ e.preventDefault(); dots[(k+1)%dots.length].click(); }
      if(e.key==='ArrowLeft'){ e.preventDefault(); dots[(k-1+dots.length)%dots.length].click(); }
    });
  });

  slider.addEventListener('mouseenter', stop);
  slider.addEventListener('mouseleave', ()=>{ if(!paused) start(); });
  slider.addEventListener('focusin', stop);
  slider.addEventListener('focusout', ()=>{ if(!paused) start(); });

  // Keyboard arrows on track
  track.tabIndex = 0;
  track.addEventListener('keydown',(e)=>{
    if(e.key==='ArrowRight'){ stop(); go(i+1,true); start(); }
    if(e.key==='ArrowLeft'){ stop(); go(i-1,true); start(); }
  });

  go(0,false);
  start();
})();
