export type ProjectCategory = "Commercial" | "Residential";
export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  location: string;
  image: string;
  imageAlt: string;
};
export type Service = {
  number: string;
  title: string;
  summary: string;
  details: string[];
};
