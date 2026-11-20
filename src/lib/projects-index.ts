import type { Lang } from "./content";

/** The three projects at a glance: title of the index and one short type per project (Caakus, HappyClash, Dadadu). */
export const PROJECTS_INDEX: Record<Lang, { title: string; project: string; types: [string, string, string] }> = {
  en: { title: "3 projects", project: "Project", types: ["Own product · live", "Client project · full-stack", "Mobile app · iOS & Android"] },
  de: { title: "3 Projekte", project: "Projekt", types: ["Eigenes Produkt · live", "Kundenprojekt · Full-Stack", "Mobile App · iOS & Android"] },
  fr: { title: "3 projets", project: "Projet", types: ["Produit personnel · en ligne", "Projet client · full-stack", "App mobile · iOS & Android"] },
  es: { title: "3 proyectos", project: "Proyecto", types: ["Producto propio · en vivo", "Proyecto para cliente · full-stack", "App móvil · iOS y Android"] },
  pt: { title: "3 projetos", project: "Projeto", types: ["Produto próprio · ao vivo", "Projeto para cliente · full-stack", "App móvel · iOS e Android"] },
  it: { title: "3 progetti", project: "Progetto", types: ["Prodotto proprio · live", "Progetto per cliente · full-stack", "App mobile · iOS e Android"] },
};
