import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const PinEffect = () => {

    useEffect(() => {
        // Define initial animation
        const initialAnimation = gsap.from(".pinnedBox", {
        //   x: -300,
          // opacity: 0,
          duration: 6,
        });
    
        // Define alternate animation
        const alternateAnimation = gsap.from(".pinnedBox", {
        //   x: 600,
          // opacity: 0,
          duration: 10,
        });
    
        // Create triggers based on different ScrollTrigger conditions
        gsap.utils.toArray(".pinnedBox").forEach((element) => {
          ScrollTrigger.create({
            trigger: element,
            start: "top 50%",
            end: "top 0%",
            pin: true,
            scrub: 4,
            toggleActions: "restart none none none",
            // markers: true,
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
    <div className='pinContainer flex min-h-[60vh] border-3y border-green-800y'>
      <div className='flex flex-col gap-4 justify-center items-center w-[60%] border-2y border-yellow-600y'>
            <div className='h-[250px] w-[250px] bg-[purple]'></div>
            <div className='h-[250px] w-[250px] bg-[green]'></div>
            <div className='h-[250px] w-[250px] bg-[blue]'></div>
            <div className='h-[250px] w-[250px] bg-[orange]'></div>
      </div>
      <div className='flex justify-center items-center w-[40%] border-2y border-red-600y'>
            <div className='pinnedBox h-[300px] w-[300px] bg-black'></div>
      </div>
    </div>
  )
}

export default PinEffect
