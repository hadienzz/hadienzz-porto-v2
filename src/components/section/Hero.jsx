import LargeBlurBackground from "../icons/LargeBlurBackground"

const HeroSection = () => {
    return (
        <main className="px-2 md:px-25 pt-16 w-full">

            <article className="md:flex gap-[126px] justify-between items-center lg:w-[1252px]  mx-auto">
                <div>
                    <div className="flex items-center gap-[12.5px] ">
                        <div className="border-b-3 border-black w-10"></div>
                        <p className="">Hi, I am Hadin Pramiadi</p>
                    </div>

                    <h1 className="text-6xl md:text-[147.778px] font-vollkorn">Web Developer</h1>
                </div>

                <div className="pt-4 relative">
                    <div className="">
                        <LargeBlurBackground className={'absolute w-120'} />
                    </div>
                    <blockquote className="gap-[12.5] space-y-3 md:w-[486px]">
                        <div className="border-b-3 border-black w-10"></div>
                        <p className="text-2xl ">I build inclusive and accessible digital products through software development. My journey spans working with startups and enterprise-level projects. For me, software development is a way to enhance how people connect with technology at scale.
                        </p>
                    </blockquote>
                </div>
            </article>
        </main>
    )
}

export default HeroSection