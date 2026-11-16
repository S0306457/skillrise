(()=>{const r=document.querySelector(".pg-signup");if(!r)return;
const f=r.querySelector("form"),g=id=>r.querySelector("#"+id),er=r.querySelector(".err"),pw=g("sp");
r.querySelector(".eye").onclick=e=>{const t=pw.type==="password";pw.type=t?"text":"password";e.currentTarget.textContent=t?"Hide":"Show"};
f.onsubmit=e=>{e.preventDefault();
 const bad=!g("fn").value.trim()||!g("ln").value.trim()||!/^\S+@\S+\.\S+$/.test(g("se").value)||!g("co").value.trim()||pw.value.length<8;
 if(bad){er.textContent="Complete every field, with a valid work email and a password of 8+ characters.";er.classList.remove("shake");void er.offsetWidth;er.classList.add("shake");return}
 er.textContent="";try{sessionStorage.setItem("sr_user",g("se").value)}catch(x){}
 f.querySelector(".go").textContent="Account created. Opening dashboard…";setTimeout(()=>{location.href=lk("dashboard")},900)};
})();
