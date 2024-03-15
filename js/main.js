
// Site Version
var siteVersion = 'v=202';

window.onload	= function() {myFunction()};
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById('topBar');
var bodyContainer = document.querySelector('.body-container');

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
	if (window.pageYOffset > sticky) {
		header.classList.add('sticky');
		bodyContainer.classList.add('bodyTopSpacer');
	} else {
		header.classList.remove('sticky');
		bodyContainer.classList.remove('bodyTopSpacer');
	}
}

document.addEventListener('DOMContentLoaded', function(e) {
	
	var body = document.getElementById('body');
	
	var tabsLi = document.querySelectorAll('ul.tabs li');
	var tabsContent = document.getElementById('tabsContent');
	var mobileNav = document.querySelector('.mobileNav');
	
	var mainVideo = document.querySelector('.main-video');
	var mainVideoContent = mainVideo ? document.querySelector('.main-video').innerHTML : ''; // fix when .main-video not rendered
	var showVideo = document.getElementById('show-video');
	var videoContainer = document.querySelector('.videoContainer');
	var videoDarkPane = document.querySelector('.videoDarkPane');
	
	// function loadImage(t){let o=t.getAttribute("data-src"),e=new Image;e.onload=function(){t.setAttribute("src",o)},e.src=o}function lazyLoadLoop(){let t=document.querySelectorAll(".lazyimg");for(let o=0;o<t.length;o++)loadImage(t[o])}lazyLoadLoop();
	
	document.addEventListener('click', function (event) {
		var $this = event.target;
		// If the clicked element doesn't have the right selector, bail
		if (event.target.matches('.tab-link')) {
			var tab_id = $this.getAttribute('data-tab');
			
			tabsLi.forEach(node => {
				node.classList.remove('current');
			});
			
			$this.classList.add('current');
			tabsContent.removeAttribute('class');
			tabsContent.classList.add('slide-'+tab_id);
			
		} else if (event.target.matches('.mobileSelectedNav')) {
			// Menu Navigation
			mobileNav.classList.toggle('showMenu');
			
		} else if (event.target.matches('#scrollTo-liveDemo')) {
			// Scroll to live demo link
			var screenshotsAnchor = document.querySelector('#live-demo');
			screenshotsAnchor.scrollIntoView();
			
		} else if (event.target.matches('#scrollTo-screenshots')) {
			// Scroll to screenshots
			var screenshotsAnchor = document.querySelector('#screenshots .slider-container');
			screenshotsAnchor.scrollIntoView();
			
		} else if (event.target.matches('#scrollTo-languages')) {
			// Scroll to screenshots
			var screenshotsAnchor = document.querySelector('#supported-languages');
			screenshotsAnchor.scrollIntoView();
			
		} else if (event.target.matches('.loadVideo')) {
			/* Video Player */
			var videoid = $this.getAttribute('data-videoid');
			mainVideo.innerHTML = '<div class="yt-wrapper"><iframe width="560" height="349" src="https://www.youtube.com/embed/'+ videoid +'?rel=0&hd=1&autoplay=1" allow="autoplay" frameborder="0" allowfullscreen></iframe></div>';
			
		} else if (event.target.matches('#show-video')) {
			// Show Video
			if(showVideo){
				videoContainer.classList.toggle('show');
				body.classList.add('noScroll');
			}
			
		} else if (event.target.matches('.videoDarkPane')) {
			// Close video Panel
			if(videoDarkPane){
				videoContainer.classList.toggle('show');
				body.classList.remove('noScroll');
				
				mainVideo.innerHTML = mainVideoContent;
				var lazyLoadInstance = new LazyLoad({});
				// lazyLoadLoop();
			}
			
		} else if (event.target.matches('.getSocial')) {
			/* Show Social Media */
			var showSocial = document.getElementById('showSocial');
			var followContainer = document.querySelector('.followMe');
			
			followContainer.innerHTML = '\
				<div class="socialCell">\
					<a href="https://codepen.io/csspens" target="_blank">\
						<img class="socialicon" width="44" height="44" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzQNn0lBirUAn4djVU6XwNfVMb4UaIItjkXaJztUGpTT7JAfWRNQbvp6woepvMFsaBEuuP31KeuwPoGJ_fJuIuVa35mUYU0g-FFSKTzKd6ruHZBgmaO-Nzlxzd-Cd4b7as9n4KBPpx43k6JtQMUrIpsiiZ2ZJ6XxBe3M6aXOjVOXOGvSSxNns_ZH9_/s80/codepen.png"/>\
					</a>\
				</div>\
				<div class="socialCell">\
					<a href="https://www.instagram.com/gdev.official" target="_blank">\
						<img class="socialicon" width="44" height="44" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqmpiJhkKXdxvXghndLQyKECa6ITVdSYS9eAYeKL53Mjsh1l2RmpbpNLUt9poacjES8eKtMC0U30uMrCtVSf36kIsOMyNKS5w_rjrbbOQBi5WB-0TP_u6NSfb9XT6mc_bkUZ1j62zXp1igzCS624Rxa768k6-8YH-fGuoB8oapTFtr0AZ66W5LJT6J/s80/instagram.png"/>\
					</a>\
				</div>\
				<div class="socialCell">\
					<a href="https://www.facebook.com/gdev.official" target="_blank">\
						<img class="socialicon" width="44" height="44" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEit-rZDRGoNm9ScJAWJsaGSEjxTPo9u-OROxcIY6ig1iFnYfTkE-Al53FxNJUNyu019ToOoeP0FTWE7QayWmdtybXN6MpJtiaDnn-YTXtPmivlG1Kuw4yRlM-Kjm7JovLK1Bt6kzYSAkLPlhnLwHmVfYhHhKYi7BoR4owHHJY_UgJi6m9tm8bSWoNxw/s80/facebook.png"/>\
					</a>\
				</div>\
			';
			
			showSocial.classList.toggle('show');
			
		} else if (event.target.matches('.followWrapper')) {
			// Scroll to screenshots
			document.getElementById('showSocial').classList.remove('show');
			
		} else {
			mobileNav.classList.remove('showMenu');
		}

		// Don't follow the link
		// event.preventDefault();
	}, false);
	
	
	// Promo Bar
	document.querySelector('.promoBar-wrapper').innerHTML =
	'<div class="promo-text">\
		<span>Q2A theme, POLARIS is now out!</span>\
		<a class="learn-more" href="https://rxchun.github.io/shop/polaris" style="color:#ffffff">Learn more</a>\
	</div>'
	;

});

