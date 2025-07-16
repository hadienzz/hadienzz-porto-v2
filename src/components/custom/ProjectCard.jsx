import { GithubIcon, Link } from "lucide-react"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import projectImg from '../../../public/project-img.jpeg'
import { ShineBorder } from "../magicui/shine-border"

const ProjectCard = () => {
    return (
        <Card className={'bg-neutral-300 max-w-6xl mx-auto relative min-h-[80vh]'}>
            <ShineBorder shineColor={['#831ED2', '#000']} borderWidth={2} />
            <CardContent>
                <div className="flex items-center gap-2">
                    <CardAction className={'bg-neutral-800 hover:bg-neutral-400 text-white hover:text-black p-2 rounded-full cursor-pointer'}>
                        <GithubIcon />
                    </CardAction>
                    <CardAction className={'bg-neutral-800 hover:bg-neutral-400 text-white hover:text-black p-2 rounded-full cursor-pointer'}>
                        <Link />
                    </CardAction>
                </div>
                <h1 className="text-gray-900 font-semibold text-6xl">SEA Catering</h1>
                <CardDescription className={'max-w-lg text-base'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, accusamus.</CardDescription>
                <div className="flex items-center gap-4">
                    <Badge>Tech Stack 1 </Badge>
                    <Badge>Tech Stack 2 </Badge>
                    <Badge>Tech Stack 3 </Badge>
                </div>
                <div className="absolute bottom-0 right-0">

                    <img className="max-w-2xl rounded-lg" src={projectImg} alt="Project" />
                </div>
            </CardContent>
        </Card>
    )
}

export default ProjectCard