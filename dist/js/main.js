(()=>{"use strict";(()=>{const e=document.querySelector(".modal-callback"),t=document.querySelector(".modal-overlay"),l=document.querySelector(".modal-close"),n=document.querySelectorAll(".fancyboxModal"),o=window.screen.width;n.forEach((l=>{l.addEventListener("click",(()=>{t.style.display="block",e.style.display="block",e.style.top="-50%",o>768?(({timing:e,draw:t,duration:l})=>{let n=performance.now();requestAnimationFrame((function o(r){let a=(r-n)/l;a>1&&(a=1);let c=e(a);t(c),a<1&&requestAnimationFrame(o)}))})({duration:500,timing:e=>e,draw(t){e.style.top=80*t-50+"%"}}):(t.style.display="block",e.style.top="20%")}))})),t.addEventListener("click",(()=>{t.style.display="none",e.style.display="none"})),l.addEventListener("click",(()=>{t.style.display="none",e.style.display="none"})),document.addEventListener("keydown",(l=>{"Escape"===l.key&&(t.style.display="none",e.style.display="none")}))})(),(()=>{const e=document.querySelectorAll("input[name=fio]"),t=document.querySelectorAll("input[name=tel]");e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-ЯёЁ\s]+/i,""),e.target.style.border=null})),e.addEventListener("invalid",(e=>{e.preventDefault(),e.target.style.border="1px solid red"}))})),t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\d+()]+/gi,""),e.target.style.border=null})),e.addEventListener("invalid",(e=>{e.preventDefault(),e.target.style.border="1px solid red"}))}))})(),(({formId:e})=>{const t=document.getElementById(e),l=document.createElement("div");l.style.color="#000";try{if(!t)throw new Error("Верните форму на место!");t.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=t.querySelectorAll("input"),n=new FormData(t),o={};var r;l.textContent="Загрузка...",t.append(l),n.forEach(((e,t)=>{o[t]=e})),(e=>{let t=!0;return e.forEach((e=>{e.style.border=null,"fio"===e.name?e.value.length<2&&(e.style.border="1px solid red",t=!1):"tel"===e.name?(e.require=!0,(e.value.length<6||e.value.length>16)&&(t=!1,e.style.border="1px solid red")):t=!0})),t})(e)?(r=o,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{l.textContent="Спасибо! Наш менеджер с вами свяжется!",e.forEach((e=>{e.value=""})),setInterval((()=>{l.textContent=""}),3e3)})).catch((e=>{l.textContent="Ошибка..."})):(t.append(l),l.textContent="Попробуйте ещё раз...",setTimeout((()=>{l.textContent=""}),2e3))})()}))}catch(e){console.log(e.message)}})({formId:"form1"}),(()=>{const e=document.querySelectorAll(".top-menu a"),t=document.querySelector(".up");window.onscroll=function(){window.pageYOffset>580?t.style.display="block":t.style.display="none"},t.addEventListener("click",(()=>{window.scrollBy({top:-document.documentElement.scrollHeight,behavior:"smooth"})})),e.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const l=e.getAttribute("href").substring(1);document.getElementById(l).scrollIntoView({behavior:"smooth",block:"start",inline:"center"})}))}))})(),(()=>{const e=document.querySelector(".top-slider"),t=document.querySelectorAll(".top-slider .item"),l=document.querySelectorAll(".top-slider .table");let n,o=0;const r=(e,t,l)=>{e[t].classList.remove(l)},a=(e,t,l)=>{e[t].classList.add(l)};t.length>0&&e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot")&&(r(t,o,"item-active"),r(l,o,"active"),o>=t.length&&(o=0),o<0&&(o=t.length-1),a(t,o,"item-active"),a(l,o,"active"))})),n=setInterval((()=>{r(t,o,"item-active"),r(l,o,"active"),o++,o>=t.length&&(o=0),a(t,o,"item-active"),a(l,o,"active")}),3e3)})(),(()=>{const e=document.querySelectorAll(".accordeon .element"),t=document.querySelectorAll(".accordeon .element-content");e.forEach(((l,n)=>{l.querySelector(".title").addEventListener("click",(()=>{t[n].classList.contains("active")?t[n].style.display="none":t[n].style.display="block",t[n].classList.toggle("active"),l.classList.toggle("active"),e.forEach(((e,l)=>{n!==l&&(e.classList.remove("active"),t[l].style.display="none",t[l].classList.remove("active"))}))}))}))})()})();