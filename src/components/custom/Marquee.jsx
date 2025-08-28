import { motion } from "framer-motion";

const Marquee = ({ letter }) => {
  return (
    <header className="overflow-hidden">
      <motion.div className="flex whitespace-nowrap">
        <div className="inline-block whitespace-nowrap animate-marquee">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className="mr-12 text-7xl md:text-8xl lg:text-9xl font-black text-gray-900 leading-none inline-block select-none"
            >
              {letter}
            </span>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

export default Marquee;
