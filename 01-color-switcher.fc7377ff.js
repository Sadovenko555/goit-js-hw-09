!function(){var t,e=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");function n(){var t=document.body,e="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"));t.style.backgroundColor=e}e.addEventListener("click",(function(){e.disabled=!0,t=setInterval(n,1e3)})),a.addEventListener("click",(function(){e.disabled=!1,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.fc7377ff.js.map