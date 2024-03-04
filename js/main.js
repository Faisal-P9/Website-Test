document.addEventListener('DOMContentLoaded', () => {
    let front2 = document.getElementById('front2');

    let tHeader = gsap.timeline({})

    tHeader
    .to(front2, { duration: 2, maskPosition: "0% 0%", ease: "steps(30)" })



window.addEventListener('scroll', () => {
    let planet = document.getElementById('planet');

    let value = window.scrollY;

    planet.style.marginTop  = value * 0.7 + 'px';
    // front.style.marginTop  = value * 0.4 + 'px';
    // front2.style.maskPosition = "100% 0%"


});


var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay:{
        delay: 20000
    },
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
        slideShadows: false,
        shadow: false,
    },

      // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


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
        // snap: 0.5,
        // markers: true,
        // scrub: 1
    },
    ease: 'expo.out'
})

.to('.dynamicAd', {
    scrollTrigger: {
        trigger: ".dynamicAd",
        // snap: 0.5,
        // markers: true,
        // scrub: 1
    },
    ease: 'expo.out'
})

.to('.shadowAd', {
    scrollTrigger: {
        trigger: ".shadowAd",
        // snap: 0.5,
        // scrub: 1
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
      // end: "top 30vh",
      // scrub: true,
      toggleActions: "restart none none none",
    },
    
});


gsap.from(".dynamicAd__head", {
    x: '20%',
    y: '15%',
    stagger: 0.2,
    opacity: 0,
    scrollTrigger: {
      trigger: ".dynamicAd",
      start: "top center",
      // end: "top 30vh",
      // scrub: true,
      toggleActions: "restart none none none",
    }
});

gsap.from(".swipe_hand", {
  rotation: '15deg',
  duration: 0.6,
  repeatDelay: 0.3,
  repeat: 4,
  scrollTrigger: {
    trigger: ".displayAd",
    start: "top center",
    // end: "top 30vh",
    // scrub: true,
    toggleActions: "restart none none none",
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
      // end: "top 30vh",
      // scrub: true,
      toggleActions: "restart none none none",
    }
});

gsap.from('.weboramaAd__images--back', {
  scrollTrigger: {
      trigger: ".weboramaAd",
      start: 'top 100vh',
  },
  ease: 'expo.out',
  scale: 0,
  delay: 2
})

gsap.from(".shadowAd__head", {
    x: '20%',
    y: '15%',
    stagger: 0.2,
    opacity: 0,
    scrollTrigger: {
      trigger: ".shadowAd",
      start: "top center",
      // end: "top 30vh",
      // scrub: true,
      toggleActions: "restart none none none",
    }
});
// gsap.to('.weboramaAd', { duration: 2, scrollTo: 250 });
// var t3 = gsap.timeline({})

// .to('.workflow__reveal--content', {
//     scrollTrigger: {
//         trigger: ".workflow",
//         start: "bottom 30px",
//         // snap: 0.5,
//         // scrub: 1
//     },
//     height: b,
//     ease: 'expo.out',

// })


gsap.to(".displayAd__heading", {
  backgroundPosition: "100% 100%",
  scrollTrigger: {
    trigger: ".displayAd",
    start: "top 70vh",
    end: "top -50vh",
    scrub: true,
    toggleActions: "restart none none none",
  }
});


gsap.to(".dynamicAd__heading", {
  backgroundPosition: "100% 30%",
  scrollTrigger: {
    trigger: ".dynamicAd",
    start: "top 70vh",
    end: "top -500px",
    scrub: true,
    toggleActions: "restart none none none",
  }
});


gsap.to(".weboramaAd__heading", {
  backgroundPosition: "100% -35%",
  scrollTrigger: {
    trigger: ".weboramaAd",
    start: "top 90vh",
    end: "top -500px",
    scrub: true,
    toggleActions: "restart none none none",
  }
});

