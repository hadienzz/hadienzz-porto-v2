import { GithubIcon, Link } from "lucide-react"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import projectImg from '/project-img.png'
import { BorderBeam } from "../magicui/border-beam"

const ProjectCard = () => {
    return (
        <Card className={'bg-neutral-300 max-w-6xl mx-auto relative min-h-[80vh]'}>
            <CardContent className={' w-full'}>
                <div className="flex items-center gap-2">
                    <CardAction className={'bg-neutral-800 hover:bg-neutral-400 text-white hover:text-black p-2 rounded-full cursor-pointer'}>
                        <GithubIcon />
                    </CardAction>
                    <CardAction className={'bg-neutral-800 hover:bg-neutral-400 text-white hover:text-black p-2 rounded-full cursor-pointer'}>
                        <Link />
                    </CardAction>
                </div>
                <h1 className="text-gray-900 font-semibold text-6xl">SEA Catering</h1>
                <CardDescription className={'max-w-lg text-sm'}>SEA Catering adalah platform pemesanan makanan sehat yang dibuat untuk tugas akhir kompetisi Compest yang diselenggarakan oleh Universitas Indonesia. Website ini memiliki fitur tambah, cancel, dan pause menu, serta admin dashboard untuk mengelola layanan catering dengan mudah.
                </CardDescription>
                <div className="flex items-center gap-4">
                    <Badge>Tech Stack 1 </Badge>
                    <Badge>Tech Stack 2 </Badge>
                    <Badge>Tech Stack 3 </Badge>
                </div>
                <div className="absolute -bottom-2 right-0 w-[85%] object-contain md:w-[60%] lg:max-w-[55%]">
                    <img className="rounded-sm" src={projectImg} alt="Project" />
                </div>
            </CardContent>
            <BorderBeam
                className="absolute inset-0 pointer-events-none"
                borderWidth={3}
                duration={20}
                size={300}
            />
        </Card>
    )
}

export default ProjectCard