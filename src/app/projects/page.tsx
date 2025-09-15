import ProjectCard from "@/app/components/ProjectCard";

export default function Page() {
  const projects = [
    {
      name: "Smart Grocery Housekeeping",
      liveLink: "/",
      repoLink: "/",
      description:
        "Built as part of a three person team during my last quarter at Oregon State University, Smart Grocery Housekeeping is a full stack web application built using React on the frontend and Flask on the Backend. The project was built to assist users in finding suitable recipes based on their pantries. I plan on revisiting the project later.",
      technologies: ["Python", "Flask", "React", "Tailwind", "SQLite"],
      image: "/personal-site.webp",
    },
    {
      name: "Personal Site",
      liveLink: "/",
      repoLink: "/",
      description:
        "Built as part of a three person team during my last quarter at Oregon State University, Smart Grocery Housekeeping is a full stack web application built using React on the frontend and Flask on the Backend. The project was built to assist users in finding suitable recipes based on their pantries. I plan on revisiting the project later.",
      technologies: ["Python", "Flask", "React", "Tailwind", "SQLite"],
      image: "/image2.webp",
    },
  ];

  return (
    <>
      <h1 className="text-4xl font-bold border-b-2 border-b-gray-border dark:border-b-dark-border pb-2 mb-2 inline-block">
        Projects
      </h1>
      <ul>
        {projects.map((project) => (
          <li key={project.name}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </>
  );
}
