import type { Lang } from "./content";

export type PortfolioProject = {
  name: string;
  category: string;
  concept: string;
  challenge: string;
  achievements: string[];
  stack: string[];
};

export type PortfolioStat = { label: string };

export type PortfolioCopy = {
  navLabel: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  role: string;
  availability: string;
  buttons: {
    cv: string;
    hire: string;
    live: string;
    github: string;
    linkedin: string;
    projects: string;
  };
  /** Order: registered users, API requests/day, countries, Google clicks (7 days) */
  stats: [PortfolioStat, PortfolioStat, PortfolioStat, PortfolioStat];
  labels: { concept: string; challenge: string; achievements: string; stack: string };
  projects: [PortfolioProject, PortfolioProject];
  proof: {
    title: string;
    lead: string;
    enlarge: string;
    /** Order: Supabase 24h, Supabase 7 days, Google Analytics, Google Search Console */
    captions: [string, string, string, string];
  };
  dadaduNote: string;
  moderationLabel: string;
  practicesTitle: string;
  practicesLead: string;
  ctaTitle: string;
  ctaLead: string;
  cta: string;
  footerRole: string;
};

const CAAKUS_STACK = [
  "TypeScript",
  "React",
  "Supabase",
  "PostgreSQL",
  "WebRTC",
  "TURN / Coturn",
  "Hetzner Linux",
  "Docker",
  "Cloudflare",
  "Vercel",
  "PayPal API",
  "Bun Tests",
];

const DADADU_STACK = ["Flutter", "Dart", "Firebase", "Supabase", "OpenAI API", "Vector DB", "Wasabi Cloud", "Cloudflare CDN"];

