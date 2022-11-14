/* gsap.to(".landing-section",{
    scrollTrigger:{
        trigger: ".landing-section",
        pin:".landing-section",
        start:"top top",
        end:"bottom bottom",
        scrub: true
    }
}); */
let horizontalOffset = 0;
$(document).ready(()=>{
    /* $('.earth').css('width','300vh');
    $('.earth').css('left','-250vh');
    $('.earth').css('left',$(document).width()*0.5 - $(".earth").width()*0.5);
    $('.earth').css('top','55vh');
    $('.earth').css('transform','rotate(90deg)'); */
    setTimeout(() => {
        $(".ipad").css('top',$(window).height()*0.5 - $(".ipad").height()*0.5);
        $(".ipad").css('left',$(window).width()*0.5 - $(".ipad").width()*0.5);

        let zoomRatio = Math.max($(window).width() / $(".ipad").width(), $(window).height() / $(".ipad").height()) * 1.1;
        window.scrollTo(0, document.body.scrollHeight);
        $('.ipad').css('transform',`scale(${zoomRatio*1.1})`);


        /* SET THE LOGO TO CENTER OF SCREEN */
        horizontalOffset = $(window).width()*0.5 - $('svg').width()*0.5;
        
        TweenLite.to($('.startLogo'),0,{ x: horizontalOffset,y: $(window).height()*0.5 - $('svg').height()*0.5, force3D:true});
        setTimeout(() => {
            $('.with-whitelogo').css('top',$('.ipad').offset().top + $('.ipad').height() - $('.with-whitelogo').offset().top);
        }, 250);

        AnimationsInit();
        setTimeout(() => {
            $(document).scrollTop(0);

            $(".loader").fadeOut();
        }, 1500);
    }, 1000);
})

function AnimationsInit() {
    gsap.to(".ipad",{
        scrollTrigger:{
            trigger: ".landing-section",
            pin:".ipad",
            start:"top top",
            end:"bottom bottom",
            scrub: true,
        },
    });
    
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

    const t2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".landing-section",
            start: "-20vh top",
            end: "bottom bottom",
            scrub: true,
            toggleActions: "play reverse play reverse"
        }
    });
    t2
        .to('.blackoverlay', { opacity: 1, duration: 0.4, stagger: 0.1, ease: Power2.inOut }); 

    const t3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".landing-section",
            start: "-20vh top",
            end: "bottom bottom",
            scrub: true,
            toggleActions: "play reverse play reverse"
        }
    });
    t3
        .to('.startLogo', { opacity: 1,delay:0.1, duration: 0.4, stagger: 0.1, ease: Power2.inOut }); 

    const headerTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".landing-section",
            start: "-20vh top",
            end: "bottom bottom",
            scrub: true,
            toggleActions: "play reverse play reverse"
        }
    });
    headerTimeline
        .to('header', { opacity: 1,delay:0.4, duration: 0.4, stagger: 0.1, ease: Power2.inOut }); 


    (Array.from($(".col-sm-4"))).forEach((x,i)=>{
        gsap.to(x, {
            opacity: 1,
            top:0,
            ease: 'none',
            scrollTrigger: {
                trigger: x,
                start: `top bottom`,
                end: `${50*i}px 50%`,
                scrub: true
            }
        });
    });

    /* (Array.from($(".altLogo"))).forEach((x, i)=>{

    }) */
}

function logoSwitch () {
      var distance = $('.startLogo').offset().top - $('.altLogo').closest('.row').offset().top;
       $(".altLogo").css('transform',`translate3d(${horizontalOffset}px, ${distance}px, 0px)`);
      
      /* TweenLite.to($('.altLogo'),0,{duration:0, y:distance, x: horizontalOffset, force3D:true}); */
  };
  
  $(document).scroll(function() {logoSwitch();});
  
  logoSwitch();