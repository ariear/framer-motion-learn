"use client"
import { useRef, useLayoutEffect } from 'react';
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import Link from "next/link";

export default function DescSection() {
    const koalaRef = useRef(null)
    const aboutBTNRef = useRef(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
          const tl1 = gsap.timeline().to(koalaRef.current, { opacity: 1, duration: 2 });
          ScrollTrigger.create({
            trigger: koalaRef.current,
            animation: tl1,
            start: () => "top 70%",
            end: () => "top top"
          });

          const tl2 = gsap.timeline().to(aboutBTNRef.current, { opacity: 1, delay: 0.3, duration: 2 });
          ScrollTrigger.create({
            trigger: '.text-desc-wrap',
            animation: tl2,
            start: () => "top 70%",
            end: () => "top top"
          });

          gsap.to(".text-desc-wrap p", {
            backgroundPositionX: '0%',
            stagger: 1,
            scrollTrigger: {
                trigger: '.text-desc-wrap p',
                scrub: 3,
                start: 'top center',
                end: 'bottom 70px'
            }
          })
        });

        return () => ctx.revert();
      }, []);

    return (
        <div className="container mx-auto px-3 mb-32 flex items-center justify-between font-poppins" data-speed="1.4">
            <div className="text-5xl font-medium">
                <div className='text-desc-wrap'>
                    <p className="mb-4">Wide Wings is an audiovisual</p>
                    <p className="mb-4">Communication agency surrounded by</p>
                    <p className="mb-4">Comperehensive storytellers with years of</p>
                    <p className="mb-4">experience in creative and artistic activities,</p>
                    <p className="mb-20">advertisin, and film industry sectors.</p>
                </div>

                <Link href="#" className="bg-black text-white py-3 px-8 rounded-full text-base opacity-0" ref={aboutBTNRef}>About us</Link>
            </div>
            <div>
                <img src="/assets/img/koala.png" alt="" className="w-[300px] opacity-0" ref={koalaRef} />
            </div>
        </div>
    )
}