"use client"
import { useEffect, useLayoutEffect } from 'react';
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";

export default function ClientSection() {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
          const tl1 = gsap.timeline().to('.lineblackclient', { width: '100%', duration: 1.3 });
          ScrollTrigger.create({
            trigger: '.lineblackclient',
            animation: tl1,
            start: () => "top 70%",
            end: () => "top top"
          });

          const tl2 = gsap.timeline().to('.subinfoclient', { opacity: 1, duration: 2.5 });
          ScrollTrigger.create({
            trigger: '.subinfoclient',
            animation: tl2,
            start: () => "top 70%",
            end: () => "top top"
          });

          const tl3 = gsap.timeline().to('.brand', { y: 0, opacity: 1, stagger: 0.1, duration: 0.8 });
          ScrollTrigger.create({
            trigger: '.wrapbrand',
            animation: tl3,
            start: () => "top 70%",
            end: () => "top top"
          });
        });

        return () => ctx.revert();
      }, []);

    return (
        <div className="container mx-auto px-3 wrapclient">
            <div className="w-0 h-[3px] bg-black mb-14 lineblackclient"></div>
            <div className="flex items-center justify-between mb-32 opacity-0 subinfoclient">
                <div className="flex items-center">
                    <img src="/assets/img/segitiga.png" className="w-[16px] mr-7" alt="" />
                    <p className="font-poppins font-bold">OUR CLIENTS</p>
                </div>
                <div className="w-3 h-3 bg-black rounded-full"></div>
            </div>
            <div className='wrapbrand'>
                <div className="flex items-center justify-between mb-28">
                    <img src="/assets/img/1.png" alt="" className='opacity-0 translate-y-2 brand' />
                    <img src="/assets/img/2.png" alt="" className='opacity-0 translate-y-2 brand' />
                    <img src="/assets/img/3.png" alt="" className='opacity-0 translate-y-2 brand' />
                    <img src="/assets/img/4.png" alt="" className='opacity-0 translate-y-2 brand' />
                    <img src="/assets/img/5.png" alt="" className='opacity-0 translate-y-2 brand' />
                </div>
                <div className="flex items-center justify-between mb-28">
                    <img src="/assets/img/6.png" alt="" className='opacity-0 translate-y-2 brand' />
                    <img src="/assets/img/7.png" alt="" className='opacity-0 translate-y-2 brand' />
                    <img src="/assets/img/8.png" alt="" className='opacity-0 translate-y-2 brand' />
                    <img src="/assets/img/9.png" alt="" className='opacity-0 translate-y-2 brand' />
                    <img src="/assets/img/10.png" alt="" className='opacity-0 translate-y-2 brand' />
                </div>
                <div className="flex items-center justify-between mb-28">
                    <img src="/assets/img/11.png" alt="" className='opacity-0 translate-y-2 brand' />
                    <img src="/assets/img/12.png" alt="" className='opacity-0 translate-y-2 brand' />
                    <img src="/assets/img/13.png" alt="" className='opacity-0 translate-y-2 brand' />
                    <img src="/assets/img/14.png" alt="" className='opacity-0 translate-y-2 brand' />
                    <img src="/assets/img/15.png" alt="" className='opacity-0 translate-y-2 brand' />
                </div>
            </div>
        </div>
    )
}