import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { COPY, LANGS, PROFILES, resolveLang, type Lang } from "@/lib/content";
import { PORTFOLIO_COPY } from "@/lib/portfolio-content";
import ceo from "@/assets/bryan-lewis-dongue-ndiffo-ceo-caakus-inc.jpg";
import founder from "@/assets/bryan-lewis-dongue-ndiffo-founder-worms-germany.jpg";
import architect from "@/assets/bryan-lewis-dongue-systems-architect-tech.jpg";
import executive from "@/assets/bryan-lewis-dongue-ndiffo-executive-profile.jpg";
import engineer from "@/assets/bryan-lewis-dongue-ndiffo-software-engineer.jpg";
import leadership from "@/assets/bryan-lewis-dongue-ndiffo-leadership.jpg";
import workspace from "@/assets/bryan-lewis-dongue-ndiffo-workspace.jpg";
import official from "@/assets/bryan-lewis-dongue-ndiffo-official.jpg";

const PHOTOS = [
  { src: ceo, alt: "Bryan Lewis Dongue Ndiffo, CEO of Caakus" },
  { src: founder, alt: "Bryan Lewis Dongue Ndiffo, founder based in Worms, Germany" },
  { src: architect, alt: "Bryan Lewis Dongue, systems architect in tech" },
  { src: executive, alt: "Bryan Lewis Dongue Ndiffo, executive profile" },
  { src: engineer, alt: "Bryan Lewis Dongue Ndiffo, software engineer" },
  { src: leadership, alt: "Bryan Lewis Dongue Ndiffo, leadership portrait" },
  { src: workspace, alt: "Bryan Lewis Dongue Ndiffo in his workspace" },
  { src: official, alt: "Bryan Lewis Dongue Ndiffo, official portrait" },
];

const KG_ID = "https://g.co/kg/g/11yzdg014n";
const SITE_URL = "/";

const personSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": KG_ID,
      name: "Bryan Lewis Dongue Ndiffo",
      url: SITE_URL,
      identifier: [
        {
          "@type": "PropertyValue",
          propertyID: "Google Knowledge Graph ID",
          value: "/g/11yzdg014n",
          url: KG_ID,
        },
      ],
      alternateName: ["Bryan Lewis Dongue", "Bryan Ndiffo", "Lewis Dongue"],
      givenName: "Bryan Lewis",
      familyName: "Dongue Ndiffo",
      gender: "Male",
      birthDate: "2003-11-18",
      birthPlace: { "@type": "Place", name: "Yaoundé, Cameroon" },
      nationality: { "@type": "Country", name: "Cameroon" },
      jobTitle: ["Founder", "Chief Executive Officer", "Systems Architect"],
      description:
        "Cameroonian technology entrepreneur and systems architect, founder and CEO of Caakus, a real-time voice-first social infrastructure company based in Worms, Germany.",
      knowsAbout: [
        "Systems architecture",
        "Distributed systems",
        "Real-time voice infrastructure",
        "Artificial intelligence",
        "Clean code",
        "Software engineering",
        "Human Value Economy",
      ],
      knowsLanguage: ["French", "English", "German"],
      homeLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Worms",
          addressRegion: "Rhineland-Palatinate",
          addressCountry: "DE",
        },
      },
      alumniOf: [
        { "@type": "EducationalOrganization", name: "Lycée de Mendong", address: "Yaoundé, Cameroon" },
        { "@type": "CollegeOrUniversity", name: "Hochschule Worms", address: "Worms, Germany" },
      ],
      worksFor: { "@id": "https://www.caakus.com/#organization" },
      founder: { "@id": "https://www.caakus.com/#organization" },
      image: [
        "https://lewisdongue.com/images/bryan-lewis-dongue-ndiffo-official.jpg",
        "https://lewisdongue.com/images/bryan-lewis-dongue-ndiffo-ceo-caakus-inc.jpg",
        "https://lewisdongue.com/images/bryan-lewis-dongue-ndiffo-executive-profile.jpg",
        "https://lewisdongue.com/images/bryan-lewis-dongue-ndiffo-founder-worms-germany.jpg",
        "https://lewisdongue.com/images/bryan-lewis-dongue-ndiffo-leadership.jpg",
        "https://lewisdongue.com/images/bryan-lewis-dongue-ndiffo-software-engineer.jpg",
        "https://lewisdongue.com/images/bryan-lewis-dongue-ndiffo-workspace.jpg",
        "https://lewisdongue.com/images/bryan-lewis-dongue-systems-architect-tech.jpg",
      ],
      sameAs: [KG_ID, ...PROFILES.map((p) => p.url)],
      mainEntityOfPage: { "@id": "/#profilepage" },
    },
    {
      "@type": "Organization",
      "@id": "https://www.caakus.com/#organization",
      name: "Caakus",
      alternateName: "Caakus Inc.",
      foundingDate: "2025-11-08",
      legalName: "Caakus",
      url: "https://www.caakus.com",
      logo: PHOTOS[0]!.src,
      description:
        "Caakus builds a real-time voice-first social platform that instantly connects people through audio and video calls, powered by behavioral matching AI and the Human Value Economy with its Yuyu utility ecosystem.",
      industry: "Technology, Social Networking Infrastructure",
      founder: { "@id": KG_ID },
      employee: { "@id": KG_ID },
      sameAs: [
        "https://www.crunchbase.com/organization/caakus",
        "https://github.com/lewisdongue/lewisdongue/wiki/Caakus%E2%80%90Company%E2%80%90Profile",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Worms",
        addressRegion: "Rhineland-Palatinate",
        addressCountry: "DE",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": "/#profilepage",
      url: SITE_URL,
      name: "Bryan Lewis Dongue Ndiffo — Founder & CEO of Caakus",
      inLanguage: ["en", "fr", "de", "es", "pt", "it"],
      mainEntity: { "@id": KG_ID },
      about: { "@id": KG_ID },
      isPartOf: { "@id": "/#website" },
    },
    {
      "@type": "WebSite",
      "@id": "/#website",
      url: SITE_URL,
      name: "Bryan Lewis Dongue Ndiffo",
      inLanguage: ["en", "fr", "de", "es", "pt", "it"],
      author: { "@id": KG_ID },
    },
    {
      "@type": "FAQPage",
      mainEntity: COPY.en.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bryan Lewis Dongue Ndiffo — Founder & CEO of Caakus" },
      {
        name: "description",
        content:
          "Official biography of Bryan Lewis Dongue Ndiffo: technology entrepreneur born in 2003 in Yaoundé, systems architect, founder and CEO of Caakus, based in Worms, Germany.",
      },
      { property: "og:title", content: "Bryan Lewis Dongue Ndiffo — Founder & CEO of Caakus" },
      {
        property: "og:description",
        content:
          "Systems architect, founder and CEO of Caakus — real-time voice-first social infrastructure, built from Worms, Germany.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { property: "og:profile:first_name", content: "Bryan Lewis" },
      { property: "og:profile:last_name", content: "Dongue Ndiffo" },
      { property: "og:profile:username", content: "lewisdongue" },
      { property: "og:profile:gender", content: "male" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@BryanNdiffo" },
      { name: "twitter:creator", content: "@BryanNdiffo" },
      {
        name: "keywords",
        content:
          "Bryan Lewis Dongue Ndiffo, Bryan Ndiffo, Lewis Dongue, Caakus, founder CEO Caakus, systems architect, Worms Germany, Yaoundé, Hochschule Worms",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(personSchema) }],
  }),
  component: Home,
});

const WIKI_LINKS: [RegExp, string][] = [
  [/\bYaoundé\b/, "https://en.wikipedia.org/wiki/Yaound%C3%A9"],
  [/\bHochschule Worms\b/, "https://en.wikipedia.org/wiki/Hochschule_Worms"],
  [/\bWorms(, Germany)?\b/, "https://en.wikipedia.org/wiki/Worms,_Germany"],
  [/\bMark Zuckerberg\b/, "https://en.wikipedia.org/wiki/Mark_Zuckerberg"],
  [/\bSteve Jobs\b/, "https://en.wikipedia.org/wiki/Steve_Jobs"],
  [/\bPavel Durov\b/, "https://en.wikipedia.org/wiki/Pavel_Durov"],
  [/\bBrian Acton\b/, "https://en.wikipedia.org/wiki/Brian_Acton"],
  [/\bSystems Architect\b|\bSystems architecture\b|\bsystems architect\b/i, "https://en.wikipedia.org/wiki/Systems_architecture"],
];

