import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"


const Loader = ({ loading, textShowing }) => {
    return (

        <AnimatePresence>
            {loading && (
                <motion.div
                    className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 gap-2 fixed w-full z-1000"
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -200 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                    <h1 className="text-6xl font-bold text-gray-800 mb-6 relative z-10 h-12">Hi</h1>
                    {textShowing && <motion.p
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            type: "spring",
                            stiffness: 100
                        }}
                        className="text-2xl text-gray-600 font-medium relative z-10"
                    >
                        Here You Go
                    </motion.p>}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Loader