export const PORTFOLIO_COPY: Record<Lang, PortfolioCopy> = {
  en: {
    navLabel: "Portfolio",
    eyebrow: "Selected engineering work",
    title: "Engineering Portfolio",
    subtitle:
      "I build and run production software on my own: a real-time video platform used in more than 190 countries, and a cross-platform mobile app.",
    role: "Werkstudent · Software Development",
    availability: "Available now · Rhine-Main / Rhine-Neckar · Remote",
    buttons: {
      cv: "Download CV (PDF)",
      hire: "Hire me as a Werkstudent",
      live: "Open Caakus live",
      github: "GitHub",
      linkedin: "LinkedIn",
      projects: "See the projects",
    },
    stats: [
      { label: "registered users in two weeks" },
      { label: "API requests per day" },
      { label: "countries with active users" },
      { label: "Google clicks in 7 days" },
    ],
    labels: { concept: "The concept", challenge: "The engineering challenge", achievements: "Key achievements", stack: "Technical stack" },
    projects: [
      {
        name: "Caakus",
        category: "Live product · Founder & sole developer",
        concept: "A real-time video communication web platform that connects people across the world instantly.",
        challenge:
          "Running a near-zero-latency platform that handles secure random video connections at global scale, alone, while it grows by thousands of users per day.",
        achievements: [
          "Grew to more than 40,000 registered users in two weeks, with over 5,000 new sign-ups per day.",
          "Run the Supabase backend (PostgreSQL, Auth, Realtime, Edge Functions) at more than 1.8 million API requests per day.",
          "Built AI moderation of live video streams that runs directly in the browser and reacts in under one second.",
          "Set up Linux servers on Hetzner (TURN/Coturn) for WebRTC, then moved to Cloudflare Realtime TURN to cut costs.",
          "Integrated PayPal, Google Pay and Apple Pay for subscriptions and in-app purchases.",
          "Ship through CI/CD (GitHub, Vercel) with Docker and automated tests.",
        ],
        stack: CAAKUS_STACK,
      },
      {
        name: "Dadadu",
        category: "Mobile app · iOS & Android",
        concept:
          "A social networking app built around 20-second vertical videos and affinity matchmaking across Love, Business and Entertainment modes.",
        challenge: "Delivering fluid video, multi-criteria matchmaking and secure virtual transactions at native 60 fps.",
        achievements: [
          "Developed the complete Flutter/Dart app for iOS and Android from one codebase; 500 active users.",
          "Built AI matchmaking with the OpenAI API and vector databases.",
          "Cut video hosting costs by combining Wasabi object storage with Cloudflare CDN.",
        ],
        stack: DADADU_STACK,
      },
    ],
    proof: {
      title: "Production proof",
      lead: "Unedited screenshots from Supabase, Google Analytics and Google Search Console.",
      enlarge: "Click to enlarge",
      captions: [
        "Supabase · 1.8 million requests in 24 hours",
        "Supabase · 11 million requests in 7 days, 99.3% success rate",
        "Google Analytics · 67,000 active users",
        "Google Search Console · 60,500 clicks in 7 days",
      ],
    },
    dadaduNote: "Was available on the App Store and Google Play for one year. No longer listed.",
    moderationLabel: "AI moderation of live video",
    practicesTitle: "Development practices",
    practicesLead: "Disciplined engineering from architecture to deployment.",
    ctaTitle: "Let's build together.",
    ctaLead: "I'm looking for a Werkstudent position in software development. Available immediately.",
    cta: "Hire me as a Werkstudent",
    footerRole: "Software developer · Founder of Caakus · Worms, Germany",
  },
  de: {
    navLabel: "Portfolio",
    eyebrow: "Ausgewählte Entwicklungsprojekte",
    title: "Engineering Portfolio",
    subtitle:
      "Ich entwickle und betreibe Software im Produktivbetrieb – eigenständig: eine Echtzeit-Videoplattform mit Nutzern in über 190 Ländern und eine plattformübergreifende Mobile-App.",
    role: "Werkstudent · Softwareentwicklung",
    availability: "Ab sofort verfügbar · Rhein-Main / Rhein-Neckar · Remote",
    buttons: {
      cv: "Lebenslauf herunterladen (PDF)",
      hire: "Als Werkstudent einstellen",
      live: "Caakus live ansehen",
      github: "GitHub",
      linkedin: "LinkedIn",
      projects: "Zu den Projekten",
    },
    stats: [
      { label: "registrierte Nutzer in zwei Wochen" },
      { label: "API-Anfragen pro Tag" },
      { label: "Länder mit aktiven Nutzern" },
      { label: "Google-Klicks in 7 Tagen" },
    ],
    labels: { concept: "Das Konzept", challenge: "Die technische Herausforderung", achievements: "Wichtigste Ergebnisse", stack: "Tech-Stack" },
    projects: [
      {
        name: "Caakus",
        category: "Live-Produkt · Gründer & Alleinentwickler",
        concept: "Eine Echtzeit-Videoplattform im Web, die Menschen weltweit sofort miteinander verbindet.",
        challenge:
          "Eine nahezu latenzfreie Plattform für sichere, zufällige Videoverbindungen weltweit allein betreiben – während sie um Tausende Nutzer pro Tag wächst.",
        achievements: [
          "Über 40.000 registrierte Nutzer in zwei Wochen, mit über 5.000 Neuanmeldungen pro Tag.",
          "Betrieb des Supabase-Backends (PostgreSQL, Auth, Realtime, Edge Functions) mit über 1,8 Mio. API-Anfragen pro Tag.",
          "KI-Moderation von Live-Videostreams direkt im Browser mit einer Reaktionszeit unter einer Sekunde.",
          "Linux-Server auf Hetzner (TURN/Coturn) für WebRTC eingerichtet, danach Umstieg auf Cloudflare Realtime TURN zur Kostensenkung.",
          "PayPal, Google Pay und Apple Pay für Abos und In-App-Käufe integriert.",
          "Deployment über CI/CD (GitHub, Vercel) mit Docker und automatisierten Tests.",
        ],
        stack: CAAKUS_STACK,
      },
      {
        name: "Dadadu",
        category: "Mobile-App · iOS & Android",
        concept:
          "Eine Social-App rund um 20-Sekunden-Videos im Hochformat und Matchmaking nach Interessen in den Modi Love, Business und Entertainment.",
        challenge: "Flüssiges Video, mehrkriterielles Matchmaking und sichere virtuelle Transaktionen bei nativen 60 fps.",
        achievements: [
          "Komplette Flutter/Dart-App für iOS und Android aus einer Codebasis entwickelt; 500 aktive Nutzer.",
          "KI-Matchmaking mit OpenAI API und Vektordatenbanken umgesetzt.",
          "Video-Hostingkosten durch Wasabi Object Storage und Cloudflare CDN gesenkt.",
        ],
        stack: DADADU_STACK,
      },
    ],
    proof: {
      title: "Nachweise aus dem Produktivbetrieb",
      lead: "Unbearbeitete Screenshots aus Supabase, Google Analytics und der Google Search Console.",
      enlarge: "Zum Vergrößern klicken",
      captions: [
        "Supabase · 1,8 Mio. Anfragen in 24 Stunden",
        "Supabase · 11 Mio. Anfragen in 7 Tagen, 99,3 % Erfolgsquote",
        "Google Analytics · 67.000 aktive Nutzer",
        "Google Search Console · 60.500 Klicks in 7 Tagen",
      ],
    },
    dadaduNote: "War ein Jahr lang im App Store und bei Google Play verfügbar. Heute nicht mehr gelistet.",
    moderationLabel: "KI-Moderation von Live-Video",
    practicesTitle: "Entwicklungspraktiken",
    practicesLead: "Disziplinierte Softwareentwicklung von der Architektur bis zum Deployment.",
    ctaTitle: "Lassen Sie uns zusammen bauen.",
    ctaLead: "Ich suche eine Werkstudentenstelle in der Softwareentwicklung. Ab sofort verfügbar.",
    cta: "Als Werkstudent einstellen",
    footerRole: "Softwareentwickler · Gründer von Caakus · Worms, Deutschland",
  },
  fr: {
    navLabel: "Portfolio",
    eyebrow: "Projets d’ingénierie sélectionnés",
    title: "Engineering Portfolio",
    subtitle:
      "Je construis et j’exploite seul des logiciels en production : une plateforme vidéo en temps réel utilisée dans plus de 190 pays, et une application mobile multiplateforme.",
    role: "Werkstudent · Développement logiciel",
    availability: "Disponible immédiatement · Rhin-Main / Rhin-Neckar · Télétravail",
    buttons: {
      cv: "Télécharger le CV (PDF)",
      hire: "M’engager comme Werkstudent",
      live: "Voir Caakus en direct",
      github: "GitHub",
      linkedin: "LinkedIn",
      projects: "Voir les projets",
    },
    stats: [
      { label: "utilisateurs inscrits en deux semaines" },
      { label: "requêtes API par jour" },
      { label: "pays avec des utilisateurs actifs" },
      { label: "clics Google en 7 jours" },
    ],
    labels: { concept: "Le concept", challenge: "Le défi d’ingénierie", achievements: "Réalisations clés", stack: "Stack technique" },
    projects: [
      {
        name: "Caakus",
        category: "Produit en ligne · Fondateur & développeur unique",
        concept: "Une plateforme web de communication vidéo en temps réel qui connecte instantanément des personnes du monde entier.",
        challenge:
          "Faire tourner seul une plateforme à latence quasi nulle pour des connexions vidéo aléatoires et sécurisées à l’échelle mondiale, pendant qu’elle gagne des milliers d’utilisateurs par jour.",
        achievements: [
          "Plus de 40 000 utilisateurs inscrits en deux semaines, avec plus de 5 000 inscriptions par jour.",
          "Backend Supabase (PostgreSQL, Auth, Realtime, Edge Functions) à plus de 1,8 million de requêtes API par jour.",
          "Modération IA des flux vidéo en direct, directement dans le navigateur, en moins d’une seconde.",
          "Serveurs Linux sur Hetzner (TURN/Coturn) pour WebRTC, puis passage à Cloudflare Realtime TURN pour réduire les coûts.",
          "Intégration de PayPal, Google Pay et Apple Pay pour les abonnements et achats intégrés.",
          "Déploiement via CI/CD (GitHub, Vercel) avec Docker et tests automatisés.",
        ],
        stack: CAAKUS_STACK,
      },
      {
        name: "Dadadu",
        category: "Application mobile · iOS & Android",
        concept:
          "Une application sociale basée sur des vidéos verticales de 20 secondes et un matchmaking par affinités en modes Love, Business et Entertainment.",
        challenge: "Vidéo fluide, matchmaking multicritère et transactions virtuelles sécurisées à 60 fps natifs.",
        achievements: [
          "Application Flutter/Dart complète pour iOS et Android depuis une seule base de code ; 500 utilisateurs actifs.",
          "Matchmaking par IA avec l’API OpenAI et des bases de données vectorielles.",
          "Coûts d’hébergement vidéo réduits grâce à Wasabi Object Storage et Cloudflare CDN.",
        ],
        stack: DADADU_STACK,
      },
    ],
    proof: {
      title: "Preuves de production",
      lead: "Captures non retouchées de Supabase, Google Analytics et Google Search Console.",
      enlarge: "Cliquer pour agrandir",
      captions: [
        "Supabase · 1,8 million de requêtes en 24 heures",
        "Supabase · 11 millions de requêtes en 7 jours, 99,3 % de réussite",
        "Google Analytics · 67 000 utilisateurs actifs",
        "Google Search Console · 60 500 clics en 7 jours",
      ],
    },
    dadaduNote: "Disponible sur l’App Store et Google Play pendant un an. N’y figure plus aujourd’hui.",
    moderationLabel: "modération IA de la vidéo en direct",
    practicesTitle: "Pratiques de développement",
    practicesLead: "Une ingénierie disciplinée, de l’architecture au déploiement.",
    ctaTitle: "Construisons ensemble.",
    ctaLead: "Je cherche un poste de Werkstudent en développement logiciel. Disponible immédiatement.",
    cta: "M’engager comme Werkstudent",
    footerRole: "Développeur logiciel · Fondateur de Caakus · Worms, Allemagne",
  },
  es: {
    navLabel: "Portfolio",
    eyebrow: "Proyectos de ingeniería seleccionados",
    title: "Engineering Portfolio",
    subtitle:
      "Construyo y opero software en producción por mi cuenta: una plataforma de vídeo en tiempo real usada en más de 190 países y una app móvil multiplataforma.",
    role: "Werkstudent · Desarrollo de software",
    availability: "Disponible ya · Rin-Meno / Rin-Neckar · Remoto",
    buttons: {
      cv: "Descargar CV (PDF)",
      hire: "Contratarme como Werkstudent",
      live: "Ver Caakus en vivo",
      github: "GitHub",
      linkedin: "LinkedIn",
      projects: "Ver los proyectos",
    },
    stats: [
      { label: "usuarios registrados en dos semanas" },
      { label: "peticiones API al día" },
      { label: "países con usuarios activos" },
      { label: "clics de Google en 7 días" },
    ],
    labels: { concept: "El concepto", challenge: "El reto de ingeniería", achievements: "Logros clave", stack: "Stack técnico" },
    projects: [
      {
        name: "Caakus",
        category: "Producto en vivo · Fundador y único desarrollador",
        concept: "Una plataforma web de vídeo en tiempo real que conecta al instante a personas de todo el mundo.",
        challenge:
          "Operar en solitario una plataforma de latencia casi nula para videollamadas aleatorias y seguras a escala mundial, mientras crece en miles de usuarios al día.",
        achievements: [
          "Más de 40.000 usuarios registrados en dos semanas, con más de 5.000 altas al día.",
          "Backend en Supabase (PostgreSQL, Auth, Realtime, Edge Functions) con más de 1,8 millones de peticiones API al día.",
          "Moderación por IA de vídeo en directo, en el propio navegador, en menos de un segundo.",
          "Servidores Linux en Hetzner (TURN/Coturn) para WebRTC y migración a Cloudflare Realtime TURN para reducir costes.",
          "Integración de PayPal, Google Pay y Apple Pay para suscripciones y compras dentro de la app.",
          "Despliegue con CI/CD (GitHub, Vercel), Docker y tests automatizados.",
        ],
        stack: CAAKUS_STACK,
      },
      {
        name: "Dadadu",
        category: "App móvil · iOS y Android",
        concept:
          "Una app social basada en vídeos verticales de 20 segundos y matchmaking por afinidad en los modos Love, Business y Entertainment.",
        challenge: "Vídeo fluido, matchmaking multicriterio y transacciones virtuales seguras a 60 fps nativos.",
        achievements: [
          "App Flutter/Dart completa para iOS y Android desde una sola base de código; 500 usuarios activos.",
          "Matchmaking con IA usando la API de OpenAI y bases de datos vectoriales.",
          "Costes de vídeo reducidos combinando Wasabi Object Storage y Cloudflare CDN.",
        ],
        stack: DADADU_STACK,
      },
    ],
    proof: {
      title: "Pruebas de producción",
      lead: "Capturas sin editar de Supabase, Google Analytics y Google Search Console.",
      enlarge: "Haz clic para ampliar",
      captions: [
        "Supabase · 1,8 millones de peticiones en 24 horas",
        "Supabase · 11 millones de peticiones en 7 días, 99,3 % de éxito",
        "Google Analytics · 67.000 usuarios activos",
        "Google Search Console · 60.500 clics en 7 días",
      ],
    },
    dadaduNote: "Estuvo disponible un año en App Store y Google Play. Ya no aparece en las tiendas.",
    moderationLabel: "moderación IA del vídeo en directo",
    practicesTitle: "Prácticas de desarrollo",
    practicesLead: "Ingeniería disciplinada, desde la arquitectura hasta el despliegue.",
    ctaTitle: "Construyamos juntos.",
    ctaLead: "Busco un puesto de Werkstudent en desarrollo de software. Disponible de inmediato.",
    cta: "Contratarme como Werkstudent",
    footerRole: "Desarrollador de software · Fundador de Caakus · Worms, Alemania",
  },
  pt: {
    navLabel: "Portfólio",
    eyebrow: "Projetos de engenharia selecionados",
    title: "Engineering Portfolio",
    subtitle:
      "Construo e opero sozinho software em produção: uma plataforma de vídeo em tempo real usada em mais de 190 países e uma app móvel multiplataforma.",
    role: "Werkstudent · Desenvolvimento de software",
    availability: "Disponível já · Reno-Meno / Reno-Neckar · Remoto",
    buttons: {
      cv: "Descarregar CV (PDF)",
      hire: "Contratar-me como Werkstudent",
      live: "Ver o Caakus ao vivo",
      github: "GitHub",
      linkedin: "LinkedIn",
      projects: "Ver os projetos",
    },
    stats: [
      { label: "utilizadores registados em duas semanas" },
      { label: "pedidos API por dia" },
      { label: "países com utilizadores ativos" },
      { label: "cliques no Google em 7 dias" },
    ],
    labels: { concept: "O conceito", challenge: "O desafio de engenharia", achievements: "Principais realizações", stack: "Stack técnica" },
    projects: [
      {
        name: "Caakus",
        category: "Produto ao vivo · Fundador e único programador",
        concept: "Uma plataforma web de vídeo em tempo real que liga instantaneamente pessoas de todo o mundo.",
        challenge:
          "Operar sozinho uma plataforma de latência quase nula para videochamadas aleatórias e seguras à escala global, enquanto cresce milhares de utilizadores por dia.",
        achievements: [
          "Mais de 40.000 utilizadores registados em duas semanas, com mais de 5.000 registos por dia.",
          "Backend Supabase (PostgreSQL, Auth, Realtime, Edge Functions) com mais de 1,8 milhões de pedidos API por dia.",
          "Moderação por IA de vídeo ao vivo, diretamente no navegador, em menos de um segundo.",
          "Servidores Linux na Hetzner (TURN/Coturn) para WebRTC e migração para Cloudflare Realtime TURN para reduzir custos.",
          "Integração de PayPal, Google Pay e Apple Pay para subscrições e compras na app.",
          "Deployment com CI/CD (GitHub, Vercel), Docker e testes automatizados.",
        ],
        stack: CAAKUS_STACK,
      },
      {
        name: "Dadadu",
        category: "App móvel · iOS e Android",
        concept:
          "Uma app social baseada em vídeos verticais de 20 segundos e matchmaking por afinidade nos modos Love, Business e Entertainment.",
        challenge: "Vídeo fluido, matchmaking multicritério e transações virtuais seguras a 60 fps nativos.",
        achievements: [
          "App Flutter/Dart completa para iOS e Android a partir de uma única base de código; 500 utilizadores ativos.",
          "Matchmaking com IA usando a API da OpenAI e bases de dados vetoriais.",
          "Custos de vídeo reduzidos com Wasabi Object Storage e Cloudflare CDN.",
        ],
        stack: DADADU_STACK,
      },
    ],
    proof: {
      title: "Provas de produção",
      lead: "Capturas sem edição do Supabase, Google Analytics e Google Search Console.",
      enlarge: "Clique para ampliar",
      captions: [
        "Supabase · 1,8 milhões de pedidos em 24 horas",
        "Supabase · 11 milhões de pedidos em 7 dias, 99,3 % de sucesso",
        "Google Analytics · 67.000 utilizadores ativos",
        "Google Search Console · 60.500 cliques em 7 dias",
      ],
    },
    dadaduNote: "Esteve disponível durante um ano na App Store e no Google Play. Já não está listada.",
    moderationLabel: "moderação IA do vídeo ao vivo",
    practicesTitle: "Práticas de desenvolvimento",
    practicesLead: "Engenharia disciplinada, da arquitetura ao deployment.",
    ctaTitle: "Vamos construir juntos.",
    ctaLead: "Procuro uma posição de Werkstudent em desenvolvimento de software. Disponível de imediato.",
    cta: "Contratar-me como Werkstudent",
    footerRole: "Programador de software · Fundador do Caakus · Worms, Alemanha",
  },
  it: {
    navLabel: "Portfolio",
    eyebrow: "Progetti di ingegneria selezionati",
    title: "Engineering Portfolio",
    subtitle:
      "Costruisco e gestisco da solo software in produzione: una piattaforma video in tempo reale usata in oltre 190 paesi e un’app mobile multipiattaforma.",
    role: "Werkstudent · Sviluppo software",
    availability: "Disponibile subito · Reno-Meno / Reno-Neckar · Da remoto",
    buttons: {
      cv: "Scarica il CV (PDF)",
      hire: "Assumimi come Werkstudent",
      live: "Apri Caakus dal vivo",
      github: "GitHub",
      linkedin: "LinkedIn",
      projects: "Vedi i progetti",
    },
    stats: [
      { label: "utenti registrati in due settimane" },
      { label: "richieste API al giorno" },
      { label: "paesi con utenti attivi" },
      { label: "clic su Google in 7 giorni" },
    ],
    labels: { concept: "Il concetto", challenge: "La sfida ingegneristica", achievements: "Risultati principali", stack: "Stack tecnico" },
    projects: [
      {
        name: "Caakus",
        category: "Prodotto live · Fondatore e unico sviluppatore",
        concept: "Una piattaforma web di videochiamate in tempo reale che collega all’istante persone di tutto il mondo.",
        challenge:
          "Gestire da solo una piattaforma a latenza quasi zero per videochiamate casuali e sicure su scala globale, mentre cresce di migliaia di utenti al giorno.",
        achievements: [
          "Oltre 40.000 utenti registrati in due settimane, con più di 5.000 nuove iscrizioni al giorno.",
          "Backend Supabase (PostgreSQL, Auth, Realtime, Edge Functions) con oltre 1,8 milioni di richieste API al giorno.",
          "Moderazione IA dei video live direttamente nel browser, in meno di un secondo.",
          "Server Linux su Hetzner (TURN/Coturn) per WebRTC, poi passaggio a Cloudflare Realtime TURN per ridurre i costi.",
          "Integrazione di PayPal, Google Pay e Apple Pay per abbonamenti e acquisti in-app.",
          "Deployment con CI/CD (GitHub, Vercel), Docker e test automatizzati.",
        ],
        stack: CAAKUS_STACK,
      },
      {
        name: "Dadadu",
        category: "App mobile · iOS e Android",
        concept:
          "Un’app social basata su video verticali di 20 secondi e matchmaking per affinità nelle modalità Love, Business ed Entertainment.",
        challenge: "Video fluido, matchmaking multicriterio e transazioni virtuali sicure a 60 fps nativi.",
        achievements: [
          "App Flutter/Dart completa per iOS e Android da un’unica codebase; 500 utenti attivi.",
          "Matchmaking con IA tramite l’API di OpenAI e database vettoriali.",
          "Costi video ridotti combinando Wasabi Object Storage e Cloudflare CDN.",
        ],
        stack: DADADU_STACK,
      },
    ],
    proof: {
      title: "Prove dalla produzione",
      lead: "Screenshot non modificati da Supabase, Google Analytics e Google Search Console.",
      enlarge: "Clicca per ingrandire",
      captions: [
        "Supabase · 1,8 milioni di richieste in 24 ore",
        "Supabase · 11 milioni di richieste in 7 giorni, 99,3 % di successo",
        "Google Analytics · 67.000 utenti attivi",
        "Google Search Console · 60.500 clic in 7 giorni",
      ],
    },
    dadaduNote: "È stata disponibile per un anno su App Store e Google Play. Oggi non è più presente.",
    moderationLabel: "moderazione IA del video live",
    practicesTitle: "Pratiche di sviluppo",
    practicesLead: "Ingegneria disciplinata, dall’architettura al deployment.",
    ctaTitle: "Costruiamo insieme.",
    ctaLead: "Cerco una posizione da Werkstudent nello sviluppo software. Disponibile subito.",
    cta: "Assumimi come Werkstudent",
    footerRole: "Sviluppatore software · Fondatore di Caakus · Worms, Germania",
  },
};