function LinkedText({ text }: { text: string }) {
  let parts: (string | ReactNode)[] = [text];
  for (const [re, url] of WIKI_LINKS) {
    const next: (string | ReactNode)[] = [];
    let linked = false;
    for (const part of parts) {
      if (typeof part !== "string") {
        next.push(part);
        continue;
      }
      const segs = part.split(re);
      if (segs.length === 1) {
        next.push(part);
        continue;
      }
      segs.forEach((seg, i) => {
        next.push(seg);
        if (i < segs.length - 1) {
          if (linked) {
            next.push(part.match(re)?.[0] ?? "");
          } else {
            linked = true;
            next.push(
              <a
                key={`${url}-${next.length}`}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-inherit underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary"
              >
                {part.match(re)?.[0]}
              </a>
            );
          }
        }
      });
    }
    parts = next;
  }
  return <>{parts}</>;
}

const VOICE_KEY = "bldn-voice-autoplays";

function canAutoplay(): boolean {
  try {
    const today = new Date().toISOString().slice(0, 10);
    const raw = localStorage.getItem(VOICE_KEY);
    const data = raw ? (JSON.parse(raw) as { date: string; count: number }) : null;
    if (!data || data.date !== today) return true;
    return data.count < 2;
  } catch {
    return false;
  }
}

function recordAutoplay() {
  try {
    const today = new Date().toISOString().slice(0, 10);
    const raw = localStorage.getItem(VOICE_KEY);
    const data = raw ? (JSON.parse(raw) as { date: string; count: number }) : null;
    const count = data && data.date === today ? data.count + 1 : 1;
    localStorage.setItem(VOICE_KEY, JSON.stringify({ date: today, count }));
  } catch {
    /* ignore */
  }
}

