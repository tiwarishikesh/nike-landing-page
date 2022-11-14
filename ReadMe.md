Nike Landing Page
========

This is me playing around with a idea I came across on Instagram from an account by the name of [ui.alok](https://www.instagram.com/ux.alok/). 


[Original Figma Post](https://www.instagram.com/p/CkGCBzygrIH/)

[Live Demo](https://kanr.is/pens/nike-landing/)

Explanation for beginners
--------

This was created using GreenSock GSAP, ScrollTrigger and Timeline



```
$(".ipad").css('top',$(window).height()*0.5 - $(".ipad").height()*0.5);
$(".ipad").css('left',$(window).width()*0.5 - $(".ipad").width()*0.5);
```
Center the div containe iPad and overlay


```
let zoomRatio = Math.max($(window).width() / $(".ipad").width(), $(window).height() / $(".ipad").height()) * 1.1;
```
Choose the greater of the ratios so that the screen is covered both by width adn height.
1.1x is done so that the border of iPad overflows as well


```
$('.with-whitelogo').css('top',$('.ipad').offset().top + $('.ipad').height() - $('.with-whitelogo').offset().top);
```
Place the section right below the iPad div bottom


```
var distance = $('.startLogo').offset().top - $('.altLogo').closest('.row').offset().top;
$(".altLogo").css('transform',`translate3d(${horizontalOffset}px, ${distance}px, 0px)`);
```
Reveal the logo as the section moves upward


```
const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".landing-section",
            start: "-20vh top",
            end: "bottom bottom",
            scrub: true,
            toggleActions: "play reverse play reverse"
        }
    });
    tl
        .to('.ipad', { scale: 1, duration: 0.4, stagger: 0.1, ease: Power2.inOut });    
```

The iPad scales down to original size


For more information:
[GreenScok Timeline](https://greensock.com/docs/v3/GSAP/Timeline)
[ScrollTrigger](https://greensock.com/docs/v3/Plugins/ScrollTrigger)