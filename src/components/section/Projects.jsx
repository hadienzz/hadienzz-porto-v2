import { motion } from "framer-motion";
import SkillsCard from "../custom/SkillsCard";
import ProjectCard from "../custom/ProjectCard";
import { projects } from "@/store/data";
import Marquee from "../custom/Marquee";

const ProjectsSection = () => {
  return (
    <section>
      <Marquee letter={"PROJECT • DONE"} />
      <div className="py-20 px-2 space-y-4">
        {projects.map((item, idx = idx + 1) => (
          <motion.div
            key={idx}
            initial={{ x: idx % 2 === 0 ? -300 : 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ProjectCard key={idx} {...item} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
