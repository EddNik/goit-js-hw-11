import{a as u,i as m}from"./assets/vendor-CRaSdWZI.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const n={timeout:1e5,theme:"dark",messageColor:"white",position:"topRight",icon:"custom-svg-icon",iconColor:"#FFFFFF",closeOnClick:!0,backgroundColor:"#ef4040"};function f(a){return u.get("https://pixabay.com/api/",{params:{key:"51407519-422ec1314326ee48566ae1dd4",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",timeout:2e3,per_page:21}}).then(t=>(Array.isArray(t.data.hits)&&t.data.hits.length===0&&(n.message="Sorry, there are no images matching your search query. Please try again!",m.show(n)),t.data.hits)).catch(t=>(console.log(t),t.message))}document.documentElement.style.setProperty("$sl-overlay-background","rgba(255, 0, 0, 0.5)");function g(a){return a.map(o=>`<li class="gallery-item">
        <a class="gallery-link" href="${o.largeImageURL}" >
          <img
            class="gallery-image"
            src="${o.webformatURL}"
            alt="${o.tags}"
          />
        </a>
      </li>`).join("")}const c=document.querySelector(".form"),l=document.querySelector(".gallery");c.addEventListener("submit",a=>{var o;a.preventDefault();const t=((o=c.elements["search-text"])==null?void 0:o.value)||"";f(t).then(s=>{s!="Network Error"&&(l.innerHTML="",l.insertAdjacentHTML("afterbegin",g(s)))}).catch(s=>{console.log(`Another possible errors except network,
            ${s}`)})});
//# sourceMappingURL=index.js.map
