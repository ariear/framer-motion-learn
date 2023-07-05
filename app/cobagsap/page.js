'use client'
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const CobaGsap = () => {
  const trigger1 = useRef();
  const trigger2 = useRef();
  const rootDiv = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollSmoother.create({
        smooth: 1,
        effects: true,
        smoothTouch: 0.1
      });
      const tl1 = gsap.timeline().to(".animDiv1", { scale: 1 });
      const tl2 = gsap.timeline().to(".animDiv2", { scale: 1 });
      ScrollTrigger.create({
        trigger: trigger1.current,
        animation: tl1,
        start: () => "top top",
        end: () => `+=${trigger1.current.offsetHeight * 0.5}`,
        scrub: true
      });
      ScrollTrigger.create({
        trigger: trigger2.current,
        animation: tl2,
        start: () => "top top",
        end: () => `+=${trigger2.current.offsetHeight * 0.5}`,
        scrub: true
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div>
            <div className=" triggers relative z-50 w-fit mx-auto">
              <div
                ref={trigger1}
                className=" text-blue-400 font-bold w-10 h-[200vh] bg-[#FFC000] "
              ></div>
              <div
                ref={trigger2}
                className=" text-blue-400 font-bold w-10 h-[200vh] bg-green-500 "
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative" ref={rootDiv}>
        {/* <div className="fixed" ref={rootDiv}> */}
        <div className="animDiv1 fixed top-0 z-10 w-screen h-screen bg-blue-500 scale-[30%]"></div>
        <div className="animDiv2 fixed top-0 z-20 w-screen h-screen bg-red-500 scale-0"></div>
      </div>
    </>
  );
};

export default CobaGsap;
