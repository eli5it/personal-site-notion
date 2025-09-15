import type { Project } from "../lib/types";
import type { TechnologyColors } from "../lib/types";
import Image from "next/image";
import { Link as LinkIcon } from "lucide-react";

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
            style={{
              borderColor: `var(--color-${technologyColors[tech][0]})`,
              color: `var(--color-${technologyColors[tech][0]})`,
            }}
          >
            {tech}
          </li>
        ))}
      </ul>

      <p className="text-dark-border dark:text-offwhite">{description}</p>
      <div className="flex gap-2">
        <a
          className="flex gap-2 border border-black dark:border-dark-border dark:text-offwhite px-1.5 py-1 rounded"
          href={liveLink}
        >
          <LinkIcon className="w-6 h-6" />
          View Live
        </a>
        <a
          className="flex gap-2 border border-black dark:border-dark-border dark:text-offwhite  px-1.5 py-1 rounded"
          href={repoLink}
        >
          <Image
            src="/github-icon.svg"
            alt="github icon"
            width={24}
            height={24}
          ></Image>
          View Github
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
