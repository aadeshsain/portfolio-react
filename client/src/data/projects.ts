export interface ProjectTag {
  name: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: ProjectTag[];
  liveLink?: string;
  githubLink?: string;
}

export const projects: Project[] = [
  {
    title: "Kid-Ex.com",
    description: "Portfolio website built with Next.js and deployed on Vercel. Features responsive design and modern UI elements.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    tags: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Vercel" },
      { name: "Tailwind CSS" }
    ],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "Blinds.com",
    description: "E-commerce frontend for smart window blinds with advanced product filtering, search, and shopping cart functionality.",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    tags: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Bootstrap 5" },
      { name: "RESTful API" }
    ],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "SmartBlinds Dashboard",
    description: "A smart home dashboard that simulates curtain control features with a clean, intuitive user interface and interactive controls.",
    image: "https://images.unsplash.com/photo-1535376472810-5d229c65da09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    tags: [
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Chart.js" },
      { name: "API Integration" }
    ],
    liveLink: "#",
    githubLink: "#"
  }
];
