import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const AboutSection = () => {
    const textRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: textRef,
        offset: ["start 0.8", "end 0.5"]
    })

    const fullText = "👋🏼 Hi there! I’m Hadin Pramiadi, a passionate web developer currently based in Bogor, Indonesia. As a self-taught developer still in high school, I’ve been dedicating my time to learning and building projects using JavaScript, React, and Next.js. My focus is on creating clean, responsive, and accessible websites that not only look good but also provide real solutions for people.I love exploring how technology, especially web development and AI, can be combined to build impactful products. I consider myself not just a coder, but also a learner who enjoys solving problems and thinking creatively to bring ideas to life. Right now, I’m continuing to deepen my skills in fullstack development and cloud engineering, while preparing my portfolio to pursue my goals in the tech industry. I believe in growing through real-world experiences and consistent learning. I’m always open to new opportunities, collaborations, and discussions. Feel free to connect with me anytime! 🚀"
    const words = fullText.split(' ')

    const ProgressiveText = () => {
        return (
            <div ref={textRef} className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed w-full">
                {words.map((word, index) => {
                    const start = index / words.length
                    const end = start + 1 / words.length

                    const opacity = useTransform(scrollYProgress, [start, end], [0.3, 1])
                    const color = useTransform(
                        scrollYProgress,
                        [start, end],
                        ["rgb(60, 60, 60)", "rgb(97, 97, 97)"] // from gray-600 to white
                    )

                    return (
                        <motion.span
                            key={index}
                            style={{ opacity, color }}
                            className="mr-1 inline-block"
                        >
                            {word}
                        </motion.span>
                    )
                })}
            </div>
        )
    }

    return (
        <>
            <div className="overflow-hidden">
                <motion.div className="flex whitespace-nowrap">
                    <div className="inline-block whitespace-nowrap animate-marquee-reverse">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <span key={i} className=" text-7xl md:text-8xl lg:text-9xl font-black text-gray-900 leading-none inline-block select-none">
                                ABOUT • ME •
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
            <motion.section
                id="about"
                initial={{ opacity: 0, y: 50, filter: 'blur(20px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="px-[26px] min-h-full  "
            >

                <div className="md:items-center sm:flex gap-8 items-center lg:max-w-[1252px] mx-auto justify-between pt-12 ">

                    <div className="space-y-6 ">
                        <ProgressiveText />
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4  text-center">
                            <motion.div
                                initial={{ opacity: 0, y: -50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: .5, delay: 1, type: 'spring' }}
                            >
                                <p className="text-4xl font-black text-gray-900">2+</p>
                                <p className="text-gray-600">Years Coding</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: .5, delay: 1.3, type: 'spring' }}

                            >
                                <p className="text-4xl font-black text-gray-900">React</p>
                                <p className="text-gray-600">Main Framework</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: -50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: .5, delay: 1.8, type: 'spring' }}
                                className="col-span-2 md:col-span-1"
                            >
                                <p className="text-4xl font-black text-gray-900">Backend</p>
                                <p className="text-gray-600">Learning Focus</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    )
}

export default AboutSection