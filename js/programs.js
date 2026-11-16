(()=>{const r=document.querySelector(".pg-programs");if(!r)return;
const sk=[...new Set(PROGRAMS.map(p=>p.s))],bento=r.querySelector(".bento"),chips=r.querySelector(".chips"),list=r.querySelector(".plist");
bento.innerHTML=sk.map((s,i)=>`<button class="tile t${i+1}" data-s="${s}"><img src="${img(SKILLIMG[s])}" alt="" loading="lazy"><span class="tc2"><b>${s}</b><small>${PROGRAMS.filter(p=>p.s===s).length} programs</small></span></button>`).join("");
chips.innerHTML=["All",...sk].map((s,i)=>`<button aria-pressed="${!i}">${s}</button>`).join("");
const set=f=>{chips.querySelectorAll("button").forEach(x=>x.setAttribute("aria-pressed",x.textContent===f));bento.querySelectorAll(".tile").forEach(t=>t.classList.toggle("on",t.dataset.s===f));
 list.innerHTML=PROGRAMS.filter(p=>f==="All"||p.s===f).map((p,i)=>`<article class="prow pop" style="--d:${i*.04}s"><div><h3>${p.t}</h3><p>${p.l} · ${p.h} hours</p></div><span class="tag">${p.s}</span><b>★ ${p.r}</b><a class="demo" href="${dl("program",p.id)}">View program</a></article>`).join("")};
chips.onclick=e=>{const b=e.target.closest("button");if(b)set(b.textContent)};
bento.onclick=e=>{const t=e.target.closest(".tile");if(t){set(t.dataset.s);chips.scrollIntoView({behavior:"smooth",block:"start"})}};set("All");
})();
