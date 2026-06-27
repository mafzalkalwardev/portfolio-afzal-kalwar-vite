import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Github, ExternalLink, X, ChevronRight, Clock } from "lucide-react";
import { projects } from "../data";

const CATEGORIES = ["All", "Automation", "Scraping", "AI", "AI/ML", "Full-Stack", "Coming Soon"];

const colorMap = {
  cyan: { bg: "rgba(34,211,238,0.08)", border: "rgba(34,211,238,0.25)", badge: "#22d3ee", badgeBg: "rgba(34,211,238,0.12)" },
  emerald: { bg: "rgba(52,211,153,0.08)", border: "rgba(52,211,153,0.25)", badge: "#34d399", badgeBg: "rgba(52,211,153,0.12)" },
  purple: { bg: "rgba(167,139,250,0.08)", border: "rgba(167,139,250,0.25)", badge: "#a78bfa", badgeBg: "rgba(167,139,250,0.12)" },
  amber: { bg: "rgba(251,191,36,0.08)", border: "rgba(251,191,36,0.25)", badge: "#fbbf24", badgeBg: "rgba(251,191,36,0.12)" },
  blue: { bg: "rgba(96,165,250,0.08)", border: "rgba(96,165,250,0.25)", badge: "#60a5fa", badgeBg: "rgba(96,165,250,0.12)" },
  teal: { bg: "rgba(45,212,191,0.08)", border: "rgba(45,212,191,0.25)", badge: "#2dd4bf", badgeBg: "rgba(45,212,191,0.12)" },
  pink: { bg: "rgba(244,114,182,0.08)", border: "rgba(244,114,182,0.25)", badge: "#f472b6", badgeBg: "rgba(244,114,182,0.12)" },
  gray: { bg: "rgba(255,255,255,0.03)", border: "rgba(255,255,255,0.1)", badge: "#64748b", badgeBg: "rgba(100,116,139,0.1)" },
};

