// file.js include place
////alert("alert message");
;
document.addEventListener('DOMContentLoaded', function(){
    var value = document.querySelector('.t033__title'),
        headers = document.querySelectorAll('.t489__title');
    
    if(value && headers){
        for(var i=0; i< headers.length; i++){
            if(headers[i].innerHTML === 'About project'){
                headers[i].innerHTML = '<h2 class="t489__title t-title t-title_md" style="font-size:16px;font-weight:400;text-transform:uppercase;">ABOUT PROJECT</h2>'
            }
            
                if(headers[i].innerHTML === 'SOLUTION AND TECHNOLOGIES'){
                headers[i].innerHTML = '<h2 class="t489__title t-title t-title_md" style="font-size:16px;font-weight:400;text-transform:uppercase;">SOLUTION AND TECHNOLOGIES</h2>'
            }
            
        }
        
        if( value.innerHTML === 'VALUE'){
            value.innerHTML = '<h3 class="t033__title t-title" style="padding-top: 0;">VALUE</h3>';
        }
    }
    
    
    
    var canvasView = document.querySelector('#canvas_view'),
        starsView = document.querySelector('#recorddiv36804410'),
        mapView = document.querySelector('#rec35277482');
    
    if(device.android() || device.iphone() || device.windowsPhone()){
        var allCanvas = document.querySelectorAll('canvas');
        for(var i = 0; i< allCanvas.length; i++){
            allCanvas[i].remove();
            }
    }
    
    if (device.desktop() && canvasView) {
        (function() {
        var lastTime = 0;
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
                window[vendors[x] + 'CancelRequestAnimationFrame'];
        }
    
        if (!window.requestAnimationFrame)
            window.requestAnimationFrame = function (callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function () { callback(currTime + timeToCall); },
                    timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
    
        if (!window.cancelAnimationFrame)
            window.cancelAnimationFrame = function (id) {
                clearTimeout(id);
            };
    }());
    
    (function() {
        var density = 6,
            particles = [],
    
            stepNum = 0,
            stepMax = 75,
    
            isFadeIn = true,
            isFadeOut = false,
            isAnimPause = false,
            isPartsPause = false,
    
            fadeValue = 0,
            fadeInStep = 0.02,
            fadeOutStep = 0.02,
            
            changeCount = 0,
            changeDelay = 1800,
    
            animTimeout,
            animTimeoutInit = false,
            
            arrText = [
                'Automatisering af forretningsprocesser ✦ <br> salg, service, markedsføring, planlægning af ressourcer, hr, økonomi',
                'Integration Of IT Landscape ✦<br>Data Exchange Between Salesforce And Existing Systems',
                'Migration From Legacy Systems To Salesforce ✦<br>Data Migration And Processing',
                'Business Applications ✦<br>Desktop And Mobile Apps On Salesforce Platform',
                'Audit and support of Salesforce ORGS ✦<br>Raising Efficiency Of Salesforce Investments',
                'Salesforce Development ✦<br>SFDC Development And Configuration'
            ],
            arrIcon = [1, 2, 3, 4, 5, 6],
            arrLength = arrIcon.length;
    
        //#region [fn]
        function debounce(func, wait, immediate) {
            var timeout;
            return function () {
                var context = this, args = arguments;
                var later = function () {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        }
    
        var fnDebounce = debounce(function () {
            isAnimPause = false;
        }, 250);
        //#endregion [fn]
    
        //#region [text]
        function setText(index) {
            var $text = document.querySelector('.animation-text-output');
    
            $text.classList.remove('slow-hide');
            $text.innerHTML = arrText[index];
            setTimeout(function() {
                $text.classList.add('slow-hide');
            }, changeDelay + 600);
        }
        //#endregion [text]
    
        //#region [icon]
        var ico = 0,
            icoData = [],
            icoWidth = 380,
            icoHeight = 380,
            sceneIcon = document.createElement('canvas'),
            sceneIconCtx = sceneIcon.getContext('2d');
    
        sceneIcon.width = icoWidth;
        sceneIcon.height = icoHeight;
        sceneIconCtx.fillStyle = '#000';
        sceneIconCtx.textAlign = 'center';
        sceneIconCtx.font = '360px Twistellar';
    
        function drawIcon(ico) {
            sceneIconCtx.clearRect(0, 0, icoWidth, icoHeight);
            sceneIconCtx.fillText(ico, 190, 348);
        }
        function cacheIconData() {
            for (var i = 0; i < arrLength; i++) {
                drawIcon(arrIcon[i]);
    
                icoData.push(
                    sceneIconCtx.getImageData(0, 0, icoWidth, icoHeight).data
                );
            }
        }
        //#endregion [icon]
    
        //#region [view]
        var sceneView = document.getElementById('canvas_view'),
            sceneViewCtx = sceneView.getContext('2d');
    
        sceneView.width = window.innerWidth-25;
        sceneView.height = window.innerHeight;
    
        function clearView() {
            sceneViewCtx.clearRect(0, 0, sceneView.width, sceneView.height);
        }
        function updateView() {
            var isLastStep = stepNum === stepMax;
    
            if (isLastStep && (!isFadeIn && !isFadeOut && !animTimeoutInit)) {
                isPartsPause = true;
                animTimeoutInit = true;
    
                clearTimeout(animTimeout);
                animTimeout = setTimeout(function () {
                    isFadeOut = true;
                    isPartsPause = false;
                    animTimeoutInit = false;
                }, changeDelay);
            }
    
            if (!isAnimPause) {
                clearView();
    
                if (isFadeIn && fadeValue < 1) {
                    fadeValue += fadeInStep;
                } else {
                    isFadeIn = false;
    
                    if (isFadeOut) {
                        if (fadeValue <= 0) {
                            if (ico < arrLength - 1) {
                                ico++;
                            } else {
                                ico = 0;
                            }
    
                            fadeValue = 0;
    
                            isFadeIn = true;
                            isFadeOut = false;
    
                            getParticleCoords(icoData[ico]);
                        } else {
                            isFadeIn = false;
                            fadeValue -= fadeOutStep;
                        }
                    }
                }
    
                for (var i = 0; i < particles.length; i++) {
                    var item = particles[i],
                        x, y, opacity;
    
                    if (isLastStep) {
                        item.vX = (Math.random() * 6) * 2 - 6;
                        item.vY = (Math.random() * 6) * 2 - 6;
                    }
                    if (!isPartsPause) {
                        item.x += item.vX;
                        item.y += item.vY;
                    }
                    
                    x = item.x;
                    y = item.y;
                    opacity = fadeValue;
    
                    drawParticle(x, y, opacity);
                }
                
                stepNum++;
            }
        }
        //#endregion [view]
    
        //#region [particle]
        function getParticleCoords(data) {
            var key,
                pixel,
                offsetX = ((sceneView.width * 0.7) - (icoWidth / 2)),
                offsetY = ((sceneView.height / 2) - (icoHeight / 2));
    
            stepNum = 0;
            changeCount++;
            isShow = false;
            particles = [];
    
            setText(ico);
    
            for (var y = 0; y < icoHeight; y += density) {
                for (var x = 0; x < icoWidth; x += density) {
                    key = ((x + (y * icoWidth)) * 4) - 1;
                    pixel = data[key];
    
                    if (pixel === 255) {
                        setParticleCoords(x, y, offsetX, offsetY);
                    }
                }
            }
        }
        function setParticleCoords(x, y, offsetX, offsetY) {
            var xA = (Math.random() * icoWidth) + offsetX,
                yA = (Math.random() * icoHeight) + offsetY,
    
                xB = x + offsetX,
                yB = y + offsetY,
    
                vX = (xB - xA) / stepMax;
                vY = (yB - yA) / stepMax;
    
            particles.push({
                x: xA,
                y: yA,
                vX: vX,
                vY: vY,
    
                r: true
            });
        }
        function drawParticle(x, y, opacity) {
            sceneViewCtx.fillStyle = 'rgba(255, 255, 255, ' + opacity + ')';
            sceneViewCtx.beginPath();
            sceneViewCtx.rect(x, y, 2.4, 2.4);
            sceneViewCtx.closePath();
            sceneViewCtx.fill();
        }
        //#endregion [particle]
    
    
    
        window.addEventListener('load', function () {
            cacheIconData();
            getParticleCoords(icoData[ico]);
    
            (function anim() {
                updateView();
                requestAnimationFrame(anim);
            })();
        });
    
        window.addEventListener('resize', function () {
            isAnimPause = true;
    
            sceneView.width = window.innerWidth-25;
            sceneView.height = window.innerHeight;
    
            fnDebounce();
        });
    }());
    }
    
    if (device.desktop() && starsView){
                
        var container = document.querySelector('#recorddiv36804410'),
        canv = document.createElement("canvas");
        canv.setAttribute("id", "stars");
        
        container.appendChild(canv);
    
    
    class Vector {
        constructor(x,y){
        this.x = x;
        this.y = y;
        }
        /////////////////////////////////////////////////////////
        setX(value){
        this.x = value;
        }
        getX(){
        return this.x;
        }
        setY(value){
        this.y = value;
        }
        getY(){
        return this.y;
        }
        /////////////////////////////////////////////////////////
        setAngle(angle){
        let length = this.getLength();
        this.x = Math.cos(angle) * length;
        this.y = Math.sin(angle) * length;
        }
        getAngle(){
        return Math.atan2(this.y,this.x);
        }
        setLength(length){
        let angle = this.getAngle();
        this.x = Math.cos(angle) * length;
        this.y = Math.sin(angle) * length;
        }
        getLength(){
        return Math.hypot(this.y,this.x);
        }
        /////////////////////////////////////////////////////////
        add(v2){
        return new Vector(this.x + v2.getX(),this.y + v2.getY());
        }
        subtract(v2){
        return new Vector(this.x - v2.getX(),this.y - v2.getY());
        }
        multiply(val){
        return new Vector(this.x * val,this.y * val);
        }
        divide(val){
        return new Vector(this.x / val,this.y / val);
        }
        /////////////////////////////////////////////////////////
        addTo(v2){
        this.x += v2.getX();
        this.y += v2.getY();
        }
        subtractFrom(v2){
        this.x -= v2.getX();
        this.y -= v2.getY();
        }
        multiplyBy(val){
        this.x *= val;
        this.y *= val;
        }
        divideBy(val){
        this.x /= val;
        this.y /= val;
        }
    }
    
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    
    class Particle {
        constructor(x, y, speed, direction,gravity,radius) {
        this.x = x;
        this.y = y;
        this.vx = Math.cos(direction) * speed;
        this.vy = Math.sin(direction) * speed;
        this.mass = 1;
        this.radius = radius || 0;
        this.bounce = -1;
        this.friction = 1;
        this.gravity = gravity || 0;
        this.springs = [];
        this.gravitations = [];
        }
        getSpeed(){
        return Math.hypot(this.vx,this.vy);
        }
        setSpeed(speed){
        let heading = this.getHeading();
        this.vx = Math.cos(heading) * speed;
        this.vy = Math.sin(heading) * speed;
        }
        getHeading(){
        return Math.atan2(this.vy,this.vx);
        }
        setHeading(heading){
        let speed = this.getSpeed();
        this.vx = Math.cos(heading) * speed;
        this.vy = Math.sin(heading) * speed;
        }
        accelerate(ax,ay){
        this.vx += ax;
        this.vy += ay;
        }
        update() {
        this.handleSprings();
        this.handleGravitations();
        this.vx *= this.friction;
        this.vy *= this.friction;
        this.vy += this.gravity;
        this.x += this.vx;
        this.y += this.vy;
        }
        angleTo(p2) {
        return Math.atan2(p2.y - this.y,p2.x - this.x);
        }
        distanceTo(p2) {
        return Math.hypot(p2.x - this.x, p2.y - this.y);
        }
        
        gravitateTo(p2) {
        let dx = p2.x - this.x,
            dy = p2.y - this.y,
            distSQ = dx*dx + dy*dy,
            dist = Math.sqrt(distSQ),
            force = p2.mass / distSQ,
            ax = dx/dist * force,
            ay = dy/dist * force;
        
        this.vx += ax;
        this.vy += ay;
        }
        
        addGravitation(p) {
        this.removeGravitation(p);
        this.gravitations.push(p);
        }
        
        removeGravitation(p) {
        for(let i=0;i<this.gravitations.length;i++){
            if(p === this.gravitations[i]){
            this.gravitations.splice(i,1);
            return;
            }
        }
        }
        handleGravitations() {
        for(let i=0;i<this.gravitations.length;i++){
            this.gravitateTo(this.gravitations[i]);
        }
        }
        
        springTo(point, k, length) {
        let dx = point.x - this.x,
            dy = point.y - this.y,
            distSQ = dx*dx + dy*dy,
            dist = Math.sqrt(distSQ),
            force = (dist - length || 0) * k;
        this.vx = dx/dist * force;
        this.vy = dy/dist * force;
        }
        
        addSpring(point, k, length) {
        this.removeSpring(point);
        this.springs.push({
            point, k, length:length||0
        });
        }
        
        removeSpring(point) {
        for(let i=0;i<this.springs.length;i++){
            if(point === this.springs[i].point){
            this.springs.splice(i,1);
            return;
            }
        }
        }
        
        handleSprings() {
        for(let i=0;i<this.springs.length;i++){
            let spring = this.springs[i];
            this.springTo(spring.point, spring.k, spring.length);
        }
        }
    }
    
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    
    // Normalization
    
    function norm(value,min,max){
        return (value - min) / (max - min);
    }
    
    
    // Linear Interpolation
    
    function lerp(norm,min,max){
        return (max - min) * norm + min;
    }
    
    
    // Map
    
    function map(value, sourceMin, sourceMax, destMin, destMax){
        return lerp(norm(value, sourceMin, sourceMax), destMin, destMax);
    }
    
    
    // Clamp
    
    function clamp(value, min, max){
        return Math.min(Math.max(value,Math.min(min,max)),Math.max(min,max));
    }
    
    
    // Calculate Distance
    
    function distance(p1, p2){
        return Math.hypot((p1.x-p2.x),(p1.y-p2.y));
    }
    
    function distanceXY(x0,y0,x1,y1){
        return Math.hypot((x1-x0),(y1-y0));
    }
    
    
    // Collisions
    
    function circleCollision(c0, c1){
        return distance(c0,c1) <= (c0.radius + c1.radius);
    }
    
    function pointInCircle(x, y, circle){
        return distanceXY(x,y,circle.x,circle.y) < circle.radius;
    }
    
    function pointInRect(x, y, rect){
        return inRange(x,rect.x,rect.x+rect.width) && inRange(y,rect.y,rect.y+rect.height);
    }
    
    function inRange(value,min,max){
        return value >= Math.min(min,max) && value <= Math.max(min,max);
    }
    
    function rangeIntersect(min0,max0,min1,max1){
        return Math.max(min0, max0) >= Math.min(min1,max1) && Math.min(min0,max0) <= Math.max(min1,max1);
    }
    
    function rectIntersect(r0,r1){
        return rangeIntersect(r0.x,r0.x+r0.width,r1.x,r1.x+r1.width) && rangeIntersect(r0.y,r0.y+r0.height,r1.y,r1.y+r1.height);
    }
    
    
    // Random Numbers
    
    function rand(min, max){
        return min + Math.random() * (max - min);
    }
    
    function randInt(min, max){
        return ~~(min + Math.random() * (max - min +1));
    }
    
    function randDist(min, max, iterations){
        let total = 0;
        for(let i = 0;i<iterations;i++){
        total += rand(min,max)
        }
        return total/iterations;
    }
    
    
    // Angles
    
    function degToRad(deg){
        return deg / 180 * Math.PI;
    }
    
    function radToDeg(rad){
        return rad * 180 / Math.PI;
    }
    
    
    // Rounding
    
    function roundToPlaces(val, places){
        let mult = Math.pow(10, places);
        return Math.round(val * mult) / mult;
    }
    
    function roundNearest(val, near){
        return Math.round(val / near) * near;
    }
    
    
    // Bezier Curves
    
    function quadraticBezier(p0,p1,p2,t,pFinal){
        pFinal = pFinal || {};
        pFinal.x = Math.pow(1-t,2)*p0.x+(1-t)*2*t*p1.x+t*t*p2.x;
        pFinal.y = Math.pow(1-t,2)*p0.y+(1-t)*2*t*p1.y+t*t*p2.y;
        return pFinal;
    }
    
    function cubicBezier(p0,p1,p2,p3,t,pFinal){
        pFinal = pFinal || {};
        pFinal.x = Math.pow(1-t,3)*p0.x+Math.pow(1-t,2)*3*t*p1.x+(1-t)*3*t*t*p2.x+t*t*t*p3.x;
        pFinal.y = Math.pow(1-t,3)*p0.y+Math.pow(1-t,2)*3*t*p1.y+(1-t)*3*t*t*p2.y+t*t*t*p3.y;
        return pFinal;
    }
    
    function multiCurve(arrPoints, context){
        let p0,p1,midx,midy;
        ctx.moveTo(arrPoints[0].x,arrPoints[0].y);
        
        for(let i=1;i<arrPoints.length-2;i++){
        p0 = arrPoints[i];
        p1 = arrPoints[i+1];
        midx = (p0.x+p1.x)/2;
        midy = (p0.y+p1.y)/2;
        ctx.quadraticCurveTo(p0.x,p0.y,midx,midy);
        }
        
        p0 = arrPoints[arrPoints.length-2];
        p1 = arrPoints[arrPoints.length-1];
        ctx.quadraticCurveTo(p0.x,p0.y,p1.x,p1.y);
    }

    }
});;

// webpcss
// function testWebP(callback) {
//   var webP = new Image();

//   webP.onload = webP.onerror = function () {
//     callback(webP.height == 2);
//   };
//   webP.src =
//     "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
// }

// testWebP(function (support) {
//   if (support == true) {
//     document.querySelector("body").classList.add("webp");
//   } else {
//     document.querySelector("body").classList.add("no-webp");
//   }
// });

// ibg

document.addEventListener("DOMContentLoaded", function() {
  

if(document.querySelector('.ibg')) {

  function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector("img")) {
        ibg[i].style.backgroundImage =
          "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
      }
    }
  }
  ibg();

}

// project scripts

// === hamburger menu
if(document.querySelector('#gamburger')) {

  const body = document.querySelector('body');
  const mainWrap = document.querySelector('.navigation-panel-menu');
  const gamburgerButton = document.querySelector('#gamburger');
  const mainMenu = document.querySelector('.main-menu');
  const navPanel = document.querySelector('.navigation-panel');
  const header = document.querySelector('header');
  const sculptorHeading = document.querySelector('.sculptor-page__header-heading');
  const canvas = document.querySelector('.container__canvas');

  gamburgerButton.addEventListener('click', function() {
    mainWrap.classList.toggle('active');
    navPanel.classList.toggle('navigation-panel-active');
    gamburgerButton.classList.toggle('gamburger-active');
    body.classList.toggle('hide');
    mainMenu.classList.toggle('active');
    header.classList.toggle('active');
    canvas.classList.toggle('active');

    if(sculptorHeading) {
      sculptorHeading.classList.toggle('d-none');
    }
  });

}
// ===

// === Swiper slider
if(document.querySelector('#swiper1')) {
  
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    },
    slidesPerView: 3,
    breakpoints: {
      1292: {
        slidesPerView: 3
      },
      992: {
        slidesPerView: 2
      },
      0: {
        slidesPerView: 1
      }
    }
  });

}

