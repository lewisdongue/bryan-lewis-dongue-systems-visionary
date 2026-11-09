import { createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useState } from "react";
import { LANGS, resolveLang, type Lang } from "@/lib/content";
import { PORTFOLIO_COPY } from "@/lib/portfolio-content";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { CountUp, Reveal, Tilt } from "@/components/portfolio/effects";
import {
  Activity,
  ArrowDown,
  Boxes,
  Braces,
  Check,
  CloudCog,
  Code2,
  Database,
  Download,
  ExternalLink,
  FlaskConical,
  GitBranch,
  Globe2,
  Languages,
  Layers3,
  Mail,
  Maximize2,
  Radio,
  ServerCog,
  ShieldCheck,
  Store,
  Terminal,
} from "lucide-react";
import caakusLogo from "@/assets/caakus-logo.jpg";
import dadaduLogo from "@/assets/dadadu-logo.jpg";
import proofSupabase24h from "@/assets/proof/caakus-supabase-24h.webp";
import proofSupabase7d from "@/assets/proof/caakus-supabase-7d.webp";
import proofAnalytics from "@/assets/proof/caakus-analytics.webp";
import proofSearchConsole from "@/assets/proof/caakus-search-console.webp";
import dadaduStore from "@/assets/proof/dadadu-store.webp";

const Globe3D = lazy(() => import("@/components/portfolio/Globe3D").then((m) => ({ default: m.Globe3D })));

const CV_URL = "/Lebenslauf-Bryan-Lewis-Dongue-Ndiffo.pdf";
const EMAIL = "bryanndiffo8@gmail.com";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Werkstudentenstelle – Bryan Lewis Dongue Ndiffo")}`;
const GITHUB_URL = "https://github.com/lewisdongue";
const LINKEDIN_URL = "https://www.linkedin.com/in/bryan-lewis-dongue-46b15121b";
const CAAKUS_URL = "https://caakus.com";

const LOCALES: Record<Lang, string> = { en: "en-US", de: "de-DE", fr: "fr-FR", es: "es-ES", pt: "pt-PT", it: "it-IT" };

const PORTFOLIO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Engineering Portfolio — Bryan Lewis Dongue Ndiffo",
  description:
    "Engineering portfolio of Bryan Lewis Dongue Ndiffo: Caakus real-time video platform (40,000+ users, 1.8M API requests per day) and Dadadu cross-platform social app.",
  url: "https://www.lewisdongue.com/portfolio",
  about: { "@type": "Person", name: "Bryan Lewis Dongue Ndiffo", url: "https://www.lewisdongue.com/" },
  hasPart: [
    {
      "@type": "SoftwareApplication",
      name: "Caakus",
      url: CAAKUS_URL,
      applicationCategory: "SocialNetworkingApplication",
      description: "A real-time video communication web platform used in more than 190 countries.",
      author: { "@type": "Person", name: "Bryan Lewis Dongue Ndiffo" },
    },
    {
      "@type": "MobileApplication",
      name: "Dadadu",
      applicationCategory: "SocialNetworkingApplication",
      operatingSystem: "iOS, Android",
      description:
        "A social networking mobile app based on 20-second vertical videos and affinity matchmaking.",
      author: { "@type": "Person", name: "Bryan Lewis Dongue Ndiffo" },
    },
  ],
};

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Engineering Portfolio — Bryan Lewis Dongue Ndiffo" },
      {
        name: "description",
        content:
          "Engineering portfolio of Bryan Lewis Dongue Ndiffo, Werkstudent in software development: Caakus real-time video platform (40,000+ users, 1.8M API requests per day) and Dadadu Flutter app.",
      },
      { property: "og:title", content: "Engineering Portfolio — Bryan Lewis Dongue Ndiffo" },
      {
        property: "og:description",
        content:
          "Caakus real-time video platform and Dadadu cross-platform social app, built with TypeScript, React, Supabase, WebRTC and Flutter.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.lewisdongue.com/portfolio" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.lewisdongue.com/portfolio" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(PORTFOLIO_SCHEMA) }],
  }),
  component: PortfolioPage,
});

const PRACTICES = [
  { label: "Clean Code", Icon: Code2 },
  { label: "CI/CD", Icon: CloudCog },
  { label: "Git Flow", Icon: GitBranch },
  { label: "API Design", Icon: Radio },
  { label: "Docker", Icon: Boxes },
  { label: "Linux", Icon: Terminal },
  { label: "Automated Tests", Icon: FlaskConical },
  { label: "i18n", Icon: Languages },
];

