import { motion } from "framer-motion"
import { Card } from "../ui/card"

const SkillsSection = () => {
    return (
        <section>
            <div className="overflow-hidden mt-16">
                <motion.div className="flex whitespace-nowrap">
                    <div className="inline-block whitespace-nowrap animate-marquee-reverse">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <span key={i} className=" text-7xl md:text-8xl lg:text-9xl font-black text-gray-900 leading-none inline-block select-none">
                                SKILLS • AND • EXPERTISE •
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>

            <article className="md:items-center sm:flex gap-8 items-center lg:max-w-[1252px] mx-auto justify-between pt-12">
                
            </article>

        </section>
    )
}

export default SkillsSection