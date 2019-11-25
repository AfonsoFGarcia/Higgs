!function(e){var n={};function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(i,o,function(n){return e[n]}.bind(null,o));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);t(1),t(2),t(3),t(4),t(5)},function(e,n){const t=document.createElement("template");t.innerHTML="\n    <style>\n        main {\n            margin-right: 1rem;\n            margin-top: 6rem;\n            margin-bottom: 2.75rem;\n            margin-left: 5rem;\n\n            font-family: 'Lato', sans-serif;\n            transition: all 0.15s ease-in-out;\n        }\n        \n        main.higgs-sidebar-open {\n            margin-left: 16rem;\n        }\n\n        @media screen and (max-width: 700px) {\n            main {\n                margin-left: 1rem;\n            }\n            main.higgs-sidebar-open {\n                margin-left: 1rem;\n            }\n        }\n    </style>\n    <main>\n        <slot></slot>\n    </main>\n";class i extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"closed"});e.appendChild(t.content.cloneNode(!0)),this._main=e.querySelector("main"),sessionStorage.getItem("keepOpen")&&this._main.setAttribute("class","higgs-sidebar-open")}shrinkToKeepOpen(){this._main.setAttribute("class","higgs-sidebar-open")}expandToAutoClose(){this._main.removeAttribute("class")}}customElements.define("higgs-content",i)},function(e,n){const t=document.createElement("template");t.innerHTML='\n    <style>\n        footer {\n            position: fixed;\n            bottom: 0;\n            left: 0;\n            right: 0;\n            height: 1.25rem;\n            z-index: 3;\n        \n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n            padding: 0.25rem 1.25rem;\n        \n            background-color: #fafafa;\n            background-position: right bottom;\n            border-top: 1px solid #bababa;\n            \n            font-family: \'Lato\', sans-serif;\n        \n            transition: all 0.15s ease-in-out;\n            overflow-y: hidden;\n\n            font-family: \'Lato\', sans-serif;\n        }\n        \n        footer:hover {\n            height: 7.5rem;\n        \n            padding: 1.25rem;\n\n            background-position: right bottom;\n            background-repeat: no-repeat;\n            background-size: 7.5rem 7.5rem;\n            background-origin: content-box;\n        }\n        \n        footer > .extra-info {\n            opacity: 0;\n        }\n        \n        footer:hover > .extra-info {\n            opacity: 1;\n        }\n    </style>\n    <footer class="higgs-background">\n        <div class="version-number"></div>\n        <div class="extra-info" id="support-links">\n            <a id="incident-link">Report a problem</a>\n            <br>\n            <a id="request-link">Submit a request</a>\n        </div>\n        <div class="extra-info" id="copyright"></div>\n    </footer>\n';class i extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"closed"});if(e.appendChild(t.content.cloneNode(!0)),this._footer=e.querySelector("footer"),this._versionNumber=e.querySelector(".version-number"),this._supportLinks=e.querySelector("#support-links"),this._copyright=e.querySelector("#copyright"),this._versionNumber.textContent=this.getAttribute("version-number"),this.hasAttribute("request-link")||this.hasAttribute("incident-link")){const e=this._supportLinks.querySelector("#incident-link"),n=this._supportLinks.querySelector("br"),t=this._supportLinks.querySelector("#request-link");this.hasAttribute("incident-link")?e.href=this.getAttribute("incident-link"):this._supportLinks.removeChild(e),this.hasAttribute("request-link")&&this.hasAttribute("incident-link")||this._supportLinks.removeChild(n),this.hasAttribute("request-link")?t.href=this.getAttribute("request-link"):this._supportLinks.removeChild(t)}else this._footer.removeChild(this._supportLinks);if(this.hasAttribute("copyright")?this._copyright.textContent=this.getAttribute("copyright"):this._footer.removeChild(this._copyright),this.hasAttribute("background-image")){const n="\n            .higgs-background:hover { \n                background-image: url("+this.getAttribute("background-image")+"); \n            }\n            ",t="\n            footer:hover > * {\n                margin-right: 8.75rem;\n            }\n            ";e.querySelector("style").appendChild(document.createTextNode(n)),e.querySelector("style").appendChild(document.createTextNode(t))}}}customElements.define("higgs-footer",i)},function(e,n){const t=document.createElement("template");t.innerHTML="\n    <style>\n        header {\n            position: fixed;\n            top: 0;\n            display: flex;\n            align-items: center;\n            width: 100%;\n            padding-bottom: 0.5rem;\n            background-color: #2f2f2f;\n            color: white;\n            font-family: 'Neuton', serif;\n            box-shadow:0px 0px 10px 0px #2f2f2f;\n            z-index: 2;\n        }\n        \n        .nav-branding {\n            background-color: #0033a0;\n            color: white;\n            display: inline-flex;\n            align-self: flex-start;\n            height: 4rem;\n            margin: 0 1rem;\n            box-shadow: 0px 0px 10px 0px #000000;\n        }\n        \n        .logo {\n            width: 3rem;\n            height: 3rem;\n            margin: 0.5rem;\n            transition: all 0.15s ease-in-out;\n        }\n        \n        .logo:hover {\n            width: 3.5rem;\n            height: 3.5rem;\n            margin: 0.25rem;\n        }\n        \n        .application-name {\n            font-size: 3rem;\n            text-overflow: ellipsis;\n            white-space: nowrap;\n            overflow: hidden;\n            margin-right: 1rem;\n        }\n\n        .sidebar-toggle {\n            display: none;\n        }\n\n        @media screen and (max-width: 700px) {\n            .sidebar-toggle {\n                display: block;\n                margin-top: 0.5rem;\n                margin-left: 1rem;\n            }\n\n            .sidebar-toggle > img {\n                height: 2rem;\n            }\n        }\n    </style>\n    <header>\n        <div class=\"sidebar-toggle\">\n            <img src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath style='fill: %23ffffff' d='M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z'/%3E%3C/svg%3E\">\n        </div>\n        <div class=\"nav-branding\">\n            <a>\n                <img class=\"logo\">\n            </a>\n        </div>\n        <span class=\"application-name\"></span>\n    </header>\n";class i extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"closed"});e.appendChild(t.content.cloneNode(!0)),this._imgLink=e.querySelector("a"),this._imgLink.href=this.getAttribute("logo-url"),this._img=e.querySelector(".logo"),this._img.src=this.getAttribute("logo-img"),this._applicationName=e.querySelector(".application-name"),this._applicationName.textContent=this.getAttribute("application-name"),e.querySelector(".sidebar-toggle").addEventListener("click",(function(){const e=document.querySelector("higgs-sidebar");e&&e.toggleSidebar()}))}}customElements.define("higgs-header",i)},function(e,n){const t=document.createElement("template");t.innerHTML="\n    <style>\n        aside {\n            width: 15rem;\n            position: fixed;\n            z-index: 1;\n            top: 4.5rem;\n            bottom: 1.75rem;\n            left: -11rem;\n            background-color: #dadada;\n            overflow-x: hidden;\n            transition: all 0.15s ease-in-out;\n            font-family: 'Lato', sans-serif;\n            box-shadow:0px 0px 10px 0px #2f2f2f;\n        }\n        \n        aside:hover, .higgs-sidebar-open {\n            width: 15rem;\n            left: 0;\n        }\n\n        a {\n            background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath d='M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z'/%3E%3C/svg%3E\");\n        }\n\n        ::slotted(a.sub-menu) {\n            padding-left: 2rem;\n            margin-right: 4rem;\n            font-size: 1rem;\n        }\n\n        aside:hover > ::slotted(a.sub-menu),\n        .higgs-sidebar-open > ::slotted(a.sub-menu) {\n            margin-right: 0;\n        }\n        \n        ::slotted(a), a {\n            padding: 1rem;\n            text-decoration: none;\n            font-size: 1.25rem;\n            display: block;\n            color: #000000;\n        \n            background-position: right center;\n            background-repeat: no-repeat;\n            background-size: 2rem 2rem;\n            background-origin: content-box;\n        }\n        \n        ::slotted(a.active) {\n            background-color: #0033a0;\n            color: #ffffff;\n        }\n        \n        ::slotted(a:hover:not(.active)), a:hover {\n            background-color: #cacaca;\n        }\n        \n        @media screen and (max-width: 700px) {\n            aside:not(.higgs-sidebar-open) {\n                left: -15rem;\n                box-shadow: none;\n            }\n\n            a {\n                display: none;\n            }\n        }\n    </style>\n    <aside>\n        <a id=\"keep-open\">Keep Open</a>\n        <slot></slot>\n    </aside>\n";class i extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"closed"});e.appendChild(t.content.cloneNode(!0)),this._aside=e.querySelector("aside"),this._keepOpen=e.querySelector("#keep-open"),sessionStorage.getItem("keepOpen")?(this._keepOpen.innerText="Auto Close",this._aside.setAttribute("class","higgs-sidebar-open")):this._keepOpen.innerText="Keep Open",this._keepOpen.addEventListener("click",(function(){document.querySelector("higgs-sidebar").toggleSidebar()})),document.querySelector("a.active").scrollIntoView(!1)}shrinkToAutoClose(){this._aside.removeAttribute("class")}expandToKeepOpen(){this._aside.setAttribute("class","higgs-sidebar-open")}toggleSidebar(){const e=document.querySelector("higgs-sidebar"),n=document.querySelector("higgs-content");console.log(sessionStorage.getItem("keepOpen")),sessionStorage.getItem("keepOpen")?(n&&n.expandToAutoClose(),e.shrinkToAutoClose(),sessionStorage.removeItem("keepOpen"),this._keepOpen.innerText="Keep Open"):(n&&n.shrinkToKeepOpen(),e.expandToKeepOpen(),sessionStorage.setItem("keepOpen",!0),this._keepOpen.innerText="Auto Close")}}customElements.define("higgs-sidebar",i)},function(e,n,t){var i=t(6);"string"==typeof i&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};t(8)(i,o);i.locals&&(e.exports=i.locals)},function(e,n,t){(e.exports=t(7)(!1)).push([e.i,"body {\n    margin: 0;\n    font-family: 'Lato', sans-serif;\n}\n\nh1, \nh2, \nh3, \nh4, \nh5, \nh6 {\n    font-family: 'Neuton', serif;\n    color: #0033a0;\n    border-bottom: 2px solid;\n}",""])},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",i=e[3];if(!i)return t;if(n&&"function"==typeof btoa){var o=(s=i,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),r=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot).concat(e," */")}));return[t].concat(r).concat([o]).join("\n")}var s,a,c;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2],"{").concat(t,"}"):t})).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];null!=r&&(i[r]=!0)}for(var s=0;s<e.length;s++){var a=e[s];null!=a[0]&&i[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="(".concat(a[2],") and (").concat(t,")")),n.push(a))}},n}},function(e,n,t){"use strict";var i,o={},r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},s=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}();function a(e,n){for(var t=[],i={},o=0;o<e.length;o++){var r=e[o],s=n.base?r[0]+n.base:r[0],a={css:r[1],media:r[2],sourceMap:r[3]};i[s]?i[s].parts.push(a):t.push(i[s]={id:s,parts:[a]})}return t}function c(e,n){for(var t=0;t<e.length;t++){var i=e[t],r=o[i.id],s=0;if(r){for(r.refs++;s<r.parts.length;s++)r.parts[s](i.parts[s]);for(;s<i.parts.length;s++)r.parts.push(g(i.parts[s],n))}else{for(var a=[];s<i.parts.length;s++)a.push(g(i.parts[s],n));o[i.id]={id:i.id,refs:1,parts:a}}}}function l(e){var n=document.createElement("style");if(void 0===e.attributes.nonce){var i=t.nc;i&&(e.attributes.nonce=i)}if(Object.keys(e.attributes).forEach((function(t){n.setAttribute(t,e.attributes[t])})),"function"==typeof e.insert)e.insert(n);else{var o=s(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var d,u=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function p(e,n,t,i){var o=t?"":i.css;if(e.styleSheet)e.styleSheet.cssText=u(n,o);else{var r=document.createTextNode(o),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(r,s[n]):e.appendChild(r)}}function h(e,n,t){var i=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),r&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var m=null,f=0;function g(e,n){var t,i,o;if(n.singleton){var r=f++;t=m||(m=l(n)),i=p.bind(null,t,r,!1),o=p.bind(null,t,r,!0)}else t=l(n),i=h.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=r());var t=a(e,n);return c(t,n),function(e){for(var i=[],r=0;r<t.length;r++){var s=t[r],l=o[s.id];l&&(l.refs--,i.push(l))}e&&c(a(e,n),n);for(var d=0;d<i.length;d++){var u=i[d];if(0===u.refs){for(var p=0;p<u.parts.length;p++)u.parts[p]();delete o[u.id]}}}}}]);