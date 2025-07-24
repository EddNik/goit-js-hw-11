import{S as p,a as h,i as n}from"./assets/vendor-D8_O3--j.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const d=document.querySelector(".gallery"),m=document.querySelector(".js-loader");function y(i){const e=i.map(o=>`<li class="gallery-item">
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
        </li>`).join("");d.insertAdjacentHTML("afterbegin",e),new p(".gallery a",{captionDelay:250,overlayOpacity:.95}).refresh()}function g(){m.classList.add("loader")}function a(){m.classList.remove("loader")}function f(){d.innerHTML=""}const r={timeout:5e3,theme:"dark",messageColor:"white",icon:"custom-svg-icon",iconColor:"#FFFFFF",closeOnClick:!0,backgroundColor:"#ef4040",position:"topRight"};function v(i){return h.get("https://pixabay.com/api/",{params:{key:"51407519-422ec1314326ee48566ae1dd4",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:21}}).then(e=>(Array.isArray(e.data.hits)&&e.data.hits.length===0&&(r.message="Sorry, there are no images matching your search query. Please try again!",n.show(r)),e.data.hits)).catch(e=>{console.log(e),r.message=`${e.message} : ${e.code}`,n.error(r),setTimeout(()=>{a()},500)})}const u=document.querySelector(".form");u.addEventListener("submit",i=>{i.preventDefault(),f();const e=u.elements["search-text"].value.trim();g(),e===""?(r.message="Sorry, this name images is empty. Please try again!",r.position="topRight",n.show(r),setTimeout(()=>{a()},500)):v(e).then(o=>{y(o),a()}).catch(o=>{r.message=`${o}`,r.timeout=1e4,n.show(r),setTimeout(()=>{a()},500)})});
//# sourceMappingURL=index.js.map
