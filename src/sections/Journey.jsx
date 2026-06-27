import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { timeline, roadmap } from "../data";

export function Journey() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="journey" ref={ref} className="relative py-28">
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent, rgba(52,211,153,0.02), transparent)" }} />
      <div className="max-w-4xl mx-auto px-6 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-16">
          <p className="section-label mb-4">// My Path</p>
          <h2 className="section-heading" style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.15 }}>
            The Journey
          </h2>
        </motion.div>

        <div style={{ position: "relative" }}>
          {/* Center line */}
          <div style={{
            position: "absolute", left: "50%", top: 0, bottom: 0, width: 1,
            background: "linear-gradient(180deg, transparent, rgba(34,211,238,0.3), rgba(52,211,153,0.3), transparent)",
            transform: "translateX(-50%)"
          }} className="hidden md:block" />

          <div className="flex flex-col gap-12">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-6`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="rounded-xl p-5 glass-hover" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div style={{ fontSize: 10, color: "#22d3ee", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.15em", marginBottom: 6 }}>{item.year}</div>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: "#e2e8f0", marginBottom: 6, fontFamily: "'Syne', sans-serif" }}>{item.title}</h3>
                    <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>

                {/* Center node */}
                <div className="hidden md:flex w-12 h-12 rounded-full items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(34,211,238,0.1)", border: "2px solid rgba(34,211,238,0.3)", zIndex: 1, fontSize: 20 }}>
                  {item.icon}
                </div>
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" ref={ref} className="relative py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-12">
          <p className="section-label mb-4">// Academic Background</p>
          <h2 className="section-heading" style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.15 }}>Education</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}
          className="rounded-2xl p-8"
          style={{ background: "linear-gradient(135deg, rgba(34,211,238,0.06), rgba(52,211,153,0.04))", border: "1px solid rgba(34,211,238,0.2)" }}>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
              style={{ background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.2)" }}>
              🎓
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "#e2e8f0", fontFamily: "'Syne', sans-serif" }}>Air University Islamabad</h3>
                <span style={{ padding: "3px 12px", borderRadius: 9999, fontSize: 11, fontWeight: 600, color: "#34d399", background: "rgba(52,211,153,0.1)", fontFamily: "'JetBrains Mono', monospace" }}>
                  About to Graduate
                </span>
              </div>
              <div style={{ fontSize: 15, color: "#22d3ee", fontWeight: 500, marginBottom: 8 }}>
                ADSCS — Associate Degree in Computer Sciences
              </div>
              <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7 }}>
                Focus areas: Software Engineering · Databases · Algorithms · Automation · Systems Programming · Practical Application Development
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const progressColors = {
  cyan: "#22d3ee",
  emerald: "#34d399",
  purple: "#a78bfa",
  blue: "#60a5fa",
  orange: "#fb923c",
  pink: "#f472b6",
};

export function Roadmap() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="roadmap" ref={ref} className="relative py-28">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-16">
          <p className="section-label mb-4">// Where I'm Headed</p>
          <h2 className="section-heading" style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.15 }}>
            Current Learning Roadmap
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {roadmap.map((item, i) => {
            const col = progressColors[item.color] || "#22d3ee";
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-xl p-5"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#e2e8f0" }}>{item.title}</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: col, fontFamily: "'JetBrains Mono', monospace" }}>{item.progress}%</span>
                </div>

                {/* Progress bar */}
                <div style={{ height: 4, borderRadius: 4, background: "rgba(255,255,255,0.06)", overflow: "hidden", marginBottom: 14 }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${item.progress}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                    style={{ height: "100%", borderRadius: 4, background: `linear-gradient(90deg, ${col}, ${col}88)` }}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  {item.items.map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <div style={{ width: 4, height: 4, borderRadius: "50%", background: col, flexShrink: 0 }} />
                      <span style={{ fontSize: 12, color: "#64748b" }}>{s}</span>
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
