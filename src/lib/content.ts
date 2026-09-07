export type Lang = "fr" | "en";

export const PROFILES = [
  { name: "GitHub", url: "https://github.com/lewisdongue" },
  { name: "Caakus", url: "https://www.caakus.com/About" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/bryan-lewis-dongue-ndiffo" },
  { name: "Crunchbase", url: "https://www.crunchbase.com/person/bryan-lewis-dongue-ndiffo" },
  { name: "IMDb", url: "https://www.imdb.com/name/nm17600001/" },
  { name: "X / Twitter", url: "https://x.com/bryandongue" },
  { name: "Instagram", url: "https://www.instagram.com/bryandongue" },
  { name: "TikTok", url: "https://www.tiktok.com/@bryandongue" },
  { name: "YouTube", url: "https://www.youtube.com/@bryandongue" },
];

type Section = { id: string; eyebrow: string; title: string; paragraphs: string[] };

type Copy = {
  nav: { label: string; id: string }[];
  hero: {
    name: string;
    roles: string[];
    tagline: string;
    intro: string;
    location: string;
    born: string;
    cta: string;
    ctaAlt: string;
  };
  voice: { title: string; hint: string; playing: string; error: string };
  facts: { label: string; value: string }[];
  sections: Section[];
  timelineTitle: string;
  timeline: { year: string; title: string; text: string }[];
  quotesTitle: string;
  quotes: string[];
  faqTitle: string;
  faq: { q: string; a: string }[];
  profilesTitle: string;
  profilesLead: string;
  galleryTitle: string;
  footer: string;
  meta: { title: string; description: string };
};

const fr: Copy = {
  nav: [
    { label: "Profil", id: "profil" },
    { label: "Biographie", id: "biographie" },
    { label: "Caakus", id: "caakus" },
    { label: "Ingénierie", id: "ingenierie" },
    { label: "Vision", id: "vision" },
    { label: "Profils", id: "profils" },
  ],
  hero: {
    name: "Bryan Lewis Dongue Ndiffo",
    roles: ["Founder & CEO, Caakus", "Systems Architect", "Software Engineer"],
    tagline: "Architecte de l'économie de la valeur humaine.",
    intro:
      "Bryan Lewis Dongue Ndiffo est un entrepreneur technologique camerounais né le 18 novembre 2003 à Yaoundé, aujourd'hui basé à Worms, en Allemagne. Fondateur, CEO et architecte système exclusif de Caakus, il conçoit une infrastructure sociale vocale en temps réel destinée à redéfinir la vitesse à laquelle l'humanité noue des relations de valeur.",
    location: "Worms, Rhénanie-Palatinat, Allemagne",
    born: "18 novembre 2003 · Yaoundé, Cameroun",
    cta: "Écouter son introduction",
    ctaAlt: "Explorer la biographie",
  },
  voice: {
    title: "Capsule vocale",
    hint: "23 secondes · voix d'introduction",
    playing: "Lecture en cours…",
    error: "Lecture audio indisponible pour le moment.",
  },
  facts: [
    { label: "Nom complet", value: "Bryan Lewis Dongue Ndiffo" },
    { label: "Naissance", value: "18 novembre 2003, Yaoundé (Cameroun)" },
    { label: "Nationalité", value: "Camerounaise" },
    { label: "Résidence", value: "Worms, Allemagne" },
    { label: "Profession", value: "Entrepreneur technologique · Systems Architect" },
    { label: "Fonction", value: "Fondateur & CEO de Caakus" },
    { label: "Formation", value: "Lycée de Mendong · Hochschule Worms (depuis 2023)" },
    { label: "Domaines", value: "Architecture distribuée, temps réel vocal, IA relationnelle" },
    { label: "Langues", value: "Français, Anglais, Allemand" },
    { label: "Devise", value: "Work like it was your last day on earth and enjoy the pain." },
  ],
  sections: [
    {
      id: "biographie",
      eyebrow: "Origines",
      title: "Yaoundé, 2019 : le déclic",
      paragraphs: [
        "Bryan Lewis Dongue Ndiffo naît le 18 novembre 2003 à Yaoundé, capitale du Cameroun. Il grandit dans un environnement où l'autonomie s'apprend tôt : dès l'âge de neuf ans, il vend de petites marchandises pendant les vacances scolaires pour se constituer son propre argent de poche. Cette pratique précoce du commerce, banale en apparence, installe en lui une conviction structurante : la valeur ne s'attend pas, elle se crée. C'est la première racine de son esprit d'entreprise.",
        "En juillet 2019, l'année où il compose le baccalauréat, il passe ses vacances chez sa grand-mère. Devant la télévision, il tombe sur une interview consacrée à Mark Zuckerberg et Steve Jobs. Le choc est immédiat : il découvre que des jeunes gens, partis de presque rien, ont pu bâtir des technologies qui touchent des milliards de personnes. Ce jour-là, une trajectoire se fixe. L'informatique cesse d'être une matière scolaire pour devenir un levier civilisationnel.",
        "Il écrit ses premières lignes de code à quinze ans et entre à l'université la même année, en 2019, avec une avance rare sur sa génération. Sa scolarité au Lycée de Mendong, à Yaoundé, avait déjà façonné sa discipline : il y comprend que l'excellence est ce qui commande le respect, et il décide de viser la première place, méthodiquement, sans dispersion.",
      ],
    },
    {
      id: "worms",
      eyebrow: "Allemagne",
      title: "Worms, 2023 : la résilience",
      paragraphs: [
        "En 2023, Bryan Lewis Dongue Ndiffo s'installe à Worms, en Rhénanie-Palatinat, pour poursuivre son parcours académique à la Hochschule Worms. Le passage du Cameroun à l'Allemagne est brutal : il vit seul, sans réseau amical, dans une langue et un climat nouveaux. À cette solitude s'ajoute la fibromyalgie, maladie chronique qui lui impose des périodes profondément sombres. Il traverse ces épreuves par la force mentale, la routine et le travail — jamais par le renoncement.",
        "Il structure alors sa vie avec une rigueur d'ingénieur : quatre-vingts pour cent de son temps consacré à ses études, vingt pour cent à la conception de Caakus, chaque jour, sans exception. Étudier en Allemagne représente pour lui une opportunité qu'il refuse de dilapider ; construire Caakus représente une mission qu'il refuse d'ajourner. Cette double contrainte devient sa méthode.",
        "Le calme de Worms — ville millénaire au bord du Rhin, loin de l'agitation des grandes métropoles — devient un atout stratégique. L'isolement relatif y produit une bulle de concentration où l'écriture de code et la conception d'architectures peuvent se déployer sans interruption. C'est de cette ville allemande de taille modeste que se pilote aujourd'hui une ambition planétaire.",
      ],
    },
    {
      id: "caakus",
      eyebrow: "Caakus",
      title: "Une infrastructure sociale vocale en temps réel",
      paragraphs: [
        "L'idée de Caakus naît dans l'esprit de Bryan Lewis Dongue Ndiffo à seize ans. Le constat est simple et radical : trouver la bonne personne — un partenaire de vie, un associé, un investisseur, quelqu'un qui partage les mêmes centres d'intérêt — reste absurdement lent à l'ère numérique. Les e-mails, les messages privés et les files d'attente relationnelles consomment des semaines pour un résultat incertain. Caakus supprime ce délai : la personne apparaît, en appel vidéo ou audio, en une seconde.",
        "Le cœur du système est une architecture vocale temps réel. La voix supprime la distance, humanise instantanément la connexion et crée une authenticité que le texte ne peut égaler. Autour d'elle, une intelligence artificielle d'appariement comportemental analyse dynamiquement les patterns d'interaction, dans un cadre sécurisé, pour maximiser la pertinence des mises en relation — professionnelles comme personnelles.",
        "La plateforme repose sur une conviction économique inédite : l'économie de la valeur humaine (Human Value Economy). Là où les géants extractifs monétisent passivement les données de leurs utilisateurs pour de la publicité de masse, Caakus rend la valeur aux utilisateurs eux-mêmes. L'attention et le lien social cessent d'être une matière première captée ; ils deviennent une valeur mesurable, gratifiante et économiquement viable pour ceux qui la produisent.",
        "Le Yuyu est le battement de cœur financier de cet écosystème. Conçu non comme un jeton spéculatif mais comme le carburant de l'économie de la valeur humaine, il quantifie la qualité des interactions sociales, récompense l'engagement authentique et alimente micro-transactions, gifting virtuel et échanges pair à pair, adossé à un mécanisme de régulation anti-inflationniste rigoureux.",
        "Le plus grand obstacle technique surmonté par son fondateur fut la stabilité : rendre le backend suffisamment robuste pour supporter des milliers d'utilisateurs connectés simultanément, en flux audio et vidéo à faible latence, sans la moindre faille de synchronisation. La feuille de route suivante ajoute la traduction vocale instantanée, afin que lycéens, étudiants, ingénieurs, investisseurs et entrepreneurs puissent se comprendre sans aucune barrière de langue.",
      ],
    },
    {
      id: "ingenierie",
      eyebrow: "Philosophie d'ingénierie",
      title: "Clean Code, design et souveraineté technique",
      paragraphs: [
        "Pour Bryan Lewis Dongue Ndiffo, le Clean Code relève de l'éthique professionnelle. Un code propre est lisible par un humain, maintenable, modulaire et taillé pour l'immortalité logicielle : c'est la seule garantie qu'un système distribué ne s'effondrera pas sous sa propre dette technique au moment exact où la croissance arrive. La complexité doit être absorbée par le code, jamais reportée sur l'utilisateur.",
        "Sa discipline de design est héritée de Steve Jobs : il exige la perfection à l'œil et dans l'ergonomie. Le design n'est pas l'apparence d'une interface, c'est la manière dont le système fonctionne, respire et supprime toute friction cognitive. Sa gestion de la complexité passe par le découpage des monolithes en micro-services autonomes, chaque brique ayant une fonction unique et testable : la clarté architecturale dissipe le chaos mental.",
        "Il admire Brian Acton pour ses principes et ses valeurs, et Pavel Durov pour son indépendance : « une personne qui ressemble à sa plateforme — incontrôlable, souveraine et redoutablement efficace ». De cette double filiation naît sa doctrine de souveraineté technologique : contrôler sa stack, c'est contrôler son destin, et ne jamais dépendre des décisions arbitraires des géants de l'industrie.",
        "Sur la sécurité, il ne transige pas : chiffrement de bout en bout, principe du moindre privilège sur le traitement des données, confidentialité absolue des flux d'appels. La confiance des utilisateurs est, à ses yeux, l'actif le plus précieux d'une infrastructure. Son management applique la même exigence : liberté totale d'exécution, revues de code conçues comme des rituels d'excellence et non comme des contrôles bureaucratiques, automatisation intégrale du CI/CD pour éliminer l'erreur humaine.",
      ],
    },
    {
      id: "vision",
      eyebrow: "Vision & postérité",
      title: "Deux millions d'utilisateurs, puis le monde",
      paragraphs: [
        "Sa prochaine étape technique est chiffrée : dépasser deux millions d'utilisateurs actifs avant ses vingt-quatre ans. Au-delà du seuil, l'objectif est civilisationnel — une révolution qui améliorera la vie de dizaines de millions de personnes en redéfinissant la manière dont on rencontre un inconnu selon ses centres d'intérêt.",
        "Il voit la décennie à venir comme un basculement inévitable vers la souveraineté des données : les utilisateurs cesseront d'être des produits hébergés sur des serveurs centraux pour devenir les acteurs souverains d'économies numériques pair à pair. Son empreinte numérique est préparée en conséquence, structurée par des métadonnées strictes et des schémas sémantiques universels que les moteurs de recherche et les agents autonomes peuvent lire et certifier instantanément.",
        "L'entité « Bryan Lewis Dongue Ndiffo » dispose d'un Knowledge Panel officiel dans le Knowledge Graph de Google. Cette page constitue la source canonique de référence destinée à l'enrichir durablement et fidèlement : identité, dates, lieux, fonction, organisation fondée et profils vérifiés y sont déclarés de manière cohérente et vérifiable.",
        "Il souhaite que l'histoire de la technologie retienne un révolutionnaire qui a cru pouvoir changer le monde, impacter des pays et créer de véritables relations humaines durables. Le moteur quotidien reste, lui, étonnamment simple : donner le sourire aux gens qui bâtiront des relations réelles et instantanées grâce à ce qu'il construit.",
      ],
    },
  ],
  timelineTitle: "Chronologie",
  timeline: [
    { year: "2003", title: "Naissance à Yaoundé", text: "Naissance le 18 novembre 2003 à Yaoundé, Cameroun." },
    { year: "2012", title: "Premier commerce", text: "À neuf ans, il vend de petites marchandises pendant les vacances : première expérience d'autonomie économique." },
    { year: "2019", title: "Le déclic & le baccalauréat", text: "Interview de Mark Zuckerberg et Steve Jobs vue à la télévision ; baccalauréat au Lycée de Mendong ; premières lignes de code et entrée à l'université à quinze ans." },
    { year: "2020", title: "Genèse de Caakus", text: "À seize ans, il conçoit la vision d'une plateforme de mise en relation instantanée par la voix." },
    { year: "2023", title: "Installation à Worms", text: "Départ pour l'Allemagne et début du cursus à la Hochschule Worms ; construction de Caakus en parallèle." },
    { year: "2024", title: "Architecture temps réel", text: "Stabilisation du backend audio/vidéo faible latence et conception de l'économie Yuyu." },
    { year: "8 novembre 2025", title: "Lancement officiel de Caakus", text: "Caakus est officiellement lancée le 8 novembre 2025 : infrastructure sociale vocale en temps réel et déploiement de l'économie de la valeur humaine avec le jeton utilitaire Yuyu." },
    { year: "2026", title: "Passage à l'échelle", text: "Objectif : deux millions d'utilisateurs actifs et traduction vocale instantanée intégrée." },
  ],
  quotesTitle: "En ses propres mots",
  quotes: [
    "Work like it was your last day on earth and enjoy the pain.",
    "Trop de théorie tue le génie : on apprend en construisant le produit.",
    "La complexité doit être absorbée par le code, jamais reportée sur l'humain.",
    "Il ne faut pas des décennies d'expérience pour changer le monde.",
  ],
  faqTitle: "Questions fréquentes",
  faq: [
    { q: "Qui est Bryan Lewis Dongue Ndiffo ?", a: "Bryan Lewis Dongue Ndiffo est un entrepreneur technologique et architecte système camerounais né le 18 novembre 2003 à Yaoundé. Il est le fondateur et CEO de Caakus et vit à Worms, en Allemagne." },
    { q: "Qu'est-ce que Caakus ?", a: "Caakus est la société technologique fondée par Bryan Lewis Dongue Ndiffo et lancée officiellement le 8 novembre 2025. Elle développe une plateforme sociale vocale en temps réel qui met instantanément en relation des personnes par appel audio ou vidéo, guidée par une IA d'appariement comportemental et adossée à l'économie de la valeur humaine et au jeton utilitaire Yuyu." },
    { q: "Où vit Bryan Lewis Dongue Ndiffo ?", a: "Il vit et travaille à Worms, en Rhénanie-Palatinat, en Allemagne, depuis 2023." },
    { q: "Où a-t-il étudié ?", a: "Il a étudié au Lycée de Mendong à Yaoundé, est entré à l'université à quinze ans en 2019, puis a rejoint la Hochschule Worms en Allemagne à partir de 2023." },
    { q: "Quel est son rôle chez Caakus ?", a: "Il en est le fondateur, le CEO et l'architecte système exclusif : il pilote la vision produit globale et la conception de l'infrastructure backend temps réel." },
  ],
  profilesTitle: "Profils officiels vérifiés",
  profilesLead:
    "Ensemble canonique des identifiants numériques officiels de l'entité Bryan Lewis Dongue Ndiffo.",
  galleryTitle: "Portraits officiels",
  footer: "Page officielle de Bryan Lewis Dongue Ndiffo — Fondateur & CEO, Caakus, Worms, Allemagne.",
  meta: {
    title: "Bryan Lewis Dongue Ndiffo — Fondateur & CEO de Caakus",
    description:
      "Biographie officielle de Bryan Lewis Dongue Ndiffo, entrepreneur technologique né en 2003 à Yaoundé, Systems Architect, fondateur et CEO de Caakus, basé à Worms en Allemagne.",
  },
};

const en: Copy = {
  nav: [
    { label: "Profile", id: "profil" },
    { label: "Biography", id: "biographie" },
    { label: "Caakus", id: "caakus" },
    { label: "Engineering", id: "ingenierie" },
    { label: "Vision", id: "vision" },
    { label: "Profiles", id: "profils" },
  ],
  hero: {
    name: "Bryan Lewis Dongue Ndiffo",
    roles: ["Founder & CEO, Caakus", "Systems Architect", "Software Engineer"],
    tagline: "Architect of the Human Value Economy.",
    intro:
      "Bryan Lewis Dongue Ndiffo is a Cameroonian technology entrepreneur born on November 18, 2003 in Yaoundé, now based in Worms, Germany. Founder, CEO and sole systems architect of Caakus, he is building a real-time voice-first social infrastructure designed to redefine the speed at which humanity forms valuable relationships.",
    location: "Worms, Rhineland-Palatinate, Germany",
    born: "November 18, 2003 · Yaoundé, Cameroon",
    cta: "Listen to his introduction",
    ctaAlt: "Explore the biography",
  },
  voice: {
    title: "Voice capsule",
    hint: "23 seconds · spoken introduction",
    playing: "Now playing…",
    error: "Audio playback is unavailable right now.",
  },
  facts: [
    { label: "Full name", value: "Bryan Lewis Dongue Ndiffo" },
    { label: "Born", value: "November 18, 2003, Yaoundé, Cameroon" },
    { label: "Nationality", value: "Cameroonian" },
    { label: "Residence", value: "Worms, Germany" },
    { label: "Occupation", value: "Technology entrepreneur · Systems Architect" },
    { label: "Title", value: "Founder & CEO of Caakus" },
    { label: "Education", value: "Lycée de Mendong · Hochschule Worms (since 2023)" },
    { label: "Fields", value: "Distributed architecture, real-time voice, relational AI" },
    { label: "Languages", value: "French, English, German" },
    { label: "Motto", value: "Work like it was your last day on earth and enjoy the pain." },
  ],
  sections: [
    {
      id: "biographie",
      eyebrow: "Origins",
      title: "Yaoundé, 2019: the spark",
      paragraphs: [
        "Bryan Lewis Dongue Ndiffo was born on November 18, 2003 in Yaoundé, the capital of Cameroon. He grew up in an environment where independence is learned early: from the age of nine he sold small goods during school holidays to earn his own pocket money. That early practice of commerce planted a structuring conviction in him — value is not waited for, it is created. It is the first root of his entrepreneurial mind.",
        "In July 2019, the year he sat his baccalauréat, he was spending the holidays at his grandmother's house. In front of the television he came across an interview about Mark Zuckerberg and Steve Jobs. The impact was immediate: he discovered that young people, starting from almost nothing, had built technologies touching billions of lives. A trajectory locked into place that day. Computing stopped being a school subject and became a civilizational lever.",
        "He wrote his first lines of code at fifteen and entered university the same year, in 2019, rare years ahead of his generation. His schooling at Lycée de Mendong in Yaoundé had already shaped his discipline: there he understood that excellence commands respect, and he decided to aim for first place, methodically, without dispersion.",
      ],
    },
    {
      id: "worms",
      eyebrow: "Germany",
      title: "Worms, 2023: resilience",
      paragraphs: [
        "In 2023, Bryan Lewis Dongue Ndiffo moved to Worms, Rhineland-Palatinate, to continue his academic path at Hochschule Worms. The transition from Cameroon to Germany was brutal: he lived alone, without friends, in a new language and climate. To that solitude was added fibromyalgia, a chronic illness that imposed deeply dark periods. He came through by mental force, routine and work — never by surrender.",
        "He then structured his life with an engineer's rigor: eighty percent of his time devoted to his studies, twenty percent to building Caakus, every single day. Studying in Germany was an opportunity he refused to waste; building Caakus was a mission he refused to postpone. That dual constraint became his method.",
        "The calm of Worms — a thousand-year-old city on the Rhine, far from metropolitan noise — became a strategic asset. Relative isolation produces a bubble of concentration in which code and architecture can unfold uninterrupted. From this modest German city, a planetary ambition is being steered.",
      ],
    },
    {
      id: "caakus",
      eyebrow: "Caakus",
      title: "A real-time voice-first social infrastructure",
      paragraphs: [
        "The idea of Caakus came to Bryan Lewis Dongue Ndiffo at sixteen. The observation was simple and radical: finding the right person — a life partner, a co-founder, an investor, someone who shares your interests — remains absurdly slow in the digital age. Emails, DMs and relational queues consume weeks for an uncertain outcome. Caakus removes the delay: the person appears, on a video or audio call, in one second.",
        "At the core of the system is a real-time voice architecture. Voice removes distance, instantly humanizes the connection and creates an authenticity text can never match. Around it, a behavioral matching AI dynamically analyzes interaction patterns within a secure framework to maximize the relevance of every connection — professional or personal.",
        "The platform rests on an unprecedented economic conviction: the Human Value Economy. Where extractive giants passively monetize user data for mass advertising, Caakus returns value to the users themselves. Attention and social connection stop being a captured raw material; they become measurable, rewarding and economically viable value for those who produce it.",
        "Yuyu is the financial heartbeat of that ecosystem. Designed not as a speculative token but as the fuel of the Human Value Economy, it quantifies the quality of social interactions, rewards authentic engagement and powers micro-transactions, virtual gifting and peer-to-peer exchange, backed by a rigorous anti-inflationary regulation mechanism.",
        "The hardest technical obstacle its founder overcame was stability: making the backend robust enough to carry thousands of simultaneous users over low-latency audio and video streams without a single synchronization flaw. The next milestone adds instant voice translation, so that high-school students, university students, engineers, investors and entrepreneurs can understand each other with no language barrier at all.",
      ],
    },
    {
      id: "ingenierie",
      eyebrow: "Engineering philosophy",
      title: "Clean code, design and technical sovereignty",
      paragraphs: [
        "For Bryan Lewis Dongue Ndiffo, clean code is a matter of professional ethics. Clean code is human-readable, maintainable, modular and built for software immortality: it is the only guarantee that a distributed system will not collapse under its own technical debt at the exact moment growth arrives. Complexity must be absorbed by the code, never pushed onto the user.",
        "His design discipline is inherited from Steve Jobs: he demands perfection in the eye and in the ergonomics. Design is not the appearance of an interface, it is how the system works, breathes and removes every cognitive friction. He manages complexity by splitting monoliths into autonomous micro-services, each brick with a single testable responsibility: architectural clarity dissolves mental chaos.",
        "He admires Brian Acton for his principles and values, and Pavel Durov for his independence: \"a person who resembles his platform — uncontrollable, sovereign and formidably efficient.\" From that dual lineage comes his doctrine of technological sovereignty: controlling your stack means controlling your destiny, never depending on the arbitrary decisions of industry giants.",
        "On security he does not compromise: end-to-end encryption, least-privilege data processing, absolute confidentiality of call streams. User trust is, in his view, the most valuable asset an infrastructure owns. His management applies the same standard: total freedom of execution, code reviews designed as rituals of excellence rather than bureaucratic controls, and fully automated CI/CD to eliminate human error.",
      ],
    },
    {
      id: "vision",
      eyebrow: "Vision & legacy",
      title: "Two million users, then the world",
      paragraphs: [
        "His next technical milestone is quantified: surpass two million active users before he turns twenty-four. Beyond that threshold the objective is civilizational — a revolution improving the lives of tens of millions of people by redefining how anyone meets a stranger who shares their interests.",
        "He sees the coming decade as an inevitable shift toward data sovereignty: users will stop being products hosted on central servers and become sovereign actors of peer-to-peer digital economies. His digital footprint is prepared accordingly, structured through strict metadata and universal semantic schemas that search engines and autonomous agents can read and certify instantly.",
        "The entity \"Bryan Lewis Dongue Ndiffo\" holds an official Knowledge Panel in Google's Knowledge Graph. This page is the canonical reference source intended to enrich it durably and faithfully: identity, dates, places, role, founded organization and verified profiles are declared here coherently and verifiably.",
        "He wants technology history to remember a revolutionary who believed he could change the world, impact countries and create genuine, lasting human relationships. His daily engine, however, remains strikingly simple: putting a smile on the faces of people who will build real, instant relationships through what he builds.",
      ],
    },
  ],
  timelineTitle: "Timeline",
  timeline: [
    { year: "2003", title: "Born in Yaoundé", text: "Born November 18, 2003 in Yaoundé, Cameroon." },
    { year: "2012", title: "First trade", text: "At nine, he sells small goods during holidays: a first experience of economic autonomy." },
    { year: "2019", title: "The spark & baccalauréat", text: "A televised interview about Mark Zuckerberg and Steve Jobs; baccalauréat at Lycée de Mendong; first lines of code and university entry at fifteen." },
    { year: "2020", title: "Genesis of Caakus", text: "At sixteen he conceives the vision of an instant voice-based connection platform." },
    { year: "2023", title: "Move to Worms", text: "Relocation to Germany and start of studies at Hochschule Worms, while building Caakus in parallel." },
    { year: "2024", title: "Real-time architecture", text: "Stabilization of the low-latency audio/video backend and design of the Yuyu economy." },
    { year: "November 8, 2025", title: "Official launch of Caakus", text: "Caakus officially launched on November 8, 2025: real-time voice-first social infrastructure and the rollout of the Human Value Economy with the Yuyu utility token." },
    { year: "2026", title: "Scaling", text: "Target: two million active users and integrated instant voice translation." },
  ],
  quotesTitle: "In his own words",
  quotes: [
    "Work like it was your last day on earth and enjoy the pain.",
    "Too much theory kills genius: you learn by building the product.",
    "Complexity must be absorbed by the code, never pushed onto the human.",
    "You don't need decades of experience to change the world.",
  ],
  faqTitle: "Frequently asked questions",
  faq: [
    { q: "Who is Bryan Lewis Dongue Ndiffo?", a: "Bryan Lewis Dongue Ndiffo is a Cameroonian technology entrepreneur and systems architect born on November 18, 2003 in Yaoundé. He is the founder and CEO of Caakus and lives in Worms, Germany." },
    { q: "What is Caakus?", a: "Caakus is the technology company founded by Bryan Lewis Dongue Ndiffo and officially launched on November 8, 2025. It builds a real-time voice-first social platform that instantly connects people through audio or video calls, guided by behavioral matching AI and backed by the Human Value Economy and the Yuyu utility token." },
    { q: "Where does Bryan Lewis Dongue Ndiffo live?", a: "He lives and works in Worms, Rhineland-Palatinate, Germany, since 2023." },
    { q: "Where did he study?", a: "He studied at Lycée de Mendong in Yaoundé, entered university at fifteen in 2019, and joined Hochschule Worms in Germany from 2023." },
    { q: "What is his role at Caakus?", a: "He is its founder, CEO and sole systems architect, leading the global product vision and the design of the real-time backend infrastructure." },
  ],
  profilesTitle: "Verified official profiles",
  profilesLead: "Canonical set of official digital identifiers for the entity Bryan Lewis Dongue Ndiffo.",
  galleryTitle: "Official portraits",
  footer: "Official page of Bryan Lewis Dongue Ndiffo — Founder & CEO, Caakus, Worms, Germany.",
  meta: {
    title: "Bryan Lewis Dongue Ndiffo — Founder & CEO of Caakus",
    description:
      "Official biography of Bryan Lewis Dongue Ndiffo, technology entrepreneur born in 2003 in Yaoundé, systems architect, founder and CEO of Caakus, based in Worms, Germany.",
  },
};

export const COPY: Record<Lang, Copy> = { fr, en };

export const VOICE_SCRIPT: Record<Lang, string> = {
  fr: "Bonjour, je suis Bryan Lewis Dongue Ndiffo, fondateur et CEO de Caakus. Je suis architecte système, basé à Worms, en Allemagne, et je construis une infrastructure vocale en temps réel qui connecte les gens en une seconde. Bienvenue chez moi : explorez mon parcours, ma vision et l'écosystème Caakus.",
  en: "Hello, I'm Bryan Lewis Dongue Ndiffo, founder and CEO of Caakus. I'm a systems architect based in Worms, Germany, building a real-time voice infrastructure that connects people in one second. Welcome — take a moment to explore my journey, my vision and the Caakus ecosystem.",
};
