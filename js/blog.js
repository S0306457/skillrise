(()=>{const r=document.querySelector(".pg-blog");if(!r)return;
const [f,a,b,...rest]=BLOGS,card=(p,i)=>`<a class="post reveal" href="${dl("blog",p.id)}" style="--d:${i*.06}s"><div class="cth"><img src="${img(p.img)}" alt="" loading="lazy"></div><span class="tag">${p.c}</span><h3>${p.t}</h3><p>${p.x}</p><span class="meta2">${p.d} · ${p.m} min read</span></a>`,side=p=>`<a class="post sd reveal" href="${dl("blog",p.id)}"><div class="cth"><img src="${img(p.img)}" alt="" loading="lazy"></div><div><span class="tag">${p.c}</span><h3>${p.t}</h3><span class="meta2">${p.d} · ${p.m} min read</span></div></a>`;
r.querySelector(".mag").innerHTML=`<a class="mf reveal" href="${dl("blog",f.id)}"><img src="${img(f.img)}" alt="${f.t}"><div class="mfo"><span class="tag">${f.c}</span><h2>${f.t}</h2><p>${f.x}</p><span class="meta2">${f.d} · ${f.m} min read</span></div></a><div class="msd">${side(a)}${side(b)}</div>`;
r.querySelector(".posts").innerHTML=rest.map(card).join("");
r.querySelectorAll(".reveal").forEach(e=>io.observe(e));
})();
