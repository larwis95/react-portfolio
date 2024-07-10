import { useEffect } from "react";
import AnimatedLayout from "../../utils/page-transitions/AnimatedLayout";
import SkillsList from "../../components/ResumeSection/Skillslist";
import DownloadButton from "../../components/ResumeSection/DownloadButton";
import Resume from "../../assets/ComputerScienceResumedocx.pdf";
import {
  IconBrandHtml5,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTypescript,
  IconBrandCss3,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandGraphql,
} from "@tabler/icons-react";

interface Skills {
  name: string;
  icon: JSX.Element;
  level: string;
  color: string;
  type: string;
}

const skills: Skills[] = [
  {
    name: "HTML",
    icon: <IconBrandHtml5 size={24} strokeWidth={1.5} />,
    level: "Advanced",
    color: "text-green-500",
    type: "Frontend",
  },
  {
    name: "CSS",
    icon: <IconBrandCss3 size={24} strokeWidth={1.5} />,
    level: "Advanced",
    color: "text-green-500",
    type: "Frontend",
  },
  {
    name: "JavaScript",
    icon: <IconBrandNodejs size={24} strokeWidth={1.5} />,
    level: "Advanced",
    color: "text-green-500",
    type: "Frontend",
  },
  {
    name: "React",
    icon: <IconBrandReact size={24} strokeWidth={1.5} />,
    level: "Intermediate",
    color: "text-yellow-500",
    type: "Frontend",
  },
  {
    name: "TypeScript",
    icon: <IconBrandTypescript size={24} strokeWidth={1.5} />,
    level: "Intermediate",
    color: "text-yellow-500",
    type: "Frontend",
  },
  {
    name: "MongoDB",
    icon: <IconBrandMongodb size={24} strokeWidth={1.5} />,
    level: "Intermediate",
    color: "text-yellow-500",
    type: "Backend",
  },
  {
    name: "MySQL",
    icon: <IconBrandMysql size={24} strokeWidth={1.5} />,
    level: "Intermediate",
    color: "text-yellow-500",
    type: "Backend",
  },
  {
    name: "GraphQL",
    icon: <IconBrandGraphql size={24} strokeWidth={1.5} />,
    level: "Intermediate",
    color: "text-yellow-500",
    type: "Backend",
  },
  {
    name: "Node.js",
    icon: <IconBrandNodejs size={24} strokeWidth={1.5} />,
    level: "Intermediate",
    color: "text-yellow-500",
    type: "Backend",
  },
];

const ResumePage = () => {
  useEffect(() => {
    document.title = "Larry Wisniewski | Resume";
  }, []);
  return (
    <AnimatedLayout>
      <div className="mt-32 flex h-full flex-col items-center justify-center gap-4 sm:w-full md:w-1/2 lg:w-1/2">
        <h3 className="text-4xl font-bold text-white">Skills</h3>
        <div className="flex h-fit w-fit flex-row flex-wrap items-center justify-center gap-4">
          <SkillsList skills={skills} />
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className="text-2xl font-bold text-white">Download Resume</h3>
          <DownloadButton resumeLink={Resume} />
        </div>
      </div>
    </AnimatedLayout>
  );
};

export default ResumePage;