document.addEventListener("DOMContentLoaded", function() {
    var lazyVideos = [].slice.call(document.querySelectorAll("video.lazyvideo"));

    if ("IntersectionObserver" in window) {
        var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(video) {
                if (video.isIntersecting) {
                    for (var source in video.target.children) {
                        var videoSource = video.target.children[source];
                        if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                            videoSource.src = videoSource.dataset.src;
                        }
                    }

					video.target.load();
					video.target.classList.remove("lazyvideo");
					video.target.src = video.target.getAttribute('data-src');
					lazyVideoObserver.unobserve(video.target);
                }
            });
        });

        lazyVideos.forEach(function(lazyVideo) {
            lazyVideoObserver.observe(lazyVideo);
        });
    }
});

window.lazyLoadOptions = {
	threshold: 0
};

// https://github.com/verlok/vanilla-lazyload/
!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).LazyLoad=t()}(this,(function(){"use strict";function n(){return n=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},n.apply(this,arguments)}var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),i=t&&"IntersectionObserver"in window,o=t&&"classList"in document.createElement("p"),a=t&&window.devicePixelRatio>1,r={elements_selector:".lazyimg",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},c=function(t){return n({},r,t)},l=function(n,t){var e,i="LazyLoad::Initialized",o=new n(t);try{e=new CustomEvent(i,{detail:{instance:o}})}catch(n){(e=document.createEvent("CustomEvent")).initCustomEvent(i,!1,!1,{instance:o})}window.dispatchEvent(e)},u="src",s="srcset",d="sizes",f="poster",_="llOriginalAttrs",g="data",v="loading",b="loaded",m="applied",p="error",h="native",E="data-",I="ll-status",y=function(n,t){return n.getAttribute(E+t)},k=function(n){return y(n,I)},w=function(n,t){return function(n,t,e){var i="data-ll-status";null!==e?n.setAttribute(i,e):n.removeAttribute(i)}(n,0,t)},A=function(n){return w(n,null)},L=function(n){return null===k(n)},O=function(n){return k(n)===h},x=[v,b,m,p],C=function(n,t,e,i){n&&(void 0===i?void 0===e?n(t):n(t,e):n(t,e,i))},N=function(n,t){o?n.classList.add(t):n.className+=(n.className?" ":"")+t},M=function(n,t){o?n.classList.remove(t):n.className=n.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},z=function(n){return n.llTempImage},T=function(n,t){if(t){var e=t._observer;e&&e.unobserve(n)}},R=function(n,t){n&&(n.loadingCount+=t)},G=function(n,t){n&&(n.toLoadCount=t)},j=function(n){for(var t,e=[],i=0;t=n.children[i];i+=1)"SOURCE"===t.tagName&&e.push(t);return e},D=function(n,t){var e=n.parentNode;e&&"PICTURE"===e.tagName&&j(e).forEach(t)},H=function(n,t){j(n).forEach(t)},V=[u],F=[u,f],B=[u,s,d],J=[g],P=function(n){return!!n[_]},S=function(n){return n[_]},U=function(n){return delete n[_]},$=function(n,t){if(!P(n)){var e={};t.forEach((function(t){e[t]=n.getAttribute(t)})),n[_]=e}},q=function(n,t){if(P(n)){var e=S(n);t.forEach((function(t){!function(n,t,e){e?n.setAttribute(t,e):n.removeAttribute(t)}(n,t,e[t])}))}},K=function(n,t,e){N(n,t.class_applied),w(n,m),e&&(t.unobserve_completed&&T(n,t),C(t.callback_applied,n,e))},Q=function(n,t,e){N(n,t.class_loading),w(n,v),e&&(R(e,1),C(t.callback_loading,n,e))},W=function(n,t,e){e&&n.setAttribute(t,e)},X=function(n,t){W(n,d,y(n,t.data_sizes)),W(n,s,y(n,t.data_srcset)),W(n,u,y(n,t.data_src))},Y={IMG:function(n,t){D(n,(function(n){$(n,B),X(n,t)})),$(n,B),X(n,t)},IFRAME:function(n,t){$(n,V),W(n,u,y(n,t.data_src))},VIDEO:function(n,t){H(n,(function(n){$(n,V),W(n,u,y(n,t.data_src))})),$(n,F),W(n,f,y(n,t.data_poster)),W(n,u,y(n,t.data_src)),n.load()},OBJECT:function(n,t){$(n,J),W(n,g,y(n,t.data_src))}},Z=["IMG","IFRAME","VIDEO","OBJECT"],nn=function(n,t){!t||function(n){return n.loadingCount>0}(t)||function(n){return n.toLoadCount>0}(t)||C(n.callback_finish,t)},tn=function(n,t,e){n.addEventListener(t,e),n.llEvLisnrs[t]=e},en=function(n,t,e){n.removeEventListener(t,e)},on=function(n){return!!n.llEvLisnrs},an=function(n){if(on(n)){var t=n.llEvLisnrs;for(var e in t){var i=t[e];en(n,e,i)}delete n.llEvLisnrs}},rn=function(n,t,e){!function(n){delete n.llTempImage}(n),R(e,-1),function(n){n&&(n.toLoadCount-=1)}(e),M(n,t.class_loading),t.unobserve_completed&&T(n,e)},cn=function(n,t,e){var i=z(n)||n;on(i)||function(n,t,e){on(n)||(n.llEvLisnrs={});var i="VIDEO"===n.tagName?"loadeddata":"load";tn(n,i,t),tn(n,"error",e)}(i,(function(o){!function(n,t,e,i){var o=O(t);rn(t,e,i),N(t,e.class_loaded),w(t,b),C(e.callback_loaded,t,i),o||nn(e,i)}(0,n,t,e),an(i)}),(function(o){!function(n,t,e,i){var o=O(t);rn(t,e,i),N(t,e.class_error),w(t,p),C(e.callback_error,t,i),e.restore_on_error&&q(t,B),o||nn(e,i)}(0,n,t,e),an(i)}))},ln=function(n,t,e){!function(n){return Z.indexOf(n.tagName)>-1}(n)?function(n,t,e){!function(n){n.llTempImage=document.createElement("IMG")}(n),cn(n,t,e),function(n){P(n)||(n[_]={backgroundImage:n.style.backgroundImage})}(n),function(n,t,e){var i=y(n,t.data_bg),o=y(n,t.data_bg_hidpi),r=a&&o?o:i;r&&(n.style.backgroundImage='url("'.concat(r,'")'),z(n).setAttribute(u,r),Q(n,t,e))}(n,t,e),function(n,t,e){var i=y(n,t.data_bg_multi),o=y(n,t.data_bg_multi_hidpi),r=a&&o?o:i;r&&(n.style.backgroundImage=r,K(n,t,e))}(n,t,e),function(n,t,e){var i=y(n,t.data_bg_set);if(i){var o=i.split("|"),a=o.map((function(n){return"image-set(".concat(n,")")}));n.style.backgroundImage=a.join(),""===n.style.backgroundImage&&(a=o.map((function(n){return"-webkit-image-set(".concat(n,")")})),n.style.backgroundImage=a.join()),K(n,t,e)}}(n,t,e)}(n,t,e):function(n,t,e){cn(n,t,e),function(n,t,e){var i=Y[n.tagName];i&&(i(n,t),Q(n,t,e))}(n,t,e)}(n,t,e)},un=function(n){n.removeAttribute(u),n.removeAttribute(s),n.removeAttribute(d)},sn=function(n){D(n,(function(n){q(n,B)})),q(n,B)},dn={IMG:sn,IFRAME:function(n){q(n,V)},VIDEO:function(n){H(n,(function(n){q(n,V)})),q(n,F),n.load()},OBJECT:function(n){q(n,J)}},fn=function(n,t){(function(n){var t=dn[n.tagName];t?t(n):function(n){if(P(n)){var t=S(n);n.style.backgroundImage=t.backgroundImage}}(n)})(n),function(n,t){L(n)||O(n)||(M(n,t.class_entered),M(n,t.class_exited),M(n,t.class_applied),M(n,t.class_loading),M(n,t.class_loaded),M(n,t.class_error))}(n,t),A(n),U(n)},_n=["IMG","IFRAME","VIDEO"],gn=function(n){return n.use_native&&"loading"in HTMLImageElement.prototype},vn=function(n,t,e){n.forEach((function(n){return function(n){return n.isIntersecting||n.intersectionRatio>0}(n)?function(n,t,e,i){var o=function(n){return x.indexOf(k(n))>=0}(n);w(n,"entered"),N(n,e.class_entered),M(n,e.class_exited),function(n,t,e){t.unobserve_entered&&T(n,e)}(n,e,i),C(e.callback_enter,n,t,i),o||ln(n,e,i)}(n.target,n,t,e):function(n,t,e,i){L(n)||(N(n,e.class_exited),function(n,t,e,i){e.cancel_on_exit&&function(n){return k(n)===v}(n)&&"IMG"===n.tagName&&(an(n),function(n){D(n,(function(n){un(n)})),un(n)}(n),sn(n),M(n,e.class_loading),R(i,-1),A(n),C(e.callback_cancel,n,t,i))}(n,t,e,i),C(e.callback_exit,n,t,i))}(n.target,n,t,e)}))},bn=function(n){return Array.prototype.slice.call(n)},mn=function(n){return n.container.querySelectorAll(n.elements_selector)},pn=function(n){return function(n){return k(n)===p}(n)},hn=function(n,t){return function(n){return bn(n).filter(L)}(n||mn(t))},En=function(n,e){var o=c(n);this._settings=o,this.loadingCount=0,function(n,t){i&&!gn(n)&&(t._observer=new IntersectionObserver((function(e){vn(e,n,t)}),function(n){return{root:n.container===document?null:n.container,rootMargin:n.thresholds||n.threshold+"px"}}(n)))}(o,this),function(n,e){t&&(e._onlineHandler=function(){!function(n,t){var e;(e=mn(n),bn(e).filter(pn)).forEach((function(t){M(t,n.class_error),A(t)})),t.update()}(n,e)},window.addEventListener("online",e._onlineHandler))}(o,this),this.update(e)};return En.prototype={update:function(n){var t,o,a=this._settings,r=hn(n,a);G(this,r.length),!e&&i?gn(a)?function(n,t,e){n.forEach((function(n){-1!==_n.indexOf(n.tagName)&&function(n,t,e){n.setAttribute("loading","lazy"),cn(n,t,e),function(n,t){var e=Y[n.tagName];e&&e(n,t)}(n,t),w(n,h)}(n,t,e)})),G(e,0)}(r,a,this):(o=r,function(n){n.disconnect()}(t=this._observer),function(n,t){t.forEach((function(t){n.observe(t)}))}(t,o)):this.loadAll(r)},destroy:function(){this._observer&&this._observer.disconnect(),t&&window.removeEventListener("online",this._onlineHandler),mn(this._settings).forEach((function(n){U(n)})),delete this._observer,delete this._settings,delete this._onlineHandler,delete this.loadingCount,delete this.toLoadCount},loadAll:function(n){var t=this,e=this._settings;hn(n,e).forEach((function(n){T(n,t),ln(n,e,t)}))},restoreAll:function(){var n=this._settings;mn(n).forEach((function(t){fn(t,n)}))}},En.load=function(n,t){var e=c(t);ln(n,e)},En.resetStatus=function(n){A(n)},t&&function(n,t){if(t)if(t.length)for(var e,i=0;e=t[i];i+=1)l(n,e);else l(n,t)}(En,window.lazyLoadOptions),En}));

