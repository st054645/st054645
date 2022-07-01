"use strict";(this.webpackChunktweb=this.webpackChunktweb||[]).push([[765],{9818:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(410),s=n(4762),o=n(5003),a=n(8799),r=n(3910),h=n(3444),c=n(1655);const d=new class{constructor(){if(this.onPopState=e=>{let t=window.location.hash;const n=e.state;if(this.debug&&this.log("popstate",e,this.isPossibleSwipe,t),t!==this.currentHash)if(this.debug&&this.log.warn(`hash changed, new=${t}, current=${this.currentHash}, overridden=${this.overriddenHash}`),n===this.id&&this.overriddenHash&&this.overriddenHash!==t)this.overrideHash(this.overriddenHash);else{if(!n||this.overriddenHash||!t)return this.currentHash=t,void(this.onHashChange&&this.onHashChange());this.overrideHash()}if(n!==this.id&&(this.pushState(),!this.navigations.length))return;const i=this.navigations.pop();i?(this.manual=!this.isPossibleSwipe,this.handleItem(i)):this.pushState()},this.onKeyDown=e=>{const t=this.navigations[this.navigations.length-1];t&&("Escape"!==e.key||t.onEscape&&!t.onEscape()||((0,r.Z)(e),this.back(t.type)))},this.onTouchStart=e=>{e.touches.length>1||(this.debug&&this.log("touchstart"),(0,h.Z)(e)&&(this.isPossibleSwipe=!0,window.addEventListener("touchend",(()=>{setTimeout((()=>{this.isPossibleSwipe=!1}),100)}),{passive:!0,once:!0})))},this.navigations=[],this.id=Date.now(),this.manual=!1,this.log=(0,o.kg)("NC"),this.debug=!0,this.currentHash=window.location.hash,this.overriddenHash="",this.isPossibleSwipe=!1,window.addEventListener("popstate",this.onPopState),window.addEventListener("keydown",this.onKeyDown,{capture:!0,passive:!1}),s.IS_MOBILE_SAFARI){const e={passive:!0};window.addEventListener("touchstart",this.onTouchStart,e)}history.scrollRestoration="manual",this.pushState()}overrideHash(e=""){e&&"#"!==e[0]?e="#"+e:"#"===e&&(e=""),this.overriddenHash=this.currentHash=e,this.replaceState(),this.pushState()}handleItem(e){const t=e.onPop(!!this.manual&&void 0);this.debug&&this.log("popstate, navigation:",e,this.navigations),!1===t?this.pushItem(e):e.noBlurOnPop||(0,a.Z)(),this.manual=!1}findItemByType(e){for(let t=this.navigations.length-1;t>=0;--t){const n=this.navigations[t];if(n.type===e)return{item:n,index:t}}}back(e){if(e){const t=this.findItemByType(e);if(t)return void this.backByItem(t.item,t.index)}history.back()}backByItem(e,t=this.navigations.indexOf(e)){this.manual=!0,this.navigations.splice(t,1),this.handleItem(e)}onItemAdded(e){this.debug&&this.log("onItemAdded",e,this.navigations),e.noHistory||this.pushState()}pushItem(e){this.navigations.push(e),this.onItemAdded(e)}unshiftItem(e){this.navigations.unshift(e),this.onItemAdded(e)}spliceItems(e,t,...n){this.navigations.splice(e,t,...n),n.forEach((e=>{this.onItemAdded(e)}))}pushState(){this.debug&&this.log("push"),this.manual=!1,history.pushState(this.id,"")}replaceState(){this.debug&&this.log.warn("replace");const e=location.origin+location.pathname+this.overriddenHash;history.replaceState(this.id,"",e)}removeItem(e){e&&(0,c.Z)(this.navigations,e)}removeByType(e,t=!1){for(let n=this.navigations.length-1;n>=0&&(this.navigations[n].type!==e||(this.navigations.splice(n,1),!t));--n);}};i.GO.appNavigationController=d;const l=d},6765:(e,t,n)=>{n.d(t,{Z:()=>h});var i=n(1168),s=n(2325),o=n(2738),a=n(7084),r=n(2312);class h extends i.Z{constructor(){super("popup-avatar",null,{closable:!0,withConfirm:!0}),this.image=new Image,this.cropper={crop:()=>{},removeHandlers:()=>{}},this.h6=document.createElement("h6"),(0,s.$d)(this.h6,"Popup.Avatar.Title"),this.btnClose.classList.remove("btn-icon"),this.header.append(this.h6),this.cropContainer=document.createElement("div"),this.cropContainer.classList.add("crop"),this.cropContainer.append(this.image),this.input=document.createElement("input"),this.input.type="file",this.input.style.display="none",this.listenerSetter.add(this.input)("change",(e=>{const t=e.target.files[0];t&&(0,a.Z)(t).then((e=>{this.image=new Image,this.cropContainer.append(this.image),this.image.src=e,this.image.onload=()=>{this.show(),this.cropper=function(e,t){let n,i,s,o={},a=0,r=0,h=0,c=0,d=0;function l(){e.classList.add("crop-blur"),e.draggable=!1,s=new Image,s.src=e.src,s.draggable=!1,s.classList.add("crop-overlay-image"),t||(t=document.createElement("canvas")),n=document.createElement("div"),n.classList.add("crop-component"),i=document.createElement("div"),i.classList.add("crop-overlay");const o=document.createElement("div");o.classList.add("crop-overlay-color"),n.appendChild(i),e.parentNode.appendChild(n),n.appendChild(s),n.appendChild(e),n.appendChild(o),i.appendChild(s),s.style.maxWidth=e.width+"px",d=e.naturalWidth/e.offsetWidth;const a=e.offsetWidth/2-100,r=e.offsetHeight/2-100;u(200,200),p(a,r),m(a,r),i.addEventListener("mousedown",b,!1),i.addEventListener("touchstart",b,!1),i.addEventListener("wheel",g,!1),document.addEventListener("keypress",f,!1)}function u(e,t){h=e*d,c=t*d,i.style.width=e+"px",i.style.height=t+"px"}function p(e,t){r=t*d,a=e*d,s.style.top=-t+"px",s.style.left=-e+"px"}function m(e,t){i.style.top=t+"px",i.style.left=e+"px"}function v(e){e=e*Math.PI*2;let t,n,o,a,r=Math.floor(i.clientWidth+e),h=Math.floor(i.clientHeight+e),c=s.clientWidth,d=s.clientHeight;r<50||r>c||(t=i.offsetLeft-e/2,n=i.offsetTop-e/2,o=t+r,a=n+h,t<0&&(t=0),n<0&&(n=0),o>c||a>d||(u(r,r),p(t,n),m(t,n)))}function f(e){switch(e.preventDefault(),String.fromCharCode(e.charCode)){case"+":v(4);break;case"-":v(-4)}}function g(e){e.preventDefault(),v(e.deltaY>0?1:-1)}function b(e){e.preventDefault(),e.stopPropagation(),function(e){o.container_width=i.offsetWidth,o.container_height=i.offsetHeight,o.container_left=i.offsetLeft,o.container_top=i.offsetTop,o.mouse_x=(e.clientX||e.pageX||e.touches&&e.touches[0].clientX)+window.scrollX,o.mouse_y=(e.clientY||e.pageY||e.touches&&e.touches[0].clientY)+window.scrollY}(e),document.addEventListener("mousemove",E),document.addEventListener("touchmove",E),document.addEventListener("mouseup",y),document.addEventListener("touchend",y)}function y(e){e.preventDefault(),document.removeEventListener("mouseup",y),document.removeEventListener("touchend",y),document.removeEventListener("mousemove",E),document.removeEventListener("touchmove",E)}function E(e){let t,n,a,r,h={x:0,y:0};e.preventDefault(),e.stopPropagation(),h.x=e.pageX||e.touches&&e.touches[0].pageX,h.y=e.pageY||e.touches&&e.touches[0].pageY,t=h.x-(o.mouse_x-o.container_left),n=h.y-(o.mouse_y-o.container_top),a=i.offsetWidth,r=i.offsetHeight,t<0?t=0:t>s.offsetWidth-a&&(t=s.offsetWidth-a),n<0?n=0:n>s.offsetHeight-r&&(n=s.offsetHeight-r),p(t,n),m(t,n)}return e.complete?l():e.onload=l,{crop:function(){t.width=h,t.height=c,t.getContext("2d").drawImage(e,a,r,h,c,0,0,h,c)},removeHandlers:function(){i.removeEventListener("mousedown",b),i.removeEventListener("touchstart",b),i.removeEventListener("wheel",g),document.removeEventListener("mouseup",y),document.removeEventListener("touchend",y),document.removeEventListener("mousemove",E),document.removeEventListener("touchmove",E),document.removeEventListener("keypress",f),n.remove(),i.remove(),s.remove()}}}(this.image,this.canvas),this.input.value=""}}))}),!1),this.btnConfirm.className="btn-primary btn-color-primary btn-circle btn-crop btn-icon tgico-check z-depth-1",(0,o.fc)(this.btnConfirm,(()=>{this.cropper.crop(),this.hide(),this.canvas.toBlob((e=>{this.blob=e,this.darkenCanvas(),this.resolve()}),"image/jpeg",1)}),{listenerSetter:this.listenerSetter}),this.container.append(this.cropContainer,this.btnConfirm,this.input),this.addEventListener("closeAfterTimeout",(()=>{this.cropper.removeHandlers(),this.image&&this.image.remove()}))}resolve(){this.onCrop((()=>r.Z.upload(this.blob)))}open(e,t){this.canvas=e,this.onCrop=t,this.input.click()}darkenCanvas(){let e=this.canvas.getContext("2d");e.fillStyle="rgba(0, 0, 0, 0.3)",e.fillRect(0,0,this.canvas.width,this.canvas.height)}}},1168:(e,t,n)=>{n.d(t,{Z:()=>E,x:()=>w});var i=n(1405),s=n(5814),o=n(9818),a=n(2325),r=n(8497),h=n(8799),c=n(3699),d=n(2738),l=n(6299),u=n(3910),p=n(3241),m=n(6733),v=n(1655),f=n(3815);const g=document.body;let b=g;const y=()=>{b=(0,m.W7)()||g,E.reAppend()};(0,m.Ms)(g,y);class E extends p.Z{constructor(e,t,n={}){super(!1),this.buttons=t,this.element=document.createElement("div"),this.container=document.createElement("div"),this.header=document.createElement("div"),this.title=document.createElement("div"),this.onEscape=()=>!0,this.hide=()=>{o.Z.backByItem(this.navigationItem)},this.element.classList.add("popup"),this.element.className="popup"+(e?" "+e:""),this.container.classList.add("popup-container","z-depth-1"),this.header.classList.add("popup-header"),this.title.classList.add("popup-title"),this.header.append(this.title),this.listenerSetter=new c.Z,this.managers=E.MANAGERS,this.confirmShortcutIsSendShortcut=n.confirmShortcutIsSendShortcut,n.closable&&(this.btnClose=document.createElement("span"),this.btnClose.classList.add("btn-icon","popup-close","tgico-close"),this.header.prepend(this.btnClose),(0,d.fc)(this.btnClose,this.hide,{listenerSetter:this.listenerSetter,once:!0})),this.withoutOverlay=n.withoutOverlay,this.withoutOverlay&&this.element.classList.add("no-overlay"),n.overlayClosable&&(0,d.fc)(this.element,(e=>{(0,r.Z)(e.target,"popup-container")||this.hide()}),{listenerSetter:this.listenerSetter}),n.withConfirm&&(this.btnConfirm=document.createElement("button"),this.btnConfirm.classList.add("btn-primary","btn-color-primary"),!0!==n.withConfirm&&this.btnConfirm.append((0,a.ag)(n.withConfirm)),this.header.append(this.btnConfirm),(0,i.Z)(this.btnConfirm)),this.container.append(this.header),n.body&&(this.body=document.createElement("div"),this.body.classList.add("popup-body"),this.container.append(this.body));let s=this.btnConfirm;if(null==t?void 0:t.length){const e=this.buttonsEl=document.createElement("div");e.classList.add("popup-buttons"),2===t.length&&e.classList.add("popup-buttons-row");const n=t.map((e=>{const t=document.createElement("button");return t.className="btn"+(e.isDanger?" danger":" primary"),(0,i.Z)(t),e.text?t.innerHTML=e.text:t.append((0,a.ag)(e.langKey,e.langArgs)),(0,d.fc)(t,(()=>{e.callback&&e.callback(),this.destroy()}),{listenerSetter:this.listenerSetter,once:!0}),e.element=t}));if(!s&&2===t.length){const e=t.find((e=>!e.isCancel));e&&(s=e.element)}e.append(...n),this.container.append(e)}this.btnConfirmOnEnter=s,this.element.append(this.container),E.POPUPS.push(this)}show(){this.navigationItem={type:"popup",onPop:()=>this.destroy(),onEscape:this.onEscape},o.Z.pushItem(this.navigationItem),(0,h.Z)(),b.append(this.element),this.element.offsetWidth,this.element.classList.add("active"),this.withoutOverlay||(f.Z.isOverlayActive=!0,s.Z.checkAnimations(!0)),this.btnConfirmOnEnter&&setTimeout((()=>{this.listenerSetter.add(document.body)("keydown",(e=>{(this.confirmShortcutIsSendShortcut?(0,l.Z)(e):"Enter"===e.key)&&((0,d.tH)(this.btnConfirmOnEnter),(0,u.Z)(e))}))}),0)}destroy(){this.dispatchEvent("close"),this.element.classList.add("hiding"),this.element.classList.remove("active"),this.listenerSetter.removeAll(),this.withoutOverlay||(f.Z.isOverlayActive=!1),o.Z.removeItem(this.navigationItem),this.navigationItem=void 0,(0,v.Z)(E.POPUPS,this),y(),setTimeout((()=>{this.element.remove(),this.dispatchEvent("closeAfterTimeout"),this.cleanup(),this.withoutOverlay||s.Z.checkAnimations(!1)}),150)}static reAppend(){this.POPUPS.forEach((e=>{const{element:t,container:n}=e,i=t.parentElement;i&&i!==b&&b!==n&&b.append(t)}))}static getPopups(e){return this.POPUPS.filter((t=>t instanceof e))}static createPopup(e,...t){return new e(...t)}}E.POPUPS=[];const w=e=>(e.find((e=>e.isCancel))||e.push({langKey:"Cancel",isCancel:!0}),e)},7084:(e,t,n)=>{function i(e){return function(e,t){return new Promise((t=>{const n=new FileReader;n.addEventListener("loadend",(e=>{t(e.target.result)})),n.readAsDataURL(e)}))}(e)}n.d(t,{Z:()=>i})},6733:(e,t,n)=>{function i(e){e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}function s(){document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()}function o(e,t,n){const i=n?n.add(e):e.addEventListener.bind(e);"webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange".split(" ").forEach((e=>{i(e,t,!1)}))}function a(){return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement}function r(){return!!a()}n.d(t,{C8:()=>s,Dj:()=>i,Ms:()=>o,W7:()=>a,rB:()=>r})},6299:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(3512),s=n(4762);function o(e){if("Enter"===e.key&&!s.IS_MOBILE&&!e.isComposing){if("enter"===i.Z.settings.sendShortcut){if(e.shiftKey||e.ctrlKey||e.metaKey)return;return!0}{const t=s.IS_APPLE?e.metaKey:e.ctrlKey;if(e.shiftKey||(s.IS_APPLE?e.ctrlKey:e.metaKey))return;if(t)return!0}}return!1}},3444:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(4762);function s(e){return i.IS_MOBILE_SAFARI&&e instanceof TouchEvent&&e.touches[0].clientX<30}}}]);
//# sourceMappingURL=765.45601b4bdc7cd19eee70.chunk.js.map