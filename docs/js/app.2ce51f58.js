(function(e){function n(n){for(var a,r,s=n[0],l=n[1],d=n[2],m=0,h=[];m<s.length;m++)r=s[m],i[r]&&h.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(n);while(h.length)h.shift()();return o.push.apply(o,d||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],a=!0,s=1;s<t.length;s++){var l=t[s];0!==i[l]&&(a=!1)}a&&(o.splice(n--,1),e=r(r.s=t[0]))}return e}var a={},i={app:0},o=[];function r(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=a,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)r.d(t,a,function(n){return e[n]}.bind(null,a));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var c=l;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("41f5")},"00f8":function(e,n,t){var a=t("7d36");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=t("0ed3").default;i("7a7872f3",a,!0,{})},"1e4f":function(e,n,t){n=e.exports=t("443a")(!1),n.push([e.i,'/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n/** 1. Set default font family to sans-serif. 2. Prevent iOS text size adjust after orientation change, without disabling user zoom. */\nhtml { font-family: sans-serif; /* 1 */ -ms-text-size-adjust: 100%; /* 2 */ -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/** Remove default margin. */\nbody { margin: 0;\n}\n\n/* HTML5 display definitions ========================================================================== */\n/** Correct `block` display not defined for any HTML5 element in IE 8/9. Correct `block` display not defined for `details` or `summary` in IE 10/11 and Firefox. Correct `block` display not defined for `main` in IE 11. */\narticle, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary { display: block;\n}\n\n/** 1. Correct `inline-block` display not defined in IE 8/9. 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera. */\naudio, canvas, progress, video { display: inline-block; /* 1 */ vertical-align: baseline; /* 2 */\n}\n\n/** Prevent modern browsers from displaying `audio` without controls. Remove excess height in iOS 5 devices. */\naudio:not([controls]) { display: none; height: 0;\n}\n\n/** Address `[hidden]` styling not present in IE 8/9/10. Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22. */\n[hidden], template { display: none;\n}\n\n/* Links ========================================================================== */\n/** Remove the gray background color from active links in IE 10. */\na { background-color: transparent;\n}\n\n/** Improve readability when focused and also mouse hovered in all browsers. */\na:active, a:hover { outline: 0;\n}\n\n/* Text-level semantics ========================================================================== */\n/** Address styling not present in IE 8/9/10/11, Safari, and Chrome. */\nabbr[title] { border-bottom: 1px dotted;\n}\n\n/** Address style set to `bolder` in Firefox 4+, Safari, and Chrome. */\nb, strong { font-weight: bold;\n}\n\n/** Address styling not present in Safari and Chrome. */\ndfn { font-style: italic;\n}\n\n/** Address variable `h1` font-size and margin within `section` and `article` contexts in Firefox 4+, Safari, and Chrome. */\nh1 { font-size: 2em; margin: 0.67em 0;\n}\n\n/** Address styling not present in IE 8/9. */\nmark { background: #ff0; color: #000;\n}\n\n/** Address inconsistent and variable font size in all browsers. */\nsmall { font-size: 80%;\n}\n\n/** Prevent `sub` and `sup` affecting `line-height` in all browsers. */\nsub, sup { font-size: 75%; line-height: 0; position: relative; vertical-align: baseline;\n}\nsup { top: -0.5em;\n}\nsub { bottom: -0.25em;\n}\n\n/* Embedded content ========================================================================== */\n/** Remove border when inside `a` element in IE 8/9/10. */\nimg { border: 0;\n}\n\n/** Correct overflow not hidden in IE 9/10/11. */\nsvg:not(:root) { overflow: hidden;\n}\n\n/* Grouping content ========================================================================== */\n/** Address margin not present in IE 8/9 and Safari. */\nfigure { margin: 1em 40px;\n}\n\n/** Address differences between Firefox and other browsers. */\nhr { box-sizing: content-box; height: 0;\n}\n\n/** Contain overflow in all browsers. */\npre { overflow: auto;\n}\n\n/** Address odd `em`-unit font size rendering in all browsers. */\ncode, kbd, pre, samp { font-family: monospace, monospace; font-size: 1em;\n}\n\n/* Forms ========================================================================== */\n/** Known limitation: by default, Chrome and Safari on OS X allow very limited styling of `select`, unless a `border` property is set. */\n/** 1. Correct color not being inherited. Known issue: affects color of disabled elements. 2. Correct font properties not being inherited. 3. Address margins set differently in Firefox 4+, Safari, and Chrome. */\nbutton, input, optgroup, select, textarea { color: inherit; /* 1 */ font: inherit; /* 2 */ margin: 0; /* 3 */\n}\n\n/** Address `overflow` set to `hidden` in IE 8/9/10/11. */\nbutton { overflow: visible;\n}\n\n/** Address inconsistent `text-transform` inheritance for `button` and `select`. All other form control elements do not inherit `text-transform` values. Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera. Correct `select` style inheritance in Firefox. */\nbutton, select { text-transform: none;\n}\n\n/** 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio` and `video` controls. 2. Correct inability to style clickable `input` types in iOS. 3. Improve usability and consistency of cursor style between image-type `input` and others. */\nbutton, html input[type="button"], input[type="reset"], input[type="submit"] { -webkit-appearance: button; /* 2 */ cursor: pointer; /* 3 */\n}\n\n/** Re-set default cursor for disabled elements. */\nbutton[disabled], html input[disabled] { cursor: default;\n}\n\n/** Remove inner padding and border in Firefox 4+. */\nbutton::-moz-focus-inner, input::-moz-focus-inner { border: 0; padding: 0;\n}\n\n/** Address Firefox 4+ setting `line-height` on `input` using `!important` in the UA stylesheet. */\ninput { line-height: normal;\n}\n\n/** It\'s recommended that you don\'t attempt to style these elements. Firefox\'s implementation doesn\'t respect box-sizing, padding, or width.  1. Address box sizing set to `content-box` in IE 8/9/10. 2. Remove excess padding in IE 8/9/10. */\ninput[type="checkbox"], input[type="radio"] { box-sizing: border-box; /* 1 */ padding: 0; /* 2 */\n}\n\n/** Fix the cursor style for Chrome\'s increment/decrement buttons. For certain `font-size` values of the `input`, it causes the cursor style of the decrement button to change from `default` to `text`. */\ninput[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button { height: auto;\n}\n\n/** 1. Address `appearance` set to `searchfield` in Safari and Chrome. 2. Address `box-sizing` set to `border-box` in Safari and Chrome (include `-moz` to future-proof). */\ninput[type="search"] { -webkit-appearance: textfield; /* 1 */ /* 2 */ box-sizing: content-box;\n}\n\n/** Remove inner padding and search cancel button in Safari and Chrome on OS X. Safari (but not Chrome) clips the cancel button when the search input has padding (and `textfield` appearance). */\ninput[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-decoration { -webkit-appearance: none;\n}\n\n/** Define consistent border, margin, and padding. */\nfieldset { border: 1px solid #c0c0c0; margin: 0 2px; padding: 0.35em 0.625em 0.75em;\n}\n\n/** 1. Correct `color` not being inherited in IE 8/9/10/11. 2. Remove padding so people aren\'t caught out if they zero out fieldsets. */\nlegend { border: 0; /* 1 */ padding: 0; /* 2 */\n}\n\n/** Remove default vertical scrollbar in IE 8/9/10/11. */\ntextarea { overflow: auto;\n}\n\n/** Don\'t inherit the `font-weight` (applied by a rule above). NOTE: the default cannot safely be changed in Chrome and Safari on OS X. */\noptgroup { font-weight: bold;\n}\n\n/* Tables ========================================================================== */\n/** Remove most spacing between table cells. */\ntable { border-collapse: collapse; border-spacing: 0;\n}\ntd, th { padding: 0;\n}\n.highlight table td { padding: 5px;\n}\n.highlight table pre { margin: 0;\n}\n.highlight .cm { color: #999988; font-style: italic;\n}\n.highlight .cp { color: #999999; font-weight: bold;\n}\n.highlight .c1 { color: #999988; font-style: italic;\n}\n.highlight .cs { color: #999999; font-weight: bold; font-style: italic;\n}\n.highlight .c, .highlight .cd { color: #999988; font-style: italic;\n}\n.highlight .err { color: #a61717; background-color: #e3d2d2;\n}\n.highlight .gd { color: #000000; background-color: #ffdddd;\n}\n.highlight .ge { color: #000000; font-style: italic;\n}\n.highlight .gr { color: #aa0000;\n}\n.highlight .gh { color: #999999;\n}\n.highlight .gi { color: #000000; background-color: #ddffdd;\n}\n.highlight .go { color: #888888;\n}\n.highlight .gp { color: #555555;\n}\n.highlight .gs { font-weight: bold;\n}\n.highlight .gu { color: #aaaaaa;\n}\n.highlight .gt { color: #aa0000;\n}\n.highlight .kc { color: #000000; font-weight: bold;\n}\n.highlight .kd { color: #000000; font-weight: bold;\n}\n.highlight .kn { color: #000000; font-weight: bold;\n}\n.highlight .kp { color: #000000; font-weight: bold;\n}\n.highlight .kr { color: #000000; font-weight: bold;\n}\n.highlight .kt { color: #445588; font-weight: bold;\n}\n.highlight .k, .highlight .kv { color: #000000; font-weight: bold;\n}\n.highlight .mf { color: #009999;\n}\n.highlight .mh { color: #009999;\n}\n.highlight .il { color: #009999;\n}\n.highlight .mi { color: #009999;\n}\n.highlight .mo { color: #009999;\n}\n.highlight .m, .highlight .mb, .highlight .mx { color: #009999;\n}\n.highlight .sb { color: #d14;\n}\n.highlight .sc { color: #d14;\n}\n.highlight .sd { color: #d14;\n}\n.highlight .s2 { color: #d14;\n}\n.highlight .se { color: #d14;\n}\n.highlight .sh { color: #d14;\n}\n.highlight .si { color: #d14;\n}\n.highlight .sx { color: #d14;\n}\n.highlight .sr { color: #009926;\n}\n.highlight .s1 { color: #d14;\n}\n.highlight .ss { color: #990073;\n}\n.highlight .s { color: #d14;\n}\n.highlight .na { color: #008080;\n}\n.highlight .bp { color: #999999;\n}\n.highlight .nb { color: #0086B3;\n}\n.highlight .nc { color: #445588; font-weight: bold;\n}\n.highlight .no { color: #008080;\n}\n.highlight .nd { color: #3c5d5d; font-weight: bold;\n}\n.highlight .ni { color: #800080;\n}\n.highlight .ne { color: #990000; font-weight: bold;\n}\n.highlight .nf { color: #990000; font-weight: bold;\n}\n.highlight .nl { color: #990000; font-weight: bold;\n}\n.highlight .nn { color: #555555;\n}\n.highlight .nt { color: #000080;\n}\n.highlight .vc { color: #008080;\n}\n.highlight .vg { color: #008080;\n}\n.highlight .vi { color: #008080;\n}\n.highlight .nv { color: #008080;\n}\n.highlight .ow { color: #000000; font-weight: bold;\n}\n.highlight .o { color: #000000; font-weight: bold;\n}\n.highlight .w { color: #bbbbbb;\n}\n.highlight { background-color: #f8f8f8;\n}\n* { box-sizing: border-box;\n}\nbody { padding: 0; margin: 0; font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 16px; line-height: 1.5; color: #606c71;\n}\na { color: #1e6bb8; text-decoration: none;\n}\na:hover { text-decoration: underline;\n}\n.btn { display: inline-block; margin-bottom: 1rem; color: rgba(255, 255, 255, 0.7); background-color: rgba(255, 255, 255, 0.08); border-color: rgba(255, 255, 255, 0.2); border-style: solid; border-width: 1px; border-radius: 0.3rem; transition: color 0.2s, background-color 0.2s, border-color 0.2s;\n}\n.btn:hover { color: rgba(255, 255, 255, 0.8); text-decoration: none; background-color: rgba(255, 255, 255, 0.2); border-color: rgba(255, 255, 255, 0.3);\n}\n.btn + .btn { margin-left: 1rem;\n}\n@media screen and (min-width: 64em) {\n.btn { padding: 0.75rem 1rem;\n}\n}\n@media screen and (min-width: 42em) and (max-width: 64em) {\n.btn { padding: 0.6rem 0.9rem; font-size: 0.9rem;\n}\n}\n@media screen and (max-width: 42em) {\n.btn { display: block; width: 100%; padding: 0.75rem; font-size: 0.9rem;\n}\n.btn + .btn { margin-top: 1rem; margin-left: 0;\n}\n}\n.page-header { color: #fff; text-align: center; background-color: #159957; background-image: linear-gradient(120deg, #155799, #159957);\n}\n@media screen and (min-width: 64em) {\n.page-header { padding: 5rem 6rem;\n}\n}\n@media screen and (min-width: 42em) and (max-width: 64em) {\n.page-header { padding: 3rem 4rem;\n}\n}\n@media screen and (max-width: 42em) {\n.page-header { padding: 2rem 1rem;\n}\n}\n.project-name { margin-top: 0; margin-bottom: 0.1rem;\n}\n@media screen and (min-width: 64em) {\n.project-name { font-size: 3.25rem;\n}\n}\n@media screen and (min-width: 42em) and (max-width: 64em) {\n.project-name { font-size: 2.25rem;\n}\n}\n@media screen and (max-width: 42em) {\n.project-name { font-size: 1.75rem;\n}\n}\n.project-tagline { margin-bottom: 2rem; font-weight: normal; opacity: 0.7;\n}\n@media screen and (min-width: 64em) {\n.project-tagline { font-size: 1.25rem;\n}\n}\n@media screen and (min-width: 42em) and (max-width: 64em) {\n.project-tagline { font-size: 1.15rem;\n}\n}\n@media screen and (max-width: 42em) {\n.project-tagline { font-size: 1rem;\n}\n}\n.main-content { word-wrap: break-word;\n}\n.main-content :first-child { margin-top: 0;\n}\n@media screen and (min-width: 64em) {\n.main-content { max-width: 80rem; padding: 2rem 6rem; margin: 0 auto; font-size: 1.1rem;\n}\n}\n@media screen and (min-width: 42em) and (max-width: 64em) {\n.main-content { padding: 2rem 4rem; font-size: 1.1rem;\n}\n}\n@media screen and (max-width: 42em) {\n.main-content { padding: 2rem 1rem; font-size: 1rem;\n}\n}\n.main-content img { max-width: 100%;\n}\n.main-content h1, .main-content h2, .main-content h3, .main-content h4, .main-content h5, .main-content h6 { margin-top: 2rem; margin-bottom: 1rem; font-weight: normal; color: #159957;\n}\n.main-content p { margin-bottom: 1em;\n}\n.main-content code { padding: 2px 4px; font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace; font-size: 0.9rem; color: #567482; background-color: #f3f6fa; border-radius: 0.3rem;\n}\n.main-content pre { padding: 0.8rem; margin-top: 0; margin-bottom: 1rem; font: 1rem Consolas, "Liberation Mono", Menlo, Courier, monospace; color: #567482; word-wrap: normal; background-color: #f3f6fa; border: solid 1px #dce6f0; border-radius: 0.3rem;\n}\n.main-content pre > code { padding: 0; margin: 0; font-size: 0.9rem; color: #567482; word-break: normal; white-space: pre; background: transparent; border: 0;\n}\n.main-content .highlight { margin-bottom: 1rem;\n}\n.main-content .highlight pre { margin-bottom: 0; word-break: normal;\n}\n.main-content .highlight pre, .main-content pre { padding: 0.8rem; overflow: auto; font-size: 0.9rem; line-height: 1.45; border-radius: 0.3rem; -webkit-overflow-scrolling: touch;\n}\n.main-content pre code, .main-content pre tt { display: inline; max-width: initial; padding: 0; margin: 0; overflow: initial; line-height: inherit; word-wrap: normal; background-color: transparent; border: 0;\n}\n.main-content pre code:before, .main-content pre code:after, .main-content pre tt:before, .main-content pre tt:after { content: normal;\n}\n.main-content ul, .main-content ol { margin-top: 0;\n}\n.main-content blockquote { padding: 0 1rem; margin-left: 0; color: #819198; border-left: 0.3rem solid #dce6f0;\n}\n.main-content blockquote > :first-child { margin-top: 0;\n}\n.main-content blockquote > :last-child { margin-bottom: 0;\n}\n.main-content table { display: block; width: 100%; overflow: auto; word-break: normal; word-break: keep-all; -webkit-overflow-scrolling: touch;\n}\n.main-content table th { font-weight: bold;\n}\n.main-content table th, .main-content table td { padding: 0.5rem 1rem; border: 1px solid #e9ebec;\n}\n.main-content dl { padding: 0;\n}\n.main-content dl dt { padding: 0; margin-top: 1rem; font-size: 1rem; font-weight: bold;\n}\n.main-content dl dd { padding: 0; margin-bottom: 1rem;\n}\n.main-content hr { height: 2px; padding: 0; margin: 1rem 0; background-color: #eff0f1; border: 0;\n}\n.site-footer { padding-top: 2rem; margin-top: 2rem; border-top: solid 1px #eff0f1;\n}\n@media screen and (min-width: 64em) {\n.site-footer { font-size: 1rem;\n}\n}\n@media screen and (min-width: 42em) and (max-width: 64em) {\n.site-footer { font-size: 1rem;\n}\n}\n@media screen and (max-width: 42em) {\n.site-footer { font-size: 0.9rem;\n}\n}\n.site-footer-owner { display: block; font-weight: bold;\n}\n.site-footer-credits { color: #819198;\n}\n.ui.form select {\n  height: 38px;\n}\n',""])},2128:function(e,n,t){var a=t("3077");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=t("0ed3").default;i("6cddf3d5",a,!0,{})},3077:function(e,n,t){n=e.exports=t("443a")(!1),n.push([e.i,'\n.switch__container {\n  margin: auto;\n  width: 60px;\n  height: 30px;\n}\n.switch {\n  visibility: hidden;\n  position: absolute;\n  margin-left: -9999px;\n}\n.switch + label {\n  display: block;\n  position: relative;\n  cursor: pointer;\n  outline: none;\n  user-select: none;\n}\n.switch--shadow + label {\n  padding: 2px;\n  width: auto;\n  background-color: #dddddd;\n  height: 100%;\n  border-radius: 999px;\n}\n.switch--shadow + label:before,\n.switch--shadow + label:after {\n  display: block;\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  bottom: 1px;\n  content: "";\n}\n.switch--shadow + label:before {\n  right: 1px;\n  background-color: #f1f1f1;\n  transition: background 0.4s;\n  border-radius: 999px;\n}\n.switch--shadow + label:after {\n  width: 50%;\n  background-color: #fff;\n  border-radius: 100%;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n  transition: all 0.4s;\n}\n.switch--shadow:checked + label:before {\n  background-color: #8ce196;\n}\n.switch--shadow:checked + label:after {\n  transform: translateX(100%);\n}\n',""])},"41f5":function(e,n,t){"use strict";t.r(n);var a=t("9869");function i(e,n,t=!0,a){e=e||"",n=n||"";var i=0,o=0,r="";while(i<n.length&&o<e.length){var s=n[i],l=a[s],d=e[o];l&&!l.escape?(l.pattern.test(d)&&(r+=l.transform?l.transform(d):d,i++),o++):(l&&l.escape&&(i++,s=n[i]),t&&(r+=s),d===s&&o++,i++)}var c="";while(i<n.length&&t){if(s=n[i],a[s]){c="";break}c+=s,i++}return r+c}function o(e,n,t){return n=n.slice().sort((e,n)=>e.length-n.length),function(a,i,o=!0){var r=0;while(r<n.length){var s=n[r];r++;var l=n[r];if(!(l&&e(a,l,!0,t).length>s.length))return e(a,s,o,t)}return""}}var r=function(e,n,t=!0,a){return n?Array.isArray(n)?o(i,n,a)(e,n,t,a):i(e,n,t,a):e},s={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:e=>e.toLocaleUpperCase()},a:{pattern:/[a-zA-Z]/,transform:e=>e.toLocaleLowerCase()},"!":{escape:!0}};function l(e){var n=document.createEvent("Event");return n.initEvent(e,!0,!0),n}var d=function(e,n,t){if("INPUT"!==e.tagName.toLocaleUpperCase()){var a=e.getElementsByTagName("input");if(1!==a.length)throw new Error("v-mask directive requires 1 input, found "+a.length);e=a[0]}var i=n.value||{};(Array.isArray(i)||"string"===typeof i)&&(i={masked:!0,mask:i,tokens:s}),e.oninput=function(n){if(n.isTrusted){var t=e.selectionEnd,a=e.value[t-1];e.value=r(e.value,i.mask,i.masked,i.tokens);while(t<e.value.length&&e.value.charAt(t-1)!==a)t++;e===document.activeElement&&(e.setSelectionRange(t,t),setTimeout(function(){e.setSelectionRange(t,t)},0)),e.dispatchEvent(l("input"))}};var o=r(e.value,i.mask,i.masked,i.tokens);o!==e.value&&t.context.$nextTick(()=>{e.value=o})},c={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:()=>s}},directives:{mask:d},data(){return{lastValue:null,display:this.value}},watch:{value(e){e!==this.lastValue&&(this.display=e)},masked(){this.refresh(this.display)}},computed:{config(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput(e){e.isTrusted||this.refresh(e.target.value)},refresh(e){this.display=e;var n=r(e,this.mask,this.masked,this.tokens);n!==this.lastValue&&(this.lastValue=n,this.$emit("input",n))}}},m=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("input",{directives:[{name:"mask",rawName:"v-mask",value:e.config,expression:"config"}],attrs:{type:"text"},domProps:{value:e.display},on:{input:e.onInput}})},h=[],p=t("3503"),g=!1,f=null,u=null,v=null,b=Object(p["a"])(c,m,h,g,f,u,v),k=b.exports,w={components:{TheMask:k},props:["label","mask","placeholder","masked","type","tokens","value"],data(){return{editableValue:this.value}}},_=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"inline field"},[t("label",[e._v(e._s(e.label))]),e._v(" "),t("the-mask",{attrs:{mask:e.mask,tokens:e.tokens,placeholder:e.placeholder,masked:e.masked,type:e.type||"tel"},model:{value:e.editableValue,callback:function(n){e.editableValue=n},expression:"editableValue"}}),e._v(" "),t("span",[e._v(e._s(e.editableValue))])],1)},y=[];function x(e){t("00f8")}var C=!1,A=x,z=null,F=null,S=Object(p["a"])(w,_,y,C,A,z,F),E=S.exports,T=function(e,n){var t=n||{};return(Array.isArray(t)||"string"===typeof t)&&(t={masked:!0,mask:t,tokens:s}),r(e,t.mask,t.masked,t.tokens)},P={components:{Field:E,TheMask:k},data(){return{masked:!1,iban:"BR0500000000011870000713973C1",vehicle:"KNDJB723025140702",hexTokens:{F:{pattern:/[0-9a-fA-F]/,transform:e=>e.toLocaleUpperCase()}},type:"text",placeholder:"test your mask here",mask:"#XSAa",value:"12TgB",directive:'<input type="tel" v-mask="\'##/##/####\'" />'}},computed:{code(){return`<the-mask mask="${this.mask}" value="${this.value}" type="${this.type}" masked="${this.masked}" placeholder="${this.placeholder}"></the-mask>`}},directives:{mask:d},filters:{maskFilter:T}},I=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{staticClass:"ui form"},[t("div",{staticClass:"ui dividing header"},[t("div",{staticClass:"ui equal width grid",staticStyle:{"align-items":"center"}},[e._m(0),e._v(" "),t("div",{staticClass:"two wide column"},[t("div",{staticClass:"switch__container"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.masked,expression:"masked"}],staticClass:"switch switch--shadow",attrs:{id:"switch-shadow",type:"checkbox"},domProps:{checked:Array.isArray(e.masked)?e._i(e.masked,null)>-1:e.masked},on:{change:function(n){var t=e.masked,a=n.target,i=!!a.checked;if(Array.isArray(t)){var o=null,r=e._i(t,o);a.checked?r<0&&(e.masked=t.concat([o])):r>-1&&(e.masked=t.slice(0,r).concat(t.slice(r+1)))}else e.masked=i}}}),e._v(" "),t("label",{attrs:{for:"switch-shadow"}})])]),e._v(" "),e._m(1)])]),e._v(" "),t("div",{staticClass:"equal width fields"},[t("field",{attrs:{label:"US Zip",mask:"#####",value:"12345",masked:e.masked}}),e._v(" "),t("field",{attrs:{label:"Brazil Zip",mask:"#####-###",value:"87010-230",masked:e.masked}})],1),e._v(" "),t("div",{staticClass:"equal width fields"},[t("field",{attrs:{label:"Brazil CPF",mask:"###.###.###-##",value:"12345678901",masked:e.masked}}),e._v(" "),t("field",{attrs:{label:"Brazil CNPJ",mask:"##.###.###/####-##",value:"27.865.757/0063-05",masked:e.masked}})],1),e._v(" "),t("div",{staticClass:"equal width fields"},[t("field",{attrs:{label:"US Phone",mask:"+1 (###) ###-####",value:"2025550134",masked:e.masked}}),e._v(" "),t("field",{attrs:{label:"Brazil Phone",mask:"+55 (##) ####-####",value:"4432211266",masked:e.masked}})],1),e._v(" "),t("div",{staticClass:"equal width fields"},[t("field",{attrs:{label:"DateTime",mask:"##/##/#### ##:##:##",value:"04011981 060515",placeholder:"dd/mm/yyyy hh:mm:ss",masked:e.masked}}),e._v(" "),t("field",{attrs:{label:"Credit Card",mask:"#### #### #### ####",value:"4916479938940351",masked:e.masked}})],1),e._v(" "),t("div",{staticClass:"equal width fields"},[t("field",{attrs:{label:"Date",mask:"##/##/####",placeholder:"dd/mm/yyyy",value:"04011981",masked:e.masked}}),e._v(" "),t("field",{attrs:{label:"Time",mask:"##:##:##",placeholder:"hh:mm:ss",value:"060515",masked:e.masked}})],1),e._v(" "),t("div",{staticClass:"equal width fields"},[t("field",{attrs:{label:"Br Car Plate",mask:"AAA ####",value:"IVY1703",masked:e.masked,type:"text"}}),e._v(" "),t("field",{attrs:{label:"Canada Zip",mask:"S#S #S#",value:"M5P 2N7",masked:e.masked,type:"text"}})],1),e._v(" "),t("div",{staticClass:"equal width fields"},[t("div",{staticClass:"field"},[t("label",[e._v("IBAN "+e._s(e.iban))]),e._v(" "),t("the-mask",{attrs:{mask:"AA## #### #### #### #### #### ###",masked:e.masked},model:{value:e.iban,callback:function(n){e.iban=n},expression:"iban"}})],1),e._v(" "),t("div",{staticClass:"field"},[t("label",[e._v("Vehicle Identification "+e._s(e.vehicle))]),e._v(" "),t("the-mask",{attrs:{mask:"XX.XX.XXXXX.X.X.XXXXXX",masked:e.masked},model:{value:e.vehicle,callback:function(n){e.vehicle=n},expression:"vehicle"}})],1)]),e._v(" "),t("h4",{staticClass:"ui dividing header"},[e._v("Dynamic Masks (Using Array)")]),e._v(" "),t("div",{staticClass:"equal width fields"},[t("div",{staticClass:"field"},[t("p",[t("field",{attrs:{label:"CPF/CNPJ",mask:["###.###.###-##","##.###.###/####-##"],masked:e.masked}})],1),e._v(" "),t("pre",[e._v("<the-mask :mask=\"['###.###.###-##', '##.###.###/####-##']\" />")])]),e._v(" "),t("div",{staticClass:"field"},[t("p",[t("field",{attrs:{label:"Brazil 9th digit",mask:["(##) ####-####","(##) #####-####"],masked:e.masked}})],1),e._v(" "),t("pre",[e._v("<the-mask :mask=\"['(##) ####-####', '(##) #####-####']\" />")])])]),e._v(" "),t("div",{staticClass:"equal width fields"},[t("div",{staticClass:"field"},[t("p",[t("field",{attrs:{label:"Bank Agency",mask:["###","###-#","###-##"],masked:e.masked}})],1),e._v(" "),t("pre",[e._v("<the-mask :mask=\"['###', '###-#', '###-##']\" />")])]),e._v(" "),t("div",{staticClass:"field"},[t("p",[t("field",{attrs:{label:"Bank Account",mask:["###-#","####-#","#####-#","######-#"],masked:e.masked}})],1),e._v(" "),t("pre",[e._v("<the-mask :mask=\"['###-#', '####-#', '#####-#', '######-#']\" />")])])]),e._v(" "),t("h4",{staticClass:"ui dividing header"},[e._v("Custom Tokens (Creates token F to represent a hexadecimal [0-9A-F])")]),e._v(" "),t("div",[t("field",{attrs:{label:"Hex. Color",mask:"FFFFFF",masked:e.masked,tokens:e.hexTokens}}),e._v(" "),t("pre",[e._v('<the-mask mask="FFFFFF" :tokens="hexTokens" />')]),e._v(" "),t("pre",[e._v("hexTokens: {\n  F: {\n    pattern: /[0-9a-fA-F]/,\n    transform: v => v.toLocaleUpperCase()\n  }\n}")])],1),e._v(" "),t("h1",{attrs:{id:"tokens"}},[e._v("Filter")]),e._v(" "),t("div",{staticClass:"equal width fields"},[t("span",{attrs:{label:"US Zip"}},[e._v(e._s(e._f("maskFilter")("12345","12345")))]),e._v(" "),t("span",{attrs:{label:"Brazil Zip"}},[e._v(e._s(e._f("maskFilter")("12345678901","#####-###")))])]),e._v(" "),t("div",{staticClass:"equal width fields"},[t("span",{attrs:{label:"Brazil CPF"}},[e._v(e._s(e._f("maskFilter")("12345678901","###.###.###-##")))]),e._v(" "),t("span",{attrs:{label:"Brazil CNPJ"}},[e._v(e._s(e._f("maskFilter")("27.865.757/0063-05","##.###.###/####-##")))])]),e._v(" "),t("div",{staticClass:"equal width fields"},[t("span",{attrs:{label:"US Phone"}},[e._v(e._s(e._f("maskFilter")("2025550134","+1 (###) ###-####")))]),e._v(" "),t("span",{attrs:{label:"Brazil Phone"}},[e._v(e._s(e._f("maskFilter")("4432211266","+55 (##) ####-####")))])]),e._v(" "),t("div",{staticClass:"equal width fields"},[t("span",{attrs:{label:"DateTime"}},[e._v(e._s(e._f("maskFilter")("04011981 060515","##/##/#### ##:##:##")))]),e._v(" "),t("span",{attrs:{label:"Credit Card"}},[e._v(e._s(e._f("maskFilter")("4916479938940351","#### #### #### ####")))])]),e._v(" "),t("div",{staticClass:"equal width fields"},[t("span",{attrs:{label:"Date"}},[e._v(e._s(e._f("maskFilter")("04011981","##/##/####")))]),e._v(" "),t("span",{attrs:{label:"Time"}},[e._v(e._s(e._f("maskFilter")("060515","##:##:##")))])]),e._v(" "),t("div",{staticClass:"equal width fields"},[t("span",{attrs:{label:"Br Car Plate"}},[e._v(e._s(e._f("maskFilter")("IVY1703","AAA ####")))]),e._v(" "),t("span",{attrs:{label:"Canada Zip"}},[e._v(e._s(e._f("maskFilter")("M5P 2N7","S#S #S#")))])]),e._v(" "),t("h1",{attrs:{id:"tokens"}},[e._v("Tokens")]),e._v(" "),t("pre",[e._v("    '#': {pattern: /\\d/},\n    'X': {pattern: /[0-9a-zA-Z]/},\n    'S': {pattern: /[a-zA-Z]/},\n    'A': {pattern: /[a-zA-Z]/, transform: v => v.toLocaleUpperCase()},\n    'a': {pattern: /[a-zA-Z]/, transform: v => v.toLocaleLowerCase()},\n    '!': {escape: true}\n    ")]),e._v(" "),t("h1",[e._v("Try it now")]),e._v(" "),t("div",{staticClass:"equal width fields"},[t("div",{staticClass:"field"},[t("label",[e._v("masked")]),e._v(" "),t("div",{staticClass:"switch__container small",staticStyle:{margin:"0"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.masked,expression:"masked"}],staticClass:"switch switch--shadow",attrs:{id:"switch-shadow",type:"checkbox"},domProps:{checked:Array.isArray(e.masked)?e._i(e.masked,null)>-1:e.masked},on:{change:function(n){var t=e.masked,a=n.target,i=!!a.checked;if(Array.isArray(t)){var o=null,r=e._i(t,o);a.checked?r<0&&(e.masked=t.concat([o])):r>-1&&(e.masked=t.slice(0,r).concat(t.slice(r+1)))}else e.masked=i}}}),e._v(" "),t("label",{attrs:{for:"switch-shadow"}})])]),e._v(" "),t("div",{staticClass:"field"},[t("label",[e._v("mask")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.mask,expression:"mask"}],domProps:{value:e.mask},on:{input:function(n){n.target.composing||(e.mask=n.target.value)}}})]),e._v(" "),t("div",{staticClass:"field"},[t("label",[e._v("value")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],domProps:{value:e.value},on:{input:function(n){n.target.composing||(e.value=n.target.value)}}})]),e._v(" "),t("div",{staticClass:"field"},[t("label",[e._v("placeholder")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.placeholder,expression:"placeholder"}],domProps:{value:e.placeholder},on:{input:function(n){n.target.composing||(e.placeholder=n.target.value)}}})]),e._v(" "),t("div",{staticClass:"field"},[t("label",[e._v("type")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],on:{change:function(n){var t=Array.prototype.filter.call(n.target.options,function(e){return e.selected}).map(function(e){var n="_value"in e?e._value:e.value;return n});e.type=n.target.multiple?t:t[0]}}},[t("option",[e._v("text")]),e._v(" "),t("option",[e._v("tel")])])])]),e._v(" "),t("div",{staticClass:"field"},[t("label",[e._v("Test your input mask below")]),e._v(" "),t("the-mask",{attrs:{mask:e.mask,value:e.value,type:e.type,masked:e.masked,placeholder:e.placeholder}})],1),e._v(" "),t("pre",[e._v(e._s(e.code))]),e._v(" "),t("h2",[e._v("Directive Usage")]),e._v(" "),t("div",{directives:[{name:"mask",rawName:"v-mask",value:"##/##/####",expression:"'##/##/####'"}],staticClass:"field"},[t("input",{attrs:{type:"tel",placeholder:"dd/mm/yyyy"}})]),e._v(" "),t("pre",[e._v(e._s(e.directive))]),e._v(" "),t("div",{staticClass:"ui tertiary inverted red segment"},[e._v("\n      The value returned from directive is always masked!\n    ")]),e._v(" "),t("div",{staticClass:"ui tertiary inverted orange segment"},[e._v('\n      When possible, prefer to use input type="tel" to avoid glitch on android devices\n    ')])])])},X=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"right aligned column"},[t("h1",{staticStyle:{"margin-bottom":"10px"}},[e._v("raw")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"left aligned column"},[t("h1",{staticStyle:{"margin-bottom":"10px"}},[e._v("masked")])])}];function j(e){t("7678"),t("2128")}var O=!1,q=j,N=null,B=null,M=Object(p["a"])(P,I,X,O,q,N,B),L=M.exports;new a["a"]({el:"#app",render:e=>e(L)})},7678:function(e,n,t){var a=t("1e4f");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=t("0ed3").default;i("6c387ed6",a,!0,{})},"7d36":function(e,n,t){n=e.exports=t("443a")(!1),n.push([e.i,"\n.ui.form .inline.field label {\n  width: 90px;\n}\n",""])}});