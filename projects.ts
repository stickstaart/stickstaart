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
    description: "Moderne webapplicatie en bedrijfswebsite ontwikkeld met Next.js en Tailwind CSS.",
    url: "https://www.dgsbouw.nl",
    domain: "www.dgsbouw.nl",
    tags: ["Next.js", "React", "Tailwind", "TypeScript"],
    image: "/projects/dgs.png",
  },
  {
    title: "Doodle",
    description: "Creatieve en dynamische webapplicatie.",
    url: "https://www.doodle.nl",
    domain: "www.doodle.nl",
    tags: ["Next.js", "React", "Tailwind", "TypeScript"],
    image: "/projects/doodle.png",
  },
  {
    title: "Disturbance",
    description: "Volledige maatwerk website en platform.",
    url: "https://www.disturbance.nl",
    domain: "www.disturbance.nl",
    tags: ["Next.js", "React", "Tailwind", "TypeScript"],
    image: "/projects/disturbance.png",
  },
];
