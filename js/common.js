const img=n=>(window.IMGS&&IMGS[n])||"assets/img/"+n+".jpg";
const DEF={home:"index.html",programs:"programs.html",trainers:"trainers.html","case-studies":"case-studies.html",login:"login.html",dashboard:"dashboard.html"};
const lk=s=>(window.PAGES||DEF)[s]||"#"+s;
const $=id=>document.getElementById(id),root=document.documentElement;
const fill=(id,items)=>$(id)&&($(id).innerHTML=items.map(t=>`<li><a href="${lk(t.toLowerCase().replace(/[^a-z]+/g,"-"))}">${t}</a></li>`).join(""));
fill("legal",["Privacy Policy","Cookie Policy","Compliance","Legal"]);
fill("c1",["Overview","Employee Enrollment","Completion Tracking","Certificates","Billing"]);
fill("c1b",["Software","Manufacturing","Financial Services","Healthcare"]);
fill("c2",["Leadership","Communication","Data Skills","Compliance Training","Sales Training","Technical Skills"]);
fill("c3",["Trainers","Case Studies","Login"]);
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

const ddb=$("ddBtn"),ddm=$("ddMenu");
if(ddb){ddb.onclick=e=>{e.stopPropagation();const o=ddm.classList.toggle("open");ddb.setAttribute("aria-expanded",o)};
document.addEventListener("click",()=>{ddm.classList.remove("open");ddb.setAttribute("aria-expanded","false")})}

