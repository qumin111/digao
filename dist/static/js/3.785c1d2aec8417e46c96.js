webpackJsonp([3],{"6+aJ":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e={name:"App",components:{sliderNav:a("7d4M").default}},s={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("b-container",{staticClass:"ui-wrap no-pd",attrs:{fluid:""}},[n("b-row",{staticClass:"ui-wrp-start h",attrs:{"align-v":"start","no-gutters":""}},[n("b-col",{staticClass:"move-pr ui-slider-box h-ui-auto",attrs:{sm:"2"}},[n("slider-nav")],1),this._v(" "),n("b-col",{staticClass:" move-pl h ui-cont-box",attrs:{sm:"10"}},[n("transition",{attrs:{name:"move",mode:"out-in"}},[n("router-view")],1)],1)],1)],1)],1)},staticRenderFns:[]};var o=a("VU/8")(e,s,!1,function(t){a("k1jc")},null,null);n.default=o.exports},"7d4M":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e={name:"slider",data:function(){return{}},methods:{goPage:function(t){this.$router.push("/"+t)},changeLang:function(t){localStorage.lang=t,this.$i18n.locale=t}}},s={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"ui-nav-box"},[a("b-navbar",{staticClass:"ui-navbar",attrs:{toggleable:"lg"}},[a("b-navbar-brand",{staticClass:"ui-nav-logo",attrs:{href:"#"}},[t._v("logo")]),t._v(" "),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{attrs:{column:""}},[a("b-nav-item",{on:{click:function(n){return t.goPage("home")}}},[t._v(t._s(t.$t("home")))]),t._v(" "),a("b-nav-item",{on:{click:function(n){return t.goPage("house")}}},[t._v(t._s(t.$t("House")))]),t._v(" "),a("b-nav-item",{on:{click:function(n){return t.goPage("homestay")}}},[t._v(t._s(t.$t("Homestay")))]),t._v(" "),a("b-nav-item",{on:{click:function(n){return t.goPage("house")}}},[t._v(t._s(t.$t("WorkSpace")))]),t._v(" "),a("b-nav-item",{on:{click:function(n){return t.goPage("house")}}},[t._v(t._s(t.$t("BridalShop")))]),t._v(" "),a("b-nav-item",{on:{click:function(n){return t.goPage("house")}}},[t._v(t._s(t.$t("Hotel")))]),t._v(" "),a("b-nav-item",{on:{click:function(n){return t.goPage("house")}}},[t._v(t._s(t.$t("Business")))]),t._v(" "),a("b-nav-item",{on:{click:function(n){return t.goPage("brand")}}},[t._v(t._s(t.$t("Brand")))]),t._v(" "),a("b-nav-item",{on:{click:function(n){return t.goPage("contact")}}},[t._v(t._s(t.$t("ContactUs")))])],1)],1),t._v(" "),a("div",{staticClass:"ui-slider-lang"},[a("span",{on:{click:function(n){return t.changeLang("zh-CN")}}},[t._v(t._s(t.$t("ZH")))]),t._v(" "),a("span",{on:{click:function(n){return t.changeLang("en-us")}}},[t._v("/ "+t._s(t.$t("EN")))])]),t._v(" "),a("small",{staticClass:"ui-slider-bei"},[t._v("京ICP备12345")])],1)],1)},staticRenderFns:[]};var o=a("VU/8")(e,s,!1,function(t){a("XkT3")},null,null);n.default=o.exports},XkT3:function(t,n){},k1jc:function(t,n){}});
//# sourceMappingURL=3.785c1d2aec8417e46c96.js.map