const PROOF_IMAGES = [proofSupabase24h, proofSupabase7d, proofAnalytics, proofSearchConsole];

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function SectionHeading({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead?: string }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl sm:text-4xl">{title}</h2>
      {lead ? <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">{lead}</p> : null}
    </div>
  );
}

function PortfolioPage() {
  const [lang, setLang] = useState<Lang>("en");
  const [zoom, setZoom] = useState<number | null>(null);

  useEffect(() => {
    setLang(resolveLang(navigator.language));
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = PORTFOLIO_COPY[lang];
  const locale = LOCALES[lang];
  const [caakus, dadadu] = t.projects;

  const stats = [
    { value: 40000, decimals: 0, suffix: "+" },
    { value: 1.8, decimals: 1, suffix: " M" },
    { value: 190, decimals: 0, suffix: "+" },
    { value: 60.5, decimals: 1, suffix: "k" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-5">
          <Link to="/" className="min-w-0 truncate font-display text-lg tracking-tight">
            Bryan Lewis Dongue Ndiffo
          </Link>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={CV_URL}
              download
              className="hidden items-center gap-1.5 rounded-full border border-primary/50 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:inline-flex"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              CV
            </a>
            <div className="flex items-center gap-0.5 rounded-full border border-border p-1 text-[11px]">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  aria-pressed={lang === l.code}
                  className={`rounded-full px-2 py-1 uppercase tracking-widest transition-colors sm:px-2.5 ${
                    lang === l.code ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="halo pointer-events-none absolute inset-0 -z-10" />
        <div className="grid-floor -z-10" />
        <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 pb-16 pt-8 sm:px-5 sm:pt-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-24 lg:pt-16">
          <div className="relative order-1 mx-auto aspect-square w-full max-w-[340px] sm:max-w-[440px] lg:order-2 lg:max-w-[560px]">
            <div className="absolute inset-[12%] rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
            <Suspense fallback={null}>
              <Globe3D className="absolute inset-0" />
            </Suspense>
          </div>

          <div className="order-2 lg:order-1">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1 className="mt-3 text-[2.6rem] leading-[1.05] sm:text-6xl">
              <span className="gold-text">{t.title}</span>
            </h1>
            <p className="mt-4 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
              <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-emerald-400 text-emerald-400" aria-hidden="true" />
              {t.role}
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">{t.subtitle}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground/80">{t.availability}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg" className="h-12 px-6 shadow-[0_18px_40px_-18px] shadow-primary/70">
                <a href={CV_URL} download>
                  <Download className="h-4 w-4" aria-hidden="true" />
                  {t.buttons.cv}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 border-primary/40 bg-transparent px-6">
                <a href={MAILTO}>
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {t.buttons.hire}
                </a>
              </Button>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                {t.buttons.github}
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <LinkedinIcon className="h-3.5 w-3.5" />
                {t.buttons.linkedin}
              </a>
              <a
                href="#caakus"
                className="inline-flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
                {t.buttons.projects}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-6 px-4 sm:px-5">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 90}>
              <Tilt className="glass-3d h-full rounded-xl p-4 sm:p-6">
                <p className="font-display text-3xl leading-none text-foreground sm:text-5xl" style={{ transform: "translateZ(30px)" }}>
                  <span className="gold-text">
                    <CountUp value={s.value} decimals={s.decimals} suffix={s.suffix} locale={locale} />
                  </span>
                </p>
                <p className="mt-3 text-xs leading-5 text-muted-foreground sm:text-sm">{t.stats[i]?.label}</p>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-20 sm:px-5 sm:py-24">
        {/* Caakus */}
        <section id="caakus" className="scroll-mt-24">
          <Reveal>
            <Tilt max={3} lift={6} className="glass-3d overflow-hidden rounded-2xl">
              <div className="relative p-5 sm:p-10">
                <div className="halo pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
                <header className="relative flex flex-col gap-5 border-b border-border pb-7 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={caakusLogo}
                      alt="Caakus application logo"
                      className="h-16 w-16 shrink-0 rounded-xl border border-border object-cover shadow-lg sm:h-20 sm:w-20"
                      width={80}
                      height={80}
                    />
                    <div className="min-w-0">
                      <h2 className="text-4xl sm:text-5xl">{caakus.name}</h2>
                      <p className="mt-1 text-xs font-medium uppercase leading-5 tracking-[0.14em] text-primary">
                        {caakus.category}
                      </p>
                    </div>
                  </div>
                  <Button asChild size="lg" className="h-11 w-full px-5 sm:w-auto">
                    <a href={CAAKUS_URL} target="_blank" rel="noopener noreferrer">
                      <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-emerald-500 text-emerald-500" aria-hidden="true" />
                      {t.buttons.live}
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                </header>

                <div className="relative mt-8 grid gap-10 lg:grid-cols-[1.25fr_1fr]">
                  <div className="space-y-7">
                    <div>
                      <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        <Layers3 className="h-4 w-4 text-primary" aria-hidden="true" />
                        {t.labels.concept}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{caakus.concept}</p>
                    </div>
                    <div>
                      <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        <ServerCog className="h-4 w-4 text-primary" aria-hidden="true" />
                        {t.labels.challenge}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{caakus.challenge}</p>
                    </div>
                    <div>
                      <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        <Code2 className="h-4 w-4 text-primary" aria-hidden="true" />
                        {t.labels.achievements}
                      </h3>
                      <ul className="mt-3 space-y-3">
                        {caakus.achievements.map((a) => (
                          <li key={a} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                            <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <Database className="h-4 w-4 text-primary" aria-hidden="true" />
                      {t.labels.stack}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {caakus.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-border bg-secondary/70 px-3 py-1.5 text-xs text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-8 grid gap-3">
                      {[
                        { Icon: Globe2, value: <CountUp value={190} suffix="+" locale={locale} />, label: t.stats[2]?.label },
                        { Icon: Activity, value: <CountUp value={1.8} decimals={1} suffix=" M" locale={locale} />, label: t.stats[1]?.label },
                        { Icon: ShieldCheck, value: <>&lt; 1 s</>, label: t.moderationLabel },
                      ].map(({ Icon, value, label }, i) => (
                        <Tilt key={i} max={8} lift={10} className="flex items-center gap-4 rounded-xl border border-border bg-background/40 p-4">
                          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-accent/30 bg-accent/10">
                            <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                          </span>
                          <p className="min-w-0 text-sm leading-6 text-muted-foreground">
                            <span className="block font-display text-2xl leading-tight text-foreground">{value}</span>
                            {label}
                          </p>
                        </Tilt>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          </Reveal>

          {/* Proof */}
          <div className="mt-16">
            <Reveal>
              <SectionHeading title={t.proof.title} lead={t.proof.lead} />
            </Reveal>
            <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-8">
              {PROOF_IMAGES.map((src, i) => (
                <Reveal key={src} delay={(i % 2) * 120}>
                  <figure>
                    <button
                      type="button"
                      onClick={() => setZoom(i)}
                      className={`screen-3d ${i % 2 ? "alt" : ""} group relative block w-full overflow-hidden rounded-xl border border-border bg-white text-left shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)] outline-none focus-visible:ring-2 focus-visible:ring-primary`}
                      aria-label={`${t.proof.captions[i]} — ${t.proof.enlarge}`}
                    >
                      <div className="flex items-center gap-1.5 border-b border-black/10 bg-neutral-100 px-3 py-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      </div>
                      <img src={src} alt={t.proof.captions[i]} loading="lazy" className="block w-full" />
                      <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 text-[11px] text-white opacity-90 transition-opacity group-hover:opacity-100">
                        <Maximize2 className="h-3 w-3" aria-hidden="true" />
                        {t.proof.enlarge}
                      </span>
                    </button>
                    <figcaption className="mt-3 text-sm text-muted-foreground">{t.proof.captions[i]}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Dadadu */}
        <section id="dadadu" className="mt-28 scroll-mt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal className="order-2 lg:order-1">
              <div className="relative mx-auto w-[220px] sm:w-[250px]">
                <div className="absolute -inset-10 rounded-full bg-fuchsia-500/20 blur-3xl" aria-hidden="true" />
                <div className="phone-3d relative rounded-[2.6rem] border border-white/15 bg-neutral-950 p-2.5 shadow-[0_50px_90px_-30px_rgba(0,0,0,0.95)]">
                  <div className="absolute left-1/2 top-3.5 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-black" aria-hidden="true" />
                  <img
                    src={dadaduStore}
                    alt="Dadadu app store screenshot: Find your vibe"
                    loading="lazy"
                    className="block aspect-[9/19.5] w-full rounded-[2rem] object-cover"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal className="order-1 lg:order-2" delay={100}>
              <div className="flex items-center gap-4">
                <img
                  src={dadaduLogo}
                  alt="Dadadu application logo"
                  className="h-16 w-16 shrink-0 rounded-xl border border-border object-cover shadow-lg"
                  width={64}
                  height={64}
                />
                <div className="min-w-0">
                  <h2 className="text-4xl sm:text-5xl">{dadadu.name}</h2>
                  <p className="mt-1 text-xs font-medium uppercase leading-5 tracking-[0.14em] text-primary">{dadadu.category}</p>
                </div>
              </div>
              <p className="mt-5 inline-flex items-start gap-2 rounded-lg border border-amber-400/30 bg-amber-400/10 px-3 py-2 text-xs leading-5 text-amber-200">
                <Store className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                {t.dadaduNote}
              </p>
              <p className="mt-6 text-sm leading-7 text-muted-foreground">{dadadu.concept}</p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                <span className="font-semibold text-foreground">{t.labels.challenge}: </span>
                {dadadu.challenge}
              </p>
              <ul className="mt-5 space-y-3">
                {dadadu.achievements.map((a) => (
                  <li key={a} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {dadadu.stack.map((tech) => (
                  <span key={tech} className="rounded-md border border-border bg-secondary/70 px-3 py-1.5 text-xs text-secondary-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Practices */}
        <section className="mt-28 border-t border-border pt-12">
          <Reveal>
            <div className="flex items-center gap-3">
              <Braces className="h-5 w-5 text-primary" aria-hidden="true" />
              <h2 className="text-3xl">{t.practicesTitle}</h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{t.practicesLead}</p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {PRACTICES.map(({ label, Icon }) => (
                <Tilt key={label} max={10} lift={10} className="glass-3d rounded-lg px-4 py-4">
                  <span className="flex items-center gap-2.5 text-sm font-medium">
                    <Icon className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {label}
                  </span>
                </Tilt>
              ))}
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <section className="mt-28">
          <Reveal>
            <Tilt max={3} lift={8} className="glass-3d relative overflow-hidden rounded-2xl">
              <div className="halo pointer-events-none absolute inset-0" aria-hidden="true" />
              <div className="relative flex flex-col items-start gap-8 p-6 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-xl">
                  <h2 className="text-4xl sm:text-5xl">
                    <span className="gold-text">{t.ctaTitle}</span>
                  </h2>
                  <p className="mt-4 text-base leading-7 text-muted-foreground">{t.ctaLead}</p>
                </div>
                <div className="flex w-full flex-col gap-3 sm:w-auto">
                  <Button asChild size="lg" className="h-12 px-6">
                    <a href={MAILTO}>
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      {t.cta}
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="h-12 border-primary/40 bg-transparent px-6">
                    <a href={CV_URL} download>
                      <Download className="h-4 w-4" aria-hidden="true" />
                      {t.buttons.cv}
                    </a>
                  </Button>
                </div>
              </div>
            </Tilt>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-border px-5 py-10 text-center text-xs text-muted-foreground">
        <p>Bryan Lewis Dongue Ndiffo — {t.footerRole}</p>
        <p className="mt-3 flex items-center justify-center gap-4">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            GitHub
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            LinkedIn
          </a>
          <a href={`mailto:${EMAIL}`} className="hover:text-foreground">
            {EMAIL}
          </a>
        </p>
        <p className="mt-3">© {new Date().getFullYear()} Bryan Lewis Dongue Ndiffo</p>
      </footer>

      <Dialog open={zoom !== null} onOpenChange={(open) => !open && setZoom(null)}>
        <DialogContent className="max-w-[min(96vw,1200px)] border-border bg-card p-2 sm:p-3">
          <DialogTitle className="sr-only">{zoom !== null ? t.proof.captions[zoom] : ""}</DialogTitle>
          <DialogDescription className="sr-only">{t.proof.lead}</DialogDescription>
          {zoom !== null ? (
            <figure>
              <img src={PROOF_IMAGES[zoom]} alt={t.proof.captions[zoom]} className="max-h-[80vh] w-full rounded-md bg-white object-contain" />
              <figcaption className="px-1 pb-1 pt-3 text-sm text-muted-foreground">{t.proof.captions[zoom]}</figcaption>
            </figure>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
