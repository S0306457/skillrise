(()=>{const r=document.querySelector(".h2");if(!r)return;
const words=["Leadership","Data skills","Communication","Compliance"],w=r.querySelector(".rot");let i=0;
setInterval(()=>{i=(i+1)%words.length;w.style.animation="none";void w.offsetWidth;w.textContent=words[i];w.style.animation=""},2600);
const q=r.querySelectorAll(".quote"),d=r.querySelectorAll(".dots button");let k=0;
const show=n=>{k=n;q.forEach((e,j)=>e.classList.toggle("on",j===n));d.forEach((e,j)=>e.setAttribute("aria-selected",j===n))};
d.forEach((b,j)=>b.onclick=()=>show(j));setInterval(()=>show((k+1)%q.length),5200);
const S={Enroll:[["Leadership cohort","24 enrolled",80],["Data Skills batch","18 enrolled",60],["Compliance 2026","42 enrolled",95]],Track:[["Aisha K.","Leadership",70],["Tom B.","Sales",45],["Priya S.","Data Skills",100]],Certify:[["Priya S.","Certificate ready",100],["Grace L.","Certificate ready",100],["Omar H.","In progress",60]],Bill:[["INV-1042","$1,200 · due",50],["INV-1031","$1,200 · paid",100],["INV-1019","$950 · paid",100]]};
const sb=r.querySelectorAll(".sw .tabs-h button"),sc=r.querySelector(".scr");
const sh=k=>{sb.forEach(b=>b.setAttribute("aria-selected",b.textContent===k));sc.style.animation="none";void sc.offsetWidth;sc.style.animation="";sc.innerHTML=S[k].map(([a,b,c])=>`<div class="rw"><span>${a}</span><b>${b}</b><div class="bar"><i style="--w:${c}%"></i></div></div>`).join("")};
sb.forEach(b=>b.onclick=()=>sh(b.textContent));sh("Enroll");
const hi=r.querySelector(".himg");
if(hi&&matchMedia("(hover:hover)").matches){const im=hi.firstElementChild;
hi.onmousemove=e=>{const b=hi.getBoundingClientRect(),x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;im.style.transform=`rotateY(${x*14}deg) rotateX(${-y*14}deg) scale(1.05)`};
hi.onmouseleave=()=>{im.style.transform=""}}
})();
