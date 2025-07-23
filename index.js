import{a as u,i as p,S as f}from"./assets/vendor-D8_O3--j.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const n={timeout:1e4,theme:"dark",messageColor:"white",position:"topRight",icon:"custom-svg-icon",iconColor:"#FFFFFF",closeOnClick:!0,backgroundColor:"#ef4040"};function h(i){return u.get("https://pixabay.com/api/",{params:{key:"51407519-422ec1314326ee48566ae1dd4",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:21}}).then(t=>(Array.isArray(t.data.hits)&&t.data.hits.length===0&&(n.message="Sorry, there are no images matching your search query. Please try again!",p.show(n)),t.data.hits)).catch(t=>(console.log(t),t.message))}const c=document.querySelector(".gallery"),d=document.querySelector(".js-loader");function y(i){const t=i.map(o=>`<li class="gallery-item">
          <a class="gallery-link" href="${o.largeImageURL}">
            <img
              class="gallery-image"
              src="${o.webformatURL}"
              alt="${o.tags}"
            />
          </a>
          <div class="gallery-options-container">
          <div class="gallery-options">
            <h3 class="count-option">Likes</h3>
            <p>${o.likes}</p>
          </div>
          <div class="gallery-options">
            <h3 class="count-option">Views</h3>
            <p>${o.views}</p>
          </div>
          <div class="gallery-options">
            <h3 class="count-option">Comments</h3>
            <p>${o.comments}</p>
          </div>
          <div class="gallery-options">
            <h3 class="count-option">Downloads</h3>
            <p>${o.downloads}</p>
          </div>
         </div>
        </li>`).join("");c.insertAdjacentHTML("afterbegin",t),new f(".gallery a",{captionDelay:250,overlayOpacity:.95}).refresh()}function m(){d.classList.add("loader")}function g(){d.classList.remove("loader")}function v(){c.innerHTML=""}const l=document.querySelector(".form");l.addEventListener("submit",i=>{var o;i.preventDefault(),v();const t=((o=l.elements["search-text"])==null?void 0:o.value)||"";m(),h(t).then(s=>{s!="Network Error"&&(y(s),g())}).catch(s=>{console.log(`Another possible errors except network,
            ${s}`)})});
//# sourceMappingURL=index.js.map
