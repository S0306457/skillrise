(()=>{const r=document.querySelector(".h1");if(!r)return;
const tabs=r.querySelectorAll("[role=tab]"),ps=r.querySelectorAll(".panel");
tabs.forEach((t,i)=>t.onclick=()=>{tabs.forEach(x=>x.setAttribute("aria-selected",x===t));ps.forEach((p,j)=>p.classList.toggle("on",i===j))});
})();
