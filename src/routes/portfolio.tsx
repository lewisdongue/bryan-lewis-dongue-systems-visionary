import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LANGS, resolveLang, type Lang } from "@/lib/content";
import { PORTFOLIO_COPY } from "@/lib/portfolio-content";
import { Button } from "@/components/ui/button";
import { Braces, Check, CloudCog, Code2, Database, GitBranch, Layers3, Radio, ServerCog } from "lucide-react";
import caakusLogo from "@/assets/caakus-logo.jpg";
import dadaduLogo from "@/assets/dadadu-logo.jpg";

const PORTFOLIO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Engineering Portfolio — Bryan Lewis Dongue Ndiffo",
  description:
    "Engineering portfolio of Bryan Lewis Dongue Ndiffo: Caakus real-time web infrastructure and Dadadu cross-platform social app, built with modern cloud architectures.",
  url: "https://www.lewisdongue.com/portfolio",
  about: { "@type": "Person", name: "Bryan Lewis Dongue Ndiffo", url: "https://www.lewisdongue.com/" },
  hasPart: [
    {
      "@type": "SoftwareApplication",
      name: "Caakus",
      applicationCategory: "SocialNetworkingApplication",
      description: "A real-time video communication web platform integrating a financial reward economy.",
      author: { "@type": "Person", name: "Bryan Lewis Dongue Ndiffo" },
    },
    {
      "@type": "MobileApplication",
      name: "Dadadu",
      applicationCategory: "SocialNetworkingApplication",
      operatingSystem: "iOS, Android",
      description:
        "A social networking mobile app based on 20-second vertical videos and affinity matchmaking with a virtual economy.",
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
          "Engineering portfolio of Bryan Lewis Dongue Ndiffo: Caakus real-time web infrastructure and Dadadu cross-platform social app. Building production-ready applications with modern cloud architectures.",
      },
      { property: "og:title", content: "Engineering Portfolio — Bryan Lewis Dongue Ndiffo" },
      {
        property: "og:description",
        content:
          "Caakus real-time web infrastructure and Dadadu cross-platform social app, built with TypeScript, Flutter and modern cloud architectures.",
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
];

function PortfolioPage() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    setLang(resolveLang(navigator.language));
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const portfolio = PORTFOLIO_COPY[lang];
  const logos = [caakusLogo, dadaduLogo];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <Link to="/" className="truncate font-display text-lg tracking-tight">
            Bryan Lewis Dongue Ndiffo
          </Link>
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

      <main className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="max-w-3xl">
          <p className="eyebrow">{portfolio.eyebrow}</p>
          <h1 className="mt-3 text-4xl sm:text-5xl">{portfolio.title}</h1>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            {portfolio.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {portfolio.projects.map((project, projectIndex) => (
            <article key={project.name} className="elite-card flex h-full flex-col rounded-lg p-6 sm:p-8">
              <header className="flex items-center gap-4 border-b border-border pb-6">
                <img
                  src={logos[projectIndex]}
                  alt={`${project.name} application logo`}
                  title={`${project.name} official application logo`}
                  className="h-16 w-16 shrink-0 rounded-lg border border-border object-cover"
                  width={64}
                  height={64}
                />
                <div className="min-w-0">
                  <h2 className="text-3xl">{project.name}</h2>
                  <p className="mt-1 text-xs font-medium uppercase leading-5 tracking-[0.14em] text-primary">
                    {project.category}
                  </p>
                </div>
              </header>

              <div className="mt-7 flex-1 space-y-7">
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Layers3 className="h-4 w-4 text-primary" aria-hidden="true" />
                    {portfolio.labels.concept}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{project.concept}</p>
                </div>
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <ServerCog className="h-4 w-4 text-primary" aria-hidden="true" />
                    {portfolio.labels.challenge}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{project.challenge}</p>
                </div>
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Code2 className="h-4 w-4 text-primary" aria-hidden="true" />
                    {portfolio.labels.achievements}
                  </h3>
                  <ul className="mt-3 space-y-3">
                    {project.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Database className="h-4 w-4 text-primary" aria-hidden="true" />
                    {portfolio.labels.stack}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-border bg-secondary px-3 py-1.5 text-xs text-secondary-foreground"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-10 border-t border-border pt-8">
          <div className="flex items-center gap-3">
            <Braces className="h-5 w-5 text-primary" aria-hidden="true" />
            <h2 className="text-2xl">{portfolio.practicesTitle}</h2>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{portfolio.practicesLead}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {PRACTICES.map(({ label, Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs font-medium"
              >
                <Icon className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </section>
      </main>

      <div className="border-t border-border bg-card/35">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-5 py-14 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm text-muted-foreground">{portfolio.subtitle}</p>
          <Button asChild size="lg" className="h-12 shrink-0 px-6">
            <Link to="/" hash="profils">
              {portfolio.cta}
            </Link>
          </Button>
        </div>
      </div>

      <footer className="border-t border-border px-5 py-10 text-center text-xs text-muted-foreground">
        <p>Bryan Lewis Dongue Ndiffo — Founder &amp; CEO, Caakus, Worms, Germany.</p>
        <p className="mt-2">© {new Date().getFullYear()} Bryan Lewis Dongue Ndiffo</p>
      </footer>
    </div>
  );
}
