(()=>{const r=document.querySelector(".pg-cases");if(!r)return;
const chips=r.querySelector(".chips"),tl=r.querySelector(".timeline");
chips.innerHTML=["All",...new Set(CASES.map(p=>p.i))].map((s,i)=>`<button aria-pressed="${!i}">${s}</button>`).join("");
const draw=f=>{tl.innerHTML=CASES.filter(p=>f==="All"||p.i===f).map((p,i)=>`<article class="tli reveal ${i%2?"r":"l"}"><span class="dot"></span><div class="tcard"><span class="tag">${p.i}</span><b data-count="${p.n}" data-suf="${p.u}">0</b><p class="sm">${p.m}</p><h3>${p.c}</h3><p>${p.t}</p></div></article>`).join("");tl.querySelectorAll(".reveal").forEach(e=>io.observe(e))};
chips.onclick=e=>{const b=e.target.closest("button");if(!b)return;chips.querySelectorAll("button").forEach(x=>x.setAttribute("aria-pressed",x===b));draw(b.textContent)};draw("All");
})();