if(document.querySelector('#swiper2')) {
  const swiper2 = new Swiper('#swiper2', {
    // Optional parameters
    direction: 'horizontal',
    //loop: true,

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    slidesPerView: 1,
  });
}
// ===

// === Accordion
if(document.querySelector('.accordion')) {

  document.querySelectorAll('.accordion').forEach(item => {
    item.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });

}
// ===

// === tabs
function createTab(TabSection) {

  if(document.querySelector('.tabs-container')) {

      let section = document.querySelector(`${TabSection}`) || document.querySelector('body');

      let mobileLabel = section.getElementsByClassName('accordion__label-text')[0];
      let tabHeaderMobile = section.getElementsByClassName('tab-header-mobile')[0];
      let tabsPaneMobile = tabHeaderMobile.getElementsByClassName('tab-head-mobile');
    
      let tabHeader = section.getElementsByClassName('tab-header-desktop')[0];
      let tabIndicator = section.getElementsByClassName('tab-indicator')[0];
      let tabBody = section.getElementsByClassName('tab-body')[0];
    
      let tabsPane = tabHeader.getElementsByClassName('tab-head');

      const amountHeaders = tabsPane.length;
      tabIndicator.style.width = `calc(100% / ${amountHeaders})`
    
      section.querySelectorAll('.tab-head').forEach((i) => i.style.width = `calc(100% / ${amountHeaders})`);
    
      for(let i = 0; i < tabsPane.length; i++) {   
        tabsPane[i].addEventListener('click', function() {
          tabHeader.getElementsByClassName('active')[0].classList.remove('active');
          tabsPane[i].classList.add('active');
  
          tabBody.getElementsByClassName('active')[0].classList.remove('active');
          tabBody.getElementsByClassName('tab-item')[i].classList.add('active');
          tabIndicator.style.left = `calc(calc(100% / ${amountHeaders}) * ${i})`;
        });

        // if(TabSection === '#s-tab-mouseover') {
          tabsPane[i].addEventListener('mouseover', function() {
            tabHeader.getElementsByClassName('active')[0].classList.remove('active');
            tabsPane[i].classList.add('active');
    
            tabBody.getElementsByClassName('active')[0].classList.remove('active');
            tabBody.getElementsByClassName('tab-item')[i].classList.add('active');
            tabIndicator.style.left = `calc(calc(100% / ${amountHeaders}) * ${i})`;
          });
        // }
      }
    
      for(let i = 0; i < tabsPaneMobile.length; i++) {
        tabsPaneMobile[i].addEventListener('click', function() {
          mobileLabel.textContent = `${tabsPaneMobile[i].textContent}`;
    
          tabBody.getElementsByClassName('active')[0].classList.remove('active');
          tabBody.getElementsByClassName('tab-item')[i].classList.add('active');
      });
    }
  }

}

