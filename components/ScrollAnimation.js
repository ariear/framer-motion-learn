"use client"
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ScrollAnimation = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll(containerRef);

  const rotateValue = useTransform(
    scrollY,
    [0, 500], // Putaran pertama terjadi ketika scroll mencapai 200 pixel
    [0, 360] // Mengubah rentang animasi putaran dari 0 hingga 360 derajat
  );

  const translateXValue = useTransform(
    scrollY,
    [200, 800], // Perpindahan ke kanan terjadi ketika scroll mencapai 400 pixel
    [-400, 90] // Mengubah rentang perpindahan horizontal dari 0 hingga 200 pixel
  );

  return (
    <section className="scroll-container" ref={containerRef}>
      <div className="copy">
        <h2>Lorem ipsum dolor sit amet</h2>
      </div>
      <div className="img-container">
        <motion.div
          className="img-inner"
          style={{
            rotate: rotateValue,
            translateX: translateXValue,
          }}
        >
          <img src="/assets/plant1.jpg" alt="a green plant" className="daun" />
        </motion.div>
      </div>
    </section>
  );
};

