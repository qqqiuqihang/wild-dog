(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{323:function(e,t,o){"use strict";o.d(t,"a",(function(){return r})),o.d(t,"b",(function(){return u}));const n=Symbol("INSTALLED_KEY"),s=(e,t)=>(e.install=o=>{e._context=o._context,o.prototype[t]=e},e);var l={name:"WdButton",props:{},data:()=>({message:"Hello, world!"}),methods:{handleClick(e){this.$emit("click",e)}}},a=o(20);const r=((e,t)=>{if(e.install=o=>{for(const n of[e,...Object.values(null!=t?t:{})])o.component(n.name,n)},t)for(const[o,n]of Object.entries(t))e[o]=n;return e})(Object(a.a)(l,(function(){var e=this;return(0,e._self._c)("el-button",{on:{click:e.handleClick}},[e._t("default",(function(){return[e._v("\n    "+e._s(e.message)+"\n  ")]}))],2)}),[],!1,null,"5a15c2b2",null).exports);var i=[r];const c=s({setCookie(e,t,o){if(!e||!t||!o)return!1;const n=new Date;return n.setDate(n.getDate()+o),document.cookie=e+" = "+t+"; expires = "+o,!0},getCookie(e){if(!e)return!1;var t=document.cookie.split("; ");for(let n=0;n<t.length;n++){var o=t[n].split("=");if(o[0]==e)return o[1]}return!1},removeCookie(e){return this.setCookie(e,1,-1)}},"$cookie");const u=s({setItem:(e,t)=>!(!e||!t)&&window.localStorage.setItem(e,JSON.stringify(t)),getItem:e=>!!e&&JSON.parse(window.localStorage.getItem(e)||!1),removeItem:e=>!!e&&window.localStorage.removeItem(e),clear:()=>window.localStorage.clear()},"$storageLocal");const m=s({setItem:(e,t)=>!(!e||!t)&&window.sessionStorage.setItem(e,JSON.stringify(t)),getItem:e=>!!e&&JSON.parse(window.sessionStorage.getItem(e)||null),removeItem:e=>!!e&&window.sessionStorage.removeItem(e),clear:()=>window.sessionStorage.clear()},"$storageSession");var v;v=[...i,...[c,u,m,void 0]]},365:function(e,t,o){"use strict";o.r(t);var n=o(323),s={data:()=>({value:"",message:null}),methods:{setLocal(){console.log(this.value),console.log("WdStorageLocal",n.b),n.b.setItem("keyValue",this.value)},getLocal(){this.message=n.b.getItem("keyValue")}}},l=o(20),a=Object(l.a)(s,(function(){var e=this,t=e._self._c;return t("div",[t("div",[t("el-input",{model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._v(" "),t("el-button",{on:{click:e.setLocal}},[e._v("保存")])],1),e._v(" "),t("div",[t("el-button",{on:{click:e.getLocal}},[e._v("获取")]),e._v(" "),t("span",[e._v(e._s(e.message)+" ")])],1)])}),[],!1,null,"4b0307a6",null);t.default=a.exports}}]);