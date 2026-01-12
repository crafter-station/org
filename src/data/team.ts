import type { HierarchyNode } from "@crafter/flow";

export type TeamMember = HierarchyNode & {
  name: string;
  role: string;
  country?: "PE" | "CO";
  level: "org" | "founder" | "team" | "member";
  founderTitle?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  avatar?: string;
  bio?: string;
};

export const team: TeamMember = {
  id: "crafter-station",
  name: "Crafter Station",
  role: "Organization",
  level: "org",
  bio: "Building Peru's tech ecosystem",
  children: [
    {
      id: "railly",
      name: "Railly Hugo",
      role: "Design Engineer",
      founderTitle: "Founder & CEO",
      country: "PE",
      level: "founder",
      github: "Railly",
      linkedin: "railly-hugo",
      twitter: "raillyhugo",
      avatar: "https://github.com/Railly.png",
      bio: "Building tools for developers",
      children: [
        {
          id: "core-team",
          name: "Core Team",
          role: "Product & Design",
          level: "team",
          children: [
            {
              id: "anthony",
              name: "Anthony Cueva",
              role: "Product Engineer",
              founderTitle: "Founder & CTO",
              country: "PE",
              level: "member",
              github: "cuevaio",
              linkedin: "cuevaio",
              avatar: "https://github.com/cuevaio.png",
              bio: "Shipping products that matter",
            },
            {
              id: "shiara",
              name: "Shiara Arauzo",
              role: "Design Engineer",
              country: "PE",
              level: "member",
              github: "shiarauzo",
              twitter: "shiara_gc",
              avatar: "https://github.com/shiarauzo.png",
              bio: "Crafting beautiful interfaces",
            },
            {
              id: "cris",
              name: "Cristian Correa",
              role: "Data Engineer",
              country: "CO",
              level: "member",
              github: "camilocbarrera",
              linkedin: "cristiancamilocorrea",
              twitter: "camilocbarrera",
              avatar: "https://github.com/camilocbarrera.png",
              bio: "Data-driven solutions",
            },
          ],
        },
        {
          id: "dev-team",
          name: "Dev Team",
          role: "Engineering",
          level: "team",
          children: [
            {
              id: "frontend",
              name: "Frontend",
              role: "",
              level: "team",
              children: [
                {
                  id: "carlos",
                  name: "Carlos Tarmeño",
                  role: "Frontend Dev",
                  country: "PE",
                  level: "member",
                  avatar: "https://avatars.githubusercontent.com/u/placeholder",
                  bio: "React & Next.js enthusiast",
                },
                {
                  id: "edward",
                  name: "Edward Ramos",
                  role: "Frontend Dev",
                  country: "PE",
                  level: "member",
                  github: "EdwardR0507",
                  avatar: "https://github.com/EdwardR0507.png",
                  bio: "Building interactive UIs",
                },
              ],
            },
            {
              id: "backend",
              name: "Backend",
              role: "",
              level: "team",
              children: [
                {
                  id: "ignacio",
                  name: "Ignacio Rueda",
                  role: "Backend Dev",
                  country: "PE",
                  level: "member",
                  avatar: "https://avatars.githubusercontent.com/u/placeholder",
                  bio: "Systems & infrastructure",
                },
                {
                  id: "nicolas",
                  name: "Nicolas Vargas",
                  role: "Backend Dev",
                  country: "CO",
                  level: "member",
                  linkedin: "nicolas-vargas-programador",
                  avatar: "https://avatars.githubusercontent.com/u/placeholder",
                  bio: "Scalable backend solutions",
                },
              ],
            },
          ],
        },
        {
          id: "liz",
          name: "Liz Riveros",
          role: "Project Manager",
          country: "PE",
          level: "member",
          linkedin: "liz-riveros-00a82b9b",
          avatar: "https://avatars.githubusercontent.com/u/placeholder",
          bio: "Keeping projects on track",
        },
      ],
    },
  ],
};
