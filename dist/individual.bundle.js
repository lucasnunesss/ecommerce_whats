(()=>{"use strict";var n={594:(n,e,o)=>{o.d(e,{A:()=>m});var r=o(601),t=o.n(r),i=o(314),a=o.n(i),c=o(417),s=o.n(c),l=new URL(o(853),o.b),d=new URL(o(708),o.b),p=new URL(o(833),o.b),u=a()(t()),f=s()(l),h=s()(d),g=s()(p);u.push([n.id,`@charset "UTF-8"; \n\n@font-face {\n  font-family: 'league';\n  src: url(${f});\n}\n\n\n\n*{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'league', sans-serif;\n  transition: .2s linear;\n  text-transform: capitalize;\n  text-decoration: none;\n  text-transform: capitalize;\n  transition: .2s linear;\n}\n\nhtml{\n  scroll-behavior: smooth;\n  scroll-padding-top: 6rem;\n  overflow-x: hidden;\n}\n\nhtml{\n  scroll-padding-top: 6rem;\n  scroll-behavior: smooth;\n}\n\nbody{\n  background-color: #FAFAFA;\n  overflow-x: hidden;\n  max-width: 100%;\n}\n\n\n\nheader{\n  position: fixed;\n  top:0; left:0; right: 0;\n  background-color: #fcda52;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  z-index: 1000;\n  box-shadow: 0 .5rem 1rem rgba(0,0,0,0.1);\n} \n\n\nheader .navBar{\n  padding-top: 5em;\n\n  display: flex;\n  justify-content: center;\n}\n\n.sellva {\n width: 171px;\n background-color: #fcda52;\n margin-left: 70px;\n}\n\n\nheader .navBar a{\n  font-size: 1rem;\n  padding: 34px 6rem 0;\n  color: #2d2d2d;\n \n}\n\nheader .navBar a:hover{\n  color:#D85B95;\n  transition: 0.3s ease;\n}\n\n\nheader > .icons > i{\n  display: block;\n  font-size: 1.3rem;\n  color: #333;\n  margin-right: 3.5rem;\n  margin-top: 6.8rem;\n}\n\n.hide{\n  display: none;\n}\n\n.bi.bi-list{\n  display: none;\n}\n\n\n\n.showNav > a {\n  display: block;\n  text-decoration: none;\n  color: black;\n  padding-top: 1em;\n  padding-right: 2em;\n  padding-left: 1.5em;\n  margin-right: 2em;\n  border-bottom: 1px solid black;\n}\n\narticle{\n  padding: 2rem 9%;\n}\n\n.slide{\n  display: flex;\n  align-items: center;\n  min-height: 70vh;\n  background: url(${h}) no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.slide .content{\n  max-width: 50rem;\n}\n\n.slide .content h3{\n  font-size: 4rem;\n  color: #333;\n}\n\n.slide .content span{\n  font-size: 2rem;\n  color: #c40652b7;\n  padding: 1rem 0;\n  line-height: 1.5;\n}\n\n.slide .content p{\n  font-size: 1.5rem;\n  color: black;\n  padding: 1rem 0;\n  line-height: 1.5;\n}\n\n.btn{\n  display: inline-block;\n  margin-top: 1rem;\n  text-align: center;\n  background: #333;\n  padding: .9rem 3.5rem;\n  cursor: pointer;\n  font-size: 1.7rem;\n  color: white;\n}\n\n.btn:hover{\n  background: #D85B95;\n}\n\n.imagem{\n  height: 150px;\n  width: 188px;\n \n}\n\n\n\n\n\n\nsection{\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n\n}\n\nsection > h1{\n  margin-top: 2em;\n  text-align: center;\n  color: rgb(98, 98, 98);\n  font-weight: 900;\n  font-size: 2em;\n}\n\n\n.carrosel-roses, .carrosel-cesta, .carrosel-choco{\n  width: 89%;\n  overflow:inherit;\n  overflow-y: hidden;\n  overflow-x: hidden;\n  display: flex;\n \n  padding: 30px 50px;\n  max-width: 87%;\n  margin-top: -1.5em;\n  margin-bottom: 0;\n\n}\n\n.carrosel-roses .product-roses, .carrosel-cesta .product-cesta, .carrosel-choco .product-choco {\n  margin: 0 2em 0 auto;\n  width: 350px;\n\n  box-shadow: 0 0 10px 5px rgba(0,0,0,0.1);\n  border-radius: 20px;\n  background-color: #ffffff;\n \n  \n}\n\n.carrosel-roses  .product-roses img, .carrosel-cesta .product-cesta img, .carrosel-choco .product-choco img{\n  width: 350px;\n  height: 250px;\n  object-fit: cover;\n\n  border-radius: 20px;\n}\n\n.imagemProduct{\n  background-color: #ffffff;\n  border-radius: 20px;\n}\n\n.imagemProduct img{\n  border: none;\n  width: 350px;\n  height: 250px;\n}\n\n\n.carrosel-roses .product-roses .inf, .carrosel-cesta .product-cesta .inf, .carrosel-choco .product-choco .inf{\n  padding: 20px 30px;\n  margin-top: -10px;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: space-between; \n  background-color: #FFFFFF;\n  border-radius: 20px;\n}\n\n.carrosel-roses .product-roses .inf button, .carrosel-cesta .product-cesta .inf button, .carrosel-choco .product-choco button{\n  width: 1%;\n  font-size: 40px;\n  margin: 5px 0 -25px 0;\n  \n  background-color: transparent;\n  border: none;\n  outline: none;\n  color: rgb(247, 62, 93);\n  \n  cursor: pointer;\n \n}\n\n.carrosel-roses .product-roses .inf .title, .carrosel-cesta .product-cesta .inf .title, .carrosel-choco .product-choco .inf{\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.carrosel-roses .product-roses .inf .title:hover, .carrosel-cesta .product-cesta .inf .title:hover, .carrosel-choco .product-choco .inf .title:hover{\n  color:#D85B95;\n  transition: 0.3s ease;\n}\n\n.carrosel-roses .product-roses .inf  .price, .carrosel-cesta .product-cesta .inf .price, .carrosel-choco .product-choco .inf .price{\n  font-size: 15px;\n  font-weight:lighter;\n  color: rgb(58, 58, 58);\n  margin-top: 5px;\n}\n\n\n\n.carrosel-roses .seta, .carrosel-cesta .seta, .carrosel-choco .seta{\n  \n  position: absolute;\n  justify-content: space-between;\n  display: flex;\n  top: 50%;\n  \n}\n\n.carrosel-roses .seta button, .carrosel-cesta .seta button, .carrosel-choco .seta button{\n  font-size: 30px;\n  width: 50px;\n  height: 50px;\n  border: none;\n  background-color: transparent;\n  color: #D85B95;\n  font-weight: 100;\n  cursor: pointer;\n\n\n}\n\n.carrosel-roses .carrosel-cesta .carrosel-choco, .left-roses{\n  height: 50px;\n  width: 50px;\n\n  position: absolute;\n  justify-content: space-between;\n  display: flex;\n  font-size: 30px;\n \n  border: none;\n  background-color: transparent;\n  color: #D85B95;\n  font-weight: 100;\n  cursor: pointer;\n  margin-top: 145px;\n  margin-left: 81%;\n}\n\n.rigth-roses{\n \n\n\n  position: absolute;\n  justify-content: space-between;\n  display: flex;\n  font-size: 30px;\n\n  height: 50px;\n  border: none;\n  background-color: transparent;\n  color: #D85B95;\n  font-weight: 100;\n  cursor: pointer;\n  margin-top: 145px;\n  margin-left: -34px;\n}\n\n\n\n@media screen and (max-width:1830px) {\n\n  \n  .carrosel-roses .carrosel-cesta .carrosel-choco, .left-roses{\n    margin-left: 87%;\n  }\n}\n\n@media (max-width: 991px){\n  html{\n    font-size: 75%;\n  }\n\n  header{\n    padding: 2rem;\n  }\n\n  article{\n    padding: 2rem;\n  }\n\n  .slide{\n    background-position: left;\n  }\n}\n\n@media (max-width: 768px){\n  header > .sellva{\n    display:none;\n  }\n\n  header .sellva{\n    background-image: url(${g});\n  }\n  header .navBar{\n    position: absolute;\n    top:0%; left:0; right: 0;\n    border-top: .1rem solid rgba(0,0,0, .1);\n \n  }\n\n  header .navBar a{\n    margin: 1rem;\n    padding: 1.5rem;\n    border: .1rem solid rgba(0,0,0,.1);\n  }\n\n  .carrosel-roses .carrosel-cesta .carrosel-choco, .left-roses{\n    margin-left: 80%;\n  }\n\n  .slide .content h3{\n    font-size: 3rem;\n  }\n\n  .slide .content span{\n    font-size: 1.5rem;\n  }\n}\n\n@media (min-width: 150px) and (max-width: 768px){\n  *{\n    box-sizing: content-box;\n \n  }\n  body{\n \n   \n  }\n  html{\n    font-size: 70%;\n   \n  }\n  \n  \n\n  header{\n    background-color: transparent;\n    border: none;\n    box-shadow: none;\n  }\n  header .navBar{\n    display: none;\n    background-color: none;\n    \n\n  }\n\n\n\n\n\n  header > .icons i{\n    height: 35px;\n  width: 45px;\n  border-radius: 50%;\n  display: inline-block;\n    position: fixed;\n    padding-top: 10px ;\n    left: 85%;\n    \n    bottom: 90%;\n   \n    border-radius: 50px;\n  }\n\n  \n  .bi.bi-cart{\n    text-align: center;\n  \n  }\n\n  header > .bi.bi-list{\n    display: inline-block;\n    position: fixed;\n    right: 90%;\n    color: rgb(0, 0, 0);\n    font-weight: 900;\n    font-size: 2.5em;\n    bottom: 92%;\n    cursor: pointer;\n  }\n\n  section, #roses{\n    background-color: #FFFFFF;\n  \n  }\n \n  .carrosel-roses, .carrosel-cesta, .carrosel-choco{\n    \n    overflow:hidden;\n    overflow-y: hidden;\n    overflow-x: hidden;\n    width: 100%;\n    padding: 30px 100px  0px 0px;\n    margin-top: -1.5em;\n    margin-bottom: 0;\n  \n  }\n  \n  .carrosel-roses .product-roses, .carrosel-cesta .product-cesta, .carrosel-choco .product-choco {\n    margin: 0 2em 0 -1em;\n    width: 600px;\n    padding-right: 60px;\n    padding-left: 40px;\n    box-shadow: none;\n    border-radius: 20px;\n  \n    background-color: #FFFFFF;\n    \n  }\n  \n #roses{\n  background-color: #FFFFFF;\n  width: 100vw;\n  overflow:visible;\n  overflow-y:visible;\n  overflow-x: visible;\n }\n \n  \n  \n\n  \n\n\n.carrosel-roses .carrosel-cesta .carrosel-choco,.left-roses{\n  height: 50px;\n  width: 50px;\n\n\n\n  display: block;\n  font-size: 30px;\n\n  border: none;\n  background-color: transparent;\n  color: #D85B95;\n  font-weight: 100;\n  cursor: pointer;\n  margin-top: -40px;\n  margin-left: 96%;\n}\n\n  .rigth-roses{\n    display: block;\n    margin-left: 40px;\n    margin-top: -40px;\n  }\n\n  header > .show{\n    display: block;\n    margin-top: 10px;\n  }\n\n  header > .show a {\n    margin-top: -10px;\n    margin-left: -10px;\n    display: block;\n    background-color: #fcda52;\n  }\n}\n\n\n/* INDIVIDUAL PRODUCTS */\n#productIndividual{\n  display: flex;\n  margin-top: 100px;\n  flex-direction: row;\n  justify-content: center;\n  \n}\n\n\n.singleProductImage img{\n  width: 600px;\n\n}\n\n .singleProductDetails{\n  padding-right: 50px;\n\n  border-radius: 30px;\n}\n\n .singleProductDetails h4{ \n  padding: 40px 0;\n  margin-top: 2em;\n  font-size: 2em;\n\n}\n\n .singleProductDetails h2{ \n  font-size: 26px;\n}\n\n.singleProductDetails input{\n  width: 50px;\n  height: 47px;\n  padding-left: 10px;\n  font-size: 16px;\n  margin-right: 10px;\n}\n\n .singleProductDetails input:focus{\n  outline: none;\n}\n\n.singleProductDetails button{\n  background: #088178;\n  color: #fff;\n  padding: 1.3em;\n  border-radius: 20px;\n  cursor: pointer;\n}\n\n.singleProductDetails button:hover{\n  background: #def6f4;\n  color: black;\n}\n\ni  .contagemItens{\n  display: inline;\n  margin-right: 10px;\n  font-weight: 100;\n  font-size: 1rem;\n  color: #088178;\n}`,""]);const m=u},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var o="",r=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),r&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=n(e),r&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(n,o,r,t,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),o&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=o):d[2]=o),t&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=t):d[4]="".concat(t)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},875:(n,e,o)=>{var r=o(72),t=o.n(r),i=o(825),a=o.n(i),c=o(659),s=o.n(c),l=o(56),d=o.n(l),p=o(540),u=o.n(p),f=o(113),h=o.n(f),g=o(594),m={};m.styleTagTransform=h(),m.setAttributes=d(),m.insert=s().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=u(),t()(g.A,m),g.A&&g.A.locals&&g.A.locals},72:n=>{var e=[];function o(n){for(var o=-1,r=0;r<e.length;r++)if(e[r].identifier===n){o=r;break}return o}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=o(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=t(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function t(n,e){var o=e.domAPI(e);return o.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;o.update(n=e)}else o.remove()}}n.exports=function(n,t){var i=r(n=n||[],t=t||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=o(i[a]);e[c].references--}for(var s=r(n,t),l=0;l<i.length;l++){var d=o(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},659:n=>{var e={};n.exports=function(n,o){var r=function(n){if(void 0===e[n]){var o=document.querySelector(n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}e[n]=o}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(o)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,o)=>{n.exports=function(n){var e=o.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(o){!function(n,e,o){var r="";o.supports&&(r+="@supports (".concat(o.supports,") {")),o.media&&(r+="@media ".concat(o.media," {"));var t=void 0!==o.layer;t&&(r+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),r+=o.css,t&&(r+="}"),o.media&&(r+="}"),o.supports&&(r+="}");var i=o.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,o)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},833:(n,e,o)=>{n.exports=o.p+"7773da2caedc45d464de.png"},708:(n,e,o)=>{n.exports=o.p+"eca632cac0b135239b36.jpg"},853:(n,e,o)=>{n.exports=o.p+"caadcad8af387d419251.otf"}},e={};function o(r){var t=e[r];if(void 0!==t)return t.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,o),i.exports}o.m=n,o.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return o.d(e,{a:e}),e},o.d=(n,e)=>{for(var r in e)o.o(e,r)&&!o.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),o.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;o.g.importScripts&&(n=o.g.location+"");var e=o.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var t=r.length-1;t>-1&&(!n||!/^http(s?):/.test(n));)n=r[t--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=n})(),o.b=document.baseURI||self.location.href,o.nc=void 0,(()=>{o(875);const n=new URLSearchParams(window.location.search).get("id"),e=document.createElement("img"),r=document.querySelector(".singleProductDetails");console.log(n),window.onload=()=>{!function(){if(n)try{let o,t=0;n<20?o=fetch("../roses.json"):n>20&&n<40?(o=fetch("../cestas.json"),console.log("oiiiiii"),t=20):n>40&&(o=fetch("../choco.json"),t=40),o&&o.then((n=>n.json())).then((o=>{const i=o[n-t-1];i?(e.src=i.img,document.querySelector(".singleProductImage").appendChild(e),console.log(e),r.innerHTML=`  <h6></h6>\n              <h4>${i.h1}</h4>\n              <h2>R$${i.preco.toFixed(2).replace(".",",")}</h2>\n              \n              <input type="number" value="1">\n              <button class="whats">Chamar no whatsapp</button>`):console.error(`Produto com ID ${n} não encontrado.`)})).catch((n=>{console.error("Erro ao buscar dados:",n)}))}catch(n){console.log(n)}}()}})()})();