// avatar
const $=(n,t=document)=>t.querySelector(n),$$=(n,t=document)=>t.querySelectorAll(n);function getPoint(n,t,e,l){let a=(n,t,e,a)=>{let o=t||n,s=e||n,i={length:Math.sqrt(Math.pow(s[0]-o[0],2)+Math.pow(s[1]-o[1],2)),angle:Math.atan2(s[1]-o[1],s[0]-o[0])},r=i.angle+(a?Math.PI:0),u=i.length*l;return[n[0]+Math.cos(r)*u,n[1]+Math.sin(r)*u]},o=a(e[t-1],e[t-2],n,!1),s=a(n,e[t-1],e[t+1],!0);return`C ${o[0]},${o[1]} ${s[0]},${s[1]} ${n[0]},${n[1]}`}function getPath(n,t,e,l,a){return`<path d="${(a||[[t,16],[20,n],[e,16]]).reduce((n,t,e,a)=>0===e?`M ${t[0]},${t[1]}`:`${n} ${getPoint(t,e,a,l)}`,"")}" />`}$$(".downloadAvatar").forEach(n=>{let t={number:0},e=($(".icon",n),$(".icon > div",n)),l=$(".icon .arrow",n),a=$("span",n),o=new Proxy({y:null,s:null,f:null,l:null},{set:(n,t,e)=>(n[t]=e,null!==n.y&&null!=n.s&&null!=n.f&&null!=n.l&&(l.innerHTML=getPath(n.y,n.f,n.l,n.s,null)),!0),get:(n,t)=>n[t]});o.y=30,o.s=0,o.f=8,o.l=32,document.addEventListener("DOMContentLoaded",function(l){setTimeout(function(){n.classList.contains("loading")?n.classList.contains("animation")||(n.classList.add("reset"),gsap.to(o,{f:8,l:32,duration:.4}),gsap.to(o,{s:0,y:30,duration:.4}),setTimeout(()=>{n.classList.remove("loading","reset"),e.removeAttribute("style")},400)):n.classList.contains("animation")||(n.classList.add("loading","animation"),gsap.to(o,{f:2,l:38,duration:.3,delay:.15}),gsap.to(o,{s:.2,y:16,duration:.8,delay:.15,ease:Elastic.easeOut.config(1,.4)}),gsap.to(t,{number:"100",duration:1.4,delay:.8,onUpdate(){a.innerHTML=Math.round(t.number)+"%"}}),setTimeout(()=>{e.style.setProperty("overflow","visible"),setTimeout(()=>{n.classList.remove("animation")},600)},3820)),l.preventDefault()},200)})});


function loadImage(t) {
    let o = t.getAttribute('data-src'),
        e = new Image;
    e.onload = function() {
        t.setAttribute('src', o)
    }, e.src = o
}

function lazyLoadLoop1() {
    let t = document.querySelectorAll('.lazyimg1');
    for (let o = 0; o < t.length; o++) loadImage(t[o])
}
setTimeout(function() {
	lazyLoadLoop1();
}, 2800);


$('.siteVersion').each(function() {
    var href = $(this).attr('href');
	var src = $(this).attr('src');

    if (href) {
        href += (href.match(/\?/) ? '&' : '?') + siteVersion;
        $(this).attr('href', href);
    } else if (src) {
        src += (src.match(/\?/) ? '&' : '?') + siteVersion;
        $(this).attr('src', src);
    }
});