createTab('#s-tab-1');
createTab('#s-tab-2');
createTab('#s-tab-3');
createTab('#s-tab-4');
createTab('#s-tab-mouseover');

// ===

// === anchor menu
if(document.querySelector('.anchor-menu')) {

  let popupMessage = document.querySelectorAll('.info-container')
  let anchors = document.querySelectorAll('.anchor-btn')

  anchors.forEach((item, index, arr) => {
    item.addEventListener('mouseover', function() {
      popupMessage[index].classList.add('active')
    });
    item.addEventListener('mouseout', function() {
      popupMessage[index].classList.remove('active')
    });
    item.addEventListener('click', function() {
      anchors.forEach(el => el.classList.remove('active'))
      this.classList.add('active')
    });
  });

}
// ===

// Timeline
if(document.querySelector('.timeline-container')) {
  const timeline = new Swiper('.timeline-container', {
    //pagination: '.swiper-pagination',
    slidesPerView: 3,
    paginationClickable: true,
    grabCursor: true,
    //paginationClickable: true,
    navigation: {
      nextEl: '.next-slide',
      prevEl: '.prev-slide',
    },
    breakpoints: {
      1292: {
        slidesPerView: 3
      },
      992: {
        slidesPerView: 2
      },
      0: {
        slidesPerView: 1
      }
    }
  });
}
// ===

