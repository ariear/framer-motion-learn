'use client'
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";
import AboutSection from "@/components/widewings/AboutSection";
import ClientSection from "@/components/widewings/ClientSection";
import DescSection from "@/components/widewings/DescSection";
import FooterSection from "@/components/widewings/FooterSection";
import Head from "@/components/widewings/Head";
import ListStorySection from "@/components/widewings/ListStorySection";
import Navbar from "@/components/widewings/Navbar";
import PictureSection from "@/components/widewings/PictureSection";
import StorySection from "@/components/widewings/StorySection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function WideWings() {

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
          ScrollSmoother.create({
            smooth: 1,
            effects: true,
            smoothTouch: 0.1
          });
        });
        return () => ctx.revert();
      }, []);

    return (
        <div id="smooth-wrapper">
        <div id="smooth-content">
        <div>
            <Navbar />
            <Head />
            <DescSection />
            <StorySection />
            <ListStorySection />
            <PictureSection />
            <AboutSection />
            <ClientSection />
            <FooterSection />
        </div>
        </div>
        </div>
    )
}