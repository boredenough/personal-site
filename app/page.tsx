import type { Metadata } from "next";
import ContributionGraph from "./contribution-graph";

export const metadata: Metadata = {
  title: "Pranav Shetty",
  description: "Pranav Shetty — Limitless. Bengaluru, India.",
};

const currentRoles = [
  { since: "2022—", role: "Head of Finance", organisation: "Fractal Experience" },
  { since: "2022—", role: "Head of Finance", organisation: "CBRC" },
  { since: "2019—", role: "Founder", organisation: "Margosa Capital" },
];

const experience = [
  {
    period: "2022—",
    role: "Head of Finance",
    organisation: "Fractal Experience",
    details: ["Maintaining accounts", "Budgeting and payroll", "Managing project finances", "Managing investor relations"],
  },
  {
    period: "2022—",
    role: "Head of Finance",
    organisation: "CBRC",
    details: ["Maintaining accounts", "Preparing quotations and invoices", "Budgeting and payroll", "Overseeing client payments", "Managing investor relations", "Supporting operations", "Building a vendor-management system"],
  },
  {
    period: "2019—",
    role: "Founder",
    organisation: "Margosa Capital",
    details: ["Distribution of mutual funds, portfolio management services, and alternative investment funds"],
  },
  {
    period: "2022—23",
    role: "Head of Finance",
    organisation: "NeoKitsch",
    details: ["Finance and operations", "Client acquisition and onboarding", "Website prototyping and development", "Brand strategy"],
  },
  { period: "2018—19", role: "Co-founder", organisation: "Nirlojyo", details: ["Sustainable fashion label"] },
  { period: "2018—19", role: "Founder", organisation: "Paryayavachi Creative", details: ["Branding agency"] },
];

const projects = [
  { year: "2024", name: "Trikona Design Studio", category: "Website", meta: "Figma · Framer", href: "https://www.trikonadesignstudio.com/" },
];

const credentials = [
  { issuer: "NISM", name: "Mutual Fund Distributor", series: "Series V-A", validUntil: "Valid until 2028" },
  { issuer: "NISM", name: "Equity Derivatives", series: "Series VIII", validUntil: "Valid until 2027" },
];

