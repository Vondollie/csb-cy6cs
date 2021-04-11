(function(t){function e(e){for(var n,a,u=e[0],r=e[1],l=e[2],d=0,p=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&p.push(s[a][0]),s[a]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);c&&c(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,u=1;u<o.length;u++){var r=o[u];0!==s[r]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},s={app:0},i=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],r=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var c=r;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},2984:function(t,e,o){},"2c38":function(t,e,o){},3601:function(t,e,o){},"4ddf":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);var n=o("2b0e"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"button-group"},[o("button",{on:{click:t.pushToast}},[t._v("Push toast")]),o("button",{on:{click:t.pushQueuedToast}},[t._v("Push 5 queued toast")]),o("button",{on:{click:t.pushTypedToast}},[t._v("Push typed toast")]),o("button",{on:{click:t.pushToasts}},[t._v("Push 5 toasts")]),o("button",{on:{click:t.pushModal}},[t._v("Push modal")]),o("button",{on:{click:t.pushModalWithEvents}},[t._v("Push modal with events")]),o("button",{on:{click:t.pushQueuedModals}},[t._v("Push 5 queued modals")]),o("button",{on:{click:t.pushModalsWidthDifferentAnimations}},[t._v(" Push 5 modals with different animations ")]),o("button",{on:{click:t.pushQueuedModalsWidthDifferentAnimations}},[t._v(" Push 5 queued modals with different animations ")])]),o("dynamic-components-wrapper"),o("dynamic-components-wrapper",{attrs:{name:"modals"}}),o("dynamic-components-wrapper",{staticStyle:{position:"fixed",right:"20px",top:"20px"},attrs:{name:"toasts"}})],1)},i=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrapper",on:{click:function(e){return e.target!==e.currentTarget?null:t.onClick(e)}}},[o("div",{staticClass:"dialog",style:{backgroundColor:t.color}},[o("div",[t._v(t._s(t.text))]),t.showButtons?o("div",[o("button",{on:{click:function(e){return t.$emit("selected",!0)}}},[t._v("Yes")]),o("button",{on:{click:function(e){return t.$emit("selected",!1)}}},[t._v("No")])]):t._e()])])},u=[],r={props:{text:{type:String,default:"Dynamic component"},color:{type:String,default:"white"},showButtons:{type:Boolean,default:!1}},methods:{onClick(){this.$hide()}}},l=r,c=(o("779c"),o("2877")),d=Object(c["a"])(l,a,u,!1,null,"45f5c11c",null),p=d.exports,f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"toast",style:{backgroundColor:t.color},on:{click:function(e){return t.$hide()}}},[t._v(" "+t._s(t.text)+" "),o("div",{staticClass:"time-line",class:t.cls})])},h=[],m={props:{time:{type:Number,default:3e3},text:{type:String,default:"Text"},color:{type:String,default:"white"}},data(){return{timer:null,cls:""}},created(){this.$nextTick(()=>{this.$set(this,"cls","time-line-0")}),this.timer=setTimeout(()=>{this.$hide()},this.time)}},b=m,v=(o("77e7"),Object(c["a"])(b,f,h,!1,null,null,null)),y=v.exports,_={name:"App",data(){return{modals:[]}},methods:{pushToast(){this.$dc.push(y,{props:{text:"Toast"},animation:"fade"},"toasts")},pushQueuedToast(){for(let t=0;t<5;t++)setTimeout(()=>{this.$dc.push(y,{animation:"fade",queue:"toasts"},"toasts")},500*t)},pushTypedToast(){this.$dc.push(y,{props:{text:"Toast"},animation:"fade",type:"toast"},"toasts")},pushToasts(){for(let t=0;t<5;t++)setTimeout(()=>{this.$dc.push(y,{animation:"fade"},"toasts")},500*t)},pushModal(){this.$dc.push(p,{animation:"slide-fade"},"modals")},pushModalWithEvents(){this.$dc.push(p,{props:{showButtons:!0},events:{selected:t=>{this.$dc.push(y,{props:{text:t.toString()},animation:"fade"},"toasts")}},animation:"slide-fade"},"modals")},pushQueuedModals(){for(let t=0;t<5;t++)this.$dc.push(p,{props:{text:"Dynamic modal "+(t+1)},animation:"slide-fade",queue:"modals"},"modals")},pushModalsWidthDifferentAnimations(){let t=["fade","slide-fade","slide-top-fade","slide-right-fade","slide-bottom-fade"];for(let e=0;e<5;e++)this.$dc.push(p,{props:{text:"Dynamic modal "+(e+1)},animation:t[e]},"modals")},pushQueuedModalsWidthDifferentAnimations(){let t=["fade","slide-fade","slide-top-fade","slide-right-fade","slide-bottom-fade"];for(let e=0;e<5;e++)this.$dc.push(p,{props:{text:"Dynamic modal "+(e+1)},animation:t[e],queue:"modals"},"modals")}}},g=_,x=(o("fb7b"),Object(c["a"])(g,s,i,!1,null,"3907e487",null)),w=x.exports,k=(o("2984"),o("a6b6"),o("fcae"),o("7475"),o("4ddf"),o("599e"));n["a"].use(k["a"]),n["a"].config.productionTip=!1,new n["a"]({render:t=>t(w)}).$mount("#app")},7475:function(t,e,o){},"779c":function(t,e,o){"use strict";o("2c38")},"77e7":function(t,e,o){"use strict";o("9e47")},"9e47":function(t,e,o){},a6b6:function(t,e,o){},fb7b:function(t,e,o){"use strict";o("3601")},fcae:function(t,e,o){}});
//# sourceMappingURL=app.5b10c663.js.map