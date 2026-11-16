(()=>{const r=document.querySelector(".pg-trainers");if(!r)return;
const rail=r.querySelector(".rail-btns"),list=r.querySelector(".tlist");
rail.innerHTML=["All",...new Set(TRAINERS.map(p=>p.s))].map((s,i)=>`<button aria-pressed="${!i}">${s}</button>`).join("");
const draw=f=>{list.innerHTML=TRAINERS.filter(p=>f==="All"||p.s===f).map((p,i)=>`<article class="trow pop" style="--d:${i*.06}s"><img class="tph" src="${img(p.im)}" alt="${p.n}" loading="lazy"><div><h3>${p.n}</h3><p>${p.r}</p><span class="tag">${p.s}</span></div><div class="tstat"><span><b>${p.y}</b> years</span><span><b>${p.c}</b> sessions</span><span><b>★ ${p.q}</b> rating</span></div></article>`).join("")};
rail.onclick=e=>{const b=e.target.closest("button");if(!b)return;rail.querySelectorAll("button").forEach(x=>x.setAttribute("aria-pressed",x===b));draw(b.textContent)};draw("All");
})();
