"use client"
import { useEffect, useRef, useLayoutEffect } from 'react';
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";

export default function Head() {
    const videoRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
          const tl1 = gsap.timeline().to("#myVideo", { width: '100%', height: 800, translateY: -240 });
          
          ScrollTrigger.create({
            trigger: videoRef.current,
            animation: tl1,
            start: () => "top 400px",
            end: () => "top top",
            scrub: 2
          });
        });

        return () => ctx.revert();
      }, []);

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
        const playPromise = video.play();

        if (playPromise !== undefined) {
            playPromise
            .then(() => {
                // Video berhasil diputar
            })
            .catch((error) => {
                // Error saat memutar video
                console.log(error);
            });
        }
        }
    }, []);

    return (
        <div>
            <div className="container mx-auto py-10 px-3">
                <p className="text-8xl w-[450px] pt-14">We Prove How</p>
                <p className="text-8xl w-[600px] text-end ml-auto font-bitter italic -translate-y-24 z-10 relative">Outstanding You Are</p>
            </div>
            <video ref={videoRef} autoplay muted loop playsInline id="myVideo" className="w-[1500px] h-[700px] object-cover object-center mx-auto -translate-y-48">
            <source src="/assets/videos/industry.mp4" type="video/mp4" />
            </video>
        </div>
    )
}