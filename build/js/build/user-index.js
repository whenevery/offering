/**
 * Swiper 3.0.4
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2015, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: March 6, 2015
 */
!function(){"use strict";function e(e){e.fn.swiper=function(a){var t;return e(this).each(function(){var e=new Swiper(this,a);t||(t=e)}),t}}window.Swiper=function(e,t){function r(){return"horizontal"===h.params.direction}function s(){h.autoplayTimeoutId=setTimeout(function(){h.params.loop?(h.fixLoop(),h._slideNext()):h.isEnd?t.autoplayStopOnLast?h.stopAutoplay():h._slideTo(0):h._slideNext()},h.params.autoplay)}function i(e,a){var t=f(e.target);if(!t.is(a))if("string"==typeof a)t=t.parents(a);else if(a.nodeType){var r;return t.parents().each(function(e,t){t===a&&(r=a)}),r?a:void 0}return 0===t.length?void 0:t[0]}function n(e,a){a=a||{};var t=window.MutationObserver||window.WebkitMutationObserver,r=new t(function(e){e.forEach(function(e){h.onResize(),h.params.onObserverUpdate&&h.params.onObserverUpdate(h,e)})});r.observe(e,{attributes:"undefined"==typeof a.attributes?!0:a.attributes,childList:"undefined"==typeof a.childList?!0:a.childList,characterData:"undefined"==typeof a.characterData?!0:a.characterData}),h.observers.push(r)}function o(e){e.originalEvent&&(e=e.originalEvent);var a=e.keyCode||e.charCode;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===a||39===a||38===a||40===a){var t=!1;if(h.container.parents(".swiper-slide").length>0&&0===h.container.parents(".swiper-slide-active").length)return;for(var s={left:window.pageXOffset,top:window.pageYOffset},i=window.innerWidth,n=window.innerHeight,o=h.container.offset(),l=[[o.left,o.top],[o.left+h.width,o.top],[o.left,o.top+h.height],[o.left+h.width,o.top+h.height]],d=0;d<l.length;d++){var p=l[d];p[0]>=s.left&&p[0]<=s.left+i&&p[1]>=s.top&&p[1]<=s.top+n&&(t=!0)}if(!t)return}r()?((37===a||39===a)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),39===a&&h.slideNext(),37===a&&h.slidePrev()):((38===a||40===a)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),40===a&&h.slideNext(),38===a&&h.slidePrev())}}function l(e){e.originalEvent&&(e=e.originalEvent);var a=h._wheelEvent,t=0;if(e.detail)t=-e.detail;else if("mousewheel"===a)if(h.params.mousewheelForceToAxis)if(r()){if(!(Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)))return;t=e.wheelDeltaX}else{if(!(Math.abs(e.wheelDeltaY)>Math.abs(e.wheelDeltaX)))return;t=e.wheelDeltaY}else t=e.wheelDelta;else if("DOMMouseScroll"===a)t=-e.detail;else if("wheel"===a)if(h.params.mousewheelForceToAxis)if(r()){if(!(Math.abs(e.deltaX)>Math.abs(e.deltaY)))return;t=-e.deltaX}else{if(!(Math.abs(e.deltaY)>Math.abs(e.deltaX)))return;t=-e.deltaY}else t=Math.abs(e.deltaX)>Math.abs(e.deltaY)?-e.deltaX:-e.deltaY;if(h.params.freeMode){var s=h.getWrapperTranslate()+t;if(s>0&&(s=0),s<h.maxTranslate()&&(s=h.maxTranslate()),h.setWrapperTransition(0),h.setWrapperTranslate(s),h.updateProgress(),h.updateActiveIndex(),0===s||s===h.maxTranslate())return}else(new Date).getTime()-h._lastWheelScrollTime>60&&(0>t?h.slideNext():h.slidePrev()),h._lastWheelScrollTime=(new Date).getTime();return h.params.autoplay&&h.stopAutoplay(),e.preventDefault?e.preventDefault():e.returnValue=!1,!1}function d(e,a){e=f(e);var t,s,i,n,o;t=e.attr("data-swiper-parallax"),s=e.attr("data-swiper-parallax-x"),i=e.attr("data-swiper-parallax-y"),s||i||!t?(s=s?s:"0",i=i?i:"0"):r()?(s=t,i="0"):(i=t,s="0"),s=s.indexOf("%")>=0?parseInt(s,10)*a+"%":s*a+"px",i=i.indexOf("%")>=0?parseInt(i,10)*a+"%":i*a+"px",n=s,o=i,e.transform("translate3d("+n+", "+o+",0px)")}var p={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,scrollbar:null,scrollbarHide:!0,keyboardControl:!1,mousewheelControl:!1,mousewheelForceToAxis:!1,hashnav:!1,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,pagination:null,paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationHiddenClass:"swiper-pagination-hidden",observer:!1,observeParents:!1,runCallbacksOnInit:!0};t=t||{};for(var u in p)if("undefined"==typeof t[u])t[u]=p[u];else if("object"==typeof t[u])for(var c in p[u])"undefined"==typeof t[u][c]&&(t[u][c]=p[u][c]);var h=this;h.params=t;var f;if(f="undefined"==typeof a?window.Dom7||window.Zepto||window.jQuery:a,f&&(h.container=f(e),0!==h.container.length)){if(h.container.length>1)return void h.container.each(function(){new Swiper(this,t)});h.container[0].swiper=h,h.container.data("swiper",h),h.container.addClass("swiper-container-"+h.params.direction),h.params.freeMode&&h.container.addClass("swiper-container-free-mode"),(h.params.parallax||h.params.watchSlidesVisibility)&&(h.params.watchSlidesProgress=!0),["cube","coverflow"].indexOf(h.params.effect)>=0&&(h.support.transforms3d?(h.params.watchSlidesProgress=!0,h.container.addClass("swiper-container-3d")):h.params.effect="slide"),"slide"!==h.params.effect&&h.container.addClass("swiper-container-"+h.params.effect),"cube"===h.params.effect&&(h.params.resistanceRatio=0,h.params.slidesPerView=1,h.params.slidesPerColumn=1,h.params.slidesPerGroup=1,h.params.centeredSlides=!1,h.params.spaceBetween=0),"fade"===h.params.effect&&(h.params.watchSlidesProgress=!0,h.params.spaceBetween=0),h.params.grabCursor&&h.support.touch&&(h.params.grabCursor=!1),h.wrapper=h.container.children("."+h.params.wrapperClass),h.params.pagination&&(h.paginationContainer=f(h.params.pagination),h.params.paginationClickable&&h.paginationContainer.addClass("swiper-pagination-clickable")),h.rtl=r()&&("rtl"===h.container[0].dir.toLowerCase()||"rtl"===h.container.css("direction")),h.rtl&&h.container.addClass("swiper-container-rtl"),h.rtl&&(h.wrongRTL="-webkit-box"===h.wrapper.css("display")),h.translate=0,h.progress=0,h.velocity=0,h.lockSwipeToNext=function(){h.params.allowSwipeToNext=!1},h.lockSwipeToPrev=function(){h.params.allowSwipeToPrev=!1},h.lockSwipes=function(){h.params.allowSwipeToNext=h.params.allowSwipeToPrev=!1},h.unlockSwipeToNext=function(){h.params.allowSwipeToNext=!0},h.unlockSwipeToPrev=function(){h.params.allowSwipeToPrev=!0},h.unlockSwipes=function(){h.params.allowSwipeToNext=h.params.allowSwipeToPrev=!0},h.params.slidesPerColumn>1&&h.container.addClass("swiper-container-multirow"),h.params.grabCursor&&(h.container[0].style.cursor="move",h.container[0].style.cursor="-webkit-grab",h.container[0].style.cursor="-moz-grab",h.container[0].style.cursor="grab"),h.imagesToLoad=[],h.imagesLoaded=0,h.loadImage=function(e,a,t,r){function s(){r&&r()}var i;e.complete&&t?s():a?(i=new Image,i.onload=s,i.onerror=s,i.src=a):s()},h.preloadImages=function(){function e(){"undefined"!=typeof h&&null!==h&&(void 0!==h.imagesLoaded&&h.imagesLoaded++,h.imagesLoaded===h.imagesToLoad.length&&(h.params.updateOnImagesReady&&h.update(),h.params.onImagesReady&&h.params.onImagesReady(h)))}h.imagesToLoad=h.container.find("img");for(var a=0;a<h.imagesToLoad.length;a++)h.loadImage(h.imagesToLoad[a],h.imagesToLoad[a].currentSrc||h.imagesToLoad[a].getAttribute("src"),!0,e)},h.autoplayTimeoutId=void 0,h.autoplaying=!1,h.autoplayPaused=!1,h.startAutoplay=function(){return"undefined"!=typeof h.autoplayTimeoutId?!1:h.params.autoplay?h.autoplaying?!1:(h.autoplaying=!0,h.params.onAutoplayStart&&h.params.onAutoplayStart(h),void s()):!1},h.stopAutoplay=function(){h.autoplayTimeoutId&&(h.autoplayTimeoutId&&clearTimeout(h.autoplayTimeoutId),h.autoplaying=!1,h.autoplayTimeoutId=void 0,h.params.onAutoplayStop&&h.params.onAutoplayStop(h))},h.pauseAutoplay=function(e){h.autoplayPaused||(h.autoplayTimeoutId&&clearTimeout(h.autoplayTimeoutId),h.autoplayPaused=!0,0===e?(h.autoplayPaused=!1,s()):h.wrapper.transitionEnd(function(){h.autoplayPaused=!1,h.autoplaying?s():h.stopAutoplay()}))},h.minTranslate=function(){return-h.snapGrid[0]},h.maxTranslate=function(){return-h.snapGrid[h.snapGrid.length-1]},h.updateContainerSize=function(){h.width=h.container[0].clientWidth,h.height=h.container[0].clientHeight,h.size=r()?h.width:h.height},h.updateSlidesSize=function(){h.slides=h.wrapper.children("."+h.params.slideClass),h.snapGrid=[],h.slidesGrid=[],h.slidesSizesGrid=[];var e,a=h.params.spaceBetween,t=0,s=0,i=0;"string"==typeof a&&a.indexOf("%")>=0&&(a=parseFloat(a.replace("%",""))/100*h.size),h.virtualWidth=-a,h.slides.css(h.rtl?{marginLeft:"",marginTop:""}:{marginRight:"",marginBottom:""});var n;h.params.slidesPerColumn>1&&(n=Math.floor(h.slides.length/h.params.slidesPerColumn)===h.slides.length/h.params.slidesPerColumn?h.slides.length:Math.ceil(h.slides.length/h.params.slidesPerColumn)*h.params.slidesPerColumn);var o;for(e=0;e<h.slides.length;e++){o=0;var l=h.slides.eq(e);if(h.params.slidesPerColumn>1){var d,p,u,c,f=h.params.slidesPerColumn;"column"===h.params.slidesPerColumnFill?(p=Math.floor(e/f),u=e-p*f,d=p+u*n/f,l.css({"-webkit-box-ordinal-group":d,"-moz-box-ordinal-group":d,"-ms-flex-order":d,"-webkit-order":d,order:d})):(c=n/f,u=Math.floor(e/c),p=e-u*c),l.css({"margin-top":0!==u&&h.params.spaceBetween&&h.params.spaceBetween+"px"}).attr("data-swiper-column",p).attr("data-swiper-row",u)}"none"!==l.css("display")&&("auto"===h.params.slidesPerView?o=r()?l.outerWidth(!0):l.outerHeight(!0):(o=(h.size-(h.params.slidesPerView-1)*a)/h.params.slidesPerView,r()?h.slides[e].style.width=o+"px":h.slides[e].style.height=o+"px"),h.slides[e].swiperSlideSize=o,h.slidesSizesGrid.push(o),h.params.centeredSlides?(t=t+o/2+s/2+a,0===e&&(t=t-h.size/2-a),Math.abs(t)<.001&&(t=0),i%h.params.slidesPerGroup===0&&h.snapGrid.push(t),h.slidesGrid.push(t)):(i%h.params.slidesPerGroup===0&&h.snapGrid.push(t),h.slidesGrid.push(t),t=t+o+a),h.virtualWidth+=o+a,s=o,i++)}h.virtualWidth=Math.max(h.virtualWidth,h.size);var m;if(h.rtl&&h.wrongRTL&&("slide"===h.params.effect||"coverflow"===h.params.effect)&&h.wrapper.css({width:h.virtualWidth+h.params.spaceBetween+"px"}),h.params.slidesPerColumn>1&&(h.virtualWidth=(o+h.params.spaceBetween)*n,h.virtualWidth=Math.ceil(h.virtualWidth/h.params.slidesPerColumn)-h.params.spaceBetween,h.wrapper.css({width:h.virtualWidth+h.params.spaceBetween+"px"}),h.params.centeredSlides)){for(m=[],e=0;e<h.snapGrid.length;e++)h.snapGrid[e]<h.virtualWidth+h.snapGrid[0]&&m.push(h.snapGrid[e]);h.snapGrid=m}if(!h.params.centeredSlides){for(m=[],e=0;e<h.snapGrid.length;e++)h.snapGrid[e]<=h.virtualWidth-h.size&&m.push(h.snapGrid[e]);h.snapGrid=m,Math.floor(h.virtualWidth-h.size)>Math.floor(h.snapGrid[h.snapGrid.length-1])&&h.snapGrid.push(h.virtualWidth-h.size)}0===h.snapGrid.length&&(h.snapGrid=[0]),0!==h.params.spaceBetween&&h.slides.css(r()?h.rtl?{marginLeft:a+"px"}:{marginRight:a+"px"}:{marginBottom:a+"px"}),h.params.watchSlidesProgress&&h.updateSlidesOffset()},h.updateSlidesOffset=function(){for(var e=0;e<h.slides.length;e++)h.slides[e].swiperSlideOffset=r()?h.slides[e].offsetLeft:h.slides[e].offsetTop},h.updateSlidesProgress=function(e){if("undefined"==typeof e&&(e=h.translate||0),0!==h.slides.length){"undefined"==typeof h.slides[0].swiperSlideOffset&&h.updateSlidesOffset();var a=h.params.centeredSlides?-e+h.size/2:-e;h.rtl&&(a=h.params.centeredSlides?e-h.size/2:e);{h.container[0].getBoundingClientRect(),r()?"left":"top",r()?"right":"bottom"}h.slides.removeClass(h.params.slideVisibleClass);for(var t=0;t<h.slides.length;t++){var s=h.slides[t],i=h.params.centeredSlides===!0?s.swiperSlideSize/2:0,n=(a-s.swiperSlideOffset-i)/(s.swiperSlideSize+h.params.spaceBetween);if(h.params.watchSlidesVisibility){var o=-(a-s.swiperSlideOffset-i),l=o+h.slidesSizesGrid[t],d=o>=0&&o<h.size||l>0&&l<=h.size||0>=o&&l>=h.size;d&&h.slides.eq(t).addClass(h.params.slideVisibleClass)}s.progress=h.rtl?-n:n}}},h.updateProgress=function(e){"undefined"==typeof e&&(e=h.translate||0);var a=h.maxTranslate()-h.minTranslate();0===a?(h.progress=0,h.isBeginning=h.isEnd=!0):(h.progress=(e-h.minTranslate())/a,h.isBeginning=h.progress<=0,h.isEnd=h.progress>=1),h.isBeginning&&h.params.onReachBeginning&&h.params.onReachBeginning(h),h.isEnd&&h.params.onReachEnd&&h.params.onReachEnd(h),h.params.watchSlidesProgress&&h.updateSlidesProgress(e),h.params.onProgress&&h.params.onProgress(h,h.progress)},h.updateActiveIndex=function(){var e,a,t,r=h.rtl?h.translate:-h.translate;for(a=0;a<h.slidesGrid.length;a++)"undefined"!=typeof h.slidesGrid[a+1]?r>=h.slidesGrid[a]&&r<h.slidesGrid[a+1]-(h.slidesGrid[a+1]-h.slidesGrid[a])/2?e=a:r>=h.slidesGrid[a]&&r<h.slidesGrid[a+1]&&(e=a+1):r>=h.slidesGrid[a]&&(e=a);(0>e||"undefined"==typeof e)&&(e=0),t=Math.floor(e/h.params.slidesPerGroup),t>=h.snapGrid.length&&(t=h.snapGrid.length-1),e!==h.activeIndex&&(h.snapIndex=t,h.previousIndex=h.activeIndex,h.activeIndex=e,h.updateClasses())},h.updateClasses=function(){h.slides.removeClass(h.params.slideActiveClass+" "+h.params.slideNextClass+" "+h.params.slidePrevClass);var e=h.slides.eq(h.activeIndex);if(e.addClass(h.params.slideActiveClass),e.next("."+h.params.slideClass).addClass(h.params.slideNextClass),e.prev("."+h.params.slideClass).addClass(h.params.slidePrevClass),h.bullets&&h.bullets.length>0){h.bullets.removeClass(h.params.bulletActiveClass);var a;h.params.loop?(a=h.activeIndex-h.loopedSlides,a>h.slides.length-1-2*h.loopedSlides&&(a-=h.slides.length-2*h.loopedSlides)):a="undefined"!=typeof h.snapIndex?h.snapIndex:h.activeIndex||0,h.bullets.eq(a).addClass(h.params.bulletActiveClass)}h.params.loop||(h.params.prevButton&&(h.isBeginning?f(h.params.prevButton).addClass(h.params.buttonDisabledClass):f(h.params.prevButton).removeClass(h.params.buttonDisabledClass)),h.params.nextButton&&(h.isEnd?f(h.params.nextButton).addClass(h.params.buttonDisabledClass):f(h.params.nextButton).removeClass(h.params.buttonDisabledClass)))},h.updatePagination=function(){if(h.params.pagination&&h.paginationContainer&&h.paginationContainer.length>0){for(var e="",a=h.params.loop?h.slides.length-2*h.loopedSlides:h.snapGrid.length,t=0;a>t;t++)e+=h.params.paginationBulletRender?h.params.paginationBulletRender(t,h.params.bulletClass):'<span class="'+h.params.bulletClass+'"></span>';h.paginationContainer.html(e),h.bullets=h.paginationContainer.find("."+h.params.bulletClass)}},h.update=function(e){function a(){r=Math.min(Math.max(h.translate,h.maxTranslate()),h.minTranslate()),h.setWrapperTranslate(r),h.updateActiveIndex(),h.updateClasses()}if(h.updateContainerSize(),h.updateSlidesSize(),h.updateProgress(),h.updatePagination(),h.updateClasses(),h.params.scrollbar&&h.scrollbar&&h.scrollbar.set(),e){var t,r;h.params.freeMode?a():(t="auto"===h.params.slidesPerView&&h.isEnd&&!h.params.centeredSlides?h.slideTo(h.slides.length-1,0,!1,!0):h.slideTo(h.activeIndex,0,!1,!0),t||a())}},h.onResize=function(){if(h.updateContainerSize(),h.updateSlidesSize(),h.updateProgress(),("auto"===h.params.slidesPerView||h.params.freeMode)&&h.updatePagination(),h.params.scrollbar&&h.scrollbar&&h.scrollbar.set(),h.params.freeMode){var e=Math.min(Math.max(h.translate,h.maxTranslate()),h.minTranslate());h.setWrapperTranslate(e),h.updateActiveIndex(),h.updateClasses()}else h.updateClasses(),"auto"===h.params.slidesPerView&&h.isEnd&&!h.params.centeredSlides?h.slideTo(h.slides.length-1,0,!1,!0):h.slideTo(h.activeIndex,0,!1,!0)};var m=["mousedown","mousemove","mouseup"];window.navigator.pointerEnabled?m=["pointerdown","pointermove","pointerup"]:window.navigator.msPointerEnabled&&(m=["MSPointerDown","MSPointerMove","MSPointerUp"]),h.touchEvents={start:h.support.touch||!h.params.simulateTouch?"touchstart":m[0],move:h.support.touch||!h.params.simulateTouch?"touchmove":m[1],end:h.support.touch||!h.params.simulateTouch?"touchend":m[2]},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===h.params.touchEventsTarget?h.container:h.wrapper).addClass("swiper-wp8-"+h.params.direction),h.events=function(e){var a=e?"off":"on",r=e?"removeEventListener":"addEventListener",s="container"===h.params.touchEventsTarget?h.container[0]:h.wrapper[0],i=h.support.touch?s:document,n=h.params.nested?!0:!1;h.browser.ie?(s[r](h.touchEvents.start,h.onTouchStart,!1),i[r](h.touchEvents.move,h.onTouchMove,n),i[r](h.touchEvents.end,h.onTouchEnd,!1)):(h.support.touch&&(s[r](h.touchEvents.start,h.onTouchStart,!1),s[r](h.touchEvents.move,h.onTouchMove,n),s[r](h.touchEvents.end,h.onTouchEnd,!1)),!t.simulateTouch||h.device.ios||h.device.android||(s[r]("mousedown",h.onTouchStart,!1),i[r]("mousemove",h.onTouchMove,n),i[r]("mouseup",h.onTouchEnd,!1))),window[r]("resize",h.onResize),h.params.nextButton&&f(h.params.nextButton)[a]("click",h.onClickNext),h.params.prevButton&&f(h.params.prevButton)[a]("click",h.onClickPrev),h.params.pagination&&h.params.paginationClickable&&f(h.paginationContainer)[a]("click","."+h.params.bulletClass,h.onClickIndex),(h.params.preventClicks||h.params.preventClicksPropagation)&&s[r]("click",h.preventClicks,!0)},h.attachEvents=function(){h.events()},h.detachEvents=function(){h.events(!0)},h.allowClick=!0,h.preventClicks=function(e){h.allowClick||(h.params.preventClicks&&e.preventDefault(),h.params.preventClicksPropagation&&(e.stopPropagation(),e.stopImmediatePropagation()))},h.onClickNext=function(e){e.preventDefault(),h.slideNext()},h.onClickPrev=function(e){e.preventDefault(),h.slidePrev()},h.onClickIndex=function(e){e.preventDefault();var a=f(this).index()*h.params.slidesPerGroup;h.params.loop&&(a+=h.loopedSlides),h.slideTo(a)},h.updateClickedSlide=function(e){var a=i(e,"."+h.params.slideClass);if(!a)return h.clickedSlide=void 0,void(h.clickedIndex=void 0);if(h.clickedSlide=a,h.clickedIndex=f(a).index(),h.params.slideToClickedSlide&&void 0!==h.clickedIndex&&h.clickedIndex!==h.activeIndex){var t,r=h.clickedIndex;if(h.params.loop)if(t=f(h.clickedSlide).attr("data-swiper-slide-index"),r>h.slides.length-h.params.slidesPerView)h.fixLoop(),r=h.wrapper.children("."+h.params.slideClass+'[data-swiper-slide-index="'+t+'"]').eq(0).index(),setTimeout(function(){h.slideTo(r)},0);else if(r<h.params.slidesPerView-1){h.fixLoop();var s=h.wrapper.children("."+h.params.slideClass+'[data-swiper-slide-index="'+t+'"]');r=s.eq(s.length-1).index(),setTimeout(function(){h.slideTo(r)},0)}else h.slideTo(r);else h.slideTo(r)}};var g,v,w,T,b,x,y,S,C,M="input, select, textarea, button",E=Date.now(),P=[];h.animating=!1,h.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var z;if(h.onTouchStart=function(e){if(e.originalEvent&&(e=e.originalEvent),z="touchstart"===e.type,z||!("which"in e)||3!==e.which){if(h.params.noSwiping&&i(e,"."+h.params.noSwipingClass))return void(h.allowClick=!0);if(!h.params.swipeHandler||i(e,h.params.swipeHandler)){if(g=!0,v=!1,T=void 0,h.touches.startX=h.touches.currentX="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,h.touches.startY=h.touches.currentY="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY,w=Date.now(),h.allowClick=!0,h.updateContainerSize(),h.swipeDirection=void 0,h.params.threshold>0&&(y=!1),"touchstart"!==e.type){var a=!0;f(e.target).is(M)&&(a=!1),document.activeElement&&f(document.activeElement).is(M)&&document.activeElement.blur(),a&&e.preventDefault()}h.params.onTouchStart&&h.params.onTouchStart(h,e)}}},h.onTouchMove=function(e){if(e.originalEvent&&(e=e.originalEvent),!(z&&"mousemove"===e.type||e.preventedByNestedSwiper)){if(h.params.onlyExternal)return v=!0,void(h.allowClick=!1);if(z&&document.activeElement&&e.target===document.activeElement&&f(e.target).is(M))return v=!0,void(h.allowClick=!1);if(h.params.onTouchMove&&h.params.onTouchMove(h,e),h.allowClick=!1,!(e.targetTouches&&e.targetTouches.length>1)){if(h.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,h.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,"undefined"==typeof T){var a=180*Math.atan2(Math.abs(h.touches.currentY-h.touches.startY),Math.abs(h.touches.currentX-h.touches.startX))/Math.PI;T=r()?a>h.params.touchAngle:90-a>h.params.touchAngle}if(T&&h.params.onTouchMoveOpposite&&h.params.onTouchMoveOpposite(h,e),g){if(T)return void(g=!1);h.params.onSliderMove&&h.params.onSliderMove(h,e),e.preventDefault(),h.params.touchMoveStopPropagation&&!h.params.nested&&e.stopPropagation(),v||(t.loop&&h.fixLoop(),x="cube"===h.params.effect?(h.rtl?-h.translate:h.translate)||0:h.getWrapperTranslate(),h.setWrapperTransition(0),h.animating&&h.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),h.params.autoplay&&h.autoplaying&&(h.params.autoplayDisableOnInteraction?h.stopAutoplay():h.pauseAutoplay()),C=!1,h.params.grabCursor&&(h.container[0].style.cursor="move",h.container[0].style.cursor="-webkit-grabbing",h.container[0].style.cursor="-moz-grabbin",h.container[0].style.cursor="grabbing")),v=!0;var s=h.touches.diff=r()?h.touches.currentX-h.touches.startX:h.touches.currentY-h.touches.startY;s*=h.params.touchRatio,h.rtl&&(s=-s),h.swipeDirection=s>0?"prev":"next",b=s+x;var i=!0;if(s>0&&b>h.minTranslate()?(i=!1,h.params.resistance&&(b=h.minTranslate()-1+Math.pow(-h.minTranslate()+x+s,h.params.resistanceRatio))):0>s&&b<h.maxTranslate()&&(i=!1,h.params.resistance&&(b=h.maxTranslate()+1-Math.pow(h.maxTranslate()-x-s,h.params.resistanceRatio))),i&&(e.preventedByNestedSwiper=!0),!h.params.allowSwipeToNext&&"next"===h.swipeDirection&&x>b&&(b=x),!h.params.allowSwipeToPrev&&"prev"===h.swipeDirection&&b>x&&(b=x),h.params.followFinger){if(h.params.threshold>0){if(!(Math.abs(s)>h.params.threshold||y))return void(b=x);if(!y)return y=!0,h.touches.startX=h.touches.currentX,h.touches.startY=h.touches.currentY,b=x,void(h.touches.diff=r()?h.touches.currentX-h.touches.startX:h.touches.currentY-h.touches.startY)}(h.params.freeMode||h.params.watchSlidesProgress)&&h.updateActiveIndex(),h.params.freeMode&&(0===P.length&&P.push({position:h.touches[r()?"startX":"startY"],time:w}),P.push({position:h.touches[r()?"currentX":"currentY"],time:(new Date).getTime()})),h.updateProgress(b),h.setWrapperTranslate(b)}}}}},h.onTouchEnd=function(e){if(e.originalEvent&&(e=e.originalEvent),h.params.onTouchEnd&&h.params.onTouchEnd(h,e),g){h.params.grabCursor&&v&&g&&(h.container[0].style.cursor="move",h.container[0].style.cursor="-webkit-grab",h.container[0].style.cursor="-moz-grab",h.container[0].style.cursor="grab");var a=Date.now(),t=a-w;if(h.allowClick&&(h.updateClickedSlide(e),h.params.onTap&&h.params.onTap(h,e),300>t&&a-E>300&&(S&&clearTimeout(S),S=setTimeout(function(){h&&(h.params.paginationHide&&h.paginationContainer.length>0&&!f(e.target).hasClass(h.params.bulletClass)&&h.paginationContainer.toggleClass(h.params.paginationHiddenClass),h.params.onClick&&h.params.onClick(h,e))},300)),300>t&&300>a-E&&(S&&clearTimeout(S),h.params.onDoubleTap&&h.params.onDoubleTap(h,e))),E=Date.now(),setTimeout(function(){h&&h.allowClick&&(h.allowClick=!0)},0),!g||!v||!h.swipeDirection||0===h.touches.diff||b===x)return void(g=v=!1);g=v=!1;var r;if(r=h.params.followFinger?h.rtl?h.translate:-h.translate:-b,h.params.freeMode){if(r<-h.minTranslate())return void h.slideTo(h.activeIndex);if(r>-h.maxTranslate())return void h.slideTo(h.slides.length-1);if(h.params.freeModeMomentum){if(P.length>1){var s=P.pop(),i=P.pop(),n=s.position-i.position,o=s.time-i.time;h.velocity=n/o,h.velocity=h.velocity/2,Math.abs(h.velocity)<.02&&(h.velocity=0),(o>150||(new Date).getTime()-s.time>300)&&(h.velocity=0)}else h.velocity=0;P.length=0;var l=1e3*h.params.freeModeMomentumRatio,d=h.velocity*l,p=h.translate+d;h.rtl&&(p=-p);var u,c=!1,m=20*Math.abs(h.velocity)*h.params.freeModeMomentumBounceRatio;p<h.maxTranslate()&&(h.params.freeModeMomentumBounce?(p+h.maxTranslate()<-m&&(p=h.maxTranslate()-m),u=h.maxTranslate(),c=!0,C=!0):p=h.maxTranslate()),p>h.minTranslate()&&(h.params.freeModeMomentumBounce?(p-h.minTranslate()>m&&(p=h.minTranslate()+m),u=h.minTranslate(),c=!0,C=!0):p=h.minTranslate()),0!==h.velocity&&(l=Math.abs(h.rtl?(-p-h.translate)/h.velocity:(p-h.translate)/h.velocity)),h.params.freeModeMomentumBounce&&c?(h.updateProgress(u),h.setWrapperTransition(l),h.setWrapperTranslate(p),h.onTransitionStart(),h.animating=!0,h.wrapper.transitionEnd(function(){C&&(h.params.onMomentumBounce&&h.params.onMomentumBounce(h),h.setWrapperTransition(h.params.speed),h.setWrapperTranslate(u),h.wrapper.transitionEnd(function(){h.onTransitionEnd()}))})):h.velocity?(h.updateProgress(p),h.setWrapperTransition(l),h.setWrapperTranslate(p),h.onTransitionStart(),h.animating||(h.animating=!0,h.wrapper.transitionEnd(function(){h.onTransitionEnd()}))):h.updateProgress(p),h.updateActiveIndex()}return void((!h.params.freeModeMomentum||t>=h.params.longSwipesMs)&&(h.updateProgress(),h.updateActiveIndex()))}var T,y=0,M=h.slidesSizesGrid[0];for(T=0;T<h.slidesGrid.length;T+=h.params.slidesPerGroup)"undefined"!=typeof h.slidesGrid[T+h.params.slidesPerGroup]?r>=h.slidesGrid[T]&&r<h.slidesGrid[T+h.params.slidesPerGroup]&&(y=T,M=h.slidesGrid[T+h.params.slidesPerGroup]-h.slidesGrid[T]):r>=h.slidesGrid[T]&&(y=T,M=h.slidesGrid[h.slidesGrid.length-1]-h.slidesGrid[h.slidesGrid.length-2]);var z=(r-h.slidesGrid[y])/M;if(t>h.params.longSwipesMs){if(!h.params.longSwipes)return void h.slideTo(h.activeIndex);"next"===h.swipeDirection&&h.slideTo(z>=h.params.longSwipesRatio?y+h.params.slidesPerGroup:y),"prev"===h.swipeDirection&&h.slideTo(z>1-h.params.longSwipesRatio?y+h.params.slidesPerGroup:y)}else{if(!h.params.shortSwipes)return void h.slideTo(h.activeIndex);"next"===h.swipeDirection&&h.slideTo(y+h.params.slidesPerGroup),"prev"===h.swipeDirection&&h.slideTo(y)}}},h._slideTo=function(e,a){return h.slideTo(e,a,!0,!0)},h.slideTo=function(e,a,t,s){"undefined"==typeof t&&(t=!0),"undefined"==typeof e&&(e=0),0>e&&(e=0),h.snapIndex=Math.floor(e/h.params.slidesPerGroup),h.snapIndex>=h.snapGrid.length&&(h.snapIndex=h.snapGrid.length-1);var i=-h.snapGrid[h.snapIndex];h.params.autoplay&&h.autoplaying&&(s||!h.params.autoplayDisableOnInteraction?h.pauseAutoplay(a):h.stopAutoplay()),h.updateProgress(i);for(var n=0;n<h.slidesGrid.length;n++)-i>=h.slidesGrid[n]&&(e=n);if("undefined"==typeof a&&(a=h.params.speed),h.previousIndex=h.activeIndex||0,h.activeIndex=e,i===h.translate)return h.updateClasses(),!1;h.onTransitionStart(t);r()?i:0,r()?0:i;return 0===a?(h.setWrapperTransition(0),h.setWrapperTranslate(i),h.onTransitionEnd(t)):(h.setWrapperTransition(a),h.setWrapperTranslate(i),h.animating||(h.animating=!0,h.wrapper.transitionEnd(function(){h.onTransitionEnd(t)}))),h.updateClasses(),!0},h.onTransitionStart=function(e){"undefined"==typeof e&&(e=!0),h.lazy&&h.lazy.onTransitionStart(),e&&(h.params.onTransitionStart&&h.params.onTransitionStart(h),h.params.onSlideChangeStart&&h.activeIndex!==h.previousIndex&&h.params.onSlideChangeStart(h))},h.onTransitionEnd=function(e){h.animating=!1,h.setWrapperTransition(0),"undefined"==typeof e&&(e=!0),h.lazy&&h.lazy.onTransitionEnd(),e&&(h.params.onTransitionEnd&&h.params.onTransitionEnd(h),h.params.onSlideChangeEnd&&h.activeIndex!==h.previousIndex&&h.params.onSlideChangeEnd(h))},h.slideNext=function(e,a,t){if(h.params.loop){if(h.animating)return!1;h.fixLoop();{h.container[0].clientLeft}return h.slideTo(h.activeIndex+h.params.slidesPerGroup,a,e,t)}return h.slideTo(h.activeIndex+h.params.slidesPerGroup,a,e,t)},h._slideNext=function(e){return h.slideNext(!0,e,!0)},h.slidePrev=function(e,a,t){if(h.params.loop){if(h.animating)return!1;h.fixLoop();{h.container[0].clientLeft}return h.slideTo(h.activeIndex-1,a,e,t)}return h.slideTo(h.activeIndex-1,a,e,t)},h._slidePrev=function(e){return h.slidePrev(!0,e,!0)},h.slideReset=function(e,a){return h.slideTo(h.activeIndex,a,e)},h.setWrapperTransition=function(e,a){h.wrapper.transition(e),h.params.onSetTransition&&h.params.onSetTransition(h,e),"slide"!==h.params.effect&&h.effects[h.params.effect]&&h.effects[h.params.effect].setTransition(e),h.params.parallax&&h.parallax&&h.parallax.setTransition(e),h.params.scrollbar&&h.scrollbar&&h.scrollbar.setTransition(e),h.params.control&&h.controller&&h.controller.setTransition(e,a)},h.setWrapperTranslate=function(e,a,t){var s=0,i=0,n=0;r()?s=h.rtl?-e:e:i=e,h.wrapper.transform(h.support.transforms3d?"translate3d("+s+"px, "+i+"px, "+n+"px)":"translate("+s+"px, "+i+"px)"),h.translate=r()?s:i,a&&h.updateActiveIndex(),"slide"!==h.params.effect&&h.effects[h.params.effect]&&h.effects[h.params.effect].setTranslate(h.translate),h.params.parallax&&h.parallax&&h.parallax.setTranslate(h.translate),h.params.scrollbar&&h.scrollbar&&h.scrollbar.setTranslate(h.translate),h.params.control&&h.controller&&h.controller.setTranslate(h.translate,t),h.params.hashnav&&h.hashnav&&h.hashnav.setHash(),h.params.onSetTranslate&&h.params.onSetTranslate(h,h.translate)},h.getTranslate=function(e,a){var t,r,s,i;return"undefined"==typeof a&&(a="x"),s=window.getComputedStyle(e,null),window.WebKitCSSMatrix?i=new WebKitCSSMatrix("none"===s.webkitTransform?"":s.webkitTransform):(i=s.MozTransform||s.OTransform||s.MsTransform||s.msTransform||s.transform||s.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=i.toString().split(",")),"x"===a&&(r=window.WebKitCSSMatrix?i.m41:parseFloat(16===t.length?t[12]:t[4])),"y"===a&&(r=window.WebKitCSSMatrix?i.m42:parseFloat(16===t.length?t[13]:t[5])),h.rtl&&r&&(r=-r),r||0},h.getWrapperTranslate=function(e){return"undefined"==typeof e&&(e=r()?"x":"y"),h.getTranslate(h.wrapper[0],e)},h.observers=[],h.initObservers=function(){if(h.params.observeParents)for(var e=h.container.parents(),a=0;a<e.length;a++)n(e[a]);n(h.container[0],{childList:!1}),n(h.wrapper[0],{attributes:!1})},h.disconnectObservers=function(){for(var e=0;e<h.observers.length;e++)h.observers[e].disconnect();h.observers=[]},h.createLoop=function(){h.wrapper.children("."+h.params.slideClass+"."+h.params.slideDuplicateClass).remove();var e=h.wrapper.children("."+h.params.slideClass);h.loopedSlides=parseInt(h.params.loopedSlides||h.params.slidesPerView,10),h.loopedSlides=h.loopedSlides+h.params.loopAdditionalSlides,h.loopedSlides>e.length&&(h.loopedSlides=e.length);var a,t=[],r=[];for(e.each(function(a,s){var i=f(this);a<h.loopedSlides&&r.push(s),a<e.length&&a>=e.length-h.loopedSlides&&t.push(s),i.attr("data-swiper-slide-index",a)}),a=0;a<r.length;a++)h.wrapper.append(f(r[a].cloneNode(!0)).addClass(h.params.slideDuplicateClass));for(a=t.length-1;a>=0;a--)h.wrapper.prepend(f(t[a].cloneNode(!0)).addClass(h.params.slideDuplicateClass))},h.destroyLoop=function(){h.wrapper.children("."+h.params.slideClass+"."+h.params.slideDuplicateClass).remove()},h.fixLoop=function(){var e;h.activeIndex<h.loopedSlides?(e=h.slides.length-3*h.loopedSlides+h.activeIndex,e+=h.loopedSlides,h.slideTo(e,0,!1,!0)):("auto"===h.params.slidesPerView&&h.activeIndex>=2*h.loopedSlides||h.activeIndex>h.slides.length-2*h.params.slidesPerView)&&(e=-h.slides.length+h.activeIndex+h.loopedSlides,e+=h.loopedSlides,h.slideTo(e,0,!1,!0))},h.appendSlide=function(e){if(h.params.loop&&h.destroyLoop(),"object"==typeof e&&e.length)for(var a=0;a<e.length;a++)e[a]&&h.wrapper.append(e[a]);
else h.wrapper.append(e);h.params.loop&&h.createLoop(),h.params.observer&&h.support.observer||h.update(!0)},h.prependSlide=function(e){h.params.loop&&h.destroyLoop();var a=h.activeIndex+1;if("object"==typeof e&&e.length){for(var t=0;t<e.length;t++)e[t]&&h.wrapper.prepend(e[t]);a=h.activeIndex+e.length}else h.wrapper.prepend(e);h.params.loop&&h.createLoop(),h.params.observer&&h.support.observer||h.update(!0),h.slideTo(a,0,!1)},h.removeSlide=function(e){h.params.loop&&h.destroyLoop();var a,t=h.activeIndex;if("object"==typeof e&&e.length){for(var r=0;r<e.length;r++)a=e[r],h.slides[a]&&h.slides.eq(a).remove(),t>a&&t--;t=Math.max(t,0)}else a=e,h.slides[a]&&h.slides.eq(a).remove(),t>a&&t--,t=Math.max(t,0);h.params.observer&&h.support.observer||h.update(!0),h.slideTo(t,0,!1)},h.removeAllSlides=function(){for(var e=[],a=0;a<h.slides.length;a++)e.push(a);h.removeSlide(e)},h.effects={fade:{setTranslate:function(){for(var e=0;e<h.slides.length;e++){var a=h.slides.eq(e),t=a[0].swiperSlideOffset,s=-t-h.translate,i=0;r()||(i=s,s=0);var n=h.params.fade.crossFade?Math.max(1-Math.abs(a[0].progress),0):1+Math.min(Math.max(a[0].progress,-1),0);a.css({opacity:n}).transform("translate3d("+s+"px, "+i+"px, 0px)")}},setTransition:function(e){h.slides.transition(e)}},cube:{setTranslate:function(){var e,a=0;h.params.cube.shadow&&(r()?(e=h.wrapper.find(".swiper-cube-shadow"),0===e.length&&(e=f('<div class="swiper-cube-shadow"></div>'),h.wrapper.append(e)),e.css({height:h.width+"px"})):(e=h.container.find(".swiper-cube-shadow"),0===e.length&&(e=f('<div class="swiper-cube-shadow"></div>'),h.container.append(e))));for(var t=0;t<h.slides.length;t++){var s=h.slides.eq(t),i=90*t,n=Math.floor(i/360);h.rtl&&(i=-i,n=Math.floor(-i/360));var o=Math.max(Math.min(s[0].progress,1),-1),l=0,d=0,p=0;t%4===0?(l=4*-n*h.size,p=0):(t-1)%4===0?(l=0,p=4*-n*h.size):(t-2)%4===0?(l=h.size+4*n*h.size,p=h.size):(t-3)%4===0&&(l=-h.size,p=3*h.size+4*h.size*n),h.rtl&&(l=-l),r()||(d=l,l=0);var u="rotateX("+(r()?0:-i)+"deg) rotateY("+(r()?i:0)+"deg) translate3d("+l+"px, "+d+"px, "+p+"px)";if(1>=o&&o>-1&&(a=90*t+90*o,h.rtl&&(a=90*-t-90*o)),s.transform(u),h.params.cube.slideShadows){var c=s.find(r()?".swiper-slide-shadow-left":".swiper-slide-shadow-top"),m=s.find(r()?".swiper-slide-shadow-right":".swiper-slide-shadow-bottom");0===c.length&&(c=f('<div class="swiper-slide-shadow-'+(r()?"left":"top")+'"></div>'),s.append(c)),0===m.length&&(m=f('<div class="swiper-slide-shadow-'+(r()?"right":"bottom")+'"></div>'),s.append(m));{s[0].progress}c.length&&(c[0].style.opacity=-s[0].progress),m.length&&(m[0].style.opacity=s[0].progress)}}if(h.wrapper.css({"-webkit-transform-origin":"50% 50% -"+h.size/2+"px","-moz-transform-origin":"50% 50% -"+h.size/2+"px","-ms-transform-origin":"50% 50% -"+h.size/2+"px","transform-origin":"50% 50% -"+h.size/2+"px"}),h.params.cube.shadow)if(r())e.transform("translate3d(0px, "+(h.width/2+h.params.cube.shadowOffset)+"px, "+-h.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+h.params.cube.shadowScale+")");else{var g=Math.abs(a)-90*Math.floor(Math.abs(a)/90),v=1.5-(Math.sin(2*g*Math.PI/360)/2+Math.cos(2*g*Math.PI/360)/2),w=h.params.cube.shadowScale,T=h.params.cube.shadowScale/v,b=h.params.cube.shadowOffset;e.transform("scale3d("+w+", 1, "+T+") translate3d(0px, "+(h.height/2+b)+"px, "+-h.height/2/T+"px) rotateX(-90deg)")}var x=h.isSafari||h.isUiWebView?-h.size/2:0;h.wrapper.transform("translate3d(0px,0,"+x+"px) rotateX("+(r()?0:a)+"deg) rotateY("+(r()?-a:0)+"deg)")},setTransition:function(e){h.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),h.params.cube.shadow&&!r()&&h.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var e=h.translate,a=r()?-e+h.width/2:-e+h.height/2,t=r()?h.params.coverflow.rotate:-h.params.coverflow.rotate,s=h.params.coverflow.depth,i=0,n=h.slides.length;n>i;i++){var o=h.slides.eq(i),l=h.slidesSizesGrid[i],d=o[0].swiperSlideOffset,p=(a-d-l/2)/l*h.params.coverflow.modifier,u=r()?t*p:0,c=r()?0:t*p,m=-s*Math.abs(p),g=r()?0:h.params.coverflow.stretch*p,v=r()?h.params.coverflow.stretch*p:0;Math.abs(v)<.001&&(v=0),Math.abs(g)<.001&&(g=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0),Math.abs(c)<.001&&(c=0);var w="translate3d("+v+"px,"+g+"px,"+m+"px)  rotateX("+c+"deg) rotateY("+u+"deg)";if(o.transform(w),o[0].style.zIndex=-Math.abs(Math.round(p))+1,h.params.coverflow.slideShadows){var T=o.find(r()?".swiper-slide-shadow-left":".swiper-slide-shadow-top"),b=o.find(r()?".swiper-slide-shadow-right":".swiper-slide-shadow-bottom");0===T.length&&(T=f('<div class="swiper-slide-shadow-'+(r()?"left":"top")+'"></div>'),o.append(T)),0===b.length&&(b=f('<div class="swiper-slide-shadow-'+(r()?"right":"bottom")+'"></div>'),o.append(b)),T.length&&(T[0].style.opacity=p>0?p:0),b.length&&(b[0].style.opacity=-p>0?-p:0)}}if(window.navigator.pointerEnabled||window.navigator.msPointerEnabled){var x=h.wrapper.style;x.perspectiveOrigin=a+"px 50%"}},setTransition:function(e){h.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},h.lazy={initialImageLoaded:!1,loadImageInSlide:function(e){if("undefined"!=typeof e&&0!==h.slides.length){var a=h.slides.eq(e),t=a.find("img.swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");0!==t.length&&t.each(function(){var e=f(this);e.addClass("swiper-lazy-loading");var t=e.attr("data-src");h.loadImage(e[0],t,!1,function(){e.attr("src",t),e.removeAttr("data-src"),e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"),a.find(".swiper-lazy-preloader, .preloader").remove(),h.params.onLazyImageLoaded&&h.params.onLazyImageLoaded(h,a[0],e[0])}),h.params.onLazyImageLoad&&h.params.onLazyImageLoad(h,a[0],e[0])})}},load:function(){if(h.params.watchSlidesVisibility)h.wrapper.children("."+h.params.slideVisibleClass).each(function(){h.lazy.loadImageInSlide(f(this).index())});else if(h.params.slidesPerView>1)for(var e=h.activeIndex;e<h.activeIndex+h.params.slidesPerView;e++)h.slides[e]&&h.lazy.loadImageInSlide(e);else h.lazy.loadImageInSlide(h.activeIndex);if(h.params.lazyLoadingInPrevNext){var a=h.wrapper.children("."+h.params.slideNextClass);a.length>0&&h.lazy.loadImageInSlide(a.index());var t=h.wrapper.children("."+h.params.slidePrevClass);t.length>0&&h.loadImageInSlide(t.index())}},onTransitionStart:function(){h.params.lazyLoading&&(h.params.lazyLoadingOnTransitionStart||!h.params.lazyLoadingOnTransitionStart&&!h.lazy.initialImageLoaded)&&(h.lazy.initialImageLoaded=!0,h.lazy.load())},onTransitionEnd:function(){h.params.lazyLoading&&!h.params.lazyLoadingOnTransitionStart&&h.lazy.load()}},h.scrollbar={set:function(){if(h.params.scrollbar){var e=h.scrollbar;e.track=f(h.params.scrollbar),e.drag=e.track.find(".swiper-scrollbar-drag"),0===e.drag.length&&(e.drag=f('<div class="swiper-scrollbar-drag"></div>'),e.track.append(e.drag)),e.drag[0].style.width="",e.drag[0].style.height="",e.trackSize=r()?e.track[0].offsetWidth:e.track[0].offsetHeight,e.divider=h.size/h.virtualWidth,e.moveDivider=e.divider*(e.trackSize/h.size),e.dragSize=e.trackSize*e.divider,r()?e.drag[0].style.width=e.dragSize+"px":e.drag[0].style.height=e.dragSize+"px",e.track[0].style.display=e.divider>=1?"none":"",h.params.scrollbarHide&&(e.track[0].style.opacity=0)}},setTranslate:function(){if(h.params.scrollbar){var e,a=h.scrollbar,t=(h.translate||0,a.dragSize);e=(a.trackSize-a.dragSize)*h.progress,h.rtl&&r()?(e=-e,e>0?(t=a.dragSize-e,e=0):-e+a.dragSize>a.trackSize&&(t=a.trackSize+e)):0>e?(t=a.dragSize+e,e=0):e+a.dragSize>a.trackSize&&(t=a.trackSize-e),r()?(a.drag.transform("translate3d("+e+"px, 0, 0)"),a.drag[0].style.width=t+"px"):(a.drag.transform("translate3d(0px, "+e+"px, 0)"),a.drag[0].style.height=t+"px"),h.params.scrollbarHide&&(clearTimeout(a.timeout),a.track[0].style.opacity=1,a.timeout=setTimeout(function(){a.track[0].style.opacity=0,a.track.transition(400)},1e3))}},setTransition:function(e){h.params.scrollbar&&h.scrollbar.drag.transition(e)}},h.controller={setTranslate:function(e,a){var t,r,s=h.params.control;if(h.isArray(s))for(var i=0;i<s.length;i++)s[i]!==a&&s[i]instanceof Swiper&&(e=s[i].rtl&&"horizontal"===s[i].params.direction?-h.translate:h.translate,t=(s[i].maxTranslate()-s[i].minTranslate())/(h.maxTranslate()-h.minTranslate()),r=(e-h.minTranslate())*t+s[i].minTranslate(),h.params.controlInverse&&(r=s[i].maxTranslate()-r),s[i].updateProgress(r),s[i].setWrapperTranslate(r,!1,h),s[i].updateActiveIndex());else s instanceof Swiper&&a!==s&&(e=s.rtl&&"horizontal"===s.params.direction?-h.translate:h.translate,t=(s.maxTranslate()-s.minTranslate())/(h.maxTranslate()-h.minTranslate()),r=(e-h.minTranslate())*t+s.minTranslate(),h.params.controlInverse&&(r=s.maxTranslate()-r),s.updateProgress(r),s.setWrapperTranslate(r,!1,h),s.updateActiveIndex())},setTransition:function(e,a){var t=h.params.control;if(h.isArray(t))for(var r=0;r<t.length;r++)t[r]!==a&&t[r]instanceof Swiper&&t[r].setWrapperTransition(e,h);else t instanceof Swiper&&a!==t&&t.setWrapperTransition(e,h)}},h.hashnav={init:function(){if(h.params.hashnav){h.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var a=0,t=0,r=h.slides.length;r>t;t++){var s=h.slides.eq(t),i=s.attr("data-hash");if(i===e&&!s.hasClass(h.params.slideDuplicateClass)){var n=s.index();h.slideTo(n,a,h.params.runCallbacksOnInit,!0)}}}},setHash:function(){h.hashnav.initialized&&h.params.hashnav&&(document.location.hash=h.slides.eq(h.activeIndex).attr("data-hash")||"")}},h.disableKeyboardControl=function(){f(document).off("keydown",o)},h.enableKeyboardControl=function(){f(document).on("keydown",o)},h._wheelEvent=!1,h._lastWheelScrollTime=(new Date).getTime(),h.params.mousewheelControl){if(void 0!==document.onmousewheel&&(h._wheelEvent="mousewheel"),!h._wheelEvent)try{new WheelEvent("wheel"),h._wheelEvent="wheel"}catch(I){}h._wheelEvent||(h._wheelEvent="DOMMouseScroll")}return h.disableMousewheelControl=function(){return h._wheelEvent?(h.container.off(h._wheelEvent,l),!0):!1},h.enableMousewheelControl=function(){return h._wheelEvent?(h.container.on(h._wheelEvent,l),!0):!1},h.parallax={setTranslate:function(){h.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){d(this,h.progress)}),h.slides.each(function(){var e=f(this);e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var a=Math.min(Math.max(e[0].progress,-1),1);d(this,a)})})},setTransition:function(e){"undefined"==typeof e&&(e=h.params.speed),h.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var a=f(this),t=parseInt(a.attr("data-swiper-parallax-duration"),10)||e;0===e&&(t=0),a.transition(t)})}},h.init=function(){h.params.loop&&h.createLoop(),h.updateContainerSize(),h.updateSlidesSize(),h.updatePagination(),h.params.scrollbar&&h.scrollbar&&h.scrollbar.set(),"slide"!==h.params.effect&&h.effects[h.params.effect]&&(h.params.loop||h.updateProgress(),h.effects[h.params.effect].setTranslate()),h.params.loop?h.slideTo(h.params.initialSlide+h.loopedSlides,0,h.params.runCallbacksOnInit):(h.slideTo(h.params.initialSlide,0,h.params.runCallbacksOnInit),0===h.params.initialSlide&&(h.parallax&&h.params.parallax&&h.parallax.setTranslate(),h.lazy&&h.params.lazyLoading&&h.lazy.load())),h.attachEvents(),h.params.observer&&h.support.observer&&h.initObservers(),h.params.preloadImages&&!h.params.lazyLoading&&h.preloadImages(),h.params.autoplay&&h.startAutoplay(),h.params.keyboardControl&&h.enableKeyboardControl&&h.enableKeyboardControl(),h.params.mousewheelControl&&h.enableMousewheelControl&&h.enableMousewheelControl(),h.params.hashnav&&h.hashnav&&h.hashnav.init(),h.params.onInit&&h.params.onInit(h)},h.destroy=function(e){h.detachEvents(),h.disconnectObservers(),h.params.keyboardControl&&h.disableKeyboardControl&&h.disableKeyboardControl(),h.params.mousewheelControl&&h.disableMousewheelControl&&h.disableMousewheelControl(),h.params.onDestroy&&h.params.onDestroy(),e!==!1&&(h=null)},h.init(),h}},Swiper.prototype={isSafari:function(){var e=navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled},device:function(){var e=navigator.userAgent,a=e.match(/(Android);?[\s\/]+([\d.]+)?/),t=e.match(/(iPad).*OS\s([\d_]+)/),r=(e.match(/(iPod)(.*OS\s([\d_]+))?/),!t&&e.match(/(iPhone\sOS)\s([\d_]+)/));return{ios:t||r||t,android:a}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,a="WebkitBox msFlexbox MsFlexbox WebkitFlex MozBox flex".split(" "),t=0;t<a.length;t++)if(a[t]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}()}};for(var a=(function(){var e=function(e){var a=this,t=0;for(t=0;t<e.length;t++)a[t]=e[t];return a.length=e.length,this},a=function(a,t){var r=[],s=0;if(a&&!t&&a instanceof e)return a;if(a)if("string"==typeof a){var i,n,o=a.trim();if(o.indexOf("<")>=0&&o.indexOf(">")>=0){var l="div";for(0===o.indexOf("<li")&&(l="ul"),0===o.indexOf("<tr")&&(l="tbody"),(0===o.indexOf("<td")||0===o.indexOf("<th"))&&(l="tr"),0===o.indexOf("<tbody")&&(l="table"),0===o.indexOf("<option")&&(l="select"),n=document.createElement(l),n.innerHTML=a,s=0;s<n.childNodes.length;s++)r.push(n.childNodes[s])}else for(i=t||"#"!==a[0]||a.match(/[ .<>:~]/)?(t||document).querySelectorAll(a):[document.getElementById(a.split("#")[1])],s=0;s<i.length;s++)i[s]&&r.push(i[s])}else if(a.nodeType||a===window||a===document)r.push(a);else if(a.length>0&&a[0].nodeType)for(s=0;s<a.length;s++)r.push(a[s]);return new e(r)};return e.prototype={addClass:function(e){if("undefined"==typeof e)return this;for(var a=e.split(" "),t=0;t<a.length;t++)for(var r=0;r<this.length;r++)this[r].classList.add(a[t]);return this},removeClass:function(e){for(var a=e.split(" "),t=0;t<a.length;t++)for(var r=0;r<this.length;r++)this[r].classList.remove(a[t]);return this},hasClass:function(e){return this[0]?this[0].classList.contains(e):!1},toggleClass:function(e){for(var a=e.split(" "),t=0;t<a.length;t++)for(var r=0;r<this.length;r++)this[r].classList.toggle(a[t]);return this},attr:function(e,a){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var t=0;t<this.length;t++)if(2===arguments.length)this[t].setAttribute(e,a);else for(var r in e)this[t][r]=e[r],this[t].setAttribute(r,e[r]);return this},removeAttr:function(e){for(var a=0;a<this.length;a++)this[a].removeAttribute(e)},data:function(e,a){if("undefined"==typeof a){if(this[0]){var t=this[0].getAttribute("data-"+e);return t?t:this[0].dom7ElementDataStorage&&e in this[0].dom7ElementDataStorage?this[0].dom7ElementDataStorage[e]:void 0}return void 0}for(var r=0;r<this.length;r++){var s=this[r];s.dom7ElementDataStorage||(s.dom7ElementDataStorage={}),s.dom7ElementDataStorage[e]=a}return this},transform:function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this},on:function(e,t,r,s){function i(e){var s=e.target;if(a(s).is(t))r.call(s,e);else for(var i=a(s).parents(),n=0;n<i.length;n++)a(i[n]).is(t)&&r.call(i[n],e)}var n,o,l=e.split(" ");for(n=0;n<this.length;n++)if("function"==typeof t||t===!1)for("function"==typeof t&&(r=arguments[1],s=arguments[2]||!1),o=0;o<l.length;o++)this[n].addEventListener(l[o],r,s);else for(o=0;o<l.length;o++)this[n].dom7LiveListeners||(this[n].dom7LiveListeners=[]),this[n].dom7LiveListeners.push({listener:r,liveListener:i}),this[n].addEventListener(l[o],i,s);return this},off:function(e,a,t,r){for(var s=e.split(" "),i=0;i<s.length;i++)for(var n=0;n<this.length;n++)if("function"==typeof a||a===!1)"function"==typeof a&&(t=arguments[1],r=arguments[2]||!1),this[n].removeEventListener(s[i],t,r);else if(this[n].dom7LiveListeners)for(var o=0;o<this[n].dom7LiveListeners.length;o++)this[n].dom7LiveListeners[o].listener===t&&this[n].removeEventListener(s[i],this[n].dom7LiveListeners[o].liveListener,r);return this},once:function(e,a,t,r){function s(n){t(n),i.off(e,a,s,r)}var i=this;"function"==typeof a&&(a=!1,t=arguments[1],r=arguments[2]),i.on(e,a,s,r)},trigger:function(e,a){for(var t=0;t<this.length;t++){var r;try{r=new CustomEvent(e,{detail:a,bubbles:!0,cancelable:!0})}catch(s){r=document.createEvent("Event"),r.initEvent(e,!0,!0),r.detail=a}this[t].dispatchEvent(r)}return this},transitionEnd:function(e){function a(i){if(i.target===this)for(e.call(this,i),t=0;t<r.length;t++)s.off(r[t],a)}var t,r=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=this;if(e)for(t=0;t<r.length;t++)s.on(r[t],a);return this},width:function(){return this[0]===window?window.innerWidth:this.length>0?parseFloat(this.css("width")):null},outerWidth:function(e){return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null},height:function(){return this[0]===window?window.innerHeight:this.length>0?parseFloat(this.css("height")):null},outerHeight:function(e){return this.length>0?e?this[0].offsetHeight+parseFloat(this.css("margin-top"))+parseFloat(this.css("margin-bottom")):this[0].offsetHeight:null},offset:function(){if(this.length>0){var e=this[0],a=e.getBoundingClientRect(),t=document.body,r=e.clientTop||t.clientTop||0,s=e.clientLeft||t.clientLeft||0,i=window.pageYOffset||e.scrollTop,n=window.pageXOffset||e.scrollLeft;return{top:a.top+i-r,left:a.left+n-s}}return null},css:function(e,a){var t;if(1===arguments.length){if("string"!=typeof e){for(t=0;t<this.length;t++)for(var r in e)this[t].style[r]=e[r];return this}if(this[0])return window.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(t=0;t<this.length;t++)this[t].style[e]=a;return this}return this},each:function(e){for(var a=0;a<this.length;a++)e.call(this[a],a,this[a]);return this},html:function(e){if("undefined"==typeof e)return this[0]?this[0].innerHTML:void 0;for(var a=0;a<this.length;a++)this[a].innerHTML=e;return this},is:function(t){if(!this[0])return!1;var r,s;if("string"==typeof t){var i=this[0];if(i===document)return t===document;if(i===window)return t===window;if(i.matches)return i.matches(t);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(t);if(i.mozMatchesSelector)return i.mozMatchesSelector(t);if(i.msMatchesSelector)return i.msMatchesSelector(t);for(r=a(t),s=0;s<r.length;s++)if(r[s]===this[0])return!0;return!1}if(t===document)return this[0]===document;if(t===window)return this[0]===window;if(t.nodeType||t instanceof e){for(r=t.nodeType?[t]:t,s=0;s<r.length;s++)if(r[s]===this[0])return!0;return!1}return!1},index:function(){if(this[0]){for(var e=this[0],a=0;null!==(e=e.previousSibling);)1===e.nodeType&&a++;return a}return void 0},eq:function(a){if("undefined"==typeof a)return this;var t,r=this.length;return a>r-1?new e([]):0>a?(t=r+a,new e(0>t?[]:[this[t]])):new e([this[a]])},append:function(a){var t,r;for(t=0;t<this.length;t++)if("string"==typeof a){var s=document.createElement("div");for(s.innerHTML=a;s.firstChild;)this[t].appendChild(s.firstChild)}else if(a instanceof e)for(r=0;r<a.length;r++)this[t].appendChild(a[r]);else this[t].appendChild(a);return this},prepend:function(a){var t,r;for(t=0;t<this.length;t++)if("string"==typeof a){var s=document.createElement("div");for(s.innerHTML=a,r=s.childNodes.length-1;r>=0;r--)this[t].insertBefore(s.childNodes[r],this[t].childNodes[0])}else if(a instanceof e)for(r=0;r<a.length;r++)this[t].insertBefore(a[r],this[t].childNodes[0]);else this[t].insertBefore(a,this[t].childNodes[0]);return this},insertBefore:function(e){for(var t=a(e),r=0;r<this.length;r++)if(1===t.length)t[0].parentNode.insertBefore(this[r],t[0]);else if(t.length>1)for(var s=0;s<t.length;s++)t[s].parentNode.insertBefore(this[r].cloneNode(!0),t[s])},insertAfter:function(e){for(var t=a(e),r=0;r<this.length;r++)if(1===t.length)t[0].parentNode.insertBefore(this[r],t[0].nextSibling);else if(t.length>1)for(var s=0;s<t.length;s++)t[s].parentNode.insertBefore(this[r].cloneNode(!0),t[s].nextSibling)},next:function(t){return new e(this.length>0?t?this[0].nextElementSibling&&a(this[0].nextElementSibling).is(t)?[this[0].nextElementSibling]:[]:this[0].nextElementSibling?[this[0].nextElementSibling]:[]:[])},nextAll:function(t){var r=[],s=this[0];if(!s)return new e([]);for(;s.nextElementSibling;){var i=s.nextElementSibling;t?a(i).is(t)&&r.push(i):r.push(i),s=i}return new e(r)},prev:function(t){return new e(this.length>0?t?this[0].previousElementSibling&&a(this[0].previousElementSibling).is(t)?[this[0].previousElementSibling]:[]:this[0].previousElementSibling?[this[0].previousElementSibling]:[]:[])},prevAll:function(t){var r=[],s=this[0];if(!s)return new e([]);for(;s.previousElementSibling;){var i=s.previousElementSibling;t?a(i).is(t)&&r.push(i):r.push(i),s=i}return new e(r)},parent:function(e){for(var t=[],r=0;r<this.length;r++)e?a(this[r].parentNode).is(e)&&t.push(this[r].parentNode):t.push(this[r].parentNode);return a(a.unique(t))},parents:function(e){for(var t=[],r=0;r<this.length;r++)for(var s=this[r].parentNode;s;)e?a(s).is(e)&&t.push(s):t.push(s),s=s.parentNode;return a(a.unique(t))},find:function(a){for(var t=[],r=0;r<this.length;r++)for(var s=this[r].querySelectorAll(a),i=0;i<s.length;i++)t.push(s[i]);return new e(t)},children:function(t){for(var r=[],s=0;s<this.length;s++)for(var i=this[s].childNodes,n=0;n<i.length;n++)t?1===i[n].nodeType&&a(i[n]).is(t)&&r.push(i[n]):1===i[n].nodeType&&r.push(i[n]);return new e(a.unique(r))},remove:function(){for(var e=0;e<this.length;e++)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){var e,t,r=this;for(e=0;e<arguments.length;e++){var s=a(arguments[e]);for(t=0;t<s.length;t++)r[r.length]=s[t],r.length++}return r}},a.fn=e.prototype,a.unique=function(e){for(var a=[],t=0;t<e.length;t++)-1===a.indexOf(e[t])&&a.push(e[t]);return a},a}()),t=["jQuery","Zepto","Dom7"],r=0;r<t.length;r++)window[t[r]]&&e(window[t[r]]);var s;s="undefined"==typeof a?window.Dom7||window.Zepto||window.jQuery:a,s&&("transitionEnd"in s.fn||(s.fn.transitionEnd=function(e){function a(i){if(i.target===this)for(e.call(this,i),t=0;t<r.length;t++)s.off(r[t],a)}var t,r=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=this;if(e)for(t=0;t<r.length;t++)s.on(r[t],a);return this}),"transform"in s.fn||(s.fn.transform=function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this}),"transition"in s.fn||(s.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this}))}(),"undefined"!=typeof module?module.exports=Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return Swiper});
//# sourceMappingURL=maps/swiper.min.js.map
$.fn.dataTablePage = function(options){
    options.page -= 0;
    options.page = options.page || 1;
    options.allPage -= 0;
    return this.each(function(){
        if(!options.allPage){
            return $(this).hide();
        }
        $(this).show();
        $(this).html('<ul class="pagination clearfix"></ul>');
        var $content = $(this).find('ul');
        $content.append('<span class="pull-left ml-10 height-30 lh-30 mr-25">共'+options.allNumber+'条数据,第'+options.page+'/'+options.allPage+'页</span>');
        var $fist = $('<li class="disabled">')
            .append('<a href="#" ><span >first</span></a>').attr('num',1);
        var $last = $('<li class="disabled">')
            .append('<a href="#" ><span >last</span></a>').attr('num',options.allPage);
        var $prev = $('<li class="disabled">')
            .append('<a href="#" ><span >prev</span></a>').attr('num',options.page - 1);
        var $next = $('<li class="disabled">')
            .append('<a href="#" ><span >next</span></a>').attr('num',options.page + 1);
        $content.append($fist)
            .append($prev);
        var min=1,max=options.allPage;
        if(options.allPage > 5){
            max = 5;
            if(options.page > 3){
                $content.append($('<li class="disabled"><a href="#">...</a></li>'));
                max = Math.min(options.allPage , options.page + 2);
            }
            if(options.allPage - 5 < options.page){
                max = options.allPage;
            }
            min = max - 4;
        }
        for(var i = min ; i <= max ; i ++ ){
            var $number = $('<li></li>').html('<a href="#">'+i+'</a>').attr('num' , i);
            $content.append($number);
            if(i == options.page){
                $number.addClass('active');
            }
        }
        if(max < options.allPage){
            $content.append($('<li class="disabled"><a href="#">...</a></li>'));
        }
        $content.append($next)
            .append($last);
        if(options.page > 1){
            $fist.removeClass('disabled');
            $prev.removeClass('disabled');
        }
        if(options.page < options.allPage){
            $next.removeClass('disabled');
            $last.removeClass('disabled');
        }
        $content.find('[num]').click(function(){
            if($(this).hasClass('active') || $(this).hasClass('disabled'))return false;
            if(options.done)options.done($(this).attr('num') - 0);
            return false;
        });
    })
};
$.showDataPage = function(options){
    var autoData,totalElements,totalPages,showData;
    var $table = options.showTable ||　$('.show-data-table');
    var $searchForm = options.searchForm ||$('.search-form');
    var autoPage = options.autoPage || 0;
    var usePageSize = options.limit || resJson.usePageSize || 20;
    options.getSearchData = options.getSearchData || function(){return $searchForm.__serializeJSON()};
    $searchForm.submit(function(){
        doSearch();
        return false;
    });
    function doSearch(page){
        if(options.localStorage){
            page = 1;
        }
        else{
            page = page == null?autoPage : page+(autoPage?0:-1);
        }
        var data = $.extend({},options.data ,options.getSearchData());
        data.page = page;
        data.pageSize = usePageSize;
        options.searchBefore && options.searchBefore();
        $table.find('.data-list').remove();
        $table.find('.show-null-message').remove();
        $.get(options.url , data , function(a){
            autoData = a.data.content || a.data;
            totalElements = a.data.totalElements;
            totalPages = a.data.totalPages;
            setPage(page , a.data);
        });
    }
    var $page;
    function setPage(page , resData){
        if(options.localStorage){
            page -= 1;
            page = page || 0;
            totalElements = autoData.length;
            totalPages = Math.ceil(autoData.length / usePageSize);
            showData = autoData.slice(page * usePageSize , (page + 1) * usePageSize);
        }else{
            if(totalPages == null)totalPages = Math.ceil(totalElements / usePageSize);
            showData = autoData;
        }
        $.each(showData , function(i , o){
            $table.append(options.createTr(i , o));
        });
        if(!options.notPage){
            if(totalElements){
                $table.find('.show-null-message').remove();
                if(!$page){
                    $table.after($page = $('<nav aria-label="Page navigation">').addClass('table-page mt-30'));
                }
                $page.show();
                $page.dataTablePage({
                    page:autoPage?page:page+1,
                    allNumber:totalElements,
                    allPage:totalPages,
                    done:options.localStorage?setPage:doSearch
                });
            }else{
                $table.append('<div class="show-null-message color-999 text-center pt-30">暂无记录</div>')
                if($page)$page.hide();
            }
        }
        if(options.done)options.done(autoData , showData , resData);
    }
    if(!options.notAuthSearch)doSearch();
    return {
        doSearch:doSearch
    };
};
$(function(){
    $.uploadFile = function(file ,options,data, call){
        var formData = new FormData();
        if(!file.length){
            file = [file];
        }else{
            file = [].slice.call(file);
        }
        var imgMaxSize=0,videoMaxSize=0;
        file.forEach(function(a){
            if(a.type.indexOf('image') >=0 ){
                if(a.size > imgMaxSize){
                    imgMaxSize = a.size;
                }
            }else{
                videoMaxSize = a.size;
            }
        });
        if(imgMaxSize > 3 * 1024 * 1024 || videoMaxSize > 30 * 1024 * 1024){
            useCommon.toast('文件过大小限制（图片3M 视频30M）');
            return false;
        }
        if(file.length === 1)data.fileSize = file.map(function(a){return a.size}).join();
        file.forEach(function(f){
            console.log(f);
            formData.append(options.fileName || 'fileName' , f);
            formData.append('fileSizes' , f.size || 0);
        });
        formData.append('path' , options.type || 'memorial');
        data.fileFormat = data.fileFormat || 'img';
        for(var i in data){
            formData.append(i , data[i]);
        }
        $.ajax({
            url : options.url || '/file/upload',
            type : "POST",
            data : formData,
            dataType:"json",
            cache:false,
            processData : false,
            contentType : false,
            errorText:'上传失败',
            xhr:options.xhr,
            timeout:options.timeout || 60 * 1000,
            success:function(o){
                WY.loading(0);
                if(call)call(o);
            },
            error:function(o){
                console.log(o);
                WY.loading(0)
                if(call)call(o);
            }
        });
    };
    $.fn.showFileUpload = function(options){
        options = options || {};
        return this.each(function(){
            var $this = $(this);
            var showName = (options.showName|| $this.attr('show-name') || 'showName');
            var fileName = (options.fileName|| $this.attr('file-name') || 'fileName');
            $this.append($('<div class="img-content">'+
                '<div class="del-ico"></div>'+
                '<img src="" alt="" class="img-thumbnail">'+
                '</div>'))
                .append($('<input type="file" accept="'+(options.fileFormat=='video'?'video/mp4':'image/jpg,image/jpeg,image/png,image/gif')+'" class="upload-file" name="'+fileName+'">'))
                .append($('<input type="hidden" class="show-file-name" name="'+showName+'">'))
                .append($('<div class="add-ico text-center">+</div>'));
            $this.find(':file').change(function(){
                if($(this).val()){
                    $.uploadFile(this.files[0] , {
                        fileName:fileName,
                        type:options.type,
                        url:options.url
                    } ,options.data || {}, function(a){
                        if(a.code == 'SUCCESS'){
                            showUrl((a.result.path || a.result));
                        }else{
                            useCommon.toast(a.message || '上传失败');
                        }
                    });
                }{
                    clear();
                }
            });
            function showUrl(src){
                $this.find('.img-content').addClass('show');
                $this.find('.show-file-name').val(src);
                $this.find('img').attr('src' , useCommon.concatImgUrl(src));
            }
            $this.find('.del-ico').click(function(){
                clear();
            });
            function clear(){
                $this.find('.show-file-name').val('');
                $this.find('img').attr('src' , '');
                $this.find('.img-content').removeClass('show');
            }
            var showImg = $(this).attr('showImg');
            if(showImg){
                showUrl(showImg);
            }
        });
    };
});
WY.showMouseMove = function(options , handler){
    options = options || {};
    handler = handler || {};
    var $move = $(options.move);
    var $content = $(options.content);
    var width = $content.width();
    var height = $content.height();
    return $move.each(function(){
        var $move = $(this);
        var isMouseDown = false,pageY,pageX,autoTop,autoLeft;
        $move.on('mousedown' , function(e){
            $(this).css({
                cursor:'move'
            });
            isMouseDown = true;
            autoTop = parseFloat($move.css('marginTop'));
            autoLeft = parseFloat($move.css('marginLeft'));
            pageY = e.pageY;
            pageX = e.pageX;
            return false;
        });
        $move.on('mouseleave mouseup' , function(e){
            isMouseDown = false;
            $(this).css({
                cursor:'auto'
            });
            return false;
        });
        $move.on('mousemove' , function(e){
            if(isMouseDown){
                moveTo(autoTop + e.pageY-pageY , autoLeft + e.pageX-pageX);
            }
            return false;
        });
        function moveTo(marginTop , marginLeft){
            var maxWidth = $move.width();
            var maxHeight = $move.height();
            if(height >= maxHeight){
                if(marginTop < 0){
                    handler.moveTop && handler.moveTop($move);
                    marginTop = 0;
                }else if(marginTop > height - maxHeight){
                    handler.moveBottom && handler.moveBottom($move);
                    marginTop = height - maxHeight;
                }
            }else{
                if(marginTop > 0){
                    handler.moveTop && handler.moveTop($move);
                    marginTop = 0;
                }else if(marginTop < height - maxHeight){
                    handler.moveBottom && handler.moveBottom($move);
                    marginTop = height - maxHeight;
                }
            }
            if(width >= maxWidth){
                if(marginLeft < 0){
                    handler.moveLeft && handler.moveLeft($move);
                    marginLeft = 0;
                }else if(marginLeft > width - maxWidth){
                    handler.moveRight && handler.moveRight($move);
                    marginLeft = width - maxWidth;
                }
            }else{
                if(marginLeft > 0){
                    handler.moveLeft && handler.moveLeft($move);
                    marginLeft = 0;
                }else if(marginLeft < width - maxWidth){
                    handler.moveRight && handler.moveRight($move);
                    marginLeft = width - maxWidth;
                }
            }
            $move.css({
                marginTop:marginTop,
                marginLeft:marginLeft
            });
            handler.moveStep && handler.moveStep();
        }
    });



};
WY.bind('modal-handler-mouse-move' , function($ele , options){
    WY.showMouseMove({
        content:$ele,
        move:options.move || $ele.find('.move')
    },options);
});
WY.showCutImg = function(options , handler){
    options = options || {};
    handler = handler || {};
    var $cut = $(options.cut);
    var $auto = $(options.auto);
    function reset(){
        var marginLeft = parseFloat($cut.css('marginLeft'));
        var marginTop = parseFloat($cut.css('marginTop'));
        var autoMarginLeft = parseFloat($auto.css('marginLeft'));
        var autoMarginTop = parseFloat($auto.css('marginTop'));
        $cut.find('img').css({
            marginLeft:autoMarginLeft - marginLeft,
            marginTop:autoMarginTop - marginTop,
        });
    }
    handler.cutReset = reset;
};
WY.bind('modal-handler-cut-img' , function($ele , options){
    WY.showCutImg({
        content:$ele,
        cut:options.cut || $ele.find('.cut'),
        auto:options.cut || $ele.find('.auto-cut'),
    } , options);
});
WY.albumFile = function(options){
    var $addBtn = options.addBtn;
    var autoLength;
    var dataId = options.dataId;
    var $content = options.content;
    $content.find('.close-this-div-btn').click(function(){
        $content.remove();
    });
    $content.on('click','.delete-file-btn',function(){
        $.post('/user/album/file/del',{
            jsonStr:JSON.stringify([$(this).attr('code')])
        },function(a){
            if(a.code == 0){
                searchObject.doSearch(1);
            }else{
                useCommon.toast(a.message);
            }
        });
    });
    var searchObject = $.showDataPage({
        url:'/album/file/list',
        limit:3,
        autoPage:1,
        notPage:1,
        data:{
            dataId:dataId,
            type:options.type
        },
        showTable:options.content.find('.show-data-table'),
        createTr:function(i , o){
            var $item = $('<div class="data-list position-relative inline-block text-top">');
            if(o.fileFormat == 'img'){
                var $img = $('<img class="width-250 height-180 mb-10" src="'+(useCommon.concatImgUrl(o.filePath))+'">');
                $item.append($img);

            }else{
                var $video = $('<video controls="controls" class="width-250 height-180" src="'+(useCommon.concatImgUrl(o.filePath))+'">')
                $item.append($video);
            }
            if((i+1)%3)$item.addClass('mr-10');
            $item.append('<div code="'+o.fileId+'" class="color-red fz-20 position-absolute top-0 right-0 pt-10 pr-10 pl-10 pb-10 lh-20 cursor-pointer delete-file-btn">×</div>')
            return $item;
        },
        done:function(data){
            autoLength = data.length;
            if($addBtn){
                $addBtn.show();
                if(autoLength){
                    if(data[0].fileFormat  == 'video'){
                        //$addBtn.hide();
                        return;
                    }
                    else{
                        //$addBtn.filter('[add-type=video]').hide();
                    }
                }
                //if(options.type == 'album'){
                //    $addBtn.last().hide();
                //}
            }

        }
    });
    $addBtn.click(function(){
        var type = $(this).attr('add-type');
        var $file = $('<input type="file"  '+(type == 'img'?'accept="image/jpg,image/jpeg,image/png,image/gif" multiple="multiple"':'accept="video/mp4"')+'>');
        $file.hide().appendTo('body');
        $file[0].click();
        $file.change(function(){
            if($(this).val()){
                WY.loading(1);
                var $progressWindow;
                $.uploadFile(this.files,{
                    url:'/file/uploads',
                    type:'album/'+options.type,
                    fileName:'fileNames',
                    timeout:60 * 60 * 1000,
                    xhr:function(){
                        var xhr = $.ajaxSettings.xhr();
                        if(type == 'video'){
                            WY.loading(0);
                            $progressWindow = WY.xhrProgress(xhr);
                        }
                        return xhr;
                    }
                },{
                    fileFormat:type,
                } , function(a){
                    $file.remove();
                    $progressWindow && $progressWindow.hide();
                    if(a.code === 'SUCCESS'){
                        WY.loading(1);
                        $.post('/user/album/file/add',{
                            jsonStr:JSON.stringify({
                                dataId:dataId,
                                type:options.type,
                                files:a.result
                            })
                        },function(b){
                            WY.loading(0);
                            useCommon.toast(b.message);
                            if(b.code == 0){
                                searchObject.doSearch(1);
                            }
                        });
                    }else{
                        WY.loading(0);
                        useCommon.toast(a.message || '上传失败');
                    }
                });

            }
        });

    });
};
;(function(){
    var $progressWindow;
    WY.xhrProgress = function(xhr){
        $progressWindow = $progressWindow || $('.wy-progress-window');
        var $message = $progressWindow.find('.message');
        var startTime,total,loaded,lastLoad,lastTime;
        var totalSize,speed;
        xhr.upload.onloadstart  = function(event){
            console.log(event.type);
            startTime = lastTime = event.timeStamp;
            total = event.total;
            totalSize = reSize(total);
            loaded = event.loaded;
            lastLoad = event.loaded;
            $progressWindow.show();
            showMessage(1);
        };
        xhr.upload.onprogress = function(event){
            console.log(event.type);
            if(!total){
                total = event.total;
                totalSize = reSize(total);
            }
            speed = (event.loaded - lastLoad)*1000/(event.timeStamp - lastTime);
            lastTime = event.timeStamp;
            lastLoad = event.loaded;
            showMessage();
        };
        function reSize(size){
            if(size < 1024){
                return size + 'B';
            }
            if(size < 1024 * 1024){
                return (size / 1024).toFixed(2) + 'KB';
            }
            if(size < 1024 * 1024 * 1024){
                return (size / 1024 / 1024).toFixed(2) + 'MB';
            }
            return (size / 1024 / 1024 / 1024).toFixed(2) + 'GB';
        }
        function showMessage(sts){
            console.log(lastLoad , reSize(lastLoad) , lastTime , speed,(total - lastLoad) / speed);
            $message.text('上传进度' + reSize(lastLoad)+'/' + totalSize + '('+(sts?0:(lastLoad * 100/total).toFixed(2))+'%)'+
                    ' 上传速度:' + (sts?0:(reSize(speed)+'/s')) +
                    ' 花费时间:' + (sts?0:useCommon.sumTime(lastTime - startTime)) +
                    ' 剩余时间:' + ((sts || speed == 0 )?'--':(useCommon.sumTime((total - lastLoad)*1000/ speed)))
            );
        }
        return $progressWindow;
    };
})();
var citySelectData = useCommon.citySelectData = [{"parentCode":"000000","code":"110000","name":"北京市"},{"parentCode":"110000","code":"110100","name":"市辖区"},{"parentCode":"110100","code":"110101","name":"东城区"},{"parentCode":"110100","code":"110102","name":"西城区"},{"parentCode":"110100","code":"110105","name":"朝阳区"},{"parentCode":"110100","code":"110106","name":"丰台区"},{"parentCode":"110100","code":"110107","name":"石景山区"},{"parentCode":"110100","code":"110108","name":"海淀区"},{"parentCode":"110100","code":"110109","name":"门头沟区"},{"parentCode":"110100","code":"110111","name":"房山区"},{"parentCode":"110100","code":"110112","name":"通州区"},{"parentCode":"110100","code":"110113","name":"顺义区"},{"parentCode":"110100","code":"110114","name":"昌平区"},{"parentCode":"110100","code":"110115","name":"大兴区"},{"parentCode":"110100","code":"110116","name":"怀柔区"},{"parentCode":"110100","code":"110117","name":"平谷区"},{"parentCode":"110000","code":"110200","name":"县"},{"parentCode":"110200","code":"110228","name":"密云县"},{"parentCode":"110200","code":"110229","name":"延庆县"},{"parentCode":"000000","code":"120000","name":"天津市"},{"parentCode":"120000","code":"120100","name":"市辖区"},{"parentCode":"120100","code":"120101","name":"和平区"},{"parentCode":"120100","code":"120102","name":"河东区"},{"parentCode":"120100","code":"120103","name":"河西区"},{"parentCode":"120100","code":"120104","name":"南开区"},{"parentCode":"120100","code":"120105","name":"河北区"},{"parentCode":"120100","code":"120106","name":"红桥区"},{"parentCode":"120100","code":"120110","name":"东丽区"},{"parentCode":"120100","code":"120111","name":"西青区"},{"parentCode":"120100","code":"120112","name":"津南区"},{"parentCode":"120100","code":"120113","name":"北辰区"},{"parentCode":"120100","code":"120114","name":"武清区"},{"parentCode":"120100","code":"120115","name":"宝坻区"},{"parentCode":"120100","code":"120116","name":"滨海新区"},{"parentCode":"120000","code":"120200","name":"县"},{"parentCode":"120200","code":"120221","name":"宁河县"},{"parentCode":"120200","code":"120223","name":"静海县"},{"parentCode":"120200","code":"120225","name":"蓟县"},{"parentCode":"000000","code":"130000","name":"河北省"},{"parentCode":"130000","code":"130100","name":"石家庄市"},{"parentCode":"130100","code":"130101","name":"市辖区"},{"parentCode":"130100","code":"130102","name":"长安区"},{"parentCode":"130100","code":"130104","name":"桥西区"},{"parentCode":"130100","code":"130105","name":"新华区"},{"parentCode":"130100","code":"130107","name":"井陉矿区"},{"parentCode":"130100","code":"130108","name":"裕华区"},{"parentCode":"130100","code":"130109","name":"藁城区"},{"parentCode":"130100","code":"130110","name":"鹿泉区"},{"parentCode":"130100","code":"130111","name":"栾城区"},{"parentCode":"130100","code":"130121","name":"井陉县"},{"parentCode":"130100","code":"130123","name":"正定县"},{"parentCode":"130100","code":"130125","name":"行唐县"},{"parentCode":"130100","code":"130126","name":"灵寿县"},{"parentCode":"130100","code":"130127","name":"高邑县"},{"parentCode":"130100","code":"130128","name":"深泽县"},{"parentCode":"130100","code":"130129","name":"赞皇县"},{"parentCode":"130100","code":"130130","name":"无极县"},{"parentCode":"130100","code":"130131","name":"平山县"},{"parentCode":"130100","code":"130132","name":"元氏县"},{"parentCode":"130100","code":"130133","name":"赵县"},{"parentCode":"130100","code":"130183","name":"晋州市"},{"parentCode":"130100","code":"130184","name":"新乐市"},{"parentCode":"130000","code":"130200","name":"唐山市"},{"parentCode":"130200","code":"130201","name":"市辖区"},{"parentCode":"130200","code":"130202","name":"路南区"},{"parentCode":"130200","code":"130203","name":"路北区"},{"parentCode":"130200","code":"130204","name":"古冶区"},{"parentCode":"130200","code":"130205","name":"开平区"},{"parentCode":"130200","code":"130207","name":"丰南区"},{"parentCode":"130200","code":"130208","name":"丰润区"},{"parentCode":"130200","code":"130209","name":"曹妃甸区"},{"parentCode":"130200","code":"130223","name":"滦县"},{"parentCode":"130200","code":"130224","name":"滦南县"},{"parentCode":"130200","code":"130225","name":"乐亭县"},{"parentCode":"130200","code":"130227","name":"迁西县"},{"parentCode":"130200","code":"130229","name":"玉田县"},{"parentCode":"130200","code":"130281","name":"遵化市"},{"parentCode":"130200","code":"130283","name":"迁安市"},{"parentCode":"130000","code":"130300","name":"秦皇岛市"},{"parentCode":"130300","code":"130301","name":"市辖区"},{"parentCode":"130300","code":"130302","name":"海港区"},{"parentCode":"130300","code":"130303","name":"山海关区"},{"parentCode":"130300","code":"130304","name":"北戴河区"},{"parentCode":"130300","code":"130321","name":"青龙满族自治县"},{"parentCode":"130300","code":"130322","name":"昌黎县"},{"parentCode":"130300","code":"130323","name":"抚宁县"},{"parentCode":"130300","code":"130324","name":"卢龙县"},{"parentCode":"130000","code":"130400","name":"邯郸市"},{"parentCode":"130400","code":"130401","name":"市辖区"},{"parentCode":"130400","code":"130402","name":"邯山区"},{"parentCode":"130400","code":"130403","name":"丛台区"},{"parentCode":"130400","code":"130404","name":"复兴区"},{"parentCode":"130400","code":"130406","name":"峰峰矿区"},{"parentCode":"130400","code":"130421","name":"邯郸县"},{"parentCode":"130400","code":"130423","name":"临漳县"},{"parentCode":"130400","code":"130424","name":"成安县"},{"parentCode":"130400","code":"130425","name":"大名县"},{"parentCode":"130400","code":"130426","name":"涉县"},{"parentCode":"130400","code":"130427","name":"磁县"},{"parentCode":"130400","code":"130428","name":"肥乡县"},{"parentCode":"130400","code":"130429","name":"永年县"},{"parentCode":"130400","code":"130430","name":"邱县"},{"parentCode":"130400","code":"130431","name":"鸡泽县"},{"parentCode":"130400","code":"130432","name":"广平县"},{"parentCode":"130400","code":"130433","name":"馆陶县"},{"parentCode":"130400","code":"130434","name":"魏县"},{"parentCode":"130400","code":"130435","name":"曲周县"},{"parentCode":"130400","code":"130481","name":"武安市"},{"parentCode":"130000","code":"130500","name":"邢台市"},{"parentCode":"130500","code":"130501","name":"市辖区"},{"parentCode":"130500","code":"130502","name":"桥东区"},{"parentCode":"130500","code":"130503","name":"桥西区"},{"parentCode":"130500","code":"130521","name":"邢台县"},{"parentCode":"130500","code":"130522","name":"临城县"},{"parentCode":"130500","code":"130523","name":"内丘县"},{"parentCode":"130500","code":"130524","name":"柏乡县"},{"parentCode":"130500","code":"130525","name":"隆尧县"},{"parentCode":"130500","code":"130526","name":"任县"},{"parentCode":"130500","code":"130527","name":"南和县"},{"parentCode":"130500","code":"130528","name":"宁晋县"},{"parentCode":"130500","code":"130529","name":"巨鹿县"},{"parentCode":"130500","code":"130530","name":"新河县"},{"parentCode":"130500","code":"130531","name":"广宗县"},{"parentCode":"130500","code":"130532","name":"平乡县"},{"parentCode":"130500","code":"130533","name":"威县"},{"parentCode":"130500","code":"130534","name":"清河县"},{"parentCode":"130500","code":"130535","name":"临西县"},{"parentCode":"130500","code":"130581","name":"南宫市"},{"parentCode":"130500","code":"130582","name":"沙河市"},{"parentCode":"130000","code":"130600","name":"保定市"},{"parentCode":"130600","code":"130601","name":"市辖区"},{"parentCode":"130600","code":"130602","name":"新市区"},{"parentCode":"130600","code":"130603","name":"北市区"},{"parentCode":"130600","code":"130604","name":"南市区"},{"parentCode":"130600","code":"130621","name":"满城县"},{"parentCode":"130600","code":"130622","name":"清苑县"},{"parentCode":"130600","code":"130623","name":"涞水县"},{"parentCode":"130600","code":"130624","name":"阜平县"},{"parentCode":"130600","code":"130625","name":"徐水县"},{"parentCode":"130600","code":"130626","name":"定兴县"},{"parentCode":"130600","code":"130627","name":"唐县"},{"parentCode":"130600","code":"130628","name":"高阳县"},{"parentCode":"130600","code":"130629","name":"容城县"},{"parentCode":"130600","code":"130630","name":"涞源县"},{"parentCode":"130600","code":"130631","name":"望都县"},{"parentCode":"130600","code":"130632","name":"安新县"},{"parentCode":"130600","code":"130633","name":"易县"},{"parentCode":"130600","code":"130634","name":"曲阳县"},{"parentCode":"130600","code":"130635","name":"蠡县"},{"parentCode":"130600","code":"130636","name":"顺平县"},{"parentCode":"130600","code":"130637","name":"博野县"},{"parentCode":"130600","code":"130638","name":"雄县"},{"parentCode":"130600","code":"130681","name":"涿州市"},{"parentCode":"130600","code":"130683","name":"安国市"},{"parentCode":"130600","code":"130684","name":"高碑店市"},{"parentCode":"130000","code":"130700","name":"张家口市"},{"parentCode":"130700","code":"130701","name":"市辖区"},{"parentCode":"130700","code":"130702","name":"桥东区"},{"parentCode":"130700","code":"130703","name":"桥西区"},{"parentCode":"130700","code":"130705","name":"宣化区"},{"parentCode":"130700","code":"130706","name":"下花园区"},{"parentCode":"130700","code":"130721","name":"宣化县"},{"parentCode":"130700","code":"130722","name":"张北县"},{"parentCode":"130700","code":"130723","name":"康保县"},{"parentCode":"130700","code":"130724","name":"沽源县"},{"parentCode":"130700","code":"130725","name":"尚义县"},{"parentCode":"130700","code":"130726","name":"蔚县"},{"parentCode":"130700","code":"130727","name":"阳原县"},{"parentCode":"130700","code":"130728","name":"怀安县"},{"parentCode":"130700","code":"130729","name":"万全县"},{"parentCode":"130700","code":"130730","name":"怀来县"},{"parentCode":"130700","code":"130731","name":"涿鹿县"},{"parentCode":"130700","code":"130732","name":"赤城县"},{"parentCode":"130700","code":"130733","name":"崇礼县"},{"parentCode":"130000","code":"130800","name":"承德市"},{"parentCode":"130800","code":"130801","name":"市辖区"},{"parentCode":"130800","code":"130802","name":"双桥区"},{"parentCode":"130800","code":"130803","name":"双滦区"},{"parentCode":"130800","code":"130804","name":"鹰手营子矿区"},{"parentCode":"130800","code":"130821","name":"承德县"},{"parentCode":"130800","code":"130822","name":"兴隆县"},{"parentCode":"130800","code":"130823","name":"平泉县"},{"parentCode":"130800","code":"130824","name":"滦平县"},{"parentCode":"130800","code":"130825","name":"隆化县"},{"parentCode":"130800","code":"130826","name":"丰宁满族自治县"},{"parentCode":"130800","code":"130827","name":"宽城满族自治县"},{"parentCode":"130800","code":"130828","name":"围场满族蒙古族自治县"},{"parentCode":"130000","code":"130900","name":"沧州市"},{"parentCode":"130900","code":"130901","name":"市辖区"},{"parentCode":"130900","code":"130902","name":"新华区"},{"parentCode":"130900","code":"130903","name":"运河区"},{"parentCode":"130900","code":"130921","name":"沧县"},{"parentCode":"130900","code":"130922","name":"青县"},{"parentCode":"130900","code":"130923","name":"东光县"},{"parentCode":"130900","code":"130924","name":"海兴县"},{"parentCode":"130900","code":"130925","name":"盐山县"},{"parentCode":"130900","code":"130926","name":"肃宁县"},{"parentCode":"130900","code":"130927","name":"南皮县"},{"parentCode":"130900","code":"130928","name":"吴桥县"},{"parentCode":"130900","code":"130929","name":"献县"},{"parentCode":"130900","code":"130930","name":"孟村回族自治县"},{"parentCode":"130900","code":"130981","name":"泊头市"},{"parentCode":"130900","code":"130982","name":"任丘市"},{"parentCode":"130900","code":"130983","name":"黄骅市"},{"parentCode":"130900","code":"130984","name":"河间市"},{"parentCode":"130000","code":"131000","name":"廊坊市"},{"parentCode":"131000","code":"131001","name":"市辖区"},{"parentCode":"131000","code":"131002","name":"安次区"},{"parentCode":"131000","code":"131003","name":"广阳区"},{"parentCode":"131000","code":"131022","name":"固安县"},{"parentCode":"131000","code":"131023","name":"永清县"},{"parentCode":"131000","code":"131024","name":"香河县"},{"parentCode":"131000","code":"131025","name":"大城县"},{"parentCode":"131000","code":"131026","name":"文安县"},{"parentCode":"131000","code":"131028","name":"大厂回族自治县"},{"parentCode":"131000","code":"131081","name":"霸州市"},{"parentCode":"131000","code":"131082","name":"三河市"},{"parentCode":"130000","code":"131100","name":"衡水市"},{"parentCode":"131100","code":"131101","name":"市辖区"},{"parentCode":"131100","code":"131102","name":"桃城区"},{"parentCode":"131100","code":"131121","name":"枣强县"},{"parentCode":"131100","code":"131122","name":"武邑县"},{"parentCode":"131100","code":"131123","name":"武强县"},{"parentCode":"131100","code":"131124","name":"饶阳县"},{"parentCode":"131100","code":"131125","name":"安平县"},{"parentCode":"131100","code":"131126","name":"故城县"},{"parentCode":"131100","code":"131127","name":"景县"},{"parentCode":"131100","code":"131128","name":"阜城县"},{"parentCode":"131100","code":"131181","name":"冀州市"},{"parentCode":"131100","code":"131182","name":"深州市"},{"parentCode":"130000","code":"139000","name":"省直辖县级行政区划"},{"parentCode":"139000","code":"139001","name":"定州市"},{"parentCode":"139000","code":"139002","name":"辛集市"},{"parentCode":"000000","code":"140000","name":"山西省"},{"parentCode":"140000","code":"140100","name":"太原市"},{"parentCode":"140100","code":"140101","name":"市辖区"},{"parentCode":"140100","code":"140105","name":"小店区"},{"parentCode":"140100","code":"140106","name":"迎泽区"},{"parentCode":"140100","code":"140107","name":"杏花岭区"},{"parentCode":"140100","code":"140108","name":"尖草坪区"},{"parentCode":"140100","code":"140109","name":"万柏林区"},{"parentCode":"140100","code":"140110","name":"晋源区"},{"parentCode":"140100","code":"140121","name":"清徐县"},{"parentCode":"140100","code":"140122","name":"阳曲县"},{"parentCode":"140100","code":"140123","name":"娄烦县"},{"parentCode":"140100","code":"140181","name":"古交市"},{"parentCode":"140000","code":"140200","name":"大同市"},{"parentCode":"140200","code":"140201","name":"市辖区"},{"parentCode":"140200","code":"140202","name":"城区"},{"parentCode":"140200","code":"140203","name":"矿区"},{"parentCode":"140200","code":"140211","name":"南郊区"},{"parentCode":"140200","code":"140212","name":"新荣区"},{"parentCode":"140200","code":"140221","name":"阳高县"},{"parentCode":"140200","code":"140222","name":"天镇县"},{"parentCode":"140200","code":"140223","name":"广灵县"},{"parentCode":"140200","code":"140224","name":"灵丘县"},{"parentCode":"140200","code":"140225","name":"浑源县"},{"parentCode":"140200","code":"140226","name":"左云县"},{"parentCode":"140200","code":"140227","name":"大同县"},{"parentCode":"140000","code":"140300","name":"阳泉市"},{"parentCode":"140300","code":"140301","name":"市辖区"},{"parentCode":"140300","code":"140302","name":"城区"},{"parentCode":"140300","code":"140303","name":"矿区"},{"parentCode":"140300","code":"140311","name":"郊区"},{"parentCode":"140300","code":"140321","name":"平定县"},{"parentCode":"140300","code":"140322","name":"盂县"},{"parentCode":"140000","code":"140400","name":"长治市"},{"parentCode":"140400","code":"140401","name":"市辖区"},{"parentCode":"140400","code":"140402","name":"城区"},{"parentCode":"140400","code":"140411","name":"郊区"},{"parentCode":"140400","code":"140421","name":"长治县"},{"parentCode":"140400","code":"140423","name":"襄垣县"},{"parentCode":"140400","code":"140424","name":"屯留县"},{"parentCode":"140400","code":"140425","name":"平顺县"},{"parentCode":"140400","code":"140426","name":"黎城县"},{"parentCode":"140400","code":"140427","name":"壶关县"},{"parentCode":"140400","code":"140428","name":"长子县"},{"parentCode":"140400","code":"140429","name":"武乡县"},{"parentCode":"140400","code":"140430","name":"沁县"},{"parentCode":"140400","code":"140431","name":"沁源县"},{"parentCode":"140400","code":"140481","name":"潞城市"},{"parentCode":"140000","code":"140500","name":"晋城市"},{"parentCode":"140500","code":"140501","name":"市辖区"},{"parentCode":"140500","code":"140502","name":"城区"},{"parentCode":"140500","code":"140521","name":"沁水县"},{"parentCode":"140500","code":"140522","name":"阳城县"},{"parentCode":"140500","code":"140524","name":"陵川县"},{"parentCode":"140500","code":"140525","name":"泽州县"},{"parentCode":"140500","code":"140581","name":"高平市"},{"parentCode":"140000","code":"140600","name":"朔州市"},{"parentCode":"140600","code":"140601","name":"市辖区"},{"parentCode":"140600","code":"140602","name":"朔城区"},{"parentCode":"140600","code":"140603","name":"平鲁区"},{"parentCode":"140600","code":"140621","name":"山阴县"},{"parentCode":"140600","code":"140622","name":"应县"},{"parentCode":"140600","code":"140623","name":"右玉县"},{"parentCode":"140600","code":"140624","name":"怀仁县"},{"parentCode":"140000","code":"140700","name":"晋中市"},{"parentCode":"140700","code":"140701","name":"市辖区"},{"parentCode":"140700","code":"140702","name":"榆次区"},{"parentCode":"140700","code":"140721","name":"榆社县"},{"parentCode":"140700","code":"140722","name":"左权县"},{"parentCode":"140700","code":"140723","name":"和顺县"},{"parentCode":"140700","code":"140724","name":"昔阳县"},{"parentCode":"140700","code":"140725","name":"寿阳县"},{"parentCode":"140700","code":"140726","name":"太谷县"},{"parentCode":"140700","code":"140727","name":"祁县"},{"parentCode":"140700","code":"140728","name":"平遥县"},{"parentCode":"140700","code":"140729","name":"灵石县"},{"parentCode":"140700","code":"140781","name":"介休市"},{"parentCode":"140000","code":"140800","name":"运城市"},{"parentCode":"140800","code":"140801","name":"市辖区"},{"parentCode":"140800","code":"140802","name":"盐湖区"},{"parentCode":"140800","code":"140821","name":"临猗县"},{"parentCode":"140800","code":"140822","name":"万荣县"},{"parentCode":"140800","code":"140823","name":"闻喜县"},{"parentCode":"140800","code":"140824","name":"稷山县"},{"parentCode":"140800","code":"140825","name":"新绛县"},{"parentCode":"140800","code":"140826","name":"绛县"},{"parentCode":"140800","code":"140827","name":"垣曲县"},{"parentCode":"140800","code":"140828","name":"夏县"},{"parentCode":"140800","code":"140829","name":"平陆县"},{"parentCode":"140800","code":"140830","name":"芮城县"},{"parentCode":"140800","code":"140881","name":"永济市"},{"parentCode":"140800","code":"140882","name":"河津市"},{"parentCode":"140000","code":"140900","name":"忻州市"},{"parentCode":"140900","code":"140901","name":"市辖区"},{"parentCode":"140900","code":"140902","name":"忻府区"},{"parentCode":"140900","code":"140921","name":"定襄县"},{"parentCode":"140900","code":"140922","name":"五台县"},{"parentCode":"140900","code":"140923","name":"代县"},{"parentCode":"140900","code":"140924","name":"繁峙县"},{"parentCode":"140900","code":"140925","name":"宁武县"},{"parentCode":"140900","code":"140926","name":"静乐县"},{"parentCode":"140900","code":"140927","name":"神池县"},{"parentCode":"140900","code":"140928","name":"五寨县"},{"parentCode":"140900","code":"140929","name":"岢岚县"},{"parentCode":"140900","code":"140930","name":"河曲县"},{"parentCode":"140900","code":"140931","name":"保德县"},{"parentCode":"140900","code":"140932","name":"偏关县"},{"parentCode":"140900","code":"140981","name":"原平市"},{"parentCode":"140000","code":"141000","name":"临汾市"},{"parentCode":"141000","code":"141001","name":"市辖区"},{"parentCode":"141000","code":"141002","name":"尧都区"},{"parentCode":"141000","code":"141021","name":"曲沃县"},{"parentCode":"141000","code":"141022","name":"翼城县"},{"parentCode":"141000","code":"141023","name":"襄汾县"},{"parentCode":"141000","code":"141024","name":"洪洞县"},{"parentCode":"141000","code":"141025","name":"古县"},{"parentCode":"141000","code":"141026","name":"安泽县"},{"parentCode":"141000","code":"141027","name":"浮山县"},{"parentCode":"141000","code":"141028","name":"吉县"},{"parentCode":"141000","code":"141029","name":"乡宁县"},{"parentCode":"141000","code":"141030","name":"大宁县"},{"parentCode":"141000","code":"141031","name":"隰县"},{"parentCode":"141000","code":"141032","name":"永和县"},{"parentCode":"141000","code":"141033","name":"蒲县"},{"parentCode":"141000","code":"141034","name":"汾西县"},{"parentCode":"141000","code":"141081","name":"侯马市"},{"parentCode":"141000","code":"141082","name":"霍州市"},{"parentCode":"140000","code":"141100","name":"吕梁市"},{"parentCode":"141100","code":"141101","name":"市辖区"},{"parentCode":"141100","code":"141102","name":"离石区"},{"parentCode":"141100","code":"141121","name":"文水县"},{"parentCode":"141100","code":"141122","name":"交城县"},{"parentCode":"141100","code":"141123","name":"兴县"},{"parentCode":"141100","code":"141124","name":"临县"},{"parentCode":"141100","code":"141125","name":"柳林县"},{"parentCode":"141100","code":"141126","name":"石楼县"},{"parentCode":"141100","code":"141127","name":"岚县"},{"parentCode":"141100","code":"141128","name":"方山县"},{"parentCode":"141100","code":"141129","name":"中阳县"},{"parentCode":"141100","code":"141130","name":"交口县"},{"parentCode":"141100","code":"141181","name":"孝义市"},{"parentCode":"141100","code":"141182","name":"汾阳市"},{"parentCode":"000000","code":"150000","name":"内蒙古自治区"},{"parentCode":"150000","code":"150100","name":"呼和浩特市"},{"parentCode":"150100","code":"150101","name":"市辖区"},{"parentCode":"150100","code":"150102","name":"新城区"},{"parentCode":"150100","code":"150103","name":"回民区"},{"parentCode":"150100","code":"150104","name":"玉泉区"},{"parentCode":"150100","code":"150105","name":"赛罕区"},{"parentCode":"150100","code":"150121","name":"土默特左旗"},{"parentCode":"150100","code":"150122","name":"托克托县"},{"parentCode":"150100","code":"150123","name":"和林格尔县"},{"parentCode":"150100","code":"150124","name":"清水河县"},{"parentCode":"150100","code":"150125","name":"武川县"},{"parentCode":"150000","code":"150200","name":"包头市"},{"parentCode":"150200","code":"150201","name":"市辖区"},{"parentCode":"150200","code":"150202","name":"东河区"},{"parentCode":"150200","code":"150203","name":"昆都仑区"},{"parentCode":"150200","code":"150204","name":"青山区"},{"parentCode":"150200","code":"150205","name":"石拐区"},{"parentCode":"150200","code":"150206","name":"白云鄂博矿区"},{"parentCode":"150200","code":"150207","name":"九原区"},{"parentCode":"150200","code":"150221","name":"土默特右旗"},{"parentCode":"150200","code":"150222","name":"固阳县"},{"parentCode":"150200","code":"150223","name":"达尔罕茂明安联合旗"},{"parentCode":"150000","code":"150300","name":"乌海市"},{"parentCode":"150300","code":"150301","name":"市辖区"},{"parentCode":"150300","code":"150302","name":"海勃湾区"},{"parentCode":"150300","code":"150303","name":"海南区"},{"parentCode":"150300","code":"150304","name":"乌达区"},{"parentCode":"150000","code":"150400","name":"赤峰市"},{"parentCode":"150400","code":"150401","name":"市辖区"},{"parentCode":"150400","code":"150402","name":"红山区"},{"parentCode":"150400","code":"150403","name":"元宝山区"},{"parentCode":"150400","code":"150404","name":"松山区"},{"parentCode":"150400","code":"150421","name":"阿鲁科尔沁旗"},{"parentCode":"150400","code":"150422","name":"巴林左旗"},{"parentCode":"150400","code":"150423","name":"巴林右旗"},{"parentCode":"150400","code":"150424","name":"林西县"},{"parentCode":"150400","code":"150425","name":"克什克腾旗"},{"parentCode":"150400","code":"150426","name":"翁牛特旗"},{"parentCode":"150400","code":"150428","name":"喀喇沁旗"},{"parentCode":"150400","code":"150429","name":"宁城县"},{"parentCode":"150400","code":"150430","name":"敖汉旗"},{"parentCode":"150000","code":"150500","name":"通辽市"},{"parentCode":"150500","code":"150501","name":"市辖区"},{"parentCode":"150500","code":"150502","name":"科尔沁区"},{"parentCode":"150500","code":"150521","name":"科尔沁左翼中旗"},{"parentCode":"150500","code":"150522","name":"科尔沁左翼后旗"},{"parentCode":"150500","code":"150523","name":"开鲁县"},{"parentCode":"150500","code":"150524","name":"库伦旗"},{"parentCode":"150500","code":"150525","name":"奈曼旗"},{"parentCode":"150500","code":"150526","name":"扎鲁特旗"},{"parentCode":"150500","code":"150581","name":"霍林郭勒市"},{"parentCode":"150000","code":"150600","name":"鄂尔多斯市"},{"parentCode":"150600","code":"150601","name":"市辖区"},{"parentCode":"150600","code":"150602","name":"东胜区"},{"parentCode":"150600","code":"150621","name":"达拉特旗"},{"parentCode":"150600","code":"150622","name":"准格尔旗"},{"parentCode":"150600","code":"150623","name":"鄂托克前旗"},{"parentCode":"150600","code":"150624","name":"鄂托克旗"},{"parentCode":"150600","code":"150625","name":"杭锦旗"},{"parentCode":"150600","code":"150626","name":"乌审旗"},{"parentCode":"150600","code":"150627","name":"伊金霍洛旗"},{"parentCode":"150000","code":"150700","name":"呼伦贝尔市"},{"parentCode":"150700","code":"150701","name":"市辖区"},{"parentCode":"150700","code":"150702","name":"海拉尔区"},{"parentCode":"150700","code":"150703","name":"扎赉诺尔区"},{"parentCode":"150700","code":"150721","name":"阿荣旗"},{"parentCode":"150700","code":"150722","name":"莫力达瓦达斡尔族自治旗"},{"parentCode":"150700","code":"150723","name":"鄂伦春自治旗"},{"parentCode":"150700","code":"150724","name":"鄂温克族自治旗"},{"parentCode":"150700","code":"150725","name":"陈巴尔虎旗"},{"parentCode":"150700","code":"150726","name":"新巴尔虎左旗"},{"parentCode":"150700","code":"150727","name":"新巴尔虎右旗"},{"parentCode":"150700","code":"150781","name":"满洲里市"},{"parentCode":"150700","code":"150782","name":"牙克石市"},{"parentCode":"150700","code":"150783","name":"扎兰屯市"},{"parentCode":"150700","code":"150784","name":"额尔古纳市"},{"parentCode":"150700","code":"150785","name":"根河市"},{"parentCode":"150000","code":"150800","name":"巴彦淖尔市"},{"parentCode":"150800","code":"150801","name":"市辖区"},{"parentCode":"150800","code":"150802","name":"临河区"},{"parentCode":"150800","code":"150821","name":"五原县"},{"parentCode":"150800","code":"150822","name":"磴口县"},{"parentCode":"150800","code":"150823","name":"乌拉特前旗"},{"parentCode":"150800","code":"150824","name":"乌拉特中旗"},{"parentCode":"150800","code":"150825","name":"乌拉特后旗"},{"parentCode":"150800","code":"150826","name":"杭锦后旗"},{"parentCode":"150000","code":"150900","name":"乌兰察布市"},{"parentCode":"150900","code":"150901","name":"市辖区"},{"parentCode":"150900","code":"150902","name":"集宁区"},{"parentCode":"150900","code":"150921","name":"卓资县"},{"parentCode":"150900","code":"150922","name":"化德县"},{"parentCode":"150900","code":"150923","name":"商都县"},{"parentCode":"150900","code":"150924","name":"兴和县"},{"parentCode":"150900","code":"150925","name":"凉城县"},{"parentCode":"150900","code":"150926","name":"察哈尔右翼前旗"},{"parentCode":"150900","code":"150927","name":"察哈尔右翼中旗"},{"parentCode":"150900","code":"150928","name":"察哈尔右翼后旗"},{"parentCode":"150900","code":"150929","name":"四子王旗"},{"parentCode":"150900","code":"150981","name":"丰镇市"},{"parentCode":"150000","code":"152200","name":"兴安盟"},{"parentCode":"152200","code":"152201","name":"乌兰浩特市"},{"parentCode":"152200","code":"152202","name":"阿尔山市"},{"parentCode":"152200","code":"152221","name":"科尔沁右翼前旗"},{"parentCode":"152200","code":"152222","name":"科尔沁右翼中旗"},{"parentCode":"152200","code":"152223","name":"扎赉特旗"},{"parentCode":"152200","code":"152224","name":"突泉县"},{"parentCode":"150000","code":"152500","name":"锡林郭勒盟"},{"parentCode":"152500","code":"152501","name":"二连浩特市"},{"parentCode":"152500","code":"152502","name":"锡林浩特市"},{"parentCode":"152500","code":"152522","name":"阿巴嘎旗"},{"parentCode":"152500","code":"152523","name":"苏尼特左旗"},{"parentCode":"152500","code":"152524","name":"苏尼特右旗"},{"parentCode":"152500","code":"152525","name":"东乌珠穆沁旗"},{"parentCode":"152500","code":"152526","name":"西乌珠穆沁旗"},{"parentCode":"152500","code":"152527","name":"太仆寺旗"},{"parentCode":"152500","code":"152528","name":"镶黄旗"},{"parentCode":"152500","code":"152529","name":"正镶白旗"},{"parentCode":"152500","code":"152530","name":"正蓝旗"},{"parentCode":"152500","code":"152531","name":"多伦县"},{"parentCode":"150000","code":"152900","name":"阿拉善盟"},{"parentCode":"152900","code":"152921","name":"阿拉善左旗"},{"parentCode":"152900","code":"152922","name":"阿拉善右旗"},{"parentCode":"152900","code":"152923","name":"额济纳旗"},{"parentCode":"000000","code":"210000","name":"辽宁省"},{"parentCode":"210000","code":"210100","name":"沈阳市"},{"parentCode":"210100","code":"210101","name":"市辖区"},{"parentCode":"210100","code":"210102","name":"和平区"},{"parentCode":"210100","code":"210103","name":"沈河区"},{"parentCode":"210100","code":"210104","name":"大东区"},{"parentCode":"210100","code":"210105","name":"皇姑区"},{"parentCode":"210100","code":"210106","name":"铁西区"},{"parentCode":"210100","code":"210111","name":"苏家屯区"},{"parentCode":"210100","code":"210112","name":"浑南区"},{"parentCode":"210100","code":"210113","name":"沈北新区"},{"parentCode":"210100","code":"210114","name":"于洪区"},{"parentCode":"210100","code":"210122","name":"辽中县"},{"parentCode":"210100","code":"210123","name":"康平县"},{"parentCode":"210100","code":"210124","name":"法库县"},{"parentCode":"210100","code":"210181","name":"新民市"},{"parentCode":"210000","code":"210200","name":"大连市"},{"parentCode":"210200","code":"210201","name":"市辖区"},{"parentCode":"210200","code":"210202","name":"中山区"},{"parentCode":"210200","code":"210203","name":"西岗区"},{"parentCode":"210200","code":"210204","name":"沙河口区"},{"parentCode":"210200","code":"210211","name":"甘井子区"},{"parentCode":"210200","code":"210212","name":"旅顺口区"},{"parentCode":"210200","code":"210213","name":"金州区"},{"parentCode":"210200","code":"210224","name":"长海县"},{"parentCode":"210200","code":"210281","name":"瓦房店市"},{"parentCode":"210200","code":"210282","name":"普兰店市"},{"parentCode":"210200","code":"210283","name":"庄河市"},{"parentCode":"210000","code":"210300","name":"鞍山市"},{"parentCode":"210300","code":"210301","name":"市辖区"},{"parentCode":"210300","code":"210302","name":"铁东区"},{"parentCode":"210300","code":"210303","name":"铁西区"},{"parentCode":"210300","code":"210304","name":"立山区"},{"parentCode":"210300","code":"210311","name":"千山区"},{"parentCode":"210300","code":"210321","name":"台安县"},{"parentCode":"210300","code":"210323","name":"岫岩满族自治县"},{"parentCode":"210300","code":"210381","name":"海城市"},{"parentCode":"210000","code":"210400","name":"抚顺市"},{"parentCode":"210400","code":"210401","name":"市辖区"},{"parentCode":"210400","code":"210402","name":"新抚区"},{"parentCode":"210400","code":"210403","name":"东洲区"},{"parentCode":"210400","code":"210404","name":"望花区"},{"parentCode":"210400","code":"210411","name":"顺城区"},{"parentCode":"210400","code":"210421","name":"抚顺县"},{"parentCode":"210400","code":"210422","name":"新宾满族自治县"},{"parentCode":"210400","code":"210423","name":"清原满族自治县"},{"parentCode":"210000","code":"210500","name":"本溪市"},{"parentCode":"210500","code":"210501","name":"市辖区"},{"parentCode":"210500","code":"210502","name":"平山区"},{"parentCode":"210500","code":"210503","name":"溪湖区"},{"parentCode":"210500","code":"210504","name":"明山区"},{"parentCode":"210500","code":"210505","name":"南芬区"},{"parentCode":"210500","code":"210521","name":"本溪满族自治县"},{"parentCode":"210500","code":"210522","name":"桓仁满族自治县"},{"parentCode":"210000","code":"210600","name":"丹东市"},{"parentCode":"210600","code":"210601","name":"市辖区"},{"parentCode":"210600","code":"210602","name":"元宝区"},{"parentCode":"210600","code":"210603","name":"振兴区"},{"parentCode":"210600","code":"210604","name":"振安区"},{"parentCode":"210600","code":"210624","name":"宽甸满族自治县"},{"parentCode":"210600","code":"210681","name":"东港市"},{"parentCode":"210600","code":"210682","name":"凤城市"},{"parentCode":"210000","code":"210700","name":"锦州市"},{"parentCode":"210700","code":"210701","name":"市辖区"},{"parentCode":"210700","code":"210702","name":"古塔区"},{"parentCode":"210700","code":"210703","name":"凌河区"},{"parentCode":"210700","code":"210711","name":"太和区"},{"parentCode":"210700","code":"210726","name":"黑山县"},{"parentCode":"210700","code":"210727","name":"义县"},{"parentCode":"210700","code":"210781","name":"凌海市"},{"parentCode":"210700","code":"210782","name":"北镇市"},{"parentCode":"210000","code":"210800","name":"营口市"},{"parentCode":"210800","code":"210801","name":"市辖区"},{"parentCode":"210800","code":"210802","name":"站前区"},{"parentCode":"210800","code":"210803","name":"西市区"},{"parentCode":"210800","code":"210804","name":"鲅鱼圈区"},{"parentCode":"210800","code":"210811","name":"老边区"},{"parentCode":"210800","code":"210881","name":"盖州市"},{"parentCode":"210800","code":"210882","name":"大石桥市"},{"parentCode":"210000","code":"210900","name":"阜新市"},{"parentCode":"210900","code":"210901","name":"市辖区"},{"parentCode":"210900","code":"210902","name":"海州区"},{"parentCode":"210900","code":"210903","name":"新邱区"},{"parentCode":"210900","code":"210904","name":"太平区"},{"parentCode":"210900","code":"210905","name":"清河门区"},{"parentCode":"210900","code":"210911","name":"细河区"},{"parentCode":"210900","code":"210921","name":"阜新蒙古族自治县"},{"parentCode":"210900","code":"210922","name":"彰武县"},{"parentCode":"210000","code":"211000","name":"辽阳市"},{"parentCode":"211000","code":"211001","name":"市辖区"},{"parentCode":"211000","code":"211002","name":"白塔区"},{"parentCode":"211000","code":"211003","name":"文圣区"},{"parentCode":"211000","code":"211004","name":"宏伟区"},{"parentCode":"211000","code":"211005","name":"弓长岭区"},{"parentCode":"211000","code":"211011","name":"太子河区"},{"parentCode":"211000","code":"211021","name":"辽阳县"},{"parentCode":"211000","code":"211081","name":"灯塔市"},{"parentCode":"210000","code":"211100","name":"盘锦市"},{"parentCode":"211100","code":"211101","name":"市辖区"},{"parentCode":"211100","code":"211102","name":"双台子区"},{"parentCode":"211100","code":"211103","name":"兴隆台区"},{"parentCode":"211100","code":"211121","name":"大洼县"},{"parentCode":"211100","code":"211122","name":"盘山县"},{"parentCode":"210000","code":"211200","name":"铁岭市"},{"parentCode":"211200","code":"211201","name":"市辖区"},{"parentCode":"211200","code":"211202","name":"银州区"},{"parentCode":"211200","code":"211204","name":"清河区"},{"parentCode":"211200","code":"211221","name":"铁岭县"},{"parentCode":"211200","code":"211223","name":"西丰县"},{"parentCode":"211200","code":"211224","name":"昌图县"},{"parentCode":"211200","code":"211281","name":"调兵山市"},{"parentCode":"211200","code":"211282","name":"开原市"},{"parentCode":"210000","code":"211300","name":"朝阳市"},{"parentCode":"211300","code":"211301","name":"市辖区"},{"parentCode":"211300","code":"211302","name":"双塔区"},{"parentCode":"211300","code":"211303","name":"龙城区"},{"parentCode":"211300","code":"211321","name":"朝阳县"},{"parentCode":"211300","code":"211322","name":"建平县"},{"parentCode":"211300","code":"211324","name":"喀喇沁左翼蒙古族自治县"},{"parentCode":"211300","code":"211381","name":"北票市"},{"parentCode":"211300","code":"211382","name":"凌源市"},{"parentCode":"210000","code":"211400","name":"葫芦岛市"},{"parentCode":"211400","code":"211401","name":"市辖区"},{"parentCode":"211400","code":"211402","name":"连山区"},{"parentCode":"211400","code":"211403","name":"龙港区"},{"parentCode":"211400","code":"211404","name":"南票区"},{"parentCode":"211400","code":"211421","name":"绥中县"},{"parentCode":"211400","code":"211422","name":"建昌县"},{"parentCode":"211400","code":"211481","name":"兴城市"},{"parentCode":"000000","code":"220000","name":"吉林省"},{"parentCode":"220000","code":"220100","name":"长春市"},{"parentCode":"220100","code":"220101","name":"市辖区"},{"parentCode":"220100","code":"220102","name":"南关区"},{"parentCode":"220100","code":"220103","name":"宽城区"},{"parentCode":"220100","code":"220104","name":"朝阳区"},{"parentCode":"220100","code":"220105","name":"二道区"},{"parentCode":"220100","code":"220106","name":"绿园区"},{"parentCode":"220100","code":"220112","name":"双阳区"},{"parentCode":"220100","code":"220113","name":"九台区"},{"parentCode":"220100","code":"220122","name":"农安县"},{"parentCode":"220100","code":"220182","name":"榆树市"},{"parentCode":"220100","code":"220183","name":"德惠市"},{"parentCode":"220000","code":"220200","name":"吉林市"},{"parentCode":"220200","code":"220201","name":"市辖区"},{"parentCode":"220200","code":"220202","name":"昌邑区"},{"parentCode":"220200","code":"220203","name":"龙潭区"},{"parentCode":"220200","code":"220204","name":"船营区"},{"parentCode":"220200","code":"220211","name":"丰满区"},{"parentCode":"220200","code":"220221","name":"永吉县"},{"parentCode":"220200","code":"220281","name":"蛟河市"},{"parentCode":"220200","code":"220282","name":"桦甸市"},{"parentCode":"220200","code":"220283","name":"舒兰市"},{"parentCode":"220200","code":"220284","name":"磐石市"},{"parentCode":"220000","code":"220300","name":"四平市"},{"parentCode":"220300","code":"220301","name":"市辖区"},{"parentCode":"220300","code":"220302","name":"铁西区"},{"parentCode":"220300","code":"220303","name":"铁东区"},{"parentCode":"220300","code":"220322","name":"梨树县"},{"parentCode":"220300","code":"220323","name":"伊通满族自治县"},{"parentCode":"220300","code":"220381","name":"公主岭市"},{"parentCode":"220300","code":"220382","name":"双辽市"},{"parentCode":"220000","code":"220400","name":"辽源市"},{"parentCode":"220400","code":"220401","name":"市辖区"},{"parentCode":"220400","code":"220402","name":"龙山区"},{"parentCode":"220400","code":"220403","name":"西安区"},{"parentCode":"220400","code":"220421","name":"东丰县"},{"parentCode":"220400","code":"220422","name":"东辽县"},{"parentCode":"220000","code":"220500","name":"通化市"},{"parentCode":"220500","code":"220501","name":"市辖区"},{"parentCode":"220500","code":"220502","name":"东昌区"},{"parentCode":"220500","code":"220503","name":"二道江区"},{"parentCode":"220500","code":"220521","name":"通化县"},{"parentCode":"220500","code":"220523","name":"辉南县"},{"parentCode":"220500","code":"220524","name":"柳河县"},{"parentCode":"220500","code":"220581","name":"梅河口市"},{"parentCode":"220500","code":"220582","name":"集安市"},{"parentCode":"220000","code":"220600","name":"白山市"},{"parentCode":"220600","code":"220601","name":"市辖区"},{"parentCode":"220600","code":"220602","name":"浑江区"},{"parentCode":"220600","code":"220605","name":"江源区"},{"parentCode":"220600","code":"220621","name":"抚松县"},{"parentCode":"220600","code":"220622","name":"靖宇县"},{"parentCode":"220600","code":"220623","name":"长白朝鲜族自治县"},{"parentCode":"220600","code":"220681","name":"临江市"},{"parentCode":"220000","code":"220700","name":"松原市"},{"parentCode":"220700","code":"220701","name":"市辖区"},{"parentCode":"220700","code":"220702","name":"宁江区"},{"parentCode":"220700","code":"220721","name":"前郭尔罗斯蒙古族自治县"},{"parentCode":"220700","code":"220722","name":"长岭县"},{"parentCode":"220700","code":"220723","name":"乾安县"},{"parentCode":"220700","code":"220781","name":"扶余市"},{"parentCode":"220000","code":"220800","name":"白城市"},{"parentCode":"220800","code":"220801","name":"市辖区"},{"parentCode":"220800","code":"220802","name":"洮北区"},{"parentCode":"220800","code":"220821","name":"镇赉县"},{"parentCode":"220800","code":"220822","name":"通榆县"},{"parentCode":"220800","code":"220881","name":"洮南市"},{"parentCode":"220800","code":"220882","name":"大安市"},{"parentCode":"220000","code":"222400","name":"延边朝鲜族自治州"},{"parentCode":"222400","code":"222401","name":"延吉市"},{"parentCode":"222400","code":"222402","name":"图们市"},{"parentCode":"222400","code":"222403","name":"敦化市"},{"parentCode":"222400","code":"222404","name":"珲春市"},{"parentCode":"222400","code":"222405","name":"龙井市"},{"parentCode":"222400","code":"222406","name":"和龙市"},{"parentCode":"222400","code":"222424","name":"汪清县"},{"parentCode":"222400","code":"222426","name":"安图县"},{"parentCode":"000000","code":"230000","name":"黑龙江省"},{"parentCode":"230000","code":"230100","name":"哈尔滨市"},{"parentCode":"230100","code":"230101","name":"市辖区"},{"parentCode":"230100","code":"230102","name":"道里区"},{"parentCode":"230100","code":"230103","name":"南岗区"},{"parentCode":"230100","code":"230104","name":"道外区"},{"parentCode":"230100","code":"230108","name":"平房区"},{"parentCode":"230100","code":"230109","name":"松北区"},{"parentCode":"230100","code":"230110","name":"香坊区"},{"parentCode":"230100","code":"230111","name":"呼兰区"},{"parentCode":"230100","code":"230112","name":"阿城区"},{"parentCode":"230100","code":"230123","name":"依兰县"},{"parentCode":"230100","code":"230124","name":"方正县"},{"parentCode":"230100","code":"230125","name":"宾县"},{"parentCode":"230100","code":"230126","name":"巴彦县"},{"parentCode":"230100","code":"230127","name":"木兰县"},{"parentCode":"230100","code":"230128","name":"通河县"},{"parentCode":"230100","code":"230129","name":"延寿县"},{"parentCode":"230100","code":"230182","name":"双城市"},{"parentCode":"230100","code":"230183","name":"尚志市"},{"parentCode":"230100","code":"230184","name":"五常市"},{"parentCode":"230000","code":"230200","name":"齐齐哈尔市"},{"parentCode":"230200","code":"230201","name":"市辖区"},{"parentCode":"230200","code":"230202","name":"龙沙区"},{"parentCode":"230200","code":"230203","name":"建华区"},{"parentCode":"230200","code":"230204","name":"铁锋区"},{"parentCode":"230200","code":"230205","name":"昂昂溪区"},{"parentCode":"230200","code":"230206","name":"富拉尔基区"},{"parentCode":"230200","code":"230207","name":"碾子山区"},{"parentCode":"230200","code":"230208","name":"梅里斯达斡尔族区"},{"parentCode":"230200","code":"230221","name":"龙江县"},{"parentCode":"230200","code":"230223","name":"依安县"},{"parentCode":"230200","code":"230224","name":"泰来县"},{"parentCode":"230200","code":"230225","name":"甘南县"},{"parentCode":"230200","code":"230227","name":"富裕县"},{"parentCode":"230200","code":"230229","name":"克山县"},{"parentCode":"230200","code":"230230","name":"克东县"},{"parentCode":"230200","code":"230231","name":"拜泉县"},{"parentCode":"230200","code":"230281","name":"讷河市"},{"parentCode":"230000","code":"230300","name":"鸡西市"},{"parentCode":"230300","code":"230301","name":"市辖区"},{"parentCode":"230300","code":"230302","name":"鸡冠区"},{"parentCode":"230300","code":"230303","name":"恒山区"},{"parentCode":"230300","code":"230304","name":"滴道区"},{"parentCode":"230300","code":"230305","name":"梨树区"},{"parentCode":"230300","code":"230306","name":"城子河区"},{"parentCode":"230300","code":"230307","name":"麻山区"},{"parentCode":"230300","code":"230321","name":"鸡东县"},{"parentCode":"230300","code":"230381","name":"虎林市"},{"parentCode":"230300","code":"230382","name":"密山市"},{"parentCode":"230000","code":"230400","name":"鹤岗市"},{"parentCode":"230400","code":"230401","name":"市辖区"},{"parentCode":"230400","code":"230402","name":"向阳区"},{"parentCode":"230400","code":"230403","name":"工农区"},{"parentCode":"230400","code":"230404","name":"南山区"},{"parentCode":"230400","code":"230405","name":"兴安区"},{"parentCode":"230400","code":"230406","name":"东山区"},{"parentCode":"230400","code":"230407","name":"兴山区"},{"parentCode":"230400","code":"230421","name":"萝北县"},{"parentCode":"230400","code":"230422","name":"绥滨县"},{"parentCode":"230000","code":"230500","name":"双鸭山市"},{"parentCode":"230500","code":"230501","name":"市辖区"},{"parentCode":"230500","code":"230502","name":"尖山区"},{"parentCode":"230500","code":"230503","name":"岭东区"},{"parentCode":"230500","code":"230505","name":"四方台区"},{"parentCode":"230500","code":"230506","name":"宝山区"},{"parentCode":"230500","code":"230521","name":"集贤县"},{"parentCode":"230500","code":"230522","name":"友谊县"},{"parentCode":"230500","code":"230523","name":"宝清县"},{"parentCode":"230500","code":"230524","name":"饶河县"},{"parentCode":"230000","code":"230600","name":"大庆市"},{"parentCode":"230600","code":"230601","name":"市辖区"},{"parentCode":"230600","code":"230602","name":"萨尔图区"},{"parentCode":"230600","code":"230603","name":"龙凤区"},{"parentCode":"230600","code":"230604","name":"让胡路区"},{"parentCode":"230600","code":"230605","name":"红岗区"},{"parentCode":"230600","code":"230606","name":"大同区"},{"parentCode":"230600","code":"230621","name":"肇州县"},{"parentCode":"230600","code":"230622","name":"肇源县"},{"parentCode":"230600","code":"230623","name":"林甸县"},{"parentCode":"230600","code":"230624","name":"杜尔伯特蒙古族自治县"},{"parentCode":"230000","code":"230700","name":"伊春市"},{"parentCode":"230700","code":"230701","name":"市辖区"},{"parentCode":"230700","code":"230702","name":"伊春区"},{"parentCode":"230700","code":"230703","name":"南岔区"},{"parentCode":"230700","code":"230704","name":"友好区"},{"parentCode":"230700","code":"230705","name":"西林区"},{"parentCode":"230700","code":"230706","name":"翠峦区"},{"parentCode":"230700","code":"230707","name":"新青区"},{"parentCode":"230700","code":"230708","name":"美溪区"},{"parentCode":"230700","code":"230709","name":"金山屯区"},{"parentCode":"230700","code":"230710","name":"五营区"},{"parentCode":"230700","code":"230711","name":"乌马河区"},{"parentCode":"230700","code":"230712","name":"汤旺河区"},{"parentCode":"230700","code":"230713","name":"带岭区"},{"parentCode":"230700","code":"230714","name":"乌伊岭区"},{"parentCode":"230700","code":"230715","name":"红星区"},{"parentCode":"230700","code":"230716","name":"上甘岭区"},{"parentCode":"230700","code":"230722","name":"嘉荫县"},{"parentCode":"230700","code":"230781","name":"铁力市"},{"parentCode":"230000","code":"230800","name":"佳木斯市"},{"parentCode":"230800","code":"230801","name":"市辖区"},{"parentCode":"230800","code":"230803","name":"向阳区"},{"parentCode":"230800","code":"230804","name":"前进区"},{"parentCode":"230800","code":"230805","name":"东风区"},{"parentCode":"230800","code":"230811","name":"郊区"},{"parentCode":"230800","code":"230822","name":"桦南县"},{"parentCode":"230800","code":"230826","name":"桦川县"},{"parentCode":"230800","code":"230828","name":"汤原县"},{"parentCode":"230800","code":"230833","name":"抚远县"},{"parentCode":"230800","code":"230881","name":"同江市"},{"parentCode":"230800","code":"230882","name":"富锦市"},{"parentCode":"230000","code":"230900","name":"七台河市"},{"parentCode":"230900","code":"230901","name":"市辖区"},{"parentCode":"230900","code":"230902","name":"新兴区"},{"parentCode":"230900","code":"230903","name":"桃山区"},{"parentCode":"230900","code":"230904","name":"茄子河区"},{"parentCode":"230900","code":"230921","name":"勃利县"},{"parentCode":"230000","code":"231000","name":"牡丹江市"},{"parentCode":"231000","code":"231001","name":"市辖区"},{"parentCode":"231000","code":"231002","name":"东安区"},{"parentCode":"231000","code":"231003","name":"阳明区"},{"parentCode":"231000","code":"231004","name":"爱民区"},{"parentCode":"231000","code":"231005","name":"西安区"},{"parentCode":"231000","code":"231024","name":"东宁县"},{"parentCode":"231000","code":"231025","name":"林口县"},{"parentCode":"231000","code":"231081","name":"绥芬河市"},{"parentCode":"231000","code":"231083","name":"海林市"},{"parentCode":"231000","code":"231084","name":"宁安市"},{"parentCode":"231000","code":"231085","name":"穆棱市"},{"parentCode":"230000","code":"231100","name":"黑河市"},{"parentCode":"231100","code":"231101","name":"市辖区"},{"parentCode":"231100","code":"231102","name":"爱辉区"},{"parentCode":"231100","code":"231121","name":"嫩江县"},{"parentCode":"231100","code":"231123","name":"逊克县"},{"parentCode":"231100","code":"231124","name":"孙吴县"},{"parentCode":"231100","code":"231181","name":"北安市"},{"parentCode":"231100","code":"231182","name":"五大连池市"},{"parentCode":"230000","code":"231200","name":"绥化市"},{"parentCode":"231200","code":"231201","name":"市辖区"},{"parentCode":"231200","code":"231202","name":"北林区"},{"parentCode":"231200","code":"231221","name":"望奎县"},{"parentCode":"231200","code":"231222","name":"兰西县"},{"parentCode":"231200","code":"231223","name":"青冈县"},{"parentCode":"231200","code":"231224","name":"庆安县"},{"parentCode":"231200","code":"231225","name":"明水县"},{"parentCode":"231200","code":"231226","name":"绥棱县"},{"parentCode":"231200","code":"231281","name":"安达市"},{"parentCode":"231200","code":"231282","name":"肇东市"},{"parentCode":"231200","code":"231283","name":"海伦市"},{"parentCode":"230000","code":"232700","name":"大兴安岭地区"},{"parentCode":"232700","code":"232721","name":"呼玛县"},{"parentCode":"232700","code":"232722","name":"塔河县"},{"parentCode":"232700","code":"232723","name":"漠河县"},{"parentCode":"000000","code":"310000","name":"上海市"},{"parentCode":"310000","code":"310100","name":"市辖区"},{"parentCode":"310100","code":"310101","name":"黄浦区"},{"parentCode":"310100","code":"310104","name":"徐汇区"},{"parentCode":"310100","code":"310105","name":"长宁区"},{"parentCode":"310100","code":"310106","name":"静安区"},{"parentCode":"310100","code":"310107","name":"普陀区"},{"parentCode":"310100","code":"310108","name":"闸北区"},{"parentCode":"310100","code":"310109","name":"虹口区"},{"parentCode":"310100","code":"310110","name":"杨浦区"},{"parentCode":"310100","code":"310112","name":"闵行区"},{"parentCode":"310100","code":"310113","name":"宝山区"},{"parentCode":"310100","code":"310114","name":"嘉定区"},{"parentCode":"310100","code":"310115","name":"浦东新区"},{"parentCode":"310100","code":"310116","name":"金山区"},{"parentCode":"310100","code":"310117","name":"松江区"},{"parentCode":"310100","code":"310118","name":"青浦区"},{"parentCode":"310100","code":"310120","name":"奉贤区"},{"parentCode":"310000","code":"310200","name":"县"},{"parentCode":"310200","code":"310230","name":"崇明县"},{"parentCode":"000000","code":"320000","name":"江苏省"},{"parentCode":"320000","code":"320100","name":"南京市"},{"parentCode":"320100","code":"320101","name":"市辖区"},{"parentCode":"320100","code":"320102","name":"玄武区"},{"parentCode":"320100","code":"320104","name":"秦淮区"},{"parentCode":"320100","code":"320105","name":"建邺区"},{"parentCode":"320100","code":"320106","name":"鼓楼区"},{"parentCode":"320100","code":"320111","name":"浦口区"},{"parentCode":"320100","code":"320113","name":"栖霞区"},{"parentCode":"320100","code":"320114","name":"雨花台区"},{"parentCode":"320100","code":"320115","name":"江宁区"},{"parentCode":"320100","code":"320116","name":"六合区"},{"parentCode":"320100","code":"320117","name":"溧水区"},{"parentCode":"320100","code":"320118","name":"高淳区"},{"parentCode":"320000","code":"320200","name":"无锡市"},{"parentCode":"320200","code":"320201","name":"市辖区"},{"parentCode":"320200","code":"320202","name":"崇安区"},{"parentCode":"320200","code":"320203","name":"南长区"},{"parentCode":"320200","code":"320204","name":"北塘区"},{"parentCode":"320200","code":"320205","name":"锡山区"},{"parentCode":"320200","code":"320206","name":"惠山区"},{"parentCode":"320200","code":"320211","name":"滨湖区"},{"parentCode":"320200","code":"320281","name":"江阴市"},{"parentCode":"320200","code":"320282","name":"宜兴市"},{"parentCode":"320000","code":"320300","name":"徐州市"},{"parentCode":"320300","code":"320301","name":"市辖区"},{"parentCode":"320300","code":"320302","name":"鼓楼区"},{"parentCode":"320300","code":"320303","name":"云龙区"},{"parentCode":"320300","code":"320305","name":"贾汪区"},{"parentCode":"320300","code":"320311","name":"泉山区"},{"parentCode":"320300","code":"320312","name":"铜山区"},{"parentCode":"320300","code":"320321","name":"丰县"},{"parentCode":"320300","code":"320322","name":"沛县"},{"parentCode":"320300","code":"320324","name":"睢宁县"},{"parentCode":"320300","code":"320381","name":"新沂市"},{"parentCode":"320300","code":"320382","name":"邳州市"},{"parentCode":"320000","code":"320400","name":"常州市"},{"parentCode":"320400","code":"320401","name":"市辖区"},{"parentCode":"320400","code":"320402","name":"天宁区"},{"parentCode":"320400","code":"320404","name":"钟楼区"},{"parentCode":"320400","code":"320405","name":"戚墅堰区"},{"parentCode":"320400","code":"320411","name":"新北区"},{"parentCode":"320400","code":"320412","name":"武进区"},{"parentCode":"320400","code":"320481","name":"溧阳市"},{"parentCode":"320400","code":"320482","name":"金坛市"},{"parentCode":"320000","code":"320500","name":"苏州市"},{"parentCode":"320500","code":"320501","name":"市辖区"},{"parentCode":"320500","code":"320505","name":"虎丘区"},{"parentCode":"320500","code":"320506","name":"吴中区"},{"parentCode":"320500","code":"320507","name":"相城区"},{"parentCode":"320500","code":"320508","name":"姑苏区"},{"parentCode":"320500","code":"320509","name":"吴江区"},{"parentCode":"320500","code":"320581","name":"常熟市"},{"parentCode":"320500","code":"320582","name":"张家港市"},{"parentCode":"320500","code":"320583","name":"昆山市"},{"parentCode":"320500","code":"320585","name":"太仓市"},{"parentCode":"320000","code":"320600","name":"南通市"},{"parentCode":"320600","code":"320601","name":"市辖区"},{"parentCode":"320600","code":"320602","name":"崇川区"},{"parentCode":"320600","code":"320611","name":"港闸区"},{"parentCode":"320600","code":"320612","name":"通州区"},{"parentCode":"320600","code":"320621","name":"海安县"},{"parentCode":"320600","code":"320623","name":"如东县"},{"parentCode":"320600","code":"320681","name":"启东市"},{"parentCode":"320600","code":"320682","name":"如皋市"},{"parentCode":"320600","code":"320684","name":"海门市"},{"parentCode":"320000","code":"320700","name":"连云港市"},{"parentCode":"320700","code":"320701","name":"市辖区"},{"parentCode":"320700","code":"320703","name":"连云区"},{"parentCode":"320700","code":"320706","name":"海州区"},{"parentCode":"320700","code":"320707","name":"赣榆区"},{"parentCode":"320700","code":"320722","name":"东海县"},{"parentCode":"320700","code":"320723","name":"灌云县"},{"parentCode":"320700","code":"320724","name":"灌南县"},{"parentCode":"320000","code":"320800","name":"淮安市"},{"parentCode":"320800","code":"320801","name":"市辖区"},{"parentCode":"320800","code":"320802","name":"清河区"},{"parentCode":"320800","code":"320803","name":"淮安区"},{"parentCode":"320800","code":"320804","name":"淮阴区"},{"parentCode":"320800","code":"320811","name":"清浦区"},{"parentCode":"320800","code":"320826","name":"涟水县"},{"parentCode":"320800","code":"320829","name":"洪泽县"},{"parentCode":"320800","code":"320830","name":"盱眙县"},{"parentCode":"320800","code":"320831","name":"金湖县"},{"parentCode":"320000","code":"320900","name":"盐城市"},{"parentCode":"320900","code":"320901","name":"市辖区"},{"parentCode":"320900","code":"320902","name":"亭湖区"},{"parentCode":"320900","code":"320903","name":"盐都区"},{"parentCode":"320900","code":"320921","name":"响水县"},{"parentCode":"320900","code":"320922","name":"滨海县"},{"parentCode":"320900","code":"320923","name":"阜宁县"},{"parentCode":"320900","code":"320924","name":"射阳县"},{"parentCode":"320900","code":"320925","name":"建湖县"},{"parentCode":"320900","code":"320981","name":"东台市"},{"parentCode":"320900","code":"320982","name":"大丰市"},{"parentCode":"320000","code":"321000","name":"扬州市"},{"parentCode":"321000","code":"321001","name":"市辖区"},{"parentCode":"321000","code":"321002","name":"广陵区"},{"parentCode":"321000","code":"321003","name":"邗江区"},{"parentCode":"321000","code":"321012","name":"江都区"},{"parentCode":"321000","code":"321023","name":"宝应县"},{"parentCode":"321000","code":"321081","name":"仪征市"},{"parentCode":"321000","code":"321084","name":"高邮市"},{"parentCode":"320000","code":"321100","name":"镇江市"},{"parentCode":"321100","code":"321101","name":"市辖区"},{"parentCode":"321100","code":"321102","name":"京口区"},{"parentCode":"321100","code":"321111","name":"润州区"},{"parentCode":"321100","code":"321112","name":"丹徒区"},{"parentCode":"321100","code":"321181","name":"丹阳市"},{"parentCode":"321100","code":"321182","name":"扬中市"},{"parentCode":"321100","code":"321183","name":"句容市"},{"parentCode":"320000","code":"321200","name":"泰州市"},{"parentCode":"321200","code":"321201","name":"市辖区"},{"parentCode":"321200","code":"321202","name":"海陵区"},{"parentCode":"321200","code":"321203","name":"高港区"},{"parentCode":"321200","code":"321204","name":"姜堰区"},{"parentCode":"321200","code":"321281","name":"兴化市"},{"parentCode":"321200","code":"321282","name":"靖江市"},{"parentCode":"321200","code":"321283","name":"泰兴市"},{"parentCode":"320000","code":"321300","name":"宿迁市"},{"parentCode":"321300","code":"321301","name":"市辖区"},{"parentCode":"321300","code":"321302","name":"宿城区"},{"parentCode":"321300","code":"321311","name":"宿豫区"},{"parentCode":"321300","code":"321322","name":"沭阳县"},{"parentCode":"321300","code":"321323","name":"泗阳县"},{"parentCode":"321300","code":"321324","name":"泗洪县"},{"parentCode":"000000","code":"330000","name":"浙江省"},{"parentCode":"330000","code":"330100","name":"杭州市"},{"parentCode":"330100","code":"330101","name":"市辖区"},{"parentCode":"330100","code":"330102","name":"上城区"},{"parentCode":"330100","code":"330103","name":"下城区"},{"parentCode":"330100","code":"330104","name":"江干区"},{"parentCode":"330100","code":"330105","name":"拱墅区"},{"parentCode":"330100","code":"330106","name":"西湖区"},{"parentCode":"330100","code":"330108","name":"滨江区"},{"parentCode":"330100","code":"330109","name":"萧山区"},{"parentCode":"330100","code":"330110","name":"余杭区"},{"parentCode":"330100","code":"330122","name":"桐庐县"},{"parentCode":"330100","code":"330127","name":"淳安县"},{"parentCode":"330100","code":"330182","name":"建德市"},{"parentCode":"330100","code":"330183","name":"富阳市"},{"parentCode":"330100","code":"330185","name":"临安市"},{"parentCode":"330000","code":"330200","name":"宁波市"},{"parentCode":"330200","code":"330201","name":"市辖区"},{"parentCode":"330200","code":"330203","name":"海曙区"},{"parentCode":"330200","code":"330204","name":"江东区"},{"parentCode":"330200","code":"330205","name":"江北区"},{"parentCode":"330200","code":"330206","name":"北仑区"},{"parentCode":"330200","code":"330211","name":"镇海区"},{"parentCode":"330200","code":"330212","name":"鄞州区"},{"parentCode":"330200","code":"330225","name":"象山县"},{"parentCode":"330200","code":"330226","name":"宁海县"},{"parentCode":"330200","code":"330281","name":"余姚市"},{"parentCode":"330200","code":"330282","name":"慈溪市"},{"parentCode":"330200","code":"330283","name":"奉化市"},{"parentCode":"330000","code":"330300","name":"温州市"},{"parentCode":"330300","code":"330301","name":"市辖区"},{"parentCode":"330300","code":"330302","name":"鹿城区"},{"parentCode":"330300","code":"330303","name":"龙湾区"},{"parentCode":"330300","code":"330304","name":"瓯海区"},{"parentCode":"330300","code":"330322","name":"洞头县"},{"parentCode":"330300","code":"330324","name":"永嘉县"},{"parentCode":"330300","code":"330326","name":"平阳县"},{"parentCode":"330300","code":"330327","name":"苍南县"},{"parentCode":"330300","code":"330328","name":"文成县"},{"parentCode":"330300","code":"330329","name":"泰顺县"},{"parentCode":"330300","code":"330381","name":"瑞安市"},{"parentCode":"330300","code":"330382","name":"乐清市"},{"parentCode":"330000","code":"330400","name":"嘉兴市"},{"parentCode":"330400","code":"330401","name":"市辖区"},{"parentCode":"330400","code":"330402","name":"南湖区"},{"parentCode":"330400","code":"330411","name":"秀洲区"},{"parentCode":"330400","code":"330421","name":"嘉善县"},{"parentCode":"330400","code":"330424","name":"海盐县"},{"parentCode":"330400","code":"330481","name":"海宁市"},{"parentCode":"330400","code":"330482","name":"平湖市"},{"parentCode":"330400","code":"330483","name":"桐乡市"},{"parentCode":"330000","code":"330500","name":"湖州市"},{"parentCode":"330500","code":"330501","name":"市辖区"},{"parentCode":"330500","code":"330502","name":"吴兴区"},{"parentCode":"330500","code":"330503","name":"南浔区"},{"parentCode":"330500","code":"330521","name":"德清县"},{"parentCode":"330500","code":"330522","name":"长兴县"},{"parentCode":"330500","code":"330523","name":"安吉县"},{"parentCode":"330000","code":"330600","name":"绍兴市"},{"parentCode":"330600","code":"330601","name":"市辖区"},{"parentCode":"330600","code":"330602","name":"越城区"},{"parentCode":"330600","code":"330603","name":"柯桥区"},{"parentCode":"330600","code":"330604","name":"上虞区"},{"parentCode":"330600","code":"330624","name":"新昌县"},{"parentCode":"330600","code":"330681","name":"诸暨市"},{"parentCode":"330600","code":"330683","name":"嵊州市"},{"parentCode":"330000","code":"330700","name":"金华市"},{"parentCode":"330700","code":"330701","name":"市辖区"},{"parentCode":"330700","code":"330702","name":"婺城区"},{"parentCode":"330700","code":"330703","name":"金东区"},{"parentCode":"330700","code":"330723","name":"武义县"},{"parentCode":"330700","code":"330726","name":"浦江县"},{"parentCode":"330700","code":"330727","name":"磐安县"},{"parentCode":"330700","code":"330781","name":"兰溪市"},{"parentCode":"330700","code":"330782","name":"义乌市"},{"parentCode":"330700","code":"330783","name":"东阳市"},{"parentCode":"330700","code":"330784","name":"永康市"},{"parentCode":"330000","code":"330800","name":"衢州市"},{"parentCode":"330800","code":"330801","name":"市辖区"},{"parentCode":"330800","code":"330802","name":"柯城区"},{"parentCode":"330800","code":"330803","name":"衢江区"},{"parentCode":"330800","code":"330822","name":"常山县"},{"parentCode":"330800","code":"330824","name":"开化县"},{"parentCode":"330800","code":"330825","name":"龙游县"},{"parentCode":"330800","code":"330881","name":"江山市"},{"parentCode":"330000","code":"330900","name":"舟山市"},{"parentCode":"330900","code":"330901","name":"市辖区"},{"parentCode":"330900","code":"330902","name":"定海区"},{"parentCode":"330900","code":"330903","name":"普陀区"},{"parentCode":"330900","code":"330921","name":"岱山县"},{"parentCode":"330900","code":"330922","name":"嵊泗县"},{"parentCode":"330000","code":"331000","name":"台州市"},{"parentCode":"331000","code":"331001","name":"市辖区"},{"parentCode":"331000","code":"331002","name":"椒江区"},{"parentCode":"331000","code":"331003","name":"黄岩区"},{"parentCode":"331000","code":"331004","name":"路桥区"},{"parentCode":"331000","code":"331021","name":"玉环县"},{"parentCode":"331000","code":"331022","name":"三门县"},{"parentCode":"331000","code":"331023","name":"天台县"},{"parentCode":"331000","code":"331024","name":"仙居县"},{"parentCode":"331000","code":"331081","name":"温岭市"},{"parentCode":"331000","code":"331082","name":"临海市"},{"parentCode":"330000","code":"331100","name":"丽水市"},{"parentCode":"331100","code":"331101","name":"市辖区"},{"parentCode":"331100","code":"331102","name":"莲都区"},{"parentCode":"331100","code":"331121","name":"青田县"},{"parentCode":"331100","code":"331122","name":"缙云县"},{"parentCode":"331100","code":"331123","name":"遂昌县"},{"parentCode":"331100","code":"331124","name":"松阳县"},{"parentCode":"331100","code":"331125","name":"云和县"},{"parentCode":"331100","code":"331126","name":"庆元县"},{"parentCode":"331100","code":"331127","name":"景宁畲族自治县"},{"parentCode":"331100","code":"331181","name":"龙泉市"},{"parentCode":"000000","code":"340000","name":"安徽省"},{"parentCode":"340000","code":"340100","name":"合肥市"},{"parentCode":"340100","code":"340101","name":"市辖区"},{"parentCode":"340100","code":"340102","name":"瑶海区"},{"parentCode":"340100","code":"340103","name":"庐阳区"},{"parentCode":"340100","code":"340104","name":"蜀山区"},{"parentCode":"340100","code":"340111","name":"包河区"},{"parentCode":"340100","code":"340121","name":"长丰县"},{"parentCode":"340100","code":"340122","name":"肥东县"},{"parentCode":"340100","code":"340123","name":"肥西县"},{"parentCode":"340100","code":"340124","name":"庐江县"},{"parentCode":"340100","code":"340181","name":"巢湖市"},{"parentCode":"340000","code":"340200","name":"芜湖市"},{"parentCode":"340200","code":"340201","name":"市辖区"},{"parentCode":"340200","code":"340202","name":"镜湖区"},{"parentCode":"340200","code":"340203","name":"弋江区"},{"parentCode":"340200","code":"340207","name":"鸠江区"},{"parentCode":"340200","code":"340208","name":"三山区"},{"parentCode":"340200","code":"340221","name":"芜湖县"},{"parentCode":"340200","code":"340222","name":"繁昌县"},{"parentCode":"340200","code":"340223","name":"南陵县"},{"parentCode":"340200","code":"340225","name":"无为县"},{"parentCode":"340000","code":"340300","name":"蚌埠市"},{"parentCode":"340300","code":"340301","name":"市辖区"},{"parentCode":"340300","code":"340302","name":"龙子湖区"},{"parentCode":"340300","code":"340303","name":"蚌山区"},{"parentCode":"340300","code":"340304","name":"禹会区"},{"parentCode":"340300","code":"340311","name":"淮上区"},{"parentCode":"340300","code":"340321","name":"怀远县"},{"parentCode":"340300","code":"340322","name":"五河县"},{"parentCode":"340300","code":"340323","name":"固镇县"},{"parentCode":"340000","code":"340400","name":"淮南市"},{"parentCode":"340400","code":"340401","name":"市辖区"},{"parentCode":"340400","code":"340402","name":"大通区"},{"parentCode":"340400","code":"340403","name":"田家庵区"},{"parentCode":"340400","code":"340404","name":"谢家集区"},{"parentCode":"340400","code":"340405","name":"八公山区"},{"parentCode":"340400","code":"340406","name":"潘集区"},{"parentCode":"340400","code":"340421","name":"凤台县"},{"parentCode":"340000","code":"340500","name":"马鞍山市"},{"parentCode":"340500","code":"340501","name":"市辖区"},{"parentCode":"340500","code":"340503","name":"花山区"},{"parentCode":"340500","code":"340504","name":"雨山区"},{"parentCode":"340500","code":"340506","name":"博望区"},{"parentCode":"340500","code":"340521","name":"当涂县"},{"parentCode":"340500","code":"340522","name":"含山县"},{"parentCode":"340500","code":"340523","name":"和县"},{"parentCode":"340000","code":"340600","name":"淮北市"},{"parentCode":"340600","code":"340601","name":"市辖区"},{"parentCode":"340600","code":"340602","name":"杜集区"},{"parentCode":"340600","code":"340603","name":"相山区"},{"parentCode":"340600","code":"340604","name":"烈山区"},{"parentCode":"340600","code":"340621","name":"濉溪县"},{"parentCode":"340000","code":"340700","name":"铜陵市"},{"parentCode":"340700","code":"340701","name":"市辖区"},{"parentCode":"340700","code":"340702","name":"铜官山区"},{"parentCode":"340700","code":"340703","name":"狮子山区"},{"parentCode":"340700","code":"340711","name":"郊区"},{"parentCode":"340700","code":"340721","name":"铜陵县"},{"parentCode":"340000","code":"340800","name":"安庆市"},{"parentCode":"340800","code":"340801","name":"市辖区"},{"parentCode":"340800","code":"340802","name":"迎江区"},{"parentCode":"340800","code":"340803","name":"大观区"},{"parentCode":"340800","code":"340811","name":"宜秀区"},{"parentCode":"340800","code":"340822","name":"怀宁县"},{"parentCode":"340800","code":"340823","name":"枞阳县"},{"parentCode":"340800","code":"340824","name":"潜山县"},{"parentCode":"340800","code":"340825","name":"太湖县"},{"parentCode":"340800","code":"340826","name":"宿松县"},{"parentCode":"340800","code":"340827","name":"望江县"},{"parentCode":"340800","code":"340828","name":"岳西县"},{"parentCode":"340800","code":"340881","name":"桐城市"},{"parentCode":"340000","code":"341000","name":"黄山市"},{"parentCode":"341000","code":"341001","name":"市辖区"},{"parentCode":"341000","code":"341002","name":"屯溪区"},{"parentCode":"341000","code":"341003","name":"黄山区"},{"parentCode":"341000","code":"341004","name":"徽州区"},{"parentCode":"341000","code":"341021","name":"歙县"},{"parentCode":"341000","code":"341022","name":"休宁县"},{"parentCode":"341000","code":"341023","name":"黟县"},{"parentCode":"341000","code":"341024","name":"祁门县"},{"parentCode":"340000","code":"341100","name":"滁州市"},{"parentCode":"341100","code":"341101","name":"市辖区"},{"parentCode":"341100","code":"341102","name":"琅琊区"},{"parentCode":"341100","code":"341103","name":"南谯区"},{"parentCode":"341100","code":"341122","name":"来安县"},{"parentCode":"341100","code":"341124","name":"全椒县"},{"parentCode":"341100","code":"341125","name":"定远县"},{"parentCode":"341100","code":"341126","name":"凤阳县"},{"parentCode":"341100","code":"341181","name":"天长市"},{"parentCode":"341100","code":"341182","name":"明光市"},{"parentCode":"340000","code":"341200","name":"阜阳市"},{"parentCode":"341200","code":"341201","name":"市辖区"},{"parentCode":"341200","code":"341202","name":"颍州区"},{"parentCode":"341200","code":"341203","name":"颍东区"},{"parentCode":"341200","code":"341204","name":"颍泉区"},{"parentCode":"341200","code":"341221","name":"临泉县"},{"parentCode":"341200","code":"341222","name":"太和县"},{"parentCode":"341200","code":"341225","name":"阜南县"},{"parentCode":"341200","code":"341226","name":"颍上县"},{"parentCode":"341200","code":"341282","name":"界首市"},{"parentCode":"340000","code":"341300","name":"宿州市"},{"parentCode":"341300","code":"341301","name":"市辖区"},{"parentCode":"341300","code":"341302","name":"埇桥区"},{"parentCode":"341300","code":"341321","name":"砀山县"},{"parentCode":"341300","code":"341322","name":"萧县"},{"parentCode":"341300","code":"341323","name":"灵璧县"},{"parentCode":"341300","code":"341324","name":"泗县"},{"parentCode":"340000","code":"341500","name":"六安市"},{"parentCode":"341500","code":"341501","name":"市辖区"},{"parentCode":"341500","code":"341502","name":"金安区"},{"parentCode":"341500","code":"341503","name":"裕安区"},{"parentCode":"341500","code":"341521","name":"寿县"},{"parentCode":"341500","code":"341522","name":"霍邱县"},{"parentCode":"341500","code":"341523","name":"舒城县"},{"parentCode":"341500","code":"341524","name":"金寨县"},{"parentCode":"341500","code":"341525","name":"霍山县"},{"parentCode":"340000","code":"341600","name":"亳州市"},{"parentCode":"341600","code":"341601","name":"市辖区"},{"parentCode":"341600","code":"341602","name":"谯城区"},{"parentCode":"341600","code":"341621","name":"涡阳县"},{"parentCode":"341600","code":"341622","name":"蒙城县"},{"parentCode":"341600","code":"341623","name":"利辛县"},{"parentCode":"340000","code":"341700","name":"池州市"},{"parentCode":"341700","code":"341701","name":"市辖区"},{"parentCode":"341700","code":"341702","name":"贵池区"},{"parentCode":"341700","code":"341721","name":"东至县"},{"parentCode":"341700","code":"341722","name":"石台县"},{"parentCode":"341700","code":"341723","name":"青阳县"},{"parentCode":"340000","code":"341800","name":"宣城市"},{"parentCode":"341800","code":"341801","name":"市辖区"},{"parentCode":"341800","code":"341802","name":"宣州区"},{"parentCode":"341800","code":"341821","name":"郎溪县"},{"parentCode":"341800","code":"341822","name":"广德县"},{"parentCode":"341800","code":"341823","name":"泾县"},{"parentCode":"341800","code":"341824","name":"绩溪县"},{"parentCode":"341800","code":"341825","name":"旌德县"},{"parentCode":"341800","code":"341881","name":"宁国市"},{"parentCode":"000000","code":"350000","name":"福建省"},{"parentCode":"350000","code":"350100","name":"福州市"},{"parentCode":"350100","code":"350101","name":"市辖区"},{"parentCode":"350100","code":"350102","name":"鼓楼区"},{"parentCode":"350100","code":"350103","name":"台江区"},{"parentCode":"350100","code":"350104","name":"仓山区"},{"parentCode":"350100","code":"350105","name":"马尾区"},{"parentCode":"350100","code":"350111","name":"晋安区"},{"parentCode":"350100","code":"350121","name":"闽侯县"},{"parentCode":"350100","code":"350122","name":"连江县"},{"parentCode":"350100","code":"350123","name":"罗源县"},{"parentCode":"350100","code":"350124","name":"闽清县"},{"parentCode":"350100","code":"350125","name":"永泰县"},{"parentCode":"350100","code":"350128","name":"平潭县"},{"parentCode":"350100","code":"350181","name":"福清市"},{"parentCode":"350100","code":"350182","name":"长乐市"},{"parentCode":"350000","code":"350200","name":"厦门市"},{"parentCode":"350200","code":"350201","name":"市辖区"},{"parentCode":"350200","code":"350203","name":"思明区"},{"parentCode":"350200","code":"350205","name":"海沧区"},{"parentCode":"350200","code":"350206","name":"湖里区"},{"parentCode":"350200","code":"350211","name":"集美区"},{"parentCode":"350200","code":"350212","name":"同安区"},{"parentCode":"350200","code":"350213","name":"翔安区"},{"parentCode":"350000","code":"350300","name":"莆田市"},{"parentCode":"350300","code":"350301","name":"市辖区"},{"parentCode":"350300","code":"350302","name":"城厢区"},{"parentCode":"350300","code":"350303","name":"涵江区"},{"parentCode":"350300","code":"350304","name":"荔城区"},{"parentCode":"350300","code":"350305","name":"秀屿区"},{"parentCode":"350300","code":"350322","name":"仙游县"},{"parentCode":"350000","code":"350400","name":"三明市"},{"parentCode":"350400","code":"350401","name":"市辖区"},{"parentCode":"350400","code":"350402","name":"梅列区"},{"parentCode":"350400","code":"350403","name":"三元区"},{"parentCode":"350400","code":"350421","name":"明溪县"},{"parentCode":"350400","code":"350423","name":"清流县"},{"parentCode":"350400","code":"350424","name":"宁化县"},{"parentCode":"350400","code":"350425","name":"大田县"},{"parentCode":"350400","code":"350426","name":"尤溪县"},{"parentCode":"350400","code":"350427","name":"沙县"},{"parentCode":"350400","code":"350428","name":"将乐县"},{"parentCode":"350400","code":"350429","name":"泰宁县"},{"parentCode":"350400","code":"350430","name":"建宁县"},{"parentCode":"350400","code":"350481","name":"永安市"},{"parentCode":"350000","code":"350500","name":"泉州市"},{"parentCode":"350500","code":"350501","name":"市辖区"},{"parentCode":"350500","code":"350502","name":"鲤城区"},{"parentCode":"350500","code":"350503","name":"丰泽区"},{"parentCode":"350500","code":"350504","name":"洛江区"},{"parentCode":"350500","code":"350505","name":"泉港区"},{"parentCode":"350500","code":"350521","name":"惠安县"},{"parentCode":"350500","code":"350524","name":"安溪县"},{"parentCode":"350500","code":"350525","name":"永春县"},{"parentCode":"350500","code":"350526","name":"德化县"},{"parentCode":"350500","code":"350527","name":"金门县"},{"parentCode":"350500","code":"350581","name":"石狮市"},{"parentCode":"350500","code":"350582","name":"晋江市"},{"parentCode":"350500","code":"350583","name":"南安市"},{"parentCode":"350000","code":"350600","name":"漳州市"},{"parentCode":"350600","code":"350601","name":"市辖区"},{"parentCode":"350600","code":"350602","name":"芗城区"},{"parentCode":"350600","code":"350603","name":"龙文区"},{"parentCode":"350600","code":"350622","name":"云霄县"},{"parentCode":"350600","code":"350623","name":"漳浦县"},{"parentCode":"350600","code":"350624","name":"诏安县"},{"parentCode":"350600","code":"350625","name":"长泰县"},{"parentCode":"350600","code":"350626","name":"东山县"},{"parentCode":"350600","code":"350627","name":"南靖县"},{"parentCode":"350600","code":"350628","name":"平和县"},{"parentCode":"350600","code":"350629","name":"华安县"},{"parentCode":"350600","code":"350681","name":"龙海市"},{"parentCode":"350000","code":"350700","name":"南平市"},{"parentCode":"350700","code":"350701","name":"市辖区"},{"parentCode":"350700","code":"350702","name":"延平区"},{"parentCode":"350700","code":"350721","name":"顺昌县"},{"parentCode":"350700","code":"350722","name":"浦城县"},{"parentCode":"350700","code":"350723","name":"光泽县"},{"parentCode":"350700","code":"350724","name":"松溪县"},{"parentCode":"350700","code":"350725","name":"政和县"},{"parentCode":"350700","code":"350781","name":"邵武市"},{"parentCode":"350700","code":"350782","name":"武夷山市"},{"parentCode":"350700","code":"350783","name":"建瓯市"},{"parentCode":"350700","code":"350784","name":"建阳市"},{"parentCode":"350000","code":"350800","name":"龙岩市"},{"parentCode":"350800","code":"350801","name":"市辖区"},{"parentCode":"350800","code":"350802","name":"新罗区"},{"parentCode":"350800","code":"350821","name":"长汀县"},{"parentCode":"350800","code":"350822","name":"永定县"},{"parentCode":"350800","code":"350823","name":"上杭县"},{"parentCode":"350800","code":"350824","name":"武平县"},{"parentCode":"350800","code":"350825","name":"连城县"},{"parentCode":"350800","code":"350881","name":"漳平市"},{"parentCode":"350000","code":"350900","name":"宁德市"},{"parentCode":"350900","code":"350901","name":"市辖区"},{"parentCode":"350900","code":"350902","name":"蕉城区"},{"parentCode":"350900","code":"350921","name":"霞浦县"},{"parentCode":"350900","code":"350922","name":"古田县"},{"parentCode":"350900","code":"350923","name":"屏南县"},{"parentCode":"350900","code":"350924","name":"寿宁县"},{"parentCode":"350900","code":"350925","name":"周宁县"},{"parentCode":"350900","code":"350926","name":"柘荣县"},{"parentCode":"350900","code":"350981","name":"福安市"},{"parentCode":"350900","code":"350982","name":"福鼎市"},{"parentCode":"000000","code":"360000","name":"江西省"},{"parentCode":"360000","code":"360100","name":"南昌市"},{"parentCode":"360100","code":"360101","name":"市辖区"},{"parentCode":"360100","code":"360102","name":"东湖区"},{"parentCode":"360100","code":"360103","name":"西湖区"},{"parentCode":"360100","code":"360104","name":"青云谱区"},{"parentCode":"360100","code":"360105","name":"湾里区"},{"parentCode":"360100","code":"360111","name":"青山湖区"},{"parentCode":"360100","code":"360121","name":"南昌县"},{"parentCode":"360100","code":"360122","name":"新建县"},{"parentCode":"360100","code":"360123","name":"安义县"},{"parentCode":"360100","code":"360124","name":"进贤县"},{"parentCode":"360000","code":"360200","name":"景德镇市"},{"parentCode":"360200","code":"360201","name":"市辖区"},{"parentCode":"360200","code":"360202","name":"昌江区"},{"parentCode":"360200","code":"360203","name":"珠山区"},{"parentCode":"360200","code":"360222","name":"浮梁县"},{"parentCode":"360200","code":"360281","name":"乐平市"},{"parentCode":"360000","code":"360300","name":"萍乡市"},{"parentCode":"360300","code":"360301","name":"市辖区"},{"parentCode":"360300","code":"360302","name":"安源区"},{"parentCode":"360300","code":"360313","name":"湘东区"},{"parentCode":"360300","code":"360321","name":"莲花县"},{"parentCode":"360300","code":"360322","name":"上栗县"},{"parentCode":"360300","code":"360323","name":"芦溪县"},{"parentCode":"360000","code":"360400","name":"九江市"},{"parentCode":"360400","code":"360401","name":"市辖区"},{"parentCode":"360400","code":"360402","name":"庐山区"},{"parentCode":"360400","code":"360403","name":"浔阳区"},{"parentCode":"360400","code":"360421","name":"九江县"},{"parentCode":"360400","code":"360423","name":"武宁县"},{"parentCode":"360400","code":"360424","name":"修水县"},{"parentCode":"360400","code":"360425","name":"永修县"},{"parentCode":"360400","code":"360426","name":"德安县"},{"parentCode":"360400","code":"360427","name":"星子县"},{"parentCode":"360400","code":"360428","name":"都昌县"},{"parentCode":"360400","code":"360429","name":"湖口县"},{"parentCode":"360400","code":"360430","name":"彭泽县"},{"parentCode":"360400","code":"360481","name":"瑞昌市"},{"parentCode":"360400","code":"360482","name":"共青城市"},{"parentCode":"360000","code":"360500","name":"新余市"},{"parentCode":"360500","code":"360501","name":"市辖区"},{"parentCode":"360500","code":"360502","name":"渝水区"},{"parentCode":"360500","code":"360521","name":"分宜县"},{"parentCode":"360000","code":"360600","name":"鹰潭市"},{"parentCode":"360600","code":"360601","name":"市辖区"},{"parentCode":"360600","code":"360602","name":"月湖区"},{"parentCode":"360600","code":"360622","name":"余江县"},{"parentCode":"360600","code":"360681","name":"贵溪市"},{"parentCode":"360000","code":"360700","name":"赣州市"},{"parentCode":"360700","code":"360701","name":"市辖区"},{"parentCode":"360700","code":"360702","name":"章贡区"},{"parentCode":"360700","code":"360703","name":"南康区"},{"parentCode":"360700","code":"360721","name":"赣县"},{"parentCode":"360700","code":"360722","name":"信丰县"},{"parentCode":"360700","code":"360723","name":"大余县"},{"parentCode":"360700","code":"360724","name":"上犹县"},{"parentCode":"360700","code":"360725","name":"崇义县"},{"parentCode":"360700","code":"360726","name":"安远县"},{"parentCode":"360700","code":"360727","name":"龙南县"},{"parentCode":"360700","code":"360728","name":"定南县"},{"parentCode":"360700","code":"360729","name":"全南县"},{"parentCode":"360700","code":"360730","name":"宁都县"},{"parentCode":"360700","code":"360731","name":"于都县"},{"parentCode":"360700","code":"360732","name":"兴国县"},{"parentCode":"360700","code":"360733","name":"会昌县"},{"parentCode":"360700","code":"360734","name":"寻乌县"},{"parentCode":"360700","code":"360735","name":"石城县"},{"parentCode":"360700","code":"360781","name":"瑞金市"},{"parentCode":"360000","code":"360800","name":"吉安市"},{"parentCode":"360800","code":"360801","name":"市辖区"},{"parentCode":"360800","code":"360802","name":"吉州区"},{"parentCode":"360800","code":"360803","name":"青原区"},{"parentCode":"360800","code":"360821","name":"吉安县"},{"parentCode":"360800","code":"360822","name":"吉水县"},{"parentCode":"360800","code":"360823","name":"峡江县"},{"parentCode":"360800","code":"360824","name":"新干县"},{"parentCode":"360800","code":"360825","name":"永丰县"},{"parentCode":"360800","code":"360826","name":"泰和县"},{"parentCode":"360800","code":"360827","name":"遂川县"},{"parentCode":"360800","code":"360828","name":"万安县"},{"parentCode":"360800","code":"360829","name":"安福县"},{"parentCode":"360800","code":"360830","name":"永新县"},{"parentCode":"360800","code":"360881","name":"井冈山市"},{"parentCode":"360000","code":"360900","name":"宜春市"},{"parentCode":"360900","code":"360901","name":"市辖区"},{"parentCode":"360900","code":"360902","name":"袁州区"},{"parentCode":"360900","code":"360921","name":"奉新县"},{"parentCode":"360900","code":"360922","name":"万载县"},{"parentCode":"360900","code":"360923","name":"上高县"},{"parentCode":"360900","code":"360924","name":"宜丰县"},{"parentCode":"360900","code":"360925","name":"靖安县"},{"parentCode":"360900","code":"360926","name":"铜鼓县"},{"parentCode":"360900","code":"360981","name":"丰城市"},{"parentCode":"360900","code":"360982","name":"樟树市"},{"parentCode":"360900","code":"360983","name":"高安市"},{"parentCode":"360000","code":"361000","name":"抚州市"},{"parentCode":"361000","code":"361001","name":"市辖区"},{"parentCode":"361000","code":"361002","name":"临川区"},{"parentCode":"361000","code":"361021","name":"南城县"},{"parentCode":"361000","code":"361022","name":"黎川县"},{"parentCode":"361000","code":"361023","name":"南丰县"},{"parentCode":"361000","code":"361024","name":"崇仁县"},{"parentCode":"361000","code":"361025","name":"乐安县"},{"parentCode":"361000","code":"361026","name":"宜黄县"},{"parentCode":"361000","code":"361027","name":"金溪县"},{"parentCode":"361000","code":"361028","name":"资溪县"},{"parentCode":"361000","code":"361029","name":"东乡县"},{"parentCode":"361000","code":"361030","name":"广昌县"},{"parentCode":"360000","code":"361100","name":"上饶市"},{"parentCode":"361100","code":"361101","name":"市辖区"},{"parentCode":"361100","code":"361102","name":"信州区"},{"parentCode":"361100","code":"361121","name":"上饶县"},{"parentCode":"361100","code":"361122","name":"广丰县"},{"parentCode":"361100","code":"361123","name":"玉山县"},{"parentCode":"361100","code":"361124","name":"铅山县"},{"parentCode":"361100","code":"361125","name":"横峰县"},{"parentCode":"361100","code":"361126","name":"弋阳县"},{"parentCode":"361100","code":"361127","name":"余干县"},{"parentCode":"361100","code":"361128","name":"鄱阳县"},{"parentCode":"361100","code":"361129","name":"万年县"},{"parentCode":"361100","code":"361130","name":"婺源县"},{"parentCode":"361100","code":"361181","name":"德兴市"},{"parentCode":"000000","code":"370000","name":"山东省"},{"parentCode":"370000","code":"370100","name":"济南市"},{"parentCode":"370100","code":"370101","name":"市辖区"},{"parentCode":"370100","code":"370102","name":"历下区"},{"parentCode":"370100","code":"370103","name":"市中区"},{"parentCode":"370100","code":"370104","name":"槐荫区"},{"parentCode":"370100","code":"370105","name":"天桥区"},{"parentCode":"370100","code":"370112","name":"历城区"},{"parentCode":"370100","code":"370113","name":"长清区"},{"parentCode":"370100","code":"370124","name":"平阴县"},{"parentCode":"370100","code":"370125","name":"济阳县"},{"parentCode":"370100","code":"370126","name":"商河县"},{"parentCode":"370100","code":"370181","name":"章丘市"},{"parentCode":"370000","code":"370200","name":"青岛市"},{"parentCode":"370200","code":"370201","name":"市辖区"},{"parentCode":"370200","code":"370202","name":"市南区"},{"parentCode":"370200","code":"370203","name":"市北区"},{"parentCode":"370200","code":"370211","name":"黄岛区"},{"parentCode":"370200","code":"370212","name":"崂山区"},{"parentCode":"370200","code":"370213","name":"李沧区"},{"parentCode":"370200","code":"370214","name":"城阳区"},{"parentCode":"370200","code":"370281","name":"胶州市"},{"parentCode":"370200","code":"370282","name":"即墨市"},{"parentCode":"370200","code":"370283","name":"平度市"},{"parentCode":"370200","code":"370285","name":"莱西市"},{"parentCode":"370000","code":"370300","name":"淄博市"},{"parentCode":"370300","code":"370301","name":"市辖区"},{"parentCode":"370300","code":"370302","name":"淄川区"},{"parentCode":"370300","code":"370303","name":"张店区"},{"parentCode":"370300","code":"370304","name":"博山区"},{"parentCode":"370300","code":"370305","name":"临淄区"},{"parentCode":"370300","code":"370306","name":"周村区"},{"parentCode":"370300","code":"370321","name":"桓台县"},{"parentCode":"370300","code":"370322","name":"高青县"},{"parentCode":"370300","code":"370323","name":"沂源县"},{"parentCode":"370000","code":"370400","name":"枣庄市"},{"parentCode":"370400","code":"370401","name":"市辖区"},{"parentCode":"370400","code":"370402","name":"市中区"},{"parentCode":"370400","code":"370403","name":"薛城区"},{"parentCode":"370400","code":"370404","name":"峄城区"},{"parentCode":"370400","code":"370405","name":"台儿庄区"},{"parentCode":"370400","code":"370406","name":"山亭区"},{"parentCode":"370400","code":"370481","name":"滕州市"},{"parentCode":"370000","code":"370500","name":"东营市"},{"parentCode":"370500","code":"370501","name":"市辖区"},{"parentCode":"370500","code":"370502","name":"东营区"},{"parentCode":"370500","code":"370503","name":"河口区"},{"parentCode":"370500","code":"370521","name":"垦利县"},{"parentCode":"370500","code":"370522","name":"利津县"},{"parentCode":"370500","code":"370523","name":"广饶县"},{"parentCode":"370000","code":"370600","name":"烟台市"},{"parentCode":"370600","code":"370601","name":"市辖区"},{"parentCode":"370600","code":"370602","name":"芝罘区"},{"parentCode":"370600","code":"370611","name":"福山区"},{"parentCode":"370600","code":"370612","name":"牟平区"},{"parentCode":"370600","code":"370613","name":"莱山区"},{"parentCode":"370600","code":"370634","name":"长岛县"},{"parentCode":"370600","code":"370681","name":"龙口市"},{"parentCode":"370600","code":"370682","name":"莱阳市"},{"parentCode":"370600","code":"370683","name":"莱州市"},{"parentCode":"370600","code":"370684","name":"蓬莱市"},{"parentCode":"370600","code":"370685","name":"招远市"},{"parentCode":"370600","code":"370686","name":"栖霞市"},{"parentCode":"370600","code":"370687","name":"海阳市"},{"parentCode":"370000","code":"370700","name":"潍坊市"},{"parentCode":"370700","code":"370701","name":"市辖区"},{"parentCode":"370700","code":"370702","name":"潍城区"},{"parentCode":"370700","code":"370703","name":"寒亭区"},{"parentCode":"370700","code":"370704","name":"坊子区"},{"parentCode":"370700","code":"370705","name":"奎文区"},{"parentCode":"370700","code":"370724","name":"临朐县"},{"parentCode":"370700","code":"370725","name":"昌乐县"},{"parentCode":"370700","code":"370781","name":"青州市"},{"parentCode":"370700","code":"370782","name":"诸城市"},{"parentCode":"370700","code":"370783","name":"寿光市"},{"parentCode":"370700","code":"370784","name":"安丘市"},{"parentCode":"370700","code":"370785","name":"高密市"},{"parentCode":"370700","code":"370786","name":"昌邑市"},{"parentCode":"370000","code":"370800","name":"济宁市"},{"parentCode":"370800","code":"370801","name":"市辖区"},{"parentCode":"370800","code":"370811","name":"任城区"},{"parentCode":"370800","code":"370812","name":"兖州区"},{"parentCode":"370800","code":"370826","name":"微山县"},{"parentCode":"370800","code":"370827","name":"鱼台县"},{"parentCode":"370800","code":"370828","name":"金乡县"},{"parentCode":"370800","code":"370829","name":"嘉祥县"},{"parentCode":"370800","code":"370830","name":"汶上县"},{"parentCode":"370800","code":"370831","name":"泗水县"},{"parentCode":"370800","code":"370832","name":"梁山县"},{"parentCode":"370800","code":"370881","name":"曲阜市"},{"parentCode":"370800","code":"370883","name":"邹城市"},{"parentCode":"370000","code":"370900","name":"泰安市"},{"parentCode":"370900","code":"370901","name":"市辖区"},{"parentCode":"370900","code":"370902","name":"泰山区"},{"parentCode":"370900","code":"370911","name":"岱岳区"},{"parentCode":"370900","code":"370921","name":"宁阳县"},{"parentCode":"370900","code":"370923","name":"东平县"},{"parentCode":"370900","code":"370982","name":"新泰市"},{"parentCode":"370900","code":"370983","name":"肥城市"},{"parentCode":"370000","code":"371000","name":"威海市"},{"parentCode":"371000","code":"371001","name":"市辖区"},{"parentCode":"371000","code":"371002","name":"环翠区"},{"parentCode":"371000","code":"371003","name":"文登区"},{"parentCode":"371000","code":"371082","name":"荣成市"},{"parentCode":"371000","code":"371083","name":"乳山市"},{"parentCode":"370000","code":"371100","name":"日照市"},{"parentCode":"371100","code":"371101","name":"市辖区"},{"parentCode":"371100","code":"371102","name":"东港区"},{"parentCode":"371100","code":"371103","name":"岚山区"},{"parentCode":"371100","code":"371121","name":"五莲县"},{"parentCode":"371100","code":"371122","name":"莒县"},{"parentCode":"370000","code":"371200","name":"莱芜市"},{"parentCode":"371200","code":"371201","name":"市辖区"},{"parentCode":"371200","code":"371202","name":"莱城区"},{"parentCode":"371200","code":"371203","name":"钢城区"},{"parentCode":"370000","code":"371300","name":"临沂市"},{"parentCode":"371300","code":"371301","name":"市辖区"},{"parentCode":"371300","code":"371302","name":"兰山区"},{"parentCode":"371300","code":"371311","name":"罗庄区"},{"parentCode":"371300","code":"371312","name":"河东区"},{"parentCode":"371300","code":"371321","name":"沂南县"},{"parentCode":"371300","code":"371322","name":"郯城县"},{"parentCode":"371300","code":"371323","name":"沂水县"},{"parentCode":"371300","code":"371324","name":"兰陵县"},{"parentCode":"371300","code":"371325","name":"费县"},{"parentCode":"371300","code":"371326","name":"平邑县"},{"parentCode":"371300","code":"371327","name":"莒南县"},{"parentCode":"371300","code":"371328","name":"蒙阴县"},{"parentCode":"371300","code":"371329","name":"临沭县"},{"parentCode":"370000","code":"371400","name":"德州市"},{"parentCode":"371400","code":"371401","name":"市辖区"},{"parentCode":"371400","code":"371402","name":"德城区"},{"parentCode":"371400","code":"371403","name":"陵城区"},{"parentCode":"371400","code":"371422","name":"宁津县"},{"parentCode":"371400","code":"371423","name":"庆云县"},{"parentCode":"371400","code":"371424","name":"临邑县"},{"parentCode":"371400","code":"371425","name":"齐河县"},{"parentCode":"371400","code":"371426","name":"平原县"},{"parentCode":"371400","code":"371427","name":"夏津县"},{"parentCode":"371400","code":"371428","name":"武城县"},{"parentCode":"371400","code":"371481","name":"乐陵市"},{"parentCode":"371400","code":"371482","name":"禹城市"},{"parentCode":"370000","code":"371500","name":"聊城市"},{"parentCode":"371500","code":"371501","name":"市辖区"},{"parentCode":"371500","code":"371502","name":"东昌府区"},{"parentCode":"371500","code":"371521","name":"阳谷县"},{"parentCode":"371500","code":"371522","name":"莘县"},{"parentCode":"371500","code":"371523","name":"茌平县"},{"parentCode":"371500","code":"371524","name":"东阿县"},{"parentCode":"371500","code":"371525","name":"冠县"},{"parentCode":"371500","code":"371526","name":"高唐县"},{"parentCode":"371500","code":"371581","name":"临清市"},{"parentCode":"370000","code":"371600","name":"滨州市"},{"parentCode":"371600","code":"371601","name":"市辖区"},{"parentCode":"371600","code":"371602","name":"滨城区"},{"parentCode":"371600","code":"371603","name":"沾化区"},{"parentCode":"371600","code":"371621","name":"惠民县"},{"parentCode":"371600","code":"371622","name":"阳信县"},{"parentCode":"371600","code":"371623","name":"无棣县"},{"parentCode":"371600","code":"371625","name":"博兴县"},{"parentCode":"371600","code":"371626","name":"邹平县"},{"parentCode":"370000","code":"371700","name":"菏泽市"},{"parentCode":"371700","code":"371701","name":"市辖区"},{"parentCode":"371700","code":"371702","name":"牡丹区"},{"parentCode":"371700","code":"371721","name":"曹县"},{"parentCode":"371700","code":"371722","name":"单县"},{"parentCode":"371700","code":"371723","name":"成武县"},{"parentCode":"371700","code":"371724","name":"巨野县"},{"parentCode":"371700","code":"371725","name":"郓城县"},{"parentCode":"371700","code":"371726","name":"鄄城县"},{"parentCode":"371700","code":"371727","name":"定陶县"},{"parentCode":"371700","code":"371728","name":"东明县"},{"parentCode":"000000","code":"410000","name":"河南省"},{"parentCode":"410000","code":"410100","name":"郑州市"},{"parentCode":"410100","code":"410101","name":"市辖区"},{"parentCode":"410100","code":"410102","name":"中原区"},{"parentCode":"410100","code":"410103","name":"二七区"},{"parentCode":"410100","code":"410104","name":"管城回族区"},{"parentCode":"410100","code":"410105","name":"金水区"},{"parentCode":"410100","code":"410106","name":"上街区"},{"parentCode":"410100","code":"410108","name":"惠济区"},{"parentCode":"410100","code":"410122","name":"中牟县"},{"parentCode":"410100","code":"410181","name":"巩义市"},{"parentCode":"410100","code":"410182","name":"荥阳市"},{"parentCode":"410100","code":"410183","name":"新密市"},{"parentCode":"410100","code":"410184","name":"新郑市"},{"parentCode":"410100","code":"410185","name":"登封市"},{"parentCode":"410000","code":"410200","name":"开封市"},{"parentCode":"410200","code":"410201","name":"市辖区"},{"parentCode":"410200","code":"410202","name":"龙亭区"},{"parentCode":"410200","code":"410203","name":"顺河回族区"},{"parentCode":"410200","code":"410204","name":"鼓楼区"},{"parentCode":"410200","code":"410205","name":"禹王台区"},{"parentCode":"410200","code":"410211","name":"金明区"},{"parentCode":"410200","code":"410221","name":"杞县"},{"parentCode":"410200","code":"410222","name":"通许县"},{"parentCode":"410200","code":"410223","name":"尉氏县"},{"parentCode":"410200","code":"410224","name":"开封县"},{"parentCode":"410200","code":"410225","name":"兰考县"},{"parentCode":"410000","code":"410300","name":"洛阳市"},{"parentCode":"410300","code":"410301","name":"市辖区"},{"parentCode":"410300","code":"410302","name":"老城区"},{"parentCode":"410300","code":"410303","name":"西工区"},{"parentCode":"410300","code":"410304","name":"瀍河回族区"},{"parentCode":"410300","code":"410305","name":"涧西区"},{"parentCode":"410300","code":"410306","name":"吉利区"},{"parentCode":"410300","code":"410311","name":"洛龙区"},{"parentCode":"410300","code":"410322","name":"孟津县"},{"parentCode":"410300","code":"410323","name":"新安县"},{"parentCode":"410300","code":"410324","name":"栾川县"},{"parentCode":"410300","code":"410325","name":"嵩县"},{"parentCode":"410300","code":"410326","name":"汝阳县"},{"parentCode":"410300","code":"410327","name":"宜阳县"},{"parentCode":"410300","code":"410328","name":"洛宁县"},{"parentCode":"410300","code":"410329","name":"伊川县"},{"parentCode":"410300","code":"410381","name":"偃师市"},{"parentCode":"410000","code":"410400","name":"平顶山市"},{"parentCode":"410400","code":"410401","name":"市辖区"},{"parentCode":"410400","code":"410402","name":"新华区"},{"parentCode":"410400","code":"410403","name":"卫东区"},{"parentCode":"410400","code":"410404","name":"石龙区"},{"parentCode":"410400","code":"410411","name":"湛河区"},{"parentCode":"410400","code":"410421","name":"宝丰县"},{"parentCode":"410400","code":"410422","name":"叶县"},{"parentCode":"410400","code":"410423","name":"鲁山县"},{"parentCode":"410400","code":"410425","name":"郏县"},{"parentCode":"410400","code":"410481","name":"舞钢市"},{"parentCode":"410400","code":"410482","name":"汝州市"},{"parentCode":"410000","code":"410500","name":"安阳市"},{"parentCode":"410500","code":"410501","name":"市辖区"},{"parentCode":"410500","code":"410502","name":"文峰区"},{"parentCode":"410500","code":"410503","name":"北关区"},{"parentCode":"410500","code":"410505","name":"殷都区"},{"parentCode":"410500","code":"410506","name":"龙安区"},{"parentCode":"410500","code":"410522","name":"安阳县"},{"parentCode":"410500","code":"410523","name":"汤阴县"},{"parentCode":"410500","code":"410526","name":"滑县"},{"parentCode":"410500","code":"410527","name":"内黄县"},{"parentCode":"410500","code":"410581","name":"林州市"},{"parentCode":"410000","code":"410600","name":"鹤壁市"},{"parentCode":"410600","code":"410601","name":"市辖区"},{"parentCode":"410600","code":"410602","name":"鹤山区"},{"parentCode":"410600","code":"410603","name":"山城区"},{"parentCode":"410600","code":"410611","name":"淇滨区"},{"parentCode":"410600","code":"410621","name":"浚县"},{"parentCode":"410600","code":"410622","name":"淇县"},{"parentCode":"410000","code":"410700","name":"新乡市"},{"parentCode":"410700","code":"410701","name":"市辖区"},{"parentCode":"410700","code":"410702","name":"红旗区"},{"parentCode":"410700","code":"410703","name":"卫滨区"},{"parentCode":"410700","code":"410704","name":"凤泉区"},{"parentCode":"410700","code":"410711","name":"牧野区"},{"parentCode":"410700","code":"410721","name":"新乡县"},{"parentCode":"410700","code":"410724","name":"获嘉县"},{"parentCode":"410700","code":"410725","name":"原阳县"},{"parentCode":"410700","code":"410726","name":"延津县"},{"parentCode":"410700","code":"410727","name":"封丘县"},{"parentCode":"410700","code":"410728","name":"长垣县"},{"parentCode":"410700","code":"410781","name":"卫辉市"},{"parentCode":"410700","code":"410782","name":"辉县市"},{"parentCode":"410000","code":"410800","name":"焦作市"},{"parentCode":"410800","code":"410801","name":"市辖区"},{"parentCode":"410800","code":"410802","name":"解放区"},{"parentCode":"410800","code":"410803","name":"中站区"},{"parentCode":"410800","code":"410804","name":"马村区"},{"parentCode":"410800","code":"410811","name":"山阳区"},{"parentCode":"410800","code":"410821","name":"修武县"},{"parentCode":"410800","code":"410822","name":"博爱县"},{"parentCode":"410800","code":"410823","name":"武陟县"},{"parentCode":"410800","code":"410825","name":"温县"},{"parentCode":"410800","code":"410882","name":"沁阳市"},{"parentCode":"410800","code":"410883","name":"孟州市"},{"parentCode":"410000","code":"410900","name":"濮阳市"},{"parentCode":"410900","code":"410901","name":"市辖区"},{"parentCode":"410900","code":"410902","name":"华龙区"},{"parentCode":"410900","code":"410922","name":"清丰县"},{"parentCode":"410900","code":"410923","name":"南乐县"},{"parentCode":"410900","code":"410926","name":"范县"},{"parentCode":"410900","code":"410927","name":"台前县"},{"parentCode":"410900","code":"410928","name":"濮阳县"},{"parentCode":"410000","code":"411000","name":"许昌市"},{"parentCode":"411000","code":"411001","name":"市辖区"},{"parentCode":"411000","code":"411002","name":"魏都区"},{"parentCode":"411000","code":"411023","name":"许昌县"},{"parentCode":"411000","code":"411024","name":"鄢陵县"},{"parentCode":"411000","code":"411025","name":"襄城县"},{"parentCode":"411000","code":"411081","name":"禹州市"},{"parentCode":"411000","code":"411082","name":"长葛市"},{"parentCode":"410000","code":"411100","name":"漯河市"},{"parentCode":"411100","code":"411101","name":"市辖区"},{"parentCode":"411100","code":"411102","name":"源汇区"},{"parentCode":"411100","code":"411103","name":"郾城区"},{"parentCode":"411100","code":"411104","name":"召陵区"},{"parentCode":"411100","code":"411121","name":"舞阳县"},{"parentCode":"411100","code":"411122","name":"临颍县"},{"parentCode":"410000","code":"411200","name":"三门峡市"},{"parentCode":"411200","code":"411201","name":"市辖区"},{"parentCode":"411200","code":"411202","name":"湖滨区"},{"parentCode":"411200","code":"411221","name":"渑池县"},{"parentCode":"411200","code":"411222","name":"陕县"},{"parentCode":"411200","code":"411224","name":"卢氏县"},{"parentCode":"411200","code":"411281","name":"义马市"},{"parentCode":"411200","code":"411282","name":"灵宝市"},{"parentCode":"410000","code":"411300","name":"南阳市"},{"parentCode":"411300","code":"411301","name":"市辖区"},{"parentCode":"411300","code":"411302","name":"宛城区"},{"parentCode":"411300","code":"411303","name":"卧龙区"},{"parentCode":"411300","code":"411321","name":"南召县"},{"parentCode":"411300","code":"411322","name":"方城县"},{"parentCode":"411300","code":"411323","name":"西峡县"},{"parentCode":"411300","code":"411324","name":"镇平县"},{"parentCode":"411300","code":"411325","name":"内乡县"},{"parentCode":"411300","code":"411326","name":"淅川县"},{"parentCode":"411300","code":"411327","name":"社旗县"},{"parentCode":"411300","code":"411328","name":"唐河县"},{"parentCode":"411300","code":"411329","name":"新野县"},{"parentCode":"411300","code":"411330","name":"桐柏县"},{"parentCode":"411300","code":"411381","name":"邓州市"},{"parentCode":"410000","code":"411400","name":"商丘市"},{"parentCode":"411400","code":"411401","name":"市辖区"},{"parentCode":"411400","code":"411402","name":"梁园区"},{"parentCode":"411400","code":"411403","name":"睢阳区"},{"parentCode":"411400","code":"411421","name":"民权县"},{"parentCode":"411400","code":"411422","name":"睢县"},{"parentCode":"411400","code":"411423","name":"宁陵县"},{"parentCode":"411400","code":"411424","name":"柘城县"},{"parentCode":"411400","code":"411425","name":"虞城县"},{"parentCode":"411400","code":"411426","name":"夏邑县"},{"parentCode":"411400","code":"411481","name":"永城市"},{"parentCode":"410000","code":"411500","name":"信阳市"},{"parentCode":"411500","code":"411501","name":"市辖区"},{"parentCode":"411500","code":"411502","name":"浉河区"},{"parentCode":"411500","code":"411503","name":"平桥区"},{"parentCode":"411500","code":"411521","name":"罗山县"},{"parentCode":"411500","code":"411522","name":"光山县"},{"parentCode":"411500","code":"411523","name":"新县"},{"parentCode":"411500","code":"411524","name":"商城县"},{"parentCode":"411500","code":"411525","name":"固始县"},{"parentCode":"411500","code":"411526","name":"潢川县"},{"parentCode":"411500","code":"411527","name":"淮滨县"},{"parentCode":"411500","code":"411528","name":"息县"},{"parentCode":"410000","code":"411600","name":"周口市"},{"parentCode":"411600","code":"411601","name":"市辖区"},{"parentCode":"411600","code":"411602","name":"川汇区"},{"parentCode":"411600","code":"411621","name":"扶沟县"},{"parentCode":"411600","code":"411622","name":"西华县"},{"parentCode":"411600","code":"411623","name":"商水县"},{"parentCode":"411600","code":"411624","name":"沈丘县"},{"parentCode":"411600","code":"411625","name":"郸城县"},{"parentCode":"411600","code":"411626","name":"淮阳县"},{"parentCode":"411600","code":"411627","name":"太康县"},{"parentCode":"411600","code":"411628","name":"鹿邑县"},{"parentCode":"411600","code":"411681","name":"项城市"},{"parentCode":"410000","code":"411700","name":"驻马店市"},{"parentCode":"411700","code":"411701","name":"市辖区"},{"parentCode":"411700","code":"411702","name":"驿城区"},{"parentCode":"411700","code":"411721","name":"西平县"},{"parentCode":"411700","code":"411722","name":"上蔡县"},{"parentCode":"411700","code":"411723","name":"平舆县"},{"parentCode":"411700","code":"411724","name":"正阳县"},{"parentCode":"411700","code":"411725","name":"确山县"},{"parentCode":"411700","code":"411726","name":"泌阳县"},{"parentCode":"411700","code":"411727","name":"汝南县"},{"parentCode":"411700","code":"411728","name":"遂平县"},{"parentCode":"411700","code":"411729","name":"新蔡县"},{"parentCode":"410000","code":"419000","name":"省直辖县级行政区划"},{"parentCode":"419000","code":"419001","name":"济源市"},{"parentCode":"000000","code":"420000","name":"湖北省"},{"parentCode":"420000","code":"420100","name":"武汉市"},{"parentCode":"420100","code":"420101","name":"市辖区"},{"parentCode":"420100","code":"420102","name":"江岸区"},{"parentCode":"420100","code":"420103","name":"江汉区"},{"parentCode":"420100","code":"420104","name":"硚口区"},{"parentCode":"420100","code":"420105","name":"汉阳区"},{"parentCode":"420100","code":"420106","name":"武昌区"},{"parentCode":"420100","code":"420107","name":"青山区"},{"parentCode":"420100","code":"420111","name":"洪山区"},{"parentCode":"420100","code":"420112","name":"东西湖区"},{"parentCode":"420100","code":"420113","name":"汉南区"},{"parentCode":"420100","code":"420114","name":"蔡甸区"},{"parentCode":"420100","code":"420115","name":"江夏区"},{"parentCode":"420100","code":"420116","name":"黄陂区"},{"parentCode":"420100","code":"420117","name":"新洲区"},{"parentCode":"420000","code":"420200","name":"黄石市"},{"parentCode":"420200","code":"420201","name":"市辖区"},{"parentCode":"420200","code":"420202","name":"黄石港区"},{"parentCode":"420200","code":"420203","name":"西塞山区"},{"parentCode":"420200","code":"420204","name":"下陆区"},{"parentCode":"420200","code":"420205","name":"铁山区"},{"parentCode":"420200","code":"420222","name":"阳新县"},{"parentCode":"420200","code":"420281","name":"大冶市"},{"parentCode":"420000","code":"420300","name":"十堰市"},{"parentCode":"420300","code":"420301","name":"市辖区"},{"parentCode":"420300","code":"420302","name":"茅箭区"},{"parentCode":"420300","code":"420303","name":"张湾区"},{"parentCode":"420300","code":"420304","name":"郧阳区"},{"parentCode":"420300","code":"420322","name":"郧西县"},{"parentCode":"420300","code":"420323","name":"竹山县"},{"parentCode":"420300","code":"420324","name":"竹溪县"},{"parentCode":"420300","code":"420325","name":"房县"},{"parentCode":"420300","code":"420381","name":"丹江口市"},{"parentCode":"420000","code":"420500","name":"宜昌市"},{"parentCode":"420500","code":"420501","name":"市辖区"},{"parentCode":"420500","code":"420502","name":"西陵区"},{"parentCode":"420500","code":"420503","name":"伍家岗区"},{"parentCode":"420500","code":"420504","name":"点军区"},{"parentCode":"420500","code":"420505","name":"猇亭区"},{"parentCode":"420500","code":"420506","name":"夷陵区"},{"parentCode":"420500","code":"420525","name":"远安县"},{"parentCode":"420500","code":"420526","name":"兴山县"},{"parentCode":"420500","code":"420527","name":"秭归县"},{"parentCode":"420500","code":"420528","name":"长阳土家族自治县"},{"parentCode":"420500","code":"420529","name":"五峰土家族自治县"},{"parentCode":"420500","code":"420581","name":"宜都市"},{"parentCode":"420500","code":"420582","name":"当阳市"},{"parentCode":"420500","code":"420583","name":"枝江市"},{"parentCode":"420000","code":"420600","name":"襄阳市"},{"parentCode":"420600","code":"420601","name":"市辖区"},{"parentCode":"420600","code":"420602","name":"襄城区"},{"parentCode":"420600","code":"420606","name":"樊城区"},{"parentCode":"420600","code":"420607","name":"襄州区"},{"parentCode":"420600","code":"420624","name":"南漳县"},{"parentCode":"420600","code":"420625","name":"谷城县"},{"parentCode":"420600","code":"420626","name":"保康县"},{"parentCode":"420600","code":"420682","name":"老河口市"},{"parentCode":"420600","code":"420683","name":"枣阳市"},{"parentCode":"420600","code":"420684","name":"宜城市"},{"parentCode":"420000","code":"420700","name":"鄂州市"},{"parentCode":"420700","code":"420701","name":"市辖区"},{"parentCode":"420700","code":"420702","name":"梁子湖区"},{"parentCode":"420700","code":"420703","name":"华容区"},{"parentCode":"420700","code":"420704","name":"鄂城区"},{"parentCode":"420000","code":"420800","name":"荆门市"},{"parentCode":"420800","code":"420801","name":"市辖区"},{"parentCode":"420800","code":"420802","name":"东宝区"},{"parentCode":"420800","code":"420804","name":"掇刀区"},{"parentCode":"420800","code":"420821","name":"京山县"},{"parentCode":"420800","code":"420822","name":"沙洋县"},{"parentCode":"420800","code":"420881","name":"钟祥市"},{"parentCode":"420000","code":"420900","name":"孝感市"},{"parentCode":"420900","code":"420901","name":"市辖区"},{"parentCode":"420900","code":"420902","name":"孝南区"},{"parentCode":"420900","code":"420921","name":"孝昌县"},{"parentCode":"420900","code":"420922","name":"大悟县"},{"parentCode":"420900","code":"420923","name":"云梦县"},{"parentCode":"420900","code":"420981","name":"应城市"},{"parentCode":"420900","code":"420982","name":"安陆市"},{"parentCode":"420900","code":"420984","name":"汉川市"},{"parentCode":"420000","code":"421000","name":"荆州市"},{"parentCode":"421000","code":"421001","name":"市辖区"},{"parentCode":"421000","code":"421002","name":"沙市区"},{"parentCode":"421000","code":"421003","name":"荆州区"},{"parentCode":"421000","code":"421022","name":"公安县"},{"parentCode":"421000","code":"421023","name":"监利县"},{"parentCode":"421000","code":"421024","name":"江陵县"},{"parentCode":"421000","code":"421081","name":"石首市"},{"parentCode":"421000","code":"421083","name":"洪湖市"},{"parentCode":"421000","code":"421087","name":"松滋市"},{"parentCode":"420000","code":"421100","name":"黄冈市"},{"parentCode":"421100","code":"421101","name":"市辖区"},{"parentCode":"421100","code":"421102","name":"黄州区"},{"parentCode":"421100","code":"421121","name":"团风县"},{"parentCode":"421100","code":"421122","name":"红安县"},{"parentCode":"421100","code":"421123","name":"罗田县"},{"parentCode":"421100","code":"421124","name":"英山县"},{"parentCode":"421100","code":"421125","name":"浠水县"},{"parentCode":"421100","code":"421126","name":"蕲春县"},{"parentCode":"421100","code":"421127","name":"黄梅县"},{"parentCode":"421100","code":"421181","name":"麻城市"},{"parentCode":"421100","code":"421182","name":"武穴市"},{"parentCode":"420000","code":"421200","name":"咸宁市"},{"parentCode":"421200","code":"421201","name":"市辖区"},{"parentCode":"421200","code":"421202","name":"咸安区"},{"parentCode":"421200","code":"421221","name":"嘉鱼县"},{"parentCode":"421200","code":"421222","name":"通城县"},{"parentCode":"421200","code":"421223","name":"崇阳县"},{"parentCode":"421200","code":"421224","name":"通山县"},{"parentCode":"421200","code":"421281","name":"赤壁市"},{"parentCode":"420000","code":"421300","name":"随州市"},{"parentCode":"421300","code":"421301","name":"市辖区"},{"parentCode":"421300","code":"421303","name":"曾都区"},{"parentCode":"421300","code":"421321","name":"随县"},{"parentCode":"421300","code":"421381","name":"广水市"},{"parentCode":"420000","code":"422800","name":"恩施土家族苗族自治州"},{"parentCode":"422800","code":"422801","name":"恩施市"},{"parentCode":"422800","code":"422802","name":"利川市"},{"parentCode":"422800","code":"422822","name":"建始县"},{"parentCode":"422800","code":"422823","name":"巴东县"},{"parentCode":"422800","code":"422825","name":"宣恩县"},{"parentCode":"422800","code":"422826","name":"咸丰县"},{"parentCode":"422800","code":"422827","name":"来凤县"},{"parentCode":"422800","code":"422828","name":"鹤峰县"},{"parentCode":"420000","code":"429000","name":"省直辖县级行政区划"},{"parentCode":"429000","code":"429004","name":"仙桃市"},{"parentCode":"429000","code":"429005","name":"潜江市"},{"parentCode":"429000","code":"429006","name":"天门市"},{"parentCode":"429000","code":"429021","name":"神农架林区"},{"parentCode":"000000","code":"430000","name":"湖南省"},{"parentCode":"430000","code":"430100","name":"长沙市"},{"parentCode":"430100","code":"430101","name":"市辖区"},{"parentCode":"430100","code":"430102","name":"芙蓉区"},{"parentCode":"430100","code":"430103","name":"天心区"},{"parentCode":"430100","code":"430104","name":"岳麓区"},{"parentCode":"430100","code":"430105","name":"开福区"},{"parentCode":"430100","code":"430111","name":"雨花区"},{"parentCode":"430100","code":"430112","name":"望城区"},{"parentCode":"430100","code":"430121","name":"长沙县"},{"parentCode":"430100","code":"430124","name":"宁乡县"},{"parentCode":"430100","code":"430181","name":"浏阳市"},{"parentCode":"430000","code":"430200","name":"株洲市"},{"parentCode":"430200","code":"430201","name":"市辖区"},{"parentCode":"430200","code":"430202","name":"荷塘区"},{"parentCode":"430200","code":"430203","name":"芦淞区"},{"parentCode":"430200","code":"430204","name":"石峰区"},{"parentCode":"430200","code":"430211","name":"天元区"},{"parentCode":"430200","code":"430221","name":"株洲县"},{"parentCode":"430200","code":"430223","name":"攸县"},{"parentCode":"430200","code":"430224","name":"茶陵县"},{"parentCode":"430200","code":"430225","name":"炎陵县"},{"parentCode":"430200","code":"430281","name":"醴陵市"},{"parentCode":"430000","code":"430300","name":"湘潭市"},{"parentCode":"430300","code":"430301","name":"市辖区"},{"parentCode":"430300","code":"430302","name":"雨湖区"},{"parentCode":"430300","code":"430304","name":"岳塘区"},{"parentCode":"430300","code":"430321","name":"湘潭县"},{"parentCode":"430300","code":"430381","name":"湘乡市"},{"parentCode":"430300","code":"430382","name":"韶山市"},{"parentCode":"430000","code":"430400","name":"衡阳市"},{"parentCode":"430400","code":"430401","name":"市辖区"},{"parentCode":"430400","code":"430405","name":"珠晖区"},{"parentCode":"430400","code":"430406","name":"雁峰区"},{"parentCode":"430400","code":"430407","name":"石鼓区"},{"parentCode":"430400","code":"430408","name":"蒸湘区"},{"parentCode":"430400","code":"430412","name":"南岳区"},{"parentCode":"430400","code":"430421","name":"衡阳县"},{"parentCode":"430400","code":"430422","name":"衡南县"},{"parentCode":"430400","code":"430423","name":"衡山县"},{"parentCode":"430400","code":"430424","name":"衡东县"},{"parentCode":"430400","code":"430426","name":"祁东县"},{"parentCode":"430400","code":"430481","name":"耒阳市"},{"parentCode":"430400","code":"430482","name":"常宁市"},{"parentCode":"430000","code":"430500","name":"邵阳市"},{"parentCode":"430500","code":"430501","name":"市辖区"},{"parentCode":"430500","code":"430502","name":"双清区"},{"parentCode":"430500","code":"430503","name":"大祥区"},{"parentCode":"430500","code":"430511","name":"北塔区"},{"parentCode":"430500","code":"430521","name":"邵东县"},{"parentCode":"430500","code":"430522","name":"新邵县"},{"parentCode":"430500","code":"430523","name":"邵阳县"},{"parentCode":"430500","code":"430524","name":"隆回县"},{"parentCode":"430500","code":"430525","name":"洞口县"},{"parentCode":"430500","code":"430527","name":"绥宁县"},{"parentCode":"430500","code":"430528","name":"新宁县"},{"parentCode":"430500","code":"430529","name":"城步苗族自治县"},{"parentCode":"430500","code":"430581","name":"武冈市"},{"parentCode":"430000","code":"430600","name":"岳阳市"},{"parentCode":"430600","code":"430601","name":"市辖区"},{"parentCode":"430600","code":"430602","name":"岳阳楼区"},{"parentCode":"430600","code":"430603","name":"云溪区"},{"parentCode":"430600","code":"430611","name":"君山区"},{"parentCode":"430600","code":"430621","name":"岳阳县"},{"parentCode":"430600","code":"430623","name":"华容县"},{"parentCode":"430600","code":"430624","name":"湘阴县"},{"parentCode":"430600","code":"430626","name":"平江县"},{"parentCode":"430600","code":"430681","name":"汨罗市"},{"parentCode":"430600","code":"430682","name":"临湘市"},{"parentCode":"430000","code":"430700","name":"常德市"},{"parentCode":"430700","code":"430701","name":"市辖区"},{"parentCode":"430700","code":"430702","name":"武陵区"},{"parentCode":"430700","code":"430703","name":"鼎城区"},{"parentCode":"430700","code":"430721","name":"安乡县"},{"parentCode":"430700","code":"430722","name":"汉寿县"},{"parentCode":"430700","code":"430723","name":"澧县"},{"parentCode":"430700","code":"430724","name":"临澧县"},{"parentCode":"430700","code":"430725","name":"桃源县"},{"parentCode":"430700","code":"430726","name":"石门县"},{"parentCode":"430700","code":"430781","name":"津市市"},{"parentCode":"430000","code":"430800","name":"张家界市"},{"parentCode":"430800","code":"430801","name":"市辖区"},{"parentCode":"430800","code":"430802","name":"永定区"},{"parentCode":"430800","code":"430811","name":"武陵源区"},{"parentCode":"430800","code":"430821","name":"慈利县"},{"parentCode":"430800","code":"430822","name":"桑植县"},{"parentCode":"430000","code":"430900","name":"益阳市"},{"parentCode":"430900","code":"430901","name":"市辖区"},{"parentCode":"430900","code":"430902","name":"资阳区"},{"parentCode":"430900","code":"430903","name":"赫山区"},{"parentCode":"430900","code":"430921","name":"南县"},{"parentCode":"430900","code":"430922","name":"桃江县"},{"parentCode":"430900","code":"430923","name":"安化县"},{"parentCode":"430900","code":"430981","name":"沅江市"},{"parentCode":"430000","code":"431000","name":"郴州市"},{"parentCode":"431000","code":"431001","name":"市辖区"},{"parentCode":"431000","code":"431002","name":"北湖区"},{"parentCode":"431000","code":"431003","name":"苏仙区"},{"parentCode":"431000","code":"431021","name":"桂阳县"},{"parentCode":"431000","code":"431022","name":"宜章县"},{"parentCode":"431000","code":"431023","name":"永兴县"},{"parentCode":"431000","code":"431024","name":"嘉禾县"},{"parentCode":"431000","code":"431025","name":"临武县"},{"parentCode":"431000","code":"431026","name":"汝城县"},{"parentCode":"431000","code":"431027","name":"桂东县"},{"parentCode":"431000","code":"431028","name":"安仁县"},{"parentCode":"431000","code":"431081","name":"资兴市"},{"parentCode":"430000","code":"431100","name":"永州市"},{"parentCode":"431100","code":"431101","name":"市辖区"},{"parentCode":"431100","code":"431102","name":"零陵区"},{"parentCode":"431100","code":"431103","name":"冷水滩区"},{"parentCode":"431100","code":"431121","name":"祁阳县"},{"parentCode":"431100","code":"431122","name":"东安县"},{"parentCode":"431100","code":"431123","name":"双牌县"},{"parentCode":"431100","code":"431124","name":"道县"},{"parentCode":"431100","code":"431125","name":"江永县"},{"parentCode":"431100","code":"431126","name":"宁远县"},{"parentCode":"431100","code":"431127","name":"蓝山县"},{"parentCode":"431100","code":"431128","name":"新田县"},{"parentCode":"431100","code":"431129","name":"江华瑶族自治县"},{"parentCode":"430000","code":"431200","name":"怀化市"},{"parentCode":"431200","code":"431201","name":"市辖区"},{"parentCode":"431200","code":"431202","name":"鹤城区"},{"parentCode":"431200","code":"431221","name":"中方县"},{"parentCode":"431200","code":"431222","name":"沅陵县"},{"parentCode":"431200","code":"431223","name":"辰溪县"},{"parentCode":"431200","code":"431224","name":"溆浦县"},{"parentCode":"431200","code":"431225","name":"会同县"},{"parentCode":"431200","code":"431226","name":"麻阳苗族自治县"},{"parentCode":"431200","code":"431227","name":"新晃侗族自治县"},{"parentCode":"431200","code":"431228","name":"芷江侗族自治县"},{"parentCode":"431200","code":"431229","name":"靖州苗族侗族自治县"},{"parentCode":"431200","code":"431230","name":"通道侗族自治县"},{"parentCode":"431200","code":"431281","name":"洪江市"},{"parentCode":"430000","code":"431300","name":"娄底市"},{"parentCode":"431300","code":"431301","name":"市辖区"},{"parentCode":"431300","code":"431302","name":"娄星区"},{"parentCode":"431300","code":"431321","name":"双峰县"},{"parentCode":"431300","code":"431322","name":"新化县"},{"parentCode":"431300","code":"431381","name":"冷水江市"},{"parentCode":"431300","code":"431382","name":"涟源市"},{"parentCode":"430000","code":"433100","name":"湘西土家族苗族自治州"},{"parentCode":"433100","code":"433101","name":"吉首市"},{"parentCode":"433100","code":"433122","name":"泸溪县"},{"parentCode":"433100","code":"433123","name":"凤凰县"},{"parentCode":"433100","code":"433124","name":"花垣县"},{"parentCode":"433100","code":"433125","name":"保靖县"},{"parentCode":"433100","code":"433126","name":"古丈县"},{"parentCode":"433100","code":"433127","name":"永顺县"},{"parentCode":"433100","code":"433130","name":"龙山县"},{"parentCode":"000000","code":"440000","name":"广东省"},{"parentCode":"440000","code":"440100","name":"广州市"},{"parentCode":"440100","code":"440101","name":"市辖区"},{"parentCode":"440100","code":"440103","name":"荔湾区"},{"parentCode":"440100","code":"440104","name":"越秀区"},{"parentCode":"440100","code":"440105","name":"海珠区"},{"parentCode":"440100","code":"440106","name":"天河区"},{"parentCode":"440100","code":"440111","name":"白云区"},{"parentCode":"440100","code":"440112","name":"黄埔区"},{"parentCode":"440100","code":"440113","name":"番禺区"},{"parentCode":"440100","code":"440114","name":"花都区"},{"parentCode":"440100","code":"440115","name":"南沙区"},{"parentCode":"440100","code":"440116","name":"萝岗区"},{"parentCode":"440100","code":"440117","name":"从化区"},{"parentCode":"440100","code":"440118","name":"增城区"},{"parentCode":"440000","code":"440200","name":"韶关市"},{"parentCode":"440200","code":"440201","name":"市辖区"},{"parentCode":"440200","code":"440203","name":"武江区"},{"parentCode":"440200","code":"440204","name":"浈江区"},{"parentCode":"440200","code":"440205","name":"曲江区"},{"parentCode":"440200","code":"440222","name":"始兴县"},{"parentCode":"440200","code":"440224","name":"仁化县"},{"parentCode":"440200","code":"440229","name":"翁源县"},{"parentCode":"440200","code":"440232","name":"乳源瑶族自治县"},{"parentCode":"440200","code":"440233","name":"新丰县"},{"parentCode":"440200","code":"440281","name":"乐昌市"},{"parentCode":"440200","code":"440282","name":"南雄市"},{"parentCode":"440000","code":"440300","name":"深圳市"},{"parentCode":"440300","code":"440301","name":"市辖区"},{"parentCode":"440300","code":"440303","name":"罗湖区"},{"parentCode":"440300","code":"440304","name":"福田区"},{"parentCode":"440300","code":"440305","name":"南山区"},{"parentCode":"440300","code":"440306","name":"宝安区"},{"parentCode":"440300","code":"440307","name":"龙岗区"},{"parentCode":"440300","code":"440308","name":"盐田区"},{"parentCode":"440000","code":"440400","name":"珠海市"},{"parentCode":"440400","code":"440401","name":"市辖区"},{"parentCode":"440400","code":"440402","name":"香洲区"},{"parentCode":"440400","code":"440403","name":"斗门区"},{"parentCode":"440400","code":"440404","name":"金湾区"},{"parentCode":"440000","code":"440500","name":"汕头市"},{"parentCode":"440500","code":"440501","name":"市辖区"},{"parentCode":"440500","code":"440507","name":"龙湖区"},{"parentCode":"440500","code":"440511","name":"金平区"},{"parentCode":"440500","code":"440512","name":"濠江区"},{"parentCode":"440500","code":"440513","name":"潮阳区"},{"parentCode":"440500","code":"440514","name":"潮南区"},{"parentCode":"440500","code":"440515","name":"澄海区"},{"parentCode":"440500","code":"440523","name":"南澳县"},{"parentCode":"440000","code":"440600","name":"佛山市"},{"parentCode":"440600","code":"440601","name":"市辖区"},{"parentCode":"440600","code":"440604","name":"禅城区"},{"parentCode":"440600","code":"440605","name":"南海区"},{"parentCode":"440600","code":"440606","name":"顺德区"},{"parentCode":"440600","code":"440607","name":"三水区"},{"parentCode":"440600","code":"440608","name":"高明区"},{"parentCode":"440000","code":"440700","name":"江门市"},{"parentCode":"440700","code":"440701","name":"市辖区"},{"parentCode":"440700","code":"440703","name":"蓬江区"},{"parentCode":"440700","code":"440704","name":"江海区"},{"parentCode":"440700","code":"440705","name":"新会区"},{"parentCode":"440700","code":"440781","name":"台山市"},{"parentCode":"440700","code":"440783","name":"开平市"},{"parentCode":"440700","code":"440784","name":"鹤山市"},{"parentCode":"440700","code":"440785","name":"恩平市"},{"parentCode":"440000","code":"440800","name":"湛江市"},{"parentCode":"440800","code":"440801","name":"市辖区"},{"parentCode":"440800","code":"440802","name":"赤坎区"},{"parentCode":"440800","code":"440803","name":"霞山区"},{"parentCode":"440800","code":"440804","name":"坡头区"},{"parentCode":"440800","code":"440811","name":"麻章区"},{"parentCode":"440800","code":"440823","name":"遂溪县"},{"parentCode":"440800","code":"440825","name":"徐闻县"},{"parentCode":"440800","code":"440881","name":"廉江市"},{"parentCode":"440800","code":"440882","name":"雷州市"},{"parentCode":"440800","code":"440883","name":"吴川市"},{"parentCode":"440000","code":"440900","name":"茂名市"},{"parentCode":"440900","code":"440901","name":"市辖区"},{"parentCode":"440900","code":"440902","name":"茂南区"},{"parentCode":"440900","code":"440904","name":"电白区"},{"parentCode":"440900","code":"440981","name":"高州市"},{"parentCode":"440900","code":"440982","name":"化州市"},{"parentCode":"440900","code":"440983","name":"信宜市"},{"parentCode":"440000","code":"441200","name":"肇庆市"},{"parentCode":"441200","code":"441201","name":"市辖区"},{"parentCode":"441200","code":"441202","name":"端州区"},{"parentCode":"441200","code":"441203","name":"鼎湖区"},{"parentCode":"441200","code":"441223","name":"广宁县"},{"parentCode":"441200","code":"441224","name":"怀集县"},{"parentCode":"441200","code":"441225","name":"封开县"},{"parentCode":"441200","code":"441226","name":"德庆县"},{"parentCode":"441200","code":"441283","name":"高要市"},{"parentCode":"441200","code":"441284","name":"四会市"},{"parentCode":"440000","code":"441300","name":"惠州市"},{"parentCode":"441300","code":"441301","name":"市辖区"},{"parentCode":"441300","code":"441302","name":"惠城区"},{"parentCode":"441300","code":"441303","name":"惠阳区"},{"parentCode":"441300","code":"441322","name":"博罗县"},{"parentCode":"441300","code":"441323","name":"惠东县"},{"parentCode":"441300","code":"441324","name":"龙门县"},{"parentCode":"440000","code":"441400","name":"梅州市"},{"parentCode":"441400","code":"441401","name":"市辖区"},{"parentCode":"441400","code":"441402","name":"梅江区"},{"parentCode":"441400","code":"441403","name":"梅县区"},{"parentCode":"441400","code":"441422","name":"大埔县"},{"parentCode":"441400","code":"441423","name":"丰顺县"},{"parentCode":"441400","code":"441424","name":"五华县"},{"parentCode":"441400","code":"441426","name":"平远县"},{"parentCode":"441400","code":"441427","name":"蕉岭县"},{"parentCode":"441400","code":"441481","name":"兴宁市"},{"parentCode":"440000","code":"441500","name":"汕尾市"},{"parentCode":"441500","code":"441501","name":"市辖区"},{"parentCode":"441500","code":"441502","name":"城区"},{"parentCode":"441500","code":"441521","name":"海丰县"},{"parentCode":"441500","code":"441523","name":"陆河县"},{"parentCode":"441500","code":"441581","name":"陆丰市"},{"parentCode":"440000","code":"441600","name":"河源市"},{"parentCode":"441600","code":"441601","name":"市辖区"},{"parentCode":"441600","code":"441602","name":"源城区"},{"parentCode":"441600","code":"441621","name":"紫金县"},{"parentCode":"441600","code":"441622","name":"龙川县"},{"parentCode":"441600","code":"441623","name":"连平县"},{"parentCode":"441600","code":"441624","name":"和平县"},{"parentCode":"441600","code":"441625","name":"东源县"},{"parentCode":"440000","code":"441700","name":"阳江市"},{"parentCode":"441700","code":"441701","name":"市辖区"},{"parentCode":"441700","code":"441702","name":"江城区"},{"parentCode":"441700","code":"441721","name":"阳西县"},{"parentCode":"441700","code":"441723","name":"阳东县"},{"parentCode":"441700","code":"441781","name":"阳春市"},{"parentCode":"440000","code":"441800","name":"清远市"},{"parentCode":"441800","code":"441801","name":"市辖区"},{"parentCode":"441800","code":"441802","name":"清城区"},{"parentCode":"441800","code":"441803","name":"清新区"},{"parentCode":"441800","code":"441821","name":"佛冈县"},{"parentCode":"441800","code":"441823","name":"阳山县"},{"parentCode":"441800","code":"441825","name":"连山壮族瑶族自治县"},{"parentCode":"441800","code":"441826","name":"连南瑶族自治县"},{"parentCode":"441800","code":"441881","name":"英德市"},{"parentCode":"441800","code":"441882","name":"连州市"},{"parentCode":"440000","code":"441900","name":"东莞市"},{"parentCode":"441900","code":"441901","name":"市辖区"},{"parentCode":"440000","code":"442000","name":"中山市"},{"parentCode":"442000","code":"442001","name":"市辖区"},{"parentCode":"440000","code":"445100","name":"潮州市"},{"parentCode":"445100","code":"445101","name":"市辖区"},{"parentCode":"445100","code":"445102","name":"湘桥区"},{"parentCode":"445100","code":"445103","name":"潮安区"},{"parentCode":"445100","code":"445122","name":"饶平县"},{"parentCode":"440000","code":"445200","name":"揭阳市"},{"parentCode":"445200","code":"445201","name":"市辖区"},{"parentCode":"445200","code":"445202","name":"榕城区"},{"parentCode":"445200","code":"445203","name":"揭东区"},{"parentCode":"445200","code":"445222","name":"揭西县"},{"parentCode":"445200","code":"445224","name":"惠来县"},{"parentCode":"445200","code":"445281","name":"普宁市"},{"parentCode":"440000","code":"445300","name":"云浮市"},{"parentCode":"445300","code":"445301","name":"市辖区"},{"parentCode":"445300","code":"445302","name":"云城区"},{"parentCode":"445300","code":"445303","name":"云安区"},{"parentCode":"445300","code":"445321","name":"新兴县"},{"parentCode":"445300","code":"445322","name":"郁南县"},{"parentCode":"445300","code":"445381","name":"罗定市"},{"parentCode":"000000","code":"450000","name":"广西壮族自治区"},{"parentCode":"450000","code":"450100","name":"南宁市"},{"parentCode":"450100","code":"450101","name":"市辖区"},{"parentCode":"450100","code":"450102","name":"兴宁区"},{"parentCode":"450100","code":"450103","name":"青秀区"},{"parentCode":"450100","code":"450105","name":"江南区"},{"parentCode":"450100","code":"450107","name":"西乡塘区"},{"parentCode":"450100","code":"450108","name":"良庆区"},{"parentCode":"450100","code":"450109","name":"邕宁区"},{"parentCode":"450100","code":"450122","name":"武鸣县"},{"parentCode":"450100","code":"450123","name":"隆安县"},{"parentCode":"450100","code":"450124","name":"马山县"},{"parentCode":"450100","code":"450125","name":"上林县"},{"parentCode":"450100","code":"450126","name":"宾阳县"},{"parentCode":"450100","code":"450127","name":"横县"},{"parentCode":"450000","code":"450200","name":"柳州市"},{"parentCode":"450200","code":"450201","name":"市辖区"},{"parentCode":"450200","code":"450202","name":"城中区"},{"parentCode":"450200","code":"450203","name":"鱼峰区"},{"parentCode":"450200","code":"450204","name":"柳南区"},{"parentCode":"450200","code":"450205","name":"柳北区"},{"parentCode":"450200","code":"450221","name":"柳江县"},{"parentCode":"450200","code":"450222","name":"柳城县"},{"parentCode":"450200","code":"450223","name":"鹿寨县"},{"parentCode":"450200","code":"450224","name":"融安县"},{"parentCode":"450200","code":"450225","name":"融水苗族自治县"},{"parentCode":"450200","code":"450226","name":"三江侗族自治县"},{"parentCode":"450000","code":"450300","name":"桂林市"},{"parentCode":"450300","code":"450301","name":"市辖区"},{"parentCode":"450300","code":"450302","name":"秀峰区"},{"parentCode":"450300","code":"450303","name":"叠彩区"},{"parentCode":"450300","code":"450304","name":"象山区"},{"parentCode":"450300","code":"450305","name":"七星区"},{"parentCode":"450300","code":"450311","name":"雁山区"},{"parentCode":"450300","code":"450312","name":"临桂区"},{"parentCode":"450300","code":"450321","name":"阳朔县"},{"parentCode":"450300","code":"450323","name":"灵川县"},{"parentCode":"450300","code":"450324","name":"全州县"},{"parentCode":"450300","code":"450325","name":"兴安县"},{"parentCode":"450300","code":"450326","name":"永福县"},{"parentCode":"450300","code":"450327","name":"灌阳县"},{"parentCode":"450300","code":"450328","name":"龙胜各族自治县"},{"parentCode":"450300","code":"450329","name":"资源县"},{"parentCode":"450300","code":"450330","name":"平乐县"},{"parentCode":"450300","code":"450331","name":"荔浦县"},{"parentCode":"450300","code":"450332","name":"恭城瑶族自治县"},{"parentCode":"450000","code":"450400","name":"梧州市"},{"parentCode":"450400","code":"450401","name":"市辖区"},{"parentCode":"450400","code":"450403","name":"万秀区"},{"parentCode":"450400","code":"450405","name":"长洲区"},{"parentCode":"450400","code":"450406","name":"龙圩区"},{"parentCode":"450400","code":"450421","name":"苍梧县"},{"parentCode":"450400","code":"450422","name":"藤县"},{"parentCode":"450400","code":"450423","name":"蒙山县"},{"parentCode":"450400","code":"450481","name":"岑溪市"},{"parentCode":"450000","code":"450500","name":"北海市"},{"parentCode":"450500","code":"450501","name":"市辖区"},{"parentCode":"450500","code":"450502","name":"海城区"},{"parentCode":"450500","code":"450503","name":"银海区"},{"parentCode":"450500","code":"450512","name":"铁山港区"},{"parentCode":"450500","code":"450521","name":"合浦县"},{"parentCode":"450000","code":"450600","name":"防城港市"},{"parentCode":"450600","code":"450601","name":"市辖区"},{"parentCode":"450600","code":"450602","name":"港口区"},{"parentCode":"450600","code":"450603","name":"防城区"},{"parentCode":"450600","code":"450621","name":"上思县"},{"parentCode":"450600","code":"450681","name":"东兴市"},{"parentCode":"450000","code":"450700","name":"钦州市"},{"parentCode":"450700","code":"450701","name":"市辖区"},{"parentCode":"450700","code":"450702","name":"钦南区"},{"parentCode":"450700","code":"450703","name":"钦北区"},{"parentCode":"450700","code":"450721","name":"灵山县"},{"parentCode":"450700","code":"450722","name":"浦北县"},{"parentCode":"450000","code":"450800","name":"贵港市"},{"parentCode":"450800","code":"450801","name":"市辖区"},{"parentCode":"450800","code":"450802","name":"港北区"},{"parentCode":"450800","code":"450803","name":"港南区"},{"parentCode":"450800","code":"450804","name":"覃塘区"},{"parentCode":"450800","code":"450821","name":"平南县"},{"parentCode":"450800","code":"450881","name":"桂平市"},{"parentCode":"450000","code":"450900","name":"玉林市"},{"parentCode":"450900","code":"450901","name":"市辖区"},{"parentCode":"450900","code":"450902","name":"玉州区"},{"parentCode":"450900","code":"450903","name":"福绵区"},{"parentCode":"450900","code":"450921","name":"容县"},{"parentCode":"450900","code":"450922","name":"陆川县"},{"parentCode":"450900","code":"450923","name":"博白县"},{"parentCode":"450900","code":"450924","name":"兴业县"},{"parentCode":"450900","code":"450981","name":"北流市"},{"parentCode":"450000","code":"451000","name":"百色市"},{"parentCode":"451000","code":"451001","name":"市辖区"},{"parentCode":"451000","code":"451002","name":"右江区"},{"parentCode":"451000","code":"451021","name":"田阳县"},{"parentCode":"451000","code":"451022","name":"田东县"},{"parentCode":"451000","code":"451023","name":"平果县"},{"parentCode":"451000","code":"451024","name":"德保县"},{"parentCode":"451000","code":"451025","name":"靖西县"},{"parentCode":"451000","code":"451026","name":"那坡县"},{"parentCode":"451000","code":"451027","name":"凌云县"},{"parentCode":"451000","code":"451028","name":"乐业县"},{"parentCode":"451000","code":"451029","name":"田林县"},{"parentCode":"451000","code":"451030","name":"西林县"},{"parentCode":"451000","code":"451031","name":"隆林各族自治县"},{"parentCode":"450000","code":"451100","name":"贺州市"},{"parentCode":"451100","code":"451101","name":"市辖区"},{"parentCode":"451100","code":"451102","name":"八步区"},{"parentCode":"451100","code":"451121","name":"昭平县"},{"parentCode":"451100","code":"451122","name":"钟山县"},{"parentCode":"451100","code":"451123","name":"富川瑶族自治县"},{"parentCode":"450000","code":"451200","name":"河池市"},{"parentCode":"451200","code":"451201","name":"市辖区"},{"parentCode":"451200","code":"451202","name":"金城江区"},{"parentCode":"451200","code":"451221","name":"南丹县"},{"parentCode":"451200","code":"451222","name":"天峨县"},{"parentCode":"451200","code":"451223","name":"凤山县"},{"parentCode":"451200","code":"451224","name":"东兰县"},{"parentCode":"451200","code":"451225","name":"罗城仫佬族自治县"},{"parentCode":"451200","code":"451226","name":"环江毛南族自治县"},{"parentCode":"451200","code":"451227","name":"巴马瑶族自治县"},{"parentCode":"451200","code":"451228","name":"都安瑶族自治县"},{"parentCode":"451200","code":"451229","name":"大化瑶族自治县"},{"parentCode":"451200","code":"451281","name":"宜州市"},{"parentCode":"450000","code":"451300","name":"来宾市"},{"parentCode":"451300","code":"451301","name":"市辖区"},{"parentCode":"451300","code":"451302","name":"兴宾区"},{"parentCode":"451300","code":"451321","name":"忻城县"},{"parentCode":"451300","code":"451322","name":"象州县"},{"parentCode":"451300","code":"451323","name":"武宣县"},{"parentCode":"451300","code":"451324","name":"金秀瑶族自治县"},{"parentCode":"451300","code":"451381","name":"合山市"},{"parentCode":"450000","code":"451400","name":"崇左市"},{"parentCode":"451400","code":"451401","name":"市辖区"},{"parentCode":"451400","code":"451402","name":"江州区"},{"parentCode":"451400","code":"451421","name":"扶绥县"},{"parentCode":"451400","code":"451422","name":"宁明县"},{"parentCode":"451400","code":"451423","name":"龙州县"},{"parentCode":"451400","code":"451424","name":"大新县"},{"parentCode":"451400","code":"451425","name":"天等县"},{"parentCode":"451400","code":"451481","name":"凭祥市"},{"parentCode":"000000","code":"460000","name":"海南省"},{"parentCode":"460000","code":"460100","name":"海口市"},{"parentCode":"460100","code":"460101","name":"市辖区"},{"parentCode":"460100","code":"460105","name":"秀英区"},{"parentCode":"460100","code":"460106","name":"龙华区"},{"parentCode":"460100","code":"460107","name":"琼山区"},{"parentCode":"460100","code":"460108","name":"美兰区"},{"parentCode":"460000","code":"460200","name":"三亚市"},{"parentCode":"460200","code":"460201","name":"市辖区"},{"parentCode":"460200","code":"460202","name":"海棠区"},{"parentCode":"460200","code":"460203","name":"吉阳区"},{"parentCode":"460200","code":"460204","name":"天涯区"},{"parentCode":"460200","code":"460205","name":"崖州区"},{"parentCode":"460000","code":"460300","name":"三沙市"},{"parentCode":"460300","code":"460301","name":"市辖区"},{"parentCode":"460000","code":"469000","name":"省直辖县级行政区划"},{"parentCode":"469000","code":"469001","name":"五指山市"},{"parentCode":"469000","code":"469002","name":"琼海市"},{"parentCode":"469000","code":"469003","name":"儋州市"},{"parentCode":"469000","code":"469005","name":"文昌市"},{"parentCode":"469000","code":"469006","name":"万宁市"},{"parentCode":"469000","code":"469007","name":"东方市"},{"parentCode":"469000","code":"469021","name":"定安县"},{"parentCode":"469000","code":"469022","name":"屯昌县"},{"parentCode":"469000","code":"469023","name":"澄迈县"},{"parentCode":"469000","code":"469024","name":"临高县"},{"parentCode":"469000","code":"469025","name":"白沙黎族自治县"},{"parentCode":"469000","code":"469026","name":"昌江黎族自治县"},{"parentCode":"469000","code":"469027","name":"乐东黎族自治县"},{"parentCode":"469000","code":"469028","name":"陵水黎族自治县"},{"parentCode":"469000","code":"469029","name":"保亭黎族苗族自治县"},{"parentCode":"469000","code":"469030","name":"琼中黎族苗族自治县"},{"parentCode":"000000","code":"500000","name":"重庆市"},{"parentCode":"500000","code":"500100","name":"市辖区"},{"parentCode":"500100","code":"500101","name":"万州区"},{"parentCode":"500100","code":"500102","name":"涪陵区"},{"parentCode":"500100","code":"500103","name":"渝中区"},{"parentCode":"500100","code":"500104","name":"大渡口区"},{"parentCode":"500100","code":"500105","name":"江北区"},{"parentCode":"500100","code":"500106","name":"沙坪坝区"},{"parentCode":"500100","code":"500107","name":"九龙坡区"},{"parentCode":"500100","code":"500108","name":"南岸区"},{"parentCode":"500100","code":"500109","name":"北碚区"},{"parentCode":"500100","code":"500110","name":"綦江区"},{"parentCode":"500100","code":"500111","name":"大足区"},{"parentCode":"500100","code":"500112","name":"渝北区"},{"parentCode":"500100","code":"500113","name":"巴南区"},{"parentCode":"500100","code":"500114","name":"黔江区"},{"parentCode":"500100","code":"500115","name":"长寿区"},{"parentCode":"500100","code":"500116","name":"江津区"},{"parentCode":"500100","code":"500117","name":"合川区"},{"parentCode":"500100","code":"500118","name":"永川区"},{"parentCode":"500100","code":"500119","name":"南川区"},{"parentCode":"500100","code":"500120","name":"璧山区"},{"parentCode":"500100","code":"500151","name":"铜梁区"},{"parentCode":"500000","code":"500200","name":"县"},{"parentCode":"500200","code":"500223","name":"潼南县"},{"parentCode":"500200","code":"500226","name":"荣昌县"},{"parentCode":"500200","code":"500228","name":"梁平县"},{"parentCode":"500200","code":"500229","name":"城口县"},{"parentCode":"500200","code":"500230","name":"丰都县"},{"parentCode":"500200","code":"500231","name":"垫江县"},{"parentCode":"500200","code":"500232","name":"武隆县"},{"parentCode":"500200","code":"500233","name":"忠县"},{"parentCode":"500200","code":"500234","name":"开县"},{"parentCode":"500200","code":"500235","name":"云阳县"},{"parentCode":"500200","code":"500236","name":"奉节县"},{"parentCode":"500200","code":"500237","name":"巫山县"},{"parentCode":"500200","code":"500238","name":"巫溪县"},{"parentCode":"500200","code":"500240","name":"石柱土家族自治县"},{"parentCode":"500200","code":"500241","name":"秀山土家族苗族自治县"},{"parentCode":"500200","code":"500242","name":"酉阳土家族苗族自治县"},{"parentCode":"500200","code":"500243","name":"彭水苗族土家族自治县"},{"parentCode":"000000","code":"510000","name":"四川省"},{"parentCode":"510000","code":"510100","name":"成都市"},{"parentCode":"510100","code":"510101","name":"市辖区"},{"parentCode":"510100","code":"510104","name":"锦江区"},{"parentCode":"510100","code":"510105","name":"青羊区"},{"parentCode":"510100","code":"510106","name":"金牛区"},{"parentCode":"510100","code":"510107","name":"武侯区"},{"parentCode":"510100","code":"510108","name":"成华区"},{"parentCode":"510100","code":"510112","name":"龙泉驿区"},{"parentCode":"510100","code":"510113","name":"青白江区"},{"parentCode":"510100","code":"510114","name":"新都区"},{"parentCode":"510100","code":"510115","name":"温江区"},{"parentCode":"510100","code":"510121","name":"金堂县"},{"parentCode":"510100","code":"510122","name":"双流县"},{"parentCode":"510100","code":"510124","name":"郫县"},{"parentCode":"510100","code":"510129","name":"大邑县"},{"parentCode":"510100","code":"510131","name":"蒲江县"},{"parentCode":"510100","code":"510132","name":"新津县"},{"parentCode":"510100","code":"510181","name":"都江堰市"},{"parentCode":"510100","code":"510182","name":"彭州市"},{"parentCode":"510100","code":"510183","name":"邛崃市"},{"parentCode":"510100","code":"510184","name":"崇州市"},{"parentCode":"510000","code":"510300","name":"自贡市"},{"parentCode":"510300","code":"510301","name":"市辖区"},{"parentCode":"510300","code":"510302","name":"自流井区"},{"parentCode":"510300","code":"510303","name":"贡井区"},{"parentCode":"510300","code":"510304","name":"大安区"},{"parentCode":"510300","code":"510311","name":"沿滩区"},{"parentCode":"510300","code":"510321","name":"荣县"},{"parentCode":"510300","code":"510322","name":"富顺县"},{"parentCode":"510000","code":"510400","name":"攀枝花市"},{"parentCode":"510400","code":"510401","name":"市辖区"},{"parentCode":"510400","code":"510402","name":"东区"},{"parentCode":"510400","code":"510403","name":"西区"},{"parentCode":"510400","code":"510411","name":"仁和区"},{"parentCode":"510400","code":"510421","name":"米易县"},{"parentCode":"510400","code":"510422","name":"盐边县"},{"parentCode":"510000","code":"510500","name":"泸州市"},{"parentCode":"510500","code":"510501","name":"市辖区"},{"parentCode":"510500","code":"510502","name":"江阳区"},{"parentCode":"510500","code":"510503","name":"纳溪区"},{"parentCode":"510500","code":"510504","name":"龙马潭区"},{"parentCode":"510500","code":"510521","name":"泸县"},{"parentCode":"510500","code":"510522","name":"合江县"},{"parentCode":"510500","code":"510524","name":"叙永县"},{"parentCode":"510500","code":"510525","name":"古蔺县"},{"parentCode":"510000","code":"510600","name":"德阳市"},{"parentCode":"510600","code":"510601","name":"市辖区"},{"parentCode":"510600","code":"510603","name":"旌阳区"},{"parentCode":"510600","code":"510623","name":"中江县"},{"parentCode":"510600","code":"510626","name":"罗江县"},{"parentCode":"510600","code":"510681","name":"广汉市"},{"parentCode":"510600","code":"510682","name":"什邡市"},{"parentCode":"510600","code":"510683","name":"绵竹市"},{"parentCode":"510000","code":"510700","name":"绵阳市"},{"parentCode":"510700","code":"510701","name":"市辖区"},{"parentCode":"510700","code":"510703","name":"涪城区"},{"parentCode":"510700","code":"510704","name":"游仙区"},{"parentCode":"510700","code":"510722","name":"三台县"},{"parentCode":"510700","code":"510723","name":"盐亭县"},{"parentCode":"510700","code":"510724","name":"安县"},{"parentCode":"510700","code":"510725","name":"梓潼县"},{"parentCode":"510700","code":"510726","name":"北川羌族自治县"},{"parentCode":"510700","code":"510727","name":"平武县"},{"parentCode":"510700","code":"510781","name":"江油市"},{"parentCode":"510000","code":"510800","name":"广元市"},{"parentCode":"510800","code":"510801","name":"市辖区"},{"parentCode":"510800","code":"510802","name":"利州区"},{"parentCode":"510800","code":"510811","name":"昭化区"},{"parentCode":"510800","code":"510812","name":"朝天区"},{"parentCode":"510800","code":"510821","name":"旺苍县"},{"parentCode":"510800","code":"510822","name":"青川县"},{"parentCode":"510800","code":"510823","name":"剑阁县"},{"parentCode":"510800","code":"510824","name":"苍溪县"},{"parentCode":"510000","code":"510900","name":"遂宁市"},{"parentCode":"510900","code":"510901","name":"市辖区"},{"parentCode":"510900","code":"510903","name":"船山区"},{"parentCode":"510900","code":"510904","name":"安居区"},{"parentCode":"510900","code":"510921","name":"蓬溪县"},{"parentCode":"510900","code":"510922","name":"射洪县"},{"parentCode":"510900","code":"510923","name":"大英县"},{"parentCode":"510000","code":"511000","name":"内江市"},{"parentCode":"511000","code":"511001","name":"市辖区"},{"parentCode":"511000","code":"511002","name":"市中区"},{"parentCode":"511000","code":"511011","name":"东兴区"},{"parentCode":"511000","code":"511024","name":"威远县"},{"parentCode":"511000","code":"511025","name":"资中县"},{"parentCode":"511000","code":"511028","name":"隆昌县"},{"parentCode":"510000","code":"511100","name":"乐山市"},{"parentCode":"511100","code":"511101","name":"市辖区"},{"parentCode":"511100","code":"511102","name":"市中区"},{"parentCode":"511100","code":"511111","name":"沙湾区"},{"parentCode":"511100","code":"511112","name":"五通桥区"},{"parentCode":"511100","code":"511113","name":"金口河区"},{"parentCode":"511100","code":"511123","name":"犍为县"},{"parentCode":"511100","code":"511124","name":"井研县"},{"parentCode":"511100","code":"511126","name":"夹江县"},{"parentCode":"511100","code":"511129","name":"沐川县"},{"parentCode":"511100","code":"511132","name":"峨边彝族自治县"},{"parentCode":"511100","code":"511133","name":"马边彝族自治县"},{"parentCode":"511100","code":"511181","name":"峨眉山市"},{"parentCode":"510000","code":"511300","name":"南充市"},{"parentCode":"511300","code":"511301","name":"市辖区"},{"parentCode":"511300","code":"511302","name":"顺庆区"},{"parentCode":"511300","code":"511303","name":"高坪区"},{"parentCode":"511300","code":"511304","name":"嘉陵区"},{"parentCode":"511300","code":"511321","name":"南部县"},{"parentCode":"511300","code":"511322","name":"营山县"},{"parentCode":"511300","code":"511323","name":"蓬安县"},{"parentCode":"511300","code":"511324","name":"仪陇县"},{"parentCode":"511300","code":"511325","name":"西充县"},{"parentCode":"511300","code":"511381","name":"阆中市"},{"parentCode":"510000","code":"511400","name":"眉山市"},{"parentCode":"511400","code":"511401","name":"市辖区"},{"parentCode":"511400","code":"511402","name":"东坡区"},{"parentCode":"511400","code":"511421","name":"仁寿县"},{"parentCode":"511400","code":"511422","name":"彭山县"},{"parentCode":"511400","code":"511423","name":"洪雅县"},{"parentCode":"511400","code":"511424","name":"丹棱县"},{"parentCode":"511400","code":"511425","name":"青神县"},{"parentCode":"510000","code":"511500","name":"宜宾市"},{"parentCode":"511500","code":"511501","name":"市辖区"},{"parentCode":"511500","code":"511502","name":"翠屏区"},{"parentCode":"511500","code":"511503","name":"南溪区"},{"parentCode":"511500","code":"511521","name":"宜宾县"},{"parentCode":"511500","code":"511523","name":"江安县"},{"parentCode":"511500","code":"511524","name":"长宁县"},{"parentCode":"511500","code":"511525","name":"高县"},{"parentCode":"511500","code":"511526","name":"珙县"},{"parentCode":"511500","code":"511527","name":"筠连县"},{"parentCode":"511500","code":"511528","name":"兴文县"},{"parentCode":"511500","code":"511529","name":"屏山县"},{"parentCode":"510000","code":"511600","name":"广安市"},{"parentCode":"511600","code":"511601","name":"市辖区"},{"parentCode":"511600","code":"511602","name":"广安区"},{"parentCode":"511600","code":"511603","name":"前锋区"},{"parentCode":"511600","code":"511621","name":"岳池县"},{"parentCode":"511600","code":"511622","name":"武胜县"},{"parentCode":"511600","code":"511623","name":"邻水县"},{"parentCode":"511600","code":"511681","name":"华蓥市"},{"parentCode":"510000","code":"511700","name":"达州市"},{"parentCode":"511700","code":"511701","name":"市辖区"},{"parentCode":"511700","code":"511702","name":"通川区"},{"parentCode":"511700","code":"511703","name":"达川区"},{"parentCode":"511700","code":"511722","name":"宣汉县"},{"parentCode":"511700","code":"511723","name":"开江县"},{"parentCode":"511700","code":"511724","name":"大竹县"},{"parentCode":"511700","code":"511725","name":"渠县"},{"parentCode":"511700","code":"511781","name":"万源市"},{"parentCode":"510000","code":"511800","name":"雅安市"},{"parentCode":"511800","code":"511801","name":"市辖区"},{"parentCode":"511800","code":"511802","name":"雨城区"},{"parentCode":"511800","code":"511803","name":"名山区"},{"parentCode":"511800","code":"511822","name":"荥经县"},{"parentCode":"511800","code":"511823","name":"汉源县"},{"parentCode":"511800","code":"511824","name":"石棉县"},{"parentCode":"511800","code":"511825","name":"天全县"},{"parentCode":"511800","code":"511826","name":"芦山县"},{"parentCode":"511800","code":"511827","name":"宝兴县"},{"parentCode":"510000","code":"511900","name":"巴中市"},{"parentCode":"511900","code":"511901","name":"市辖区"},{"parentCode":"511900","code":"511902","name":"巴州区"},{"parentCode":"511900","code":"511903","name":"恩阳区"},{"parentCode":"511900","code":"511921","name":"通江县"},{"parentCode":"511900","code":"511922","name":"南江县"},{"parentCode":"511900","code":"511923","name":"平昌县"},{"parentCode":"510000","code":"512000","name":"资阳市"},{"parentCode":"512000","code":"512001","name":"市辖区"},{"parentCode":"512000","code":"512002","name":"雁江区"},{"parentCode":"512000","code":"512021","name":"安岳县"},{"parentCode":"512000","code":"512022","name":"乐至县"},{"parentCode":"512000","code":"512081","name":"简阳市"},{"parentCode":"510000","code":"513200","name":"阿坝藏族羌族自治州"},{"parentCode":"513200","code":"513221","name":"汶川县"},{"parentCode":"513200","code":"513222","name":"理县"},{"parentCode":"513200","code":"513223","name":"茂县"},{"parentCode":"513200","code":"513224","name":"松潘县"},{"parentCode":"513200","code":"513225","name":"九寨沟县"},{"parentCode":"513200","code":"513226","name":"金川县"},{"parentCode":"513200","code":"513227","name":"小金县"},{"parentCode":"513200","code":"513228","name":"黑水县"},{"parentCode":"513200","code":"513229","name":"马尔康县"},{"parentCode":"513200","code":"513230","name":"壤塘县"},{"parentCode":"513200","code":"513231","name":"阿坝县"},{"parentCode":"513200","code":"513232","name":"若尔盖县"},{"parentCode":"513200","code":"513233","name":"红原县"},{"parentCode":"510000","code":"513300","name":"甘孜藏族自治州"},{"parentCode":"513300","code":"513321","name":"康定县"},{"parentCode":"513300","code":"513322","name":"泸定县"},{"parentCode":"513300","code":"513323","name":"丹巴县"},{"parentCode":"513300","code":"513324","name":"九龙县"},{"parentCode":"513300","code":"513325","name":"雅江县"},{"parentCode":"513300","code":"513326","name":"道孚县"},{"parentCode":"513300","code":"513327","name":"炉霍县"},{"parentCode":"513300","code":"513328","name":"甘孜县"},{"parentCode":"513300","code":"513329","name":"新龙县"},{"parentCode":"513300","code":"513330","name":"德格县"},{"parentCode":"513300","code":"513331","name":"白玉县"},{"parentCode":"513300","code":"513332","name":"石渠县"},{"parentCode":"513300","code":"513333","name":"色达县"},{"parentCode":"513300","code":"513334","name":"理塘县"},{"parentCode":"513300","code":"513335","name":"巴塘县"},{"parentCode":"513300","code":"513336","name":"乡城县"},{"parentCode":"513300","code":"513337","name":"稻城县"},{"parentCode":"513300","code":"513338","name":"得荣县"},{"parentCode":"510000","code":"513400","name":"凉山彝族自治州"},{"parentCode":"513400","code":"513401","name":"西昌市"},{"parentCode":"513400","code":"513422","name":"木里藏族自治县"},{"parentCode":"513400","code":"513423","name":"盐源县"},{"parentCode":"513400","code":"513424","name":"德昌县"},{"parentCode":"513400","code":"513425","name":"会理县"},{"parentCode":"513400","code":"513426","name":"会东县"},{"parentCode":"513400","code":"513427","name":"宁南县"},{"parentCode":"513400","code":"513428","name":"普格县"},{"parentCode":"513400","code":"513429","name":"布拖县"},{"parentCode":"513400","code":"513430","name":"金阳县"},{"parentCode":"513400","code":"513431","name":"昭觉县"},{"parentCode":"513400","code":"513432","name":"喜德县"},{"parentCode":"513400","code":"513433","name":"冕宁县"},{"parentCode":"513400","code":"513434","name":"越西县"},{"parentCode":"513400","code":"513435","name":"甘洛县"},{"parentCode":"513400","code":"513436","name":"美姑县"},{"parentCode":"513400","code":"513437","name":"雷波县"},{"parentCode":"000000","code":"520000","name":"贵州省"},{"parentCode":"520000","code":"520100","name":"贵阳市"},{"parentCode":"520100","code":"520101","name":"市辖区"},{"parentCode":"520100","code":"520102","name":"南明区"},{"parentCode":"520100","code":"520103","name":"云岩区"},{"parentCode":"520100","code":"520111","name":"花溪区"},{"parentCode":"520100","code":"520112","name":"乌当区"},{"parentCode":"520100","code":"520113","name":"白云区"},{"parentCode":"520100","code":"520115","name":"观山湖区"},{"parentCode":"520100","code":"520121","name":"开阳县"},{"parentCode":"520100","code":"520122","name":"息烽县"},{"parentCode":"520100","code":"520123","name":"修文县"},{"parentCode":"520100","code":"520181","name":"清镇市"},{"parentCode":"520000","code":"520200","name":"六盘水市"},{"parentCode":"520200","code":"520201","name":"钟山区"},{"parentCode":"520200","code":"520203","name":"六枝特区"},{"parentCode":"520200","code":"520221","name":"水城县"},{"parentCode":"520200","code":"520222","name":"盘县"},{"parentCode":"520000","code":"520300","name":"遵义市"},{"parentCode":"520300","code":"520301","name":"市辖区"},{"parentCode":"520300","code":"520302","name":"红花岗区"},{"parentCode":"520300","code":"520303","name":"汇川区"},{"parentCode":"520300","code":"520321","name":"遵义县"},{"parentCode":"520300","code":"520322","name":"桐梓县"},{"parentCode":"520300","code":"520323","name":"绥阳县"},{"parentCode":"520300","code":"520324","name":"正安县"},{"parentCode":"520300","code":"520325","name":"道真仡佬族苗族自治县"},{"parentCode":"520300","code":"520326","name":"务川仡佬族苗族自治县"},{"parentCode":"520300","code":"520327","name":"凤冈县"},{"parentCode":"520300","code":"520328","name":"湄潭县"},{"parentCode":"520300","code":"520329","name":"余庆县"},{"parentCode":"520300","code":"520330","name":"习水县"},{"parentCode":"520300","code":"520381","name":"赤水市"},{"parentCode":"520300","code":"520382","name":"仁怀市"},{"parentCode":"520000","code":"520400","name":"安顺市"},{"parentCode":"520400","code":"520401","name":"市辖区"},{"parentCode":"520400","code":"520402","name":"西秀区"},{"parentCode":"520400","code":"520421","name":"平坝县"},{"parentCode":"520400","code":"520422","name":"普定县"},{"parentCode":"520400","code":"520423","name":"镇宁布依族苗族自治县"},{"parentCode":"520400","code":"520424","name":"关岭布依族苗族自治县"},{"parentCode":"520400","code":"520425","name":"紫云苗族布依族自治县"},{"parentCode":"520000","code":"520500","name":"毕节市"},{"parentCode":"520500","code":"520501","name":"市辖区"},{"parentCode":"520500","code":"520502","name":"七星关区"},{"parentCode":"520500","code":"520521","name":"大方县"},{"parentCode":"520500","code":"520522","name":"黔西县"},{"parentCode":"520500","code":"520523","name":"金沙县"},{"parentCode":"520500","code":"520524","name":"织金县"},{"parentCode":"520500","code":"520525","name":"纳雍县"},{"parentCode":"520500","code":"520526","name":"威宁彝族回族苗族自治县"},{"parentCode":"520500","code":"520527","name":"赫章县"},{"parentCode":"520000","code":"520600","name":"铜仁市"},{"parentCode":"520600","code":"520601","name":"市辖区"},{"parentCode":"520600","code":"520602","name":"碧江区"},{"parentCode":"520600","code":"520603","name":"万山区"},{"parentCode":"520600","code":"520621","name":"江口县"},{"parentCode":"520600","code":"520622","name":"玉屏侗族自治县"},{"parentCode":"520600","code":"520623","name":"石阡县"},{"parentCode":"520600","code":"520624","name":"思南县"},{"parentCode":"520600","code":"520625","name":"印江土家族苗族自治县"},{"parentCode":"520600","code":"520626","name":"德江县"},{"parentCode":"520600","code":"520627","name":"沿河土家族自治县"},{"parentCode":"520600","code":"520628","name":"松桃苗族自治县"},{"parentCode":"520000","code":"522300","name":"黔西南布依族苗族自治州"},{"parentCode":"522300","code":"522301","name":"兴义市"},{"parentCode":"522300","code":"522322","name":"兴仁县"},{"parentCode":"522300","code":"522323","name":"普安县"},{"parentCode":"522300","code":"522324","name":"晴隆县"},{"parentCode":"522300","code":"522325","name":"贞丰县"},{"parentCode":"522300","code":"522326","name":"望谟县"},{"parentCode":"522300","code":"522327","name":"册亨县"},{"parentCode":"522300","code":"522328","name":"安龙县"},{"parentCode":"520000","code":"522600","name":"黔东南苗族侗族自治州"},{"parentCode":"522600","code":"522601","name":"凯里市"},{"parentCode":"522600","code":"522622","name":"黄平县"},{"parentCode":"522600","code":"522623","name":"施秉县"},{"parentCode":"522600","code":"522624","name":"三穗县"},{"parentCode":"522600","code":"522625","name":"镇远县"},{"parentCode":"522600","code":"522626","name":"岑巩县"},{"parentCode":"522600","code":"522627","name":"天柱县"},{"parentCode":"522600","code":"522628","name":"锦屏县"},{"parentCode":"522600","code":"522629","name":"剑河县"},{"parentCode":"522600","code":"522630","name":"台江县"},{"parentCode":"522600","code":"522631","name":"黎平县"},{"parentCode":"522600","code":"522632","name":"榕江县"},{"parentCode":"522600","code":"522633","name":"从江县"},{"parentCode":"522600","code":"522634","name":"雷山县"},{"parentCode":"522600","code":"522635","name":"麻江县"},{"parentCode":"522600","code":"522636","name":"丹寨县"},{"parentCode":"520000","code":"522700","name":"黔南布依族苗族自治州"},{"parentCode":"522700","code":"522701","name":"都匀市"},{"parentCode":"522700","code":"522702","name":"福泉市"},{"parentCode":"522700","code":"522722","name":"荔波县"},{"parentCode":"522700","code":"522723","name":"贵定县"},{"parentCode":"522700","code":"522725","name":"瓮安县"},{"parentCode":"522700","code":"522726","name":"独山县"},{"parentCode":"522700","code":"522727","name":"平塘县"},{"parentCode":"522700","code":"522728","name":"罗甸县"},{"parentCode":"522700","code":"522729","name":"长顺县"},{"parentCode":"522700","code":"522730","name":"龙里县"},{"parentCode":"522700","code":"522731","name":"惠水县"},{"parentCode":"522700","code":"522732","name":"三都水族自治县"},{"parentCode":"000000","code":"530000","name":"云南省"},{"parentCode":"530000","code":"530100","name":"昆明市"},{"parentCode":"530100","code":"530101","name":"市辖区"},{"parentCode":"530100","code":"530102","name":"五华区"},{"parentCode":"530100","code":"530103","name":"盘龙区"},{"parentCode":"530100","code":"530111","name":"官渡区"},{"parentCode":"530100","code":"530112","name":"西山区"},{"parentCode":"530100","code":"530113","name":"东川区"},{"parentCode":"530100","code":"530114","name":"呈贡区"},{"parentCode":"530100","code":"530122","name":"晋宁县"},{"parentCode":"530100","code":"530124","name":"富民县"},{"parentCode":"530100","code":"530125","name":"宜良县"},{"parentCode":"530100","code":"530126","name":"石林彝族自治县"},{"parentCode":"530100","code":"530127","name":"嵩明县"},{"parentCode":"530100","code":"530128","name":"禄劝彝族苗族自治县"},{"parentCode":"530100","code":"530129","name":"寻甸回族彝族自治县"},{"parentCode":"530100","code":"530181","name":"安宁市"},{"parentCode":"530000","code":"530300","name":"曲靖市"},{"parentCode":"530300","code":"530301","name":"市辖区"},{"parentCode":"530300","code":"530302","name":"麒麟区"},{"parentCode":"530300","code":"530321","name":"马龙县"},{"parentCode":"530300","code":"530322","name":"陆良县"},{"parentCode":"530300","code":"530323","name":"师宗县"},{"parentCode":"530300","code":"530324","name":"罗平县"},{"parentCode":"530300","code":"530325","name":"富源县"},{"parentCode":"530300","code":"530326","name":"会泽县"},{"parentCode":"530300","code":"530328","name":"沾益县"},{"parentCode":"530300","code":"530381","name":"宣威市"},{"parentCode":"530000","code":"530400","name":"玉溪市"},{"parentCode":"530400","code":"530401","name":"市辖区"},{"parentCode":"530400","code":"530402","name":"红塔区"},{"parentCode":"530400","code":"530421","name":"江川县"},{"parentCode":"530400","code":"530422","name":"澄江县"},{"parentCode":"530400","code":"530423","name":"通海县"},{"parentCode":"530400","code":"530424","name":"华宁县"},{"parentCode":"530400","code":"530425","name":"易门县"},{"parentCode":"530400","code":"530426","name":"峨山彝族自治县"},{"parentCode":"530400","code":"530427","name":"新平彝族傣族自治县"},{"parentCode":"530400","code":"530428","name":"元江哈尼族彝族傣族自治县"},{"parentCode":"530000","code":"530500","name":"保山市"},{"parentCode":"530500","code":"530501","name":"市辖区"},{"parentCode":"530500","code":"530502","name":"隆阳区"},{"parentCode":"530500","code":"530521","name":"施甸县"},{"parentCode":"530500","code":"530522","name":"腾冲县"},{"parentCode":"530500","code":"530523","name":"龙陵县"},{"parentCode":"530500","code":"530524","name":"昌宁县"},{"parentCode":"530000","code":"530600","name":"昭通市"},{"parentCode":"530600","code":"530601","name":"市辖区"},{"parentCode":"530600","code":"530602","name":"昭阳区"},{"parentCode":"530600","code":"530621","name":"鲁甸县"},{"parentCode":"530600","code":"530622","name":"巧家县"},{"parentCode":"530600","code":"530623","name":"盐津县"},{"parentCode":"530600","code":"530624","name":"大关县"},{"parentCode":"530600","code":"530625","name":"永善县"},{"parentCode":"530600","code":"530626","name":"绥江县"},{"parentCode":"530600","code":"530627","name":"镇雄县"},{"parentCode":"530600","code":"530628","name":"彝良县"},{"parentCode":"530600","code":"530629","name":"威信县"},{"parentCode":"530600","code":"530630","name":"水富县"},{"parentCode":"530000","code":"530700","name":"丽江市"},{"parentCode":"530700","code":"530701","name":"市辖区"},{"parentCode":"530700","code":"530702","name":"古城区"},{"parentCode":"530700","code":"530721","name":"玉龙纳西族自治县"},{"parentCode":"530700","code":"530722","name":"永胜县"},{"parentCode":"530700","code":"530723","name":"华坪县"},{"parentCode":"530700","code":"530724","name":"宁蒗彝族自治县"},{"parentCode":"530000","code":"530800","name":"普洱市"},{"parentCode":"530800","code":"530801","name":"市辖区"},{"parentCode":"530800","code":"530802","name":"思茅区"},{"parentCode":"530800","code":"530821","name":"宁洱哈尼族彝族自治县"},{"parentCode":"530800","code":"530822","name":"墨江哈尼族自治县"},{"parentCode":"530800","code":"530823","name":"景东彝族自治县"},{"parentCode":"530800","code":"530824","name":"景谷傣族彝族自治县"},{"parentCode":"530800","code":"530825","name":"镇沅彝族哈尼族拉祜族自治县"},{"parentCode":"530800","code":"530826","name":"江城哈尼族彝族自治县"},{"parentCode":"530800","code":"530827","name":"孟连傣族拉祜族佤族自治县"},{"parentCode":"530800","code":"530828","name":"澜沧拉祜族自治县"},{"parentCode":"530800","code":"530829","name":"西盟佤族自治县"},{"parentCode":"530000","code":"530900","name":"临沧市"},{"parentCode":"530900","code":"530901","name":"市辖区"},{"parentCode":"530900","code":"530902","name":"临翔区"},{"parentCode":"530900","code":"530921","name":"凤庆县"},{"parentCode":"530900","code":"530922","name":"云县"},{"parentCode":"530900","code":"530923","name":"永德县"},{"parentCode":"530900","code":"530924","name":"镇康县"},{"parentCode":"530900","code":"530925","name":"双江拉祜族佤族布朗族傣族自治县"},{"parentCode":"530900","code":"530926","name":"耿马傣族佤族自治县"},{"parentCode":"530900","code":"530927","name":"沧源佤族自治县"},{"parentCode":"530000","code":"532300","name":"楚雄彝族自治州"},{"parentCode":"532300","code":"532301","name":"楚雄市"},{"parentCode":"532300","code":"532322","name":"双柏县"},{"parentCode":"532300","code":"532323","name":"牟定县"},{"parentCode":"532300","code":"532324","name":"南华县"},{"parentCode":"532300","code":"532325","name":"姚安县"},{"parentCode":"532300","code":"532326","name":"大姚县"},{"parentCode":"532300","code":"532327","name":"永仁县"},{"parentCode":"532300","code":"532328","name":"元谋县"},{"parentCode":"532300","code":"532329","name":"武定县"},{"parentCode":"532300","code":"532331","name":"禄丰县"},{"parentCode":"530000","code":"532500","name":"红河哈尼族彝族自治州"},{"parentCode":"532500","code":"532501","name":"个旧市"},{"parentCode":"532500","code":"532502","name":"开远市"},{"parentCode":"532500","code":"532503","name":"蒙自市"},{"parentCode":"532500","code":"532504","name":"弥勒市"},{"parentCode":"532500","code":"532523","name":"屏边苗族自治县"},{"parentCode":"532500","code":"532524","name":"建水县"},{"parentCode":"532500","code":"532525","name":"石屏县"},{"parentCode":"532500","code":"532527","name":"泸西县"},{"parentCode":"532500","code":"532528","name":"元阳县"},{"parentCode":"532500","code":"532529","name":"红河县"},{"parentCode":"532500","code":"532530","name":"金平苗族瑶族傣族自治县"},{"parentCode":"532500","code":"532531","name":"绿春县"},{"parentCode":"532500","code":"532532","name":"河口瑶族自治县"},{"parentCode":"530000","code":"532600","name":"文山壮族苗族自治州"},{"parentCode":"532600","code":"532601","name":"文山市"},{"parentCode":"532600","code":"532622","name":"砚山县"},{"parentCode":"532600","code":"532623","name":"西畴县"},{"parentCode":"532600","code":"532624","name":"麻栗坡县"},{"parentCode":"532600","code":"532625","name":"马关县"},{"parentCode":"532600","code":"532626","name":"丘北县"},{"parentCode":"532600","code":"532627","name":"广南县"},{"parentCode":"532600","code":"532628","name":"富宁县"},{"parentCode":"530000","code":"532800","name":"西双版纳傣族自治州"},{"parentCode":"532800","code":"532801","name":"景洪市"},{"parentCode":"532800","code":"532822","name":"勐海县"},{"parentCode":"532800","code":"532823","name":"勐腊县"},{"parentCode":"530000","code":"532900","name":"大理白族自治州"},{"parentCode":"532900","code":"532901","name":"大理市"},{"parentCode":"532900","code":"532922","name":"漾濞彝族自治县"},{"parentCode":"532900","code":"532923","name":"祥云县"},{"parentCode":"532900","code":"532924","name":"宾川县"},{"parentCode":"532900","code":"532925","name":"弥渡县"},{"parentCode":"532900","code":"532926","name":"南涧彝族自治县"},{"parentCode":"532900","code":"532927","name":"巍山彝族回族自治县"},{"parentCode":"532900","code":"532928","name":"永平县"},{"parentCode":"532900","code":"532929","name":"云龙县"},{"parentCode":"532900","code":"532930","name":"洱源县"},{"parentCode":"532900","code":"532931","name":"剑川县"},{"parentCode":"532900","code":"532932","name":"鹤庆县"},{"parentCode":"530000","code":"533100","name":"德宏傣族景颇族自治州"},{"parentCode":"533100","code":"533102","name":"瑞丽市"},{"parentCode":"533100","code":"533103","name":"芒市"},{"parentCode":"533100","code":"533122","name":"梁河县"},{"parentCode":"533100","code":"533123","name":"盈江县"},{"parentCode":"533100","code":"533124","name":"陇川县"},{"parentCode":"530000","code":"533300","name":"怒江傈僳族自治州"},{"parentCode":"533300","code":"533321","name":"泸水县"},{"parentCode":"533300","code":"533323","name":"福贡县"},{"parentCode":"533300","code":"533324","name":"贡山独龙族怒族自治县"},{"parentCode":"533300","code":"533325","name":"兰坪白族普米族自治县"},{"parentCode":"530000","code":"533400","name":"迪庆藏族自治州"},{"parentCode":"533400","code":"533421","name":"香格里拉县"},{"parentCode":"533400","code":"533422","name":"德钦县"},{"parentCode":"533400","code":"533423","name":"维西傈僳族自治县"},{"parentCode":"000000","code":"540000","name":"西藏自治区"},{"parentCode":"540000","code":"540100","name":"拉萨市"},{"parentCode":"540100","code":"540101","name":"市辖区"},{"parentCode":"540100","code":"540102","name":"城关区"},{"parentCode":"540100","code":"540121","name":"林周县"},{"parentCode":"540100","code":"540122","name":"当雄县"},{"parentCode":"540100","code":"540123","name":"尼木县"},{"parentCode":"540100","code":"540124","name":"曲水县"},{"parentCode":"540100","code":"540125","name":"堆龙德庆县"},{"parentCode":"540100","code":"540126","name":"达孜县"},{"parentCode":"540100","code":"540127","name":"墨竹工卡县"},{"parentCode":"540000","code":"540200","name":"日喀则市"},{"parentCode":"540200","code":"540202","name":"桑珠孜区"},{"parentCode":"540200","code":"540221","name":"南木林县"},{"parentCode":"540200","code":"540222","name":"江孜县"},{"parentCode":"540200","code":"540223","name":"定日县"},{"parentCode":"540200","code":"540224","name":"萨迦县"},{"parentCode":"540200","code":"540225","name":"拉孜县"},{"parentCode":"540200","code":"540226","name":"昂仁县"},{"parentCode":"540200","code":"540227","name":"谢通门县"},{"parentCode":"540200","code":"540228","name":"白朗县"},{"parentCode":"540200","code":"540229","name":"仁布县"},{"parentCode":"540200","code":"540230","name":"康马县"},{"parentCode":"540200","code":"540231","name":"定结县"},{"parentCode":"540200","code":"540232","name":"仲巴县"},{"parentCode":"540200","code":"540233","name":"亚东县"},{"parentCode":"540200","code":"540234","name":"吉隆县"},{"parentCode":"540200","code":"540235","name":"聂拉木县"},{"parentCode":"540200","code":"540236","name":"萨嘎县"},{"parentCode":"540200","code":"540237","name":"岗巴县"},{"parentCode":"540000","code":"542100","name":"昌都地区"},{"parentCode":"542100","code":"542121","name":"昌都县"},{"parentCode":"542100","code":"542122","name":"江达县"},{"parentCode":"542100","code":"542123","name":"贡觉县"},{"parentCode":"542100","code":"542124","name":"类乌齐县"},{"parentCode":"542100","code":"542125","name":"丁青县"},{"parentCode":"542100","code":"542126","name":"察雅县"},{"parentCode":"542100","code":"542127","name":"八宿县"},{"parentCode":"542100","code":"542128","name":"左贡县"},{"parentCode":"542100","code":"542129","name":"芒康县"},{"parentCode":"542100","code":"542132","name":"洛隆县"},{"parentCode":"542100","code":"542133","name":"边坝县"},{"parentCode":"540000","code":"542200","name":"山南地区"},{"parentCode":"542200","code":"542221","name":"乃东县"},{"parentCode":"542200","code":"542222","name":"扎囊县"},{"parentCode":"542200","code":"542223","name":"贡嘎县"},{"parentCode":"542200","code":"542224","name":"桑日县"},{"parentCode":"542200","code":"542225","name":"琼结县"},{"parentCode":"542200","code":"542226","name":"曲松县"},{"parentCode":"542200","code":"542227","name":"措美县"},{"parentCode":"542200","code":"542228","name":"洛扎县"},{"parentCode":"542200","code":"542229","name":"加查县"},{"parentCode":"542200","code":"542231","name":"隆子县"},{"parentCode":"542200","code":"542232","name":"错那县"},{"parentCode":"542200","code":"542233","name":"浪卡子县"},{"parentCode":"540000","code":"542400","name":"那曲地区"},{"parentCode":"542400","code":"542421","name":"那曲县"},{"parentCode":"542400","code":"542422","name":"嘉黎县"},{"parentCode":"542400","code":"542423","name":"比如县"},{"parentCode":"542400","code":"542424","name":"聂荣县"},{"parentCode":"542400","code":"542425","name":"安多县"},{"parentCode":"542400","code":"542426","name":"申扎县"},{"parentCode":"542400","code":"542427","name":"索县"},{"parentCode":"542400","code":"542428","name":"班戈县"},{"parentCode":"542400","code":"542429","name":"巴青县"},{"parentCode":"542400","code":"542430","name":"尼玛县"},{"parentCode":"542400","code":"542431","name":"双湖县"},{"parentCode":"540000","code":"542500","name":"阿里地区"},{"parentCode":"542500","code":"542521","name":"普兰县"},{"parentCode":"542500","code":"542522","name":"札达县"},{"parentCode":"542500","code":"542523","name":"噶尔县"},{"parentCode":"542500","code":"542524","name":"日土县"},{"parentCode":"542500","code":"542525","name":"革吉县"},{"parentCode":"542500","code":"542526","name":"改则县"},{"parentCode":"542500","code":"542527","name":"措勤县"},{"parentCode":"540000","code":"542600","name":"林芝地区"},{"parentCode":"542600","code":"542621","name":"林芝县"},{"parentCode":"542600","code":"542622","name":"工布江达县"},{"parentCode":"542600","code":"542623","name":"米林县"},{"parentCode":"542600","code":"542624","name":"墨脱县"},{"parentCode":"542600","code":"542625","name":"波密县"},{"parentCode":"542600","code":"542626","name":"察隅县"},{"parentCode":"542600","code":"542627","name":"朗县"},{"parentCode":"000000","code":"610000","name":"陕西省"},{"parentCode":"610000","code":"610100","name":"西安市"},{"parentCode":"610100","code":"610101","name":"市辖区"},{"parentCode":"610100","code":"610102","name":"新城区"},{"parentCode":"610100","code":"610103","name":"碑林区"},{"parentCode":"610100","code":"610104","name":"莲湖区"},{"parentCode":"610100","code":"610111","name":"灞桥区"},{"parentCode":"610100","code":"610112","name":"未央区"},{"parentCode":"610100","code":"610113","name":"雁塔区"},{"parentCode":"610100","code":"610114","name":"阎良区"},{"parentCode":"610100","code":"610115","name":"临潼区"},{"parentCode":"610100","code":"610116","name":"长安区"},{"parentCode":"610100","code":"610122","name":"蓝田县"},{"parentCode":"610100","code":"610124","name":"周至县"},{"parentCode":"610100","code":"610125","name":"户县"},{"parentCode":"610100","code":"610126","name":"高陵县"},{"parentCode":"610000","code":"610200","name":"铜川市"},{"parentCode":"610200","code":"610201","name":"市辖区"},{"parentCode":"610200","code":"610202","name":"王益区"},{"parentCode":"610200","code":"610203","name":"印台区"},{"parentCode":"610200","code":"610204","name":"耀州区"},{"parentCode":"610200","code":"610222","name":"宜君县"},{"parentCode":"610000","code":"610300","name":"宝鸡市"},{"parentCode":"610300","code":"610301","name":"市辖区"},{"parentCode":"610300","code":"610302","name":"渭滨区"},{"parentCode":"610300","code":"610303","name":"金台区"},{"parentCode":"610300","code":"610304","name":"陈仓区"},{"parentCode":"610300","code":"610322","name":"凤翔县"},{"parentCode":"610300","code":"610323","name":"岐山县"},{"parentCode":"610300","code":"610324","name":"扶风县"},{"parentCode":"610300","code":"610326","name":"眉县"},{"parentCode":"610300","code":"610327","name":"陇县"},{"parentCode":"610300","code":"610328","name":"千阳县"},{"parentCode":"610300","code":"610329","name":"麟游县"},{"parentCode":"610300","code":"610330","name":"凤县"},{"parentCode":"610300","code":"610331","name":"太白县"},{"parentCode":"610000","code":"610400","name":"咸阳市"},{"parentCode":"610400","code":"610401","name":"市辖区"},{"parentCode":"610400","code":"610402","name":"秦都区"},{"parentCode":"610400","code":"610403","name":"杨陵区"},{"parentCode":"610400","code":"610404","name":"渭城区"},{"parentCode":"610400","code":"610422","name":"三原县"},{"parentCode":"610400","code":"610423","name":"泾阳县"},{"parentCode":"610400","code":"610424","name":"乾县"},{"parentCode":"610400","code":"610425","name":"礼泉县"},{"parentCode":"610400","code":"610426","name":"永寿县"},{"parentCode":"610400","code":"610427","name":"彬县"},{"parentCode":"610400","code":"610428","name":"长武县"},{"parentCode":"610400","code":"610429","name":"旬邑县"},{"parentCode":"610400","code":"610430","name":"淳化县"},{"parentCode":"610400","code":"610431","name":"武功县"},{"parentCode":"610400","code":"610481","name":"兴平市"},{"parentCode":"610000","code":"610500","name":"渭南市"},{"parentCode":"610500","code":"610501","name":"市辖区"},{"parentCode":"610500","code":"610502","name":"临渭区"},{"parentCode":"610500","code":"610521","name":"华县"},{"parentCode":"610500","code":"610522","name":"潼关县"},{"parentCode":"610500","code":"610523","name":"大荔县"},{"parentCode":"610500","code":"610524","name":"合阳县"},{"parentCode":"610500","code":"610525","name":"澄城县"},{"parentCode":"610500","code":"610526","name":"蒲城县"},{"parentCode":"610500","code":"610527","name":"白水县"},{"parentCode":"610500","code":"610528","name":"富平县"},{"parentCode":"610500","code":"610581","name":"韩城市"},{"parentCode":"610500","code":"610582","name":"华阴市"},{"parentCode":"610000","code":"610600","name":"延安市"},{"parentCode":"610600","code":"610601","name":"市辖区"},{"parentCode":"610600","code":"610602","name":"宝塔区"},{"parentCode":"610600","code":"610621","name":"延长县"},{"parentCode":"610600","code":"610622","name":"延川县"},{"parentCode":"610600","code":"610623","name":"子长县"},{"parentCode":"610600","code":"610624","name":"安塞县"},{"parentCode":"610600","code":"610625","name":"志丹县"},{"parentCode":"610600","code":"610626","name":"吴起县"},{"parentCode":"610600","code":"610627","name":"甘泉县"},{"parentCode":"610600","code":"610628","name":"富县"},{"parentCode":"610600","code":"610629","name":"洛川县"},{"parentCode":"610600","code":"610630","name":"宜川县"},{"parentCode":"610600","code":"610631","name":"黄龙县"},{"parentCode":"610600","code":"610632","name":"黄陵县"},{"parentCode":"610000","code":"610700","name":"汉中市"},{"parentCode":"610700","code":"610701","name":"市辖区"},{"parentCode":"610700","code":"610702","name":"汉台区"},{"parentCode":"610700","code":"610721","name":"南郑县"},{"parentCode":"610700","code":"610722","name":"城固县"},{"parentCode":"610700","code":"610723","name":"洋县"},{"parentCode":"610700","code":"610724","name":"西乡县"},{"parentCode":"610700","code":"610725","name":"勉县"},{"parentCode":"610700","code":"610726","name":"宁强县"},{"parentCode":"610700","code":"610727","name":"略阳县"},{"parentCode":"610700","code":"610728","name":"镇巴县"},{"parentCode":"610700","code":"610729","name":"留坝县"},{"parentCode":"610700","code":"610730","name":"佛坪县"},{"parentCode":"610000","code":"610800","name":"榆林市"},{"parentCode":"610800","code":"610801","name":"市辖区"},{"parentCode":"610800","code":"610802","name":"榆阳区"},{"parentCode":"610800","code":"610821","name":"神木县"},{"parentCode":"610800","code":"610822","name":"府谷县"},{"parentCode":"610800","code":"610823","name":"横山县"},{"parentCode":"610800","code":"610824","name":"靖边县"},{"parentCode":"610800","code":"610825","name":"定边县"},{"parentCode":"610800","code":"610826","name":"绥德县"},{"parentCode":"610800","code":"610827","name":"米脂县"},{"parentCode":"610800","code":"610828","name":"佳县"},{"parentCode":"610800","code":"610829","name":"吴堡县"},{"parentCode":"610800","code":"610830","name":"清涧县"},{"parentCode":"610800","code":"610831","name":"子洲县"},{"parentCode":"610000","code":"610900","name":"安康市"},{"parentCode":"610900","code":"610901","name":"市辖区"},{"parentCode":"610900","code":"610902","name":"汉滨区"},{"parentCode":"610900","code":"610921","name":"汉阴县"},{"parentCode":"610900","code":"610922","name":"石泉县"},{"parentCode":"610900","code":"610923","name":"宁陕县"},{"parentCode":"610900","code":"610924","name":"紫阳县"},{"parentCode":"610900","code":"610925","name":"岚皋县"},{"parentCode":"610900","code":"610926","name":"平利县"},{"parentCode":"610900","code":"610927","name":"镇坪县"},{"parentCode":"610900","code":"610928","name":"旬阳县"},{"parentCode":"610900","code":"610929","name":"白河县"},{"parentCode":"610000","code":"611000","name":"商洛市"},{"parentCode":"611000","code":"611001","name":"市辖区"},{"parentCode":"611000","code":"611002","name":"商州区"},{"parentCode":"611000","code":"611021","name":"洛南县"},{"parentCode":"611000","code":"611022","name":"丹凤县"},{"parentCode":"611000","code":"611023","name":"商南县"},{"parentCode":"611000","code":"611024","name":"山阳县"},{"parentCode":"611000","code":"611025","name":"镇安县"},{"parentCode":"611000","code":"611026","name":"柞水县"},{"parentCode":"000000","code":"620000","name":"甘肃省"},{"parentCode":"620000","code":"620100","name":"兰州市"},{"parentCode":"620100","code":"620101","name":"市辖区"},{"parentCode":"620100","code":"620102","name":"城关区"},{"parentCode":"620100","code":"620103","name":"七里河区"},{"parentCode":"620100","code":"620104","name":"西固区"},{"parentCode":"620100","code":"620105","name":"安宁区"},{"parentCode":"620100","code":"620111","name":"红古区"},{"parentCode":"620100","code":"620121","name":"永登县"},{"parentCode":"620100","code":"620122","name":"皋兰县"},{"parentCode":"620100","code":"620123","name":"榆中县"},{"parentCode":"620000","code":"620200","name":"嘉峪关市"},{"parentCode":"620200","code":"620201","name":"市辖区"},{"parentCode":"620000","code":"620300","name":"金昌市"},{"parentCode":"620300","code":"620301","name":"市辖区"},{"parentCode":"620300","code":"620302","name":"金川区"},{"parentCode":"620300","code":"620321","name":"永昌县"},{"parentCode":"620000","code":"620400","name":"白银市"},{"parentCode":"620400","code":"620401","name":"市辖区"},{"parentCode":"620400","code":"620402","name":"白银区"},{"parentCode":"620400","code":"620403","name":"平川区"},{"parentCode":"620400","code":"620421","name":"靖远县"},{"parentCode":"620400","code":"620422","name":"会宁县"},{"parentCode":"620400","code":"620423","name":"景泰县"},{"parentCode":"620000","code":"620500","name":"天水市"},{"parentCode":"620500","code":"620501","name":"市辖区"},{"parentCode":"620500","code":"620502","name":"秦州区"},{"parentCode":"620500","code":"620503","name":"麦积区"},{"parentCode":"620500","code":"620521","name":"清水县"},{"parentCode":"620500","code":"620522","name":"秦安县"},{"parentCode":"620500","code":"620523","name":"甘谷县"},{"parentCode":"620500","code":"620524","name":"武山县"},{"parentCode":"620500","code":"620525","name":"张家川回族自治县"},{"parentCode":"620000","code":"620600","name":"武威市"},{"parentCode":"620600","code":"620601","name":"市辖区"},{"parentCode":"620600","code":"620602","name":"凉州区"},{"parentCode":"620600","code":"620621","name":"民勤县"},{"parentCode":"620600","code":"620622","name":"古浪县"},{"parentCode":"620600","code":"620623","name":"天祝藏族自治县"},{"parentCode":"620000","code":"620700","name":"张掖市"},{"parentCode":"620700","code":"620701","name":"市辖区"},{"parentCode":"620700","code":"620702","name":"甘州区"},{"parentCode":"620700","code":"620721","name":"肃南裕固族自治县"},{"parentCode":"620700","code":"620722","name":"民乐县"},{"parentCode":"620700","code":"620723","name":"临泽县"},{"parentCode":"620700","code":"620724","name":"高台县"},{"parentCode":"620700","code":"620725","name":"山丹县"},{"parentCode":"620000","code":"620800","name":"平凉市"},{"parentCode":"620800","code":"620801","name":"市辖区"},{"parentCode":"620800","code":"620802","name":"崆峒区"},{"parentCode":"620800","code":"620821","name":"泾川县"},{"parentCode":"620800","code":"620822","name":"灵台县"},{"parentCode":"620800","code":"620823","name":"崇信县"},{"parentCode":"620800","code":"620824","name":"华亭县"},{"parentCode":"620800","code":"620825","name":"庄浪县"},{"parentCode":"620800","code":"620826","name":"静宁县"},{"parentCode":"620000","code":"620900","name":"酒泉市"},{"parentCode":"620900","code":"620901","name":"市辖区"},{"parentCode":"620900","code":"620902","name":"肃州区"},{"parentCode":"620900","code":"620921","name":"金塔县"},{"parentCode":"620900","code":"620922","name":"瓜州县"},{"parentCode":"620900","code":"620923","name":"肃北蒙古族自治县"},{"parentCode":"620900","code":"620924","name":"阿克塞哈萨克族自治县"},{"parentCode":"620900","code":"620981","name":"玉门市"},{"parentCode":"620900","code":"620982","name":"敦煌市"},{"parentCode":"620000","code":"621000","name":"庆阳市"},{"parentCode":"621000","code":"621001","name":"市辖区"},{"parentCode":"621000","code":"621002","name":"西峰区"},{"parentCode":"621000","code":"621021","name":"庆城县"},{"parentCode":"621000","code":"621022","name":"环县"},{"parentCode":"621000","code":"621023","name":"华池县"},{"parentCode":"621000","code":"621024","name":"合水县"},{"parentCode":"621000","code":"621025","name":"正宁县"},{"parentCode":"621000","code":"621026","name":"宁县"},{"parentCode":"621000","code":"621027","name":"镇原县"},{"parentCode":"620000","code":"621100","name":"定西市"},{"parentCode":"621100","code":"621101","name":"市辖区"},{"parentCode":"621100","code":"621102","name":"安定区"},{"parentCode":"621100","code":"621121","name":"通渭县"},{"parentCode":"621100","code":"621122","name":"陇西县"},{"parentCode":"621100","code":"621123","name":"渭源县"},{"parentCode":"621100","code":"621124","name":"临洮县"},{"parentCode":"621100","code":"621125","name":"漳县"},{"parentCode":"621100","code":"621126","name":"岷县"},{"parentCode":"620000","code":"621200","name":"陇南市"},{"parentCode":"621200","code":"621201","name":"市辖区"},{"parentCode":"621200","code":"621202","name":"武都区"},{"parentCode":"621200","code":"621221","name":"成县"},{"parentCode":"621200","code":"621222","name":"文县"},{"parentCode":"621200","code":"621223","name":"宕昌县"},{"parentCode":"621200","code":"621224","name":"康县"},{"parentCode":"621200","code":"621225","name":"西和县"},{"parentCode":"621200","code":"621226","name":"礼县"},{"parentCode":"621200","code":"621227","name":"徽县"},{"parentCode":"621200","code":"621228","name":"两当县"},{"parentCode":"620000","code":"622900","name":"临夏回族自治州"},{"parentCode":"622900","code":"622901","name":"临夏市"},{"parentCode":"622900","code":"622921","name":"临夏县"},{"parentCode":"622900","code":"622922","name":"康乐县"},{"parentCode":"622900","code":"622923","name":"永靖县"},{"parentCode":"622900","code":"622924","name":"广河县"},{"parentCode":"622900","code":"622925","name":"和政县"},{"parentCode":"622900","code":"622926","name":"东乡族自治县"},{"parentCode":"622900","code":"622927","name":"积石山保安族东乡族撒拉族自治县"},{"parentCode":"620000","code":"623000","name":"甘南藏族自治州"},{"parentCode":"623000","code":"623001","name":"合作市"},{"parentCode":"623000","code":"623021","name":"临潭县"},{"parentCode":"623000","code":"623022","name":"卓尼县"},{"parentCode":"623000","code":"623023","name":"舟曲县"},{"parentCode":"623000","code":"623024","name":"迭部县"},{"parentCode":"623000","code":"623025","name":"玛曲县"},{"parentCode":"623000","code":"623026","name":"碌曲县"},{"parentCode":"623000","code":"623027","name":"夏河县"},{"parentCode":"000000","code":"630000","name":"青海省"},{"parentCode":"630000","code":"630100","name":"西宁市"},{"parentCode":"630100","code":"630101","name":"市辖区"},{"parentCode":"630100","code":"630102","name":"城东区"},{"parentCode":"630100","code":"630103","name":"城中区"},{"parentCode":"630100","code":"630104","name":"城西区"},{"parentCode":"630100","code":"630105","name":"城北区"},{"parentCode":"630100","code":"630121","name":"大通回族土族自治县"},{"parentCode":"630100","code":"630122","name":"湟中县"},{"parentCode":"630100","code":"630123","name":"湟源县"},{"parentCode":"630000","code":"630200","name":"海东市"},{"parentCode":"630200","code":"630202","name":"乐都区"},{"parentCode":"630200","code":"630221","name":"平安县"},{"parentCode":"630200","code":"630222","name":"民和回族土族自治县"},{"parentCode":"630200","code":"630223","name":"互助土族自治县"},{"parentCode":"630200","code":"630224","name":"化隆回族自治县"},{"parentCode":"630200","code":"630225","name":"循化撒拉族自治县"},{"parentCode":"630000","code":"632200","name":"海北藏族自治州"},{"parentCode":"632200","code":"632221","name":"门源回族自治县"},{"parentCode":"632200","code":"632222","name":"祁连县"},{"parentCode":"632200","code":"632223","name":"海晏县"},{"parentCode":"632200","code":"632224","name":"刚察县"},{"parentCode":"630000","code":"632300","name":"黄南藏族自治州"},{"parentCode":"632300","code":"632321","name":"同仁县"},{"parentCode":"632300","code":"632322","name":"尖扎县"},{"parentCode":"632300","code":"632323","name":"泽库县"},{"parentCode":"632300","code":"632324","name":"河南蒙古族自治县"},{"parentCode":"630000","code":"632500","name":"海南藏族自治州"},{"parentCode":"632500","code":"632521","name":"共和县"},{"parentCode":"632500","code":"632522","name":"同德县"},{"parentCode":"632500","code":"632523","name":"贵德县"},{"parentCode":"632500","code":"632524","name":"兴海县"},{"parentCode":"632500","code":"632525","name":"贵南县"},{"parentCode":"630000","code":"632600","name":"果洛藏族自治州"},{"parentCode":"632600","code":"632621","name":"玛沁县"},{"parentCode":"632600","code":"632622","name":"班玛县"},{"parentCode":"632600","code":"632623","name":"甘德县"},{"parentCode":"632600","code":"632624","name":"达日县"},{"parentCode":"632600","code":"632625","name":"久治县"},{"parentCode":"632600","code":"632626","name":"玛多县"},{"parentCode":"630000","code":"632700","name":"玉树藏族自治州"},{"parentCode":"632700","code":"632701","name":"玉树市"},{"parentCode":"632700","code":"632722","name":"杂多县"},{"parentCode":"632700","code":"632723","name":"称多县"},{"parentCode":"632700","code":"632724","name":"治多县"},{"parentCode":"632700","code":"632725","name":"囊谦县"},{"parentCode":"632700","code":"632726","name":"曲麻莱县"},{"parentCode":"630000","code":"632800","name":"海西蒙古族藏族自治州"},{"parentCode":"632800","code":"632801","name":"格尔木市"},{"parentCode":"632800","code":"632802","name":"德令哈市"},{"parentCode":"632800","code":"632821","name":"乌兰县"},{"parentCode":"632800","code":"632822","name":"都兰县"},{"parentCode":"632800","code":"632823","name":"天峻县"},{"parentCode":"000000","code":"640000","name":"宁夏回族自治区"},{"parentCode":"640000","code":"640100","name":"银川市"},{"parentCode":"640100","code":"640101","name":"市辖区"},{"parentCode":"640100","code":"640104","name":"兴庆区"},{"parentCode":"640100","code":"640105","name":"西夏区"},{"parentCode":"640100","code":"640106","name":"金凤区"},{"parentCode":"640100","code":"640121","name":"永宁县"},{"parentCode":"640100","code":"640122","name":"贺兰县"},{"parentCode":"640100","code":"640181","name":"灵武市"},{"parentCode":"640000","code":"640200","name":"石嘴山市"},{"parentCode":"640200","code":"640201","name":"市辖区"},{"parentCode":"640200","code":"640202","name":"大武口区"},{"parentCode":"640200","code":"640205","name":"惠农区"},{"parentCode":"640200","code":"640221","name":"平罗县"},{"parentCode":"640000","code":"640300","name":"吴忠市"},{"parentCode":"640300","code":"640301","name":"市辖区"},{"parentCode":"640300","code":"640302","name":"利通区"},{"parentCode":"640300","code":"640303","name":"红寺堡区"},{"parentCode":"640300","code":"640323","name":"盐池县"},{"parentCode":"640300","code":"640324","name":"同心县"},{"parentCode":"640300","code":"640381","name":"青铜峡市"},{"parentCode":"640000","code":"640400","name":"固原市"},{"parentCode":"640400","code":"640401","name":"市辖区"},{"parentCode":"640400","code":"640402","name":"原州区"},{"parentCode":"640400","code":"640422","name":"西吉县"},{"parentCode":"640400","code":"640423","name":"隆德县"},{"parentCode":"640400","code":"640424","name":"泾源县"},{"parentCode":"640400","code":"640425","name":"彭阳县"},{"parentCode":"640000","code":"640500","name":"中卫市"},{"parentCode":"640500","code":"640501","name":"市辖区"},{"parentCode":"640500","code":"640502","name":"沙坡头区"},{"parentCode":"640500","code":"640521","name":"中宁县"},{"parentCode":"640500","code":"640522","name":"海原县"},{"parentCode":"000000","code":"650000","name":"新疆维吾尔自治区"},{"parentCode":"650000","code":"650100","name":"乌鲁木齐市"},{"parentCode":"650100","code":"650101","name":"市辖区"},{"parentCode":"650100","code":"650102","name":"天山区"},{"parentCode":"650100","code":"650103","name":"沙依巴克区"},{"parentCode":"650100","code":"650104","name":"新市区"},{"parentCode":"650100","code":"650105","name":"水磨沟区"},{"parentCode":"650100","code":"650106","name":"头屯河区"},{"parentCode":"650100","code":"650107","name":"达坂城区"},{"parentCode":"650100","code":"650109","name":"米东区"},{"parentCode":"650100","code":"650121","name":"乌鲁木齐县"},{"parentCode":"650000","code":"650200","name":"克拉玛依市"},{"parentCode":"650200","code":"650201","name":"市辖区"},{"parentCode":"650200","code":"650202","name":"独山子区"},{"parentCode":"650200","code":"650203","name":"克拉玛依区"},{"parentCode":"650200","code":"650204","name":"白碱滩区"},{"parentCode":"650200","code":"650205","name":"乌尔禾区"},{"parentCode":"650000","code":"652100","name":"吐鲁番地区"},{"parentCode":"652100","code":"652101","name":"吐鲁番市"},{"parentCode":"652100","code":"652122","name":"鄯善县"},{"parentCode":"652100","code":"652123","name":"托克逊县"},{"parentCode":"650000","code":"652200","name":"哈密地区"},{"parentCode":"652200","code":"652201","name":"哈密市"},{"parentCode":"652200","code":"652222","name":"巴里坤哈萨克自治县"},{"parentCode":"652200","code":"652223","name":"伊吾县"},{"parentCode":"650000","code":"652300","name":"昌吉回族自治州"},{"parentCode":"652300","code":"652301","name":"昌吉市"},{"parentCode":"652300","code":"652302","name":"阜康市"},{"parentCode":"652300","code":"652323","name":"呼图壁县"},{"parentCode":"652300","code":"652324","name":"玛纳斯县"},{"parentCode":"652300","code":"652325","name":"奇台县"},{"parentCode":"652300","code":"652327","name":"吉木萨尔县"},{"parentCode":"652300","code":"652328","name":"木垒哈萨克自治县"},{"parentCode":"650000","code":"652700","name":"博尔塔拉蒙古自治州"},{"parentCode":"652700","code":"652701","name":"博乐市"},{"parentCode":"652700","code":"652702","name":"阿拉山口市"},{"parentCode":"652700","code":"652722","name":"精河县"},{"parentCode":"652700","code":"652723","name":"温泉县"},{"parentCode":"650000","code":"652800","name":"巴音郭楞蒙古自治州"},{"parentCode":"652800","code":"652801","name":"库尔勒市"},{"parentCode":"652800","code":"652822","name":"轮台县"},{"parentCode":"652800","code":"652823","name":"尉犁县"},{"parentCode":"652800","code":"652824","name":"若羌县"},{"parentCode":"652800","code":"652825","name":"且末县"},{"parentCode":"652800","code":"652826","name":"焉耆回族自治县"},{"parentCode":"652800","code":"652827","name":"和静县"},{"parentCode":"652800","code":"652828","name":"和硕县"},{"parentCode":"652800","code":"652829","name":"博湖县"},{"parentCode":"650000","code":"652900","name":"阿克苏地区"},{"parentCode":"652900","code":"652901","name":"阿克苏市"},{"parentCode":"652900","code":"652922","name":"温宿县"},{"parentCode":"652900","code":"652923","name":"库车县"},{"parentCode":"652900","code":"652924","name":"沙雅县"},{"parentCode":"652900","code":"652925","name":"新和县"},{"parentCode":"652900","code":"652926","name":"拜城县"},{"parentCode":"652900","code":"652927","name":"乌什县"},{"parentCode":"652900","code":"652928","name":"阿瓦提县"},{"parentCode":"652900","code":"652929","name":"柯坪县"},{"parentCode":"650000","code":"653000","name":"克孜勒苏柯尔克孜自治州"},{"parentCode":"653000","code":"653001","name":"阿图什市"},{"parentCode":"653000","code":"653022","name":"阿克陶县"},{"parentCode":"653000","code":"653023","name":"阿合奇县"},{"parentCode":"653000","code":"653024","name":"乌恰县"},{"parentCode":"650000","code":"653100","name":"喀什地区"},{"parentCode":"653100","code":"653101","name":"喀什市"},{"parentCode":"653100","code":"653121","name":"疏附县"},{"parentCode":"653100","code":"653122","name":"疏勒县"},{"parentCode":"653100","code":"653123","name":"英吉沙县"},{"parentCode":"653100","code":"653124","name":"泽普县"},{"parentCode":"653100","code":"653125","name":"莎车县"},{"parentCode":"653100","code":"653126","name":"叶城县"},{"parentCode":"653100","code":"653127","name":"麦盖提县"},{"parentCode":"653100","code":"653128","name":"岳普湖县"},{"parentCode":"653100","code":"653129","name":"伽师县"},{"parentCode":"653100","code":"653130","name":"巴楚县"},{"parentCode":"653100","code":"653131","name":"塔什库尔干塔吉克自治县"},{"parentCode":"650000","code":"653200","name":"和田地区"},{"parentCode":"653200","code":"653201","name":"和田市"},{"parentCode":"653200","code":"653221","name":"和田县"},{"parentCode":"653200","code":"653222","name":"墨玉县"},{"parentCode":"653200","code":"653223","name":"皮山县"},{"parentCode":"653200","code":"653224","name":"洛浦县"},{"parentCode":"653200","code":"653225","name":"策勒县"},{"parentCode":"653200","code":"653226","name":"于田县"},{"parentCode":"653200","code":"653227","name":"民丰县"},{"parentCode":"650000","code":"654000","name":"伊犁哈萨克自治州"},{"parentCode":"654000","code":"654002","name":"伊宁市"},{"parentCode":"654000","code":"654003","name":"奎屯市"},{"parentCode":"654000","code":"654021","name":"伊宁县"},{"parentCode":"654000","code":"654022","name":"察布查尔锡伯自治县"},{"parentCode":"654000","code":"654023","name":"霍城县"},{"parentCode":"654000","code":"654024","name":"巩留县"},{"parentCode":"654000","code":"654025","name":"新源县"},{"parentCode":"654000","code":"654026","name":"昭苏县"},{"parentCode":"654000","code":"654027","name":"特克斯县"},{"parentCode":"654000","code":"654028","name":"尼勒克县"},{"parentCode":"650000","code":"654200","name":"塔城地区"},{"parentCode":"654200","code":"654201","name":"塔城市"},{"parentCode":"654200","code":"654202","name":"乌苏市"},{"parentCode":"654200","code":"654221","name":"额敏县"},{"parentCode":"654200","code":"654223","name":"沙湾县"},{"parentCode":"654200","code":"654224","name":"托里县"},{"parentCode":"654200","code":"654225","name":"裕民县"},{"parentCode":"654200","code":"654226","name":"和布克赛尔蒙古自治县"},{"parentCode":"650000","code":"654300","name":"阿勒泰地区"},{"parentCode":"654300","code":"654301","name":"阿勒泰市"},{"parentCode":"654300","code":"654321","name":"布尔津县"},{"parentCode":"654300","code":"654322","name":"富蕴县"},{"parentCode":"654300","code":"654323","name":"福海县"},{"parentCode":"654300","code":"654324","name":"哈巴河县"},{"parentCode":"654300","code":"654325","name":"青河县"},{"parentCode":"654300","code":"654326","name":"吉木乃县"},{"parentCode":"650000","code":"659000","name":"自治区直辖县级行政区划"},{"parentCode":"659000","code":"659001","name":"石河子市"},{"parentCode":"659000","code":"659002","name":"阿拉尔市"},{"parentCode":"659000","code":"659003","name":"图木舒克市"},{"parentCode":"659000","code":"659004","name":"五家渠市"}];

var __cityCodes = ['500000','110000','310000','120000'];
__cityCodes.forEach(function(a , i){
    var o = citySelectData.filter(function(b){
        return b.code == a;
    })[0];
    var index = citySelectData.indexOf(o);
    citySelectData.splice(index , 1);
    citySelectData.unshift(o);
});
(function($) {
    var citySelectData = useCommon.citySelectData;
    var getDisplayValue = $.getCitySelectAutoValue = function (code){
        if(!code)return '';
        if(Array.isArray(code)){
            return code.map(function(a){
                return getDisplayValue(a);
            });
        }
        var name;
        citySelectData.every(function(a){
            if(a.code == code){
                name = a.name;
                return false;
            }
            return true;
        });
        return name;
    };
    var getAutoCode = $.getCitySelectAutoCode = function(name , parentCode){
      var code = name;
        citySelectData.every(function(a){
            if(a.name == name ) {
                if(parentCode && a.parentCode != parentCode)return true;
                code = a.code;
                return false;
            }
            return true;
        });
        return code;
    };
    var row = citySelectData;
    var caches = {};

    var getDataByParent = function(pCode , type) {
        if (caches.hasOwnProperty(pCode)) {
            return caches[pCode];
        } else {
            var data = [];
            if(!type){
                data.push({code:'',name:'请选择省'});
            }else if(type == 1){
                data.push({code:'',name:'请选择市'});
            }else{
                data.push({code:'',name:'请选择区'});
            }
            if(!pCode)return data;
            row.filter(function(a){
                return a.parentCode == pCode;
            }).forEach(function(o){
                data.push({code:o.code,name:o.name});
            });
            caches[pCode] = data;
            return data;
        }
    };

    var setSelectData = function (ele , data , code){
        ele.html('');
        $.each(data , function(i , o){
            ele.append('<option value="' + o.code + '">' + o.name + '</option>');
        });
        if(data.length > 1){
            if(code)ele.val(code);
            ele.closest('.list-item').removeClass('opacity-0');
        }
        ele.change();
    };
    $.fn.citySelect = function(type , params) {
        params = $.extend({} , params);
        if(!type || type == 'create')return this.each(function() {
            if(!this) return;
            var provinceSelect = $(this).find('.province-select');
            var citySelect = $(this).find('.city-select');
            var disSelect = $(this).find('.district-select');
            var province = getAutoCode(params.province || provinceSelect.attr('auto-select'));
            var city = getAutoCode(params.city || citySelect.attr('auto-select') , province);
            var district = getAutoCode(params.district || disSelect.attr('auto-select'), city);
            provinceSelect.change(function(){
                citySelect.closest('.list-item').addClass('opacity-0');
                disSelect.closest('.list-item').addClass('opacity-0');
                setSelectData(citySelect , getDataByParent(this.value , 1) , city);
                city = null;
            });
            citySelect.change(function(){
                disSelect.closest('.list-item').addClass('opacity-0');
                setSelectData(disSelect , getDataByParent(this.value , 2) , district);
                district = null;
            });
            setSelectData(provinceSelect ,  getDataByParent('000000') , province );
            province = null


        });
        if(type == 'setValue')return this.each(function() {
            if(!this) return;
            $(this).find('.province-select').val(params.province || '').change();
            $(this).find('.city-select').val(params.city || '').change();
            $(this).find('.district-select').val(params.district || '').change();
        });
        return this;
    };

    $('.city-select-list').citySelect('create' , {});
    WY.bind('modal-handler-city-select' , function(content){
        console.log('modal-handler-city-select');
        content.citySelect('create',{});
    })
})(jQuery);
$.fn.bithdayUi = function(options){
  return this.each(function(){
      var $year = $(this).find('.year');
      var $month = $(this).find('.month');
      var $day = $(this).find('.day');
      var date = new Date;
      var nowYear = date.getFullYear();
      var minYear = nowYear - 150;
      $year.html('<option value="">请选择年</option>')
      for(var i=minYear;i<=nowYear;i++){
          $year.append('<option value="'+i+'">'+i+'年</option>');
      }
      $year.on('change' , function(){
          changeMonth();
          changeDay();
      });
      $month.on('change' , function(){
          changeDay();
      });
      function changeMonth(){
          var year = $year.val();
          var maxMonth = 12;
          var autoLength = $month.children().length - 1;
          var authValue = $month.val();
          if(date.getFullYear() == year){
             maxMonth = date.getMonth() + 1;
          }
          if(maxMonth != autoLength){
              $month.html('<option value="">请选择月</option>');
              for(var i=1;i<=maxMonth;i++){
                  $month.append('<option value="'+i+'">'+i+'月</option>');
              }
              if(authValue)$month.__setValue(authValue);
          }
      }
      function changeDay(){
          var year = $year.val();
          var month = $month.val() - 0;
          var maxDay;
          var autoValue = $day.val();
          var autoLength = $day.children().length - 1;
          if(useCommon.parseDate(date,'m') == month){
              maxDay = date.getDate();
          }
          else if(month == 2){
              if(!(year%400) || (year%100 && !(year%4))){
                  maxDay = 29;
              }else{
                  maxDay = 28;
              }
          }
          else{
              switch(month){
                  case 4:
                  case 6:
                  case 9:
                  case 11:
                      maxDay = 30;
                      break;
                  default:
                      maxDay = 31;
              }
          }
          if(maxDay != autoLength){
              $day.html('<option value="">请选择日</option>');
              for(var i=1;i<=maxDay;i++){
                  $day.append('<option value="'+i+'">'+i+'日</option>');
              }
              if(autoValue)$day.__setValue(autoValue);
          }
      }
      var autoYear = $year.attr('year') - 0;
      var autoMonth = $month.attr('month') - 0;
      var autoDay = $day.attr('day') - 0
      $year.__setValue(autoYear);
      changeMonth();
      $month.__setValue(autoMonth);
      changeDay();
      $day.__setValue(autoDay);
  });
};
console.log('bind modal-handler-birth-day');
WY.bind('modal-handler-birth-day',function(content){
    console.log('modal-handler-birth-day');
   content.bithdayUi();
});
WY.userContent = $('.show-user-content');
WY.userHandler = {};
WY.userLoad = function($content){
    WY.userContent.html('').append($content);
    return WY.userContent.children();
};
WY.bind('user-menu' , function(a){
    var handler = WY.userHandler[a];
    handler && handler.init && handler.init();
});
$(function(){
    $(document).on('click','[turn-hash]',function(){
        var hash = $(this).attr('turn-hash');
        WY.trigger('user-menu-change',hash);
        return false;
    });
});
WY.userHandler['add-friend'] = {
    init:function(){
        var $content;
        var _this = this;
        function createTr(i , data){
            var $item = WY.createOne('friend' , data , i);
            $item.find('.flex-column').append(
                '<div code="'+data.userId+'" class="width-100-100 text-left '+((data.onFried || WY.isMe(data.userId))?'color-999':'add-friend-btn color-blue-2 cursor-pointer')+'">'+(WY.isMe(data.userId)?'我自己':data.onFried ?'已经是亲友':'加亲友')+'</div>'
            )
            return $item;
        }
        $.modalLoadingView('user/friend/add',function(content){
            $content = _this.content = WY.userLoad(content);
            var searchObject = $.showDataPage({
                url:'/user/friend/search',
                limit:16,
                notAuthSearch:1,
                autoPage:1,
                createTr:createTr,
                done:function(data){
                }
            });
            $content.on('click' , '.add-friend-btn' , function(){
                var $this = $(this);
                var val = window.prompt('亲友说明','我是' + (sessionJson.userInfo.nickname || sessionJson.userInfo.userName));
                $.post('/user/friend/add' , {
                    taUserId:$(this).attr('code'),
                    verifyContent:val,
                },function(a){
                    if(a.code == 0){
                        $this
                            .removeClass('add-friend-btn')
                            .removeClass('color-blue-2')
                            .removeClass('cursor-pointer')
                            .addClass('color-999').text('已发送请求');
                    }else{
                        useCommon.toast(a.message);
                    }
                })
            });
        },1);
    }
}
WY.userHandler['confirm-msg'] = {
    init:function(){
        var $content;
        var _this = this;
        function createConfirm(sts){
            console.log(sts);
            return ('<div class="inline-block color-666 mr10 height-20 lh-20">已'+({
                PASS:'通过',
                REFUSE:'拒绝'
            })[sts]+'</div>');
        }
        function createTr(i , o){
            var $list = $('<div class="data-list pl-10 pt-10 pb-10 border-b-eee">');
            $list.append('<div>来自：<span class="color-blue-2 height-30 lh-30">'+(o.nickname || o.userIdFrom)+'</span></div>');
            $list.append('<div class="pl-20 break-all lh-20">内容：<span class="color-333">'+o.msgContent+'</span></div>');
            $list.append('<div class="mt-10">' +
            (o.msgState == 'SEND'
                ?('<div class="div-btn color-blue-1 inline-block mr-10 confirm-btn" code="'+o.msgId+'" sts="PASS">通过</div>' +
                '<div class="div-btn color-666 inline-block mr-10 confirm-btn" code="'+o.msgId+'"  sts="REFUSE">拒绝</div>' )
                :createConfirm(o.msgState))+
            '<div class="div-btn color-666 mr-10 del-btn inline-block" code="'+o.msgId+'" >删除</div>' +
            '</div>')
            return $list;
        }
        $.modalLoadingView('user/msg/confirm',function(content){
            $content = _this.content = WY.userLoad(content);
            var searchObject = $.showDataPage({
                url:'/user/msg/list',
                limit:10,
                autoPage:1,
                createTr:createTr,
                getSearchData:function(){
                    return {
                        searchType:'verify_message'
                    }
                },
                done:function(data){
                }
            });
            $content.on('click' , '.del-btn' , function(){
                var msgId  = $(this).attr('code');
                var $closest = $(this).closest('.data-list');
                $.post('/user/msg/del',{
                    msgId:msgId,
                },function(a){
                    if(a.code == 0){
                        $closest.remove();
                    }else{
                        useCommon.toast(a.message);
                    }
                })
            });
            $content.on('click' , '.confirm-btn' , function(){
                var msgId  = $(this).attr('code');
                var msgState  = $(this).attr('sts');
                var verifyContent;
                if(msgState == 'REFUSE'){
                    verifyContent = prompt('拒绝原因','');
                }
                var $closest = $(this).closest('.data-list');
                $.post('/user/friend/pass',{
                    msgId:msgId,
                    msgState:msgState,
                    verifyContent:verifyContent
                },function(a){
                    if(a.code == 0){
                        $closest.find('.confirm-btn').remove();
                        $closest.find('.del-btn').before(createConfirm(msgState));
                    }else{
                        useCommon.toast(a.message);
                    }
                })
            });
        },1);
    }
}
WY.userHandler['my-friend'] = {
    init:function(){
        var $content;
        var _this = this;
        function createTr(i , data){
            var $item = WY.createOne('my-friend' , data , i);
            $item.find('.friend-header').addClass('flex-between');
            $item.find('.friend-footer').addClass('flex-between').append(
                '<a target="_blank" href="/user/detail?taUserId='+data.userId+'" class="color-blue-2 cursor-pointer break-none">个人资料</a>' +
                '<div code="'+data.userId+'" class="send-msg-btn color-blue-2 cursor-pointer  break-none">发私信</div>'
            )
            return $item;
        }
        $.modalLoadingView('user/friend/list',function(content){
            $content = _this.content = WY.userLoad(content);
            var searchObject = $.showDataPage({
                url:'/user/friend/list',
                limit:16,
                autoPage:1,
                createTr:createTr,
                done:function(data){
                }
            });
            $content.on('click' , '.send-msg-btn' , function(){
                var $this = $(this);
                var val = window.prompt('发送消息');
                if(val)$.post('/user/friend/send/msg' , {
                    userids:$(this).attr('code')-0,
                    msg:val,
                },function(a){
                    useCommon.toast(a.message);
                })
            });
            $content.on('click' , '.add-remark-btn' , function(){
                var $this = $(this);
                var val = window.prompt('设置称呼');
                if(val)$.post('/user/friend/remark' , {
                    friendRecordId:$(this).attr('code'),
                    remarks:val,
                },function(a){
                    useCommon.toast(a.message);
                    if(a.code == 0){
                        searchObject.doSearch(1);
                    }
                })
            });
            $content.find('.do-search-btn').click(function(){
                searchObject.doSearch(1);
            });
        },1);
    }
};
WY.userHandler['head-img'] = {
    init:function(){
        var $content;
        var _this = this;
        function upload(file){
            $.uploadFile(file , {
                type:'offering/head'
            },{

            },function(a){
                if(a.code == 'SUCCESS'){
                    WY.loading(1);
                    $.post('/user/info/edit',{
                        headImg:a.result.path,
                    },function(b){
                        WY.loading(0);
                        $.modalLoadingHide();
                        useCommon.toast(b.message);
                        if(b.code == 0){
                            WY.trigger('login-flush');
                        }
                    });
                }else{
                    useCommon.toast(a.message);
                }
            })
        }
        $.modalLoadingView('user/info/head',function(content){
            $content = _this.content = WY.userLoad(content);
            putHeadImg();
            var $file = $content.find(':file');
            $content.find('.choose-img-btn').click(function(){
                $file.val('');
                $file[0].click();
            });

            $file.change(function(){
                if($(this).val()){
                    var file = this.files[0];
                    if(file.size > 3 * 1024 * 1024){
                        useCommon.toast('所选文件不能超过3m');
                        return false;
                    }
                    var options = {
                        moveStep:function(){
                            console.log('moveStep');
                            options.cutReset && options.cutReset();
                        }
                    };
                    if(typeof Blob == 'undefined'){
                        upload(file);
                    }
                    else WY.getFileUrl(file , function(src){
                        var img = new Image();
                        img.src = src;
                        img.onload = function(){
                            $.modalLoadingView('common/cut-img&width='+img.width+'&height='+img.height,function(content){
                                var $content = $(content);
                                $content.find('.cut-img').attr('src',src);
                                $content.find('.reset-btn').click(function(){
                                    $.modalLoadingHide();
                                    $file.val('')[0].click();
                                });
                                $content.find('.submit-btn').click(function(){
                                    WY.loading(1);
                                    var resultImg = $content.find('.result-img');
                                    var canvas = document.createElement('canvas');
                                    $(canvas).attr({
                                        width:'200px',
                                        height:'200px'
                                    });
                                    var ctx = canvas.getContext('2d');
                                    ctx.drawImage(img ,
                                        -parseFloat(resultImg.css('marginLeft')),
                                        -parseFloat(resultImg.css('marginTop')),
                                        200,200,0,0,200,200
                                    );
                                    var blob = useCommon.convertBase64UrlToBlob(canvas.toDataURL(),'image/png');
                                    upload(blob);
                                });
                            },options);
                        };

                    });

                }
            })
        },1);
        function putHeadImg(userInfo){
            userInfo = userInfo || sessionJson.userInfo;
            $('.show-example-img').attr('src' , userInfo.headImg);
        }
        if(this.isInit)return false;
        this.isInit = true;
        WY.ready('loginSuccess' , function(userInfo){
            putHeadImg(userInfo);
        })
    }
}
WY.userHandler.detail = {
    init:function(){
        var $content;
        var _this = this;
        $.modalLoadingView('user/info/detail',function(content){
            $content = WY.userLoad(content);
            if(sessionJson.userInfo){
                $content.__formData(sessionJson.userInfo);
                $content.find('[modal-handler="city-select"]').find('select').each(function(){
                    $(this).attr('auto-select',sessionJson.userInfo[$(this).attr('name')]);
                });
                var birthDay;
                if(birthDay = sessionJson.userInfo.birthDay){
                    $content.find('.year').attr('year',birthDay.substr(0,4));
                    $content.find('.month').attr('month',birthDay.substr(5,2));
                    $content.find('.day').attr('day',birthDay.substr(8,2));
                }
            }

            WY.trigger('modal-handler' , $content);
            $content.find('.submit-btn').click(function(){
                var data = $content.__serializeJSON();
                if(data.year && data.month && data.day){
                    data.birthDay = data.year + '-' + useCommon.stringPadStart(data.month,2,0) +'-'+ useCommon.stringPadStart(data.day,2,0);
                }
                data.jxProvince = $.getCitySelectAutoValue(data.jxProvince);
                data.jxCity = $.getCitySelectAutoValue(data.jxCity);
                data.jxCounty = $.getCitySelectAutoValue(data.jxCounty);
                data.xjProvince = $.getCitySelectAutoValue(data.xjProvince);
                data.xjCity = $.getCitySelectAutoValue(data.xjCity);
                data.xjCounty = $.getCitySelectAutoValue(data.xjCounty);
                $.post('/user/info/edit',data,function(a){
                    useCommon.toast(a.message);
                    if(a.code == 0){
                        WY.trigger('flush-user-info' , function(){
                        });
                    }else{
                    }
                });
                return false;
            });

        },1);
    }
};
WY.userHandler['join-genealogy'] = {
    init:function(){
        var $content;
        var autoData;
        var createTr = function(i,data){
            var $div = $('<div class="data-list width-350 pl-160 position-relative height-202 inline-block mb-10 mr-10">');
            var $item = WY.createOne('genealogy-item' , data , i);
            $item.addClass('position-absolute left-0 top-0 ml-10 color-333');
            $div.append($('<a href="/genealogy/detail?id='+data.genealogyId+'"></a>').append($item));
            $div.append('<div class="pl-10">' +
            '<div class="write-ellipsis height-20" title="'+(data.province + data.city + data.county)+'">区域：'+(data.province + data.city + data.county)+'</div>' +
            '<div class="height-20">入谱：'+(data.pTaiPersonNumber + '/'+data.personNumber )+'人</div>' +
            //'<div><div class="btn back-243 border-204 inline-block mt-5">人员列表</div></div>' +
            '</div>');
            return $div;
        };
        var searchObject;
        $.modalLoadingView('user/genealogy/join',function(content){
            $content = WY.userLoad(content);
            searchObject = $.showDataPage({
                url:'/user/genealogy/join/list',
                autoPage:1,
                limit:12,
                createTr:createTr,
                done:function(data){
                    autoData = data;
                }
            });
        },1);
    }
};
WY.userHandler.memorial = {
  init:function(){
      var titleList = ['单人','双人','名人'];
      var $content;
      var $listContent;
      var mainContent;
      if(mainContent){
          setContent();
      }else $.modalLoadingView('user/memorial/memorial',function(content){
          mainContent = content;
          setContent();
      },1);
      function setContent(){
          $content = $(mainContent);
          setData();
      }
      function setData(){
          $.get('/memorial/mylist' , function(a){
              var content = a.data &&　a.data.content;
              var list = [];
              list[0] = content.filter(function(a){
                  return a.memorialType == 'personal' && a.peopleNumber == 1;
              });
              list[1] = content.filter(function(a){
                  return a.memorialType == 'personal' && a.peopleNumber == 2;
              });
              list[2] = content.filter(function(a){
                  return a.memorialType == 'celebrity';
              });
              WY.userLoad($content);
              bind();
              $listContent = $content.find('.user-memorial-content').html('');
              if(!content || content.length == 0){
                  $listContent.html('<div class="color-999 text-center pt-50">暂无</div>')
              }else{
                  setList(list);
              }
          });
      }
      var editCode;
      function updatePerson(list){
          $.post('/memorial/edit/person',{
              bodyArr:JSON.stringify(list)
          },function(a){
              useCommon.toast(a.message);
              if(a.code == 0){
                  $.modalLoadingHide();
                  setData();
              }
          });

      }
      function bind(){
          $content.on('click','.del-memorial-btn',function(){
              editCode = $(this).attr('code');
              WY.confirm({
                  content:'确定删除？',
                  done:function(){
                      $.post('/memorial/del',{
                          memorialId:editCode
                      },function(a){
                          useCommon.toast(a.message);
                          if(a.code == 0){
                              setData();
                          }
                      })
                  }
              })
          });
          $content.on('click','.show-album-btn',function(){
              var code = $(this).attr('code');
              if(albumContent){
                  setAlbumContent(code)
              }else{
                  $.modalLoadingView('user/album/info-list' , function(content){
                      albumContent = content;
                      setAlbumContent(code);
                  },1);
              }
          });
          $content.on('click','.edit-memorial-btn',function(){
              var code = $(this).attr('code');
              $.modalLoadingView('/memorial/info?id='+code,function($content){
                  WY.toggleActive($content.find('.wy-toggle-active'));
                  setTimeout(function(){
                      var thisSwiper = new Swiper($content.find('.swiper-container'),{
                          onlyExternal:true,
                      });
                      WY.bind('active-item',function($item){
                          thisSwiper.slideTo($item.index());
                      });
                  },500);
                  var autoData = $content.find('.data-form').__serializeJSON();
                    $content.find('[name=joinType]').change(function(){
                        $('.join-type-list')[$(this).val() == 'password'?'show':'hide']();
                    });
                  $content.find('.submit-btn').click(function(){
                      var memorialData = $content.find('.data-form').__serializeJSON();
                      if(!memorialData.memorialName){
                          useCommon.toast('请输入纪念馆名称');
                          return false;
                      }
                      if(autoData.joinType != 'password'
                          && memorialData.joinType=='password'
                          && !memorialData.password){
                          useCommon.toast('请输入访问密码');
                          return false;
                      }
                      var personList = $content.find('.person-form').map(function(){
                         return $(this).__serializeJSON({name:'data'});
                      }).toArray();
                      var sendData = {
                          memorialId:code
                      };
                      if(memorialData.memorialName == autoData.memorialName
                        &&memorialData.joinType == autoData.joinType
                        &&(memorialData.joinType!='password' || !memorialData.password)
                      ){
                          updatePerson(personList);
                          return false;
                      }
                      sendData.memorialName = memorialData.memorialName;
                      if(memorialData.password )sendData.password = memorialData.password;
                      if(memorialData.joinType != autoData.joinType){
                          sendData.joinType = memorialData.joinType;
                      }
                      $.post('/memorial/edit',sendData,function(a){
                          if(a.code == 0){
                              updatePerson(personList);
                          }else{
                              useCommon.toast(a.message);
                          }
                      })
                  });
              });
          });
      }
      var albumContent;
      function setAlbumContent(code){
          var $info = $(albumContent);
          $info.appendTo($content);
          WY.albumFile({
              content:$info,
              addBtn:$info.find('.add-new-file-btn'),
              dataId:code,
              type:'memorial'
          });
      }
      function setList(list){
          $.each(list , function(i , o){
              var $row = $('<div class="pb-20">');
              $row.append('<div class="border-l-yellow pl-15 fz-20 height-20 lh-20 font-weight mb-10 mt-20">'+titleList[i]+'馆</div>');
              var $list = $('<div class="background-transparent min-h-180 flex-auto flex-wrap-auto pt-20">');
              $row.append($list);
              $listContent.append($row);
              putList(o,$list);
          });
      }
      function putList(list , $list){
          $.each(list , function(i , o){
              var $item = $('<div class="width-255 height-202 pt-20  mb-20 border-eee">');
              if(((i+1)%3))$item.addClass('mr-20');
              $item.append('<div class="fz-16 height-20 lh-20 pl-20 mb-10">'+o.memorialName+'</div>');
              $item.append('<div class="clearfix height-100 pl-10 pr-10 mb-20">' +
                  '<a href="/venue?id='+o.memorialId+'" target="_blank"><img src="'+useCommon.concatImgUrl(o.headImg)+'" class="height-100-100 width-75 pull-left" alt=""></a>' +
                  '<div class="pull-right width-140 flex-column color-666 height-100-100">' +
                  '<div class="width-100-100 fz-12">馆号：'+o.memorialId+'</div>' +
                  '<div class="width-100-100 fz-12">祭拜数：'+o.worshipCount+'</div>' +
                  '<div class="width-100-100 fz-12">馆主：'+o.nickname+'</div>' +
                  '<div class="width-100-100 fz-12">建馆时间：'+useCommon.parseDate(o.rowAddTime,'Y-m-d')+'</div>' +
                  '</div>' +
                  '</div>');
              $item.append('<div class="border-t-eee clearfix">' +
                  '<div class="pull-right">' +
                  '<div class="div-btn height-30 inline-block"><span code="'+o.memorialId+'" class="inline-block text-middle lh-30 show-album-btn">管理相册</span></div>' +
                  '<div class="div-btn height-30 inline-block"><span code="'+o.memorialId+'" class="inline-block text-middle edit-memorial-btn lh-30">编辑</span></div>' +
                  '<div class="div-btn height-30 inline-block"><span code="'+o.memorialId+'" class="inline-block text-middle del-memorial-btn lh-30">删除</span></div>' +
                  '</div>' +
                  '</div>');
              $list.append($item);
          });
      }
  }
};
$(function(){
    var $userMenu = $('.user-menu');
    $userMenu.on('click' , '.list .item' , function(){
        if($(this).hasClass('active'))return false;
        $userMenu.find('.item').removeClass('active');
        $(this).addClass('active');
        var sub = $(this).attr('sub');
        location.hash = sub;
        WY.trigger('user-menu' , sub);
        return false;
    });
    $userMenu.on('click' , '.menu' , function(){
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
    });
    WY.bind('user-menu-change',function(hash){
        var sub = hash || 'memorial';
        $userMenu.find('.active').removeClass('active');
        var $active = $userMenu.find('.list [sub='+sub+']');
        if(!$active[0])$active = $userMenu.find('.list .item').first();
        $active.click().closest('.menu').addClass('active');
    });
    WY.trigger('user-menu-change',location.hash.slice(1));

});
WY.userHandler.message = {
    init:function(){
        var $content;
        var _this = this;
        var createTr = function(i,data){
            var $div = $('<div class="pb-10 border-b-eee data-list">');
            $div .append('<div class="color-666 lh-20 pt-10 pb-10">留言:'+data.content+'</div>');
            $div.append('<div class="clearfix lh-20 height-20 ">'
                +'<span class="lh-20 height-20">'+(data.leaType=='memorial'?'纪念馆':'文章')+'</span>'
                +'<a target="_blank" class="color-blue-1 text-underline lh-20 height-20 mr-25" href="'+(data.leaType=='memorial'?('/venue?id='+data.dataId):'/news#'+encodeURIComponent(JSON.stringify({detailId:data.dataId}))) +'">'+(data.memorialName||data.title) +'</a>'
                    +'<span class="color-999 lh-20 height-20">'+useCommon.parseDate(data.rowAddTime)+'</span>'
                    +'<span class="color-999 div-btn inline-block pull-right del-btn" code="'+data.leaMessageId +'">删除</span>'
                +'</div>');
            return $div;
        };
        $.modalLoadingView('user/memorial/message',function(content){
            $content = WY.userLoad(content);
            $content.on('click' ,'.del-btn', function(){
                var code  = $(this).attr('code');
                WY.confirm({
                    content:'确定删除此留言？',
                    done:function(){
                        $.post('/user/message/del' ,{leaMessageId:code}, function(a){
                            if(a.code == 0)searchObject.doSearch(1);
                            else useCommon.toast(a.message);
                        });
                    }
                })
            });
            var searchObject = $.showDataPage({
                url:'/user/message/list',
                autoPage:1,
                limit:10,
                getSearchData:function(){
                    return {
                    }
                },
                createTr:createTr,
                done:function(data){
                }
            });
        },1);
    }
};
WY.userHandler['my-album'] = {
    init:function(){
        var $content;
        var _this = this;
        function createTr(i , data){
            data.type = 'album';
            var $item = WY.createOne('album' , data , i);
            return $item;
        }
        $.modalLoadingView('user/album/my',function(content){
            $content = _this.content = WY.userLoad(content);
            var $addBtn = $('.add-new-btn');
            var searchObject = $.showDataPage({
                url:'/user/album/list',
                limit:3,
                autoPage:1,
                createTr:createTr,
                done:function(data){
                    //$addBtn[data.length>=3?'hide':'show']();
                }
            });
            $content.on('click' , '.show-info-img' , function(){
                var code = $(this).attr('code');
                $.modalLoadingView('user/album/info-list' , function(content){
                    var $info = $(content);
                    $info.appendTo($content);
                    WY.albumFile({
                        content:$info,
                        addBtn:$info.find('.add-new-file-btn'),
                        dataId:code,
                        type:'album'
                    });
                },1)
            });
            $content.on('click' , '.edit-album-btn' , function(){
                var code = $(this).attr('code');
                var showValue = $(this).attr('val');
                WY.prompt({
                    title:'修改相册名称',
                    content:showValue,
                    placeholder:'请输入相册名称',
                    done:function(val){
                        if(!val){
                            useCommon.toast('请输入相册名称');
                            return false;
                        }
                        $.post('/user/album/edit',{
                            albumId:code,
                            albumName:val
                        },function(a){
                            if(a.code == 0){
                                searchObject.doSearch(1);
                            }else useCommon.toast(a.message);
                        })
                    }
                })
            });
            $content.on('click' , '.del-album-btn' , function(){
                var code = $(this).attr('code');
                WY.confirm({
                    title:'提示',
                    placeholder:'确定删除此相册？（内部照片也会删除）',
                    done:function(){
                        $.post('/user/album/del',{
                            albumId:code
                        },function(a){
                            if(a.code == 0){
                                searchObject.doSearch(1);
                            }else useCommon.toast(a.message);
                        })
                    }
                })
            });
            $addBtn.click(function(){
                WY.prompt({
                    title:'新增相册',
                    placeholder:'请输入相册名称',
                    done:function(val){
                        if(!val){
                            useCommon.toast('请输入相册名称');
                            return false;
                        }
                        $.post('/user/album/add',{
                            albumName:val
                        },function(a){
                            if(a.code == 0){
                                searchObject.doSearch(1);
                            }else useCommon.toast(a.message);
                        })
                    }
                })
            });
        },1);
    }
};
WY.userHandler['my-genealogy'] = {
    init:function(){
        var $content;
        var autoData;
        var createTr = function(i,data){
            var $div = $('<div class="data-list width-350 pl-160 position-relative height-202 inline-block mb-10 mr-10">');
            var $item = WY.createOne('genealogy-item' , data , i);
            $item.addClass('position-absolute left-0 top-0 ml-10 color-333');
            $div.append($('<a href="/genealogy/detail?id='+data.genealogyId+'"></a>').append($item));
            $div.append('<div class="pl-10">' +
            '<div class="write-ellipsis height-20" title="'+(data.province + data.city + data.county)+'">区域：'+(data.province + data.city + data.county)+'</div>' +
            '<div class="height-20">入谱：'+(data.pTaiPersonNumber + '/'+data.personNumber )+'人</div>' +
            '<div><a target="_blank" href="/genealogy/input?id='+data.genealogyId+'" class="btn color-333 back-243 border-204 inline-block mt-5">世系录入</a></div>' +
            //'<div><div class="btn back-243 border-204 inline-block mt-5 person-list-btn" index="'+i+'">人员列表</div></div>' +
            '<div><div class="btn back-243 border-204 inline-block mt-5 edit-genealogy-btn" index="'+i+'">编辑族谱</div></div>' +
            '<div><div class="btn back-243 border-204 inline-block mt-5 del-genealogy-btn" index="'+i+'">删除族谱</div></div>' +
            '</div>');
            return $div;
        };
        var searchObject;
        WY.bind('modal-handler-genealogy-handler' , function($ele){
           $ele.find('.submit-btn').click(function(){
               var $body = $ele.prev();
               var data = $body.__serializeJSON();
               var valid = useValidate.genealogy.validator(data , 'add');
               if(!valid.valid){
                   useCommon.toast(valid.message);
                   return false;
               }
               data.province = $.getCitySelectAutoValue(data.province);
               data.city = $.getCitySelectAutoValue(data.city);
               data.county = $.getCitySelectAutoValue(data.county);
               $.post('/user/genealogy/edit',data,function(a){
                   useCommon.toast(a.message);
                   if(a.code == 0){
                        $.modalLoadingHide();
                       searchObject.doSearch(1);
                    }
               });
           });
        });
        $.modalLoadingView('user/genealogy/index',function(content){
            $content = WY.userLoad(content);
            searchObject = $.showDataPage({
                url:'/user/genealogy/list',
                autoPage:1,
                limit:12,
                createTr:createTr,
                done:function(data){
                    autoData = data;
                }
            });
            $content.on('click','.edit-genealogy-btn',function(){
                var index = $(this).attr('index');
                $.modalLoadingView('/user/genealogy/detail/page?genealogyId='+autoData[index].genealogyId);
            });
            $content.on('click','.person-list-btn',function(){
                var index = $(this).attr('index');
                $.modalLoadingView('/user/genealogy/person/page?genealogyId='+autoData[index].genealogyId);
            });
            $content.on('click','.del-genealogy-btn',function(){
                var index = $(this).attr('index');
                WY.confirm({
                    content:"确认删除此族谱？",
                    done:function(){
                        $.post('/user/genealogy/del',{
                            genealogyId:autoData[index].genealogyId
                        }, function(a){
                                useCommon.toast(a.message);
                            if(a.code == 0){
                             searchObject.doSearch(1);
                            }}
                        );
                    }
                })
            });
        },1);
    }
};
WY.userHandler['my-score'] = {
    init:function(){
        var $content
        $.modalLoadingView('user/score/info',function(content){
            $content = WY.userLoad(content);
            WY.trigger('login-flush' , {
                done:function(userInfo){
                    $content.__formData(userInfo , 'data');
                    $content.__formData(userInfo.memberConfig , 'detail');
                    if(userInfo.memberKey == 'UniversalMember'){
                        $('.show-auto-member').show();
                    }else{
                        $('.show-spec-member').show();
                    }
                }
            });
        },1);
    }
};
WY.userHandler['recharge'] = {
    init:function(){
        var $content,configList;
        var _this = this;
        var createTr = function(o , sts){
            return '<div class="item pt-20 pl-20 '+(sts?'':'mr-20')+'" code="'+o.configKey +'">'+
                '<div>'+
                '<div class="lv-ico lv-ico-'+getLv(o.configKey)+' inline-block"></div>'+
                '<div class="inline-block lh-30 height-30 fz-25">'+o.configName+'</div>'+
                '</div>'+
                (!sts?'<div class="lh-20 height-20 color-red">'+o.annualFee +'元/年</div>':'')+
                '</div>'
        };
        function getLv(key){
            return {
                SilverMember:1,
                GoldMember:2,
                DiamondMember:3
            }[key] || 0;
        }
        var $configDetail,$scoreList;
        function changeKey(key){
            if(key == 'score'){
                $('[name=money]').trigger('input');
                $configDetail.hide();
                $scoreList.show();
            }else{
                var data = configList.filter(function(a){
                    return a.configKey == key
                }).pop();
                $configDetail.__formData(data , 'data');
                $configDetail.show();
                $scoreList.hide();
                $('.prize-span').text(data.annualFee + '元');
            }
        }
        $.modalLoadingView('user/score/recharge',function(content){
            $.get('/user/recharge/config',function(a){
                $content = WY.userLoad(content);
                $configDetail = $('.config-detail');
                $scoreList = $('.score-list');
                configList = a.data.filter(function(a){
                    a.annualFee /= 100;
                    return a.configKey  != 'UniversalMember'
                });
                var $listContent = $('.recharge-config-list-content');
                $.each(configList,function(i , o){
                    $listContent.append(createTr(o));
                });
                $listContent.append(createTr({
                    configKey:'score',
                    configName:'云币充值',
                }, 1) );

                $content.find('.item').click(function(){
                    if($(this).hasClass('active'))return false;
                    $(this).addClass('active').siblings().removeClass('active');
                    changeKey($(this).attr('code'));
                }).first().click();

                $content.find('[name=money]').on('input',function(){
                    var money = $(this).val();
                    var score = money * 100;
                    $('.show-score-info').html(score?(score+'云币'):'');
                    $('.prize-span').text(score?(money + '元'):'');
                });
                $content.find('.recharge-btn').click(function(){
                    var key = $content.find('.item.active').attr('code');
                    var money = $content.find('[name=money]').val();
                    var sendData = {
                        number:1,
                        orderType:key == 'score'?'CZ_YB':'CZ_HY',
                        channel :'alipay.web',
                        orderSource  :'WEB',
                        returnUrl:location.origin + location.pathname + '#my-score',
                        showUrl:location.origin + location.pathname + '#my-score',
                    };
                    if(key == 'score'){
                        if(!/^\d+(\.\d{1,2})?$/.test(money)){
                            useCommon.toast('请输入有效的金额');
                            return false;
                        }
                        sendData.money = money;
                    }else{
                        var data = configList.filter(function(a){
                            return a.configKey == key
                        }).pop();
                        sendData.dataId = data.configKey;
                    }
                    $.ajax({
                        url:'/user/recharge/add',
                        data:sendData,
                        type:'post',
                        async:false,
                        success:function(a){
                            if(a.code == 0){
                                WY.confirm({content:'充值完成',done:function(){
                                    WY.trigger('login-flush');
                                }});
                                window.open('https://mapi.alipay.com/gateway.do?'+a.data.payOrderUrl);
                            }else{
                                useCommon.toast(a.message);
                            }


                        }
                    });
                });
            });
        },1);
    }
};
WY.userHandler.sacrifice = {
    init:function(){
        var $content;
        var _this = this;
        var createTr = function(i,data){
            var tr = $('<tr class="data-list">');
            tr.append('<td>'+(i+1) +'</td>');
            tr.append('<td>'+data.memorialName +'</td>');
            tr.append('<td>'+data.sacrificeName  +'</td>');
            tr.append('<td>'+data.useCloudBi  +'</td>');
            tr.append('<td>'+useCommon.parseDate(data.rowAddTime)   +'</td>');
            return tr;
        };
        $.modalLoadingView('user/memorial/sacrifice',function(content){
            $content = $(content);
            WY.userLoad($content);
            $.showDataPage({
                url:'/user/sacrifice/list',
                autoPage:1,
                createTr:createTr,
                done:function(data){
                }
            });
        },1);
    }
};
WY.userHandler['score-list'] = {
    init:function(){
        var $content;
        var _this = this;
        var createTr = function(i,data){
            var $div = $('<tr class="data-list">');
            $div.append('<td>'+(i+1)+'</td>');
            $div.append('<td>'+data.cloudBi+'</td>');
            $div.append('<td>'+data.rowAddTime+'</td>');
            $div.append('<td>'+data.dic+'</td>');
            return $div;
        };
        $.modalLoadingView('user/score/score-list',function(content){
            $content = WY.userLoad(content);
            var searchObject = $.showDataPage({
                url:'/user/recharge/list',
                autoPage:1,
                limit:10,
                getSearchData:function(){
                    return {
                        jiaJianType:'jia'
                    }
                },
                createTr:createTr,
                done:function(data){
                }
            });
        },1);
    }
};
WY.userHandler['send-msg'] = {
    init:function(){
        var $content;
        var _this = this;
        $.modalLoadingView('user/friend/send',function(content){
            $content = WY.userLoad(content);
            $.get('/user/friend/list' , {
                limit:1000
            } , function(a){
               putData(a.data.content);
            });
            $content.find('.submit-btn').click(function(){
               var val = $('.msg-textarea').val();
                if(!val){
                    useCommon.toast('请输入要发送的内容');
                    return false;
                }
                var checkAll;
                if($('[check-one=one]:checked').length && $('[check-one=all]').is('checked')){
                    checkAll = true;
                }
                else{
                    var list = $('[check-one=one]:checked').map(function(a){
                        return $(this).attr('code');
                    }).toArray().join();
                    if(!list){
                        useCommon.toast('请选择发送消息的对象');
                        return false;
                    }
                }
                $.post('/user/friend/send/'+(checkAll?'all':'msg'),{
                    msg:val,
                    userids:list,
                } , function(a){
                    useCommon.toast(a.message , 500);
                    if(a.code == 0){
                        $('.msg-textarea').val('');
                    }
                })
            });
        },1);
        function putData(list){
            var $listContent = $content.find('.show-friend-list');
            $.each(list , function(i , o){
                $listContent.append('<div><label class="break-all"><input code="'+o.userId+'" type="checkbox" check-one="one"/>'+(o.nickname || o.userName)+'</label></div>');
            });
        }
    }
};
WY.userHandler['si-msg'] = {
    init:function(){
        var $content;
        var _this = this;
        function createTr(i , o){
            var $list = $('<div class="data-list pl-10 pt-10 pb-10 border-b-eee">');
            $list.append('<div>来自：<span class="color-blue-2 height-30 lh-30">'+(o.nickname || o.userIdFrom)+'</span></div>');
            $list.append('<div class="pl-20 break-all lh-20">内容：<span class="color-333">'+o.msgContent+'</span></div>');
            $list.append('<div class="mt-10">' +
            '<div class="div-btn color-666 mr-10 del-btn inline-block" code="'+o.msgId+'" >删除</div>' +
            '</div>')
            return $list;
        }
        $.modalLoadingView('user/msg/confirm',function(content){
            $content = _this.content = WY.userLoad(content);
            var searchObject = $.showDataPage({
                url:'/user/msg/list',
                limit:10,
                autoPage:1,
                createTr:createTr,
                getSearchData:function(){
                    return {
                        searchType:'friend_message'
                    }
                },
                done:function(data){
                }
            });
            $content.on('click' , '.del-btn' , function(){
                var msgId  = $(this).attr('code');
                var $closest = $(this).closest('.data-list');
                $.post('/user/msg/del',{
                    msgId:msgId,
                },function(a){
                    if(a.code == 0){
                        $closest.remove();
                    }else{
                        useCommon.toast(a.message);
                    }
                })
            });
        },1);
    }
}
WY.userHandler['system-msg'] = {
    init:function(){
        var $content;
        var _this = this;
        function createTr(i , o){
            var $list = $('<div class="data-list pl-10 pt-10 pb-10 border-b-eee">');
            $list.append('<div>来自：<span class="color-blue-2 height-30 lh-30">系统</span></div>');
            $list.append('<div class="pl-20 break-all lh-20">内容：<span class="color-333">'+o.msgContent+'</span></div>');
            $list.append('<div class="mt-10">' +
            '<div class="div-btn color-666 mr-10 del-btn inline-block" code="'+o.msgId+'" >删除</div>' +
            '</div>')
            return $list;
        }
        $.modalLoadingView('user/msg/confirm',function(content){
            $content = _this.content = WY.userLoad(content);
            var searchObject = $.showDataPage({
                url:'/user/msg/list',
                limit:10,
                autoPage:1,
                createTr:createTr,
                getSearchData:function(){
                    return {
                        searchType:'official_message'
                    }
                },
                done:function(data){
                }
            });
            $content.on('click' , '.del-btn' , function(){
                var msgId  = $(this).attr('code');
                var $closest = $(this).closest('.data-list');
                $.post('/user/msg/del',{
                    msgId:msgId,
                },function(a){
                    if(a.code == 0){
                        $closest.remove();
                    }else{
                        useCommon.toast(a.message);
                    }
                })
            });
        },1);
    }
}
WY.userHandler['venue-album'] = {
    init:function(){
        var $content;
        var _this = this;
        function createTr(i , data){
            var $item = WY.createOne('album' , data , i);
            return $item;
        }
        $.modalLoadingView('user/album/venue',function(content){
            $content = _this.content = WY.userLoad(content);
            var searchObject = $.showDataPage({
                url:'/memorial/album/list',
                limit:100,
                autoPage:1,
                createTr:createTr,
                done:function(data){
                }
            });
            $content.on('click' , '.show-info-img' , function(){
                var code = $(this).attr('code');
                $.modalLoadingView('user/album/info-list' , function(content){
                    var $info = $(content);
                    $info.appendTo($content);
                    WY.albumFile({
                        content:$info,
                        addBtn:$info.find('.add-new-file-btn'),
                        dataId:code,
                        type:'memorial'
                    });
                },1)
            });
        },1);
    }
};
useValidate.genealogy = {
    validator:function(data , type){
        var valid;
        if(type == 'add'){
            valid = useValidate.validator({
                genealogyName:{
                    required:1,
                    requiredMessage:'请输入族谱名称',
                },
                surname:{
                    required:1,
                    requiredMessage:'请输入族谱姓氏',
                },
                province:{
                    required:1,
                    requiredMessage:'请选择族谱所在省',
                },
                city:{
                    required:1,
                    requiredMessage:'请选择族谱所在市',
                },
                county:{
                    required:1,
                    requiredMessage:'请选择族谱所在区',
                },
            },data);
        }
        else if(type == 'person'){
            valid = useValidate.validator({
                personName:{
                    required:1,
                    requiredMessage:'请输入成员名称',
                },
                gender:{
                    required:1,
                    requiredMessage:'请选择成员性别',
                }
            },data);
        }
        return valid;
    }
};
useValidate.userInfo = {
    validator:function(data , type){
    }
};