import{S as d,i as p}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function f(i){return i.map(({webformatURL:o,largeImageURL:r,tags:s,likes:e,views:t,comments:n,downloads:u})=>`<li class="photo-main-list">
            <a class="galery-link"  href="${r}">
            <img class="photo" width="360" height="200" src="${o}" alt="${s}" />
            </a>
              <ul class='list-menu'>
                <li class='description'>
                  <h3 class='title'>Likes</h3>
                  <p class='datas'>${e}</p>
                </li>
                <li class='description'>
                  <h3 class='title'>Views</h3>
                  <p class='datas'>${t}</p>
                </li>
                <li class='description'>
                  <h3 class='title'>Comments</h3>
                  <p class='datas'>${n}</p>
                </li>
                <li class='description'>
                  <h3 class='title'>Downloads</h3>
                  <p class='datas'>${u}</p>
                </li>
              </ul>
            </li>`).join("")}const h="43147251-812f7b0e187b76efed42bbc3c",m="https://pixabay.com/api/",y="photo",g="horizontal",b="true";function E(i){const o=i.trim(),r=`${m}?key=${h}&q=${o}&image_type=${y}&orientation=${g}&safesearch=${b} `;return fetch(r).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}const l=document.querySelector(".todo-list"),c=document.querySelector(".input-text"),$=document.querySelector(".main-form"),a=document.querySelector(".loader");a.style.display="none";$.addEventListener("submit",function(o){o.preventDefault(),l.style.marginTop="60px",a.style.display="inline-block",E(c.value).then(r=>{const s=r.hits;if(s.length===0)return l.innerHTML="",S();l.innerHTML=f(s),new d(".todo-list a.galery-link",{captionsData:"alt",captionDelay:500}).refresh()}).catch(r=>console.log(r)).finally(()=>{a.style.display="none"}),c.value=""});function S(){p.error({maxWidth:"432px",messageSize:"16px",titleColor:" #fafafb",messageColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!",closeOnEscape:!0,position:"topRight",backgroundColor:"#ed6f7c"})}
//# sourceMappingURL=commonHelpers.js.map
