import type { Lang } from "./content";

/** HappyClash: full-stack client project, shown second on /portfolio (after Caakus). */
export type HappyClashCopy = {
  name: string;
  badge: string;
  category: string;
  live: string;
  concept: string;
  client: string;
  challenge: string;
  achievements: string[];
  /** Order: lines of TypeScript, database migrations, app screens, tables protected by row level security */
  metrics: [string, string, string, string];
  layers: { title: string; items: string }[];
};

export const HAPPYCLASH_URL = "https://happyclash.com";

export const HAPPYCLASH_STACK = [
  "React 19",
  "TypeScript (strict)",
  "Tailwind CSS 4",
  "TanStack Query",
  "Supabase",
  "PostgreSQL + RLS",
  "Edge Functions (Deno)",
  "Supabase Realtime",
  "WebRTC",
  "Cloudflare Realtime (SFU)",
  "three.js",
  "PWA (Workbox)",
  "Vercel",
];

export const HAPPYCLASH_COPY: Record<Lang, HappyClashCopy> = {
  en: {
    name: "HappyClash",
    badge: "Client project · delivered to production",
    category: "Full-stack web platform · Sole developer, end to end",
    live: "Open HappyClash live",
    concept:
      "A social talent platform: people post short talent videos (music, dance, sport, comedy…), answer each other with a “Clash Back”, and compete in Clashes — one-on-one blind duels, group battles and live clashes with an audience — with rankings, trophies and a 3D world.",
    client:
      "Commissioned by a paying client from a detailed German specification (27 screens, 22 acceptance criteria). I owned the whole delivery: architecture, database, backend, frontend, live video, 3D, deployment and documentation.",
    challenge:
      "Turning a large product specification into a secure, real-time, mobile-first platform — video upload, live streaming, voting, moderation and an admin console — that a client can run and hand to a store developer.",
    achievements: [
      "Designed the PostgreSQL data model in 30 versioned migrations, with row level security on every table, triggers for counters and rankings, and server-side rules (e.g. 60-second video limit enforced in the database).",
      "Built live clashes on WebRTC through Cloudflare Realtime (SFU), brokered by a Supabase Edge Function that keeps every secret on the server.",
      "Shipped a real-time feed, notifications and an admin console (moderation queues, reports, user management) on Supabase Realtime.",
      "Blind duel voting, Clash Back chains, group battles, rankings and profiles with live statistics — all on real data, no mock content.",
      "In-browser video trimming before upload (no re-encoding, no server cost) and an installable PWA ready to be wrapped for the App Store and Google Play.",
      "A 3D city (“Life”) in three.js where each Talent World has its own arena, with lazy-loaded, compressed 3D models.",
      "Mobile-first and responsive, every page lazy-loaded, deployed continuously from GitHub to Vercel, with architecture, database and operations documentation.",
    ],
    metrics: ["lines of strict TypeScript", "database migrations", "app screens", "tables protected by RLS"],
    layers: [
      { title: "Frontend", items: "React 19 · TypeScript · Tailwind 4 · motion · three.js · PWA" },
      { title: "Backend", items: "PostgreSQL · Row Level Security · triggers · RPC · Edge Functions" },
      { title: "Real-time", items: "Supabase Realtime · WebRTC · Cloudflare Realtime SFU" },
      { title: "Delivery", items: "GitHub · Vercel CI/CD · Cloudflare · technical docs" },
    ],
  },
  de: {
    name: "HappyClash",
    badge: "Kundenprojekt · produktiv ausgeliefert",
    category: "Full-Stack-Webplattform · alleiniger Entwickler, von A bis Z",
    live: "HappyClash live öffnen",
    concept:
      "Eine soziale Talent-Plattform: Nutzer posten kurze Talent-Videos (Musik, Tanz, Sport, Comedy …), antworten einander mit einem „Clash Back“ und treten in Clashes gegeneinander an — anonyme 1-gegen-1-Duelle, Gruppen-Battles und Live-Clashes mit Publikum — mit Rankings, Trophäen und einer 3D-Welt.",
    client:
      "Im Auftrag eines zahlenden Kunden nach einer detaillierten Spezifikation (27 Screens, 22 Abnahmekriterien) umgesetzt. Ich habe die gesamte Lieferung verantwortet: Architektur, Datenbank, Backend, Frontend, Live-Video, 3D, Deployment und Dokumentation.",
    challenge:
      "Eine umfangreiche Produktspezifikation in eine sichere, echtzeitfähige, Mobile-first-Plattform übersetzen — Video-Upload, Live-Streaming, Voting, Moderation und Admin-Konsole —, die der Kunde selbst betreiben und an einen App-Store-Entwickler übergeben kann.",
    achievements: [
      "PostgreSQL-Datenmodell in 30 versionierten Migrationen entworfen, mit Row Level Security auf jeder Tabelle, Triggern für Zähler und Rankings und serverseitigen Regeln (z. B. 60-Sekunden-Limit für Videos direkt in der Datenbank).",
      "Live-Clashes mit WebRTC über Cloudflare Realtime (SFU) gebaut, vermittelt durch eine Supabase Edge Function, die alle Secrets auf dem Server hält.",
      "Echtzeit-Feed, Benachrichtigungen und Admin-Konsole (Moderations-Queues, Meldungen, Nutzerverwaltung) auf Basis von Supabase Realtime.",
      "Anonymes Duell-Voting, Clash-Back-Ketten, Gruppen-Battles, Rankings und Profile mit Live-Statistiken — ausschließlich mit echten Daten, ohne Mock-Inhalte.",
      "Videoschnitt direkt im Browser vor dem Upload (ohne Re-Encoding, ohne Serverkosten) und eine installierbare PWA, bereit für App Store und Google Play.",
      "Eine 3D-Stadt („Life“) in three.js, in der jede Talent-Welt ihre eigene Arena hat, mit lazy geladenen, komprimierten 3D-Modellen.",
      "Mobile-first und responsiv, jede Seite lazy geladen, Continuous Deployment von GitHub auf Vercel, mit Architektur-, Datenbank- und Betriebsdokumentation.",
    ],
    metrics: ["Zeilen striktes TypeScript", "Datenbank-Migrationen", "App-Screens", "Tabellen mit RLS geschützt"],
    layers: [
      { title: "Frontend", items: "React 19 · TypeScript · Tailwind 4 · motion · three.js · PWA" },
      { title: "Backend", items: "PostgreSQL · Row Level Security · Trigger · RPC · Edge Functions" },
      { title: "Echtzeit", items: "Supabase Realtime · WebRTC · Cloudflare Realtime SFU" },
      { title: "Auslieferung", items: "GitHub · Vercel CI/CD · Cloudflare · technische Doku" },
    ],
  },
  fr: {
    name: "HappyClash",
    badge: "Projet client · livré en production",
    category: "Plateforme web full-stack · Seul développeur, de A à Z",
    live: "Ouvrir HappyClash en ligne",
    concept:
      "Une plateforme sociale de talents : les utilisateurs publient de courtes vidéos de talent (musique, danse, sport, humour…), se répondent par un « Clash Back » et s’affrontent dans des Clashes — duels à l’aveugle en un contre un, batailles de groupes et clashes en direct devant un public — avec classements, trophées et un monde en 3D.",
    client:
      "Réalisé pour un client payant à partir d’un cahier des charges détaillé (27 écrans, 22 critères d’acceptation). J’ai porté toute la livraison : architecture, base de données, backend, frontend, vidéo en direct, 3D, déploiement et documentation.",
    challenge:
      "Transformer un cahier des charges ambitieux en une plateforme sécurisée, temps réel et pensée mobile d’abord — upload vidéo, live, votes, modération et console d’administration — que le client peut exploiter seul et confier à un développeur pour les stores.",
    achievements: [
      "Modèle de données PostgreSQL conçu en 30 migrations versionnées, avec Row Level Security sur chaque table, triggers pour compteurs et classements, et règles côté serveur (ex. limite de 60 secondes par vidéo appliquée dans la base).",
      "Clashes en direct en WebRTC via Cloudflare Realtime (SFU), orchestrés par une Edge Function Supabase qui garde tous les secrets côté serveur.",
      "Fil en temps réel, notifications et console d’administration (files de modération, signalements, gestion des utilisateurs) sur Supabase Realtime.",
      "Votes de duels à l’aveugle, chaînes de Clash Back, batailles de groupes, classements et profils avec statistiques en direct — uniquement sur données réelles, aucun contenu factice.",
      "Découpe vidéo directement dans le navigateur avant l’upload (sans réencodage, sans coût serveur) et PWA installable, prête pour l’App Store et Google Play.",
      "Une ville en 3D (« Life ») en three.js où chaque univers de talent a sa propre arène, avec des modèles 3D compressés chargés à la demande.",
      "Mobile d’abord et responsive, chaque page chargée à la demande, déploiement continu de GitHub vers Vercel, avec documentation d’architecture, de base de données et d’exploitation.",
    ],
    metrics: ["lignes de TypeScript strict", "migrations de base de données", "écrans de l’application", "tables protégées par RLS"],
    layers: [
      { title: "Frontend", items: "React 19 · TypeScript · Tailwind 4 · motion · three.js · PWA" },
      { title: "Backend", items: "PostgreSQL · Row Level Security · triggers · RPC · Edge Functions" },
      { title: "Temps réel", items: "Supabase Realtime · WebRTC · Cloudflare Realtime SFU" },
      { title: "Livraison", items: "GitHub · Vercel CI/CD · Cloudflare · documentation technique" },
    ],
  },
  es: {
    name: "HappyClash",
    badge: "Proyecto para cliente · en producción",
    category: "Plataforma web full-stack · Único desarrollador, de principio a fin",
    live: "Abrir HappyClash en vivo",
    concept:
      "Una plataforma social de talento: los usuarios publican vídeos cortos (música, baile, deporte, comedia…), se responden con un “Clash Back” y compiten en Clashes — duelos a ciegas uno contra uno, batallas de grupos y clashes en directo con público — con rankings, trofeos y un mundo 3D.",
    client:
      "Encargado por un cliente de pago a partir de una especificación detallada (27 pantallas, 22 criterios de aceptación). Me encargué de toda la entrega: arquitectura, base de datos, backend, frontend, vídeo en directo, 3D, despliegue y documentación.",
    challenge:
      "Convertir una especificación de producto extensa en una plataforma segura, en tiempo real y mobile-first — subida de vídeo, directos, votaciones, moderación y consola de administración — que el cliente puede operar y entregar a un desarrollador de tiendas.",
    achievements: [
      "Modelo de datos PostgreSQL en 30 migraciones versionadas, con Row Level Security en cada tabla, triggers para contadores y rankings, y reglas en el servidor (p. ej. límite de 60 segundos por vídeo en la base de datos).",
      "Clashes en directo con WebRTC a través de Cloudflare Realtime (SFU), coordinados por una Edge Function de Supabase que guarda todos los secretos en el servidor.",
      "Feed en tiempo real, notificaciones y consola de administración (colas de moderación, denuncias, gestión de usuarios) con Supabase Realtime.",
      "Votación de duelos a ciegas, cadenas de Clash Back, batallas de grupos, rankings y perfiles con estadísticas en vivo — solo con datos reales, sin contenido simulado.",
      "Recorte de vídeo en el navegador antes de subirlo (sin recodificar, sin coste de servidor) y una PWA instalable lista para App Store y Google Play.",
      "Una ciudad 3D (“Life”) en three.js donde cada mundo de talento tiene su propia arena, con modelos 3D comprimidos cargados bajo demanda.",
      "Mobile-first y responsive, cada página cargada bajo demanda, despliegue continuo de GitHub a Vercel, con documentación de arquitectura, base de datos y operaciones.",
    ],
    metrics: ["líneas de TypeScript estricto", "migraciones de base de datos", "pantallas de la app", "tablas protegidas con RLS"],
    layers: [
      { title: "Frontend", items: "React 19 · TypeScript · Tailwind 4 · motion · three.js · PWA" },
      { title: "Backend", items: "PostgreSQL · Row Level Security · triggers · RPC · Edge Functions" },
      { title: "Tiempo real", items: "Supabase Realtime · WebRTC · Cloudflare Realtime SFU" },
      { title: "Entrega", items: "GitHub · Vercel CI/CD · Cloudflare · documentación técnica" },
    ],
  },
  pt: {
    name: "HappyClash",
    badge: "Projeto para cliente · em produção",
    category: "Plataforma web full-stack · Único programador, de ponta a ponta",
    live: "Abrir o HappyClash ao vivo",
    concept:
      "Uma plataforma social de talentos: os utilizadores publicam vídeos curtos (música, dança, desporto, comédia…), respondem uns aos outros com um “Clash Back” e competem em Clashes — duelos às cegas um contra um, batalhas de grupos e clashes ao vivo com público — com rankings, troféus e um mundo 3D.",
    client:
      "Encomendado por um cliente pagante a partir de uma especificação detalhada (27 ecrãs, 22 critérios de aceitação). Assumi toda a entrega: arquitetura, base de dados, backend, frontend, vídeo ao vivo, 3D, deployment e documentação.",
    challenge:
      "Transformar uma especificação extensa numa plataforma segura, em tempo real e mobile-first — upload de vídeo, diretos, votações, moderação e consola de administração — que o cliente pode operar e entregar a um programador das lojas.",
    achievements: [
      "Modelo de dados PostgreSQL em 30 migrações versionadas, com Row Level Security em todas as tabelas, triggers para contadores e rankings, e regras no servidor (ex.: limite de 60 segundos por vídeo na base de dados).",
      "Clashes ao vivo com WebRTC através do Cloudflare Realtime (SFU), coordenados por uma Edge Function do Supabase que mantém todos os segredos no servidor.",
      "Feed em tempo real, notificações e consola de administração (filas de moderação, denúncias, gestão de utilizadores) com Supabase Realtime.",
      "Votação de duelos às cegas, cadeias de Clash Back, batalhas de grupos, rankings e perfis com estatísticas ao vivo — só com dados reais, sem conteúdo simulado.",
      "Corte de vídeo no navegador antes do upload (sem recodificação, sem custo de servidor) e uma PWA instalável pronta para App Store e Google Play.",
      "Uma cidade 3D (“Life”) em three.js onde cada mundo de talento tem a sua arena, com modelos 3D comprimidos carregados a pedido.",
      "Mobile-first e responsiva, cada página carregada a pedido, deployment contínuo do GitHub para a Vercel, com documentação de arquitetura, base de dados e operações.",
    ],
    metrics: ["linhas de TypeScript estrito", "migrações de base de dados", "ecrãs da app", "tabelas protegidas por RLS"],
    layers: [
      { title: "Frontend", items: "React 19 · TypeScript · Tailwind 4 · motion · three.js · PWA" },
      { title: "Backend", items: "PostgreSQL · Row Level Security · triggers · RPC · Edge Functions" },
      { title: "Tempo real", items: "Supabase Realtime · WebRTC · Cloudflare Realtime SFU" },
      { title: "Entrega", items: "GitHub · Vercel CI/CD · Cloudflare · documentação técnica" },
    ],
  },
  it: {
    name: "HappyClash",
    badge: "Progetto per cliente · in produzione",
    category: "Piattaforma web full-stack · Unico sviluppatore, dall’inizio alla fine",
    live: "Apri HappyClash online",
    concept:
      "Una piattaforma social per talenti: gli utenti pubblicano brevi video (musica, danza, sport, comedy…), si rispondono con un “Clash Back” e si sfidano nei Clash — duelli alla cieca uno contro uno, battaglie di gruppo e clash in diretta con il pubblico — con classifiche, trofei e un mondo 3D.",
    client:
      "Commissionato da un cliente pagante sulla base di una specifica dettagliata (27 schermate, 22 criteri di accettazione). Ho curato l’intera consegna: architettura, database, backend, frontend, video live, 3D, deployment e documentazione.",
    challenge:
      "Trasformare una specifica di prodotto ampia in una piattaforma sicura, in tempo reale e mobile-first — upload video, dirette, votazioni, moderazione e console di amministrazione — che il cliente può gestire e affidare a uno sviluppatore per gli store.",
    achievements: [
      "Modello dati PostgreSQL in 30 migrazioni versionate, con Row Level Security su ogni tabella, trigger per contatori e classifiche e regole lato server (es. limite di 60 secondi per video nel database).",
      "Clash in diretta con WebRTC tramite Cloudflare Realtime (SFU), orchestrati da una Edge Function Supabase che tiene tutti i segreti sul server.",
      "Feed in tempo reale, notifiche e console di amministrazione (code di moderazione, segnalazioni, gestione utenti) su Supabase Realtime.",
      "Voto ai duelli alla cieca, catene di Clash Back, battaglie di gruppo, classifiche e profili con statistiche live — solo dati reali, nessun contenuto fittizio.",
      "Taglio dei video nel browser prima dell’upload (senza ricodifica, senza costi server) e una PWA installabile pronta per App Store e Google Play.",
      "Una città 3D (“Life”) in three.js dove ogni mondo di talento ha la sua arena, con modelli 3D compressi caricati su richiesta.",
      "Mobile-first e responsive, ogni pagina caricata su richiesta, deployment continuo da GitHub a Vercel, con documentazione di architettura, database e operazioni.",
    ],
    metrics: ["righe di TypeScript strict", "migrazioni del database", "schermate dell’app", "tabelle protette da RLS"],
    layers: [
      { title: "Frontend", items: "React 19 · TypeScript · Tailwind 4 · motion · three.js · PWA" },
      { title: "Backend", items: "PostgreSQL · Row Level Security · trigger · RPC · Edge Functions" },
      { title: "Tempo reale", items: "Supabase Realtime · WebRTC · Cloudflare Realtime SFU" },
      { title: "Consegna", items: "GitHub · Vercel CI/CD · Cloudflare · documentazione tecnica" },
    ],
  },
};
