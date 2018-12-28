(function(e){function t(t){for(var i,o,s=t[0],c=t[1],l=t[2],u=0,p=[];u<s.length;u++)o=s[u],a[o]&&p.push(a[o][0]),a[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(i=!1)}i&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},a={app:0},r=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/kamishibai-viewer/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;r.push(["a11b","chunk-vendors"]),n()})({"28d6":function(e,t,n){},"36da":function(e,t,n){"use strict";n.r(t);var i=n("b408"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t["default"]=a.a},5532:function(e,t,n){"use strict";n.r(t);var i=n("c35a"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t["default"]=a.a},"635c":function(e,t,n){"use strict";var i=n("6f12"),a=n.n(i);a.a},"6f12":function(e,t,n){},a11b:function(e,t,n){"use strict";n.r(t);var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"devapp-container"},[e._m(0),n("Kamishibai",{attrs:{"data-item-id":"4ff5873776992f0511d6"}}),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5)],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"devapp-container_content"},[n("h1",[n("span",[e._v("Kamishibai Viewer v0.1.1")]),n("br"),n("small",[n("small",[e._v("\n          Web Component based Qiita slide viewer built with Vue.js\n        ")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"devapp-container_content"},[n("h2",[e._v("!! Under development !!")]),n("p",[e._v("\n      Kamishibai is a under development library."),n("br"),e._v("\n      Because breaking changes may be born, please be careful when using.\n    ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"devapp-container_content"},[n("h2",[e._v("About")]),n("p",[e._v("\n      This is a library for embedding slides of Qiita which is a Japanese\n      technical document sharing site."),n("br"),n("br"),e._v("\n      demo:\n      "),n("a",{attrs:{href:"https://potato4d.github.io/kamishibai-viewer/dist/0.1.1/demo.html"}},[e._v("https://potato4d.github.io/kamishibai-viewer/dist/0.1.1/demo.html")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"devapp-container_content"},[n("h2",[e._v("Usage")]),n("p",[n("small",{staticStyle:{color:"red"}},[e._v("\n        ※ As we are planning to publish to webcomponents.org, the URL may\n        change!\n      ")])]),n("p",[e._v("1. Load runtime on script tag")]),n("div",[n("pre",[e._v("        "),n("code",[e._v('<script src="https://unpkg.com/vue@2.5.21/dist/vue.min.js"><\/script>')]),e._v("\n        "),n("code",[e._v('<script src="https://potato4d.github.io/kamishibai/dist/0.1.1/kamishibai.min.js"><\/script>')]),e._v("\n      ")])]),n("p",[e._v("2. Write custom element tag for your HTML")]),n("div",[n("pre",[e._v("        "),n("code",[e._v('<kamishibai-viewer data-item-id="4ff5873776992f0511d6"></kamishibai-viewer>')]),e._v("\n      ")])]),n("p",[e._v("3. Done!")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"devapp-container_content"},[n("h2",[e._v("LICENSE")]),n("p",[e._v("\n      MIT @ HANATANI Takuma(@potato4d)"),n("br"),e._v("\n      email: mail@potato4d.me\n    ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"devapp-container_content"},[n("div",{staticClass:"text-center"},[n("small",[e._v(" © 2018 HANATANI Takuma(@potato4d) ")])])])}],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.isFetched?n("div",{staticClass:"slideMode"},[n("SlideViewer",{attrs:{option:e.option,page:e.page,pages:e.pages},on:{prev:e.handleMoveToPrev,next:e.handleMoveToNext}}),n("SlideControl",{attrs:{option:e.option,page:e.page,pages:e.pages},on:{prev:e.handleMoveToPrev,next:e.handleMoveToNext,move:e.handleMoveToPage}})],1):e.isErrored?n("ErrorView",{staticClass:"slideMode",attrs:{errorReason:e.errorReason,option:e.option}}):n("LoadingView",{staticClass:"slideMode",attrs:{option:e.option}})],1)},s=[],c=n("9ab4"),l=n("5e38"),d=n.n(l);function u(e){return d()(e)}function p(e){var t,n,i=(new DOMParser).parseFromString(e.rendered_body,"text/html"),a=i.querySelectorAll("html > body > *"),r=[v(e)];try{for(var o=c["c"](a),s=o.next();!s.done;s=o.next()){var l=s.value;(["H1","H2"].includes(l.tagName)||l.classList.contains("footnotes"))&&r.push(""),"HR"!==l.tagName?r[r.length-1]=""+r[r.length-1]+l.outerHTML:r.push("")}}catch(d){t={error:d}}finally{try{s&&!s.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}return r.filter(function(e){return e})}var v=function(e){return'\n<div class="slideMode-Viewer_content slideMode-Viewer_content--firstSlide markdownContent">\n  <h1>'+u(e.title)+'</h1>\n  <div class="slideMode-Viewer_content--firstSlideAuthor">\n    by '+u(e.user.id)+"\n  </div>\n</div>\n"},f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"slideMode-loading"},[n("div",{staticClass:"slideMode-loading_body"},[n("LoadingIndicator"),n("br"),n("div",[e._v("Loading slide...")])],1),n("SlideControl",{attrs:{option:e.option,page:0,pages:[""],disable:!0}})],1)},h=[],_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sk-fading-circle"},e._l(12,function(e){return n("div",{key:e,class:"sk-circle"+e+" sk-circle"})}),0)},b=[],m=i["a"].extend({}),g=m,w=n("2877");function C(e){var t=n("5532");t.__inject__&&t.__inject__(e)}var M=Object(w["a"])(g,_,b,!1,C,"6037fb06",null,!0);M.options.__file="LoadingIndicator.vue";var y=M.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"slideMode-Dashboard"},[n("button",{staticClass:"slideMode-Dashboard_button slideMode-Dashboard_button--prev ",class:{"slideMode-Dashboard_button--clickable":0!==e.page&&!e.disable},attrs:{disabled:0===e.page&&!e.disable},on:{click:function(t){e.$emit("prev")}}},[n("v-icon",{staticClass:"icon",attrs:{name:"backward"}})],1),n("button",{staticClass:"slideMode-Dashboard_button slideMode-Dashboard_button--next ",class:{"slideMode-Dashboard_button--clickable":e.page!==e.pages.length-1&&!e.disable},attrs:{disabled:e.page===e.pages.length-1&&!e.disable},on:{click:function(t){e.$emit("next")}}},[n("v-icon",{staticClass:"icon",attrs:{name:"forward"}})],1),n("span",{staticClass:"slideMode-Dashboard_pageCount"},[e._v(e._s(e.page+1)+" / "+e._s(e.pages.length))]),n("div",{ref:"progress",staticClass:"slideMode-Dashboard_progress",on:{click:e.handleClickProgress}},[n("div",{staticClass:"slideMode-Dashboard_progressFill",style:{width:e.disable?"0%":(e.page+1)/e.pages.length*100+"%"}})]),n("div",{staticStyle:{margin:"0 10px","font-size":"10px","font-weight":"bold"}},[n("a",{staticStyle:{color:"#fff","text-decoration":"none"},attrs:{target:"_blank",href:"https://github.com/potato4d/kamishibai-viewer"}},[e._v("\n      kamishibai v"+e._s(e.option.version)+"\n    ")])])])},x=[];function j(e,t,n){return 1+~~(n/t*e)}n("3d50"),n("2e18");var E=n("0874").default,S=i["a"].extend({components:{"v-icon":E},props:{disable:Boolean,pages:Array,page:Number,option:Object},methods:{handleClickProgress:function(e){var t=this.$refs.progress,n=e.clientX-t.getBoundingClientRect().left,i=Math.min(this.pages.length,j(this.pages.length,t.clientWidth,n)-1);this.$emit("move",i)}}}),O=S,T=(n("cc07"),Object(w["a"])(O,k,x,!1,null,"787963a7",null));T.options.__file="SlideControl.vue";var V=T.exports,$=i["a"].extend({props:{option:Object},components:{LoadingIndicator:y,SlideControl:V}}),A=$;function P(e){var t=n("cb77");t.__inject__&&t.__inject__(e)}var N=Object(w["a"])(A,f,h,!1,P,"75493719",null,!0);N.options.__file="LoadingView.vue";var D=N.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"slideMode-error"},[n("div",{staticClass:"slideMode-error_body"},[e._v(e._s(e.errorReason||"error"))]),n("SlideControl",{attrs:{option:e.option,page:0,pages:[""],disable:!0}})],1)},L=[],R=i["a"].extend({props:{errorReason:String,option:Object},components:{SlideControl:V}}),H=R;function K(e){var t=n("36da");t.__inject__&&t.__inject__(e)}var B=Object(w["a"])(H,I,L,!1,K,"186d3b88",null,!0);B.options.__file="ErrorView.vue";var F=B.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"slideMode-Viewer",on:{click:e.handleClickViewer}},[n("div",{staticClass:"slideMode-Viewer_content"},[n("div",{domProps:{innerHTML:e._s(e.pages[e.page])}})])])},J=[],Q=i["a"].extend({props:{pages:Array,page:Number,option:Object},methods:{handleClickViewer:function(e){var t=e.target,n=e.currentTarget;if(!["A","IMG"].includes(t.tagName)){var i=n.getBoundingClientRect();e.clientX-i.left>i.width/2?this.$emit("next"):this.$emit("prev")}}}}),W=Q,q=Object(w["a"])(W,U,J,!1,null,null,null,!0);q.options.__file="SlideViewer.vue";var z=q.exports,X=Object({NODE_ENV:"production",BASE_URL:"/kamishibai-viewer/"}).VUE_APP_QIITA_TOKEN;function G(e,t){return c["a"](this,void 0,void 0,function(){var n,i,a,r;return c["b"](this,function(o){switch(o.label){case 0:n={},i=X||(t||{}).token,i&&(n={headers:{authorization:"Bearer "+i}}),o.label=1;case 1:return o.trys.push([1,4,,5]),[4,fetch("https://qiita.com/api/v2/items/"+e,n)];case 2:return a=o.sent(),[4,a.json()];case 3:return r=o.sent(),[2,r];case 4:throw o.sent(),new Error;case 5:return[2]}})})}var Y=i["a"].extend({name:"Kamishibai",props:{"data-item-id":String},data:function(){return{isFetched:!1,isErrored:!1,item:null,page:0,pages:[],errorReason:""}},components:{SlideViewer:z,SlideControl:V,LoadingView:D,ErrorView:F},computed:{option:function(){return{version:"0.1.1"}}},methods:{handleMoveToPrev:function(){this.page=Math.max(0,this.page-1)},handleMoveToNext:function(){this.page=Math.min(this.pages.length-1,this.page+1)},handleMoveToPage:function(e){this.page=e}},mounted:function(){return c["a"](this,void 0,void 0,function(){var e,t;return c["b"](this,function(n){switch(n.label){case 0:this.dataItemId||(this.isErrored=!0,this.errorReason="記事 ID が指定されていません。"),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,G(this.dataItemId)];case 2:return e=n.sent(),this.item=e,this.pages=p(e),this.isFetched=!0,[3,4];case 3:return t=n.sent(),console.error(t),this.isErrored=!0,[3,4];case 4:return[2]}})})}}),Z=Y,ee=(n("635c"),Object(w["a"])(Z,o,s,!1,null,null,null));ee.options.__file="Kamishibai.vue";var te=ee.exports,ne=i["a"].extend({components:{Kamishibai:te},filters:{h:function(e){return u(e)}}}),ie=ne,ae=(n("e381"),Object(w["a"])(ie,a,r,!1,null,"c2bee2a0",null));ae.options.__file="DevApp.vue";var re=ae.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(re)}}).$mount("#app")},b408:function(e,t,n){},c35a:function(e,t,n){},cb77:function(e,t,n){"use strict";n.r(t);var i=n("f2f3"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t["default"]=a.a},cc07:function(e,t,n){"use strict";var i=n("28d6"),a=n.n(i);a.a},e381:function(e,t,n){"use strict";var i=n("eb75"),a=n.n(i);a.a},eb75:function(e,t,n){},f2f3:function(e,t,n){}});
//# sourceMappingURL=app.80ac4c0a.js.map