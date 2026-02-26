import{g as h,c as w,a as s}from"./assets/api-Bvr-LXre.js";const c="/new-dofamine/";h()||(window.location.href=`${c}login.html`);const l=document.querySelector("#productsList"),t=document.querySelector("#createForm"),y=document.querySelector("#logoutBtn");y.addEventListener("click",()=>{w(),window.location.href=`${c}login.html`});async function i(){const o=await s("/products");l.innerHTML="",o.forEach(e=>{const n=document.createElement("li");n.innerHTML=`
      <b>${e.name}</b>
      ${e.badge?` — <span>${e.badge}</span>`:""}
      <button data-del="${e.id}">Удалить</button>
    `,l.appendChild(n)})}l.addEventListener("click",async o=>{const e=o.target.dataset.del;if(e)try{await s(`/products/${e}`,{method:"DELETE"}),await i()}catch(n){alert(n.message)}});t.addEventListener("submit",async o=>{o.preventDefault();const e=t.name.value.trim(),n=t.badge.value.trim()||null,u=t.geos.value.trim()||null,m=t.button_text.value.trim()||"Купить",d=t.button_link.value.trim()||"https://t.me/tmlfarm",p=t.variant.value||"default",b=t.prices.value.split(`
`).map(a=>a.trim()).filter(Boolean).map(a=>{const[v,g]=a.split("|").map(r=>r==null?void 0:r.trim());return{label:v,value:g}}),f=t.features.value.split(`
`).map(a=>a.trim()).filter(Boolean);try{await s("/products",{method:"POST",body:JSON.stringify({name:e,badge:n,variant:p,button_text:m,button_link:d,geos:u,prices:b,features:f})}),t.reset(),t.button_text.value="Купить",t.button_link.value="https://t.me/tmlfarm",await i()}catch(a){alert(a.message)}});i();
//# sourceMappingURL=admin.js.map
