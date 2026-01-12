import type { HierarchyNode } from "@crafter/flow";

export type TeamMember = HierarchyNode & {
  name: string;
  role: string;
  level: "org" | "founder" | "lead" | "member";
};

export const team: TeamMember = {
  id: "crafter-station",
  name: "Crafter Station",
  role: "Organization",
  level: "org",
  children: [
    {
      id: "railly",
      name: "Railly Hugo",
      role: "Founder & CEO",
      level: "founder",
      children: [
        {
          id: "shiara",
          name: "Shiara Arauzo",
          role: "Design Engineer",
          level: "member",
        },
        {
          id: "anthony",
          name: "Anthony Cueva",
          role: "Product Engineer",
          level: "member",
        },
        {
          id: "cris",
          name: "Cristian Correa",
          role: "Data Engineer",
          level: "member",
        },
        {
          id: "liz",
          name: "Liz Riveros",
          role: "Project Manager",
          level: "member",
        },
        {
          id: "ignacio",
          name: "Ignacio Rueda",
          role: "Backend Dev",
          level: "member",
        },
        {
          id: "carlos",
          name: "Carlos Tarmeño",
          role: "Frontend Dev",
          level: "member",
        },
        {
          id: "edward",
          name: "Edward Ramos",
          role: "Frontend Dev",
          level: "member",
        },
        {
          id: "nicolas",
          name: "Nicolas Vargas",
          role: "Backend Dev",
          level: "member",
        },
      ],
    },
  ],
};