gsap.to(".shadowAd__heading", {
  backgroundPosition: "100% -25%",
  scrollTrigger: {
    trigger: ".shadowAd",
    start: "top 90vh",
    end: "top -500px",
    scrub: true,
    toggleActions: "restart none none none",
  }
});



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

    








    let active = false;

    let selectOne = document.getElementById('shadowAd__select--one');
    let selectTwo = document.getElementById('shadowAd__select--two');
    let selectThree = document.getElementById('shadowAd__select--three');
    let selectFour = document.getElementById('shadowAd__select--four');

    var beforeOne = document.getElementsByClassName('before_1');
    var afterOne = document.getElementsByClassName('after_1');
    
    var beforeTwo = document.getElementsByClassName('before_2');
    var afterTwo = document.getElementsByClassName('after_2');
    
    var beforeThree = document.getElementsByClassName('before_3');
    var afterThree = document.getElementsByClassName('after_3');

    var beforeFour = document.getElementsByClassName('before_4');
    var afterFour = document.getElementsByClassName('after_4');
  

    selectOne.addEventListener('click', function() {

      beforeOne[0].style.display = "block";
      afterOne[0].style.display = "block";
      beforeTwo[0].style.display = "none";
      afterTwo[0].style.display = "none";
      beforeThree[0].style.display = "none";
      afterThree[0].style.display = "none";
      beforeFour[0].style.display = "none";
      afterFour[0].style.display = "none";

      document.querySelector(".after_1").style.width = "175px";
      document.querySelector(".scroller").style.left = "150px";
      
    });

    selectTwo.addEventListener('click', function() {

      beforeOne[0].style.display = "none";
      afterOne[0].style.display = "none";
      beforeTwo[0].style.display = "block";
      afterTwo[0].style.display = "block";
      beforeThree[0].style.display = "none";
      afterThree[0].style.display = "none";
      beforeFour[0].style.display = "none";
      afterFour[0].style.display = "none";

      document.querySelector(".after_2").style.width = "232px";
      document.querySelector(".scroller").style.left = "207px";
    });

    selectThree.addEventListener('click', function() {

      beforeOne[0].style.display = "none";
      afterOne[0].style.display = "none";
      beforeTwo[0].style.display = "none";
      afterTwo[0].style.display = "none";
      beforeThree[0].style.display = "block";
      afterThree[0].style.display = "block";
      beforeFour[0].style.display = "none";
      afterFour[0].style.display = "none";

      document.querySelector(".after_3").style.width = "175px";
      document.querySelector(".scroller").style.left = "150px";
    });

    selectFour.addEventListener('click', function() {

      beforeOne[0].style.display = "none";
      afterOne[0].style.display = "none";
      beforeTwo[0].style.display = "none";
      afterTwo[0].style.display = "none";
      beforeThree[0].style.display = "none";
      afterThree[0].style.display = "none";
      beforeFour[0].style.display = "block";
      afterFour[0].style.display = "block";

      document.querySelector(".after_4").style.width = "232px";
      document.querySelector(".scroller").style.left = "207px";
    });

// First we'll have to set up our event listeners
// We want to watch for clicks on our scroller
document.querySelector(".scroller").addEventListener("mousedown", function () {
  active = true;
  // Add our scrolling class so the scroller has full opacity while active
  document.querySelector(".scroller").classList.add("scrolling");
});
// We also want to watch the body for changes to the state,
// like moving around and releasing the click
// so let's set up our event listeners
document.body.addEventListener("mouseup", function () {
  active = false;
  document.querySelector(".scroller").classList.remove("scrolling");
});
document.body.addEventListener("mouseleave", function () {
  active = false;
  document.querySelector(".scroller").classList.remove("scrolling");
});

// Let's figure out where their mouse is at
document.body.addEventListener("mousemove", function (e) {
  if (!active) return;
  // Their mouse is here...
  let x = e.pageX;
  // but we want it relative to our wrapper
  x -= document.querySelector(".wrapper").getBoundingClientRect().left;
  // Okay let's change our state
  scrollIt(x);
});

