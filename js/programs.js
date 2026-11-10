(()=>{const r=document.querySelector(".pg-programs");if(!r)return;
const chips=r.querySelector(".chips"),grid=r.querySelector(".cards");
chips.innerHTML=["All",...new Set(PROGRAMS.map(p=>p.s))].map((s,i)=>`<button aria-pressed="${!i}">${s}</button>`).join("");
const draw=f=>{grid.innerHTML=PROGRAMS.filter(p=>f==="All"||p.s===f).map((p,i)=>`<article class="pc pop" style="--d:${i*.05}s"><span class="tag">${p.s}</span><h3>${p.t}</h3><p>${p.l} · ${p.h} hours</p><div class="meta"><b>★ ${p.r}</b><a class="demo" href="${lk("login")}">Enroll</a></div></article>`).join("")};
chips.onclick=e=>{const b=e.target.closest("button");if(!b)return;chips.querySelectorAll("button").forEach(x=>x.setAttribute("aria-pressed",x===b));draw(b.textContent)};draw("All");
})();
