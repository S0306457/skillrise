(()=>{const r=document.querySelector(".pg-faq");if(!r)return;
const rail=r.querySelector(".rail-btns"),list=r.querySelector(".faqs"),cats=[...new Set(FAQS.map(x=>x.c))];
rail.innerHTML=cats.map((s,i)=>`<button aria-pressed="${!i}">${s}<small>${FAQS.filter(x=>x.c===s).length}</small></button>`).join("");
const draw=f=>{list.innerHTML=`<h2>${f}</h2>`+FAQS.filter(x=>x.c===f).map((x,i)=>`<details class="pop" style="--d:${i*.05}s"${i?"":" open"}><summary>${x.q}</summary><p>${x.a}</p></details>`).join("")};
rail.onclick=e=>{const b=e.target.closest("button");if(!b)return;rail.querySelectorAll("button").forEach(x=>x.setAttribute("aria-pressed",x===b));draw(b.firstChild.textContent)};draw(cats[0]);
})();