// Let's use this function
function scrollIt(x) {

  var beforeOne = document.getElementsByClassName('before_1');
  var afterOne = document.getElementsByClassName('after_1');
  
  var beforeTwo = document.getElementsByClassName('before_2');
  var afterTwo = document.getElementsByClassName('after_2');
  
  var beforeThree = document.getElementsByClassName('before_3');
  var afterThree = document.getElementsByClassName('after_3');

  var beforeFour = document.getElementsByClassName('before_4');
  var afterFour = document.getElementsByClassName('after_4');

  if(beforeOne[0].clientWidth > 0 || afterOne[0].clientWidth > 0) {
    let transform = Math.max(
      0,
      Math.min(x, document.querySelector(".wrapper").offsetWidth)
    );

    document.querySelector(".after_1").style.width = transform + "px";
    document.querySelector(".scroller").style.left = transform - 25 + "px";
  }
  if(beforeTwo[0].clientWidth > 0 || afterTwo[0].clientWidth > 0) {
    let transform = Math.max(
      0,
      Math.min(x, document.querySelector(".wrapper").offsetWidth)
    );
    document.querySelector(".after_2").style.width = transform + "px";
    document.querySelector(".scroller").style.left = transform - 25 + "px";
  }
  if(beforeThree[0].clientWidth > 0 || afterThree[0].clientWidth > 0) {
    let transform = Math.max(
      0,
      Math.min(x, document.querySelector(".wrapper").offsetWidth)
    );
    document.querySelector(".after_3").style.width = transform + "px";
    document.querySelector(".scroller").style.left = transform - 25 + "px";
  }
  if(beforeFour[0].clientWidth > 0 || afterFour[0].clientWidth > 0) {
    let transform = Math.max(
      0,
      Math.min(x, document.querySelector(".wrapper").offsetWidth)
    );
    document.querySelector(".after_4").style.width = transform + "px";
    document.querySelector(".scroller").style.left = transform - 25 + "px";
  }
  
}

// Let's set our opening state based off the width,
// we want to show a bit of both images so the user can see what's going on
scrollIt(150);

// And finally let's repeat the process for touch events
// first our middle scroller...
document.querySelector(".scroller").addEventListener("touchstart", function () {
  active = true;
  document.querySelector(".scroller").classList.add("scrolling");
});
document.body.addEventListener("touchend", function () {
  active = false;
  document.querySelector(".scroller").classList.remove("scrolling");
});
document.body.addEventListener("touchcancel", function () {
  active = false;
  document.querySelector(".scroller").classList.remove("scrolling");
});









    
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(Draggable)

gsap.set('.box', {
  yPercent: -50,
})

const STAGGER = 0.1
const DURATION = 1
const OFFSET = 0
const BOXES = gsap.utils.toArray('.box')

const LOOP = gsap.timeline({
  paused: true,
  repeat: -1,
  ease: 'none',
})

const SHIFTS = [...BOXES, ...BOXES, ...BOXES]

SHIFTS.forEach((BOX, index) => {
  const BOX_TL = gsap
    .timeline()
    .set(BOX, {
      xPercent: 250,
      rotateY: -50,
      opacity: 0,
      scale: 0.5,
    })
    // Opacity && Scale
    .to(
      BOX,
      {
        opacity: 1,
        scale: 1,
        duration: 0.1,
      },
      0
    )
    .to(
      BOX,
      {
        opacity: 0,
        scale: 0.5,
        duration: 0.1,
      },
      0.9
    )
    // Panning
    .fromTo(
      BOX,
      {
        xPercent: 250,
      },
      {
        xPercent: -350,
        duration: 1,
        immediateRender: false,
        ease: 'power1.inOut',
      },
      0
    )
    // Rotations
    .fromTo(
      BOX,
      {
        rotateY: -50,
      },
      {
        rotateY: 50,
        immediateRender: false,
        duration: 1,
        ease: 'power4.inOut',
      },
      0
    )
    // Scale && Z
    .to(
      BOX,
      {
        z: 100,
        scale: 1.25,
        duration: 0.1,
        repeat: 1,
        yoyo: true,
      },
      0.4
    )
    .fromTo(
      BOX,
      {
        zIndex: 1,
      },
      {
        zIndex: BOXES.length,
        repeat: 1,
        yoyo: true,
        ease: 'none',
        duration: 0.5,
        immediateRender: false,
      },
      0
    )
  LOOP.add(BOX_TL, index * STAGGER)
})

