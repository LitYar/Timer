document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".days"),t=document.querySelectorAll(".hours"),o=document.querySelectorAll(".minuts"),l=document.querySelectorAll(".seconds"),n=document.querySelectorAll(".up"),r=document.querySelectorAll(".down"),c=document.querySelectorAll(".num-up"),a=document.querySelectorAll(".num-down"),u=document.querySelectorAll(".timer-box-card"),s=new Date("10, 5, 2022").getTime();let d=setInterval((function(){const n=(new Date).getTime(),r=s-n;let c=Math.floor(r/864e5),a=Math.floor(r%864e5/36e5),u=Math.floor(r%36e5/6e4),m=Math.floor(r%6e4/1e3);e.forEach((e=>e.innerHTML=c)),t.forEach((e=>e.innerHTML=a)),o.forEach((e=>e.innerHTML=u)),l.forEach((e=>e.innerHTML=m)),r<=0&&clearInterval(d)}),1e3);setTimeout((()=>{setInterval((function(){u.forEach((e=>{e.classList.toggle("rotate")})),n.forEach((e=>e.classList.toggle("back"))),r.forEach((e=>e.classList.toggle("front"))),c.forEach((e=>e.classList.toggle("numRotateUp"))),a.forEach((e=>e.classList.toggle("numRoteteDown")))}),500)}),500)}));
//# sourceMappingURL=index.b720c435.js.map