function ProjectModal({ project, onClose }) {
  const pal = colorMap[project.color] || colorMap.cyan;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-backdrop"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-2xl w-full"
        style={{
          maxWidth: 680,
          maxHeight: "85vh",
          overflowY: "auto",
          background: "#0d1117",
          border: `1px solid ${pal.border}`,
          padding: 0,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div style={{ padding: "24px 28px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span style={{ fontSize: 26 }}>{project.emoji}</span>
                <span style={{
                  padding: "3px 12px", borderRadius: 9999, fontSize: 11, fontWeight: 600,
                  color: pal.badge, background: pal.badgeBg, fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.08em", textTransform: "uppercase"
                }}>
                  {project.category}
                </span>
                {project.comingSoon && (
                  <span style={{ padding: "3px 12px", borderRadius: 9999, fontSize: 11, fontWeight: 600, color: "#64748b", background: "rgba(100,116,139,0.1)", display: "flex", alignItems: "center", gap: 4 }}>
                    <Clock size={10} /> Coming Soon
                  </span>
                )}
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: "#e2e8f0", fontFamily: "'Syne', sans-serif" }}>
                {project.title}
              </h3>
            </div>
            <button onClick={onClose} style={{ padding: 8, border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, background: "rgba(255,255,255,0.04)", cursor: "pointer" }}>
              <X size={16} color="#94a3b8" />
            </button>
          </div>
        </div>

        {/* Modal body */}
        <div style={{ padding: "24px 28px" }}>
          <div className="grid gap-6">
            <div>
              <h4 style={{ fontSize: 11, color: "#64748b", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>Problem</h4>
              <p style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.7 }}>{project.problem}</p>
            </div>
            <div>
              <h4 style={{ fontSize: 11, color: "#64748b", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>Solution</h4>
              <p style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.7 }}>{project.solution}</p>
            </div>
            <div>
              <h4 style={{ fontSize: 11, color: "#64748b", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Key Features</h4>
              <div className="grid grid-cols-2 gap-2">
                {project.features.map((f) => (
                  <div key={f} className="flex items-center gap-2" style={{ fontSize: 13, color: "#94a3b8" }}>
                    <ChevronRight size={12} color={pal.badge} />
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: 11, color: "#64748b", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-8">
            {project.github ? (
              <a href={project.github} target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: 13, padding: "10px 20px" }}>
                <Github size={14} /> View on GitHub
              </a>
            ) : (
              <button disabled className="btn-outline" style={{ opacity: 0.4, cursor: "not-allowed", fontSize: 13, padding: "10px 20px" }}>
                <Clock size={14} /> Coming Soon
              </button>
            )}
            {project.demo ? (
              <a href={project.demo} target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: 13, padding: "10px 20px" }}>
                <ExternalLink size={14} /> Live Demo
              </a>
            ) : null}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, onClick }) {
  const pal = colorMap[project.color] || colorMap.cyan;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      onClick={() => !project.comingSoon && onClick(project)}
      className="rounded-xl p-5 flex flex-col"
      style={{
        background: pal.bg,
        border: `1px solid ${pal.border}`,
        cursor: project.comingSoon ? "default" : "pointer",
        position: "relative",
        overflow: "hidden",
        minHeight: 260,
        transition: "all 0.3s ease",
      }}
    >
      {project.featured && (
        <div style={{
          position: "absolute", top: 14, right: 14,
          padding: "2px 10px", borderRadius: 9999, fontSize: 10, fontWeight: 600,
          color: pal.badge, background: pal.badgeBg, fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: "0.08em", textTransform: "uppercase"
        }}>Featured</div>
      )}
      {project.comingSoon && (
        <div style={{
          position: "absolute", top: 14, right: 14,
          padding: "2px 10px", borderRadius: 9999, fontSize: 10, fontWeight: 600,
          color: "#64748b", background: "rgba(100,116,139,0.1)", display: "flex", alignItems: "center", gap: 4
        }}>
          <Clock size={9} /> In Progress
        </div>
      )}

      <div className="flex items-center gap-3 mb-4">
        <span style={{ fontSize: 24 }}>{project.emoji}</span>
        <span style={{
          padding: "2px 10px", borderRadius: 9999, fontSize: 10, fontWeight: 600,
          color: pal.badge, background: pal.badgeBg, fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: "0.06em", textTransform: "uppercase"
        }}>{project.category}</span>
      </div>

      <h3 style={{ fontSize: 16, fontWeight: 700, color: "#e2e8f0", marginBottom: 8, fontFamily: "'Syne', sans-serif", lineHeight: 1.3 }}>
        {project.title}
      </h3>
      <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.65, marginBottom: 16, flex: 1 }}>
        {project.problem}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.slice(0, 4).map((t) => (
          <span key={t} className="tech-badge" style={{ fontSize: 10, padding: "2px 8px" }}>{t}</span>
        ))}
        {project.tech.length > 4 && (
          <span className="tech-badge" style={{ fontSize: 10, padding: "2px 8px" }}>+{project.tech.length - 4}</span>
        )}
      </div>

      {!project.comingSoon && (
        <div className="flex items-center gap-2 mt-auto pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <span style={{ fontSize: 12, color: pal.badge, fontWeight: 600 }}>View Case Study</span>
          <ChevronRight size={13} color={pal.badge} />
        </div>
      )}
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [modal, setModal] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = filter === "All"
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <>
      <section id="projects" ref={ref} className="relative py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="section-label mb-4">// Case Studies</p>
            <h2 className="section-heading" style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.15 }}>
              Featured Projects
            </h2>
            <p style={{ color: "#64748b", marginTop: 12, fontSize: 15 }}>
              Click any card to view the full case study
            </p>
          </motion.div>

          {/* Filter buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all ${filter === cat ? "filter-btn-active" : ""}`}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: filter === cat ? undefined : "rgba(255,255,255,0.03)",
                  color: filter === cat ? undefined : "#64748b",
                  cursor: "pointer",
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Project grid */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <ProjectCard key={p.id} project={p} onClick={setModal} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/mafzalkalwardev"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              <Github size={15} /> View All 27+ Repos on GitHub
            </a>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {modal && <ProjectModal project={modal} onClose={() => setModal(null)} />}
      </AnimatePresence>
    </>
  );
}
