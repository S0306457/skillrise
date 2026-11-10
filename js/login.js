(()=>{const r=document.querySelector(".pg-login");if(!r)return;
const f=r.querySelector("form"),em=r.querySelector("#em"),pw=r.querySelector("#pw"),er=r.querySelector(".err");
r.querySelector(".eye").onclick=e=>{const t=pw.type==="password";pw.type=t?"text":"password";e.currentTarget.textContent=t?"Hide":"Show"};
f.onsubmit=e=>{e.preventDefault();
 if(!/^\S+@\S+\.\S+$/.test(em.value)||pw.value.length<4){er.textContent="Enter a valid work email and a password of 4+ characters.";er.classList.remove("shake");void er.offsetWidth;er.classList.add("shake");return}
 try{sessionStorage.setItem("sr_user",em.value)}catch(x){}
 location.href=lk("dashboard")};
})();
