(()=>{"use strict";(()=>{const e=document.querySelector(".modal-callback"),t=document.querySelector(".modal-overlay"),l=document.querySelector(".modal-close"),o=document.querySelectorAll(".fancyboxModal"),n=window.screen.width;o.forEach((l=>{l.addEventListener("click",(()=>{t.style.display="block",e.style.display="block",e.style.top="-50%",n>768?(({timing:e,draw:t,duration:l})=>{let o=performance.now();requestAnimationFrame((function n(r){let s=(r-o)/l;s>1&&(s=1);let c=e(s);t(c),s<1&&requestAnimationFrame(n)}))})({duration:500,timing:e=>e,draw(t){e.style.top=80*t-50+"%"}}):(t.style.display="block",e.style.top="20%")}))})),t.addEventListener("click",(()=>{t.style.display="none",e.style.display="none"})),l.addEventListener("click",(()=>{t.style.display="none",e.style.display="none"})),document.addEventListener("keydown",(l=>{"Escape"===l.key&&(t.style.display="none",e.style.display="none")}))})(),(()=>{const e=document.querySelectorAll("input[name=fio]"),t=document.querySelectorAll("input[name=tel]");e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-ЯёЁ\s]+/i,""),e.target.style.border=null})),e.addEventListener("invalid",(e=>{e.preventDefault(),e.target.style.border="1px solid red"}))})),t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\d+()]+/gi,""),e.target.style.border=null})),e.addEventListener("invalid",(e=>{e.preventDefault(),e.target.style.border="1px solid red"}))}))})(),(({formId:e})=>{const t=document.getElementById(e),l=document.createElement("div");l.style.color="#000";try{if(!t)throw new Error("Верните форму на место!");t.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=t.querySelectorAll("input"),o=new FormData(t),n={};var r;l.textContent="Загрузка...",t.append(l),o.forEach(((e,t)=>{n[t]=e})),(e=>{let t=!0;return e.forEach((e=>{e.style.border=null,"fio"===e.name?e.value.length<2&&(e.style.border="1px solid red",t=!1):"tel"===e.name?(e.require=!0,(e.value.length<6||e.value.length>16)&&(t=!1,e.style.border="1px solid red")):t=!0})),t})(e)?(r=n,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{l.textContent="Спасибо! Наш менеджер с вами свяжется!",e.forEach((e=>{e.value=""})),setInterval((()=>{l.textContent=""}),3e3)})).catch((e=>{l.textContent="Ошибка..."})):(t.append(l),l.textContent="Попробуйте ещё раз...",setTimeout((()=>{l.textContent=""}),2e3))})()}))}catch(e){console.log(e.message)}})({formId:"form1"}),(()=>{const e=document.querySelectorAll(".top-menu a"),t=document.querySelector(".up");window.onscroll=function(){window.pageYOffset>580?t.style.display="block":t.style.display="none"},t.addEventListener("click",(()=>{window.scrollBy({top:-document.documentElement.scrollHeight,behavior:"smooth"})})),e.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const l=e.getAttribute("href").substring(1);document.getElementById(l).scrollIntoView({behavior:"smooth",block:"start",inline:"center"})}))}))})(),(()=>{const e=document.querySelector(".top-slider"),t=document.querySelectorAll(".top-slider .item"),l=document.querySelectorAll(".top-slider .table");let o,n=0;const r=(e,t,l)=>{e[t].classList.remove(l)},s=(e,t,l)=>{e[t].classList.add(l)};t.length>0&&e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot")&&(r(t,n,"item-active"),r(l,n,"active"),n>=t.length&&(n=0),n<0&&(n=t.length-1),s(t,n,"item-active"),s(l,n,"active"))})),o=setInterval((()=>{r(t,n,"item-active"),r(l,n,"active"),n++,n>=t.length&&(n=0),s(t,n,"item-active"),s(l,n,"active")}),3e3)})(),(()=>{const e=document.querySelectorAll(".accordeon .element"),t=document.querySelectorAll(".accordeon .element-content");e.forEach(((l,o)=>{l.querySelector(".title").addEventListener("click",(()=>{t[o].classList.contains("active")?t[o].style.display="none":t[o].style.display="block",t[o].classList.toggle("active"),l.classList.toggle("active"),e.forEach(((e,l)=>{o!==l&&(e.classList.remove("active"),t[l].style.display="none",t[l].classList.remove("active"))}))}))}))})(),(()=>{const e=document.querySelectorAll(".col-sm-6"),t=document.querySelector(".arrow-left"),l=document.querySelector(".arrow-right");let o;console.log(t),console.log(l),o=window.outerWidth<570?1:window.outerWidth<870&&window.outerWidth>570?2:3;let n=0;e.forEach((e=>{n<o?n++:e.style.display="none"})),n=0,0===n&&(t.style.opacity=.2),t.addEventListener("click",(()=>{n>0&&(n-=1,o-=1,e[n].style.display="block",e[o].style.display="none",l.style.opacity=1,0===n&&(t.style.opacity=.2))})),l.addEventListener("click",(()=>{o<e.length&&(e[n++].style.display="none",e[o++].style.display="block",o===e.length&&(l.style.opacity=.2),t.style.opacity=1)}))})(),(()=>{const e=document.querySelector(".mob-menu-btn"),t=document.querySelector(".mobile-menu"),l=document.querySelector(".overlay");console.log(l),e.addEventListener("click",(e=>{(e=>{const o=e.target.getAttribute("href");e.target.closest(".mob-menu-btn")&&(e.preventDefault(),l.style.cssText="opacity: 1; z-index: 100;",t.style.right="-10px"),e.target.closest(".mobile-menu-close")&&(e.preventDefault(),l.style.cssText=null,t.style.right="-500px"),e.target.closest("ul>li>a")&&(e.preventDefault(),document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"}))})(e)})),l.addEventListener("click",(e=>{e.target.closest(".mobile-menu")&&!e.target.classList.contains("mobile-menu-close")||(l.style.display="none",t.style.display="none")}))})()})();