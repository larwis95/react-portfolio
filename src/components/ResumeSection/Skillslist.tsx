import SkillsListItem from "./SkillsListItem";

interface SkillsListProps {
  skills: Skills[];
}

interface Skills {
  name: string;
  icon: JSX.Element;
  level: string;
  color: string;
  type: string;
}

export default function SkillsList({ skills }: SkillsListProps): JSX.Element {
  return (
    <>
      <ul className="flex flex-wrap items-center justify-center gap-4 rounded border border-white p-4">
        {skills
          .filter((skill) => skill.type === "Frontend")
          .map((skill, index) => (
            <SkillsListItem key={index} {...skill} />
          ))}
      </ul>
      <ul className="flex flex-wrap items-center justify-center gap-4 rounded border border-white p-4">
        {skills
          .filter((skill) => skill.type === "Backend")
          .map((skill, index) => (
            <SkillsListItem key={index} {...skill} />
          ))}
      </ul>
    </>
  );
}
