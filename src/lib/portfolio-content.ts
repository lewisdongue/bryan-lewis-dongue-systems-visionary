import type { Lang } from "./content";

export type PortfolioProject = {
  name: string;
  category: string;
  concept: string;
  challenge: string;
  achievements: string[];
  stack: string[];
};

export type PortfolioCopy = {
  navLabel: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  labels: { concept: string; challenge: string; achievements: string; stack: string };
  projects: PortfolioProject[];
  practicesTitle: string;
  practicesLead: string;
  cta: string;
};

const sharedProjects = {
  caakus: {
    name: "Caakus",
    category: "Advanced Personal Engineering Project",
    concept: "A real-time video communication web platform integrating a financial reward economy.",
    stack: ["TypeScript", "Custom Backend", "AI Models", "Cloudflare", "Vercel", "Git"],
  },
  dadadu: {
    name: "Dadadu",
    category: "Production-Grade Mobile App Project · Published on App Store & Play Store",
    concept:
      "A social networking mobile app built around 20-second vertical videos and affinity matchmaking across Love, Business and Entertainment modes, with a Diamonds virtual economy and badge progression.",
    stack: ["Flutter", "Dart", "Firebase", "Supabase", "Wasabi Cloud", "Cloudflare"],
  },
};

export const PORTFOLIO_COPY: Record<Lang, PortfolioCopy> = {
  en: {
    navLabel: "Portfolio",
    eyebrow: "Selected engineering work",
    title: "Engineering Portfolio",
    subtitle: "Building production-ready applications with modern cloud architectures.",
    labels: { concept: "The concept", challenge: "The Engineering Challenge", achievements: "Key Achievements", stack: "Technical Stack" },
    projects: [
      {
        ...sharedProjects.caakus,
        challenge: "Designing a near-zero-latency platform able to handle secure random video connections at global scale.",
        achievements: [
          "Architected and developed a complete, ultra-fast custom backend in TypeScript.",
          "Implemented AI models for moderation and automated regulation of real-time streams.",
          "Built an automated GitHub/Vercel CI/CD pipeline and secured global traffic through Cloudflare.",
        ],
      },
      {
        ...sharedProjects.dadadu,
        challenge: "Delivering fluid video streaming, multi-criteria matchmaking and secure virtual transactions while sustaining native 60fps performance.",
        achievements: [
          "Developed the complete Flutter/Dart application for iOS and Android from one codebase.",
          "Designed a hybrid data architecture: Firebase for real-time events and Supabase for complex relational matchmaking queries.",
          "Drastically reduced video hosting costs and optimized bandwidth by combining Wasabi object storage with Cloudflare CDN.",
        ],
      },
    ],
    practicesTitle: "Development Practices",
    practicesLead: "Disciplined engineering from architecture to deployment.",
    cta: "Hire me as a Werkstudent",
  },
  fr: {
    navLabel: "Portfolio",
    eyebrow: "Projets d’ingénierie sélectionnés",
    title: "Engineering Portfolio",
    subtitle: "Building production-ready applications with modern cloud architectures.",
    labels: { concept: "Le concept", challenge: "Le défi d’ingénierie", achievements: "Mes réalisations", stack: "Stack technique" },
    projects: [
      {
        ...sharedProjects.caakus,
        challenge: "Concevoir une plateforme à latence quasi nulle, capable de gérer des connexions vidéo aléatoires sécurisées à l’échelle mondiale.",
        achievements: [
          "Architecture et développement complet d’un backend sur mesure ultra-rapide en TypeScript.",
          "Implémentation de modèles d’IA pour la modération et la régulation automatique des flux en temps réel.",
          "Mise en place d’un pipeline CI/CD automatisé GitHub/Vercel et sécurisation du trafic mondial via Cloudflare.",
        ],
      },
      {
        ...sharedProjects.dadadu,
        challenge: "Gérer le streaming vidéo fluide, un matchmaking multicritère et des transactions virtuelles sécurisées, avec des performances natives à 60 fps.",
        achievements: [
          "Développement complet en Flutter/Dart pour iOS et Android depuis une base de code unique.",
          "Conception d’une architecture hybride : Firebase pour le temps réel et Supabase pour les requêtes relationnelles complexes de matchmaking.",
          "Réduction drastique des coûts vidéo et optimisation de la bande passante avec Wasabi Object Storage et Cloudflare CDN.",
        ],
      },
    ],
    practicesTitle: "Pratiques de développement",
    practicesLead: "Une ingénierie disciplinée, de l’architecture au déploiement.",
    cta: "Hire me as a Werkstudent",
  },
  de: {
    navLabel: "Portfolio",
    eyebrow: "Ausgewählte Entwicklungsprojekte",
    title: "Engineering Portfolio",
    subtitle: "Building production-ready applications with modern cloud architectures.",
    labels: { concept: "Das Konzept", challenge: "Die technische Herausforderung", achievements: "Wichtigste Ergebnisse", stack: "Tech-Stack" },
    projects: [
      { ...sharedProjects.caakus, challenge: "Entwicklung einer nahezu latenzfreien Plattform für sichere, zufällige Videoverbindungen auf globaler Ebene.", achievements: ["Architektur und vollständige Entwicklung eines schnellen, individuellen TypeScript-Backends.", "Integration von KI-Modellen zur Moderation und automatischen Regulierung von Echtzeit-Streams.", "Automatisierte GitHub/Vercel-CI/CD-Pipeline und Absicherung des globalen Datenverkehrs mit Cloudflare."] },
      { ...sharedProjects.dadadu, challenge: "Flüssiges Video-Streaming, mehrkriterielles Matchmaking und sichere virtuelle Transaktionen bei nativer 60-fps-Leistung.", achievements: ["Vollständige Flutter/Dart-Entwicklung für iOS und Android aus einer gemeinsamen Codebasis.", "Hybride Datenarchitektur: Firebase für Echtzeit-Ereignisse und Supabase für komplexe relationale Matchmaking-Abfragen.", "Deutlich reduzierte Video-Hostingkosten und optimierte Bandbreite durch Wasabi Object Storage und Cloudflare CDN."] },
    ],
    practicesTitle: "Entwicklungspraktiken",
    practicesLead: "Disziplinierte Softwareentwicklung von der Architektur bis zum Deployment.",
    cta: "Hire me as a Werkstudent",
  },
  es: {
    navLabel: "Portfolio", eyebrow: "Proyectos de ingeniería seleccionados", title: "Engineering Portfolio", subtitle: "Building production-ready applications with modern cloud architectures.",
    labels: { concept: "El concepto", challenge: "El reto de ingeniería", achievements: "Logros clave", stack: "Stack técnico" },
    projects: [
      { ...sharedProjects.caakus, challenge: "Diseñar una plataforma de latencia casi nula para conexiones de vídeo aleatorias y seguras a escala mundial.", achievements: ["Arquitectura y desarrollo completo de un backend TypeScript personalizado y ultrarrápido.", "Implementación de modelos de IA para moderar y regular automáticamente los flujos en tiempo real.", "Pipeline CI/CD automatizado con GitHub/Vercel y protección del tráfico global mediante Cloudflare."] },
      { ...sharedProjects.dadadu, challenge: "Gestionar vídeo fluido, matchmaking multicriterio y transacciones virtuales seguras manteniendo un rendimiento nativo de 60 fps.", achievements: ["Desarrollo completo en Flutter/Dart para iOS y Android desde una sola base de código.", "Arquitectura híbrida: Firebase para tiempo real y Supabase para consultas relacionales complejas de matchmaking.", "Reducción drástica de costes de vídeo y optimización del ancho de banda con Wasabi y Cloudflare CDN."] },
    ], practicesTitle: "Prácticas de desarrollo", practicesLead: "Ingeniería disciplinada, desde la arquitectura hasta el despliegue.", cta: "Hire me as a Werkstudent",
  },
  pt: {
    navLabel: "Portfólio", eyebrow: "Projetos de engenharia selecionados", title: "Engineering Portfolio", subtitle: "Building production-ready applications with modern cloud architectures.",
    labels: { concept: "O conceito", challenge: "O desafio de engenharia", achievements: "Principais realizações", stack: "Stack técnica" },
    projects: [
      { ...sharedProjects.caakus, challenge: "Projetar uma plataforma de latência quase nula para ligações de vídeo aleatórias e seguras à escala global.", achievements: ["Arquitetura e desenvolvimento completo de um backend TypeScript personalizado e ultrarrápido.", "Implementação de modelos de IA para moderação e regulação automática de fluxos em tempo real.", "Pipeline CI/CD automatizado GitHub/Vercel e proteção do tráfego global com Cloudflare."] },
      { ...sharedProjects.dadadu, challenge: "Gerir streaming de vídeo fluido, matchmaking multicritério e transações virtuais seguras com desempenho nativo de 60 fps.", achievements: ["Desenvolvimento Flutter/Dart completo para iOS e Android a partir de uma única base de código.", "Arquitetura híbrida: Firebase para tempo real e Supabase para consultas relacionais complexas de matchmaking.", "Redução drástica de custos de vídeo e otimização da largura de banda com Wasabi e Cloudflare CDN."] },
    ], practicesTitle: "Práticas de desenvolvimento", practicesLead: "Engenharia disciplinada, da arquitetura ao deployment.", cta: "Hire me as a Werkstudent",
  },
  it: {
    navLabel: "Portfolio", eyebrow: "Progetti di ingegneria selezionati", title: "Engineering Portfolio", subtitle: "Building production-ready applications with modern cloud architectures.",
    labels: { concept: "Il concetto", challenge: "La sfida ingegneristica", achievements: "Risultati principali", stack: "Stack tecnico" },
    projects: [
      { ...sharedProjects.caakus, challenge: "Progettare una piattaforma a latenza quasi zero per connessioni video casuali e sicure su scala globale.", achievements: ["Architettura e sviluppo completo di un backend TypeScript personalizzato e ultrarapido.", "Implementazione di modelli IA per moderare e regolare automaticamente i flussi in tempo reale.", "Pipeline CI/CD automatizzata GitHub/Vercel e protezione del traffico globale tramite Cloudflare."] },
      { ...sharedProjects.dadadu, challenge: "Gestire streaming video fluido, matchmaking multicriterio e transazioni virtuali sicure mantenendo prestazioni native a 60 fps.", achievements: ["Sviluppo Flutter/Dart completo per iOS e Android da un’unica codebase.", "Architettura ibrida: Firebase per il tempo reale e Supabase per query relazionali complesse di matchmaking.", "Riduzione drastica dei costi video e ottimizzazione della banda con Wasabi e Cloudflare CDN."] },
    ], practicesTitle: "Pratiche di sviluppo", practicesLead: "Ingegneria disciplinata, dall’architettura al deployment.", cta: "Hire me as a Werkstudent",
  },
};