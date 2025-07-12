const HeroSection = () => {
    return (
        <main className="px-[26px] pt-38 w-full h-screen ">
            <article className="sm:flex gap-8 items-center lg:max-w-[1252px] mx-auto justify-between">
                <div className="relative">

                    <div className="absolute w-[300px] h-[400px] opacity-50 blur-[100px] md:blur-[150px] rotate-[159.6deg] bg-[#831ED2] top-20 -z-40"></div>

                    <div className="flex items-center gap-[12.5px] ">
                        <div className="border-b-3 border-black md:w-10 w-[26px]"></div>
                        <p className="text-lg">Hi, I am Hadin Pramiadi</p>
                    </div>

                    <h1 className="text-7xl md:text-8xl xl:text-[147.778px] font-vollkorn">Web Developer</h1>
                </div>

                <div className="pt-5 relative ">

                    <div className="absolute -right-40 top-50 transform -translate-y-180 md:translate-y-0 md:right-0 md:top-0 w-[320px] h-[400px] md:w-[400px] md:h-[500px] rotate-[158.6deg] bg-[#831ED2] opacity-70 rounded-[50%] blur-[150px] -z-100"></div>

                    <blockquote className="gap-[12.5] space-y-3 lg:w-[486px]">
                        <div className="border-b-3 border-black md:w-10 w-[26px]"></div>
                        <p className=" xl:text-2xl lg:text-xl md:text-base text-sm">I build inclusive and accessible digital products through software development. My journey spans working with startups and enterprise-level projects. For me, software development is a way to enhance how people connect with technology at scale.
                        </p>
                    </blockquote>
                </div>
            </article>
        </main>
    )
}

export default HeroSection