(()=>{const r=document.querySelector(".pg-blogpost");if(!r)return;
const render=()=>{const p=BLOGS.find(x=>x.id===qid())||BLOGS[0];
r.querySelector(".crumb").innerHTML=`<a href="${lk("blog")}">Blog</a> / <span>${p.c}</span>`;
r.querySelector(".tag").textContent=p.c;r.querySelector(".pt").textContent=p.t;r.querySelector(".pd").textContent=p.d+" · "+p.m+" min read";
r.querySelector(".body").innerHTML=`<img class="fig" src="${img(p.img)}" alt="${p.t}" style="margin-block-end:1.5rem"><p class="lead">${p.x}</p>`+p.p.map(t=>`<p>${t}</p>`).join("")+`<p><a class="demo" href="${lk("login")}">Login to your dashboard</a></p>`;
r.querySelector(".side-card").innerHTML=`<h3>More articles</h3><ul>`+BLOGS.filter(x=>x.id!==p.id).slice(0,4).map(x=>`<li><a href="${dl("blog",x.id)}">${x.t}</a></li>`).join("")+`</ul>`;};
RENDER["blog-post"]=render;render();
})();
