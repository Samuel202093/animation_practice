import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)



const Test = () => {
  useEffect(() => {
    // Define initial animation
    const initialAnimation = gsap.from(".animate-on-scroll", {
      x: -300,
      // opacity: 0,
      duration: 6,
    });

    // Define alternate animation
    const alternateAnimation = gsap.from(".animate-on-scroll", {
      x: 600,
      // opacity: 0,
      duration: 10,
    });

    // Create triggers based on different ScrollTrigger conditions
    gsap.utils.toArray(".animate-on-scroll").forEach((element) => {
      ScrollTrigger.create({
        trigger: element,
        start: "top 60%",
        end: "top 20%",
        scrub: 4,
        toggleActions: "restart none none none",
        // scrub: 1,
        // animation: initialAnimation,
        animation:alternateAnimation,
        onUpdate: (self) => {
          if (self.isActive) {
            // self.animation = initialAnimation;
            self.animation = alternateAnimation;
          } else {
            self.animation = alternateAnimation;
          }
        },
      });
    });

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill(); // Kill all ScrollTriggers to avoid memory leaks
      });
    };
  }, []);

  return (
    <div className="h-[50vh] border-2 border-green-700">
    <div className="animate-on-scroll border-2y border-red-800y bg-[purple] h-[300px] w-[300px]">
         Scroll Animated Component
    </div>
  </div>

  )
}

export default Test
