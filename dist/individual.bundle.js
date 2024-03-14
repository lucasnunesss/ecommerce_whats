(()=>{"use strict";var n={594:(n,e,r)=>{r.d(e,{A:()=>m});var o=r(601),t=r.n(o),a=r(314),i=r.n(a),c=r(417),s=r.n(c),l=new URL(r(853),r.b),d=new URL(r(708),r.b),p=new URL(r(833),r.b),u=i()(t()),f=s()(l),h=s()(d),g=s()(p);u.push([n.id,`@charset "UTF-8"; \n\n@font-face {\n  font-family: 'league';\n  src: url(${f});\n}\n\n\n\n*{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'league', sans-serif;\n  transition: .2s linear;\n  text-transform: capitalize;\n  text-decoration: none;\n  text-transform: capitalize;\n  transition: .2s linear;\n}\n\nhtml{\n  scroll-behavior: smooth;\n  scroll-padding-top: 6rem;\n  overflow-x: hidden;\n}\n\nhtml{\n  scroll-padding-top: 6rem;\n  scroll-behavior: smooth;\n}\n\nbody{\n  background-color: #FAFAFA;\n  overflow-x: hidden;\n  \n}\n\n\n\nheader{\n  position: fixed;\n  top:0; left:0; right: 0;\n  background-color: #fcda52;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  z-index: 1000;\n  box-shadow: 0 .5rem 1rem rgba(0,0,0,0.1);\n} \n\n\nheader .navBar{\n  padding-top: 5em;\n}\n\n.sellva{\n width: 181px;\n}\n\n\nheader .navBar a{\n  font-size: 1rem;\n  padding: 0 6.5rem;\n  color: #2d2d2d;\n;\n}\n\nheader .navBar a:hover{\n  color:#D85B95;\n  transition: 0.3s ease;\n}\n\n\nheader > .icons > i{\n  display: block;\n  font-size: 1.4rem;\n  color: #333;\n  margin-right: 3.5rem;\n  margin-top: 4.80rem;\n}\n\n.hide{\n  display: none;\n}\n\n\n\n\n\n.showNav > a {\n  display: block;\n  text-decoration: none;\n  color: black;\n  padding-top: 1em;\n  padding-right: 2em;\n  padding-left: 1.5em;\n  margin-right: 2em;\n  border-bottom: 1px solid black;\n}\n\narticle{\n  padding: 2rem 9%;\n}\n\n.slide{\n  display: flex;\n  align-items: center;\n  min-height: 70vh;\n  background: url(${h}) no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.slide .content{\n  max-width: 50rem;\n}\n\n.slide .content h3{\n  font-size: 4rem;\n  color: #333;\n}\n\n.slide .content span{\n  font-size: 2rem;\n  color: #c40652b7;\n  padding: 1rem 0;\n  line-height: 1.5;\n}\n\n.slide .content p{\n  font-size: 1.5rem;\n  color: black;\n  padding: 1rem 0;\n  line-height: 1.5;\n}\n\n.btn{\n  display: inline-block;\n  margin-top: 1rem;\n  text-align: center;\n  background: #333;\n  padding: .9rem 3.5rem;\n  cursor: pointer;\n  font-size: 1.7rem;\n  color: white;\n}\n\n.btn:hover{\n  background: #D85B95;\n}\n\n.imagem{\n  height: 150px;\n  width: 188px;\n \n}\n\n\n\n\n\n\nsection{\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n\n}\n\nsection > h1{\n  margin-top: 2em;\n  text-align: center;\n  color: rgb(98, 98, 98);\n  font-weight: 900;\n  font-size: 2em;\n}\n\n\n.carrosel-roses, .carrosel-cesta, .carrosel-choco{\n  width: 89%;\n  overflow:inherit;\n  overflow-y: hidden;\n  overflow-x: hidden;\n  display: flex;\n \n  padding: 30px 50px;\n  max-width: 87%;\n  margin-top: -1.5em;\n  margin-bottom: 0;\n\n}\n\n.carrosel-roses .product-roses, .carrosel-cesta .product-cesta, .carrosel-choco .product-choco {\n  margin: 0 2em 0 auto;\n  width: 350px;\n\n  box-shadow: 0 0 10px 5px rgba(0,0,0,0.1);\n  border-radius: 20px;\n  background-color: #ffffff;\n \n  \n}\n\n.carrosel-roses  .product-roses img, .carrosel-cesta .product-cesta img, .carrosel-choco .product-choco img{\n  width: 350px;\n  height: 250px;\n  object-fit: cover;\n\n  border-radius: 20px;\n}\n\n.imagemProduct{\n  background-color: #ffffff;\n  border-radius: 20px;\n}\n\n.imagemProduct img{\n  border: none;\n  width: 350px;\n  height: 250px;\n}\n\n\n.carrosel-roses .product-roses .inf, .carrosel-cesta .product-cesta .inf, .carrosel-choco .product-choco .inf{\n  padding: 20px 30px;\n  margin-top: -10px;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: space-between; \n  background-color: #FFFFFF;\n  border-radius: 20px;\n}\n\n.carrosel-roses .product-roses .inf button, .carrosel-cesta .product-cesta .inf button, .carrosel-choco .product-choco button{\n  width: 1%;\n  font-size: 40px;\n  margin: 5px 0 -25px 0;\n  \n  background-color: transparent;\n  border: none;\n  outline: none;\n  color: rgb(247, 62, 93);\n  \n  cursor: pointer;\n \n}\n\n.carrosel-roses .product-roses .inf .title, .carrosel-cesta .product-cesta .inf .title, .carrosel-choco .product-choco .inf{\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.carrosel-roses .product-roses .inf .title:hover, .carrosel-cesta .product-cesta .inf .title:hover, .carrosel-choco .product-choco .inf .title:hover{\n  color:#D85B95;\n  transition: 0.3s ease;\n}\n\n.carrosel-roses .product-roses .inf  .price, .carrosel-cesta .product-cesta .inf .price, .carrosel-choco .product-choco .inf .price{\n  font-size: 15px;\n  font-weight:lighter;\n  color: rgb(58, 58, 58);\n  margin-top: 5px;\n}\n\n\n\n.carrosel-roses .seta, .carrosel-cesta .seta, .carrosel-choco .seta{\n  \n  position: absolute;\n  justify-content: space-between;\n  display: flex;\n  top: 50%;\n  \n}\n\n.carrosel-roses .seta button, .carrosel-cesta .seta button, .carrosel-choco .seta button{\n  font-size: 30px;\n  width: 50px;\n  height: 50px;\n  border: none;\n  background-color: transparent;\n  color: #D85B95;\n  font-weight: 100;\n  cursor: pointer;\n\n\n}\n\n.carrosel-roses .carrosel-cesta .carrosel-choco, .left-roses{\n  height: 50px;\n  width: 50px;\n\n  position: absolute;\n  justify-content: space-between;\n  display: flex;\n  font-size: 30px;\n \n  border: none;\n  background-color: transparent;\n  color: #D85B95;\n  font-weight: 100;\n  cursor: pointer;\n  margin-top: 145px;\n  margin-left: 81%;\n}\n\n.rigth-roses{\n \n\n\n  position: absolute;\n  justify-content: space-between;\n  display: flex;\n  font-size: 30px;\n\n  height: 50px;\n  border: none;\n  background-color: transparent;\n  color: #D85B95;\n  font-weight: 100;\n  cursor: pointer;\n  margin-top: 145px;\n  margin-left: -34px;\n}\n\n\n\n@media screen and (max-width:1830px) {\n\n  \n  .carrosel-roses .carrosel-cesta .carrosel-choco, .left-roses{\n    margin-left: 82%;\n  }\n}\n\n@media (max-width: 991px){\n  html{\n    font-size: 75%;\n  }\n\n  header{\n    padding: 2rem;\n  }\n\n  article{\n    padding: 2rem;\n  }\n\n  .slide{\n    background-position: left;\n  }\n}\n\n@media (max-width: 768px){\n  header > .sellva{\n    display:none;\n  }\n\n  header .sellva{\n    background-image: url(${g});\n  }\n  header .navBar{\n    position: absolute;\n    top:0%; left:0; right: 0;\n    border-top: .1rem solid rgba(0,0,0, .1);\n \n  }\n\n  header .navBar a{\n    margin: 1rem;\n    padding: 1.5rem;\n    border: .1rem solid rgba(0,0,0,.1);\n  }\n\n  .carrosel-roses .carrosel-cesta .carrosel-choco, .left-roses{\n    margin-left: 80%;\n  }\n\n  .slide .content h3{\n    font-size: 3rem;\n  }\n\n  .slide .content span{\n    font-size: 1.5rem;\n  }\n}\n\n@media (min-width: 350px) and (max-width: 768px){\n  html{\n    font-size: 70%;\n  }\n\n  section{\n    display: flex;\n    \n    flex-direction: column;\n   \n  \n  }\n  \n  \n \n\n  .carrosel-roses .carrosel-cesta .carrosel-choco, .left-roses{\n    margin-left: 77%;\n\n  }\n\n  .rigth-roses{\n    margin-left: -57px;\n  }\n}\n\n\n\n/* INDIVIDUAL PRODUCTS */\n#productIndividual{\n  display: flex;\n  margin-top: 100px;\n  flex-direction: row;\n  justify-content: center;\n  \n}\n\n\n.singleProductImage img{\n  width: 600px;\n\n}\n\n .singleProductDetails{\n  padding-right: 50px;\n\n  border-radius: 30px;\n}\n\n .singleProductDetails h4{ \n  padding: 40px 0;\n  margin-top: 2em;\n  font-size: 2em;\n\n}\n\n .singleProductDetails h2{ \n  font-size: 26px;\n}\n\n.singleProductDetails input{\n  width: 50px;\n  height: 47px;\n  padding-left: 10px;\n  font-size: 16px;\n  margin-right: 10px;\n}\n\n .singleProductDetails input:focus{\n  outline: none;\n}\n\n.singleProductDetails button{\n  background: #088178;\n  color: #fff;\n  padding: 1.3em;\n  border-radius: 20px;\n  cursor: pointer;\n}\n\n.singleProductDetails button:hover{\n  background: #def6f4;\n  color: black;\n}\n\ni  .contagemItens{\n  display: inline;\n  margin-right: 10px;\n  font-weight: 100;\n  font-size: 1rem;\n  color: #088178;\n}`,""]);const m=u},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",o=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),o&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),o&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,o,t,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),t&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=t):d[4]="".concat(t)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},875:(n,e,r)=>{var o=r(72),t=r.n(o),a=r(825),i=r.n(a),c=r(659),s=r.n(c),l=r(56),d=r.n(l),p=r(540),u=r.n(p),f=r(113),h=r.n(f),g=r(594),m={};m.styleTagTransform=h(),m.setAttributes=d(),m.insert=s().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=u(),t()(g.A,m),g.A&&g.A.locals&&g.A.locals},72:n=>{var e=[];function r(n){for(var r=-1,o=0;o<e.length;o++)if(e[o].identifier===n){r=o;break}return r}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=o.base?s[0]+o.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=r(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=t(f,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function t(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,t){var a=o(n=n||[],t=t||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=r(a[i]);e[c].references--}for(var s=o(n,t),l=0;l<a.length;l++){var d=r(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},659:n=>{var e={};n.exports=function(n,r){var o=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var o="";r.supports&&(o+="@supports (".concat(r.supports,") {")),r.media&&(o+="@media ".concat(r.media," {"));var t=void 0!==r.layer;t&&(o+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),o+=r.css,t&&(o+="}"),r.media&&(o+="}"),r.supports&&(o+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},833:(n,e,r)=>{n.exports=r.p+"7773da2caedc45d464de.png"},708:(n,e,r)=>{n.exports=r.p+"eca632cac0b135239b36.jpg"},853:(n,e,r)=>{n.exports=r.p+"caadcad8af387d419251.otf"}},e={};function r(o){var t=e[o];if(void 0!==t)return t.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,r),a.exports}r.m=n,r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var o in e)r.o(e,o)&&!r.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var t=o.length-1;t>-1&&(!n||!/^http(s?):/.test(n));)n=o[t--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),r.b=document.baseURI||self.location.href,r.nc=void 0,(()=>{r(875);const n=new URLSearchParams(window.location.search).get("id"),e=document.createElement("img"),o=document.querySelector(".singleProductDetails");console.log(n),window.onload=()=>{!function(){if(n)try{let r,t=0;n<20?r=fetch("../roses.json"):n>20&&n<40?(r=fetch("../cestas.json"),console.log("oiiiiii"),t=20):n>40&&(r=fetch("../choco.json"),t=40),r&&r.then((n=>n.json())).then((r=>{const a=r[n-t-1];a?(e.src=a.img,document.querySelector(".singleProductImage").appendChild(e),console.log(e),o.innerHTML=`  <h6></h6>\n              <h4>${a.h1}</h4>\n              <h2>R$${a.preco.toFixed(2).replace(".",",")}</h2>\n              \n              <input type="number" value="1">\n              <button class="whats">Chamar no whatsapp</button>`):console.error(`Produto com ID ${n} não encontrado.`)})).catch((n=>{console.error("Erro ao buscar dados:",n)}))}catch(n){console.log(n)}}()}})()})();