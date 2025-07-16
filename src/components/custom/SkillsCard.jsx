import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"
import { ShineBorder } from "../magicui/shine-border"
import { Badge } from "../ui/badge"


const SkillsCard = ({ skill, index }) => {
    const cardRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ['start end', 'end start']
    })

    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.95])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8])
    const y = useTransform(scrollYProgress, [0, 1], [50, -50])

    const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 })
    const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 })
    const smoothY = useSpring(y, { stiffness: 100, damping: 30 })

    const isEven = index % 2 === 0

    return (
        <div ref={cardRef} className="min-h-screen flex items-center justify-center px-8">
            <motion.div
                className="max-w-6xl w-full"
                style={{
                    scale: smoothScale,
                    opacity: smoothOpacity,
                    y: smoothY,
                }}
            >
                <div className={`grid md:grid-cols-2 text-center md:text-start gap-16 items-center ${isEven ? "" : 'md:grid-flow-col-dense'}`}>
                    <motion.div
                        className={`flex justify-center ${isEven ? "md:order-1" : "md:order-2"}`}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="w-80 h-80 bg-white rounded-3xl shadow-lg border border-gray-200 flex items-center justify-center relative overflow-hidden group cursor-pointer">
                            <ShineBorder shineColor={['#831ED2', '#AFE1AF']} borderWidth={2} />
                            <img className="w-[96px] mb-4" src={skill.icon} />

                            {/* Subtle hover effect */}
                            <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />

                            {/* Category badge */}
                            <Badge className="absolute top-6 right-6 px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                                {skill.category}
                            </Badge>

                            {/* Level badge */}
                            <Badge className="absolute bottom-6 left-6  bg-gray-900 text-white text-sm rounded-full">
                                {skill.level}
                            </Badge>
                        </div>
                    </motion.div>
                    <div className={`space-y-6 shadow-lg ${isEven ? "md:order-2" : "md:order-1"}`}>
                        <motion.h2
                            className="text-5xl md:text-6xl font-bold text-gray-900"
                            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            {skill.name}
                        </motion.h2>

                        <motion.p
                            className="text-xl text-gray-600 leading-relaxed"
                            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            {skill.description}
                        </motion.p>

                        {/* Simple progress line */}
                        <motion.div
                            className="w-full h-px bg-gray-300 relative overflow-hidden"
                            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="h-full bg-gray-900 absolute left-0 top-0"
                                initial={{ width: 0 }}
                                whileInView={{
                                    width:
                                        skill.level === "Expert"
                                            ? "90%"
                                            : skill.level === "Advanced"
                                                ? "75%"
                                                : skill.level === "Intermediate"
                                                    ? "60%"
                                                    : "40%",
                                }}
                                transition={{ duration: 2, delay: 0.8 }}
                                viewport={{ once: true }}
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    )

}

export default SkillsCard