gsap.registerPlugin(ScrollTrigger);

const el = document.querySelector(".square")


gsap.from(el, {
    duration: 10, // Duration of the animation in seconds
    x: 690,
    scrollTrigger:{
        trigger: el,
        start: "top 60%",
        end: "top 30%",
        toggleActions: "restart none none reverse",
        // markers: true
    }      // Move the element 100px from its initial position to the right
   
  })

  gsap.to(el, {
    x: -850,
    duration:10,
    scrollTrigger:{
        trigger: el,
        start: "top 60%",
        end: "top 30%",
        toggleActions: "restart none none reverse",
    }
  })



