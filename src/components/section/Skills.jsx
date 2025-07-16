import { motion } from "framer-motion"
import SkillsCard from "../custom/SkillsCard"
import { skills } from "@/store/data"

const SkillsSection = () => {
    return (
        <section>
            <header className="overflow-hidden mt-16">
                <motion.div className="flex whitespace-nowrap">
                    <div className="inline-block whitespace-nowrap animate-marquee-reverse">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <span key={i} className=" text-7xl md:text-8xl lg:text-9xl font-black text-gray-900 leading-none inline-block select-none">
                                SKILLS • AND • EXPERTISE •
                            </span>
                        ))}
                    </div>
                </motion.div>
            </header>

            <div className="relative">
                {skills.map((skill, index) => (
                    <SkillsCard key={skill.name} skill={skill} index={index} />
                ))}
            </div>

        </section >
    )
}

export default SkillsSection