'use client'

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

const mentalVariants = {
    pantul: {
        scale: 1.2,
        transition: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: 'reverse'
        }
    }
}

export default function Learn() {
    const [isAppear, setIsAppear] = useState(false)
    const [isToastShow, setIsToastShow] = useState(false)

    const onShowToastHandler = () => {
        setIsToastShow(true)

        setTimeout(() => {
            setIsToastShow(false)
        }, 3000);
    }

    return (
        <div className="p-5">
            <motion.button className="py-2 px-7 mb-8 rounded-full bg-green-400"
          onClick={() => setIsAppear(!isAppear)} 
          whileHover={{scale: 1.1, originX: 0}}
          whileTap={{scale: 0.9, originX: 0}}
          transition={{ type: 'spring', stiffness: 150 }} >Klik Gwej!!</motion.button>
        
          <motion.div className="w-[100px] h-[100px] rounded-xl bg-blue-400"
            initial={{ x: 20 }}
            animate={{x: isAppear ? 400 : 20}}
            transition={{ duration: .4, type: 'spring', stiffness: 200 }} ></motion.div>

            <motion.div 
                variants={mentalVariants}
                animate="pantul"
            className="p-10 rounded-full bg-green-400 w-max my-7"></motion.div>

            <motion.button className="py-3 px-8 rounded-full text-white bg-blue-400" onClick={onShowToastHandler} >Ada Peringatan!!</motion.button>
            <AnimatePresence>
                {
                    isToastShow &&
                    <motion.div className="p-5 w-[400px] rounded-xl bg-green-400 fixed top-10 right-0"
                        initial={{ x: 400 }}
                        animate={{ x: -40 }}
                        exit={{ x: 400 }}>
                        <p>Ini Adalah peringatan berhasil</p>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}