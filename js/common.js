const img=n=>(window.IMGS&&IMGS[n])||"assets/img/"+n+".jpg";
const DEF={home:"index.html",programs:"programs.html",trainers:"trainers.html","case-studies":"case-studies.html",login:"login.html","sign-up":"signup.html","about-us":"about.html",about:"about.html",blog:"blog.html",faqs:"faq.html",faq:"faq.html","contact-us":"contact.html",contact:"contact.html",dashboard:"dashboard.html"};
const lk=s=>(window.PAGES||DEF)[s]||"#"+s;
const dl=(t,id)=>window.PAGES?"#"+t+"-"+id:({program:"program.html",integration:"integration.html",blog:"blog-post.html"})[t]+"?id="+id;
const qid=()=>window.PAGES?(window.DETAIL&&DETAIL.id):new URLSearchParams(location.search).get("id");
window.RENDER=window.RENDER||{};
const $=id=>document.getElementById(id),root=document.documentElement;
const fill=(id,items)=>$(id)&&($(id).innerHTML=items.map(t=>`<li><a href="${lk(t.toLowerCase().replace(/[^a-z]+/g,"-"))}">${t}</a></li>`).join(""));
fill("legal",["Privacy Policy","Cookie Policy","Compliance","Legal"]);
fill("c1",["Overview","Employee Enrollment","Completion Tracking","Certificates","Billing"]);
fill("c1b",["Software","Manufacturing","Financial Services","Healthcare"]);
fill("c2",["Leadership","Communication","Data Skills","Compliance Training","Sales Training","Technical Skills"]);
fill("c3",["Trainers","Case Studies","Login","Sign Up"]);
fill("c3b",["Company","Careers","Contact"]);
fill("c4",["FAQs","Enrollment Help","Billing Help","Contact Support"]);
function isDark(){return root.dataset.theme?root.dataset.theme==="dark":matchMedia("(prefers-color-scheme: dark)").matches}
$("theme").onclick=()=>{const t=isDark()?"light":"dark";root.dataset.theme=t;try{localStorage.setItem("theme",t)}catch(e){}};
function setDir(d){root.dir=d;$("dir").textContent=d==="rtl"?"LTR":"RTL";try{localStorage.setItem("dir",d)}catch(e){}}
$("dir").onclick=()=>setDir(root.dir==="rtl"?"ltr":"rtl");
$("menu").onclick=()=>{const o=$("nav").classList.toggle("open");$("menu").setAttribute("aria-expanded",o)};
try{const t=localStorage.getItem("theme");if(t)root.dataset.theme=t;const d=localStorage.getItem("dir");if(d)setDir(d)}catch(e){}

/* scroll reveal + count-up */
const count=el=>{const to=+el.dataset.count,suf=el.dataset.suf||"",dec=to%1?1:0;
  if(matchMedia("(prefers-reduced-motion: reduce)").matches){el.textContent=to.toFixed(dec)+suf;return}
  const t0=performance.now();(function f(t){const p=Math.min((t-t0)/1600,1),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec)+suf;if(p<1)requestAnimationFrame(f)})(t0)};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const t=e.target;t.classList.add("in");
  if(t.dataset.count)count(t);t.querySelectorAll("[data-count]").forEach(count);io.unobserve(t)}),{threshold:.15});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

document.querySelectorAll(".track").forEach(t=>t.innerHTML+=t.innerHTML);
document.querySelectorAll(".announce button").forEach(b=>b.onclick=()=>b.parentElement.remove());

document.querySelectorAll(".dd").forEach(d=>{const b=d.querySelector(".chev"),m=d.querySelector(".menu");if(!b||!m)return;
b.onclick=e=>{e.stopPropagation();document.querySelectorAll(".dd .menu.open").forEach(x=>{if(x!==m)x.classList.remove("open")});const o=m.classList.toggle("open");b.setAttribute("aria-expanded",o)}});
document.addEventListener("click",()=>document.querySelectorAll(".dd .menu.open").forEach(m=>{m.classList.remove("open");m.previousElementSibling.setAttribute("aria-expanded","false")}));

/* background videos: play only when visible, skip for reduced motion */
(()=>{const vs=document.querySelectorAll("video[data-v]");if(!vs.length)return;
vs.forEach(v=>{v.muted=true;v.loop=true;v.playsInline=true;if(v.dataset.p)v.poster=img(v.dataset.p)});
if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;
const o=new IntersectionObserver(es=>es.forEach(e=>{const v=e.target;if(e.isIntersecting){if(!v.getAttribute("src"))v.src=window.VIDS?VIDS[v.dataset.v]:"assets/video/vid-"+v.dataset.v+".mp4";if(!v.dataset.hold)v.play().catch(()=>{})}else v.pause()}),{threshold:.05});
vs.forEach(v=>o.observe(v))})();
/* photo backgrounds set through CSS variables: resolve against the page, not the stylesheet */
document.querySelectorAll('[style*="assets/img/"]').forEach(e=>{[...e.getAttribute("style").matchAll(/--(\w+):url\(assets\/img\/([\w-]+)\.jpg\)/g)].forEach(m=>e.style.setProperty("--"+m[1],`url(${new URL(img(m[2]),document.baseURI).href})`))});

/* play/pause button on framed videos */
document.querySelectorAll(".vframe").forEach(f=>{const v=f.querySelector("video"),b=document.createElement("button"),P='<svg viewBox="0 0 24 24"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',L='<svg viewBox="0 0 24 24"><path d="M7 4l13 8-13 8z"/></svg>';
b.className="vtoggle";b.type="button";b.innerHTML=P;b.setAttribute("aria-label","Pause video");
b.onclick=()=>{if(v.paused){v.dataset.hold="";v.play().catch(()=>{});b.innerHTML=P;b.setAttribute("aria-label","Pause video")}else{v.dataset.hold="1";v.pause();b.innerHTML=L;b.setAttribute("aria-label","Play video")}};f.append(b)});