const CYCLE_DURATION = STAGGER * BOXES.length
const START_TIME = CYCLE_DURATION + DURATION * 0.5 + OFFSET

const LOOP_HEAD = gsap.fromTo(
  LOOP,
  {
    totalTime: START_TIME,
  },
  {
    totalTime: `+=${CYCLE_DURATION}`,
    duration: 1,
    ease: 'none',
    repeat: -1,
    paused: true,
  }
)

const PLAYHEAD = {
  position: 0,
}

const POSITION_WRAP = gsap.utils.wrap(0, LOOP_HEAD.duration())

const SCRUB = gsap.to(PLAYHEAD, {
  position: 0,
  onUpdate: () => {
    LOOP_HEAD.totalTime(POSITION_WRAP(PLAYHEAD.position))
  },
  paused: true,
  duration: 0.25,
  ease: 'power3',
})

let iteration = 0
const TRIGGER = ScrollTrigger.create({
  start: 0,
  end: '+=2000',
  horizontal: false,
//   pin: '.boxes',
  onUpdate: self => {
    const SCROLL = self.scroll()
    if (SCROLL > self.end - 1) {
      // Go forwards in time
      WRAP(1, 1)
    } else if (SCROLL < 1 && self.direction < 0) {
      // Go backwards in time
      WRAP(-1, self.end - 1)
    } else {
      const NEW_POS = (iteration + self.progress) * LOOP_HEAD.duration()
      SCRUB.vars.position = NEW_POS
      SCRUB.invalidate().restart()
    }
  },
})

const WRAP = (iterationDelta, scrollTo) => {
  TRIGGER.update()
}

const SNAP = gsap.utils.snap(1 / BOXES.length)

let boxe = document.getElementById('boxe');
const progressToScroll = progress =>
  gsap.utils.clamp(
    1,
    TRIGGER.end - 1,
    gsap.utils.wrap(0, 1, progress) * TRIGGER.end
  )

const scrollToPosition = position => {
  const SNAP_POS = SNAP(position)
  const PROGRESS =
    (SNAP_POS - LOOP_HEAD.duration() * iteration) / LOOP_HEAD.duration()
  const SCROLL = progressToScroll(PROGRESS)
  if (PROGRESS >= 1 || PROGRESS < 0) return WRAP(Math.floor(PROGRESS), SCROLL)
  TRIGGER.scroll(SCROLL)
}

const scrollToPosition2 = position => {
    const SNAP_POS = SNAP(position)
    const PROGRESS =
      (SNAP_POS - LOOP_HEAD.duration() * iteration) / LOOP_HEAD.duration()
    const SCROLL = progressToScroll(PROGRESS)
    if (PROGRESS >= 1 || PROGRESS < 0) return WRAP(Math.floor(PROGRESS), SCROLL)
    TRIGGER.scroll(SCROLL)
  }


document.addEventListener('keydown', event => {
  if (event.code === 'ArrowLeft' || event.code === 'KeyA') NEXT()
  if (event.code === 'ArrowRight' || event.code === 'KeyD') PREV()
})

document.querySelector('.boxes').addEventListener('click', e => {
  const BOX = e.target.closest('.box')
  if (BOX) {
    // let TARGET = BOXES.indexOf(BOX)
    let CURRENT = gsap.utils.wrap(
      0,
  
    )
  }
})



gsap.set('.box', { display: 'block' })

gsap.set('button', {
  z: 200,
})

Draggable.create('.drag-proxy', {
  type: 'x',
  trigger: '.box',
  onPress() {
    this.startOffset = SCRUB.vars.position
  },
  onDrag() {
    SCRUB.vars.position = this.startOffset + (this.startX - this.x) * 0.001
    SCRUB.invalidate().restart() // same thing as we do in the ScrollTrigger's onUpdate
  },
  onDragEnd() {
    // scrollToPosition(SCRUB.vars.position)
  },
})



});



