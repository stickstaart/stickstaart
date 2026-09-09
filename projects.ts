export interface Project {
  title: string;
  description: string;
  url: string;
  domain: string;
  tags: string[];
  image: string; // Afbeeldingspad toegevoegd
}

export const projects: Project[] = [
  {
    title: "DGS Bouw",
    description: "Digitaal visitekaartje voor DGS Bouw.",
    url: "https://www.dgsbouw.nl",
    domain: "www.dgsbouw.nl",
    tags: ["Next.js", "React", "Tailwind", "TypeScript"],
    image: "/projects/dgs.png",
  },
  {
    title: "Doodle",
    description: "Showcase website voor Illustrator Arne van der Ree.",
    url: "https://www.doodle.nl",
    domain: "www.doodle.nl",
    tags: ["Next.js", "React", "Tailwind", "TypeScript"],
    image: "/projects/doodle.png",
  },
  {
    title: "Disturbance",
    description: "Vernieuwde website voor punkband Disturbance.",
    url: "https://www.disturbance.nl",
    domain: "www.disturbance.nl",
    tags: ["Next.js", "React", "Tailwind", "TypeScript"],
    image: "/projects/disturbance.png",
  },
];
