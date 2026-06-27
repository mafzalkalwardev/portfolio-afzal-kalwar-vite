import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Cpu, Globe, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12 } }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Text */}
          <div>
            <motion.p
              custom={0} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="section-label mb-4"
            >// About Me</motion.p>

            <motion.h2
              custom={1} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="section-heading"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", marginBottom: 24, lineHeight: 1.15 }}
            >
              Engineer. Builder.<br />Problem Solver.
            </motion.h2>

            <motion.div
              custom={2} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              style={{ color: "#94a3b8", lineHeight: 1.85, fontSize: 15, display: "flex", flexDirection: "column", gap: 16 }}
            >
              <p>
                I'm a <span style={{ color: "#22d3ee" }}>Full-Stack Developer and Automation Engineer</span> based in Pakistan, currently completing my ADSCS degree at Air University Islamabad. I build practical software systems — not demos, not tutorials. Systems that run in production and solve real business problems.
              </p>
              <p>
                My core work sits at the intersection of automation, AI, and web systems. I've built <span style={{ color: "#34d399" }}>browser automation tools</span>, scraping pipelines, AI dispatch agents, CRM dashboards, and logistics tech platforms — mostly for clients with real operational challenges.
              </p>
              <p>
                Currently expanding into <span style={{ color: "#60a5fa" }}>.NET, C++, DSA, and x86 Assembly</span> — getting comfortable at the systems level. The goal is to become a complete engineer who can operate from the OS layer all the way to the deployed SaaS product.
              </p>
            </motion.div>

            <motion.div
              custom={3} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="flex items-center gap-3 mt-8 p-4 rounded-xl"
              style={{ background: "rgba(34,211,238,0.05)", border: "1px solid rgba(34,211,238,0.15)" }}
            >
              <GraduationCap size={20} color="#22d3ee" />
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#e2e8f0" }}>Air University Islamabad</div>
                <div style={{ fontSize: 12, color: "#64748b" }}>ADSCS — About to Graduate</div>
              </div>
            </motion.div>
          </div>

          {/* Right: Cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: <Zap size={22} color="#22d3ee" />,
                title: "Automation First",
                desc: "Every repetitive process is an opportunity. I build tools that handle scale without human bottlenecks.",
                color: "rgba(34,211,238,0.08)",
                border: "rgba(34,211,238,0.2)",
              },
              {
                icon: <Globe size={22} color="#34d399" />,
                title: "Full-Stack Capable",
                desc: "From MongoDB schemas to React interfaces — I own the entire vertical of a product.",
                color: "rgba(52,211,153,0.08)",
                border: "rgba(52,211,153,0.2)",
              },
              {
                icon: <Cpu size={22} color="#60a5fa" />,
                title: "AI Integration",
                desc: "STT/TTS, ML models, AI call analytics, and workflow AI — integrating intelligence into everyday systems.",
                color: "rgba(96,165,250,0.08)",
                border: "rgba(96,165,250,0.2)",
              },
              {
                icon: <GraduationCap size={22} color="#a78bfa" />,
                title: "Systems Learner",
                desc: "Currently going deep into C++, DSA, MASM, and systems programming to master the machine.",
                color: "rgba(167,139,250,0.08)",
                border: "rgba(167,139,250,0.2)",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                custom={i + 4} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
                className="glass-hover rounded-xl p-5"
                style={{ background: card.color, border: `1px solid ${card.border}` }}
              >
                <div style={{ marginBottom: 12 }}>{card.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#e2e8f0", marginBottom: 6 }}>{card.title}</div>
                <div style={{ fontSize: 12, color: "#64748b", lineHeight: 1.7 }}>{card.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
