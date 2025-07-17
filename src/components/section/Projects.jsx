import { motion } from "framer-motion"
import SkillsCard from "../custom/SkillsCard"
import ProjectCard from "../custom/ProjectCard"

const ProjectsSection = () => {
    return (
        <section>
            <header className="overflow-hidden">
                <motion.div className="flex whitespace-nowrap">
                    <div className="inline-block whitespace-nowrap animate-marquee">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <span key={i} className="mr-12 text-7xl md:text-8xl lg:text-9xl font-black text-gray-900 leading-none inline-block select-none">
                                PROJECT • DONE •
                            </span>
                        ))}
                    </div>
                </motion.div>
            </header>
            <div className="py-20">
                <ProjectCard />
            </div>
        </section>
    )
}

export default ProjectsSection