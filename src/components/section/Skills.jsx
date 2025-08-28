import { motion } from "framer-motion";
import SkillsCard from "../custom/SkillsCard";
import { skills } from "@/store/data";
import Marquee from "../custom/Marquee";

const SkillsSection = () => {
  return (
    <section>
      <div className="mt-16">
        <Marquee letter={"EXPERTISE • SKILLS •"} />
      </div>

      <div className="relative">
        {skills.map((skill, index) => (
          <SkillsCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
