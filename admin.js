import{g as v,c as h,a as i}from"./assets/api-CVtpO-kk.js";const w="/new-dofamine/";window.location.href=`${w}login.html`;v()||(window.location.href="/login.html");const l=document.querySelector("#productsList"),t=document.querySelector("#createForm"),y=document.querySelector("#logoutBtn");y.addEventListener("click",()=>{h(),window.location.href="/login.html"});async function s(){const o=await i("/products");l.innerHTML="",o.forEach(e=>{const n=document.createElement("li");n.innerHTML=`
      <b>${e.name}</b>
      ${e.badge?` — <span>${e.badge}</span>`:""}
      <button data-del="${e.id}">Удалить</button>
    `,l.appendChild(n)})}l.addEventListener("click",async o=>{const e=o.target.dataset.del;if(e)try{await i(`/products/${e}`,{method:"DELETE"}),await s()}catch(n){alert(n.message)}});t.addEventListener("submit",async o=>{o.preventDefault();const e=t.name.value.trim(),n=t.badge.value.trim()||null,c=t.geos.value.trim()||null,u=t.button_text.value.trim()||"Купить",m=t.button_link.value.trim()||"https://t.me/tmlfarm",d=t.variant.value||"default",p=t.prices.value.split(`
`).map(a=>a.trim()).filter(Boolean).map(a=>{const[b,g]=a.split("|").map(r=>r==null?void 0:r.trim());return{label:b,value:g}}),f=t.features.value.split(`
`).map(a=>a.trim()).filter(Boolean);try{await i("/products",{method:"POST",body:JSON.stringify({name:e,badge:n,variant:d,button_text:u,button_link:m,geos:c,prices:p,features:f})}),t.reset(),t.button_text.value="Купить",t.button_link.value="https://t.me/tmlfarm",await s()}catch(a){alert(a.message)}});s();
//# sourceMappingURL=admin.js.map
