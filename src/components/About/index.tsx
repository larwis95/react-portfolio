import AboutTextSection from "./AboutTextSection";
import AboutSkills from "./AboutSkills";
import {
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandNodejs,
} from "@tabler/icons-react";
import ProfilePicture from "./ProfilePicture";
import LW_IMG from "../../assets/larry_w.jpg";

// Skills Icons from the Tabler Icons Library
const skills = [
  <IconBrandTypescript size={48} />,
  <IconBrandJavascript size={48} />,
  <IconBrandHtml5 size={48} />,
  <IconBrandCss3 size={48} />,
  <IconBrandNodejs size={48} />,
];

// About Component
export default function About(): JSX.Element {
  return (
    <div className="relative flex w-full flex-col items-center gap-2">
      <ProfilePicture src={LW_IMG} />
      <div className="flex flex-col items-center justify-center rounded border border-white p-2 lg:w-1/3">
        <AboutTextSection
          title="About Me"
          description={[
            "Hi, I'm Larry Wisniewski! I'm a web-developer from Michigan! My journey with programming started when I was just 14 years old. The video game, World of Warcraft, allows you to create custom addons using Lua. This led to me learning my first ever language. Ever since then I have dove head first into learning how to solve problems with code.",
          ]}
        />
      </div>
      <h2 className="mb-4 border-b border-white text-2xl text-white">Skills</h2>
      <AboutSkills skills={skills} />
    </div>
  );
}
