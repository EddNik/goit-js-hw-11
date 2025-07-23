import{a as u,i as m}from"./assets/vendor-CRaSdWZI.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const g="51407519-422ec1314326ee48566ae1dd4",c={timeout:1e5,theme:"dark",messageColor:"white",position:"topRight",icon:"custom-svg-icon",iconColor:"#FFFFFF",closeOnClick:!0,backgroundColor:"#ef4040"};function f(a,o){return u.get("https://pixabay.com/api/",{params:{key:g,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",timeout:2e3,per_page:21}}).then(e=>(Array.isArray(e.data.hits)&&e.data.hits.length===0&&(c.message="Sorry, there are no images matching your search query. Please try again!",m.show(c)),e.data.hits)).catch(e=>(console.log(e),e.message))}document.documentElement.style.setProperty("$sl-overlay-background","rgba(255, 0, 0, 0.5)");function d(a){return a.map(e=>`<li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}" >
          <img
            class="gallery-image"
            src="${e.webformatURL}"
            alt="${e.tags}"
          />
        </a>
      </li>`).join("")}const l=document.querySelector(".form"),n=document.querySelector(".gallery");l.addEventListener("submit",a=>{var e;a.preventDefault();const o=((e=l.elements["search-text"])==null?void 0:e.value)||"";f(o).then(s=>{s!="Network Error"&&(n.innerHTML="",n.insertAdjacentHTML("afterbegin",d(s)))}).catch(s=>{console.log(`Another possible errors except network,
            ${s}`)}),console.log(n)});
//# sourceMappingURL=index.js.map
