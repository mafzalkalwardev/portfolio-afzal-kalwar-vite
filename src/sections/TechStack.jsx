import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { techStack } from "../data";

const categoryColors = {
  Languages: { bg: "rgba(34,211,238,0.08)", border: "rgba(34,211,238,0.2)", dot: "#22d3ee" },
  Frontend: { bg: "rgba(52,211,153,0.08)", border: "rgba(52,211,153,0.2)", dot: "#34d399" },
  Backend: { bg: "rgba(96,165,250,0.08)", border: "rgba(96,165,250,0.2)", dot: "#60a5fa" },
  Database: { bg: "rgba(167,139,250,0.08)", border: "rgba(167,139,250,0.2)", dot: "#a78bfa" },
  Automation: { bg: "rgba(251,146,60,0.08)", border: "rgba(251,146,60,0.2)", dot: "#fb923c" },
  "AI / ML": { bg: "rgba(244,114,182,0.08)", border: "rgba(244,114,182,0.2)", dot: "#f472b6" },
  Tools: { bg: "rgba(34,211,238,0.06)", border: "rgba(34,211,238,0.15)", dot: "#22d3ee" },
  Exploring: { bg: "rgba(250,204,21,0.06)", border: "rgba(250,204,21,0.15)", dot: "#facc15" },
};

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="stack" ref={ref} className="relative py-28">
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent, rgba(34,211,238,0.02), transparent)" }} />
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">// Tools of Trade</p>
          <h2 className="section-heading" style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.15 }}>
            Tech Stack
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(techStack).map(([cat, items], ci) => {
            const palette = categoryColors[cat] || categoryColors.Tools;
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: ci * 0.08 }}
                className="rounded-xl p-5"
                style={{ background: palette.bg, border: `1px solid ${palette.border}` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: palette.dot }} />
                  <span style={{ fontSize: 11, fontWeight: 600, color: palette.dot, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    {cat}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                    >
                      <span style={{ fontSize: 13 }}>{item.icon}</span>
                      <span style={{ fontSize: 12, color: "#94a3b8", fontWeight: 500 }}>{item.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
