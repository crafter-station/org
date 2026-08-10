import type { HierarchyNode } from "@crafter/flow";

export type TeamMember = HierarchyNode & {
  name: string;
  role: string;
  country?: "PE" | "CO" | "CN";
  level: "org" | "cluster" | "area" | "member";
  founder?: boolean;
  unknown?: boolean;
  areas?: string[];
  vacant?: boolean;
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
      id: "cluster-comunidad",
      name: "Comunidad y Marca",
      role: "",
      level: "cluster",
      children: [
        {
          id: "area-community",
          name: "Community",
          role: "WhatsApp · Discord · Crafter Community",
          level: "area",
          children: [
            {
              id: "anthony",
              name: "Anthony Cueva",
              role: "Product Engineer",
              country: "PE",
              level: "member",
              founder: true,
              areas: ["Community", "Product", "Sponsors"],
              github: "cuevaio",
              linkedin: "cuevaio",
              avatar: "https://github.com/cuevaio.png",
              bio: "Owner de Community y Product. Co-owner temporal de Sponsors",
            },
          ],
        },
        {
          id: "area-content",
          name: "Content",
          role: "Video · Redes · Formatos de marca",
          level: "area",
          children: [
            {
              id: "ignacio-rueda",
              name: "Ignacio Rueda",
              role: "Content Creator",
              country: "PE",
              level: "member",
              areas: ["Content"],
              bio: "Owner de Content: video, redes y formatos de marca",
            },
          ],
        },
        {
          id: "area-brand",
          name: "Brand",
          role: "Identidad visual · Guidelines · Merch",
          level: "area",
          children: [
            {
              id: "brand-vacant",
              name: "Vacante",
              role: "Buscando owner",
              level: "member",
              vacant: true,
              bio: "Área sin owner. Identidad visual, guidelines y merch",
            },
          ],
        },
      ],
    },
    {
      id: "cluster-negocio",
      name: "Negocio",
      role: "",
      level: "cluster",
      children: [
        {
          id: "area-product",
          name: "Product",
          role: "Revenue · Polar · Mentoría",
          level: "area",
          children: [
            {
              id: "carlos",
              name: "Carlos Tarmeño",
              role: "Frontend Dev",
              country: "PE",
              level: "member",
              github: "Tarmeno",
              bio: "Interesado en Product. En mentoría hasta tomar ownership",
            },
            {
              id: "edward",
              name: "Edward Ramos",
              role: "Frontend Dev",
              country: "PE",
              level: "member",
              github: "EdwardR0507",
              avatar: "https://github.com/EdwardR0507.png",
              bio: "Interesado en Product. En mentoría hasta tomar ownership",
            },
          ],
        },
        {
          id: "area-partnerships",
          name: "Partnerships & Humans",
          role: "Inbound · Talent placement",
          level: "area",
          children: [
            {
              id: "cris",
              name: "Cristian Correa",
              role: "Data Engineer",
              country: "CO",
              level: "member",
              founder: true,
              areas: ["Inbound", "Humans", "Bogotá"],
              github: "camilocbarrera",
              linkedin: "cristiancamilocorrea",
              twitter: "camilocbarrera",
              avatar: "https://github.com/camilocbarrera.png",
              bio: "Owner de Inbound y Humans. Referente del chapter Bogotá",
            },
          ],
        },
        {
          id: "area-finance",
          name: "Finanzas",
          role: "Ingresos · Egresos · Créditos",
          level: "area",
          children: [
            {
              id: "liz",
              name: "Liz Riveros",
              role: "Project Manager",
              country: "PE",
              level: "member",
              areas: ["Finanzas"],
              linkedin: "liz-riveros-00a82b9b",
              bio: "Owner de Finanzas: ingresos, egresos, créditos y precios",
            },
          ],
        },
      ],
    },
    {
      id: "cluster-crecimiento",
      name: "Crecimiento",
      role: "",
      level: "cluster",
      children: [
        {
          id: "area-events",
          name: "Eventos & Workshops",
          role: "Code Brew · Hackathones · Venues",
          level: "area",
          children: [
            {
              id: "shiara",
              name: "Shiara Arauzo",
              role: "Design Engineer",
              country: "PE",
              level: "member",
              founder: true,
              areas: ["Eventos", "Workshops", "Sponsors"],
              github: "shiarauzo",
              twitter: "shiara_gc",
              avatar: "https://github.com/shiarauzo.png",
              bio: "Owner de Eventos y Workshops pagos. Co-owner temporal de Sponsors",
            },
          ],
        },
        {
          id: "area-oss",
          name: "OSS · Web · Cursos",
          role: "Dev tools · crafter.run · Cursos",
          level: "area",
          children: [
            {
              id: "railly",
              name: "Railly Hugo",
              role: "Design Engineer",
              country: "PE",
              level: "member",
              founder: true,
              areas: ["OSS", "Web / Infra", "Cursos"],
              github: "Railly",
              linkedin: "railly-hugo",
              twitter: "raillyhugo",
              avatar: "https://github.com/Railly.png",
              bio: "Owner de OSS y dev tools, Web e Infra, y Cursos",
            },
          ],
        },
        {
          id: "area-distribution",
          name: "Distribución",
          role: "Luma hack0 · 18K subs",
          level: "area",
          children: [
            {
              id: "nacho",
              name: "Ignacio Velásquez",
              role: "Growth",
              country: "PE",
              level: "member",
              areas: ["Distribución", "Arequipa"],
              bio: "Owner de Distribución. Referente del chapter Arequipa",
            },
          ],
        },
        {
          id: "area-chapters",
          name: "Chapters",
          role: "Bogotá · Arequipa · China",
          level: "area",
          children: [
            {
              id: "nicolas",
              name: "Nicolás Vargas",
              role: "Backend Dev",
              country: "CO",
              level: "member",
              areas: ["Bogotá"],
              linkedin: "nicolas-vargas-programador",
              bio: "Chapter Bogotá",
            },
            {
              id: "emmy",
              name: "Emmy Pardo",
              role: "Community",
              country: "CO",
              level: "member",
              areas: ["Bogotá"],
              bio: "Chapter Bogotá",
            },
            {
              id: "juan",
              name: "Juan Ortega",
              role: "Community",
              country: "CO",
              level: "member",
              areas: ["Bogotá"],
              bio: "Chapter Bogotá",
            },
            {
              id: "henry",
              name: "Henry Jing",
              role: "Chapter Lead",
              country: "CN",
              level: "member",
              areas: ["China"],
              bio: "Chapter China. Maintainer de Petdex",
            },
          ],
        },
        {
          id: "area-por-definir",
          name: "Por definir",
          role: "Área en conversación",
          level: "area",
          children: [
            {
              id: "antunes",
              name: "Antunes",
              role: "Por definir",
              country: "PE",
              level: "member",
              unknown: true,
              bio: "Pendiente de definir área. Conversación abierta en el próximo mensual",
            },
          ],
        },
      ],
    },
  ],
};
