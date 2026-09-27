/* Quiet Signal: editorial product-launch composition with warm mineral canvas, oversized type, moss signals, and atmospheric project panels. */
import { useEffect, useRef } from "react";
import { ArrowDown, ArrowDownRight, ArrowUpRight, Compass, Github, Globe2, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";

const projectGroups = [
  {
    title: "Applied AI & intelligent interfaces",
    description: "End-to-end LLM pipelines that turn unstructured inputs into structured decisions — with evaluation harnesses, human-in-the-loop controls, and a relentless focus on output clarity.",
    visual: "aurora",
    number: "01",
    tags: ["LLM workflows", "Python", "Evaluation", "RAG"],
    project: "Aurora / research copilot",
  },
  {
    title: "Product systems & frontend craft",
    description: "Component-driven interfaces built on React and TypeScript, designed around real user flows — responsive, accessible, and shaped by a product-first mindset.",
    visual: "atlas",
    number: "02",
    tags: ["React", "TypeScript", "Design systems", "Figma"],
    project: "Atlas / visual knowledge base",
  },
  {
    title: "Tools for a faster build loop",
    description: "Internal CLIs, CI integrations, and developer utilities that compress the feedback cycle — less ceremony, faster iteration, cleaner deploys.",
    visual: "orbit",
    number: "03",
    tags: ["Node.js", "APIs", "Automation", "CI/CD"],
    project: "Orbit / release cockpit",
  },
];

const skills = ["React", "TypeScript", "Python", "LLM APIs", "Next.js", "Figma", "Git", "SQL", "Node.js", "Product thinking"];

export default function Home() {
  const topbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (topbarRef.current) {
        if (window.scrollY > 60) {
          topbarRef.current.classList.add("scrolled");
        } else {
          topbarRef.current.classList.remove("scrolled");
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="site-shell">
      <header ref={topbarRef} className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Aabhas home">
          <span className="brand-mark"><span>A</span><i /></span>
          <span className="brand-name">Aabhas</span>
        </a>
        <nav className="desktop-nav">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#now">Now</a>
        </nav>
        <a className="nav-cta" href="mailto:aabhas@example.com">Let&apos;s talk <ArrowUpRight size={13} /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="live-dot" /> Building at the edge of software &amp; intelligence</p>
          <h1>Useful software,<br /><em>quietly ambitious.</em></h1>
          <p className="hero-summary">I&apos;m Aabhas — a third-year IT student exploring software engineering, AI, and the small details that make digital tools feel obvious.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Explore the work <ArrowDown size={15} /></a>
            <a className="text-link" href="#about">A little about me <ArrowUpRight size={15} /></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Atmospheric alpine landscape">
          <div className="hero-glass">
            <div className="glass-top"><span>✦ aabhas.systems</span><span>Live / 2026</span></div>
            <div className="glass-center"><span className="glass-orb" /><span>Ideas in progress</span></div>
            <div className="glass-bottom"><span>Curiosity</span><span>Precision</span><span>Follow-through</span></div>
          </div>
          <div className="image-caption">A calm surface for restless ideas <ArrowDownRight size={12} aria-hidden="true" /></div>
        </div>
      </section>

      <section className="signal-strip" id="about">
        <div className="strip-item"><span className="strip-icon"><Compass size={15} aria-hidden="true" /></span><span><b>Currently</b> learning by building</span></div>
        <div className="strip-item"><span className="strip-icon"><Globe2 size={15} aria-hidden="true" /></span><span><b>Based in</b> India · UTC +5:30</span></div>
        <div className="strip-item"><span className="strip-icon"><ArrowUpRight size={15} aria-hidden="true" /></span><span><b>Open to</b> thoughtful collaborations</span></div>
      </section>

      <section className="intro-section">
        <div className="section-kicker">/ 01 — A working point of view</div>
        <div className="intro-layout">
          <h2>I build useful things for the space between <span>software</span> and intelligence.</h2>
          <div className="intro-aside"><p>Good technology doesn&apos;t ask to be admired. It earns its place by making a hard thing feel lighter.</p><a href="mailto:aabhas@example.com" className="round-link">Say hello <ArrowUpRight size={16} /></a></div>
        </div>
      </section>

      <section className="showcase" id="now">
        <div className="showcase-copy">
          <div className="section-kicker light">/ 02 — A closer look</div>
          <h2>The work is<br /><span>in the details.</span></h2>
          <p>From first sketch to final interaction, I care about the invisible decisions: the right abstraction, the clearer sentence, the extra half-second saved.</p>
          <a className="button button-light" href="#work">See selected work <ArrowUpRight size={15} /></a>
        </div>
        <div className="showcase-notes">
          <div className="note"><span>01</span><p>Make complexity legible.</p></div>
          <div className="note"><span>02</span><p>Keep humans in the loop.</p></div>
          <div className="note"><span>03</span><p>Ship, learn, repeat.</p></div>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading"><div><div className="section-kicker">/ 03 — Selected explorations</div><h2>Work with a<br /><span>point of view.</span></h2></div><p className="heading-aside">A few directions I&apos;ve been taking seriously. Each one starts with a question, not a stack.</p></div>
        <div className="project-list">
          {projectGroups.map((item) => <article className="project-card" key={item.number}>
            <div className={`project-visual project-visual-${item.visual}`} aria-label={`${item.project} visual`}><span className="project-number">{item.number}</span><span className="project-link" aria-hidden="true"><ArrowUpRight size={18} /></span></div>
            <div className="project-meta"><div><p className="project-name">{item.project}</p><h3>{item.title}</h3><p className="project-description">{item.description}</p></div><div className="tag-list">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
          </article>)}
        </div>
      </section>

      <section className="skills-section">
        <div className="skills-top"><div className="section-kicker">/ 04 — The toolkit</div><Sparkles size={20} strokeWidth={1.5} /></div>
        <div className="skills-layout"><h2>Curious about<br /><span>the whole stack.</span></h2><div className="skill-cloud">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></div>
      </section>

      <section className="closing-section">
        <p className="eyebrow">A small signal from the studio</p>
        <h2>Have a good<br /><em>problem?</em></h2>
        <p className="closing-copy">I&apos;m always interested in useful questions, early ideas, and teams who care about the details.</p>
        <a className="button button-dark" href="mailto:aabhas@example.com">Start a conversation <Mail size={15} /></a>
      </section>

      <footer className="footer"><a className="brand" href="#top"><span className="brand-mark"><span>A</span><i /></span><span className="brand-name">Aabhas</span></a><span className="footer-note">Designed, built, and still learning.</span><div className="footer-links"><a href="https://github.com" aria-label="GitHub"><Github size={17} /></a><a href="https://linkedin.com" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="mailto:aabhas@example.com" aria-label="Email"><Mail size={17} /></a></div></footer>
      <div className="side-tab"><MapPin size={12} /> India / 2026</div>
    </main>
  );
}
