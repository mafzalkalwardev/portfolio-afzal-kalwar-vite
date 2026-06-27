import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, ArrowRight } from "lucide-react";

const ROLES = [
  "Full-Stack Developer",
  "Automation Engineer",
  "AI Systems Builder",
  "Browser Automation Dev",
  "Web Scraping Engineer",
  "Logistics Tech Builder",
  "Workflow Automation Expert",
];

const TERMINAL_LINES = [
  { prompt: "$ ", cmd: "npm run build", delay: 0 },
  { prompt: "✓ ", cmd: "compiled 47 modules", delay: 800, color: "#34d399" },
  { prompt: "$ ", cmd: "python automate.py --target fiverr", delay: 1600 },
  { prompt: "✓ ", cmd: "scraped 2,847 leads", delay: 2400, color: "#34d399" },
  { prompt: "$ ", cmd: "playwright scrape --deep --screenshots", delay: 3200 },
  { prompt: "$ ", cmd: "git push origin main", delay: 4000 },
  { prompt: "✓ ", cmd: "deployed to production", delay: 4800, color: "#22d3ee" },
];

function TypingText({ texts }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) {
      const t = setTimeout(() => setPause(false), 1400);
      return () => clearTimeout(t);
    }
    const current = texts[idx];
    if (!deleting) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        setPause(true);
        setDeleting(true);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setIdx((i) => (i + 1) % texts.length);
      }
    }
  }, [displayed, deleting, pause, idx, texts]);

  return (
    <span className="glow-cyan" style={{ color: "#22d3ee", fontWeight: 700 }}>
      {displayed}<span className="cursor">|</span>
    </span>
  );
}

function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    TERMINAL_LINES.forEach((line) => {
      const t = setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
      }, line.delay);
      return () => clearTimeout(t);
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40, rotateY: -10 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="terminal float"
      style={{ width: "100%", maxWidth: 420, padding: "0" }}
    >
      {/* Terminal header */}
      <div
        style={{
          padding: "12px 16px",
          borderBottom: "1px solid rgba(34,211,238,0.1)",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e" }} />
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840" }} />
        <span style={{ marginLeft: 8, fontSize: 12, color: "#4a5568", fontFamily: "'JetBrains Mono', monospace" }}>
          afzal@dev ~ zsh
        </span>
      </div>
      {/* Terminal body */}
      <div style={{ padding: "16px 20px", minHeight: 180 }}>
        {visibleLines.map((line, i) => (
          <div key={i} style={{ display: "flex", gap: 4, marginBottom: 6 }}>
            <span style={{ color: line.color || "#22d3ee", fontFamily: "'JetBrains Mono', monospace", fontSize: 13 }}>
              {line.prompt}
            </span>
            <span style={{ color: line.color ? line.color : "#e2e8f0", fontFamily: "'JetBrains Mono', monospace", fontSize: 13 }}>
              {line.cmd}
            </span>
          </div>
        ))}
        {visibleLines.length > 0 && (
          <div style={{ display: "flex", gap: 4 }}>
            <span style={{ color: "#22d3ee", fontFamily: "'JetBrains Mono', monospace", fontSize: 13 }}>$ </span>
            <span className="cursor" style={{ color: "#22d3ee", fontFamily: "'JetBrains Mono', monospace", fontSize: 13 }}>▋</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
      style={{ paddingTop: 80 }}
    >
      {/* Gradient orbs */}
      <div className="orb" style={{ width: 600, height: 600, background: "rgba(34,211,238,0.06)", top: -100, left: -200 }} />
      <div className="orb" style={{ width: 500, height: 500, background: "rgba(52,211,153,0.05)", bottom: -100, right: -100 }} />
      <div className="orb" style={{ width: 300, height: 300, background: "rgba(96,165,250,0.07)", top: "40%", left: "50%" }} />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#34d399", animation: "pulse 2s ease-in-out infinite" }} />
              <span className="section-label">Available for projects</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(36px, 6vw, 72px)", lineHeight: 1.1, color: "#fff", marginBottom: 8 }}
            >
              Muhammad
              <br />
              <span className="section-heading">Afzal Kalwar</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontSize: "clamp(16px, 2.5vw, 22px)", marginBottom: 20, color: "#94a3b8", fontWeight: 400 }}
            >
              <TypingText texts={ROLES} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ fontSize: 16, color: "#64748b", lineHeight: 1.8, maxWidth: 500, marginBottom: 36 }}
            >
              Building systems that <span style={{ color: "#22d3ee" }}>automate workflows</span>, scale operations, and solve real-world business problems. From scraping pipelines to AI dispatch agents.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a href="#projects" onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-primary">
                View Projects <ArrowRight size={15} />
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-outline">
                Contact Me
              </a>
              <a href="https://github.com/mafzalkalwardev" target="_blank" rel="noreferrer" className="btn-outline" style={{ color: "#94a3b8", borderColor: "rgba(148,163,184,0.3)" }}>
                <Github size={15} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/muhammad-afzal-2670b527b/" target="_blank" rel="noreferrer" className="btn-outline" style={{ color: "#94a3b8", borderColor: "rgba(148,163,184,0.3)" }}>
                <Linkedin size={15} /> LinkedIn
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-6"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24 }}
            >
              {[["27+", "Repositories"], ["7+", "Live Projects"], ["4+", "Tech Domains"]].map(([val, lbl]) => (
                <div key={lbl}>
                  <div style={{ fontSize: 22, fontWeight: 700, color: "#22d3ee", fontFamily: "'Syne', sans-serif" }}>{val}</div>
                  <div style={{ fontSize: 12, color: "#475569", letterSpacing: "0.05em", textTransform: "uppercase" }}>{lbl}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Terminal */}
          <div className="flex justify-center lg:justify-end">
            <TerminalCard />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", color: "#334155", cursor: "pointer" }}
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
}
