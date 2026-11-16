(()=>{const r=document.querySelector(".pg-contact");if(!r)return;
const f=r.querySelector("form"),g=id=>r.querySelector("#"+id),er=r.querySelector(".err"),ok=r.querySelector(".ok");
f.onsubmit=e=>{e.preventDefault();ok.textContent="";
 const bad=!g("cf").value.trim()||!g("cl").value.trim()||!/^\S+@\S+\.\S+$/.test(g("ce").value)||!g("cm").value.trim();
 if(bad){er.textContent="Please add your first name, last name, a valid email and a message.";er.classList.remove("shake");void er.offsetWidth;er.classList.add("shake");return}
 er.textContent="";ok.textContent="Thank you. Your message has been sent and we will reply within one business day.";f.reset()};
})();
