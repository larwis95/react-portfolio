import AboutTextSection from "./AboutTextSection";
import AboutSkills from "./AboutSkills";
import {
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandNodejs,
} from "@tabler/icons-react";

const skills = [
  <IconBrandTypescript size={48} />,
  <IconBrandJavascript size={48} />,
  <IconBrandHtml5 size={48} />,
  <IconBrandCss3 size={48} />,
  <IconBrandNodejs size={48} />,
];

export default function About(): JSX.Element {
  return (
    <div className="relative flex flex-col w-full items-center">
      <AboutTextSection
        title="About Me"
        description={[
          "I am a full stack developer with a passion for creating user-friendly applications.",
          "I have experience with TypeScript, JavaScript, HTML, CSS, and Node.js.",
          "I am a quick learner and enjoy working with others to solve problems.",
        ]}
      />
      <h2 className="text-2xl mb-4 text-white border-b border-white">Skills</h2>
      <AboutSkills skills={skills} />
    </div>
  );
}
