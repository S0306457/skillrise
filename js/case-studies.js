(()=>{const r=document.querySelector(".pg-cases");if(!r)return;
const chips=r.querySelector(".chips"),grid=r.querySelector(".cards");
chips.innerHTML=["All",...new Set(CASES.map(p=>p.i))].map((s,i)=>`<button aria-pressed="${!i}">${s}</button>`).join("");
const draw=f=>{const a=CASES.filter(p=>f==="All"||p.i===f);grid.innerHTML=a.map((p,i)=>`<article class="cc reveal${i===0?" feat":""}" style="--d:${i*.06}s"><span class="tag">${p.i}</span><b data-count="${p.n}" data-suf="${p.u}">0</b><p class="sm">${p.m}</p><h3>${p.c}</h3><p>${p.t}</p></article>`).join("");grid.querySelectorAll(".reveal").forEach(e=>io.observe(e))};
chips.onclick=e=>{const b=e.target.closest("button");if(!b)return;chips.querySelectorAll("button").forEach(x=>x.setAttribute("aria-pressed",x===b));draw(b.textContent)};draw("All");
})();
