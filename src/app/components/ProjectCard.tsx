import type { Project } from "../lib/types";
import type { TechnologyColors } from "../lib/types";
import Image from "next/image";

const technologyColors: TechnologyColors = {
  React: ["react", "react"],
  "Node.js": ["node", "node"],
  Express: ["dark-green", "dark-green"],
  JS: ["yellow", "yellow"],
  TS: ["light-blue", "light-blue"],
  Python: ["python", "python"],
  Flask: ["flask", "flask"],
  SQLite: ["sql", "sql"],
  Tailwind: ["tailwind", "tailwind"],
  "Next.js": ["lighter-green", "lighter-green"],
};

type ProjectCardProps = {
  project: Project;
};
function ProjectCard({ project }: ProjectCardProps) {
  const { name, liveLink, repoLink, description, technologies, image } =
    project;

  return (
    <div className="my-8 flex flex-col gap-3 py-2 border-b border-dashed border-black">
      <Image
        className="rounded-lg border border-dark-border"
        src={image}
        alt={name}
        width={600}
        height={204}
      />
      <h2 className="text-xl font-bold">{name}</h2>
      <ul className="flex gap-3">
        {technologies.map((tech) => (
          <li
            className="border px-2 py-1 rounded"
            key={tech}
            style={{ borderColor: `var(--color-${technologyColors[tech][0]})` }}
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectCard;
