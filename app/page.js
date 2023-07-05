'use client'

import { motion } from "framer-motion"

const HeadVariants = {
  slide: {
    opacity: [0, 1, 1,1],
    y: [-170, -170, -250],
    transition: {
      duration: 2,
      times: [0.1, 0.4, 0.7],
      ease: ['easeIn','easeOut', 'easeOut'],
      delay: 0.6
    } 
  }
}

export default function Home() {
  return (
    <div className="p-5">
      <motion.img src="https://s1.zerochan.net/Honkai.Star.Rail.600.3492739.jpg" className="rounded-lg mx-auto z-30 relative"
        animate={{ scale: 1.5, y: 500 }}
        transition={{ delay: 0.2 ,duration: 0.6, type: 'spring', stiffness: 30 }} ></motion.img>

      <motion.p className="text-9xl font-bold text-center"
        initial={{y: -130, opacity: 0}}
        variants={HeadVariants}
        animate="slide"
        >Welcome To Home</motion.p>

      <motion.p className="text-center w-[700px] mx-auto"
        initial={{ y: -140, opacity: 0 }}
        animate={{
          opacity: 1,
          y: -220
        }}
        transition={{
          duration: 0.6,
          delay: 1.4
        }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took</motion.p>
    </div>
  )
}