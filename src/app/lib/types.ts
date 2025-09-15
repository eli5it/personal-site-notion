export type BlogEntry = {
  id: string;
  createdTime: any;
  category: any;
  title: any;
  tags: any;
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