function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [playing, setPlaying] = useState(false);
  const [audioLoading, setAudioLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const autoTried = useRef(false);
  const currentSrc = useRef<string | null>(null);

  useEffect(() => {
    setLang(resolveLang(navigator.language));
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = COPY[lang];
  const portfolio = PORTFOLIO_COPY[lang];
  const navigation = [
    ...t.nav.slice(0, -1),
    { label: portfolio.navLabel, id: "portfolio" },
    ...t.nav.slice(-1),
  ];

  const play = async (auto = false) => {
    if (auto && !canAutoplay()) return;
    const audio = audioRef.current;
    if (!audio || audioLoading) return;

    // Toggle: if already playing, pause instead of reloading
    if (playing && !auto) {
      audio.pause();
      setPlaying(false);
      return;
    }

    const src = `/audio/intro-${lang}.mp3`;
    if (currentSrc.current !== src) {
      currentSrc.current = src;
      audio.src = src;
      audio.load();
    }

    setAudioLoading(true);
    try {
      await audio.play();
      setPlaying(true);
      if (auto) recordAutoplay();
    } catch {
      setPlaying(false);
      // Retry once with a fresh load if the cached source was stale
      if (!auto && currentSrc.current === src) {
        try {
          audio.src = `${src}&r=${Date.now()}`;
          audio.load();
          await audio.play();
          setPlaying(true);
        } catch {
          setPlaying(false);
        }
      }
    } finally {
      setAudioLoading(false);
    }
  };

  useEffect(() => {
    if (autoTried.current) return;
    autoTried.current = true;
    const timer = setTimeout(() => play(true), 1200);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <audio
        ref={audioRef}
        onEnded={() => setPlaying(false)}
        onPause={() => setPlaying(false)}
        onError={() => {
          setPlaying(false);
          setAudioLoading(false);
        }}
        preload="auto"
      />

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:flex sm:justify-between">
          <span className="truncate font-display text-lg tracking-tight">
            Bryan Lewis Dongue Ndiffo
          </span>
          <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.18em] text-muted-foreground lg:flex">
            {navigation.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="transition-colors hover:text-primary">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-1 rounded-full border border-border p-1 text-xs">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`rounded-full px-2.5 py-1 uppercase tracking-widest transition-colors ${
                  lang === l.code ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="profil" className="halo relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-28">
          <div>
            <p className="eyebrow">{t.hero.location}</p>
            <h1 className="mt-5 text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
              {t.hero.name}
            </h1>
            <p className="mt-5 font-display text-2xl text-primary">{t.hero.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {t.hero.roles.map((r) => (
                <span
                  key={r}
                  className="rounded-full border border-border px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-muted-foreground"
                >
                  {r}
                </span>
              ))}
            </div>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {t.hero.intro}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                onClick={() => void play(false)}
                disabled={audioLoading}
                className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-primary-foreground/15">
                  {audioLoading ? "…" : playing ? "❚❚" : "▶"}
                </span>
                {audioLoading ? "…" : playing ? t.voice.playing : t.hero.cta}
              </button>
              <a
                href="#biographie"
                className="text-sm uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
              >
                {t.hero.ctaAlt}
              </a>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              {t.voice.title} · {t.voice.hint}
            </p>
          </div>

          <figure className="elite-card overflow-hidden rounded-3xl">
            <img
              src={ceo}
              alt="Bryan Lewis Dongue Ndiffo, founder and CEO of Caakus, systems architect in Worms, Germany"
              title="Bryan Lewis Dongue Ndiffo — founder and CEO of Caakus, Worms, Germany"
              className="aspect-4/5 w-full object-cover"
              width={960}
              height={1200}
            />
          </figure>
        </div>
      </section>

      <div className="gold-rule h-px w-full" />

      {/* Key facts */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.facts.map((f) => (
            <div key={f.label} className="border-l border-border pl-4">
              <dt className="eyebrow">{f.label}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Narrative sections */}
      {t.sections.map((s, i) => {
        const photo = PHOTOS[(i % (PHOTOS.length - 1)) + 1]!;
        const flip = i % 2 === 1;
        return (
          <section key={s.id} id={s.id} className="mx-auto max-w-6xl px-5 py-16">
            <div
              className={`grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start ${
                flip ? "lg:[&>figure]:order-2" : ""
              }`}
            >
              <figure className="elite-card overflow-hidden rounded-2xl lg:sticky lg:top-28">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  title={photo.alt}
                  loading="lazy"
                  className="aspect-4/5 w-full object-cover"
                />
              </figure>
              <div>
                <p className="eyebrow">{s.eyebrow}</p>
                <h2 className="mt-3 text-3xl sm:text-4xl">{s.title}</h2>
                <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
                  {s.paragraphs.map((p, k) => (
                    <p key={k}><LinkedText text={p} /></p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Timeline */}
      <section className="mx-auto max-w-4xl px-5 py-16">
        <h2 className="text-3xl sm:text-4xl">{t.timelineTitle}</h2>
        <ol className="mt-10 space-y-8 border-l border-border pl-6">
          {t.timeline.map((e) => (
            <li key={e.year} className="relative">
              <span className="absolute -left-[31px] top-2 h-2.5 w-2.5 rounded-full bg-primary" />
              <p className="eyebrow">{e.year}</p>
              <h3 className="mt-1 text-xl">{e.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{e.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Quotes */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-3xl sm:text-4xl">{t.quotesTitle}</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {t.quotes.map((q) => (
            <blockquote key={q} className="elite-card rounded-2xl p-7 font-display text-xl leading-snug">
              “{q}”
            </blockquote>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-3xl sm:text-4xl">{t.galleryTitle}</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {PHOTOS.map((p) => (
            <figure key={p.src} className="elite-card overflow-hidden rounded-xl">
              <img
                src={p.src}
                alt={p.alt}
                title={p.alt}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-16">
        <h2 className="text-3xl sm:text-4xl">{t.faqTitle}</h2>
        <div className="mt-8 divide-y divide-border border-y border-border">
          {t.faq.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="cursor-pointer list-none text-lg marker:hidden">
                <span className="font-display">{f.q}</span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Profiles */}
      <section id="profils" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-3xl sm:text-4xl">{t.profilesTitle}</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{t.profilesLead}</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PROFILES.map((p) => (
            <a
              key={p.name}
              href={p.url}
              rel="me noopener"
              target="_blank"
              className="elite-card flex items-center justify-between rounded-xl px-5 py-4 text-sm transition-colors hover:border-primary"
            >
              <span>{p.name}</span>
              <span className="text-primary">↗</span>
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl">{portfolio.title}</h3>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">{portfolio.subtitle}</p>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {portfolio.title} ↗
          </Link>
        </div>
      </section>

      <footer className="border-t border-border px-5 py-10 text-center text-xs text-muted-foreground">
        <p>{t.footer}</p>
        <p className="mt-2">© {new Date().getFullYear()} Bryan Lewis Dongue Ndiffo</p>
      </footer>
    </div>
  );
}