// Mobile tarif cards
const mobileTarifTrigger = document.querySelectorAll('.mobile-trigger')
const mobileTarif = document.querySelectorAll('.mobile-tarif')
if(mobileTarifTrigger && mobileTarif) {
  document.querySelectorAll('.mobile-trigger').forEach((item, index) => {
    item.addEventListener('click', function() {
      mobileTarif[index].classList.toggle('active');
    })
  })
}
// ===

// Inputs style
if(document.querySelector('.mdc-text-field')) {
  let inputs = document.querySelectorAll('.mdc-text-field');
  inputs.forEach(item => {
    mdc.textField.MDCTextField.attachTo(item);
  })
}
// ===

// lottie animation
if(document.querySelector('.lottie')) {

  const lottieAnimation = (domElement, path) => {
    var animation = bodymovin.loadAnimation({
      container: document.getElementById(`${domElement}`),
      path: `${path}`,
      renderer: 'svg',
      loop: true,
      autoplay: true,
    })
  };
  lottieAnimation('lottie-1','img/pages/main/01.json');
  lottieAnimation('lottie-2','img/pages/main/02.json');
  lottieAnimation('lottie-3','img/pages/main/03.json');
  lottieAnimation('lottie-4','img/pages/main/04.json');

}
// ===

// Hover menu
if(document.querySelector('.sub-menu__list')) {

  document.querySelectorAll('.navigation-panel__menu-item').forEach(item=> {
    item.addEventListener('mouseover', () => {
      item.querySelector('.sub-menu__list').classList.add('active')
    })
    item.addEventListener('mouseout', () => {
      item.querySelector('.sub-menu__list').classList.remove('active')
    })
    item.addEventListener('click', () => {
      item.querySelector('.sub-menu__list').classList.add('active')
    })
  })

  document.querySelectorAll('.navigation-panel__language').forEach(item => {
    item.addEventListener('mouseover', () => {
      item.querySelector('.sub-menu__list').classList.add('active')
    })
    item.addEventListener('mouseout', () => {
      item.querySelector('.sub-menu__list').classList.remove('active')
    })
    item.addEventListener('click', () => {
      item.querySelector('.sub-menu__list').classList.add('active')
    })
  })

  if(document.querySelector('#active-language')) {
    document.querySelectorAll('.sub-menu__list-item a').forEach(item => {
      
      item.addEventListener('click', () => {
        let prev = item.textContent;
        item.textContent = document.querySelector('#active-language a').textContent
        document.querySelector('#active-language a').textContent = prev
        
        // let prevA = item.getAttribute('href');
        // item.setAttribute('href', document.querySelector('#active-language a').getAttribute('href'))
        // document.querySelector('#active-language a').setAttribute('href', prevA)
        // console.log(item.getAttribute('href'))
      })
    })
  }
}
// ===

// Email Input Validation
function emailValidation(form) {
  
  var form = document.querySelector(form);
  var inputEmail = form.querySelector('input').value;
  var errorText = form.querySelector('.input-error-message');
  var errorTextP = form.querySelector('.input-error-message p');
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


  console.log(inputEmail);

  if(inputEmail.match(pattern)) {
    errorText.classList.remove('active');
    errorTextP.textContent = '';
  } else {
    errorText.classList.add('active');
    errorTextP.textContent = 'Please provide valid email address';
  }

  if(inputEmail === '') {
    errorText.classList.remove('active');
    errorTextP.textContent = '';
  }
}
// ===

});