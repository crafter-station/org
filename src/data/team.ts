import type { HierarchyNode } from "@crafter/flow";

export type TeamMember = HierarchyNode & {
  name: string;
  role: string;
  avatar?: string;
};

export const team: TeamMember = {
  id: "crafter-station",
  name: "Crafter Station",
  role: "Organization",
  children: [
    {
      id: "railly",
      name: "Railly Hugo",
      role: "Founder & Design Engineer",
      children: [
        { id: "shiara", name: "Shiara Arauzo", role: "Design Engineer" },
        { id: "anthony", name: "Anthony Cueva", role: "Product Engineer" },
        {
          id: "cris",
          name: "Cristian Correa",
          role: "Data & Software Engineer",
        },
      ],
    },
    {
      id: "dev-team",
      name: "Dev Team",
      role: "Engineering",
      children: [
        { id: "ignacio", name: "Ignacio Rueda", role: "Backend Dev" },
        { id: "carlos", name: "Carlos Tarmeño", role: "Frontend Dev" },
        { id: "edward", name: "Edward Ramos", role: "Frontend Dev" },
        { id: "nicolas", name: "Nicolas Vargas", role: "Backend Developer" },
      ],
    },
    { id: "liz", name: "Liz Riveros", role: "Project Manager" },
  ],
};
