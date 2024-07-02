import Card from "../components/Card/Card";
import AnimatedLayout from "../utils/page-transitions/AnimatedLayout";
import Habit from "../assets/httyh.png";
import BestEats from "../assets/besteats.png";
import JSQuiz from "../assets/jsquiz.png";
import Kanban from "../assets/kanban.png";
import Weather from "../assets/weatherapp.png";
import { motion } from "framer-motion";
import { useEffect } from "react";

type Project = {
  key: number;
  title: string;
  description: string;
  image: string;
  url: string;
  githubLink: string;
};

const projects: Project[] = [
  {
    key: 1,
    title: "How to Train Your Habit",
    description:
      "How to Train Your Habit - Level up your pet by completing habits.",
    image: Habit,
    url: "https://how-to-train-your-habit-6d1d2b04622a.herokuapp.com/habits",
    githubLink: "https://github.com/larwis95/habit-tracker",
  },
  {
    key: 2,
    title: "Best Eats",
    description: "Best Eats - Find the 5 best restaurants in any city.",
    image: BestEats,
    url: "https://larwis95.github.io/best-eats/",
    githubLink: "https://github.com/larwis95/best-eats",
  },
  {
    key: 3,
    title: "JS Quiz",
    description: "Simple JavaScript quiz game.",
    image: JSQuiz,
    url: "https://larwis95.github.io/javascript-dynamic-quiz/",
    githubLink: "https://github.com/larwis95/javascript-dynamic-quiz",
  },
  {
    key: 4,
    title: "Kanban Board",
    description: "Simple Kanban board for organizing tasks.",
    image: Kanban,
    url: "https://larwis95.github.io/javascript-task-board/",
    githubLink: "https://github.com/larwis95/javascript-task-board",
  },
  {
    key: 5,
    title: "Weather App",
    description: "Search current weather by city.",
    image: Weather,
    url: "https://larwis95.github.io/city-weather-search/",
    githubLink: "https://github.com/larwis95/city-weather-search",
  },
];

function clickHandler(url: string): void {
  window.open(url, "_blank");
}

export default function ProjectsPage(): JSX.Element {
  useEffect(() => {
    document.title = "Projects | Lawrence Wisniewski";
  }, []);
  return (
    <AnimatedLayout>
      <motion.div
        className="mt-24 flex h-full w-full flex-row flex-wrap items-center justify-center gap-4 overflow-hidden p-4"
        initial={{
          perspective: `1000px`,
          transformStyle: "preserve-3d",
          transform:
            "matrix3d(0.939693, 0.330366, 0.0885213, 0, -0.34202, 0.907673, 0.24321, 0, 0, -0.258819, 0.965926, 0, 0, 0, 0, 1)",
        }}
        whileInView={{
          transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
          perspective: `1000px`,
        }}
        transition={{ duration: 1.5, type: "tween" }}
      >
        {projects.map((project) => {
          return (
            <Card
              key={project.key}
              githubLink={project.githubLink}
              position={project.key}
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
