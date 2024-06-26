import Card from "../components/Card/Card";
import AnimatedLayout from "../utils/page-transitions/AnimatedLayout";
import Habit from "../assets/httyh.png";
import { motion } from "framer-motion";

type Project = {
  key: number;
  title: string;
  description: string;
  image: string;
  url: string;
};

const projects: Project[] = [
  {
    key: 1,
    title: "How to Train Your Habit",
    description: "This is a description of project 1",
    image: Habit,
    url: "https://how-to-train-your-habit-6d1d2b04622a.herokuapp.com/habits",
  },
  {
    key: 2,
    title: "TBA",
    description: "TBA",
    image: "https://via.placeholder.com/150",
    url: "",
  },
  {
    key: 3,
    title: "TBA",
    description: "TBA",
    image: "https://via.placeholder.com/150",
    url: "",
  },
  {
    key: 4,
    title: "TBA",
    description: "TBA",
    image: "https://via.placeholder.com/150",
    url: "",
  },
  {
    key: 5,
    title: "TBA",
    description: "TBA",
    image: "https://via.placeholder.com/150",
    url: "",
  },
  {
    key: 6,
    title: "TBA",
    description: "TBA",
    image: "https://via.placeholder.com/150",
    url: "",
  },
  {
    key: 7,
    title: "TBA",
    description: "TBA",
    image: "https://via.placeholder.com/150",
    url: "",
  },
];

function clickHandler(url: string): void {
  window.open(url, "_blank");
}

function ProjectsPage(): JSX.Element {
  return (
    <AnimatedLayout>
      <motion.div
        className="flex justify-center items-center min-h-screen gap-1 flex-wrap w-full flex-1 p-4 mt-24"
        initial={{
          perspective: `1000px`,
          transformStyle: "preserve-3d",
          transform:
            "matrix3d(0.939693, 0.330366, 0.0885213, 0, -0.34202, 0.907673, 0.24321, 0, 0, -0.258819, 0.965926, 0, 0, -400, 0, 1)",
        }}
        animate={{
          perspective: "0px",
          transform: "matrix(1, 0, 0, 1, 0, 0)",
        }}
        transition={{ duration: 2.0, delay: 1.5 }}
      >
        {projects.map((project) => {
          return (
            <Card
              key={project.key}
              position={project.key}
              cardTitle={project.title}
              cardDescription={project.description}
              cardImage={project.image}
              onClick={
                project.url ? () => clickHandler(project.url) : undefined
              }
            />
          );
        })}
      </motion.div>
    </AnimatedLayout>
  );
}
export default ProjectsPage;
