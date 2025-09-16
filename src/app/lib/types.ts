export type BlogEntry = {
  id: string;
  createdTime: string;
  category: string;
  title: string;
  tags: string[];
};

export type Project = {
  name: string;
  liveLink: string;
  repoLink: string;
  description: string;
  technologies: string[];
  image: string;
};

export type TechnologyColors = {
  [key: string]: string[];
};
