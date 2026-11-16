(()=>{const r=document.querySelector(".pg-program");if(!r)return;
const render=()=>{const p=PROGRAMS.find(x=>x.id===qid())||PROGRAMS[0],d=PDET[p.s],tr=TRAINERS.find(t=>t.s===p.s);
r.querySelector(".crumb").innerHTML=`<a href="${lk("programs")}">Programs</a> / <span>${p.t}</span>`;
r.querySelector(".tag").textContent=p.s;r.querySelector(".pt").textContent=p.t;
r.querySelector(".pd").textContent=`${/^[aeiou]/i.test(p.l)?"An":"A"} ${p.l.toLowerCase()} ${p.s.toLowerCase()} program of ${p.h} hours, built for ${d.a.toLowerCase()}.`;
r.querySelector(".body").innerHTML=`<img class="fig" src="${img(SKILLIMG[p.s])}" alt="${p.s}" style="margin-block-end:1.5rem;max-width:520px"><h2>About this program</h2><p>This program gives your team practical, role-based learning in ${p.s.toLowerCase()}. Learners work through short modules at their own pace, and HR can track progress and download a certificate on completion.</p><h2>What learners will achieve</h2><ul class="ticks">${d.o.map(x=>`<li>${x}</li>`).join("")}</ul><h2>What is covered</h2><ol class="mods">${d.m.map(x=>`<li>${x}</li>`).join("")}</ol><h2>Who it is for</h2><p>${d.a}.</p>`;
r.querySelector(".side-card").innerHTML=`<h3>Program details</h3><dl><dt>Level</dt><dd>${p.l}</dd><dt>Duration</dt><dd>${p.h} hours</dd><dt>Rating</dt><dd>★ ${p.r}</dd><dt>Certificate</dt><dd>Included</dd>${tr?`<dt>Trainer</dt><dd>${tr.n}</dd>`:""}</dl><a class="demo" href="${lk("login")}">Login to enroll</a>`;};
RENDER.program=render;render();
})();
