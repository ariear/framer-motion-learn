"use client"
import { useEffect, useLayoutEffect } from 'react';
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import Link from "next/link";

export default function FooterSection() {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
          const tl1 = gsap.timeline().to('.lineblackfooter', { width: '100%', duration: 1.3 });
          ScrollTrigger.create({
            trigger: '.lineblackfooter',
            animation: tl1,
            start: () => "top 70%",
            end: () => "top top"
          });

          const tl2 = gsap.timeline().to('.subinfofooter', { opacity: 1, duration: 2.5 });
          ScrollTrigger.create({
            trigger: '.subinfofooter',
            animation: tl2,
            start: () => "top 70%",
            end: () => "top top"
          });

          const tl3 = gsap.timeline().to('.btncontact', { opacity: 1, y: 0, duration: 0.8 });
          ScrollTrigger.create({
            trigger: '.btncontact',
            animation: tl3,
            start: () => "top 70%",
            end: () => "top top"
          });

          const tl4 = gsap.timeline().to('.bungkustextfooter p', { y: 0, stagger: 0.2, duration: .7 });
          ScrollTrigger.create({
            trigger: '.bungkustextfooter',
            animation: tl4,
            start: () => "top 70%",
            end: () => "top top"
          });
        });

        return () => ctx.revert();
      }, []);

    return (
        <div className="bg-black py-40 overflow-hidden">
            <div className="text-white container mx-auto px-3 relative">
                <div className="w-0 h-[3px] bg-white mb-14 lineblackfooter"></div>
                <div className="flex items-center justify-between mb-20 opacity-0 subinfofooter">
                    <div className="flex items-center">
                        <img src="/assets/img/segitiga-white.png" className="w-[16px] mr-7" alt="" />
                        <p className="font-poppins font-bold">LETS TALK</p>
                    </div>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                <div className="bungkustextfooter">
                    <p className="text-6xl font-medium leading-tight font-poppins">How <i className="font-bitter">outstanding</i></p>
                </div>
                <div className='bungkustextfooter mb-14'>
                    <p className="text-6xl font-medium leading-tight font-bitter"><i>are you?</i></p>
                </div>
                <Link href="#" className="font-poppins bg-white text-black py-3 px-8 rounded-full text-sm mb-36 block w-max opacity-0 translate-y-5 btncontact">Contact us</Link>

                <div className="flex items-center justify-between font-poppins text-[#ffffffcc]">
                    <div className="flex items-center">
                        <div>
                            <p className="mb-4">Contact</p>
                            <p className="mb-4">+62696969</p>
                            <p>hello@anjai.id</p>
                        </div>
                        <div className="mx-28">
                            <p className="mb-4">Work</p>
                            <p className="mb-4">Services</p>
                            <p>About</p>
                        </div>
                        <div>
                            <p className="mb-4">Instagram</p>
                            <p className="mb-4">Linkedin</p>
                            <p>Facebook</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="mb-2 text-white">EN</p>
                        <p>ID</p>
                    </div>
                </div>

                <img src="/assets/img/bulu.png" className="absolute -bottom-56 right-44 rotate-[30deg]" alt="" />
            </div>
        </div>
    )
}