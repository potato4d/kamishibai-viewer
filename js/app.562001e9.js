(function(e){function t(t){for(var a,r,o=t[0],c=t[1],l=t[2],u=0,p=[];u<o.length;u++)r=o[u],n[r]&&p.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],a=!0,o=1;o<i.length;o++){var c=i[o];0!==n[c]&&(a=!1)}a&&(s.splice(t--,1),e=r(r.s=i[0]))}return e}var a={},n={app:0},s=[];function r(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=a,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(i,a,function(t){return e[t]}.bind(null,a));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/kamishibai-viewer/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=c;s.push(["a11b","chunk-vendors"]),i()})({"0ed9":function(e,t,i){},"19eb":function(e,t,i){"use strict";var a=i("ac5a"),n=i.n(a);n.a},"36da":function(e,t,i){"use strict";var a=i("b408"),n=i.n(a);n.a},"382f":function(e,t,i){"use strict";var a=i("0ed9"),n=i.n(a);n.a},"60b3":function(e,t,i){},"635c":function(e,t,i){"use strict";var a=i("6f12"),n=i.n(a);n.a},"6f12":function(e,t,i){},a11b:function(e,t,i){"use strict";i.r(t);var a=i("2b0e"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"devapp-container"},[e._m(0),i("Kamishibai",{attrs:{"data-item-id":"4ff5873776992f0511d6"}}),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5)],1)},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"devapp-container_content"},[i("h1",[i("span",[e._v("Kamishibai Viewer v0.1.0")]),i("br"),i("small",[i("small",[e._v("\n          Web Component based Qiita slide viewer built with Vue.js\n        ")])])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"devapp-container_content"},[i("h2",[e._v("!! Under development !!")]),i("p",[e._v("\n      Kamishibai is a under development library."),i("br"),e._v("\n      Because breaking changes may be born, please be careful when using.\n    ")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"devapp-container_content"},[i("h2",[e._v("About")]),i("p",[e._v("\n      This is a library for embedding slides of Qiita which is a Japanese\n      technical document sharing site."),i("br"),i("br"),e._v("\n      demo: "),i("a",{attrs:{href:"https://potato4d.github.io/kamishibai-viewer/dist/0.1.0/demo.html"}},[e._v("https://potato4d.github.io/kamishibai-viewer/dist/0.1.0/demo.html")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"devapp-container_content"},[i("h2",[e._v("Usage")]),i("p",[i("small",{staticStyle:{color:"red"}},[e._v("\n        ※ As we are planning to publish to webcomponents.org, the URL may\n        change!\n      ")])]),i("p",[e._v("1. Load runtime on script tag")]),i("div",[i("pre",[e._v("        "),i("code",[e._v('<script src="https://potato4d.github.io/kamishibai/dist/0.1.0/kamishibai.min.js"><\/script>')]),e._v("\n      ")])]),i("p",[e._v("2. Write custom element tag for your HTML")]),i("div",[i("pre",[e._v("        "),i("code",[e._v('<kamishibai-viewer data-item-id="4ff5873776992f0511d6"></kamishibai-viewer>')]),e._v("\n      ")])]),i("p",[e._v("3. Done!")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"devapp-container_content"},[i("h2",[e._v("LICENSE")]),i("p",[e._v("\n      MIT @ HANATANI Takuma(@potato4d)"),i("br"),e._v("\n      email: mail@potato4d.me\n    ")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"devapp-container_content"},[i("div",{staticClass:"text-center"},[i("small",[e._v(" © 2018 HANATANI Takuma(@potato4d) ")])])])}],r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[e.isFetched?i("div",{staticClass:"slideMode"},[i("SlideViewer",{attrs:{option:e.option,page:e.page,pages:e.pages},on:{prev:e.handleMoveToPrev,next:e.handleMoveToNext}}),i("SlideControl",{attrs:{option:e.option,page:e.page,pages:e.pages},on:{prev:e.handleMoveToPrev,next:e.handleMoveToNext}})],1):e.isErrored?i("ErrorView",{staticClass:"slideMode",attrs:{errorReason:e.errorReason,option:e.option}},[e._v("\n    error\n  ")]):i("LoadingView",{staticClass:"slideMode",attrs:{option:e.option}},[e._v("\n    loading...\n  ")])],1)},o=[],c=i("9ab4");function l(e){var t,i,a=(new DOMParser).parseFromString(e.rendered_body,"text/html"),n=a.querySelectorAll("html > body > *"),s=[d(e)];try{for(var r=c["c"](n),o=r.next();!o.done;o=r.next()){var l=o.value;("H1"===l.tagName||"H2"===l.tagName||l.classList.contains("footnotes"))&&s.push(""),"HR"!==l.tagName?(s[s.length-1]=""+s[s.length-1]+l.outerHTML,0):s.push("")}}catch(u){t={error:u}}finally{try{o&&!o.done&&(i=r.return)&&i.call(r)}finally{if(t)throw t.error}}return s.filter(function(e){return e})}var d=function(e){return'<div class="slideMode-Viewer_content slideMode-Viewer_content--firstSlide markdownContent"><h1>'+e.title+'</h1><div class="slideMode-Viewer_content--firstSlideAuthor">by '+e.user.id+"</div></div>"},u=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"slideMode-loading"},[i("div",{staticClass:"slideMode-loading_body"},[i("LoadingIndicator"),i("br"),i("div",[e._v("Loading slide...")])],1),i("SlideControl",{attrs:{option:e.option,page:0,pages:[""],disable:!0}})],1)},p=[],v=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},f=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"sk-fading-circle"},[i("div",{staticClass:"sk-circle1 sk-circle"}),i("div",{staticClass:"sk-circle2 sk-circle"}),i("div",{staticClass:"sk-circle3 sk-circle"}),i("div",{staticClass:"sk-circle4 sk-circle"}),i("div",{staticClass:"sk-circle5 sk-circle"}),i("div",{staticClass:"sk-circle6 sk-circle"}),i("div",{staticClass:"sk-circle7 sk-circle"}),i("div",{staticClass:"sk-circle8 sk-circle"}),i("div",{staticClass:"sk-circle9 sk-circle"}),i("div",{staticClass:"sk-circle10 sk-circle"}),i("div",{staticClass:"sk-circle11 sk-circle"}),i("div",{staticClass:"sk-circle12 sk-circle"})])}],h=(i("19eb"),i("2877")),b={},_=Object(h["a"])(b,v,f,!1,null,"0a854ef9",null);_.options.__file="LoadingIndicator.vue";var m=_.exports,g=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"slideMode-Dashboard"},[i("button",{staticClass:"slideMode-Dashboard_button slideMode-Dashboard_button--prev ",class:{"slideMode-Dashboard_button--clickable":0!==e.page&&!e.disable},attrs:{disabled:0===e.page&&!e.disable},on:{click:function(t){e.$emit("prev")}}},[i("i",{staticClass:"fa fa-backward"})]),i("button",{staticClass:"slideMode-Dashboard_button slideMode-Dashboard_button--next ",class:{"slideMode-Dashboard_button--clickable":e.page!==e.pages.length-1&&!e.disable},attrs:{disabled:e.page===e.pages.length-1&&!e.disable},on:{click:function(t){e.$emit("next")}}},[i("i",{staticClass:"fa fa-forward"})]),i("span",{staticClass:"slideMode-Dashboard_pageCount"},[e._v(e._s(e.page+1)+" / "+e._s(e.pages.length))]),i("div",{staticClass:"slideMode-Dashboard_progress"},[i("div",{staticClass:"slideMode-Dashboard_progressFill",style:{width:e.disable?"0%":(e.page+1)/e.pages.length*100+"%"}})]),i("div",{staticStyle:{margin:"0 10px","font-size":"10px","font-weight":"bold"}},[i("a",{staticStyle:{color:"#fff","text-decoration":"none"},attrs:{target:"_blank",href:"https://github.com/potato4d/kamishibai"}},[e._v("\n      kamishibai v"+e._s(e.option.version)+"\n    ")])])])},C=[],k=a["a"].extend({props:{disable:Boolean,pages:Array,page:Number,option:Object}}),w=k,y=(i("382f"),Object(h["a"])(w,g,C,!1,null,"62260bc7",null));y.options.__file="SlideControl.vue";var M=y.exports,x=a["a"].extend({props:{option:Object},components:{LoadingIndicator:m,SlideControl:M}}),E=x,S=(i("cb77"),Object(h["a"])(E,u,p,!1,null,"75493719",null));S.options.__file="LoadingView.vue";var j=S.exports,O=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"slideMode-error"},[i("div",{staticClass:"slideMode-error_body"},[e._v(e._s(e.errorReason||"error"))]),i("SlideControl",{attrs:{option:e.option,page:0,pages:[""],disable:!0}})],1)},T=[],$=a["a"].extend({props:{errorReason:String,option:Object},components:{SlideControl:M}}),V=$,D=(i("36da"),Object(h["a"])(V,O,T,!1,null,"186d3b88",null));D.options.__file="ErrorView.vue";var L=D.exports,A=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"slideMode-Viewer"},[i("div",{staticClass:"slideMode-Viewer_content"},[i("div",{domProps:{innerHTML:e._s(e.pages[e.page])}})])])},N=[],I=a["a"].extend({props:{pages:Array,page:Number,option:Object}}),P=I,H=(i("a980"),Object(h["a"])(P,A,N,!1,null,"5d57d40e",null));H.options.__file="SlideViewer.vue";var R=H.exports,K=i("bc3a"),F=i.n(K);function J(e){return c["a"](this,void 0,void 0,function(){var t,i;return c["b"](this,function(a){switch(a.label){case 0:0,a.label=1;case 1:return a.trys.push([1,3,,4]),[4,F.a.get("https://qiita.com/api/v2/items/"+e,t)];case 2:return i=a.sent().data,[2,i];case 3:throw a.sent(),new Error;case 4:return[2]}})})}var U=a["a"].extend({name:"Kamishibai",props:{"data-item-id":String},data:function(){return{isFetched:!1,isErrored:!1,item:null,page:0,pages:[],errorReason:""}},components:{SlideViewer:R,SlideControl:M,LoadingView:j,ErrorView:L},computed:{option:function(){return{version:"0.1.0"}}},methods:{handleMoveToPrev:function(){this.page=Math.max(0,this.page-1)},handleMoveToNext:function(){this.page=Math.min(this.pages.length-1,this.page+1)}},mounted:function(){return c["a"](this,void 0,void 0,function(){var e,t;return c["b"](this,function(i){switch(i.label){case 0:this.dataItemId||(this.isErrored=!0,this.errorReason="記事 ID が指定されていません。"),e=document.createElement("link"),e.rel="stylesheet",e.href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",this.$el.appendChild(e),i.label=1;case 1:return i.trys.push([1,3,,4]),[4,J(this.dataItemId)];case 2:return t=i.sent(),this.item=t,this.pages=l(t),this.isFetched=!0,[3,4];case 3:return i.sent(),this.isErrored=!0,[3,4];case 4:return[2]}})})}}),q=U,B=(i("635c"),Object(h["a"])(q,r,o,!1,null,null,null));B.options.__file="Kamishibai.vue";var Q=B.exports,W=a["a"].extend({components:{Kamishibai:Q},filters:{h:function(e){return e.replace(/</g,"&gt;").replace(/>/g,"&lt;")}}}),z=W,G=(i("ab6b"),Object(h["a"])(z,n,s,!1,null,"0a79b436",null));G.options.__file="DevApp.vue";var X=G.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(X)}}).$mount("#app")},a980:function(e,t,i){"use strict";var a=i("60b3"),n=i.n(a);n.a},ab6b:function(e,t,i){"use strict";var a=i("b7fc"),n=i.n(a);n.a},ac5a:function(e,t,i){},b408:function(e,t,i){},b7fc:function(e,t,i){},cb77:function(e,t,i){"use strict";var a=i("f2f3"),n=i.n(a);n.a},f2f3:function(e,t,i){}});
//# sourceMappingURL=app.562001e9.js.map