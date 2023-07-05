"use client"
import { useLayoutEffect } from 'react';
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import Link from "next/link";

export default function StorySection() {

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
          const tl1 = gsap.timeline().to('.lineblack', { width: '100%', duration: 1.3 });
          ScrollTrigger.create({
            trigger: '.lineblack',
            animation: tl1,
            start: () => "top 70%",
            end: () => "top top"
          });

          const tl2 = gsap.timeline().to('.subinfo', { opacity: 1, duration: 2.5 });
          ScrollTrigger.create({
            trigger: '.subinfo',
            animation: tl2,
            start: () => "top 70%",
            end: () => "top top"
          });

          const tl3 = gsap.timeline().to('.story', { y: 0, opacity: 1, stagger: 0.2, duration: 1 });
          ScrollTrigger.create({
            trigger: '.wrapstorysection',
            animation: tl3,
            start: () => "top 70%",
            end: () => "top top"
          });

          const tl4 = gsap.timeline().to('.action-story', { y: 0, opacity: 1, duration: 1, delay: 0.4 });
          ScrollTrigger.create({
            trigger: '.wrapstorysection',
            animation: tl4,
            start: () => "top 30%",
            end: () => "top top"
          });
        });

        return () => ctx.revert();
      }, []);
      
    return (
        <div className="container mx-auto px-3 mb-32 wrapstorysection">
            <div className="w-0 h-[3px] bg-black mb-14 lineblack"></div>
            <div className="flex items-center justify-between mb-20 opacity-0 subinfo">
                <div className="flex items-center">
                    <img src="/assets/img/segitiga.png" className="w-[16px] mr-7" alt="" />
                    <p className="font-poppins font-bold">STORIES WE TELL</p>
                </div>
                <div className="w-3 h-3 bg-black rounded-full"></div>
            </div>
            
            <div className="font-poppins flex items-center justify-between mb-20">
                <div className="w-[450px] story translate-y-20 opacity-0">
                    <img src="/assets/img/pemandangan.jpg" className="w-[450px] h-[300px] object-cover mb-6" alt="" />
                    <p className="font-semibold text-xl mb-3">Birzi duona</p>
                    <p className="text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend lacinia magna eu dapibus. Interdum et malesuada fames ac</p>
                </div>
                <div className="w-[450px] story translate-y-20 opacity-0">
                    <img src="https://images.unsplash.com/photo-1683009427660-b38dea9e8488?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" className="w-[450px] h-[300px] object-cover mb-6" alt="" />
                    <p className="font-semibold text-xl mb-3">Birzi duona</p>
                    <p className="text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend lacinia magna eu dapibus. Interdum et malesuada fames ac</p>
                </div>
                <div className="w-[450px] story translate-y-20 opacity-0">
                    <img src="https://images.unsplash.com/photo-1682687219356-e820ca126c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" className="w-[450px] h-[300px] object-cover mb-6" alt="" />
                    <p className="font-semibold text-xl mb-3">Birzi duona</p>
                    <p className="text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend lacinia magna eu dapibus. Interdum et malesuada fames ac</p>
                </div>
            </div>
            <div className="font-poppins flex items-center justify-between translate-y-10 opacity-0 action-story">
                <Link href="#" className="bg-black text-white py-3 px-8 rounded-full text-sm">All stories</Link>
                <div className="flex items-center">
                    <img src="/assets/img/right.png" alt="" className="bg-[#00000044] py-2 px-6 rounded-full rotate-180 mr-4" />
                    <img src="/assets/img/right.png" alt="" className="bg-black py-2 px-6 rounded-full" />
                </div>
            </div>
        </div>
    )
}