const toolGroups = [
  {
    name: "Design",
    items: [
      { name: "Figma", icon: "https://cdn.simpleicons.org/figma/8c908d" },
      { name: "Framer", icon: "https://cdn.simpleicons.org/framer/8c908d" },
      { name: "Paper", icon: "https://paper.design/favicon.ico" },
      { name: "Rayon", icon: "https://www.rayon.design/favicon.ico?e203994e09fc689a", tone: "invert" },
    ],
  },
  {
    name: "AI",
    items: [
      { name: "ChatGPT", icon: "https://api.iconify.design/simple-icons/openai.svg?color=%238c908d" },
      { name: "Claude", icon: "https://cdn.simpleicons.org/claude/8c908d" },
    ],
  },
  {
    name: "Productivity",
    items: [{ name: "Notion", icon: "https://cdn.simpleicons.org/notion/8c908d" }],
  },
  {
    name: "Development",
    items: [
      { name: "Cursor", icon: "https://cdn.simpleicons.org/cursor/8c908d" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github/8c908d" },
      { name: "Replit", icon: "https://cdn.simpleicons.org/replit/8c908d" },
    ],
  },
];

const selfTaughtLanguages = [
  { name: "English", capabilities: "Read · Write · Speak" },
  { name: "Tulu", capabilities: "Read · Write · Speak" },
  { name: "Kannada", capabilities: "Read · Write · Speak" },
  { name: "Hindi", capabilities: "Read · Write · Speak" },
  { name: "Telugu", capabilities: "Speak" },
];

const learningLanguages = [
  "Spanish",
  "French",
  "German",
  "Indonesian",
  "Japanese",
];

const programmingLanguages = [
  { name: "HTML", icon: "https://cdn.simpleicons.org/html5/8c908d" },
  { name: "CSS", icon: "https://cdn.simpleicons.org/css/8c908d" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/8c908d" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/8c908d" },
  { name: "C", icon: "https://cdn.simpleicons.org/c/8c908d" },
];

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Pranav Shetty, home">Pranav Shetty</a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <h1 id="hero-title">Pranav Shetty</h1>
          <p>Limitless</p>
          <p>Bengaluru, India</p>
          <div className="hero-social-links" aria-label="Social links">
            <a href="https://x.com/b0redenough" target="_blank" rel="noreferrer">X ↗</a>
            <a href="https://github.com/boredenough" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </section>

        <section aria-labelledby="current-title">
          <div className="section-heading">
            <h2 id="current-title">Current roles</h2>
            <span>03 roles</span>
          </div>
          <div className="data-list">
            {currentRoles.map((item) => (
              <div className="data-row" key={`${item.role}-${item.organisation}`}>
                <span className="muted tabular">{item.since}</span>
                <strong>{item.role}</strong>
                <span>{item.organisation}</span>
                <span className="current"><i aria-hidden="true" />Current</span>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" aria-labelledby="experience-title">
          <div className="section-heading">
            <h2 id="experience-title">Experience</h2>
            <span>Select a row for details</span>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <details key={`${item.period}-${item.organisation}`}>
                <summary>
                  <span className="muted tabular">{item.period}</span>
                  <strong>{item.role}</strong>
                  <span>{item.organisation}</span>
                  <span className="indicator" aria-hidden="true">+</span>
                </summary>
                <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              </details>
            ))}
          </div>
        </section>

        <section id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <h2 id="projects-title">Projects</h2>
            <span>Public work</span>
          </div>
          <div className="data-list">
            {projects.map((project) => (
              <div className="data-row" key={project.name}>
                <span className="muted tabular">{project.year}</span>
                <strong><a href={project.href} target="_blank" rel="noreferrer">{project.name} ↗</a></strong>
                <span>{project.category}</span>
                <span className="muted">{project.meta}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="github-activity" aria-labelledby="github-activity-title">
          <div className="section-heading">
            <h2 id="github-activity-title">GitHub activity</h2>
            <span>Last 12 months</span>
          </div>
          <ContributionGraph />
        </section>

        <section id="certificates" aria-labelledby="certificates-title">
          <div className="section-heading">
            <h2 id="certificates-title">Certificates</h2>
          </div>
          <div className="data-list">
            {credentials.map((credential) => (
              <div className="data-row" key={credential.series}>
                <span className="muted">{credential.issuer}</span>
                <strong>{credential.name}</strong>
                <span>{credential.series}</span>
                <span className="muted">{credential.validUntil}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="tools-technologies" aria-labelledby="tools-technologies-title">
          <div className="section-heading">
            <h2 id="tools-technologies-title">Tools &amp; technologies</h2>
          </div>
          <div className="capability-groups">
            {toolGroups.map((group) => (
              <div className="capability-group" key={group.name}>
                <h3>{group.name}</h3>
                <div className="capability-grid">
                  {group.items.map((item) => (
                    <div className="capability-item" key={item.name}>
                      <span className="logo-slot"><img className={item.tone ? `logo-${item.tone}` : undefined} src={item.icon} alt="" width="24" height="24" /></span>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="capability-group">
              <h3>Programming</h3>
              <div className="capability-grid">
                {programmingLanguages.map((item) => (
                  <div className="capability-item" key={item.name}>
                    <span className="logo-slot"><img src={item.icon} alt="" width="24" height="24" /></span>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="languages" aria-labelledby="languages-title">
          <div className="section-heading">
            <h2 id="languages-title">Languages</h2>
          </div>
          <div className="language-groups">
            <div className="language-group">
              <h3>Everyday languages</h3>
              <div className="language-rows">
                {selfTaughtLanguages.map((language) => (
                  <div className="language-row" key={language.name}>
                    <strong>{language.name}</strong>
                    <span>{language.capabilities}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="language-group">
              <h3>Learning on Duolingo</h3>
              <div className="learning-languages">
                {learningLanguages.map((language) => <span key={language}>{language}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact" aria-labelledby="contact-title">
          <div className="section-heading">
            <h2 id="contact-title">Contact</h2>
          </div>
          <a className="contact-row" href="mailto:pranavworkrelated@gmail.com">
            <span>Email</span>
            <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer><span>Pranav Shetty</span><span>Bengaluru, India</span></footer>
    </div>
  );
}
