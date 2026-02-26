import{B as f}from"./assets/api-CIPiVqkG.js";document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".menu-button"),s=t.querySelector(".icon"),c=document.querySelector(".modal"),u=document.querySelectorAll(".menu-list-item"),i=document.querySelector(".header");let n=!1;const a=`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="23" height="23" rx="3.5" stroke="#a855f7" />
        
        <path d="M5.625 7.125H18.375M5.625 16.125H18.375M5.625 11.625H18.375" 
              stroke="#f5f3ff"
              stroke-linecap="round" />
    </svg>

    `,e=`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.5" y="0.5" width="23" height="23" rx="3.5" stroke="#a855f7" />
  
  <path d="M5.25 5.25L12 12M12 12L5.25 18.75M12 12L18.75 18.75M12 12L18.75 5.25" 
        stroke="#f5f3ff" 
        stroke-linecap="round" 
        stroke-linejoin="round" />
</svg>
    `;t.addEventListener("click",()=>{n=!n,s.innerHTML=n?e:a,n?r():o()}),u.forEach(g=>g.addEventListener("click",()=>{o(),s.innerHTML=a,n=!1})),window.addEventListener("scroll",l);function r(){c.style.display="block"}function o(){c.style.display="none"}function l(){i&&(window.scrollY>60?i.classList.add("header-scroll"):i.classList.remove("header-scroll"))}});document.addEventListener("DOMContentLoaded",()=>{function t(){const e=document.getElementById("site-header");return e?e.offsetHeight:0}function s(e){const r=document.getElementById(e);if(!r)return;const o=t(),l=r.getBoundingClientRect().top+window.pageYOffset-o;window.scrollTo({top:l,behavior:"smooth"})}document.querySelectorAll(".navigation-item a").forEach(e=>{e.addEventListener("click",function(r){const o=this.getAttribute("href");if(!o)return;const[l,g]=o.split("#");if(!g)return;const h=window.location.pathname.split("/").pop();!(l===""||l==="./"||l===h||l==="./"+h)||!document.getElementById(g)||(r.preventDefault(),s(g),n(g))})});const u=document.querySelectorAll("section[id]"),i=document.querySelectorAll(".navigation-item");function n(e){i.forEach(o=>o.classList.remove("active"));const r=document.querySelector(`.navigation-item a[href*="#${e}"]`);r&&r.closest(".navigation-item").classList.add("active")}function a(){const e=window.pageYOffset+t()+100;u.forEach(r=>{const o=r.offsetTop,l=o+r.offsetHeight;e>=o&&e<l&&n(r.id)})}if(window.addEventListener("scroll",a),window.location.hash){const e=window.location.hash.substring(1);setTimeout(()=>{s(e),n(e)},300)}});typeof ScrollTrigger<"u"&&gsap.registerPlugin(ScrollTrigger);window.addEventListener("load",()=>{if(typeof gsap>"u"||typeof ScrollTrigger>"u"){console.error("Критическая ошибка: GSAP или ScrollTrigger не найдены.");return}const t=document.getElementById("particleCanvas");let s=!0;if(t){let r=function(){s&&(i.clearRect(0,0,t.width,t.height),n.forEach(o=>{o.update(),o.draw()}),requestAnimationFrame(r))};const i=t.getContext("2d");let n=[];const a=()=>{t.width=window.innerWidth,t.height=window.innerHeight};a(),window.addEventListener("resize",a);class e{constructor(){this.reset()}reset(){this.x=Math.random()*t.width,this.y=Math.random()*t.height,this.size=Math.random()*1.5+.5,this.spX=Math.random()*.4-.2,this.spY=Math.random()*.4-.2,this.opacity=Math.random()*.5}update(){this.x+=this.spX,this.y+=this.spY,(this.x<0||this.x>t.width||this.y<0||this.y>t.height)&&this.reset()}draw(){i.fillStyle=`rgba(168, 85, 247, ${this.opacity})`,i.beginPath(),i.arc(this.x,this.y,this.size,0,Math.PI*2),i.fill()}}for(let o=0;o<60;o++)n.push(new e);r(),ScrollTrigger.create({trigger:".home-section",start:"top top",end:"bottom top",onLeave:()=>s=!1,onEnterBack:()=>{s=!0,r()}})}function c(){gsap.utils.toArray(".float-icon").forEach(n=>{gsap.to(n,{x:`+=${gsap.utils.random(20,45)}`,y:`+=${gsap.utils.random(25,55)}`,rotation:gsap.utils.random(-20,20),duration:gsap.utils.random(5,9),repeat:-1,yoyo:!0,ease:"sine.inOut",force3D:!0}),gsap.to(n,{opacity:gsap.utils.random(.12,.25),duration:gsap.utils.random(2,4),repeat:-1,yoyo:!0,ease:"power1.inOut"})})}c();const u=document.querySelector(".cursor-glow");window.addEventListener("mousemove",i=>{u&&gsap.to(u,{x:i.clientX,y:i.clientY,duration:.6,ease:"power2.out",overwrite:"auto"});const n=(i.clientX-window.innerWidth/2)*.01,a=(i.clientY-window.innerHeight/2)*.01;gsap.to(".hero-content",{x:n,y:a,duration:1,overwrite:"auto"}),gsap.to(".section-decor",{x:n*.7,y:a*.7,duration:1.5,overwrite:"auto"}),gsap.to(".t-left",{x:-n*2,y:-a*2,duration:1.3}),gsap.to(".b-right",{x:n*2,y:a*2,duration:1.3})}),gsap.to(".product-section .bg-grid",{scrollTrigger:{trigger:".product-section",start:"top bottom",end:"bottom top",scrub:.5},y:-100,ease:"none"}),gsap.from(".product-section .blob",{scrollTrigger:{trigger:".product-section",start:"top 75%"},autoAlpha:0,scale:.7,duration:2.5,stagger:.4,ease:"power2.out"}),gsap.to(".product-section .bg-icons",{scrollTrigger:{trigger:".product-section",start:"top bottom",end:"bottom top",scrub:1.5},y:-60,ease:"none"}),setTimeout(()=>{ScrollTrigger.refresh()},400)});const p=`${f}/public/products`;function m(t){const s=t.variant?` ${t.variant}`:"",c=t.badge?`<div class="badge">${d(t.badge)}</div>`:"",u=`
    <h3>
      ${d(t.name||"")}<br>
      ${t.sub_h?`<span class="sub-h">${d(t.sub_h)}</span>`:""}
    </h3>
  `,i=(t.prices||[]).map(e=>{const r=(e==null?void 0:e.label)??"",o=e==null?void 0:e.value;return o==null||o===""?`
        <div class="price-row">
          <span>${d(r)}</span>
        </div>
      `:`
      <div class="price-row">
        <span>${d(r)}:</span>
        <strong>${d(o)}</strong>
      </div>
    `}).join(""),n=(t.features||[]).map(e=>`<li>${d(e)}</li>`).join(""),a=t.geos?`<div class="geos">${d(t.geos)}</div>`:"";return`
    <div class="product-card${s}">
      ${c}
      ${u}

      <div class="pricing">
        ${i}
      </div>

      <ul class="card-features">
        ${n}
      </ul>

      ${a}

      <a href="${t.button_link||"#"}" class="buy-btn">
        ${d(t.button_text||"Купить")}
      </a>
    </div>
  `}function d(t){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}async function w(){const t=document.querySelector("#productGrid");if(t)try{const s=await fetch(p);if(!s.ok)throw new Error(`HTTP ${s.status}`);const c=await s.json();if(!c.length){t.innerHTML="<p>Нет товаров</p>";return}t.innerHTML=c.map(m).join("")}catch(s){console.error(s)}}w();
//# sourceMappingURL=index.js.map
