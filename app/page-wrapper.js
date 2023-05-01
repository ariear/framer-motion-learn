'use client'

import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from 'next/navigation';

export const PageWrapper = ({ children }) => {
    const { asPath } = useRouter();

    return (
    <>
        <AnimatePresence mode="popLayout" >
            <motion.div
            initial={{ y: 15 }}
            animate={{ y: 0 }}
            exit={{ y: 400, opacity: 0 }}
            key={asPath}>
                {children}
            </motion.div>
        </AnimatePresence>
    </>
    )
}