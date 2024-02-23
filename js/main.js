document.addEventListener('DOMContentLoaded', () => {

    let front = document.getElementById('front');
    let front2 = document.getElementById('front2');
    let planet = document.getElementById('planet');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    planet.style.marginTop  = value * 0.7 + 'px';
    // front.style.marginTop  = value * 0.4 + 'px';
    // front2.style.maskPosition = "100% 0%"

    if(value > 50) {
        let tl = gsap.timeline({})

        tl
        .to('.bg_overlay', { duration: 1.5, height: 0, ease: "expo.out" })
    }
    
});


    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        autoplay:{
            delay: 20000
        },
        effect: 'cube',
        cubeEffect: {
          slideShadows: false,
          shadow: false,
        },
    
        // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        // },
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      })







gsap.registerPlugin(ScrollTrigger);

// Work Horizontal Animation

const allImage = document.querySelector('.work__imageWrap--item');
const imgWidth = 336 + 20;
const imageQuantity = 11;

let allImageWidth = imgWidth * imageQuantity;

let amountToScroll = allImageWidth - window.innerWidth;

// console.log(allImageWidth);
// console.log(amountToScroll);
// console.log(window.innerWidth);

// gsap.to(allImage, {
//     x: -amountToScroll,
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".work",
//         start: "top 0px",
//         // end: "bottom 20px",
//         // snap: 0.3,
//         pin: true,
//         scrub: 1,
//     }
// })

const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Ads Section Snap Animation 


var tl = gsap.timeline({})

tl
.to('.displayAd', {
    delay: 0.1,
    scrollTrigger: {
        trigger: ".displayAd",
        // markers: true,
        scrub: 1
    },
    ease: 'expo.out'
})

.to('.dynamicAd', {
    scrollTrigger: {
        trigger: ".dynamicAd",
        // markers: true,
        scrub: 1
    },
    ease: 'expo.out'
})

.to('.weboramaAd', {
    scrollTrigger: {
        trigger: ".weboramaAd",
        // markers: true,
        scrub: 1
    },
    ease: 'expo.out'
})


gsap.from(".displayAd__head", {
    x: '20%',
    y: '15%',
    stagger: 0.2,
    opacity: 0,
    scrollTrigger: {
      trigger: ".displayAd",
      start: "top center",
      end: "top 30vh",
      scrub: true,
    }
});


gsap.from(".dynamicAd__head", {
    x: '20%',
    y: '15%',
    stagger: 0.2,
    opacity: 0,
    scrollTrigger: {
      trigger: ".dynamicAd",
      start: "top center",
      end: "top 30vh",
      scrub: true,
    }
});

gsap.from(".weboramaAd__head", {
    x: '20%',
    y: '15%',
    stagger: 0.2,
    opacity: 0,
    scrollTrigger: {
      trigger: ".weboramaAd",
      start: "top center",
      end: "top 30vh",
      scrub: true,
    }
});


gsap.from(".shadowAd__head", {
    x: '20%',
    y: '15%',
    stagger: 0.2,
    opacity: 0,
    scrollTrigger: {
      trigger: ".shadowAd",
      start: "top center",
      end: "top 30vh",
      scrub: true,
    }
});
// gsap.to('.weboramaAd', { duration: 2, scrollTo: 250 });
// var t3 = gsap.timeline({})

// .to('.workflow__reveal--content', {
//     scrollTrigger: {
//         trigger: ".workflow",
//         start: "bottom 30px",
//         
//         // scrub: 1
//     },
//     height: b,
//     ease: 'expo.out',

// })




const revealDiv = document.querySelector('.workflow__reveal--content');

let revealDivheight = revealDiv.clientHeight;
let reveal = revealDivheight - window.innerHeight;

console.log(revealDivheight)
console.log(reveal)


// let amountToScrolld = allImageWidth - window.innerWidth;



    $(document).ready(function(){

        var content = $('.workflow__reveal--content');
        var contentHeight = content.height();
        
        $(window).scroll(function(){

            var scrollTop = $(this).scrollTop();
            // if((scrollTop > 1000)) {
                content.height(contentHeight - scrollTop);
            // }
        });
    });


});



