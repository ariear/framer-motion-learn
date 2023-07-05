"use client"
import { ScrollAnimation } from "@/components/ScrollAnimation";

export default function CobaScrollTrigger () {
    return (
        <div>
            <div className="h-[80vh]">
                <p>HO</p>
            </div>
            <ScrollAnimation />
            <div className="h-[100vh]">
                <p>HO</p>
            </div>
        </div>
    )
}