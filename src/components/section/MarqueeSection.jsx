import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MarqueeSection = ({ topText, bottomText, className = "" }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Different scroll speeds for parallax effect
    const topX = useTransform(scrollYProgress, [0, 1], [0, -300]);
    const bottomX = useTransform(scrollYProgress, [0, 1], [0, 200]);

    // Rotation based on scroll
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

    // Scale effect
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.02, 0.95]);

    return (
        <>
            <section ref={containerRef} className={`py-20 overflow-hidden ${className}`}>
                <motion.div style={{ scale, rotate }} className="space-y-8">
                    {/* Top Marquee */}
                    <div className="overflow-hidden">
                        <motion.div style={{ x: topX }} className="flex whitespace-nowrap">
                            <div className="inline-block whitespace-nowrap animate-marquee">
                                {Array.from({ length: 10 }).map((_, i) => (
                                    <span key={i} className="mr-12 text-7xl md:text-8xl lg:text-9xl font-black text-gray-900 leading-none inline-block">
                                        {topText}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Marquee */}
                    <div className="overflow-hidden">
                        <motion.div className="flex whitespace-nowrap">
                            <div className="inline-block whitespace-nowrap animate-marquee-reverse">
                                {Array.from({ length: 10 }).map((_, i) => (
                                    <span key={i} className="mr-12 text-7xl md:text-8xl lg:text-9xl font-black text-gray-200 leading-none inline-block">
                                        {bottomText}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
            <div className="overflow-hidden pt-12">
                <motion.div className="flex whitespace-nowrap">
                    <div className="inline-block whitespace-nowrap animate-marquee-reverse">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <span key={i} className="mr-12 text-7xl md:text-8xl lg:text-9xl font-black text-gray-900 leading-none inline-block">
                                SKILLS • AND • EXPERTISE •
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default MarqueeSection;



// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// const MarqueeSection = ({ topText, bottomText, className = "" }) => {
//     const containerRef = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ["start end", "end start"],
//     });

//     // Different scroll speeds for parallax effect
//     const topX = useTransform(scrollYProgress, [0, 1], [0, -300]);
//     const bottomX = useTransform(scrollYProgress, [0, 1], [0, 200]);

//     // Rotation based on scroll
//     const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

//     // Scale effect
//     const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.02, 0.95]);

//     return (
//         <section ref={containerRef} className={`py-20 overflow-hidden ${className}`}>
//             <motion.div style={{ scale, rotate }} className="space-y-8">
//                 {/* Top Marquee */}
//                 <div className="overflow-hidden">
//                     <motion.div style={{ x: topX }} className="flex whitespace-nowrap">
//                         <div className="inline-block whitespace-nowrap animate-marquee animation-duration-[500s]">
//                             {Array.from({ length: 10 }).map((_, i) => (
//                                 <span key={i} className="mr-12 text-7xl md:text-8xl lg:text-9xl font-black text-gray-900 leading-none inline-block">
//                                     {topText}
//                                 </span>
//                             ))}
//                         </div>
//                     </motion.div>
//                 </div>

//                 {/* Bottom Marquee */}
//                 <div className="overflow-hidden">
//                     <motion.div style={{ x: bottomX }} className="flex whitespace-nowrap">
//                         <div className="inline-block whitespace-nowrap animate-marquee animation-duration-[50s] direction-reverse">
//                             {Array.from({ length: 10 }).map((_, i) => (
//                                 <span key={i} className="mr-12 text-7xl md:text-8xl lg:text-9xl font-black text-gray-200 leading-none inline-block">
//                                     {bottomText}
//                                 </span>
//                             ))}
//                         </div>
//                     </motion.div>
//                 </div>
//             </motion.div>

//             {/* CSS keyframe styles */}
//             {/* <style jsx>{`
//         .marquee {
//           display: inline-block;
//           white-space: nowrap;
//           animation: marquee 30s linear infinite;
//         }

//         .marquee.reverse {
//           animation-direction: reverse;
//           animation-duration: 35s;
//         }

//         @keyframes marquee {
//           0% { transform: translateX(0%); }
//           100% { transform: translateX(-50%); }
//         }
//       `}</style> */}
//         </section>
//     );
// };

// export default MarqueeSection;
