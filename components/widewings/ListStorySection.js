"use client"
import { useEffect, useLayoutEffect } from 'react';
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";

export default function ListStorySection () {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
          const tl1 = gsap.timeline().to('.lineblackliststory', { width: '100%', duration: 1.3 });
          ScrollTrigger.create({
            trigger: '.lineblackliststory',
            animation: tl1,
            start: () => "top 70%",
            end: () => "top top"
          });

          const tl2 = gsap.timeline().to('.subinfoliststory', { opacity: 1, duration: 2.5 });
          ScrollTrigger.create({
            trigger: '.subinfoliststory',
            animation: tl2,
            start: () => "top 70%",
            end: () => "top top"
          });

          const tl3 = gsap.timeline().to('body', { backgroundColor: '#D9D9D9', duration: 1 });
          ScrollTrigger.create({
            trigger: '.wrapliststorysection',
            animation: tl3,
            start: () => "top 70%",
            end: () => "top top"
          });

          const tl4 = gsap.timeline().to('.text-story', { y: 0, stagger: 0.1, duration: .7 });
          ScrollTrigger.create({
            trigger: '.text-story',
            animation: tl4,
            start: () => "top 70%",
            end: () => "top top"
          });
        });

        return () => ctx.revert();
      }, []);

      useEffect(() => {
        const link = document.querySelectorAll('.bungkus');
        const linkHoverReveal = document.querySelectorAll('.hover-reveal');
        const linkImages = document.querySelectorAll('.hidden-img');


        for(let i = 0; i < link.length; i++) {
        link[i].addEventListener('mousemove', (e) => {
            linkHoverReveal[i].style.opacity = 1;
            linkHoverReveal[i].style.transform = `translate(-100%, -50% ) rotate(5deg)`;
            linkImages[i].style.transform = 'scale(1, 1)';
            linkHoverReveal[i].style.left = e.clientX + "px";
        })
        
        link[i].addEventListener('mouseleave', (e) => {
            linkHoverReveal[i].style.opacity = 0;
            linkHoverReveal[i].style.transform = `translate(-50%, -50%) rotate(-5deg)`;
            linkImages[i].style.transform = 'scale(0.8, 0.8)';
        })
        }
      }, [])
      
    return (
        <div className="container mx-auto px-3 mb-28 wrapliststorysection">
            <div className="w-0 h-[3px] bg-black mb-14 lineblackliststory"></div>
            <div className="flex items-center justify-between mb-32 opacity-0 subinfoliststory">
                <div className="flex items-center">
                    <img src="/assets/img/segitiga.png" className="w-[16px] mr-7" alt="" />
                    <p className="font-poppins font-bold">STORIES WE TELL</p>
                </div>
                <div className="w-3 h-3 bg-black rounded-full"></div>
            </div>
            <div className="font-bitter text-7xl text-[#00000077] relative">
                <div className='bungkus mb-7 group'>
                    <p className="flex items-start text-story pt-2 group-hover:text-black">Corporate stories <sup className="text-base font-poppins ml-2 font-medium">01</sup></p>
                    <div className="hover-reveal image01">
                        <img src="https://images.unsplash.com/photo-1688291997328-f67f8f3e0330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=310&q=80" className='hidden-img' alt="" />
                    </div>
                </div>
                <div className='bungkus mb-7 group'>
                    <p className="flex items-start text-story pt-2 group-hover:text-black">Product stories <sup className="text-base font-poppins ml-2 font-medium">02</sup></p>
                    <div className="hover-reveal image01">
                        <img src="https://images.unsplash.com/photo-1688296472826-5b59d5854006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=310&q=80" className='hidden-img' alt="" />
                    </div>
                </div>
                <div className='bungkus mb-7 group'>
                    <p className="flex items-start text-story pt-2 group-hover:text-black">People stories <sup className="text-base font-poppins ml-2 font-medium">03</sup></p>
                    <div className="hover-reveal image01">
                        <img src="https://images.unsplash.com/photo-1688325584752-889090a6a9fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=310&q=80" className='hidden-img' alt="" />
                    </div>
                </div>
                <div className='bungkus mb-7 group'>
                    <p className="flex items-start text-story pt-2 group-hover:text-black">Local stories <sup className="text-base font-poppins ml-2 font-medium">04</sup></p>
                    <div className="hover-reveal image01">
                        <img src="https://images.unsplash.com/photo-1688380303719-bf812819080b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=310&q=80" className='hidden-img' alt="" />
                    </div>
                </div>
                <div className='bungkus mb-7 group'>
                    <p className="flex items-start text-story pt-2 group-hover:text-black">Films <sup className="text-base font-poppins ml-2 font-medium">05</sup></p>
                    <div className="hover-reveal image01">
                        <img src="https://images.unsplash.com/photo-1688291997328-f67f8f3e0330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=310&q=80" className='hidden-img' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}