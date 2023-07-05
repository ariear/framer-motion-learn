"use client"
import { useRef, useLayoutEffect } from 'react';
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import Link from "next/link";

export default function AboutSection() {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
          const tl2 = gsap.timeline().to('.btnabout', { opacity: 1, delay: 0.3, duration: 2 });
          ScrollTrigger.create({
            trigger: '.text-desc-wrap2',
            animation: tl2,
            start: () => "top 70%",
            end: () => "top top"
          });

          gsap.to(".text-desc-wrap2 p", {
            backgroundPositionX: '0%',
            stagger: 1,
            scrollTrigger: {
                trigger: '.text-desc-wrap2 p',
                scrub: 3,
                start: 'top center',
                end: 'bottom 20%'
            }
          })
        });

        return () => ctx.revert();
      }, []);

    return (
        <div className="container mx-auto px-3 font-poppins mb-36">
            <div className='mb-24 text-desc-wrap2'>
                <p className="text-5xl font-medium w-[830px] leading-tight">We create beautiful stories about companies that are both true and meaningful for their clients.</p>
            </div>
            <Link href="#" className="bg-black text-white py-3 px-8 rounded-full text-sm opacity-0 btnabout">About us</Link>
        </div>
    )
}