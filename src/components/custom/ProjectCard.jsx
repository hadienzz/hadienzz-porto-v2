import { GithubIcon, Link as LinkIcon } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import projectImg from "/project-img.png";
import { BorderBeam } from "../magicui/border-beam";
import { Link } from "react-router-dom";

const ProjectCard = ({
  githubLink,
  urlLink,
  title,
  description,
  techStack,
  image,
}) => {
  return (
    <Card className={"bg-neutral-300 max-w-6xl mx-auto relative min-h-[80vh]"}>
      <CardContent className={" w-full"}>
        <CardHeader className="flex items-center gap-2 px-0">
          <Link
            to={githubLink}
            className={
              "bg-neutral-800 hover:bg-neutral-400 text-white hover:text-black p-2 rounded-full cursor-pointer"
            }
          >
            <GithubIcon />
          </Link>
          <Link
            to={urlLink}
            className={
              "bg-neutral-800 hover:bg-neutral-400 text-white hover:text-black p-2 rounded-full cursor-pointer"
            }
          >
            <LinkIcon />
          </Link>
        </CardHeader>
        <h1 className="text-gray-900 font-semibold md:text-6xl text-3xl  mt-4">
          {title}
        </h1>
        <CardDescription className={"max-w-lg md:text-sm text-xs py-4"}>
          {description}
        </CardDescription>
        <div className="md:flex grid grid-cols-3 items-center gap-4 text-sm">
          {techStack.map((item, idx) => (
            <Badge className={item.bg}>{item.name}</Badge>
          ))}
        </div>
        <div className="absolute bottom-0 right-0 w-[85%] md:w-[60%] lg:max-w-[55%] ">
          <img
            className="w-full h-auto object-contain rounded-sm"
            src={image}
            alt="Project"
          />
        </div>
      </CardContent>
      <BorderBeam
        className="absolute inset-0 pointer-events-none"
        borderWidth={3}
        duration={20}
        size={300}
      />
    </Card>
  );
};

export default ProjectCard;
