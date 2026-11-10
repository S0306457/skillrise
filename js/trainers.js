(()=>{const r=document.querySelector(".pg-trainers");if(!r)return;
const chips=r.querySelector(".chips"),grid=r.querySelector(".cards");
chips.innerHTML=["All",...new Set(TRAINERS.map(p=>p.s))].map((s,i)=>`<button aria-pressed="${!i}">${s}</button>`).join("");
const draw=f=>{grid.innerHTML=TRAINERS.filter(p=>f==="All"||p.s===f).map((p,i)=>`<article class="tc pop" style="--d:${i*.06}s"><div class="av ph"><img src="${img("trainer-"+p.ph)}" alt="${p.n}"></div><h3>${p.n}</h3><p>${p.r}</p><p style="margin-block:.6rem"><span class="tag">${p.s}</span></p><p>${p.y} yrs · ${p.c} sessions · ★ ${p.q}</p></article>`).join("")};
chips.onclick=e=>{const b=e.target.closest("button");if(!b)return;chips.querySelectorAll("button").forEach(x=>x.setAttribute("aria-pressed",x===b));draw(b.textContent)};draw("All");
})();
