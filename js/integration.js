(()=>{const r=document.querySelector(".pg-integration");if(!r)return;
const render=()=>{const p=INTEGRATIONS.find(x=>x.id===qid())||INTEGRATIONS[0];
r.querySelector(".crumb").innerHTML=`<a href="${lk("home")}">Home</a> / <span>Integrations</span>`;
r.querySelector(".tag").textContent="Integration";r.querySelector(".pt").textContent=p.n;r.querySelector(".pd").textContent=p.d;
r.querySelector(".body").innerHTML=`<h2>What it does</h2><ul class="ticks">${p.b.map(x=>`<li>${x}</li>`).join("")}</ul><h2>How it works with Skillrise</h2><ol class="mods"><li>Connect your ${p.n} account from the dashboard</li><li>Choose what data to share</li><li>Skillrise keeps everything in sync</li></ol>`;
r.querySelector(".side-card").innerHTML=`<h3>Other integrations</h3><ul>`+INTEGRATIONS.filter(x=>x.id!==p.id).slice(0,6).map(x=>`<li><a href="${dl("integration",x.id)}">${x.n}</a></li>`).join("")+`</ul><a class="demo" href="${lk("login")}">Login</a>`;};
RENDER.integration=render;render();
})();
